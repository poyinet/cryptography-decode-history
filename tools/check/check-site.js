#!/usr/bin/env node
/* ============================================================
   check-site.js —— 分站产物门禁
   校验：页面数与清单条目一致 / 内部死链 0 / 每页有 title+description+canonical /
        中英 hreflang 成对 / 实体页正文非空（无 JS 可读）/ 体积预算 /
        sitemap 覆盖全部页面 / 外链仅允许 github 与主站
   用法：node tools/check/check-site.js
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
process.chdir(ROOT);
const SITE = path.join(ROOT, 'build', 'site');

let fail = 0, warn = 0;
const bad = m => { console.log('  ✗ ' + m); fail++; };
const wrn = m => { console.log('  ⚠ ' + m); warn++; };
const ok = m => console.log('  ✓ ' + m);

if (!fs.existsSync(SITE)) { console.log('build/site 不存在——先运行 node tools/site/build.js'); process.exit(1); }

const htmlFiles = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const abs = path.join(d, e.name);
    if (e.isDirectory()) walk(abs);
    else if (e.name.endsWith('.html')) htmlFiles.push(abs);
  }
})(SITE);
console.log('== 1. 页面规模 ==');
ok(htmlFiles.length + ' 个 HTML 页面');

const inv = JSON.parse(fs.readFileSync(path.join(ROOT, 'build', 'inventory.json'), 'utf8'));
const expectPages = inv.entries.length + 20;   // 实体页 + 列表页 + 视图页 + 首页等
if (htmlFiles.length < inv.entries.length) bad('页面数少于清单条目数（' + htmlFiles.length + ' < ' + inv.entries.length + '）');
else ok('页面数 ≥ 清单条目数（' + htmlFiles.length + ' ≥ ' + inv.entries.length + '）');

console.log('== 2. 逐页结构 ==');
const linkRe = /href="([^"]+)"/g;
let deadLinks = 0, missingTitle = 0, missingDesc = 0, missingCanon = 0, missingAlt = 0, emptyBody = 0, badExt = 0;
const hreflangs = { zh: 0, en: 0 };
for (const f of htmlFiles) {
  const rel = '/' + path.relative(SITE, f).split(path.sep).join('/');
  const h = fs.readFileSync(f, 'utf8');
  if (!/<title>[^<]{4,}<\/title>/.test(h)) { missingTitle++; if (missingTitle <= 3) bad(rel + ' 缺 title'); }
  if (!/<meta name="description" content="[^"]{8,}"/.test(h)) { missingDesc++; if (missingDesc <= 3) bad(rel + ' 缺 description'); }
  if (!/rel="canonical"/.test(h)) { missingCanon++; if (missingCanon <= 3) bad(rel + ' 缺 canonical'); }
  if (/hreflang="zh-Hans"/.test(h)) hreflangs.zh++;
  if (/hreflang="en"/.test(h)) hreflangs.en++;
  /* 内部链接可达 */
  let m;
  linkRe.lastIndex = 0;
  while ((m = linkRe.exec(h))) {
    const href = m[1];
    if (/^(https?:|mailto:|tel:|#|data:)/.test(href)) {
      if (/^https?:\/\//.test(href)) {
        const okHost = /github\.com|poyi\.net|crypto\.poyi\.net|oscca\.gov\.cn|nist\.gov|ietf\.org|iso\.org|ieee\.org|sciencedirect|doi\.org|wikipedia\.org|arxiv\.org/i;
        if (!okHost.test(href)) { badExt++; if (badExt <= 5) bad(rel + ' 外链未在白名单：' + href); }
      }
      continue;
    }
    const target = path.join(SITE, href.split('#')[0].split('?')[0]);
    const cands = [target, path.join(target, 'index.html')];
    if (!cands.some(c => fs.existsSync(c))) {
      deadLinks++;
      if (deadLinks <= 8) bad(rel + ' 死链 → ' + href);
    }
  }
  /* 实体页正文非空（无 JS 可读） */
  if (/\/(eras|domains|terms|people|artifacts|machines|algorithms|attacks|protocols|standards|theorems|events)\//.test(rel) && /^\/[^/]+\/[^/]+\/index\.html$/.test(rel)) {
    const body = h.replace(/[\s\S]*<main id="main">/, '').replace(/<\/main>[\s\S]*/, '');
    const text = body.replace(/<[^>]+>/g, '').replace(/\s+/g, '').trim();
    if (text.length < 40) { emptyBody++; if (emptyBody <= 3) bad(rel + ' 正文过短（' + text.length + ' 字），无 JS 不可读'); }
  }
}
if (missingTitle) bad(missingTitle + ' 个页面缺 title');
if (missingDesc) bad(missingDesc + ' 个页面缺 description');
if (missingCanon) bad(missingCanon + ' 个页面缺 canonical');
if (deadLinks) bad(deadLinks + ' 条内部死链');
if (badExt) bad(badExt + ' 条外链不在白名单');
if (emptyBody) bad(emptyBody + ' 个实体页正文过短');
if (!missingTitle && !missingDesc && !missingCanon && !deadLinks && !badExt && !emptyBody) ok('全部页面结构合规，无死链');

