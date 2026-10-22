#!/usr/bin/env node
/* ============================================================
   check-alias.js —— 别名/交叉引用门禁
   规则：aliases 全局唯一（同一别名只能指向一个规范实体）；
        prereq 指向的 id 必须存在（可跨清单）；
        see（跨实体引用）不要求唯一，但引用的 id 最好存在。
   用法：node tools/check/check-alias.js
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

const invPath = path.join(ROOT, 'build', 'inventory.json');
if (!fs.existsSync(invPath)) { console.log('build/inventory.json 不存在——先跑 gen-inventory'); process.exit(1); }
const inv = JSON.parse(fs.readFileSync(invPath, 'utf8'));
const ids = new Set(inv.entries.map(e => e.id));
const subIds = new Set((inv.subtopics || []).map(s => s.id));

console.log('== 1. 别名唯一 ==');
const owner = new Map();
for (const e of inv.entries) {
  for (const a of (e.aliases || [])) {
    const k = String(a).toLowerCase().trim();
    if (!k) continue;
    if (owner.has(k) && owner.get(k) !== e.id) bad('别名重复：' + a + ' → ' + owner.get(k) + ' / ' + e.id);
    else owner.set(k, e.id);
  }
}
if (!fail) ok(inv.entries.length + ' 条目 · ' + owner.size + ' 个唯一别名');

console.log('== 2. prereq 可解析 ==');
let dangling = 0;
for (const e of inv.entries) {
  for (const p of (e.prereq || [])) {
    if (!ids.has(p) && !subIds.has(p)) { bad(e.id + ' prereq 悬空：' + p); dangling++; }
  }
}
if (!dangling) ok('全部 prereq 均可解析');

console.log('== 3. see 引用（建议存在）==');
let loose = 0;
for (const e of inv.entries) {
  for (const s of (e.see || [])) {
    const k = String(s).toLowerCase().trim();
    const hit = inv.entries.some(x => x.id === k || x.id === String(s).trim() || (x.title_en || '').toLowerCase() === k);
    if (!hit) { loose++; }
  }
}
if (loose) wrn(loose + ' 条 see 引用未匹配到实体（跨实体参考，允许）');
else ok('see 引用全部可匹配');

console.log('\n' + (fail ? '❌ ' + fail + ' 项不通过' : '✅ 全部通过') + (warn ? '（' + warn + ' 项提示）' : ''));
process.exit(fail ? 1 : 0);
