#!/usr/bin/env node
/* ============================================================
   build-search.js —— 检索页（无 JS 可用的服务端渲染 + Worker 客户端检索）
   输出：build/site/search/index.html
   用法：node tools/site/build-search.js
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const { build } = require('./lib/model');
const R = require('./lib/render');

const ROOT = path.resolve(__dirname, '..', '..');
process.chdir(ROOT);
const OUT = path.join(ROOT, 'build', 'site');
const model = build(ROOT);
const esc = R.esc;

/* 检索：标题 / 英文名 / 别名 / id 子串匹配（大小写不敏感） */
const q = (process.argv.find(a => a.startsWith('--q=')) || '').split('=')[1] || '';
const LANG = (process.argv.find(a => a.startsWith('--lang=')) || '').split('=')[1] || 'zh';

function search(kw) {
  const k = String(kw || '').trim().toLowerCase();
  if (!k) return [];
  const out = [];
  for (const e of model.entries) {
    const hay = [e.title, e.titleEn, e.id, ...(e.aliases || [])].filter(Boolean).join(' ').toLowerCase();
    let score = 0;
    if (e.id.toLowerCase() === k) score = 100;
    else if (e.title.toLowerCase() === k) score = 95;
    else if (e.titleEn && e.titleEn.toLowerCase() === k) score = 95;
    else if (hay.indexOf(k) >= 0) score = 50;
    if (score) {
      const idx = hay.indexOf(k);
      out.push({ e, score, snip: e.summary || '' });
    }
  }
  out.sort((a, b) => b.score - a.score || a.e.id.localeCompare(b.e.id));
  return out.slice(0, 120);
}

const hits = search(q);
const items = hits.map(h => {
  const e = h.e;
  const t = LANG === 'en' ? (e.titleEn || e.title) : e.title;
  return `<li><a href="${e.url}">${esc(t)}</a><i>${esc(LANG === 'en' ? e.typeEn : e.typeZh)}</i>
${e.aliases && e.aliases.length ? '<i class="al">' + esc(e.aliases.slice(0, 4).join(' / ')) + '</i>' : ''}
${h.snip ? '<p>' + esc(h.snip.slice(0, 180)) + '</p>' : ''}</li>`;
}).join('');

const L = (zh, en) => (LANG === 'en' ? en : zh);
const body = `
${R.breadcrumb([{ text: L('首页', 'Home'), url: '/' }, { text: L('检索', 'Search') }])}
<h1>${L('检索', 'Search')}</h1>
<form class="searchform" method="get" action="/search/">
  <input type="search" name="q" value="${esc(q)}" placeholder="${L('输入术语、人名、算法、标准编号…', 'term, person, algorithm, standard number…')}" autofocus>
  <input type="hidden" name="lang" value="${LANG}">
  <button type="submit">${L('检索', 'Search')}</button>
</form>
<p class="count">${q ? hits.length + ' ' + L('条结果', 'results') + '（共 ' + model.entries.length + ' 条可检索）' : L('共 ' + model.entries.length + ' 条可检索条目', model.entries.length + ' searchable entries')}</p>
${hits.length ? `<ul class="elist">${items}</ul>` : q ? '<p class="muted">' + L('没有匹配的条目。', 'No matching entries.') + '</p>' : ''}
<p class="view-note">${L('检索覆盖标题、英文名、别名与 ID。中文分词与拼音检索将在后续轮次加入。', 'Search covers titles, English names, aliases and IDs. Chinese tokenisation and pinyin arrive in a later round.')}</p>`;

fs.mkdirSync(path.join(OUT, 'search'), { recursive: true });
fs.writeFileSync(path.join(OUT, 'search', 'index.html'), R.layout({
  title: L('检索', 'Search'), titleEn: 'Search',
  desc: L('密码学知识站全文检索。', 'Full-text search across the cryptography atlas.'),
  url: '/search/', lang: LANG, body, scripts: ['/assets/common.js'],
}));
console.log('  ✓ search/index.html（' + hits.length + ' 条结果）');
