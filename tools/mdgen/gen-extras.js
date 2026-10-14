#!/usr/bin/env node
/* ============================================================
   gen-extras.js — 纯数据小资产 → 各集合目录
   timeline / quotes / facts / map / relations / eggs / quiz-ranks
   每个集合一个 md（有序列表，非实体，不拆单文件）。幂等。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { load, POYI } = require('./lib/load-poyi');
const { CHAPTER_ERA } = require('./gen-people');

const ROOT = path.resolve(__dirname, '..', '..');

// 单文件沙箱加载器
function loadFile(file) {
  const s = { console, localStorage: { getItem: () => null, setItem: () => {} }, navigator: { language: 'zh' }, Arcade: { i18n: { dicts: { zh: {}, en: {} } } } };
  s.window = s; vm.createContext(s);
  vm.runInContext(fs.readFileSync(path.join(POYI, file), 'utf8'), s);
  return s.window;
}
function writeIfDiff(p, content) {
  const dir = path.dirname(p);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (fs.existsSync(p) && fs.readFileSync(p, 'utf8') === content) { console.log('  = 未变', path.basename(p)); return false; }
  fs.writeFileSync(p, content, 'utf8');
  console.log('  + 写入', path.basename(p));
  return true;
}
const fm = (t, te, type, extra = []) => ['---', `title: ${t}`, `title_en: ${te}`, `type: ${type}`, ...extra, '---'].filter(Boolean).join('\n');
// 链接引用：story→时代章，artifact→密件，person→人物
function linkRef(l) {
  if (!l) return '';
  if (l.type === 'story') { const e = CHAPTER_ERA[l.id]; return e ? `[${l.id}](../02-eras/${e}/${l.id}.md)` : l.id; }
  if (l.type === 'artifact') return `[${l.id}](../artifacts/${l.id}.md)`;
  if (l.type === 'person') return `[${l.id}](../people/${l.id}.md)`;
  return l.id;
}

function genTimeline() {
  const TL = loadFile('timeline.js').CRYPTO_TIMELINE;
  const rows = TL.map(e => {
    const yr = e.y < 0 ? `前 ${-e.y}` : String(e.y);
    return `| ${yr} | ${e.icon || ''} ${e.zh} | ${e.en} | ${e.link ? linkRef(e.link) : ''} |`;
  });
  const body = `${fm('加密解密编年时间线', 'Cryptography Timeline', 'timeline')}\n\n# 编年时间线（Cryptography Timeline）\n\n> ${TL.length} 个关键事件，从象形文字到后量子。\n\n| 年份 | 事件 | English | 链接 |\n| --- | --- | --- | --- |\n` + rows.join('\n') + '\n';
  writeIfDiff(path.join(ROOT, 'timeline', 'timeline.md'), body);
  return TL.length;
}

function genQuotes() {
  const Q = loadFile('quotes.js').QUOTES.QUOTES;
  const body = Q.map(q => {
    const who = q.who ? `**${q.who.zh}**（${q.who.en}）${q.year ? ` · ${q.year}` : ''}` : '';
    return `### ${who}\n\n**中文**：${q.zh}\n\n**English**: ${q.en}`;
  });
  const md = `${fm('密码学名言', 'Quotes from Cryptography', 'quote')}\n\n# 名言（Quotes）\n\n> ${Q.length} 条。\n\n` + body.join('\n\n') + '\n';
  writeIfDiff(path.join(ROOT, 'quotes', 'quotes.md'), md);
  return Q.length;
}

function genFacts() {
  const F = loadFile('daily-fact.js').DAILY_FACT;
  const facts = F.FACTS.map((f, i) => `${i + 1}. **中文**：${f.zh}\n   **English**: ${f.en}`);
  const puzzles = F.PUZZLES.map((p, i) => `${i + 1}. **问**：${p.q.zh}（${p.q.en}）\n   **答**：${p.a.zh}\n   **提示**：${p.hint.zh}`);
  const md = `${fm('冷知识与谜题', 'Fun Facts & Puzzles', 'fact')}\n\n# 冷知识（Fun Facts）\n\n> ${F.FACTS.length} 条冷知识 + ${F.PUZZLES.length} 个谜题。\n\n## 冷知识\n\n${facts.join('\n\n')}\n\n## 谜题\n\n${puzzles.join('\n\n')}\n`;
  writeIfDiff(path.join(ROOT, 'facts', 'facts.md'), md);
  return F.FACTS.length + F.PUZZLES.length;
}

function genMap() {
  const M = loadFile('map.js').CRYPTO_MAP.EVENTS;
  const rows = M.map(e => `| ${e.icon || ''} ${e.zh} | ${e.x}, ${e.y} | ${e.year} | ${linkRef(e.link)} | ${e.desc ? e.desc.zh : ''} |`);
  const md = `${fm('密码学地图', 'Cryptography Map', 'map')}\n\n# 地图（Map）\n\n> ${M.length} 个地理锚点。\n\n| 事件 | 经纬度 | 年份 | 链接 | 说明 |\n| --- | --- | --- | --- | --- |\n` + rows.join('\n') + '\n';
  writeIfDiff(path.join(ROOT, 'map', 'map.md'), md);
  return M.length;
}

function genRelations() {
  const R = loadFile('people-rel.js').PEOPLE_REL.REL;
  const rows = R.map(e => `| \`${e.a}\` | \`${e.b}\` | ${e.type} | ${e.zh} | ${e.en} |`);
  const md = `${fm('实体关系', 'Entity Relations', 'relation')}\n\n# 关系（Relations）\n\n> ${R.length} 条实体间关系。\n\n| A | B | 类型 | 中文 | English |\n| --- | --- | --- | --- | --- |\n` + rows.join('\n') + '\n';
  writeIfDiff(path.join(ROOT, 'relations', 'relations.md'), md);
  return R.length;
}

function genEggs() {
  const E = loadFile('easter-eggs.js').EASTER_EGGS.EGGS;
  const rows = E.map(e => `| ${e.id} | ${e.hint} | ${e.en} | \`${e.answer}\` | \`${e.cipher}\` |`);
  const md = `${fm('彩蛋', 'Easter Eggs', 'egg')}\n\n# 彩蛋（Easter Eggs）\n\n> ${E.length} 个。\n\n| id | 线索 | 英文 | 答案 | 密文 |\n| --- | --- | --- | --- | --- |\n` + rows.join('\n') + '\n';
  writeIfDiff(path.join(ROOT, 'eggs', 'eggs.md'), md);
  return E.length;
}

function genQuizRanks() {
  const R = loadFile('quiz-meta.js').QUIZ_META.RANKS;
  const rows = R.map(r => `| ${r.name} | ${r.zh} | ${r.en} | ${r.icon} | ≥ ${(r.min * 100).toFixed(0)}% |`);
  const md = `${fm('等级体系', 'Rank System', 'quiz')}\n\n# 等级（Ranks）\n\n> ${R.length} 个。\n\n| 等级 | 中文 | English | 图标 | 门槛 |\n| --- | --- | --- | --- | --- |\n` + rows.join('\n') + '\n';
  writeIfDiff(path.join(ROOT, 'quiz', 'ranks.md'), md);
  return R.length;
}

function main() {
  const d = load();
  const out = {
    timeline: genTimeline(), quotes: genQuotes(), facts: genFacts(),
    map: genMap(), relations: genRelations(), eggs: genEggs(), quizRanks: genQuizRanks(),
  };
  console.log(`[gen-extras] 完成：`, JSON.stringify(out));
}

if (require.main === module) main();
module.exports = { main, genTimeline, genQuotes, genFacts, genMap, genRelations, genEggs, genQuizRanks, loadFile, linkRef, writeIfDiff, fm };
