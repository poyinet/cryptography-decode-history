#!/usr/bin/env node
/* ============================================================
   gen-quiz.js — 测验题库对号入座
   QUIZ.BANK(252 题) → quiz/questions.md
   CHAPTER_QUIZ.QUIZ(12 章) → 各章 .md 的「## 测验」节
   数据/逻辑分离：只取题目数据，不碰 draw10/rankFor 等逻辑。幂等。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const { loadFile, writeIfDiff } = require('./gen-extras');
const { CHAPTER_ERA } = require('./gen-people');
const ROOT = path.resolve(__dirname, '..', '..');
const ABC = 'ABCDEFGHIJ';
function optLetters(opts) { return opts.map((o, i) => `${ABC[i]}. ${o}`).join('  '); }

function genBank() {
  const BANK = loadFile('quiz.js').QUIZ.BANK;
  const q = BANK.map((it, i) => {
    const ans = ABC[it.a] || '?';
    const zh = `**中文**：${it.zh.q}\n- 选项：${optLetters(it.zh.opts)}\n- 答案：**${ans}** · ${it.zh.explain}\n`;
    const en = `**English**: ${it.en.q}\n- Options: ${optLetters(it.en.opts)}\n- Answer: **${ans}** · ${it.en.explain}`;
    return `${i + 1}. ${zh}\n   ${en}`;
  });
  const md = ['---', 'title: 题库', 'title_en: Quiz Bank', 'type: quiz', '---', '',
    `# 题库（Quiz Bank）`, '', `> ${BANK.length} 题。`, '',
    q.join('\n\n'), ''].join('\n');
  writeIfDiff(path.join(ROOT, 'quiz', 'questions.md'), md);
  return BANK.length;
}

function genChapterQuiz() {
  const CQ = loadFile('chapter-quiz.js').CHAPTER_QUIZ.QUIZ;
  let n = 0;
  for (const [chapterId, qs] of Object.entries(CQ)) {
    const era = CHAPTER_ERA[chapterId]; if (!era) continue;
    const fp = path.join(ROOT, '02-eras', era, `${chapterId}.md`);
    if (!fs.existsSync(fp)) continue;
    const items = (qs || []).map((it, i) => {
      const ans = ABC[it.zh.a] || '?';
      return `${i + 1}. **中文**：${it.zh.q}\n   - 选项：${optLetters(it.zh.opts)}\n   - 答案：**${ans}** · ${it.zh.e}\n   **English**: ${it.en.q}\n   - Answer: **${ans}** · ${it.en.e}`;
    });
    const section = `## 测验\n\n${items.join('\n\n')}\n`;
    const content = fs.readFileSync(fp, 'utf8');
    const lines = content.split('\n');
    const existing = lines.findIndex(l => l.trim() === '## 测验');
    let out;
    if (existing === -1) {
      out = content.replace(/\s*$/, '') + '\n\n' + section;
    } else {
      let end = lines.length;
      for (let i = existing + 1; i < lines.length; i++) if (lines[i].startsWith('## ')) { end = i; break; }
      out = [...lines.slice(0, existing), ...section.split('\n'), ...lines.slice(end)].join('\n').replace(/\n{3,}/g, '\n\n');
    }
    writeIfDiff(fp, out);
    n += (qs || []).length;
  }
  return n;
}

function main() {
  console.log(`  题库 ${genBank()} 题 → quiz/questions.md`);
  console.log(`  章节测验 ${genChapterQuiz()} 题 → 各章 .md`);
}

if (require.main === module) main();
module.exports = { main, genBank, genChapterQuiz };
