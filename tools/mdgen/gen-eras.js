#!/usr/bin/env node
/* ============================================================
   gen-eras.js — 12 章 → 19 时代目录下的 <chapter>.md
   每章：正文(st.cX.b 中英) + 概念 + 出处/延伸阅读 + 人物/游戏/密件互链。
   e11 收 4 章（bletchley/midway/purple/lorenz）。幂等 writeIfDiff。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const { load } = require('./lib/load-poyi');
const { CHAPTER_ERA } = require('./gen-people');

const ROOT = path.resolve(__dirname, '..', '..');
const ERA_DIR = path.join(ROOT, '02-eras');

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

function chapterMd(s, d) {
  const zh = d.i18n.zh, en = d.i18n.en;
  const title = zh[s.titleKey] || s.id;
  const titleEn = en[s.titleKey] || s.id;
  // [[id]] wiki 链接 → 真 markdown 链接（指向 people/<id>.md），双语各用对应名字
  const linkify = (text, lang) => (text || '').replace(/\[\[([a-z0-9-]+)\]\]/g, (m, id) => {
    const name = (d.i18n[lang]['stp.' + id + '.name']) || id;
    return '[' + name + '](../../people/' + id + '.md)';
  });
  const body = linkify(zh[s.bodyKey] || '', 'zh');
  const bodyEn = linkify(en[s.bodyKey] || '', 'en');
  const era = CHAPTER_ERA[s.id] || '';
  const c = s.concept || {};

  const fm = [
    '---',
    `title: ${title}`,
    `title_en: ${titleEn}`,
    'type: era',
    era ? `era: ${era}` : '',
    'sources:',
    ...(s.sources || []).map(x => `  - ${x}`),
    '---',
  ].filter(Boolean).join('\n');

  const lines = [
    `# ${title}（${titleEn}）`,
    '',
    era ? `> 时代 ${era} · 本章 ${s.id}` : `> 本章 ${s.id}`,
    '',
  ];
  if (c.zh) {
    lines.push('## 概念', '', `${c.ic || ''} ${c.zh}`.trim());
    if (c.en) lines.push('', `**English**: ${c.en}`);
    lines.push('');
  }
  if (body) {
    lines.push('## 正文', '', `**中文**：${body}`);
    if (bodyEn) lines.push('', `**English**: ${bodyEn}`);
    lines.push('');
  }
  if ((s.people || []).length) {
    lines.push('## 人物', '', ...(s.people.map(p => `- [\`${p}\`](../../people/${p}.md)`)));
    lines.push('');
  }
  if ((s.games || []).length) {
    lines.push('## 关联游戏', '', `- ${s.games.join(', ')}`);
    lines.push('');
  }
  if (s.artifact) {
    lines.push('## 关联密件', '', `- [\`${s.artifact}\`](../../artifacts/${s.artifact}.md)`);
    lines.push('');
  }
  if ((s.sources || []).length) {
    lines.push('## 出处', '', ...(s.sources.map(x => `- ${x}`)));
    lines.push('');
  }
  if ((s.reads || []).length) {
    lines.push('## 延伸阅读', '', ...(s.reads.map(x => `- ${x}`)));
    lines.push('');
  }
  return fm + '\n\n' + lines.join('\n');
}

function main() {
  const d = load();
  if (!d.STORIES.length) throw new Error('STORIES 为空');
  let noEra = [];
  for (const s of d.STORIES) {
    const era = CHAPTER_ERA[s.id];
    if (!era) { noEra.push(s.id); continue; }
    const p = path.join(ERA_DIR, era, `${s.id}.md`);
    writeIfDiff(p, chapterMd(s, d));
  }
  console.log(`[gen-eras] 完成：${d.STORIES.length} 章 → ${ERA_DIR}`);
  if (noEra.length) console.log('  ⚠ 无时代映射:', noEra.join(', '));
}

if (require.main === module) main();
module.exports = { main, chapterMd };
