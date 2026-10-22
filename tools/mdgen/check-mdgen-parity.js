#!/usr/bin/env node
/* ============================================================
   check-mdgen-parity.js — Phase 1 红线：生成 Markdown 与 poyi 源逐字段等价
   校验：人物 / 密件 / 机器 / 章节 / 术语 每字段都存在、归域正确。
   任一 FAIL 即退出码 1。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
  const { load } = require('./lib/load-poyi');
  const { CHAPTER_ERA } = require('./gen-people');
  const { route, domainFile } = require('./gen-glossary');
  const { PEOPLE: LEDGER_PEOPLE, MACHINES: LEDGER_MACHINES } = require('./source-ledger');
  const { BIOS } = require('./people-bios');
  const clean = v => (v && v !== 'undefined' ? v : ''); // 源数据里的 "undefined" 字符串视为空

const ROOT = path.resolve(__dirname, '..', '..');
let pass = 0, fail = 0;
const fails = [];

function ok(cond, msg) {
  if (cond) pass++;
  else { fail++; fails.push(msg); }
}
function existsAnd(p) { ok(fs.existsSync(p), `文件缺失 ${p}`); return fs.existsSync(p); }
function contains(fp, needle, label) {
  if (!fs.existsSync(fp)) return;
  const c = fs.readFileSync(fp, 'utf8');
  ok(c.includes(needle), `${path.basename(fp)} 缺 ${label}: ${needle.slice(0, 30)}…`);
}

function main() {
  const d = load();
  const zh = d.i18n.zh, en = d.i18n.en;

  // —— 人物 ——
  for (const id of d.PEOPLE) {
    const fp = path.join(ROOT, 'people', `${id}.md`);
    if (!existsAnd(fp)) continue;
    contains(fp, zh[`stp.${id}.name`], 'name');
    contains(fp, en[`stp.${id}.name`], 'name_en');
    const bb = BIOS[id] || {};
    const bio = bb.bio || clean(zh[`stp.${id}.bio`]); if (bio) contains(fp, bio.slice(0, 40), 'bio');
    const bioEn = bb.bioEn || clean(en[`stp.${id}.bio`]); if (bioEn) contains(fp, bioEn.slice(0, 40), 'bio_en');
    const role = zh[`stp.${id}.role`]; if (role) contains(fp, role, 'role');
    const quote = bb.quote || clean(zh[`stp.${id}.quote`]); if (quote) contains(fp, quote.slice(0, 20), 'quote');
    // 来源台账保护：有台账引文者，主引必须写进 .md
    if (LEDGER_PEOPLE[id] && LEDGER_PEOPLE[id].length) contains(fp, LEDGER_PEOPLE[id][0], '台账主引文');
  }
  console.log(`  人物 ${d.PEOPLE.length} 人字段校验`);

  // —— 密件 ——
  for (const a of d.ARTIFACTS) {
    const fp = path.join(ROOT, 'artifacts', `${a.id}.md`);
    if (!existsAnd(fp)) continue;
    contains(fp, zh[`sta.${a.id}.name`], 'name');
    const desc = zh[`sta.${a.id}.desc`]; if (desc) contains(fp, desc.slice(0, 40), 'desc');
    const text = zh[`sta.${a.id}.text`]; if (text) contains(fp, text.slice(0, 40), 'text');
    const textEn = en[`sta.${a.id}.text`]; if (textEn) contains(fp, textEn.slice(0, 40), 'text_en');
  }
  console.log(`  密件 ${d.ARTIFACTS.length} 件字段校验`);

  // —— 机器 ——
  for (const m of d.MACHINES) {
    const fp = path.join(ROOT, 'machines', `${m.id}.md`);
    if (!existsAnd(fp)) continue;
    contains(fp, m.name.zh, 'name_zh');
    contains(fp, m.name.en, 'name_en');
    contains(fp, m.summary.zh, 'summary_zh');
    contains(fp, m.summary.en, 'summary_en');
    contains(fp, m.history.zh.slice(0, 40), 'history_zh');
    for (const p of m.params) contains(fp, p.v.zh, `param ${p.zh}`);
    // 来源台账保护：机器主引必须写进 .md
    if (LEDGER_MACHINES[m.id] && LEDGER_MACHINES[m.id].length) contains(fp, LEDGER_MACHINES[m.id][0], '台账主引文');
  }
  console.log(`  机器 ${d.MACHINES.length} 台字段校验`);

  // —— 章节 ——
  for (const s of d.STORIES) {
    const era = CHAPTER_ERA[s.id]; if (!era) continue;
    const fp = path.join(ROOT, '02-eras', era, `${s.id}.md`);
    if (!existsAnd(fp)) continue;
    const body = zh[s.bodyKey]; if (body) contains(fp, body.slice(0, 40), 'body_zh');
    const bodyEn = en[s.bodyKey]; if (bodyEn) contains(fp, bodyEn.slice(0, 40), 'body_en');
    const concept = (s.concept && s.concept.zh); if (concept) contains(fp, concept, 'concept');
  }
  console.log(`  章节 ${d.STORIES.length} 章字段校验`);

  // —— 术语归域 ——
  let gOk = 0;
  for (const g of d.GLOSSARY) {
    const dom = route(g.term, g.cat);
    const fp = domainFile(dom);
    if (fs.existsSync(fp) && fs.readFileSync(fp, 'utf8').includes(`### ${g.term}`)) gOk++;
    else fails.push(`术语 ${g.term} 未在 ${dom}`);
  }
  ok(gOk === d.GLOSSARY.length, `术语归域 ${gOk}/${d.GLOSSARY.length}`);
  console.log(`  术语 ${d.GLOSSARY.length} 条归域校验`);

  // —— 小资产集合 ——
  const { loadFile } = require('./gen-extras');
  const fileHas = (rel, needle, label) => { const fp = path.isAbsolute(rel) ? rel : path.join(ROOT, rel); if (!fs.existsSync(fp)) { fails.push(`缺文件 ${rel}`); return; } if (!fs.readFileSync(fp, 'utf8').includes(needle)) fails.push(`${path.basename(fp)} 缺 ${label}`); };
  const tl = loadFile('timeline.js').CRYPTO_TIMELINE;
  fileHas('timeline/timeline.md', tl[0].zh, 'timeline 首条');
  fileHas('timeline/timeline.md', tl[tl.length - 1].zh, 'timeline 末条');
  const q = loadFile('quotes.js').QUOTES.QUOTES;
  fileHas('quotes/quotes.md', q[0].zh, 'quote 首条'); fileHas('quotes/quotes.md', q[q.length - 1].zh, 'quote 末条');
  const f = loadFile('daily-fact.js').DAILY_FACT;
  fileHas('facts/facts.md', f.FACTS[0].zh, 'fact 首条'); fileHas('facts/facts.md', f.FACTS[f.FACTS.length - 1].zh, 'fact 末条');
  fileHas('facts/facts.md', f.PUZZLES[0].q.zh, 'puzzle 首条');
  const mp = loadFile('map.js').CRYPTO_MAP.EVENTS;
  fileHas('map/map.md', mp[0].zh, 'map 首条'); fileHas('map/map.md', mp[mp.length - 1].zh, 'map 末条');
  const rel = loadFile('people-rel.js').PEOPLE_REL.REL;
  fileHas('relations/relations.md', rel[0].zh, 'relation 首条');
  const eg = loadFile('easter-eggs.js').EASTER_EGGS.EGGS;
  fileHas('eggs/eggs.md', eg[0].answer, 'egg 首条答案');
  const rk = loadFile('quiz-meta.js').QUIZ_META.RANKS;
  fileHas('quiz/ranks.md', rk[0].zh, 'rank 首条');

  // —— 混合资产 ——
  const bank = loadFile('quiz.js').QUIZ.BANK;
  fileHas('quiz/questions.md', bank[0].zh.q, '题库首题'); fileHas('quiz/questions.md', bank[bank.length - 1].zh.q, '题库末题');
  const cq = loadFile('chapter-quiz.js').CHAPTER_QUIZ.QUIZ;
  const cqFirst = Object.entries(cq).find(([id, arr]) => arr && arr.length);
  if (cqFirst) fileHas(path.join('02-eras', CHAPTER_ERA[cqFirst[0]], cqFirst[0] + '.md'), cqFirst[1][0].zh.q, '章节测验');
  const PL = loadFile('protocols.js').PROTOCOL_LAB;
  fileHas(domainFile('d06'), PL.otpIntro.zh, '协议 OTP 介绍');
  fileHas(domainFile('d11'), PL.dhpIntro.zh, '协议 DH 介绍');
  const ALG = loadFile('workshop.js').Workshop.ALGOS;
  fileHas(domainFile('d02'), ALG.caesar.enName, '工坊 caesar');
  fileHas(domainFile('d08'), ALG.aes.enName, '工坊 aes');
  fileHas(path.join('02-eras', 'e19-china', 'china.md'), 'SM4/SM3', 'zh-crypto 国密段');
  fileHas(path.join('02-eras', 'e19-china', 'china.md'), '曾希圣', 'zh-crypto 曾希圣段');
  fileHas('toolkit/toolkit.md', 'openssl s_client', 'toolkit TLS 命令');
  fileHas('toolkit/toolkit.md', 'argon2id', 'toolkit argon2 卡片');

  console.log('\n========================================');
  console.log(`PASS ${pass} · FAIL ${fail}`);
  if (fails.length) {
    console.log('失败项：');
    fails.slice(0, 40).forEach(f => console.log('  ✗', f));
    if (fails.length > 40) console.log(`  …其余 ${fails.length - 40} 条`);
    process.exit(1);
  } else {
    console.log('✅ Phase 1 等价校验全绿');
  }
}

if (require.main === module) main();
module.exports = { main };
