#!/usr/bin/env node
/* 一次性探测：加载 poyi 某个 JS 文件，报告它定义的顶层 window 对象及结构。
   用法：node inspect.js <file1,file2,...>   */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { POYI } = require('./load-poyi');

function probe(file) {
  const sandbox = {
    console,
    localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
    navigator: { language: 'zh' },
    Arcade: { i18n: { dicts: { zh: {}, en: {} } } },
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  const abs = path.join(POYI, file);
  if (!fs.existsSync(abs)) { console.log(`[缺] ${file}`); return; }
  vm.runInContext(fs.readFileSync(abs, 'utf8'), sandbox, { filename: file });
  const w = sandbox.window;
  const keys = Object.keys(w).filter(k => !['console', 'localStorage', 'navigator', 'Arcade', 'window'].includes(k));
  console.log(`\n===== ${file} ===== 顶层对象: ${keys.join(', ') || '(无 — 纯逻辑/挂载)'}`);
  for (const k of keys) {
    const v = w[k];
    if (Array.isArray(v)) console.log(`  ${k}: Array[${v.length}]  样例: ${JSON.stringify(v[0]).slice(0, 120)}`);
    else if (v && typeof v === 'object') {
      const sub = Object.keys(v);
      console.log(`  ${k}: Object{${sub.length}键} ${sub.slice(0, 8).join(', ')}${sub.length > 8 ? ' …' : ''}`);
      const first = v[sub[0]];
      if (first && typeof first === 'object' && !Array.isArray(first)) console.log(`    ${sub[0]} => ${JSON.stringify(first).slice(0, 120)}`);
    } else if (typeof v === 'function') {
      console.log(`  ${k}: function`);
    } else console.log(`  ${k}: ${JSON.stringify(v).slice(0, 80)}`);
  }
}

const files = (process.argv[2] || '').split(',').filter(Boolean);
files.forEach(probe);
