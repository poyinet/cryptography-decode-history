#!/usr/bin/env node
/* ============================================================
   build.js —— 知识站静态生成器
   输入：build/inventory.json（知识总目录）+ 仓内 Markdown 语料 + 主站词典
   输出：build/site/**（纯静态，可直接发布到 crypto.poyi.net）
   用法：node tools/site/build.js [--lang=zh|en]
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const { build } = require('./lib/model');
const R = require('./lib/render');

const ROOT = path.resolve(__dirname, '..', '..');
process.chdir(ROOT);
const OUT = path.join(ROOT, 'build', 'site');
const LANG = (process.argv.find(a => a.startsWith('--lang=')) || '').split('=')[1] || 'zh';

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const model = build(ROOT);
const esc = R.esc;
let pages = 0, bytes = 0;

function write(rel, content) {
  const abs = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content, 'utf8');
  pages++; bytes += Buffer.byteLength(content, 'utf8');
}
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dest, e.name);
    if (e.isDirectory()) copyDir(s, d);
    else { fs.copyFileSync(s, d); }
  }
}

console.log('== 1. 数据模型 ==');
console.log('  ' + model.entries.length + ' 条目 · ' + model.stats.subtopics + ' 子主题');
const byType = {};
for (const e of model.entries) byType[e.type] = (byType[e.type] || 0) + 1;
console.log('  ' + Object.entries(byType).map(([k, v]) => k + ':' + v).join(' '));

console.log('== 2. 静态资源 ==');
copyDir(path.join(__dirname, 'assets'), path.join(OUT, 'assets'));
copyDir(path.join(__dirname, 'vendor'), path.join(OUT, 'assets', 'vendor'));

console.log('== 3. 首页 ==');
{
  const L = (zh, en) => (LANG === 'en' ? en : zh);
  const s = model.stats;
  const chips = Object.keys(byType).map(t => {
    const meta = require('./lib/model').TYPES[t] || {};
    return '<a class="chip" href="/' + (meta.path || 'items') + '/">' + esc(L(meta.zh || t, meta.en || t)) + ' ' + s.types[t] + '</a>';
  }).join('');
  const body = `
<section class="hero">
  <div>
    <h1>${L('密码学知识晶格', 'The Cryptography Lattice')}</h1>
    <p class="lead">${L('三千年的加密与破译，按 <b>时代 / 技术域 / 应用场景 / 威胁模型 / 难度 / 层级</b> 六个维度铺开；每条内容都可查、可溯源、可下钻。',
    'Three millennia of encryption and cryptanalysis, laid out along six axes — <b>era / domain / application / threat model / difficulty / layer</b>. Every entry is searchable, sourced and drillable.')}</p>
    <div class="stats">
      <span class="stat"><b>${s.total}</b>${L('条知识条目', 'entries')}</span>
      <span class="stat"><b>${s.types.era || 0}</b>${L('个时代', 'eras')}</span>
      <span class="stat"><b>${s.types.domain || 0}</b>${L('个技术域', 'domains')}</span>
      <span class="stat"><b>${s.subtopics}</b>${L('个子主题', 'subtopics')}</span>
      <span class="stat"><b>${s.quality.tier1 || 0}</b>${L('旗舰级', 'flagship')}</span>
    </div>
    <p class="view-note">${L('七个视角：', 'Seven views:')}
      <a href="/views/crystal/">${L('三维晶格', 'Crystal')}</a> ·
      <a href="/views/timeline/">${L('编年时间轴', 'Timeline')}</a> ·
      <a href="/views/tree/">${L('技术树', 'Tech tree')}</a> ·
      <a href="/views/matrix/">${L('交叉矩阵', 'Matrix')}</a> ·
      <a href="/views/paths/">${L('学习路径', 'Learning paths')}</a> ·
      <a href="/views/sources/">${L('出处总表', 'Sources')}</a>
    </p>
  </div>
  <div>
    <div class="card"><h3>${L('按类型浏览', 'Browse by type')}</h3><div class="chips">${chips}</div></div>
    <div class="card"><h3>${L('按场景浏览', 'Browse by application')}</h3><div class="chips">${[...model.byApp.keys()].slice(0, 14).map(a => '<a class="chip" href="/applications/#' + esc(a) + '">' + esc(a) + '</a>').join('')}</div></div>
    <div class="card"><h3>${L('按威胁模型浏览', 'Browse by threat model')}</h3><div class="chips">${[...model.byThreat.keys()].slice(0, 14).map(a => '<a class="chip" href="/applications/#threat-' + esc(a) + '">' + esc(a) + '</a>').join('')}</div></div>
  </div>
</section>`;
  write('index.html', R.layout({
    title: L('密码学知识站', 'Cryptography Atlas'), titleEn: 'Cryptography Atlas',
    desc: L('密码学知识站：三维知识晶格，按时代/技术域/应用场景/威胁模型多维展示，中英同步，条目可溯源。',
      'A multi-dimensional atlas of cryptography: eras, domains, applications and threat models, bilingual, every entry sourced.'),
    url: '/', lang: LANG, body,
    scripts: ['/assets/common.js'],
  }));
}

console.log('== 4. 列表页 ==');
for (const [type, list] of model.byType.entries()) {
  const meta = require('./lib/model').TYPES[type];
  if (!meta) continue;
  const L = (zh, en) => (LANG === 'en' ? en : zh);
  const intro = L(
    '本类共 ' + list.length + ' 条。按难度与多轴标注浏览；点条目进入详情。',
    list.length + ' entries in this class. Browse by level and axes; open an entry for detail.');
  write(meta.path + '/index.html', R.listPage({
    title: L(meta.zh, meta.en), titleEn: meta.en, url: '/' + meta.path + '/', lang: LANG,
    items: list.slice().sort((a, b) => (a.level - b.level) || a.id.localeCompare(b.id)),
    model, intro, typePath: meta.path,
  }));
}

console.log('== 5. 实体详情页 ==');
for (const e of model.entries) {
  const meta = require('./lib/model').TYPES[e.type];
  if (!meta) continue;
  write(meta.path + '/' + e.id + '/index.html', R.entityPage(e, model, LANG));
}

console.log('== 6. 视图 ==');
{
  const L = (zh, en) => (LANG === 'en' ? en : zh);
  const view = (slug, title, titleEn, desc, inner, scripts) => {
    write('views/' + slug + '/index.html', R.layout({
      title, titleEn, desc, url: '/views/' + slug + '/', lang: LANG,
      body: `<nav class="crumb"><a href="/">${L('首页', 'Home')}</a><i>/</i><span>${esc(title)}</span></nav>
<h1>${esc(title)}</h1>${inner}`, scripts: scripts || [],
    }));
  };

  /* V1 三维晶格（three.js 按需加载） */
  view('crystal', L('三维知识晶格', 'Knowledge Crystal'), 'Knowledge Crystal',
    L('时代 × 技术域 × 实体的三维晶格，可旋转、缩放、按轴筛选。', 'A 3D lattice of era × domain × entity.'),
    `<p class="view-note">${L('拖动旋转 · 滚轮缩放 · 悬停高亮 · 点击下钻 · 用图例筛选轴。', 'Drag to rotate, scroll to zoom, hover to highlight, click to drill, legend to filter.')}</p>
<div class="view" id="crystal"><canvas id="cv"></canvas><div id="legend" class="legend"></div></div>`,
    ['/assets/vendor/three.min.js', '/assets/common.js', '/assets/crystal.js']);

  /* V2 编年时间轴 */
  {
    const eras = model.eras.slice().sort((a, b) => a.id.localeCompare(b.id));
    const items = eras.map(e => {
      const n = model.byEra.get(e.id) || [];
      return `<div class="tl-item"><div class="y">${esc(e.id)}</div><h3><a href="${e.url}">${esc(LANG === 'en' ? (e.titleEn || e.title) : e.title)}</a></h3>
<p class="muted">${n.length} ${L('条关联条目', 'related entries')}</p></div>`;
    }).join('');
    view('timeline', L('编年时间轴', 'Chronological Timeline'), 'Chronological Timeline',
      L('十九个时代的三千年脉络。', 'Three millennia across nineteen eras.'),
      `<p class="view-note">${L('每条为该时代收录的全部知识条目数。', 'Counts of entries recorded under each era.')}</p><div class="tl">${items}</div>`);
  }

  /* V3 技术树 */
  {
    const doms = model.domains.slice().sort((a, b) => a.id.localeCompare(b.id));
    const cards = doms.map(d => {
      const subs = [...model.bySubtopic.entries()].filter(([k, v]) => v.some(e => e.domain.includes(d.id)));
      const n = model.byDomain.get(d.id) || [];
      return `<div class="card"><h3><a href="${d.url}">${esc(LANG === 'en' ? (d.titleEn || d.title) : d.title)}</a></h3>
<p class="muted">${n.length} ${L('条', 'entries')} · ${subs.length} ${L('个子主题', 'subtopics')}</p>
<p>${esc((subs.map(([k]) => k)).slice(0, 8).join('、')) || '—'}</p></div>`;
    }).join('');
    view('tree', L('技术体系树', 'Technology Tree'), 'Technology Tree',
      L('24 个技术域及其子主题。', '24 domains and their subtopics.'),
      `<div class="grid">${cards}</div>`);
  }

  /* V4 交叉矩阵 */
  {
    const eras = model.eras.slice().sort((a, b) => a.id.localeCompare(b.id));
    const doms = model.domains.slice().sort((a, b) => a.id.localeCompare(b.id));
    const cell = {};
    for (const e of model.entries) {
      if (e.type === 'era' || e.type === 'domain') continue;
      for (const er of e.era) for (const d of e.domain) {
        const k = er + '|' + d;
        cell[k] = cell[k] || { t1: 0, t2: 0, t3: 0, todo: 0 };
        if (e.quality === 'tier1') cell[k].t1++; else if (e.quality === 'tier2') cell[k].t2++;
        else if (e.quality === 'tier3') cell[k].t3++; else cell[k].todo++;
      }
    }
    const cls = c => !c ? '' : c.todo ? 'todo' : c.t1 ? 't1' : c.t2 ? 't2' : 't3';
    let head = '<tr><th>' + L('时代＼域', 'Era \\ Domain') + '</th>';
    for (const d of doms) head += '<th><a href="' + d.url + '">' + esc(d.title) + '</a></th>';
    head += '</tr>';
    const rows = eras.map(er => {
      let r = '<tr><th><a href="' + er.url + '">' + esc(er.title) + '</a></th>';
      for (const d of doms) {
        const c = cell[er.id + '|' + d.id];
        r += '<td class="' + cls(c) + '">' + (c ? (c.todo ? '**' + c.todo + '**' : c.t1 ? '★' + c.t1 : c.t2 ? '●' + c.t2 : '○' + c.t3) : '·') + '</td>';
      }
      return r + '</tr>';
    }).join('');
    view('matrix', L('时代 × 技术域 交叉矩阵', 'Era × Domain Matrix'), 'Era × Domain Matrix',
      L('覆盖密度的全局鸟瞰。', 'A global density map.'),
      `<div class="legend"><span><i style="background:#9dff3e4d"></i>${L('★ 旗舰级', 'flagship')}</span>
<span><i style="background:#22e0ff30"></i>${L('● 标准级', 'standard')}</span>
<span><i style="background:#ffffff14"></i>${L('○ 索引级', 'index')}</span>
<span><i style="background:#ffc24733"></i>${L('** 待写', 'to write')}</span></div>
<div style="overflow:auto"><table class="mtx">${head}${rows}</table></div>`);
  }

  /* V5 学习路径 */
  {
    const L2 = (zh, en) => (LANG === 'en' ? en : zh);
    const paths = [
      { id: 'p1', zh: '符号与语言', en: 'Symbols & Language', d: '从象形符号到单表替换，再到频率分析——破译的第一课。', dEn: 'From pictographs to monoalphabetic substitution and frequency analysis — the first lesson of cryptanalysis.', lv: [1, 2], doms: ['d01-foundations', 'd02-monoalphabetic'] },
      { id: 'p2', zh: '古典破译手', en: 'Classical Breaker', d: '多表、换位、分数化与分组密码的组合技。', dEn: 'Polyalphabetic, transposition, fractionation and combinations.', lv: [2, 3], doms: ['d03-polyalphabetic', 'd04-transposition', 'd07-cryptanalysis'] },
      { id: 'p3', zh: '机械时代', en: 'Machine Age', d: '转子、插线板与战时密码分析的完整链条。', dEn: 'Rotors, plugboards and wartime cryptanalysis.', lv: [3, 4], doms: ['d05-rotor-mechanical', 'd07-cryptanalysis'] },
      { id: 'p4', zh: '现代密码工程师', en: 'Modern Cryptographer', d: '分组、流、哈希、AEAD、公钥、签名与协议。', dEn: 'Block, stream, hash, AEAD, public key, signatures and protocols.', lv: [2, 4], doms: ['d08-block-cipher', 'd09-hash', 'd10-auth-aead', 'd11-asymmetric', 'd12-signature', 'd14-protocols-pki'] },
      { id: 'p5', zh: '前沿与后量子', en: 'Frontier & Post-Quantum', d: '侧信道、零知识、MPC、量子与后量子、同态。', dEn: 'Side channels, ZK, MPC, quantum, PQC and homomorphic encryption.', lv: [3, 4], doms: ['d15-zkp', 'd16-secret-sharing-mpc', 'd17-side-channel', 'd21-quantum-crypto', 'd22-post-quantum'] },
      { id: 'p6', zh: '攻防视角', en: 'Attacker & Defender', d: '按威胁模型重读全部知识：每种攻击对应哪种防御。', dEn: 'Re-read the atlas by threat model: every attack against its defence.', lv: [2, 4], doms: ['d07-cryptanalysis', 'd23-applied-security'] },
    ];
    const cards = paths.map(p => {
      const ents = model.entries.filter(e => p.doms.some(d => e.domain.includes(d)) && e.level >= p.lv[0] && e.level <= p.lv[1] && e.type !== 'era' && e.type !== 'domain');
      const list = ents.slice(0, 40).map(e => `<li><a href="${e.url}">${esc(LANG === 'en' ? (e.titleEn || e.title) : e.title)}</a></li>`).join('');
      return `<div class="card"><h3>${esc(L2(p.zh, p.en))}</h3><p>${esc(L2(p.d, p.dEn))}</p>
<p class="muted">${ents.length} ${L2('个条目', 'entries')}</p>
<details><summary>${L2('展开清单', 'expand list')}</summary><ul class="rellist" style="margin-top:8px">${list}</ul></details></div>`;
    }).join('');
    view('paths', L('学习路径', 'Learning Paths'), 'Learning Paths',
      L('六条由浅入深的阅读路线，条目按难度与前置关系排列。', 'Six routes from shallow to deep, ordered by level and prerequisites.'),
      `<div class="grid">${cards}</div>`);
  }

  /* V6 出处总表 */
  {
    const byKind = new Map();
    for (const e of model.entries) for (const s of (e.sources || [])) {
      if (!byKind.has(s.kind)) byKind.set(s.kind, []);
      byKind.get(s.kind).push({ e, s });
    }
    const secs = [...byKind.entries()].map(([kind, list]) => {
      const uniq = new Map();
      for (const { e, s } of list) if (!uniq.has(s.title)) uniq.set(s.title, []);
      const its = [...uniq.entries()].map(([t, es]) =>
        `<li>${esc(t)} <i class="muted">(${es.length})</i> — ${es.slice(0, 6).map(x => '<a href="' + x.e.url + '">' + esc(LANG === 'en' ? (x.e.titleEn || x.e.title) : x.e.title) + '</a>').join('、')}</li>`).join('');
      return `<div class="card"><h3>${esc(kind)} <span class="muted">${uniq.size}</span></h3><ul class="rellist" style="grid-template-columns:1fr">${its}</ul></div>`;
    }).join('');
    view('sources', L('出处总表', 'Source Index'), 'Source Index',
      L('全站引用的纯文字出处，按类型分组。', 'Every plain-text source cited across the atlas, grouped by kind.'),
      `<div class="grid">${secs}</div>`);
  }

  /* V7 应用场景 / 威胁模型索引 */
  {
    const L2 = (zh, en) => (LANG === 'en' ? en : zh);
    const secs = [];
    for (const [app, list] of model.byApp) {
      const items = list.slice(0, 60).map(e => `<li><a href="${e.url}">${esc(LANG === 'en' ? (e.titleEn || e.title) : e.title)}</a></li>`).join('');
      secs.push(`<div class="card" id="${esc(app)}"><h3>${esc(app)} <span class="muted">${list.length}</span></h3><ul class="rellist">${items}</ul></div>`);
    }
    for (const [t, list] of model.byThreat) {
      const items = list.slice(0, 60).map(e => `<li><a href="${e.url}">${esc(LANG === 'en' ? (e.titleEn || e.title) : e.title)}</a></li>`).join('');
      secs.push(`<div class="card" id="threat-${esc(t)}"><h3>${esc(t)} <span class="muted">${list.length}</span></h3><ul class="rellist">${items}</ul></div>`);
    }
    write('applications/index.html', R.layout({
      title: L2('应用场景与威胁模型', 'Applications & Threat Models'), titleEn: 'Applications & Threat Models',
      desc: L2('按应用场景与威胁模型横切浏览全部知识。', 'Cross-cut the atlas by application and threat model.'),
      url: '/applications/', lang: LANG,
      body: `<nav class="crumb"><a href="/">${L2('首页', 'Home')}</a><i>/</i><span>${L2('应用与威胁模型', 'Applications & threats')}</span></nav>
<h1>${L2('应用场景与威胁模型', 'Applications & Threat Models')}</h1>
<p class="view-note">${L2('同一批知识，两条横切轴。', 'One body of knowledge, two cross-cutting axes.')}</p>
<div class="grid">${secs.join('')}</div>`,
    }));
  }

  /* 交叉引用数据（客户端视图用） */
  write('data/graph.json', JSON.stringify({
    nodes: model.entries.filter(e => e.type !== 'era' && e.type !== 'domain').map(e => ({
      id: e.id, t: e.type, n: e.title, ne: e.titleEn || e.title,
      u: e.url, d: e.domain, s: e.subtopic, er: e.era, q: e.quality, lv: e.level,
    })),
    edges: model.entries.flatMap(e => (e.related || []).slice(0, 8).map(r => ({ s: e.id, t: r }))),
    eras: model.eras.map(e => ({ id: e.id, n: e.title, ne: e.titleEn || e.title, u: e.url })),
    domains: model.domains.map(e => ({ id: e.id, n: e.title, ne: e.titleEn || e.title, u: e.url })),
  }));

  /* 检索索引 */
  {
    const idx = [];
    for (const e of model.entries) {
      const words = [e.title, e.titleEn, ...(e.aliases || []), e.id].filter(Boolean).join(' ');
      idx.push({ i: e.id, n: e.title, e: e.titleEn || e.title, t: e.type, u: e.url, a: words.toLowerCase() });
    }
    write('data/search-index.json', JSON.stringify({ v: 1, n: idx.length, items: idx }));
  }
}

