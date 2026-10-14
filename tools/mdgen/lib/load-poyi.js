#!/usr/bin/env node
/* ============================================================
   load-poyi.js — 在 vm 沙箱里加载 poyi.net 的 JS 数据文件，返回数据对象
   供 mdgen 生成器只读提取知识文本（不改 poyi 任何文件）。
   用法：const data = require('./lib/load-poyi').load();
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const POYI = 'C:/Users/chenhua/Desktop/poyi/assets/js';

function load(extraFiles) {
  const sandbox = {
    console,
    localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
    navigator: { language: 'zh' },
  };
  // Arcade.i18n.dicts 必须预先存在（i18n-archive/story 往里写）
  sandbox.Arcade = { i18n: { dicts: { zh: {}, en: {} } } };
  sandbox.window = sandbox; // window.X 与顶层 X 等价
  vm.createContext(sandbox);

  const files = [
    'stories.js',            // STORIES / PEOPLE / ARTIFACTS / PEOPLE_SRC / ARTIFACT_SRC
    'machine.js',            // MACHINE_MUSEUM.MACHINES（自包含 zh/en）
    'glossary-data.js',      // GLOSSARY（282 术语，自包含）
    'core/i18n-dict.js',     // stp.*.name/role/era/icon/fact/bio/quote  sta.*.name/desc/nature  st.cX.t 等摘要
    'plain/i18n-archive.js', // stp.*.bio/.quote（长传记，覆盖 dict 占位）  sta.*.text（密件全文）
    'plain/i18n-story.js',   // st.cX.b 章节正文
  ];
  if (extraFiles) files.push(...extraFiles);

  for (const rel of files) {
    const abs = path.join(POYI, rel);
    if (!fs.existsSync(abs)) { console.warn('[load-poyi] 缺失:', abs); continue; }
    vm.runInContext(fs.readFileSync(abs, 'utf8'), sandbox, { filename: rel });
  }

  const w = sandbox.window;
  return {
    STORIES: w.STORIES || [],
    PEOPLE: w.PEOPLE || [],
    ARTIFACTS: w.ARTIFACTS || [],
    PEOPLE_SRC: w.PEOPLE_SRC || {},
    ARTIFACT_SRC: w.ARTIFACT_SRC || {},
    MACHINES: (w.MACHINE_MUSEUM && w.MACHINE_MUSEUM.MACHINES) || [],
    GLOSSARY: w.GLOSSARY || [],
    i18n: sandbox.Arcade.i18n.dicts, // { zh: {...}, en: {...} }
    sandbox,
  };
}

module.exports = { load, POYI };

/* 自测：node load-poyi.js */
if (require.main === module) {
  const d = load();
  const zh = d.i18n.zh, en = d.i18n.en;
  const stpBio = Object.keys(zh).filter(k => /^stp\..+\.bio$/.test(k)).length;
  const stpQuote = Object.keys(zh).filter(k => /^stp\..+\.quote$/.test(k)).length;
  const staText = Object.keys(zh).filter(k => /^sta\..+\.text$/.test(k)).length;
  const stBody = Object.keys(zh).filter(k => /^st\.c\d+\.b$/.test(k)).length;
  const stTitle = Object.keys(zh).filter(k => /^st\.c\d+\.t$/.test(k)).length;
  console.log('STORIES', d.STORIES.length, '· PEOPLE', d.PEOPLE.length, '· ARTIFACTS', d.ARTIFACTS.length);
  console.log('MACHINES', d.MACHINES.length, '· GLOSSARY', d.GLOSSARY.length);
  console.log('i18n zh 键', Object.keys(zh).length, '· en 键', Object.keys(en).length);
  console.log('  stp.bio', stpBio, '· stp.quote', stpQuote, '· sta.text', staText, '· st.cX.b', stBody, '· st.cX.t', stTitle);
}
