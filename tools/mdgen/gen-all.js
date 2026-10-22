#!/usr/bin/env node
/* ============================================================
   gen-all.js — Phase 1 全量编排：进程内按依赖顺序调用各生成器 main()，
   最后跑 parity 校验。用法：node gen-all.js  （幂等，可重复）
   ============================================================ */
'use strict';
const ORDER = [
  'gen-people', 'gen-artifacts', 'gen-machines', 'gen-glossary',
  'gen-protocols', 'gen-workshop', 'gen-eras', 'gen-extras',
  'gen-quiz', 'gen-zh-crypto', 'gen-toolkit',
  'gen-domains', 'gen-eras-fill', 'gen-links', 'gen-index', 'gen-site-bundle',
];

function main() {
  const t0 = Date.now();
  console.log('== Phase 1 全量生成 ==\n');
  for (const name of ORDER) {
    const mod = require('./' + name);
    if (typeof mod.main !== 'function') { console.error(`[FAIL] ${name} 无 main 导出`); process.exit(1); }
    mod.main();
  }
  console.log(`\n== 生成完成 ${((Date.now() - t0) / 1000).toFixed(1)}s ==`);
  require('./check-mdgen-parity').main();
}

if (require.main === module) main();
module.exports = { main, ORDER };
