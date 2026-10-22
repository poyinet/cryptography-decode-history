#!/usr/bin/env node
/* ============================================================
   gen-eras-fill.js — 19 时代 → 02-eras/eNN-slug/era.md（双语时代叙述）
   叙述内容统一来自 era-narratives.js（仓库真源），此处只负责落盘。
   幂等：writeIfDiff，叙述变更才重写。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const { writeIfDiff } = require('./gen-extras');
const { NARRATIVES } = require('./era-narratives');
const ROOT = path.resolve(__dirname, '..', '..');

function main() {
  let n = 0;
  for (const [slug, e] of Object.entries(NARRATIVES)) {
    const dir = path.join(ROOT, '02-eras', slug);
    if (!fs.existsSync(dir)) { fs.mkdirSync(dir, { recursive: true }); }
    const body = ['---', `title: ${e.t}`, `title_en: ${e.te}`, 'type: era', `era: ${slug}`, '---', '',
      `# ${e.t}（${e.te}）`, '', `> ${e.span} · 轴1 编年叙事`, '',
      `**中文**：${e.zh}`, '', `**English**: ${e.en}`, '',
      '## 关联', '', '- 技术域：见 `../../tech/` 24 域', '- 实体：人物/密件/机器 见 `../../people/` `../../artifacts/` `../../machines/`', ''].join('\n');
    writeIfDiff(path.join(dir, 'era.md'), body);
    console.log(`  [${slug}] 时代叙述已填`);
    n++;
  }
  console.log(`[gen-eras-fill] 完成：${n} 个时代叙述`);
}

if (require.main === module) main();
module.exports = { main };
