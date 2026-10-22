/* ============================================================
   lib/model.js —— 知识站数据模型
   把「知识总目录 + Markdown 语料 + 主站词典」合并成可直接渲染的模型。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

/* 实体类型 → 分站路径 / 中文名 / 英文名 */
const TYPES = {
  era: { path: 'eras', zh: '时代', en: 'Era', dir: null },
  domain: { path: 'domains', zh: '技术域', en: 'Domain', dir: null },
  term: { path: 'terms', zh: '术语', en: 'Term', dir: null },
  person: { path: 'people', zh: '人物', en: 'Person', dir: 'people' },
  artifact: { path: 'artifacts', zh: '密件', en: 'Artifact', dir: 'artifacts' },
  machine: { path: 'machines', zh: '机器', en: 'Machine', dir: 'machines' },
  algorithm: { path: 'algorithms', zh: '算法', en: 'Algorithm', dir: null },
  protocol: { path: 'protocols', zh: '协议', en: 'Protocol', dir: null },
  standard: { path: 'standards', zh: '标准', en: 'Standard', dir: null },
  attack: { path: 'attacks', zh: '攻击', en: 'Attack', dir: null },
  theorem: { path: 'theorems', zh: '定理', en: 'Theorem', dir: null },
  event: { path: 'events', zh: '事件', en: 'Event', dir: null },
  cnhistory: { path: 'history', zh: '中国密码史', en: 'China', dir: null },
};

const AXES = {
  era: { key: 'era', zh: '时代', en: 'Era' },
  domain: { key: 'domain', zh: '技术域', en: 'Domain' },
  subtopic: { key: 'subtopic', zh: '子主题', en: 'Subtopic' },
  app: { key: 'apps', zh: '应用场景', en: 'Application' },
  threat: { key: 'threats', zh: '威胁模型', en: 'Threat model' },
  level: { key: 'level', zh: '难度', en: 'Level' },
};

