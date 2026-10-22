/* ============================================================
   lib/render.js —— 知识站页面渲染
   原则：实体页正文在无 JS 时也必须完整可读；所有交互是增强。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');

const esc = s => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

/* 极简 Markdown → HTML（够用即可：标题/列表/粗体/行内码/段落/链接/表格） */
function md2html(md) {
  if (!md) return '';
  const lines = String(md).split(/\r?\n/);
  let out = [], inList = false, inCode = false, inTable = false;
  const inline = t => esc(t)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, a, b) => '<a href="' + esc(b) + '">' + a + '</a>');
  const closeList = () => { if (inList) { out.push('</ul>'); inList = false; } };
  const closeTable = () => { if (inTable) { out.push('</tbody></table>'); inTable = false; } };
  for (let i = 0; i < lines.length; i++) {
    const ln = lines[i];
    if (/^```/.test(ln)) {
      closeList(); closeTable();
      if (!inCode) { out.push('<pre><code>'); inCode = true; }
      else { out.push('</code></pre>'); inCode = false; }
      continue;
    }
    if (inCode) { out.push(esc(ln)); continue; }
    const h = ln.match(/^(#{1,4})\s+(.*)$/);
    if (h) { closeList(); closeTable(); const lv = h[1].length; out.push('<h' + lv + '>' + inline(h[2]) + '</h' + lv + '>'); continue; }
    if (/^\|/.test(ln)) {
      const cells = ln.split('|').slice(1, -1).map(c => c.trim());
      if (/^[\s|:-]+$/.test(ln)) continue;
      if (!inTable) { out.push('<table><thead><tr>' + cells.map(c => '<th>' + inline(c) + '</th>').join('') + '</tr></thead><tbody>'); inTable = true; }
      else out.push('<tr>' + cells.map(c => '<td>' + inline(c) + '</td>').join('') + '</tr>');
      continue;
    }
    closeTable();
    const li = ln.match(/^\s*[-*]\s+(.*)$/);
    if (li) { if (!inList) { out.push('<ul>'); inList = true; } out.push('<li>' + inline(li[1]) + '</li>'); continue; }
    closeList();
    if (!ln.trim()) continue;
    out.push('<p>' + inline(ln) + '</p>');
  }
  closeList(); closeTable();
  if (inCode) out.push('</code></pre>');
  return out.join('\n');
}

/* ---------- 站点外壳 ---------- */
function layout(o) {
  const {
    title, titleEn, desc, url, body, lang = 'zh',
    nav = true, scripts = [], styles = [], bodyClass = '', jsonLd = null,
  } = o;
  const L = (zh, en) => (lang === 'en' ? en : zh);
  const navHtml = nav ? `
  <header class="hd">
    <a class="brand" href="/">${L('密码学知识站', 'Cryptography Atlas')}</a>
    <nav class="nv">
      <a href="/eras/">${L('时代', 'Eras')}</a>
      <a href="/domains/">${L('技术域', 'Domains')}</a>
      <a href="/terms/">${L('术语', 'Terms')}</a>
      <a href="/people/">${L('人物', 'People')}</a>
      <a href="/artifacts/">${L('密件', 'Artifacts')}</a>
      <a href="/machines/">${L('机器', 'Machines')}</a>
      <a href="/algorithms/">${L('算法', 'Algorithms')}</a>
      <a href="/attacks/">${L('攻击', 'Attacks')}</a>
      <a href="/protocols/">${L('协议', 'Protocols')}</a>
      <a href="/standards/">${L('标准', 'Standards')}</a>
      <a href="/theorems/">${L('定理', 'Theorems')}</a>
      <a href="/events/">${L('事件', 'Events')}</a>
      <a href="/history/">${L('中国密码史', 'China')}</a>
      <a href="/views/crystal/">${L('三维晶格', 'Crystal')}</a>
      <a href="/views/timeline/">${L('时间轴', 'Timeline')}</a>
      <a href="/views/tree/">${L('技术树', 'Tree')}</a>
      <a href="/views/matrix/">${L('交叉矩阵', 'Matrix')}</a>
      <a href="/views/paths/">${L('学习路径', 'Paths')}</a>
      <a href="/views/sources/">${L('出处', 'Sources')}</a>
    </nav>
    <div class="tools">
      <input id="q" type="search" placeholder="${L('搜索…（/ 聚焦）', 'Search… (/)')}" aria-label="search">
      <button id="lang" type="button" title="switch language">${lang === 'en' ? '中' : 'EN'}</button>
    </div>
  </header>` : '';

  return `<!DOCTYPE html>
<html lang="${lang === 'en' ? 'en' : 'zh-CN'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} · ${esc(titleEn)}</title>
<meta name="description" content="${esc(desc || title)}">
<meta name="theme-color" content="#0a0a12">
<link rel="canonical" href="https://crypto.poyi.net${esc(url)}">
<link rel="alternate" hreflang="zh-Hans" href="https://crypto.poyi.net${esc(url)}?lang=zh">
<link rel="alternate" hreflang="en" href="https://crypto.poyi.net${esc(url)}?lang=en">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔐</text></svg>">
<link rel="stylesheet" href="/assets/site.css">
${styles.map(s => '<link rel="stylesheet" href="' + s + '">').join('\n')}
${jsonLd ? '<script type="application/ld+json">' + JSON.stringify(jsonLd) + '</script>' : ''}
</head>
<body class="${bodyClass}">
${navHtml}
<main id="main">
${body}
</main>
<footer class="ft">
  <p>${L('内容源自 ', 'Content from ')}<a href="https://github.com/poyinet/cryptography-decode-history">cryptography-decode-history</a>${L('（知识源）· 纯文字出处，零外链正文', ' · plain-text sources, no outbound links in body')}</p>
  <p><a href="/sitemap.xml">sitemap</a> · <a href="/about/">${L('关于', 'About')}</a></p>
</footer>
${scripts.map(s => '<script src="' + s + '"></script>').join('\n')}
</body>
</html>`;
}

/* ---------- 组件 ---------- */
function breadcrumb(items) {
  return '<nav class="crumb">' + items.map((it, i) =>
    (it.url ? '<a href="' + esc(it.url) + '">' + esc(it.text) + '</a>' : '<span>' + esc(it.text) + '</span>')
  ).join('<i>/</i>') + '</nav>';
}

const LEVEL_ZH = { 1: '入门', 2: '进阶', 3: '专家', 4: '研究' };

function axesRow(e, lang, model) {
  const L = (zh, en) => (lang === 'en' ? en : zh);
  const cells = [];
  const link = (type, id) => {
    const t = model.byId.get(id);
    if (!t) return esc(id);
    return '<a href="' + t.url + '">' + esc(lang === 'en' ? (t.titleEn || t.title) : t.title) + '</a>';
  };
  if (e.era && e.era.length) cells.push('<span class="ax"><b>' + L('时代', 'Era') + '</b>' + e.era.map(x => link('era', x)).join('、') + '</span>');
  if (e.domain && e.domain.length) cells.push('<span class="ax"><b>' + L('技术域', 'Domain') + '</b>' + e.domain.map(x => link('domain', x)).join('、') + '</span>');
  if (e.subtopic && e.subtopic.length) cells.push('<span class="ax"><b>' + L('子主题', 'Subtopic') + '</b>' + e.subtopic.map(x => link('x', x)).join('、') + '</span>');
  if (e.apps && e.apps.length) cells.push('<span class="ax"><b>' + L('应用', 'Application') + '</b>' + e.apps.join('、') + '</span>');
  if (e.threats && e.threats.length) cells.push('<span class="ax"><b>' + L('威胁模型', 'Threat') + '</b>' + e.threats.join('、') + '</span>');
  if (e.level) cells.push('<span class="ax"><b>' + L('难度', 'Level') + '</b>' + (lang === 'en' ? ['', 'Intro', 'Intermediate', 'Expert', 'Research'][e.level] : LEVEL_ZH[e.level]) + '</span>');
  return '<div class="axes">' + cells.join('') + '</div>';
}

function sourcesBlock(e, lang) {
  const L = (zh, en) => (lang === 'en' ? en : zh);
  if (!e.sources || !e.sources.length) {
    return '<section class="src"><h2>' + L('出处', 'Sources') + '</h2><p class="muted">' +
      L('待补证（本条尚未核证）', 'To be verified (not yet sourced)') + '</p></section>';
  }
  const KIND = { primary: L('一手史料', 'Primary'), authoritative: L('权威二手', 'Authoritative'), tertiary: L('百科/一般', 'Tertiary') };
  const items = e.sources.map(s =>
    '<li><span class="kind ' + s.kind + '">' + (KIND[s.kind] || s.kind) + '</span> ' + esc(s.title) + '</li>').join('');
  return '<section class="src"><h2>' + L('出处', 'Sources') + '</h2><ul class="srclist">' + items + '</ul></section>';
}

function relatedBlock(e, model, lang) {
  const L = (zh, en) => (lang === 'en' ? en : zh);
  if (!e.related || !e.related.length) return '';
  const items = e.related.slice(0, 18).map(id => {
    const t = model.byId.get(id);
    if (!t) return '';
    return '<li><a href="' + t.url + '">' + esc(lang === 'en' ? (t.titleEn || t.title) : t.title) + '</a>' +
      '<i>' + esc(lang === 'en' ? t.typeEn : t.typeZh) + '</i></li>';
  }).join('');
  return '<section class="rel"><h2>' + L('关联', 'Related') + '</h2><ul class="rellist">' + items + '</ul></section>';
}

function entityPage(e, model, lang) {
  const L = (zh, en) => (lang === 'en' ? en : zh);
  const title = lang === 'en' ? (e.titleEn || e.title) : e.title;
  const body = lang === 'en' ? (e.bodyEn || '') : (e.body || '');
  let summary = lang === 'en' ? e.summaryEn : e.summary;
  if (!summary) {
    /* 无独立摘要时用轴信息生成一句可读的描述（保证 description 非空且可检索） */
    const bits = [];
    if (e.era && e.era.length) bits.push(e.era.join(', '));
    if (e.domain && e.domain.length) bits.push(e.domain.join(', '));
    if (e.level) bits.push('L' + e.level);
    const head = lang === 'en' ? (e.titleEn || e.title) : e.title;
    summary = '[' + (lang === 'en' ? e.typeEn : e.typeZh) + '] ' + head + (bits.length ? ' · ' + bits.join(' · ') : '');
  }
  const bodyHtml = body ? md2html(body) : '';
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    name: title, description: summary || title,
    inLanguage: lang === 'en' ? 'en' : 'zh-CN',
    url: 'https://crypto.poyi.net' + e.url,
  };
  const bodyHtml2 = `
${breadcrumb([
    { text: L('首页', 'Home'), url: '/' },
    { text: lang === 'en' ? e.typeEn : e.typeZh, url: '/' + e.typePath + '/' },
    { text: title },
  ])}
<article class="ent">
  <h1>${esc(title)}</h1>
  ${lang === 'en' && e.title !== e.titleEn ? '<p class="alt">' + esc(e.title) + '</p>' : ''}
  ${summary ? '<p class="lead">' + esc(summary) + '</p>' : ''}
  ${axesRow(e, lang, model)}
  ${bodyHtml || '<p class="muted">' + L('本条正文正在撰写中（总目录已登记，出处待核证）。', 'Body is being written (registered in the inventory; sources pending).') + '</p>'}
  ${sourcesBlock(e, lang)}
  ${relatedBlock(e, model, lang)}
</article>`;
  return layout({
    title, titleEn: e.titleEn || e.title,
    desc: summary || title, url: e.url, lang, body: bodyHtml2,
    jsonLd,
  });
}

function listPage(o) {
  const { title, titleEn, desc, url, lang, items, model, intro, typePath } = o;
  const L = (zh, en) => (lang === 'en' ? en : zh);
  const rows = items.map(e => {
    const t = lang === 'en' ? (e.titleEn || e.title) : e.title;
    const sub = e.summary || (e.note || '');
    return '<li><a href="' + e.url + '">' + esc(t) + '</a>' +
      (e.aliases && e.aliases.length ? '<i class="al">' + esc(e.aliases.slice(0, 3).join(' / ')) + '</i>' : '') +
      (sub ? '<p>' + esc(sub.slice(0, 160)) + '</p>' : '') + '</li>';
  }).join('');
  /* 描述必须够长（SEO 摘要位），不能只写类型名 */
  const autoDesc = L(
    '密码学知识站 · ' + title + '：共 ' + items.length + ' 条，按时代 / 技术域 / 应用场景 / 威胁模型 / 难度多轴标注，每条可溯源。',
    'Cryptography Atlas · ' + titleEn + ': ' + items.length + ' entries, each tagged along era, domain, application, threat model and difficulty, every one sourced.');
  const body = `
${breadcrumb([{ text: L('首页', 'Home'), url: '/' }, { text: title }])}
<h1>${esc(title)}</h1>
${intro ? '<p class="lead">' + intro + '</p>' : ''}
<p class="count">${items.length} ${L('条', 'entries')}</p>
<ul class="elist">${rows}</ul>`;
  return layout({ title, titleEn, desc: desc || autoDesc, url, lang, body });
}

module.exports = { esc, md2html, layout, breadcrumb, axesRow, sourcesBlock, relatedBlock, entityPage, listPage, LEVEL_ZH };
