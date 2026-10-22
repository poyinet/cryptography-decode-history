#!/usr/bin/env node
/* ============================================================
   gen-index.js — Phase 3c：为大集合生成人类可读索引页
   people/（87）/ artifacts/（48）/ machines/（7）原先无索引，
   读者无法从根导航进入。本生成器按时代编年分组、名字直达，幂等。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');

const CHRON = ['e01-origins', 'e02-classical', 'e03-byzantine-islamic', 'e04-arabic-golden-age', 'e05-medieval-europe', 'e06-renaissance', 'e07-early-modern-steganography', 'e08-codebreakers', 'e09-ww1', 'e10-interwar', 'e11-ww2', 'e12-cold-war-info-theory', 'e13-public-key', 'e14-standardization', 'e15-web-protocols', 'e16-quantum-turn', 'e17-post-quantum', 'e18-frontier'];

function readEraIndex() {
  const out = {};
  const dir = path.join(ROOT, '02-eras');
  for (const slug of fs.readdirSync(dir).sort()) {
    const fp = path.join(dir, slug, 'README.md');
    if (!fs.existsSync(fp)) continue;
    out[slug] = (fs.readFileSync(fp, 'utf8').match(/^title: (.+)$/m) || [])[1] || slug;
  }
  return out;
}

function scan(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.md') && x !== 'README.md')) {
    const c = fs.readFileSync(path.join(dir, f), 'utf8');
    out.push({ id: f.replace('.md', ''), era: (c.match(/^era: (\S+)/m) || [])[1] || '', nameZh: (c.match(/^title: (.+)$/m) || [])[1] || '', nameEn: (c.match(/^title_en: (.+)$/m) || [])[1] || '' });
  }
  return out;
}

function indexMd(relDir, kind, entities) {
  const eras = readEraIndex();
  const byEra = {};
  const noEra = [];
  for (const e of entities) {
    if (e.era && eras[e.era]) (byEra[e.era] = byEra[e.era] || []).push(e);
    else noEra.push(e);
  }
  const L = [];
  const total = entities.length;
  const kindZh = { people: '人物志', artifacts: '密件册', machines: '机器博物馆' }[kind] || kind;
  L.push('---', `title: ${kindZh}索引`, `title_en: ${kind} Index`, 'type: index', '---', '');
  L.push(`# ${kindZh}索引（${kind} Index）`, '');
  L.push(`> 共 **${total}** 条，按时代编年排列。点击名字直达条目；条目内再交叉链接到对应技术域与关联游戏。`, '');
  L.push('**返回**：[← 轴 3 实体层（README）](../README.md)', '');
  for (const era of CHRON) {
    if (!byEra[era]) continue;
    L.push(`## ${eras[era]}`, '');
    byEra[era].sort((a, b) => a.nameZh.localeCompare(b.nameZh, 'zh'));
    byEra[era].forEach(e => L.push(`- [${e.nameZh}](${e.id}.md)${e.nameEn && e.nameEn !== e.nameZh ? `（${e.nameEn}）` : ''}`));
    L.push('');
  }
  if (noEra.length) {
    L.push('## 横切 / 无单一时代', '');
    noEra.sort((a, b) => a.nameZh.localeCompare(b.nameZh, 'zh'));
    noEra.forEach(e => L.push(`- [${e.nameZh}](${e.id}.md)${e.nameEn && e.nameEn !== e.nameZh ? `（${e.nameEn}）` : ''}`));
    L.push('');
  }
  const fp = path.join(ROOT, relDir, 'README.md');
  fs.writeFileSync(fp, L.join('\n').replace(/\n{3,}/g, '\n\n').replace(/\s*$/, '') + '\n', 'utf8');
  return total;
}

function main() {
  const a = indexMd('people', 'people', scan(path.join(ROOT, 'people')));
  const b = indexMd('artifacts', 'artifacts', scan(path.join(ROOT, 'artifacts')));
  const c = indexMd('machines', 'machines', scan(path.join(ROOT, 'machines')));
  console.log(`[gen-index] 完成：人物 ${a} / 密件 ${b} / 机器 ${c} 索引页`);
}

if (require.main === module) main();
module.exports = { main };