console.log('== 7. 关于页 / sitemap / robots ==');
{
  const L = (zh, en) => (LANG === 'en' ? en : zh);
  write('about/index.html', R.layout({
    title: L('关于本站', 'About'), titleEn: 'About',
    desc: L('密码学知识站的来源、编辑方针与许可。', 'Sources, editorial policy and licence.'),
    url: '/about/', lang: LANG,
    body: `<nav class="crumb"><a href="/">${L('首页', 'Home')}</a><i>/</i><span>${L('关于', 'About')}</span></nav>
<h1>${L('关于本站', 'About this site')}</h1>
<p class="lead">${L('本站是「破译 DECODE ARCADE」知识体系的知识面：所有内容由知识源仓 <code>cryptography-decode-history</code> 生成，每条可溯源，中英同步。',
  'The reading surface of the DECODE ARCADE knowledge system: every entry is generated from the <code>cryptography-decode-history</code> source, sourced, and bilingual.')}</p>
<h2>${L('编辑方针', 'Editorial policy')}</h2>
<ul>
<li>${L('出处必须是可核查的纯文字著录（书 / 论文 / 标准 / RFC / 档案 / 报纸），正文不嵌外链。', 'Sources must be checkable plain-text citations (books, papers, standards, RFCs, archives, newspapers); no outbound links in the body.')}</li>
<li>${L('「收录」与「核证」分开：总目录登记即算收录，出处核证后才升级为旗舰级。', 'Collection and verification are separate: registered in the inventory counts as collected; upgraded to flagship only after sources are verified.')}</li>
<li>${L('每条内容带六个轴：时代 / 技术域 / 应用场景 / 威胁模型 / 难度 / 层级。', 'Every entry carries six axes: era, domain, application, threat model, difficulty, layer.')}</li>
</ul>
<h2>${L('许可', 'Licence')}</h2>
<p>${L('内容 CC BY 4.0；代码 MIT。', 'Content CC BY 4.0; code MIT.')}</p>
<p><a href="https://github.com/poyinet/cryptography-decode-history">${L('知识源仓', 'Source repository')}</a> · <a href="https://poyi.net">${L('游戏主站', 'Game site')}</a></p>`,
  }));
  const urls = ['/'];
  for (const e of model.entries) urls.push(e.url);
  for (const t of Object.keys(model.byType)) {
    const meta = require('./lib/model').TYPES[t];
    if (meta) urls.push('/' + meta.path + '/');
  }
  for (const v of ['crystal', 'timeline', 'tree', 'matrix', 'paths', 'sources']) urls.push('/views/' + v + '/');
  urls.push('/applications/'); urls.push('/about/'); urls.push('/search/');
  write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => '  <url><loc>https://crypto.poyi.net' + u + '</loc></url>').join('\n')}
</urlset>
`);
  write('robots.txt', 'User-agent: *\nAllow: /\nSitemap: https://crypto.poyi.net/sitemap.xml\n');
  write('CNAME', 'crypto.poyi.net\n');
  /* 检索页（服务端渲染，无 JS 也能用） */
  require('child_process').execSync('node tools/site/build-search.js', { stdio: 'inherit' });
  write('.nojekyll', '');
}

console.log('\n== 完成 ==');
console.log('  ' + pages + ' 个页面 · ' + (bytes / 1024 / 1024).toFixed(2) + ' MB → build/site/');