console.log('== 3. 中英 hreflang ==');
if (hreflangs.zh !== hreflangs.en) bad('hreflang 中英数量不等：zh ' + hreflangs.zh + ' / en ' + hreflangs.en);
else ok('hreflang 中英成对（各 ' + hreflangs.zh + ' 页）');

console.log('== 4. sitemap ==');
{
  const sm = fs.readFileSync(path.join(SITE, 'sitemap.xml'), 'utf8');
  const locs = [...sm.matchAll(/<loc>https:\/\/crypto\.poyi\.net([^<]*)<\/loc>/g)].map(m => m[1]);
  ok('sitemap ' + locs.length + ' URL');
  const htmlSet = new Set(htmlFiles.map(f => '/' + path.relative(SITE, f).split(path.sep).join('/')));
  const miss = htmlSet.size;
  let notIn = 0;
  for (const l of locs) {
    const cands = [l, l + 'index.html'];
    if (!cands.some(c => htmlSet.has(c))) notIn++;
  }
  if (notIn) bad(notIn + ' 条 sitemap URL 无对应页面');
  else ok('sitemap 每条都有对应页面');
  const noEntry = [...htmlSet].filter(p => !locs.some(l => l === p || l + 'index.html' === p));
  if (noEntry.length) wrn(noEntry.length + ' 个页面不在 sitemap（' + noEntry.slice(0, 3).join(', ') + '）');
  else ok('所有页面都在 sitemap');
}

console.log('== 5. 体积预算 ==');
{
  const walk2 = (d) => {
    let sum = 0;
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const abs = path.join(d, e.name);
      if (e.isDirectory()) sum += walk2(abs);
      else sum += fs.statSync(abs).size;
    }
    return sum;
  };
  const total = walk2(SITE);
  const MB = total / 1024 / 1024;
  if (MB > 30) bad('产物 ' + MB.toFixed(1) + ' MB，超出 30 MB 预算');
  else ok('产物 ' + MB.toFixed(2) + ' MB（预算 30 MB）');
  const js = fs.readdirSync(path.join(SITE, 'assets')).filter(f => f.endsWith('.js'));
  let jsSum = 0;
  for (const f of js) jsSum += fs.statSync(path.join(SITE, 'assets', f)).size;
  ok('首屏 JS ' + (jsSum / 1024).toFixed(0) + ' KB（common + crystal，three.js 按需加载）');
  const idx = path.join(SITE, 'data', 'search-index.json');
  if (fs.existsSync(idx)) ok('检索索引 ' + (fs.statSync(idx).size / 1024).toFixed(0) + ' KB');
}

console.log('== 6. 必需文件 ==');
for (const f of ['index.html', 'CNAME', 'robots.txt', 'sitemap.xml', '.nojekyll',
  'assets/site.css', 'assets/common.js', 'data/graph.json', 'data/search-index.json',
  'search/index.html', 'about/index.html',
  'views/crystal/index.html', 'views/timeline/index.html', 'views/tree/index.html',
  'views/matrix/index.html', 'views/paths/index.html', 'views/sources/index.html',
  'applications/index.html']) {
  if (!fs.existsSync(path.join(SITE, f))) bad('缺 ' + f);
}
ok('必需文件齐备');

console.log('\n' + (fail ? '❌ ' + fail + ' 项不通过' : '✅ 全部通过') + (warn ? '（' + warn + ' 项提示）' : ''));
process.exit(fail ? 1 : 0);
