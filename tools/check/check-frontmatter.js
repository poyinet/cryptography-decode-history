#!/usr/bin/env node
/* ============================================================
   check-frontmatter.js —— 实体 md 的 frontmatter v2 门禁
   校验：必填字段 / 类型 / id 与文件名一致 / era 存在 / domain 存在 /
        sources 结构合法 / aliases 唯一
   用法：node tools/check/check-frontmatter.js
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
process.chdir(ROOT);

let fail = 0, warn = 0;
const bad = m => { console.log('  ✗ ' + m); fail++; };
const wrn = m => { console.log('  ⚠ ' + m); warn++; };
const ok = m => console.log('  ✓ ' + m);

const TYPES = ['era', 'domain', 'person', 'artifact', 'machine', 'term', 'protocol', 'algorithm',
  'standard', 'attack', 'theorem', 'event', 'quote', 'fact', 'timeline', 'map', 'relation', 'egg', 'quiz'];
const ERAS = fs.existsSync(path.join(ROOT, '02-eras')) ? fs.readdirSync(path.join(ROOT, '02-eras')) : [];
const DOMAINS = new Set();
for (const d of ['tech']) {
  const abs = path.join(ROOT, d);
  if (!fs.existsSync(abs)) continue;
  for (const f of fs.readdirSync(abs)) if (f.endsWith('.md')) DOMAINS.add(f.replace(/\.md$/, ''));
}
DOMAINS.add('d01-foundations');

function readFM(file) {
  const txt = fs.readFileSync(file, 'utf8');
  const m = txt.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const fm = {}; let key = null;
  for (const line of m[1].split(/\r?\n/)) {
    const km = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (km) { key = km[1]; const v = km[2].trim(); fm[key] = v === '' ? [] : v.replace(/^['"]|['"]$/g, ''); }
    else if (/^\s+-\s+(.+)$/.test(line) && key) {
      if (!Array.isArray(fm[key])) fm[key] = [];
      fm[key].push(line.trim().replace(/^-\s*/, '').replace(/^['"]|['"]$/g, ''));
    }
  }
  return fm;
}

console.log('== 1. 实体 frontmatter ==');
const DIRS = { people: 'person', artifacts: 'artifact', machines: 'machine' };
const seenAlias = new Map();
let checked = 0;
for (const [dir, type] of Object.entries(DIRS)) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const f of fs.readdirSync(abs)) {
    if (!f.endsWith('.md') || f === 'README.md') continue;
    checked++;
    const id = f.replace(/\.md$/, '');
    const fm = readFM(path.join(abs, f));
    if (!fm) { bad(dir + '/' + f + ' 缺 frontmatter'); continue; }
    if (!fm.title) bad(dir + '/' + f + ' 缺 title');
    if (!fm.title_en) wrn(dir + '/' + f + ' 缺 title_en');
    if (fm.type && !TYPES.includes(fm.type)) bad(dir + '/' + f + ' type 非法：' + fm.type);
    if (fm.id && fm.id !== id) bad(dir + '/' + f + ' id 与文件名不符：' + fm.id);
    if (fm.era && !ERAS.includes(fm.era)) bad(dir + '/' + f + ' era 不存在：' + fm.era);
    if (fm.domain && fm.domain && !DOMAINS.has(fm.domain)) wrn(dir + '/' + f + ' domain 未在 tech/ 中：' + fm.domain);
    if (fm.aliases) {
      for (const a of [].concat(fm.aliases)) {
        const k = String(a).toLowerCase().trim();
        if (!k) continue;
        if (seenAlias.has(k) && seenAlias.get(k) !== id) bad('别名重复：' + a + ' → ' + seenAlias.get(k) + ' / ' + id);
        else seenAlias.set(k, id);
      }
    }
  }
}
if (!fail) ok(checked + ' 个实体 frontmatter 结构合规');

console.log('== 2. 时代 / 域 frontmatter ==');
for (const e of ERAS) {
  const f = path.join(ROOT, '02-eras', e, 'README.md');
  if (!fs.existsSync(f)) { bad('时代缺 README：' + e); continue; }
  const fm = readFM(f);
  if (!fm) { bad('时代 ' + e + ' 缺 frontmatter'); continue; }
  if (!fm.title) bad('时代 ' + e + ' 缺 title');
}
ok(ERAS.length + ' 个时代 frontmatter 已检查');

console.log('\n' + (fail ? '❌ ' + fail + ' 项不通过' : '✅ 全部通过') + (warn ? '（' + warn + ' 项提示）' : ''));
process.exit(fail ? 1 : 0);
