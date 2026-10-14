#!/usr/bin/env node
/* ============================================================
   gen-people.js — 88 人物 → people/<id>.md
   数据：PEOPLE(id 数组) + i18n stp.<id>.* (中英) + PEOPLE_SRC[id]。
   era 反链：章节归属推导；无章节者手动补（宁缺勿空）。
   幂等：writeIfDiff。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const { load } = require('./lib/load-poyi');
const { PEOPLE: LEDGER_PEOPLE } = require('./source-ledger');

const OUT = path.resolve(__dirname, '..', '..', 'people');

// 12 章 → 19 时代（轴1）
const CHAPTER_ERA = {
  dawn: 'e01-origins', caesar: 'e02-classical', arab: 'e04-arabic-golden-age',
  bacon: 'e06-renaissance', ww1: 'e09-ww1', bletchley: 'e11-ww2', midway: 'e11-ww2',
  purple: 'e11-ww2', lorenz: 'e11-ww2', venona: 'e12-cold-war-info-theory',
  modern: 'e13-public-key', quantum: 'e16-quantum-turn',
};
// 无章节归属者的最佳时代（宁缺勿空：纯数学奠基者留空）
const PERSON_ERA = {
  playfair: 'e08-codebreakers', davies: 'e13-public-key', vonneumann: 'e12-cold-war-info-theory',
  heninger: 'e13-public-key', williamson: 'e12-cold-war-info-theory', zengxisheng: 'e19-china',
  gauss: '', galois: '',
};

function writeIfDiff(p, content) {
  const dir = path.dirname(p);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (fs.existsSync(p) && fs.readFileSync(p, 'utf8') === content) {
    console.log('  = 未变', path.basename(p));
    return false;
  }
  fs.writeFileSync(p, content, 'utf8');
  console.log('  + 写入', path.basename(p));
  return true;
}

function get(dict, id, field) {
  const v = dict[`stp.${id}.${field}`];
  return (typeof v === 'string' && v.trim()) ? v.trim() : '';
}

function personMd(id, d) {
  const zh = d.i18n.zh, en = d.i18n.en;
  const nameZh = get(zh, id, 'name') || id;
  const nameEn = get(en, id, 'name') || id;
  const role = get(zh, id, 'role');
  const eraText = get(zh, id, 'era');
  const icon = get(zh, id, 'icon');
  const fact = get(zh, id, 'fact');
  const factEn = get(en, id, 'fact');
  const bio = get(zh, id, 'bio');
  const bioEn = get(en, id, 'bio');
  const quote = get(zh, id, 'quote');
  const quoteEn = get(en, id, 'quote');

  // era 反链：章节归属优先，否则手动
  const chapters = d.STORIES.filter(s => s.people.includes(id)).map(s => s.id);
  const era = (chapters.length && CHAPTER_ERA[chapters[0]]) || PERSON_ERA[id] || '';

  // 引文优先取仓库自有台账（补全 poyi 源里的占位），否则回落 poyi PEOPLE_SRC
  const src = (LEDGER_PEOPLE[id] && LEDGER_PEOPLE[id].length)
    ? LEDGER_PEOPLE[id].map(x => ({ label: x }))
    : (d.PEOPLE_SRC[id] || []);
  const fm = [
    '---',
    `title: ${nameZh}`,
    `title_en: ${nameEn}`,
    'type: person',
    era ? `era: ${era}` : '',
    `sources: ${src.length ? '' : '[]'}`,
    ...src.map(s => `  - ${s.label}`),
    '---',
  ].filter(Boolean).join('\n');

  const lines = [
    `# ${nameZh}（${nameEn}）`,
    '',
    `> 人物志 ${icon ? `· ${icon}` : ''}${role ? ` · ${role}` : ''}${eraText ? ` · ${eraText}` : ''}`,
    '',
  ];
  if (bio) {
    lines.push('## 简介', '', `**中文**：${bio}`);
    if (bioEn) lines.push('', `**English**: ${bioEn}`);
    lines.push('');
  }
  if (fact) {
    lines.push('## 一句话', '', `**中文**：${fact}`);
    if (factEn) lines.push('', `**English**: ${factEn}`);
    lines.push('');
  }
  if (quote) {
    lines.push('## 名言', '', `**中文**：${quote}`);
    if (quoteEn) lines.push('', `**English**: ${quoteEn}`);
    lines.push('');
  }
  lines.push('## 关联', '');
  lines.push(`- 章节：${chapters.length ? chapters.join(', ') : '（无）'}`);
  lines.push('');
  return fm + '\n\n' + lines.join('\n');
}

function main() {
  const d = load();
  if (!d.PEOPLE.length) throw new Error('PEOPLE 为空');
  fs.mkdirSync(OUT, { recursive: true });
  let changed = 0, missing = [];
  for (const id of d.PEOPLE) {
    const zh = d.i18n.zh;
    if (!get(zh, id, 'bio') && !get(zh, id, 'name')) missing.push(id);
    if (writeIfDiff(path.join(OUT, `${id}.md`), personMd(id, d))) {}
  }
  console.log(`[gen-people] 完成：共 ${d.PEOPLE.length} 人 → ${OUT}`);
  if (missing.length) console.log('  ⚠ 无 bio/name:', missing.join(', '));
}

if (require.main === module) main();
module.exports = { main, personMd, CHAPTER_ERA, PERSON_ERA };
