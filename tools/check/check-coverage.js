#!/usr/bin/env node
/* ============================================================
   check-coverage.js —— 覆盖矩阵生成器（报告，不阻断）
   产出：docs/coverage-matrix.md（时代 × 技术域 热力矩阵 + 各清单统计 + 缺口队列）
   用法：node tools/check/check-coverage.js
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
process.chdir(ROOT);

const invPath = path.join(ROOT, 'build', 'inventory.json');
if (!fs.existsSync(invPath)) { console.log('build/inventory.json 不存在——先跑 gen-inventory'); process.exit(0); }
const inv = JSON.parse(fs.readFileSync(invPath, 'utf8'));
const E = inv.entries || [];
const SUB = inv.subtopics || [];

const eras = [...new Set(E.filter(e => e.type === 'era').map(e => e.id))].sort();
const domains = [...new Set(E.filter(e => e.type === 'domain').map(e => e.id))].sort();
const DOM_TITLES = {};
for (const e of E) if (e.type === 'domain') DOM_TITLES[e.id] = e.title;
const ERA_TITLES = {};
for (const e of E) if (e.type === 'era') ERA_TITLES[e.id] = e.title;

/* 时代 × 域 覆盖矩阵 */
const cell = {};
for (const e of E) {
  if (e.type === 'era' || e.type === 'domain') continue;
  for (const er of (e.era || [])) {
    for (const d of (e.domain || [])) {
      const k = er + '|' + d;
      cell[k] = cell[k] || { t1: 0, t2: 0, t3: 0, todo: 0 };
      if (e.quality === 'tier1') cell[k].t1++;
      else if (e.quality === 'tier2') cell[k].t2++;
      else if (e.quality === 'tier3') cell[k].t3++;
      else cell[k].todo++;
    }
  }
}
const mark = c => {
  if (!c) return '·';
  if (c.todo) return '**' + c.todo + '**';
  if (c.t1) return '★' + c.t1;
  if (c.t2) return '●' + c.t2;
  return '○' + c.t3;
};

const L = [];
L.push('# 知识覆盖矩阵');
L.push('');
L.push('> 由 `tools/check/check-coverage.js` 从 `build/inventory.json` 生成 · ' + new Date().toISOString().slice(0, 10));
L.push('> 图例：★ tier1 旗舰级 · ● tier2 标准级 · ○ tier3 索引级 · **n** 待写 · · 无');
L.push('');
L.push('## 一、总量');
L.push('');
const byType = {}, byStatus = {}, byQuality = {};
for (const e of E) {
  byType[e.type] = (byType[e.type] || 0) + 1;
  byStatus[e.status] = (byStatus[e.status] || 0) + 1;
  byQuality[e.quality] = (byQuality[e.quality] || 0) + 1;
}
L.push('| 维度 | 分布 |');
L.push('|---|---|');
L.push('| 实体类型 | ' + Object.entries(byType).sort((a, b) => b[1] - a[1]).map(([k, v]) => k + ' ' + v).join(' · ') + ' |');
L.push('| 状态 | ' + Object.entries(byStatus).map(([k, v]) => k + ' ' + v).join(' · ') + ' |');
L.push('| 质量档 | ' + Object.entries(byQuality).map(([k, v]) => k + ' ' + v).join(' · ') + ' |');
L.push('| 子主题 | ' + SUB.length + '（手写 ' + SUB.filter(s => s.curated).length + ' · 候选 ' + SUB.filter(s => !s.curated).length + '） |');
L.push('| 合计 | ' + E.length + ' 条 |');
L.push('');
L.push('## 二、时代 × 技术域 覆盖矩阵');
L.push('');
L.push('| 时代＼域 | ' + domains.map(d => DOM_TITLES[d] || d).join(' | ') + ' | 合计 |');
L.push('|---|' + domains.map(() => '---').join('|') + '|---|');
for (const er of eras) {
  const row = domains.map(d => mark(cell[er + '|' + d]));
  const tot = E.filter(e => (e.era || []).includes(er) && (e.domain || []).length).length;
  L.push('| ' + (ERA_TITLES[er] || er) + ' | ' + row.join(' | ') + ' | ' + tot + ' |');
}
L.push('');
L.push('## 三、各清单状态');
L.push('');
L.push('| 清单 | 条目 | done | todo | exempt | tier1 | tier2 | tier3 |');
L.push('|---|---|---|---|---|---|---|---|');
const files = ['eras', 'domains', 'people', 'artifacts', 'machines', 'terms', 'algorithms',
  'attacks', 'protocols', 'standards', 'theorems', 'events', 'cn-history'];
for (const f of files) {
  const p = path.join(ROOT, '_meta', 'inventory', f + '.yaml');
  if (!fs.existsSync(p)) continue;
  const txt = fs.readFileSync(p, 'utf8');
  const cnt = re => (txt.match(re) || []).length;
  L.push(`| ${f}.yaml | ${cnt(/^\s*- id: /gm)} | ${cnt(/^\s*status: done$/gm)} | ${cnt(/^\s*status: todo$/gm)} | ${cnt(/^\s*status: exempt$/gm)} | ${cnt(/^\s*quality: tier1$/gm)} | ${cnt(/^\s*quality: tier2$/gm)} | ${cnt(/^\s*quality: tier3$/gm)} |`);
}
L.push('');
L.push('## 四、缺口队列（下一轮工作清单）');
L.push('');
const gaps = E.filter(e => e.status === 'todo' || e.status === 'draft');
if (!gaps.length) L.push('（无）');
else {
  L.push('| id | 标题 | 状态 | 优先级 | 目标期 | 域 |');
  L.push('|---|---|---|---|---|---|');
  for (const g of gaps.sort((a, b) => (a.priority || 'P9').localeCompare(b.priority || 'P9'))) {
    L.push(`| \`${g.id}\` | ${g.title} | ${g.status} | ${g.priority || '—'} | ${g.target || '—'} | ${(g.domain || []).join(', ') || '—'} |`);
  }
}
L.push('');
L.push('## 五、待补轴统计（自动派生条目的判断型字段）');
L.push('');
const derived = E.filter(e => e.derived);
const needAxis = k => derived.filter(e => !e[k] || (Array.isArray(e[k]) && !e[k].length)).length;
L.push('| 待补字段 | 条目数 |');
L.push('|---|---|');
for (const k of ['domain', 'subtopic', 'era', 'apps', 'threats', 'playable', 'sources']) {
  L.push(`| ${k} | ${needAxis(k)} |`);
}
L.push('');

const out = path.join(ROOT, 'docs', 'coverage-matrix.md');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, L.join('\n'), 'utf8');
console.log('  ✓ 已生成 ' + path.relative(ROOT, out) + '（' + E.length + ' 条目 / ' + eras.length + ' 时代 × ' + domains.length + ' 域矩阵）');
console.log('  缺口 ' + gaps.length + ' 条 · 待补轴条目 ' + derived.length + ' 条');
process.exit(0);
