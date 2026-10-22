#!/usr/bin/env node
/* ============================================================
   round-audit.js —— 每轮结束的全量审核 + 小结生成
   用法：
     node tools/oneoff/round-audit.js                 # 审核（不含 e2e）
     node tools/oneoff/round-audit.js --e2e           # 含主站 e2e（慢）
     node tools/oneoff/round-audit.js --round 1      # 指定轮次号
   产出：docs/ROUND-<n>-<date>.md（审核结论 + 小结）
   退出码：0 全绿 / 1 有失败项
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const https = require('https');

const ROOT = path.resolve(__dirname, '..', '..');
process.chdir(ROOT);
const ARGS = process.argv.slice(2);
const WITH_E2E = ARGS.includes('--e2e');
const roundArg = ARGS.find(a => a.startsWith('--round='));
const ROUND = roundArg ? roundArg.split('=')[1] : String(fs.existsSync(path.join(ROOT, 'docs', 'ROUND-1-2026-10-22.md')) ? '2' : '1');
const DATE = new Date().toISOString().slice(0, 10);

const results = [];
function run(label, cmd, opts) {
  const t0 = Date.now();
  let out = '', code = 0;
  try {
    out = execSync(cmd, { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 26, stdio: ['ignore', 'pipe', 'pipe'], ...(opts || {}) });
  } catch (e) {
    out = (e.stdout || '') + (e.stderr || '');
    code = e.status === undefined ? 1 : e.status;
  }
  const ms = Date.now() - t0;
  const pass = code === 0;
  results.push({ label, pass, ms, out: out.trim() });
  console.log((pass ? '  ✓ ' : '  ✗ ') + label.padEnd(34) + (ms + 'ms'));
  return pass;
}

/* ---------- 1. 知识源门禁 ---------- */
console.log('== 1. 知识源门禁 ==');
run('生成（gen-all）', 'node tools/mdgen/gen-all.js');
run('parity 源↔产物等价', 'node tools/mdgen/check-mdgen-parity.js');
run('知识总目录门禁', 'node tools/check/check-inventory.js');
run('frontmatter 门禁', 'node tools/check/check-frontmatter.js');
run('别名与交叉引用门禁', 'node/tools/check/check-alias.js'.replace('node/tools', 'node tools'));
run('中英同步门禁', 'node tools/check/check-i18n-sync.js');
run('出处门禁', 'node tools/check/check-sources.js');
run('覆盖矩阵生成', 'node tools/check/check-coverage.js');

/* ---------- 2. 幂等性 ---------- */
console.log('== 2. 幂等性 ==');
{
  const before = hashMd();
  try { execSync('node tools/mdgen/gen-all.js', { cwd: ROOT, stdio: 'ignore' }); } catch (e) { }
  const after = hashMd();
  const pass = before === after;
  results.push({ label: 'gen-all 幂等（连跑哈希不变）', pass, ms: 0, out: pass ? '内容哈希一致' : '内容发生变化' });
  console.log((pass ? '  ✓ ' : '  ✗ ') + 'gen-all 幂等（连跑哈希不变）');
}
function hashMd() {
  const c = require('crypto');
  const list = [];
  const walk = d => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (['node_modules', '.git', 'build'].includes(e.name)) continue;
      const abs = path.join(d, e.name);
      if (e.isDirectory()) { walk(abs); continue; }
      if (!e.name.endsWith('.md')) continue;
      if (abs.includes(path.join('_meta', 'inventory'))) continue;
      list.push(path.relative(ROOT, abs) + ':' + c.createHash('md5').update(fs.readFileSync(abs)).digest('hex'));
    }
  };
  walk(ROOT);
  list.sort();
  return c.createHash('md5').update(list.join('\n')).digest('hex');
}

/* ---------- 3. 清单与矩阵数据 ---------- */
console.log('== 3. 清单数据 ==');
let inv = { entries: [], subtopics: [] };
try {
  inv = JSON.parse(fs.readFileSync(path.join(ROOT, 'build', 'inventory.json'), 'utf8'));
  const byType = {}, byStatus = {}, byQuality = {};
  for (const e of inv.entries) {
    byType[e.type] = (byType[e.type] || 0) + 1;
    byStatus[e.status] = (byStatus[e.status] || 0) + 1;
    byQuality[e.quality] = (byQuality[e.quality] || 0) + 1;
  }
  const ok = inv.entries.length > 0 && inv.subtopics.length > 0;
  results.push({ label: '清单数据可用', pass: ok, ms: 0, out: inv.entries.length + ' 条目 / ' + inv.subtopics.length + ' 子主题' });
  console.log((ok ? '  ✓ ' : '  ✗ ') + '清单数据可用  ' + inv.entries.length + ' 条目 / ' + inv.subtopics.length + ' 子主题');
} catch (e) {
  results.push({ label: '清单数据可用', pass: false, ms: 0, out: e.message });
  console.log('  ✗ 清单数据读取失败：' + e.message);
}

