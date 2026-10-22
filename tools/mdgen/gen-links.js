#!/usr/bin/env node
/* ============================================================
   gen-links.js — Phase 3b：把 24 域「## 关联时代 / 人物 / 游戏」
   与 19 时代 README「## 关联」的占位（待填/待归）填成真实交叉链接。
   数据驱动：
     · 域→游戏/章节：从 GLOSSARY 按 route(term,cat)==dom 反查（真源）。
     · 域→人物：由域概念叙述点名的关键人物（编辑表 DOMAIN_PEOPLE，可核查）。
     · 时代→人物/机器/密件：从 people/machines/artifacts 的 frontmatter era 反查。
     · 时代→游戏：该时代机器/密件 game ∪ 属该时代域的术语游戏。
   幂等：只重写「## 关联」节与头部占位注释，不动概念/算法/术语/人物正文。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const { load } = require('./lib/load-poyi');
const { CHAPTER_ERA } = require('./gen-people');
const { route, domainFile } = require('./gen-glossary');

const ROOT = path.resolve(__dirname, '..', '..');
const ERA_DIR = path.join(ROOT, '02-eras');
// 时间轴顺序（e01→e18 编年，e19 中国平行线横切、不排入主序列）
const CHRON = ['e01-origins', 'e02-classical', 'e03-byzantine-islamic', 'e04-arabic-golden-age', 'e05-medieval-europe', 'e06-renaissance', 'e07-early-modern-steganography', 'e08-codebreakers', 'e09-ww1', 'e10-interwar', 'e11-ww2', 'e12-cold-war-info-theory', 'e13-public-key', 'e14-standardization', 'e15-web-protocols', 'e16-quantum-turn', 'e17-post-quantum', 'e18-frontier'];

// —— 时代 → 补充技术域（GLOSSARY 章节只到 modern/quantum，晚期时代无直接章节引用，按主题显式补）——
const ERA_DOMAIN = {
  'e03-byzantine-islamic': ['d02'],
  'e05-medieval-europe': ['d02'],
  'e07-early-modern-steganography': ['d18', 'd02'],
  'e08-codebreakers': ['d03', 'd07'],
  'e10-interwar': ['d05'],
  'e14-standardization': ['d08', 'd09', 'd13'],
  'e15-web-protocols': ['d14', 'd13'],
  'e17-post-quantum': ['d22', 'd21'],
  'e18-frontier': ['d15', 'd22', 'd23'],
  'e19-china': ['d20'],
};

// —— 域 → 关键人物（编辑表，依据各域概念叙述点名的人物，可逐条核查）——
const DOMAIN_PEOPLE = {
  d01: [],
  d02: ['caesar', 'bacon', 'trithemius', 'bellaso', 'bazeries'],
  d03: ['vigenere', 'playfair', 'kasiski', 'babbage', 'alberti'],
  d04: ['jefferson'],
  d05: ['turing', 'welchman', 'rowlett', 'rejewski', 'rozycki', 'zygalski', 'scherbius', 'flowers', 'roberts', 'knox'],
  d06: ['vernam', 'mauborgne'],
  d07: ['friedman', 'kasiski', 'babbage', 'biham', 'safford'],
  d08: ['feistel', 'daemen', 'rijmen', 'back'],
  d09: ['daemen'],
  d10: [],
  d11: ['diffie', 'hellman', 'rivest', 'shamir', 'adleman', 'elgamal', 'cocks', 'williamson', 'miller', 'koblitz', 'rabin', 'merkle'],
  d12: ['rivest', 'shamir', 'adleman', 'elgamal'],
  d13: [],
  d14: [],
  d15: ['goldwasser', 'micali', 'rackoff', 'chaum'],
  d16: ['shamir'],
  d17: ['kocher', 'bernstein'],
  d18: ['trithemius'],
  d19: [],
  d20: ['wangxy', 'zengxisheng'],
  d21: ['bennett', 'brassard', 'ekert', 'shor'],
  d22: ['regev', 'gentry'],
  d23: ['schneier', 'back', 'clarke'],
  d24: ['shannon', 'vonneumann', 'turing', 'gauss', 'galois'],
};

// —— 重写指定节（幂等；节为末节时 end=EOF）——
function setSection(content, heading, body) {
  const lines = content.split('\n');
  const start = lines.findIndex(l => l.trim() === heading);
  if (start === -1) return content.replace(/\s*$/, '') + `\n\n${heading}\n${body}\n`;
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) if (lines[i].startsWith('## ')) { end = i; break; }
  return [...lines.slice(0, start + 1), '', body, ...lines.slice(end)].join('\n').replace(/\n{3,}/g, '\n\n').replace(/\s*$/, '') + '\n';
}

// —— 把「整节仅（待填）」的占位节，替换为诚实指向说明（不造假条目）——
function clearPlaceholder(content, heading, note) {
  const lines = content.split('\n');
  const start = lines.findIndex(l => l.trim() === heading);
  if (start === -1) return content;
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) if (lines[i].startsWith('## ')) { end = i; break; }
  const body = lines.slice(start + 1, end).join('\n').trim();
  if (body !== '（待填）') return content; // 仅清空的占位节，不动已填充节
  return [...lines.slice(0, start + 1), '', note, ...lines.slice(end)].join('\n').replace(/\n{3,}/g, '\n\n').replace(/\s*$/, '') + '\n';
}

// —— 读实体 frontmatter（people/machines/artifacts）——
function readIndex(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.md'))) {
    const c = fs.readFileSync(path.join(dir, f), 'utf8');
    const fm = { id: f.replace('.md', ''), era: (c.match(/^era: (\S+)/m) || [])[1] || '', game: (c.match(/^game: (\S+)/m) || [])[1] || '', nameZh: (c.match(/^title: (.+)$/m) || [])[1] || '' };
    const chap = c.match(/- 章节：(.*)$/m);
    fm.chapters = chap ? chap[1].split(',').map(s => s.trim()).filter(Boolean) : [];
    out.push(fm);
  }
  return out;
}

// —— 读时代目录：era → { title, hasEraMd } ——
function readEraIndex() {
  const out = {};
  for (const slug of fs.readdirSync(ERA_DIR).sort()) {
    const rfp = path.join(ERA_DIR, slug, 'README.md');
    if (!fs.existsSync(rfp)) continue;
    const c = fs.readFileSync(rfp, 'utf8');
    out[slug] = { title: (c.match(/^title: (.+)$/m) || [])[1] || slug, hasEraMd: fs.existsSync(path.join(ERA_DIR, slug, 'era.md')) };
  }
  return out;
}

function main() {
  const d = load(['games.js']);
  const GAMES = (d.sandbox.window.GAMES) || [];
  const gameTitle = Object.fromEntries(GAMES.map(g => [g.id, (g.title || g.id).replace(/[（(].*/, '')]));
  const eras = readEraIndex();
  const people = readIndex(path.join(ROOT, 'people'));
  const machines = readIndex(path.join(ROOT, 'machines'));
  const artifacts = readIndex(path.join(ROOT, 'artifacts'));

  const eraLabel = e => `${eras[e] ? eras[e].title : e}`;
  const eraLink = e => `[${eraLabel(e)}](../02-eras/${e}/README.md)`;

  // —— 域 → 游戏/章节（从 GLOSSARY 反查）——
  const domains = {};
  for (const g of d.GLOSSARY) {
    const dom = route(g.term, g.cat);
    const rec = domains[dom] = domains[dom] || { games: new Set(), chapters: new Set() };
    if (g.game) rec.games.add(g.game);
    for (const ch of (g.chapters || [])) rec.chapters.add(ch);
  }
  const eraOf = chs => [...new Set(chs.filter(ch => CHAPTER_ERA[ch]).map(ch => CHAPTER_ERA[ch]))].sort();
  const eraChapters = {}; // era → chapters[]
  for (const s of d.STORIES) { const e = CHAPTER_ERA[s.id]; if (e) (eraChapters[e] = eraChapters[e] || []).push(s.id); }
  // 游戏 → 它所有术语章节映射到的时代集合（用于去污染：只把游戏归到它专属的时代）
  const gameEraOf = {};
  for (const g of d.GLOSSARY) {
    if (!g.game) continue;
    if (!gameEraOf[g.game]) gameEraOf[g.game] = new Set();
    eraOf(g.chapters || []).forEach(e => gameEraOf[g.game].add(e));
  }

  // —— 1. 填 24 域「## 关联时代 / 人物 / 游戏」——
  let dn = 0;
  for (let i = 1; i <= 24; i++) {
    const dom = 'd' + String(i).padStart(2, '0');
    const rec = domains[dom] || { games: new Set(), chapters: new Set() };
    const names = (DOMAIN_PEOPLE[dom] || []).filter(id => people.some(p => p.id === id));
    // 时代 = 域术语章节映射 ∪ 关联人物的 frontmatter era（补齐无章节引用的理论域）
    const erasOfDom = [...new Set([...eraOf([...rec.chapters]), ...names.map(id => (people.find(p => p.id === id) || {}).era).filter(Boolean)])].sort();
    const games = [...rec.games].sort();
    const dp = dom === 'd01' ? '' : '../'; // d01 在根目录，其余在 tech/ 下
    const L = [];
    L.push('**关联时代**（轴1 编年叙事）');
    erasOfDom.length ? erasOfDom.forEach(e => L.push(`- [${eraLabel(e)}](${dp}02-eras/${e}/README.md)`)) : L.push('- （无）');
    L.push('', '**关联人物**（人物志）');
    names.length ? names.forEach(id => L.push(`- [${people.find(p => p.id === id).nameZh}](${dp}people/${id}.md)`)) : L.push('- （无）');
    L.push('', '**关联游戏**（站内可玩 · 游戏 ID）');
    games.length ? games.forEach(gid => L.push(`- \`${gid}\`${gameTitle[gid] ? ` · ${gameTitle[gid]}` : ''}`)) : L.push('- （无）');
    const fp = domainFile(dom);
    if (!fs.existsSync(fp)) continue;
    let c = fs.readFileSync(fp, 'utf8');
    c = c.replace(/\s*·（Phase 0 占位 · 概念\/算法\/协议\/术语待填充）/, '');
    // 无独立工坊算法/术语条目的域：把空占位节转为诚实指向说明
    c = clearPlaceholder(c, '## 算法 / 协议', '（本域暂无独立工坊算法 / 协议演示，可玩实现见下方「关联游戏」）');
    c = clearPlaceholder(c, '## 术语', '（本域在 282 术语表中无独立条目，相关概念见「概念」节与「关联人物」）');
    fs.writeFileSync(fp, setSection(c, '## 关联时代 / 人物 / 游戏', L.join('\n')), 'utf8');
    dn++;
    console.log(`  [${dom}] ${erasOfDom.length} 时代 / ${names.length} 人物 / ${games.length} 游戏`);
  }

  // —— 2. 填 19 时代 README「## 关联」+ 清占位注释 ——
  let en = 0;
  for (const slug of Object.keys(eras).sort()) {
    const chapters = eraChapters[slug] || [];
    const chapSet = new Set(chapters);
    // 属该时代的域：域章节 ∩ 时代章节 ≠ ∅（排除 d01 全集域，叠加 ERA_DOMAIN 补充）
    const computed = Object.keys(domains).filter(dom => dom !== 'd01' && [...domains[dom].chapters].some(ch => chapSet.has(ch)));
    const domsOfEra = [...new Set([...computed, ...(ERA_DOMAIN[slug] || [])])].sort();
    const pplOfEra = people.filter(p => p.era === slug).sort((a, b) => a.nameZh.localeCompare(b.nameZh, 'zh'));
    const mchOfEra = machines.filter(m => m.era === slug).sort((a, b) => a.nameZh.localeCompare(b.nameZh, 'zh'));
    const artOfEra = artifacts.filter(a => a.era === slug).sort((a, b) => a.nameZh.localeCompare(b.nameZh, 'zh'));
    const gamesOfEra = new Set();
    mchOfEra.forEach(m => m.game && gamesOfEra.add(m.game));
    artOfEra.forEach(a => a.game && gamesOfEra.add(a.game));
    // 术语游戏：只收「所有术语章节都落在本时代」的游戏，现代域游戏不再泄漏进古代
    for (const gid of Object.keys(gameEraOf)) { if (gameEraOf[gid].has(slug) && gameEraOf[gid].size === 1) gamesOfEra.add(gid); }
    const games = [...gamesOfEra].sort();

    const ep = '../../'; // 时代 README 在 02-eras/eNN/ 下，上两级到仓库根
    const L = [];
    L.push('**技术域**（技术体系轴）');
    domsOfEra.length ? domsOfEra.forEach(dom => { const fp = domainFile(dom); const t = (fs.readFileSync(fp, 'utf8').match(/^title: (.+)$/m) || [])[1] || dom; L.push(`- [${t}](${ep}${path.relative(ROOT, fp).replace(/\\/g, '/')})`); }) : L.push('- （无）');
    L.push('', '**人物**（人物志）');
    pplOfEra.length ? pplOfEra.forEach(p => L.push(`- [${p.nameZh}](${ep}people/${p.id}.md)`)) : L.push('- （无）');
    L.push('', '**机器**（机器博物馆）');
    mchOfEra.length ? mchOfEra.forEach(m => L.push(`- [${m.nameZh}](${ep}machines/${m.id}.md)`)) : L.push('- （无）');
    L.push('', '**密件**（密件册）');
    artOfEra.length ? artOfEra.forEach(a => L.push(`- [${a.nameZh}](${ep}artifacts/${a.id}.md)`)) : L.push('- （无）');
    L.push('', '**游戏**（站内可玩 · 游戏 ID）');
    games.length ? games.forEach(gid => L.push(`- \`${gid}\`${gameTitle[gid] ? ` · ${gameTitle[gid]}` : ''}`)) : L.push('- （无）');

    // 顺序导航：e01→e18 时间轴顺读，e19 横切单独处理
    let navBody;
    if (slug === 'e19-china') {
      navBody = '本页横切所有时代。⬅️ [返回时间轴终点 · 前沿（e18）](../e18-frontier/README.md)';
    } else {
      const i = CHRON.indexOf(slug);
      const prev = i > 0 ? CHRON[i - 1] : null;
      const next = i >= 0 && i < CHRON.length - 1 ? CHRON[i + 1] : null;
      navBody = `${prev ? `⬅️ 上一时代：[${eras[prev].title}](../${prev}/README.md)` : '⬅️ 时间轴起点'}　·　${next ? `下一时代：[${eras[next].title}](../${next}/README.md) →` : '时间轴终点'}`;
    }

    const rfp = path.join(ERA_DIR, slug, 'README.md');
    let c = fs.readFileSync(rfp, 'utf8');
    c = eras[slug].hasEraMd
      ? c.replace('（Phase 0 占位 · 正文待填充）', '完整叙述见 [era.md](era.md)。本页给出该时代在三维晶格中的关联索引。')
      : c.replace('（Phase 0 占位 · 正文待填充）', '');
    c = setSection(c, '## 关联', L.join('\n'));
    c = setSection(c, '## 导航', navBody);
    fs.writeFileSync(rfp, c, 'utf8');
    en++;
    console.log(`  [${slug}] ${domsOfEra.length} 域 / ${pplOfEra.length} 人物 / ${mchOfEra.length} 机器 / ${artOfEra.length} 密件 / ${games.length} 游戏`);
  }
  console.log(`[gen-links] 完成：${dn} 域 + ${en} 时代关联节填充`);
}

if (require.main === module) main();
module.exports = { main, DOMAIN_PEOPLE };
