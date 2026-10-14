#!/usr/bin/env node
/* ============================================================
   gen-toolkit.js — 密码工具箱专题（TOOLKIT.render 内嵌 6 板块 × 4 卡片）
   → toolkit/toolkit.md。数据/逻辑分离：mock document 调 render() 两次(zh/en)
   捕获 HTML 解析；每个卡片含真实命令。幂等。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { POYI } = require('./lib/load-poyi');
const { writeIfDiff } = require('./gen-extras');
const ROOT = path.resolve(__dirname, '..', '..');

function capture(lang) {
  const cap = { html: '' };
  const sandbox = {
    console, localStorage: { getItem: () => null, setItem: () => {} }, navigator: { language: lang },
    Arcade: { i18n: { getLang: () => lang } },
    document: { getElementById: () => ({ set innerHTML(v) { cap.html = v; }, get innerHTML() { return cap.html; } }) },
  };
  sandbox.window = sandbox; vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(POYI, 'toolkit.js'), 'utf8'), sandbox);
  sandbox.TOOLKIT.render();
  return cap.html;
}

function parse(html) {
  const secs = html.split('<section class="tk-sec">').slice(1).map(s => {
    const t = (s.match(/<div class="tk-t">([\s\S]*?)<\/div>/) || [])[1] || '';
    const d = (s.match(/<div class="tk-d">([\s\S]*?)<\/div>/) || [])[1] || '';
    const cards = s.split('<div class="tk-card">').slice(1).map(c => {
      const ct = (c.match(/<div class="tk-ct">([\s\S]*?)<\/div>/) || [])[1] || '';
      const cd = (c.match(/<div class="tk-cd">([\s\S]*?)<\/div>/) || [])[1] || '';
      const code = (c.match(/<div class="tk-code">([\s\S]*?)<\/div>/) || [])[1] || '';
      const links = [];
      const re = /<a class="tk-l" href="([^"]*)">([\s\S]*?)<\/a>/g;
      let m; while ((m = re.exec(c))) links.push({ href: m[1], text: m[2] });
      return { ct, cd, code, links };
    });
    return { t, d, cards };
  });
  return secs;
}

function main() {
  const FENCE = String.fromCharCode(96).repeat(3);
  const zh = parse(capture('zh'));
  const en = parse(capture('en'));
  let body = '';
  zh.forEach((sec, i) => {
    body += `## ${sec.t}\n\n**中文**：${sec.d}\n\n**English**: ${en[i].d}\n\n`;
    sec.cards.forEach((c, j) => {
      const ec = en[i].cards[j];
      body += `### ${c.ct}\n\n**中文**：${c.cd}\n\n**English**: ${ec.cd}\n\n`;
      if (c.code) body += FENCE + '\n' + c.code.trim() + '\n' + FENCE + '\n\n';
      if (c.links.length) body += c.links.map((l, k) => `- [${l.text}](${l.href}) · *${ec.links[k] ? ec.links[k].text : ''}*`).join('\n') + '\n\n';
    });
  });
  const cardCount = zh.reduce((a, s) => a + s.cards.length, 0);
  const md = ['---', 'title: 密码工具箱', 'title_en: Cryptography Toolkit', 'type: fact', '---', '',
    `# 工具箱（Toolkit）`, '', `> 现实世界的工具与标准 · ${zh.length} 板块 / ${cardCount} 卡片。`, '', body].join('\n');
  const fp = path.join(ROOT, 'toolkit', 'toolkit.md');
  writeIfDiff(fp, md);
  console.log(`[gen-toolkit] 完成：${zh.length} 板块 / ${cardCount} 卡片 → ${path.relative(ROOT, fp)}`);
}

if (require.main === module) main();
module.exports = { main };
