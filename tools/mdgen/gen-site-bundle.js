#!/usr/bin/env node
/* ============================================================
   gen-site-bundle.js — Phase 3 数据流反转
   读仓库 MD（真源）+ poyi 数据 → 站点可直接加载的知识束 build/site-knowledge.js
   内容：24 域（概念 + 术语归属 + 计数）× 19 时代（5 叙述 + 12 章）× 实体计数。
   让站点知识图谱页直接渲染三轴结构，无需浏览器重算路由。幂等。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const { load, POYI } = require('./lib/load-poyi');
const { route, domainFile } = require('./gen-glossary');
const { CHAPTER_ERA } = require('./gen-people');
const { writeIfDiff } = require('./gen-extras');
const ROOT = path.resolve(__dirname, '..', '..');
const OUT = path.join(ROOT, 'build');

function readConcept(fp) {
  const c = fs.readFileSync(fp, 'utf8');
  const m = c.match(/## 概念\s*\n([\s\S]*?)(?=\n## )/);
  if (!m) return { zh: '', en: '' };
  const body = m[1];
  return { zh: (body.match(/\*\*中文\*\*：([\s\S]*?)(?=\n\n\*\*English\*\*)/) || [])[1] || '', en: (body.match(/\*\*English\*\*: ([\s\S]*)/) || [])[1] || '' };
}
function readTitle(fp, key = 'title') {
  const m = fs.readFileSync(fp, 'utf8').match(new RegExp(`^${key}: (.+)$`, 'm'));
  return m ? m[1].trim() : '';
}
function readNarrative(fp) {
  const c = fs.readFileSync(fp, 'utf8');
  return { zh: (c.match(/\*\*中文\*\*：([\s\S]*?)(?=\n\n\*\*English\*\*)/) || [])[1] || '', en: (c.match(/\*\*English\*\*: ([\s\S]*)/) || [])[1] || '' };
}
// 提取域 MD「## 算法 / 协议」节里的散页计数：协议介绍条数 + 工坊算法条数
function readScatter(fp) {
  if (!fs.existsSync(fp)) return { proto: 0, work: 0 };
  const c = fs.readFileSync(fp, 'utf8');
  const sec = c.match(/## 算法 \/ 协议\s*\n([\s\S]*?)(?=\n## )/);
  if (!sec) return { proto: 0, work: 0 };
  const body = sec[1];
  const ws = body.split(/###\s*可交互算法（Workshop）/);
  const protoHead = ws[0];
  const workBlock = ws[1] || '';
  const proto = (protoHead.match(/^### /gm) || []).length;
  const work = (workBlock.match(/^- `/gm) || []).length;
  return { proto, work };
}

function main() {
  const d = load();
  // —— 24 域：概念 + 术语归属 ——
  const domains = [];
  for (let i = 1; i <= 24; i++) {
    const dom = 'd' + String(i).padStart(2, '0');
    const fp = domainFile(dom);
    const con = fs.existsSync(fp) ? readConcept(fp) : { zh: '', en: '' };
    const terms = d.GLOSSARY.filter(g => route(g.term, g.cat) === dom).map(g => g.term);
    const sc = readScatter(fp);
    domains.push({ id: dom, title: readTitle(fp), titleEn: readTitle(fp, 'title_en'), zh: con.zh.trim(), en: con.en.trim(), termCount: terms.length, terms, proto: sc.proto, work: sc.work });
  }
  // —— 19 时代：5 叙述 + 12 章 ——
  const eraDir = path.join(ROOT, '02-eras');
  const eras = {};
  for (const slug of fs.readdirSync(eraDir).sort()) {
    const efp = path.join(eraDir, slug, 'era.md');
    if (fs.existsSync(efp)) {
      const n = readNarrative(efp);
      eras[slug] = { id: slug, title: readTitle(efp), titleEn: readTitle(efp, 'title_en'), zh: n.zh.trim(), en: n.en.trim(), type: 'era' };
    }
  }
  // 12 章并入对应时代
  for (const s of d.STORIES) {
    const era = CHAPTER_ERA[s.id]; if (!era) continue;
    const e = eras[era] || (eras[era] = { id: era, title: era, titleEn: era, zh: '', en: '', type: 'era' });
    const t = d.i18n.zh[s.titleKey] || s.id;
    (e.chapters = e.chapters || []).push({ id: s.id, title: t, href: `story.html?id=${s.id}` });
  }
  const eraList = Object.values(eras).sort((a, b) => a.id.localeCompare(b.id));
  // —— 实体计数 ——
  const count = dir => fs.existsSync(path.join(ROOT, dir)) ? fs.readdirSync(path.join(ROOT, dir)).filter(f => f.endsWith('.md')).length : 0;
  const bundle = {
    generated: new Date().toISOString(),
    source: 'cryptography-decode-history（Markdown 真源）',
    stats: { domains: domains.length, eras: eraList.length, people: count('people'), artifacts: count('artifacts'), machines: count('machines'), terms: d.GLOSSARY.length },
    domains, eras: eraList,
  };
  fs.mkdirSync(OUT, { recursive: true });
  const js = `/* 由 gen-site-bundle.js 从仓库 MD 生成 —— 站点知识图谱页加载用（勿手改）\n${bundle.generated} */\nwindow.KNOWLEDGE = ${JSON.stringify(bundle, null, 2)};\n`;
  writeIfDiff(path.join(OUT, 'site-knowledge.js'), js);
  const withTerms = domains.filter(x => x.termCount).length;
  console.log(`[gen-site-bundle] 完成：${domains.length} 域（${withTerms} 域有术语）+ ${eraList.length} 时代 → build/site-knowledge.js`);
}

if (require.main === module) main();
module.exports = { main };