function loadInventory(ROOT) {
  const p = path.join(ROOT, 'build', 'inventory.json');
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

/* 读取 md 的 frontmatter + 正文（中英分列） */
function readMd(abs) {
  if (!fs.existsSync(abs)) return null;
  const txt = fs.readFileSync(abs, 'utf8');
  const m = txt.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) return { fm: {}, body: txt, bodyEn: '' };
  const fm = {}; let key = null;
  for (const line of m[1].split(/\r?\n/)) {
    const km = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (km) { key = km[1]; const v = km[2].trim(); fm[key] = v === '' ? [] : v.replace(/^['"]|['"]$/g, ''); }
    else if (/^\s+-\s+(.+)$/.test(line) && key) {
      if (!Array.isArray(fm[key])) fm[key] = [];
      fm[key].push(line.trim().replace(/^-\s*/, '').replace(/^['"]|['"]$/g, ''));
    }
  }
  const body = m[2];
  const enIdx = body.search(/^##\s*English\s*\/\s*英文版\s*$/m);
  return {
    fm,
    body: enIdx >= 0 ? body.slice(0, enIdx).trim() : body.trim(),
    bodyEn: enIdx >= 0 ? body.slice(enIdx).replace(/^##\s*English\s*\/\s*英文版\s*$/m, '').trim() : '',
  };
}

/* 主站词典（术语释义 / 人物名 / 章节） */
function loadSite(ROOT) {
  const SITE_JS = require(path.join(ROOT, 'tools', 'mdgen', 'lib', 'load-poyi.js')).POYI_ROOT;
  const out = { glossary: [], people: {}, artifacts: {}, stories: [] };
  try {
    const sb = { console, localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} }, navigator: { language: 'zh' } };
    sb.window = sb; vm.createContext(sb);
    vm.runInContext(fs.readFileSync(path.join(SITE_JS, 'glossary-data.js'), 'utf8'), sb);
    out.glossary = sb.GLOSSARY || [];
  } catch (e) { }
  try {
    const sb = { console, localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} }, navigator: { language: 'zh' } };
    sb.window = sb; vm.createContext(sb);
    vm.runInContext(fs.readFileSync(path.join(SITE_JS, 'stories.js'), 'utf8'), sb);
    out.stories = sb.STORIES || [];
  } catch (e) { }
  try {
    const sb = { console, localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} }, navigator: { language: 'zh' } };
    sb.window = sb; vm.createContext(sb);
    vm.runInContext(fs.readFileSync(path.join(SITE_JS, 'core', 'i18n-dict.js'), 'utf8'), sb);
    const d = sb.Arcade.i18n.dicts;
    for (const k of Object.keys(d.zh || {})) {
      if (/^stp\.([\w-]+)\.name$/.test(k)) out.people[k.slice(4, -5)] = { zh: d.zh[k], en: d.en[k] || '' };
    }
  } catch (e) { }
  return out;
}

/* 仓库相对链接 → 分站 URL（md 正文里引用的是知识源仓的文件树，发布时必须改写） */
function rewriteLinks(body) {
  if (!body) return body;
  return String(body)
    .replace(/\]\(\.\.\/02-eras\/([^/]+)\/README\.md\)/g, '](/eras/$1/)')
    .replace(/\]\(\.\.\/02-eras\/([^/]+)\/[^)]+\.md\)/g, '](/eras/$1/)')
    .replace(/\]\(\.\.\/([\w-]+)\/README\.md\)/g, '](/eras/$1/)')
    .replace(/\]\(\.\.\/tech\/([^)]+)\.md\)/g, '](/domains/$1/)')
    .replace(/\]\(\.\.\/01-foundations\.md\)/g, '](/domains/d01-foundations/)')
    .replace(/\]\(\.\.\/people\/([^)]+)\.md\)/g, '](/people/$1/)')
    .replace(/\]\(\.\.\/artifacts\/([^)]+)\.md\)/g, '](/artifacts/$1/)')
    .replace(/\]\(\.\.\/machines\/([^)]+)\.md\)/g, '](/machines/$1/)')
    .replace(/\]\(\.\.\/quiz\/[^)]+\.md\)/g, '](/terms/)')
    .replace(/\]\(\.\.\/relations\/[^)]+\.md\)/g, '](/people/)')
    .replace(/\]\(\.\.\/timeline\/[^)]+\.md\)/g, '](/views/timeline/)')
    .replace(/\]\(\.\.\/map\/[^)]+\.md\)/g, '](/views/timeline/)')
    .replace(/\]\(\.\.\/zh-crypto\/[^)]+\.md\)/g, '](/history/)')
    .replace(/\]\(\.\.\/eggs\/[^)]+\.md\)/g, '](/about/)')
    .replace(/\]\(\.\.\/facts\/[^)]+\.md\)/g, '](/eras/)')
    .replace(/\]\(\.\/[^)]+\.md\)/g, '](/eras/)');
}

