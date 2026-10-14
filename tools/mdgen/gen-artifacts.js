#!/usr/bin/env node
/* ============================================================
   gen-artifacts.js — 48 密件 → artifacts/<id>.md
   数据：ARTIFACTS + i18n sta.<id>.* (中英) + ARTIFACT_SRC[id]。
   era 由 chapterId 推导；nature 性质标注。幂等 writeIfDiff。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const { load } = require('./lib/load-poyi');
const { CHAPTER_ERA } = require('./gen-people');

const OUT = path.resolve(__dirname, '..', '..', 'artifacts');

const NATURE = {
  real: ['真实史料', 'Real record'],
  reconstructed: ['据史料复原', 'Reconstructed'],
  dramatized: ['依据史实的剧化', 'Dramatized'],
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
  const v = dict[`sta.${id}.${field}`];
  return (typeof v === 'string' && v.trim()) ? v.trim() : '';
}

function artifactMd(a, d) {
  const zh = d.i18n.zh, en = d.i18n.en;
  const nameZh = get(zh, a.id, 'name') || a.id;
  const nameEn = get(en, a.id, 'name') || a.id;
  const eraText = get(zh, a.id, 'era');
  const desc = get(zh, a.id, 'desc');
  const descEn = get(en, a.id, 'desc');
  const text = get(zh, a.id, 'text');
  const textEn = get(en, a.id, 'text');
  const era = CHAPTER_ERA[a.chapterId] || '';
  const nat = NATURE[a.nature] || [a.nature, a.nature];
  const src = d.ARTIFACT_SRC[a.id] || [];

  const fm = [
    '---',
    `title: ${nameZh}`,
    `title_en: ${nameEn}`,
    'type: artifact',
    era ? `era: ${era}` : '',
    a.unlockGameId ? `game: ${a.unlockGameId}` : '',
    `sources: ${src.length ? '' : '[]'}`,
    ...src.map(s => `  - ${s.label}`),
    '---',
  ].filter(Boolean).join('\n');

  const lines = [
    `# ${nameZh}（${nameEn}）`,
    '',
    `> 密件册 ${eraText ? `· ${eraText}` : ''} · 性质：${nat[0]} / ${nat[1]}${a.unlockGameId ? ` · 关联游戏：\`${a.unlockGameId}\`` : ''}`,
    '',
  ];
  if (desc) {
    lines.push('## 说明', '', `**中文**：${desc}`);
    if (descEn) lines.push('', `**English**: ${descEn}`);
    lines.push('');
  }
  if (text) {
    lines.push('## 全文 / 摘录', '', `**中文**：${text}`);
    if (textEn) lines.push('', `**English**: ${textEn}`);
    lines.push('');
  }
  lines.push('## 关联', '', `- 章节：${a.chapterId}`, ``, `- 性质：${nat[0]} / ${nat[1]}`, '');
  return fm + '\n\n' + lines.join('\n');
}

function main() {
  const d = load();
  if (!d.ARTIFACTS.length) throw new Error('ARTIFACTS 为空');
  fs.mkdirSync(OUT, { recursive: true });
  let missing = [];
  for (const a of d.ARTIFACTS) {
    const zh = d.i18n.zh;
    if (!get(zh, a.id, 'name') && !get(zh, a.id, 'text')) missing.push(a.id);
    writeIfDiff(path.join(OUT, `${a.id}.md`), artifactMd(a, d));
  }
  console.log(`[gen-artifacts] 完成：共 ${d.ARTIFACTS.length} 件 → ${OUT}`);
  if (missing.length) console.log('  ⚠ 无 name/text:', missing.join(', '));
}

if (require.main === module) main();
module.exports = { main, artifactMd, NATURE };
