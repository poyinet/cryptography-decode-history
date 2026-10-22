#!/usr/bin/env node
/* ============================================================
   gen-inventory.js —— 知识总目录生成器
   从现有语料自动派生清单（已有实体先「登记」），再合并手写的新分类清单：
     people.yaml / artifacts.yaml / machines.yaml  ← 实体 md frontmatter
     eras.yaml                                      ← 02-eras 目录
     domains.yaml                                   ← tech/*.md（含子主题候选）
     terms.yaml                                     ← 主站 glossary-data.js
     algorithms/protocols/standards/attacks/theorems/events/cn-history.yaml
                                                  ← tools/mdgen/inventory-data/*.txt
   产出：_meta/inventory/*.yaml + build/inventory.json
   用法：node tools/mdgen/gen-inventory.js
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
process.chdir(ROOT);
/* 站点资源根（与 load-poyi.js 同一套解析：env → 仓内 poyi-site/ → 向上查找） */
const SITE_JS = require(path.join(__dirname, 'lib', 'load-poyi.js')).POYI_ROOT;

function main() {
const OUT_YAML = path.join(ROOT, '_meta', 'inventory');
const OUT_JSON = path.join(ROOT, 'build');
const DATA_DIR = path.join(__dirname, 'inventory-data');

const APPS = ['military', 'diplomacy', 'finance', 'telecom', 'privacy', 'law-enforcement',
  'copyright', 'academic', 'everyday', 'counter-terror', 'infrastructure', 'health', 'government'];
const THREATS = ['CO', 'KPA', 'CPA', 'CCA', 'CCA1', 'CCA2', 'adaptive-CCA', 'related-key',
  'known-key', 'forward', 'inverse', 'chosen-target', 'rogue-key', 'side-channel',
  'physical', 'social', 'implementation', 'protocol', 'network', 'quantum', 'statistical', 'theoretical'];

const slug = s => String(s || '').trim().toLowerCase()
  .replace(/[（(].*$/, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

/* ---------- frontmatter 解析（够用即可） ---------- */
function readFM(file) {
  const txt = fs.readFileSync(file, 'utf8');
  const m = txt.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const fm = {};
  let key = null;
  for (const line of m[1].split(/\r?\n/)) {
    const km = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (km) {
      key = km[1];
      const v = km[2].trim();
      if (v === '') fm[key] = [];
      else if (v.startsWith('[')) { try { fm[key] = JSON.parse(v.replace(/'/g, '"')); } catch (e) { fm[key] = v; } }
      else if (/^- /.test(v)) fm[key] = [];
      else fm[key] = v.replace(/^['"]|['"]$/g, '');
    } else if (/^\s+-\s+(.+)$/.test(line) && key) {
      const v = line.trim().replace(/^-\s*/, '').replace(/^['"]|['"]$/g, '');
      if (!Array.isArray(fm[key])) fm[key] = [];
      fm[key].push(v);
    }
  }
  return fm;
}

/* ---------- 主站 glossary（术语来源） ---------- */
function loadGlossary() {
  const site = path.join(SITE_JS, 'glossary-data.js');
  if (!fs.existsSync(site)) return null;
  const sb = { console, localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} }, navigator: { language: 'zh' } };
  sb.window = sb; vm.createContext(sb);
  vm.runInContext(fs.readFileSync(site, 'utf8'), sb);
  return sb.GLOSSARY || [];
}

/* ---------- 手写数据文件（管道分隔） ---------- */
/* 每类清单的默认轴（条目未填时回填）—— 分类级默认值 */
const FILE_DEFAULT = {
  'algorithms': { apps: ['academic', 'infrastructure', 'finance'], threats: ['CPA', 'CCA'] },
  'attacks': { apps: ['academic', 'military'], threats: ['CPA', 'implementation'] },
  'protocols': { apps: ['telecom', 'finance', 'infrastructure'], threats: ['protocol', 'implementation'] },
  'standards': { apps: ['government', 'finance', 'infrastructure'], threats: ['protocol', 'implementation'] },
  'theorems': { apps: ['academic'], threats: ['theoretical'] },
  'events': { apps: ['military', 'academic', 'diplomacy'], threats: ['CO', 'statistical'] },
  'cn-history': { apps: ['military', 'government'], threats: ['KPA', 'protocol'] },
};

function readDataFile(f) {
  const p = path.join(DATA_DIR, f);
  if (!fs.existsSync(p)) return [];
  const base = f.replace(/\.txt$/, '');
  const def = FILE_DEFAULT[base] || {};
  const list = (s) => String(s || '').split(/[,;]/).map(x => x.trim())
    .filter(x => x && x !== '[]' && x !== 'none');
  const rows = [];
  for (const line of fs.readFileSync(p, 'utf8').split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const c = line.split('|').map(s => s.trim());
    if (c.length < 3) continue;
    const apps = list(c[8]).filter(a => APPS.includes(a));
    const threats = list(c[9]).filter(t => THREATS.includes(t));
    const status = c[12] || 'todo';
    const quality = c[13] || 'tier2';
    rows.push({
      id: c[0], title: c[1], title_en: c[2],
      domain: list(c[3]),
      era: list(c[4]),
      level: c[5] ? +c[5] : 2,
      aliases: list(c[6]),
      sources: list(c[7]).map(s => {
        const m = s.match(/^(primary|authoritative|tertiary)\s*:\s*(.+)$/);
        return m ? { kind: m[1], title: m[2] } : { kind: 'tertiary', title: s };
      }),
      apps: apps.length ? apps : (def.apps || []),
      threats: threats.length ? threats : (def.threats || []),
      type: c[10] || '',
      prereq: list(c[11]).map(x => x.replace(/^\[|\]$/g, '')),
      status,
      quality,
      subtopic: list(c[14]),
      priority: c[15] || undefined,
      target: c[16] || undefined,
      note: c[17] || undefined,
    });
  }
  return rows;
}

/* ---------- 组装 ---------- */
const out = {};          // 文件名 → { domain, title, title_en, subtopics?, entries[] }
const allEntries = [];

function push(file, e) {
  (out[file] = out[file] || { entries: [] });
  out[file].entries.push(e);
  allEntries.push(e);
}

/* 1) 时代 ---------- */
{
  const entries = [];
  const dir = path.join(ROOT, '02-eras');
  for (const d of fs.readdirSync(dir)) {
    if (!fs.statSync(path.join(dir, d)).isDirectory()) continue;
    const id = d;
    const readme = path.join(dir, d, 'README.md');
    let title = id, titleEn = id, summary = '';
    if (fs.existsSync(readme)) {
      const txt = fs.readFileSync(readme, 'utf8');
      const h1 = txt.match(/^#\s+(.+)$/m);
      if (h1) title = h1[1].replace(/（.*?）|\(.*?\)/g, '').trim();
      const en = txt.match(/^#\s+.*?[\(（]([A-Za-z][^)）]+)[\)）]/m);
      if (en) titleEn = en[1].trim();
      const p = txt.match(/\*\*[^*]+\*\*：(.+)/);
      if (p) summary = p[1].trim();
    }
    entries.push({
      id, title, title_en: titleEn, status: 'done', quality: 'tier1', type: 'era', derived: true,
      domain: [], era: [id], subtopic: [], level: 1, prereq: [], aliases: [],
      apps: [], threats: [], sources: [], note: summary,
    });
  }
  out['eras.yaml'] = { domain: '*', title: '时代总目录', title_en: 'Eras Inventory', entries };
  allEntries.push(...entries);
}

/* 2) 技术域（含子主题候选）——D01 在根目录 01-foundations.md ---------- */
{
  const entries = [], subtopics = [];
  const techFiles = fs.readdirSync(path.join(ROOT, 'tech')).filter(f => f.endsWith('.md')).map(f => path.join(ROOT, 'tech', f));
  techFiles.push(path.join(ROOT, '01-foundations.md'));
  for (const abs of techFiles) {
    const f = path.basename(abs);
    const id = f === '01-foundations.md' ? 'd01-foundations' : f.replace(/\.md$/, '');
    const txt = fs.readFileSync(abs, 'utf8');
    const fm = readFM(abs) || {};
    const h1 = txt.match(/^#\s+(.+)$/m);
    const title = fm.title || (h1 ? h1[1].replace(/（.*?）|\(.*?\)/g, '').trim() : id);
    const titleEn = fm.title_en || id;
    const subs = [];
    for (const m of txt.matchAll(/^###\s+(.+?)(?:（|\()/gm)) {
      const name = m[1].trim();
      const s = slug(name);
      if (s) subs.push({ id: s, title: name.replace(/（.*?）|\(.*?\)/g, '').trim() || name, title_en: s, domain: id, summary: '' });
    }
    for (const s of subs) subtopics.push(s);
    entries.push({
      id, title, title_en: titleEn, status: 'done', quality: 'tier1', type: 'domain', derived: true,
      domain: [id], era: [], subtopic: [], level: 2, prereq: [], aliases: [],
      apps: [], threats: [], sources: [], note: subs.length + ' 个子主题候选',
    });
  }
  out['domains.yaml'] = { domain: '*', title: '技术域总目录', title_en: 'Domains Inventory', subtopics, entries };
  allEntries.push(...entries);
}

/* 3) 实体：people / artifacts / machines ---------- */
for (const [dir, file, type] of [['people', 'people.yaml', 'person'], ['artifacts', 'artifacts.yaml', 'artifact'], ['machines', 'machines.yaml', 'machine']]) {
  const entries = [];
  const abs = path.join(ROOT, dir);
  for (const f of fs.readdirSync(abs)) {
    if (!f.endsWith('.md') || f === 'README.md') continue;
    const id = f.replace(/\.md$/, '');
    const fm = readFM(path.join(abs, f)) || {};
    const srcs = (fm.sources || []).map(s => {
      const m = String(s).match(/^(.*?),\s*(19|20)?\d{2}\s*$/);
      return { kind: 'tertiary', title: String(s).trim() };
    });
    entries.push({
      id, title: fm.title || id, title_en: fm.title_en || id,
      status: srcs.length ? 'done' : 'draft', quality: srcs.length ? 'tier2' : 'tier3',
      type, derived: true, domain: fm.domain ? [fm.domain] : [], era: fm.era ? [fm.era] : [],
      subtopic: [], level: 3, prereq: [], aliases: [], apps: [], threats: [],
      sources: srcs, note: fm.sources && fm.sources.length ? '' : '出处待补',
    });
  }
  out[file] = { domain: '*', title: dir + ' 总目录', title_en: dir + ' Inventory', entries };
  allEntries.push(...entries);
}

/* 4) 术语（主站 glossary） ---------- */
{
  const g = loadGlossary();
  const entries = [];
  /* 术语 → 域：复用 gen-glossary 的 route() */
  let route = null;
  try {
    const rg = require(path.join(__dirname, 'gen-glossary.js'));
    if (typeof rg.route === 'function') route = rg.route;
  } catch (e) { /* route 不可用则留空 */ }
  /* 章节 → 时代（stories.js 的 id → era） */
  const eraOf = {};
  try {
    const sb = { console, localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} }, navigator: { language: 'zh' } };
    sb.window = sb; vm.createContext(sb);
    vm.runInContext(fs.readFileSync(path.join(SITE_JS, 'stories.js'), 'utf8'), sb);
    for (const c of (sb.STORIES || [])) if (c.era) eraOf[c.id] = c.era;
  } catch (e) { }
  if (g) {
    for (const t of g) {
      const id = slug(t.term);
      if (!id) continue;
      const dom = route ? [route(t.term, t.cat)] : [];
      const eras = (t.chapters || []).map(c => eraOf[c]).filter(Boolean);
      entries.push({
        id, title: t.zh || t.term, title_en: t.term,
        status: 'done', quality: 'tier3', type: 'term', derived: true,
        domain: dom.filter(Boolean), era: eras, subtopic: [],
        level: 3, prereq: [], aliases: [t.term],
        apps: [], threats: [],
        sources: t.sources ? t.sources.map(s => ({ kind: 'tertiary', title: s })) : [],
        note: 'cat=' + t.cat + (route ? '' : '（域待补：gen-glossary.route 不可用）'),
      });
    }
  }
  out['terms.yaml'] = { domain: '*', title: '术语总目录', title_en: 'Terms Inventory', entries };
  allEntries.push(...entries);
}

/* 5) 手写的新分类清单 ---------- */
for (const f of fs.readdirSync(DATA_DIR).filter(x => x.endsWith('.txt'))) {
  const name = f.replace(/\.txt$/, '');
  for (const e of readDataFile(f)) push(name + '.yaml', e);
}

/* ---------- 写盘 ---------- */
function dump(doc, file) {
  const txt = yaml.dump(doc, { lineWidth: 240, quotingType: '"', forceQuotes: false, noRefs: true });
  const header = fs.existsSync(path.join(OUT_YAML, file))
    ? fs.readFileSync(path.join(OUT_YAML, file), 'utf8').split('\n').filter(l => l.startsWith('#')).map(l => '# ' + l.replace(/^#\s?/, '')).join('\n')
    : '';
  fs.writeFileSync(path.join(OUT_YAML, file), header + '\n' + txt, 'utf8');
}

/* ---------- 合并手写覆盖层 ---------- */
/* 覆盖层在 _meta/inventory/_overlay/*.yaml：条目更完整，优先于自动基线 */
const OVERLAY_DIR = path.join(OUT_YAML, '_overlay');
let overlayCount = 0;
if (fs.existsSync(OVERLAY_DIR)) {
  for (const f of fs.readdirSync(OVERLAY_DIR).filter(x => /\.ya?ml$/.test(x))) {
    const doc = yaml.load(fs.readFileSync(path.join(OVERLAY_DIR, f), 'utf8'));
    if (!doc) continue;
    for (const key of Object.keys(doc)) {
      if (['domain', 'title', 'title_en', 'subtopics', 'issues'].includes(key)) continue;
      const list = Array.isArray(doc[key]) ? doc[key] : [doc[key]];
      for (const e of list) {
        if (!e || !e.id) continue;
        /* 覆盖层按 type 路由到对应清单；未标 type 的落到 terms */
        const ROUTE = {
          term: 'terms', attack: 'attacks', machine: 'machines', person: 'people',
          artifact: 'artifacts', algorithm: 'algorithms', protocol: 'protocols',
          standard: 'standards', theorem: 'theorems', event: 'events', era: 'eras',
          domain: 'domains', subtopic: 'domains',
        };
        const targetName = (key.endsWith('.yaml') ? key : key + '.yaml');
        const file = (key === 'entries' || !out[targetName])
          ? (ROUTE[e.type] ? ROUTE[e.type] + '.yaml' : 'terms.yaml')
          : targetName;
        const target = out[file] || (out[file] = { domain: '*', title: file.replace('.yaml', ''), title_en: file.replace('.yaml', ''), entries: [] });
        const idx = target.entries.findIndex(x => x.id === e.id);
        if (idx >= 0) { target.entries[idx] = Object.assign({}, target.entries[idx], e); }
        else { target.entries.push(e); }
        overlayCount++;
      }
    }
    if (doc.subtopics) {
      const tf = out['domains.yaml'];
      if (tf) {
        for (const s of doc.subtopics) {
          const i = (tf.subtopics || []).findIndex(x => x.id === s.id);
          if (i >= 0) tf.subtopics[i] = Object.assign({}, tf.subtopics[i], s, { curated: true });
          else (tf.subtopics = tf.subtopics || []).push(Object.assign({}, s, { curated: true }));
        }
      }
    }
  }
}

fs.mkdirSync(OUT_YAML, { recursive: true });
fs.mkdirSync(OUT_JSON, { recursive: true });
for (const [file, doc] of Object.entries(out)) {
  dump(doc, file);
  console.log('  ' + file + '  ' + doc.entries.length + ' 条' + (doc.subtopics ? ' + ' + doc.subtopics.length + ' 子主题' : ''));
}
console.log('  （覆盖层合并 ' + overlayCount + ' 条）');

/* 合并去重后的权威视图 */
const merged = new Map();
for (const e of allEntries) {
  const cur = merged.get(e.id);
  if (!cur) { merged.set(e.id, e); continue; }
  /* 后出现者补齐空字段，不覆盖已填 */
  const m = Object.assign({}, cur);
  for (const k of Object.keys(e)) {
    const v = e[k], cv = m[k];
    const empty = cv === undefined || cv === null || (Array.isArray(cv) && !cv.length) || cv === '';
    if (empty && !(Array.isArray(v) && !v.length) && v !== '' && v !== undefined) m[k] = v;
  }
  merged.set(e.id, m);
}

/* 别名归并：自动派生的条目若其 id/title 落在另一条目的别名里 → 视为同一实体，合并 */
{
  const aliasToId = new Map();
  for (const e of merged.values()) {
    for (const a of (e.aliases || [])) {
      const k = slug(a);
      if (k && !aliasToId.has(k)) aliasToId.set(k, e.id);
    }
  }
  for (const e of [...merged.values()]) {
    if (merged.has(e.id)) continue;
    const viaTitle = aliasToId.get(slug(e.title_en || '')) || aliasToId.get(slug(e.title || ''));
    const viaAlias = (e.aliases || []).map(a => aliasToId.get(slug(a))).find(x => x && x !== e.id);
    const target = viaTitle || viaAlias;
    if (!target || !merged.has(target)) { merged.set(e.id, e); continue; }
    const t = merged.get(target), s = merged.get(e.id) || e;
    const m = Object.assign({}, t);
    for (const k of Object.keys(s)) {
      const v = s[k], cv = m[k];
      const empty = cv === undefined || cv === null || (Array.isArray(cv) && !cv.length) || cv === '';
      if (empty && !(Array.isArray(v) && !v.length) && v !== '' && v !== undefined) m[k] = v;
    }
    merged.set(target, m);
  }
}

/* 别名唯一化：一个别名只能属于一个规范实体；其余移到 see（跨实体引用） */
{
  const owner = new Map();
  for (const e of merged.values()) {
    for (const a of (e.aliases || [])) {
      const k = String(a).toLowerCase().trim();
      if (!k) continue;
      if (!owner.has(k)) owner.set(k, e.id);
    }
  }
  for (const e of merged.values()) {
    if (!e.aliases) continue;
    const keep = [], see = e.see || [];
    for (const a of e.aliases) {
      const k = String(a).toLowerCase().trim();
      if (owner.get(k) === e.id) keep.push(a);
      else { if (!see.includes(a)) see.push(a); }
    }
    e.aliases = keep;
    if (see.length) e.see = see;
  }
}

/* 子主题归属：手写条目按「域内子主题标题 ⊂ 条目标题」或 slug 命中自动归类 */
{
  const allSubs = Object.values(out).flatMap(d => d.subtopics || []);
  const byDomain = new Map();
  for (const s of allSubs) {
    if (!byDomain.has(s.domain)) byDomain.set(s.domain, []);
    byDomain.get(s.domain).push(s);
  }
  for (const e of merged.values()) {
    if (e.subtopic && e.subtopic.length) continue;
    if (e.derived) continue;
    const cands = [];
    for (const d of (e.domain || [])) for (const s of (byDomain.get(d) || [])) cands.push(s);
    if (!cands.length) continue;
    const t = e.title || '', te = e.title_en || '';
    const hit = cands.find(s => s.title && (t.includes(s.title) || te.toLowerCase().includes(s.title.toLowerCase())))
      || cands.find(s => s.id && (slug(te) === s.id || slug(t) === s.id || slug(te).includes(s.id) || slug(t).includes(s.id)));
    if (hit) e.subtopic = [hit.id];
  }
}

/* 诚实自校正：tier1 若无一手/权威出处 → 降为 tier2（门禁只卡"写得好"，不卡"标得好"） */
for (const e of merged.values()) {
  if (e.quality !== 'tier1' || e.status === 'exempt') continue;
  const strong = (e.sources || []).filter(s => s && (s.kind === 'primary' || s.kind === 'authoritative'));
  if (!strong.length) { e.quality = 'tier2'; e.note = (e.note ? e.note + '；' : '') + '原标 tier1 但无一手/权威出处，已降为 tier2'; }
}

const finalEntries = [...merged.values()];
fs.writeFileSync(path.join(OUT_JSON, 'inventory.json'), JSON.stringify({
  version: '1.0',
  generated: new Date().toISOString().slice(0, 10),
  entries: finalEntries,
  subtopics: Object.values(out).flatMap(d => d.subtopics || []),
}, null, 1), 'utf8');
console.log('\n合计 ' + finalEntries.length + ' 条目（去重后）→ _meta/inventory/*.yaml + build/inventory.json');

}

module.exports = { main };
if (require.main === module) main();
