#!/usr/bin/env node
/* ============================================================
   gen-machines.js — 7 台机器图鉴 → machines/<id>.md
   数据：machine.js 自含 zh/en。幂等：writeIfDiff。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const { load } = require('./lib/load-poyi');
const { MACHINES: LEDGER_MACHINES } = require('./source-ledger');

const OUT = path.resolve(__dirname, '..', '..', 'machines');

// 机器 → 时代（轴1）反链
const ERA = {
  enigma: 'e11-ww2', bombe: 'e11-ww2', m209: 'e11-ww2',
  purple: 'e11-ww2', lorenz: 'e11-ww2', aes: 'e14-standardization', des: 'e14-standardization',
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

function paramsTable(params) {
  const rows = params.map(p => `| ${p.zh}（${p.en}） | ${p.v.zh} / ${p.v.en} |`);
  return ['| 参数 | 值 |', '| --- | --- |', ...rows].join('\n');
}

function machineMd(m) {
  const era = ERA[m.id] || '';
  const fm = [
    '---',
    `title: ${m.name.zh}`,
    `title_en: ${m.name.en}`,
    'type: machine',
    era ? `era: ${era}` : '',
    m.game ? `game: ${m.game}` : '',
    `sources: ${(LEDGER_MACHINES[m.id] || []).length ? '' : '[]'}`,
    ...(LEDGER_MACHINES[m.id] || []).map(s => `  - ${s}`),
    '---',
  ].filter(Boolean).join('\n');

  const body = [
    `# ${m.name.zh}（${m.name.en}）`,
    '',
    `> 机器图鉴 · ${m.era.zh} / ${m.era.en}${m.game ? ` · 关联游戏：\`${m.game}\`` : ''}`,
    '',
    '## 概述',
    '',
    `**中文**：${m.summary.zh}`,
    '',
    `**English**: ${m.summary.en}`,
    '',
    '## 历史',
    '',
    `**中文**：${m.history.zh}`,
    '',
    `**English**: ${m.history.en}`,
    '',
    '## 关键参数',
    '',
    paramsTable(m.params),
    '',
    '## 关联',
    '',
    m.game ? `- 游戏：\`${m.game}\`` : '- 游戏：（无）',
    '',
  ].join('\n');

  return fm + '\n\n' + body;
}

function main() {
  const d = load();
  if (!d.MACHINES.length) throw new Error('MACHINES 为空');
  fs.mkdirSync(OUT, { recursive: true });
  let changed = 0, total = 0;
  for (const m of d.MACHINES) {
    total++;
    if (writeIfDiff(path.join(OUT, `${m.id}.md`), machineMd(m))) changed++;
  }
  console.log(`[gen-machines] 完成：共 ${total} 台，改写 ${changed} 个文件 → ${OUT}`);
}

if (require.main === module) main();
module.exports = { main, machineMd, ERA };
