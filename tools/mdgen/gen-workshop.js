#!/usr/bin/env node
/* ============================================================
   gen-workshop.js — Workshop 22 个可交互算法 → 各域「算法/协议」节的
   「### 可交互算法（Workshop）」小节。只追加、不覆盖 gen-protocols 的协议介绍。
   数据/逻辑分离：只取 name/key 配置。幂等。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const { loadFile } = require('./gen-extras');
const { domainFile } = require('./gen-glossary');

const ALGO_DOM = {
  caesar: 'd02', affine: 'd02', substitution: 'd02', bacon: 'd02',
  vigenere: 'd03', autokey: 'd03', playfair: 'd03', hill: 'd03', porta: 'd03',
  rail: 'd04', adfgvx: 'd04', bifid: 'd04', trifid: 'd04', columnar: 'd04',
  xor: 'd06', des: 'd08', aes: 'd08', sha256: 'd09', hmac: 'd10',
  morse: 'd01', base64: 'd01', binary: 'd01',
};
const BLOCK = '### 可交互算法（Workshop）';

// 在「## 算法 / 协议」节末尾追加（或替换已有的）Workshop 块，保留协议介绍
function appendWorkshop(content, workshopBody) {
  const lines = content.split('\n');
  const start = lines.findIndex(l => l.trim() === '## 算法 / 协议');
  let block = `${BLOCK}\n\n${workshopBody}`;
  if (start === -1) return content.replace(/\s*$/, '') + `\n\n## 算法 / 协议\n\n${block}\n`;
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) if (lines[i].startsWith('## ')) { end = i; break; }
  // 删掉旧的 workshop 块（从 BLOCK 行到下一个 ###/## 或节尾）
  const sec = lines.slice(start + 1, end);
  let ws = sec.findIndex(l => l.trim() === BLOCK);
  if (ws !== -1) {
    let we = sec.length;
    for (let i = ws + 1; i < sec.length; i++) if (sec[i].startsWith('### ') || sec[i].startsWith('## ')) { we = i; break; }
    sec.splice(ws, we - ws);
  }
  const head = lines.slice(0, start + 1);
  const tail = lines.slice(end);
  return [...head, '', ...sec, block, '', ...tail].join('\n').replace(/\n{3,}/g, '\n\n').replace(/\s*$/, '') + '\n';
}

function main() {
  const ALGOS = loadFile('workshop.js').Workshop.ALGOS;
  const byDom = {};
  for (const [id, a] of Object.entries(ALGOS)) {
    const dom = ALGO_DOM[id]; if (!dom) continue;
    const row = `- \`${id}\` · **${a.name}**（${a.enName}）· 密钥：${a.keyLabel} / ${a.keyEn}，默认 \`${a.keyDefault}\``;
    (byDom[dom] = byDom[dom] || []).push(row);
  }
  let total = 0;
  for (const [dom, rows] of Object.entries(byDom)) {
    const fp = domainFile(dom);
    const content = fs.existsSync(fp) ? fs.readFileSync(fp, 'utf8') : '';
    fs.writeFileSync(fp, appendWorkshop(content, rows.join('\n')), 'utf8');
    total += rows.length;
    console.log(`  [${dom}] +${rows.length} 算法`);
  }
  console.log(`[gen-workshop] 完成：${total} 个可交互算法 → 技术域（追加，不覆盖协议）`);
}

if (require.main === module) main();
module.exports = { main, ALGO_DOM };