function build(ROOT) {
  const inv = loadInventory(ROOT);
  const site = loadSite(ROOT);
  const entries = [];

  /* 术语释义：取主站词典 */
  const glossByEn = {};
  for (const g of site.glossary) glossByEn[String(g.term).toLowerCase()] = g;

  for (const e of inv.entries) {
    const t = TYPES[e.type] || { path: 'items', zh: e.type, en: e.type, dir: null };
    const ent = {
      id: e.id, type: e.type, typePath: t.path, typeZh: t.zh, typeEn: t.en,
      title: e.title, titleEn: e.title_en || e.title,
      aliases: e.aliases || [], see: e.see || [],
      domain: e.domain || [], subtopic: e.subtopic || [], era: e.era || [],
      apps: e.apps || [], threats: e.threats || [],
      level: e.level || 0, prereq: e.prereq || [],
      status: e.status, quality: e.quality, sources: e.sources || [],
      note: e.note || '', playable: e.playable,
      url: '/' + t.path + '/' + e.id + '/',
      body: '', bodyEn: '', summary: '', summaryEn: '',
    };
    /* 正文：优先取仓内 md */
    if (t.dir) {
      const md = readMd(path.join(ROOT, t.dir, e.id + '.md'));
      if (md) { ent.body = rewriteLinks(md.body); ent.bodyEn = rewriteLinks(md.bodyEn); }
    }
    if (e.type === 'era') {
      const md = readMd(path.join(ROOT, '02-eras', e.id, 'README.md'));
      if (md) { ent.body = rewriteLinks(md.body); ent.bodyEn = rewriteLinks(md.bodyEn); }
      const eraMd = readMd(path.join(ROOT, '02-eras', e.id, 'era.md'));
      if (eraMd && eraMd.body && eraMd.body.length > (ent.body || '').length) { ent.body = rewriteLinks(eraMd.body); ent.bodyEn = rewriteLinks(eraMd.bodyEn); }
    }
    if (e.type === 'domain') {
      const md = readMd(path.join(ROOT, 'tech', e.id + '.md'));
      if (md) { ent.body = rewriteLinks(md.body); ent.bodyEn = rewriteLinks(md.bodyEn); }
    }
    if (e.type === 'term') {
      const g = glossByEn[String(e.titleEn || '').toLowerCase()];
      if (g) { ent.summary = g.zhDef || ''; ent.summaryEn = g.enDef || ''; }
    }
    entries.push(ent);
  }

  const byId = new Map(entries.map(e => [e.id, e]));

  /* 关联：同域 / 同时代 / 同子主题 的近邻（按轴取前若干） */
  for (const e of entries) {
    const rel = new Map();
    const add = (id, w) => {
      if (!id || id === e.id || !byId.has(id)) return;
      if (!rel.has(id)) rel.set(id, w); else rel.set(id, Math.min(6, rel.get(id) + w));
    };
    for (const d of e.domain) for (const x of entries) if (x.domain.includes(d) && x.id !== e.id) add(x.id, 1);
    for (const s of e.subtopic) for (const x of entries) if (x.subtopic.includes(s)) add(x.id, 3);
    for (const r of e.era) for (const x of entries) if (x.era.includes(r)) add(x.id, 2);
    for (const p of e.prereq) add(p, 5);
    for (const s of e.see) add(s, 1);
    e.related = [...rel.entries()].sort((a, b) => b[1] - a[1]).slice(0, 24).map(([id]) => id);
  }

  /* 分组：字段可能是数组（era/domain/…）也可能是标量（type） */
  const group = key => {
    const m = new Map();
    for (const e of entries) {
      const raw = e[key];
      const vals = Array.isArray(raw) ? raw : (raw === undefined || raw === null || raw === '' ? [] : [raw]);
      for (const v of vals) {
        if (!m.has(v)) m.set(v, []);
        m.get(v).push(e);
      }
    }
    return m;
  };
  const subtopicMeta = new Map((inv.subtopics || []).map(s => [s.id, s]));

  return {
    entries, byId,
    byType: group('type'),
    byEra: group('era'),
    byDomain: group('domain'),
    bySubtopic: group('subtopic'),
    byApp: group('apps'),
    byThreat: group('threats'),
    subtopicMeta,
    eras: entries.filter(e => e.type === 'era'),
    domains: entries.filter(e => e.type === 'domain'),
    stats: {
      total: entries.length,
      types: Object.fromEntries([...group('type')].map(([k, v]) => [k, v.length])),
      quality: entries.reduce((m, e) => { m[e.quality] = (m[e.quality] || 0) + 1; return m; }, {}),
      status: entries.reduce((m, e) => { m[e.status] = (m[e.status] || 0) + 1; return m; }, {}),
      subtopics: (inv.subtopics || []).length,
    },
  };
}

module.exports = { build, TYPES, AXES, readMd };
