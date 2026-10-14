#!/usr/bin/env node
/* ============================================================
   gen-zh-crypto.js — 中华密码史专题（ZHCRYPTO.render 内嵌数据）→ e19-china/china.md
   数据/逻辑分离：mock document 调 render() 两次(zh/en)捕获 HTML，解析成三时代段。
   这正是 E19 中国平行线的真源内容。幂等。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { POYI, writeIfDiff } = { POYI: require('./lib/load-poyi').POYI, writeIfDiff: require('./gen-extras').writeIfDiff };
const ROOT = path.resolve(__dirname, '..', '..');

function capture(lang) {
  const captured = { html: '' };
  const sandbox = {
    console, localStorage: { getItem: () => null, setItem: () => {} }, navigator: { language: lang },
    Arcade: { i18n: { getLang: () => lang } },
    document: { getElementById: () => ({ set innerHTML(v) { captured.html = v; }, get innerHTML() { return captured.html; } }) },
  };
  sandbox.window = sandbox; vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(POYI, 'zh-crypto.js'), 'utf8'), sandbox);
  sandbox.ZHCRYPTO.render();
  return captured.html;
}

function parseEraBlock(html) {
  const blocks = html.split('<div class="zc-era">').slice(1);
  return blocks.map(b => {
    const t = (b.match(/<div class="zc-t">([\s\S]*?)<\/div>/) || [])[1] || '';
    const d = (b.match(/<p class="zc-d">([\s\S]*?)<\/p>/) || [])[1] || '';
    const links = [];
    const linkRe = /<a class="zc-l" href="([^"]*)">([\s\S]*?)<\/a>/g;
    let m; while ((m = linkRe.exec(b))) links.push({ href: m[1], text: m[2] });
    return { t, d, links };
  });
}

function main() {
  const zh = parseEraBlock(capture('zh'));
  const en = parseEraBlock(capture('en'));
  const n = Math.min(zh.length, en.length);
  let body = '';
  for (let i = 0; i < n; i++) {
    body += `### ${zh[i].t}\n\n**中文**：${zh[i].d}\n\n**English**: ${en[i].d}\n\n`;
    body += zh[i].links.map((l, j) => `- [${l.text}](${l.href}) · *${en[i].links[j] ? en[i].links[j].text : ''}*`).join('\n') + '\n';
  }
  const md = ['---', 'title: 中华密码史', 'title_en: Chinese Cryptography', 'type: era', 'era: e19-china', '---', '',
    `# 中华密码史（Chinese Cryptography）`, '', `> 中国平行线 · ${n} 段。`, '', body].join('\n');
  const fp = path.join(ROOT, '02-eras', 'e19-china', 'china.md');
  writeIfDiff(fp, md);
  console.log(`[gen-zh-crypto] 完成：${n} 段 → ${path.relative(ROOT, fp)}`);
}

if (require.main === module) main();
module.exports = { main };
