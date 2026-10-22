#!/usr/bin/env node
/* ============================================================
   check-i18n-sync.js —— 中英同步门禁
   规则：清单里每条实体必须同时有 title / title_en；
        主站字典（zh/en）的键集合必须对称。
   用法：node tools/check/check-i18n-sync.js
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.resolve(__dirname, '..', '..');
process.chdir(ROOT);

let fail = 0, warn = 0;
const bad = m => { console.log('  ✗ ' + m); fail++; };
const wrn = m => { console.log('  ⚠ ' + m); warn++; };
const ok = m => console.log('  ✓ ' + m);

console.log('== 1. 清单实体的中英标题 ==');
const invPath = path.join(ROOT, 'build', 'inventory.json');
if (!fs.existsSync(invPath)) { console.log('  build/inventory.json 不存在——先跑 gen-inventory'); process.exit(1); }
const inv = JSON.parse(fs.readFileSync(invPath, 'utf8'));
let missingEn = 0, missingZh = 0;
for (const e of inv.entries) {
  if (e.status === 'exempt') continue;
  if (!e.title) { bad(e.id + ' 缺中文名'); missingZh++; }
  if (!e.title_en) { bad(e.id + ' 缺英文名'); missingEn++; }
}
if (!fail) ok(inv.entries.length + ' 条实体中英标题齐全');

console.log('== 2. 主站字典 zh/en 对称 ==');
try {
  const site = path.join(ROOT, '..', 'poyi-site');
  const dictFile = path.join(site, 'assets', 'js', 'core', 'i18n-dict.js');
  const sb = { console, localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} }, navigator: { language: 'zh' } };
  sb.window = sb; vm.createContext(sb);
  sb.Arcade = { i18n: { dicts: { zh: {}, en: {} } } };
  vm.runInContext(fs.readFileSync(dictFile, 'utf8'), sb);
  const zh = sb.Arcade.i18n.dicts.zh, en = sb.Arcade.i18n.dicts.en;
  const zk = new Set(Object.keys(zh)), ek = new Set(Object.keys(en));
  const onlyZh = [...zk].filter(k => !ek.has(k));
  const onlyEn = [...ek].filter(k => !zk.has(k));
  ok('主站字典 zh ' + zk.size + ' 键 / en ' + ek.size + ' 键');
  if (onlyZh.length) wrn('仅中文有的键 ' + onlyZh.length + ' 个：' + onlyZh.slice(0, 8).join(', '));
  if (onlyEn.length) wrn('仅英文有的键 ' + onlyEn.length + ' 个：' + onlyEn.slice(0, 8).join(', '));
} catch (e) {
  wrn('主站字典不可读（' + e.message + '）——跳过');
}

console.log('== 3. 实体 md 的中英正文 ==');
{
  let checked = 0, noEn = 0;
  for (const dir of ['people', 'artifacts', 'machines']) {
    const abs = path.join(ROOT, dir);
    if (!fs.existsSync(abs)) continue;
    for (const f of fs.readdirSync(abs)) {
      if (!f.endsWith('.md') || f === 'README.md') continue;
      const txt = fs.readFileSync(path.join(abs, f), 'utf8');
      checked++;
      if (!/##\s*English\s*\/\s*英文版/.test(txt)) { wrn(dir + '/' + f + ' 缺英文版章节'); noEn++; }
    }
  }
  if (!noEn) ok(checked + ' 个实体均有中英正文');
}

console.log('\n' + (fail ? '❌ ' + fail + ' 项不通过' : '✅ 全部通过') + (warn ? '（' + warn + ' 项提示）' : ''));
process.exit(fail ? 1 : 0);