/* ---------- 4. 主站门禁（不改主站，只校验契约不冲突） ---------- */
console.log('== 4. 主站（契约校验） ==');
const SITE = path.join(ROOT, '..', 'poyi-site');
if (fs.existsSync(SITE)) {
  run('主站 25 项门禁', 'node tools/qa-all.js', { cwd: SITE });
  if (WITH_E2E) run('主站 e2e（chromium）', 'npx playwright test --project=chromium --reporter=line', { cwd: SITE });
} else {
  console.log('  · 未找到主站 poyi-site，跳过');
}

/* ---------- 5. 分站仓状态 ---------- */
console.log('== 5. 分站仓 ==');
if (process.env.GITHUB_TOKEN) {
  const T = process.env.GITHUB_TOKEN;
  const api = (m, p) => new Promise((res, rej) => {
    const req = https.request({ hostname: 'api.github.com', path: p, method: m, headers: { 'Authorization': 'Bearer ' + T, Accept: 'application/vnd.github+json', 'User-Agent': 'round-audit' } },
      r => { let b = ''; r.on('data', c => b += c); r.on('end', () => { try { res(JSON.parse(b)); } catch (e) { res(null); } }); });
    req.on('error', rej); req.end();
  });
  api('GET', '/repos/poyinet/crypto/pages').then(p => {
    const ok = p && p.status === 'built' && p.cname === 'crypto.poyi.net';
    results.push({ label: '分站 Pages 状态', pass: !!ok, ms: 0, out: p ? p.status + ' / ' + p.cname : '查询失败' });
    console.log((ok ? '  ✓ ' : '  ✗ ') + '分站 Pages  ' + (p ? p.status + ' / ' + p.cname : '查询失败'));
    finish();
  }).catch(() => { console.log('  · API 查询失败，跳过'); finish(); });
} else {
  console.log('  · 未设 GITHUB_TOKEN，跳过远端校验');
  finish();
}

/* ---------- 汇总与小结 ---------- */
function finish() {
  const fails = results.filter(r => !r.pass);
  const L = [];
  L.push('# 第 ' + ROUND + ' 轮 · 审核与小结');
  L.push('');
  L.push('> 审核时间：' + new Date().toISOString() + ' · 审核器：`tools/oneoff/round-audit.js`' + (WITH_E2E ? '（含 e2e）' : '（不含 e2e）'));
  L.push('');
  L.push('## 一、审核结果');
  L.push('');
  L.push('| 检查项 | 结果 | 耗时 |');
  L.push('|---|---|---|');
  for (const r of results) L.push(`| ${r.label} | ${r.pass ? '✅ 通过' : '❌ 失败'} | ${r.ms} ms |`);
  L.push('');
  if (fails.length) {
    L.push('### 失败明细');
    L.push('');
    for (const f of fails) {
      L.push('**' + f.label + '**');
      L.push('');
      L.push('```');
      L.push(f.out.split('\n').slice(-12).join('\n'));
      L.push('```');
      L.push('');
    }
  }
  L.push('## 二、本轮小结');
  L.push('');
  L.push('| 指标 | 值 |');
  L.push('|---|---|');
  const inv2 = (() => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, 'build', 'inventory.json'), 'utf8')); } catch (e) { return { entries: [], subtopics: [] }; } })();
  L.push('| 清单条目 | ' + inv2.entries.length + ' |');
  L.push('| 子主题 | ' + inv2.subtopics.length + '（手写 ' + inv2.subtopics.filter(s => s.curated).length + '） |');
  L.push('| 审核项 | ' + results.length + ' 个，失败 ' + fails.length + ' |');
  L.push('');
  L.push('> 本文件由 `round-audit.js` 自动生成；人工结论请追加在文末「人工结论」段。');
  L.push('');
  L.push('## 三、人工结论');
  L.push('');
  L.push('（待填：本轮做了什么 / 改了什么 / 发现什么问题 / 下一步）');
  L.push('');
  const out = path.join(ROOT, 'docs', 'ROUND-' + ROUND + '-' + DATE + '.md');
  fs.writeFileSync(out, L.join('\n'), 'utf8');
  console.log('\n小结已写入 docs/ROUND-' + ROUND + '-' + DATE + '.md');
  console.log(fails.length ? '❌ ' + fails.length + ' 项失败' : '✅ 全部通过（' + results.length + ' 项）');
  process.exit(fails.length ? 1 : 0);
}
