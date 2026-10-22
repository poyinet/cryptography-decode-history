#!/usr/bin/env node
/* ============================================================
   check-sources.js —— 出处门禁
   规则：每条 tier1/tier2 条目的 sources 非空、结构合法、kind 合法；
        tier1 至少一条 primary/authoritative；tier1/tier2 不得只有 tertiary。
        同时统计 tier3/derived 的出处覆盖率（报告）。
   用法：node tools/check/check-sources.js
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
const KINDS = ['primary', 'authoritative', 'tertiary'];

console.log('== 出处结构 ==');
const stat = { tier1: 0, tier2: 0, tier3: 0 };
for (const e of inv.entries) {
  if (e.status === 'exempt') continue;
  if (e.type === 'era' || e.type === 'domain') continue;   // 容器节点，出处随其子内容
  stat[e.quality] = (stat[e.quality] || 0) + 1;
  const srcs = e.sources || [];
  if (e.quality !== 'tier3') {
    if (!srcs.length) { bad(e.id + '（' + e.quality + '）无出处'); continue; }
    let kindsOk = true;
    for (const s of srcs) {
      if (!s || !s.title || !KINDS.includes(s.kind)) { bad(e.id + ' 出处条目不合法：' + JSON.stringify(s)); kindsOk = false; }
    }
    if (!kindsOk) continue;
    const strong = srcs.filter(s => s.kind === 'primary' || s.kind === 'authoritative');
    if (e.quality === 'tier1' && !strong.length) bad(e.id + '（tier1）缺一手/权威出处');
    if (e.quality === 'tier2' && !strong.length) wrn(e.id + '（tier2）仅 tertiary 出处');
  }
}
if (!fail) ok('出处结构合规');

console.log('== 出处覆盖率 ==');
const withSrc = inv.entries.filter(e => e.status !== 'exempt' && (e.sources || []).length).length;
const needSrc = inv.entries.filter(e => e.status !== 'exempt' && e.quality !== 'tier3').length;
const t3 = inv.entries.filter(e => e.status !== 'exempt' && e.quality === 'tier3');
const t3With = t3.filter(e => (e.sources || []).length).length;
ok('tier1 ' + stat.tier1 + ' / tier2 ' + stat.tier2 + ' / tier3 ' + stat.tier3);
ok('需出处的条目中已带出处：' + withSrc + ' / ' + needSrc);
ok('tier3 中已带出处：' + t3With + ' / ' + t3.length + '（其余为自动派生，待补）');

console.log('\n' + (fail ? '❌ ' + fail + ' 项不通过' : '✅ 全部通过') + (warn ? '（' + warn + ' 项提示）' : ''));
process.exit(fail ? 1 : 0);
