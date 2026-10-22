#!/usr/bin/env node
/* ============================================================
   check-inventory.js —— 知识总目录门禁
   校验：id 唯一 / 状态完整 / todo 有交代 / exempt 有理由 / done 有实体 /
        有货无账 / 轴一致性 / 别名不冲突 / prereq 可解析 / 取值域合法
   用法：node tools/check/check-inventory.js [--dir=_meta/inventory]
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const ROOT = path.resolve(__dirname, '..', '..');
process.chdir(ROOT);

const INVENTORY_DIR = path.join(ROOT, '_meta', 'inventory');

/* 固定取值域（与计划 §4.1 一致） */
const APPS = ['military', 'diplomacy', 'finance', 'telecom', 'privacy', 'law-enforcement',
  'copyright', 'academic', 'everyday', 'counter-terror', 'infrastructure', 'health'];
const THREATS = ['CO', 'KPA', 'CPA', 'CCA', 'CCA1', 'CCA2', 'adaptive-CCA', 'related-key',
  'known-key', 'forward', 'inverse', 'chosen-target', 'rogue-key', 'side-channel',
  'physical', 'social', 'implementation', 'protocol', 'network', 'quantum', 'statistical'];
const STATUS = ['done', 'draft', 'todo', 'exempt'];
const QUALITY = ['tier1', 'tier2', 'tier3'];
const TYPES = ['era', 'domain', 'person', 'artifact', 'machine', 'term', 'protocol', 'algorithm',
  'standard', 'attack', 'theorem', 'event', 'quote', 'fact', 'timeline', 'map', 'relation', 'egg', 'quiz'];

let fail = 0, warn = 0;
const bad = m => { console.log('  ✗ ' + m); fail++; };
const wrn = m => { console.log('  ⚠ ' + m); warn++; };
const ok = m => console.log('  ✓ ' + m);

/* ---------- 载入所有清单 ---------- */
const files = fs.existsSync(INVENTORY_DIR)
  ? fs.readdirSync(INVENTORY_DIR).filter(f => f.endsWith('.yaml') || f.endsWith('.yml'))
  : [];
if (!files.length) { console.log('清单目录为空（_meta/inventory/）——跳过'); process.exit(0); }

const all = [];       // 所有条目
const subtopics = new Map();
const seenId = new Map();
const aliasOwner = new Map();

for (const f of files) {
  const doc = yaml.load(fs.readFileSync(path.join(INVENTORY_DIR, f), 'utf8'));
  if (!doc) continue;
  const groups = Object.keys(doc).filter(k => !['domain', 'title', 'title_en', 'subtopics', 'issues'].includes(k));
  for (const st of (doc.subtopics || [])) {
    if (!st.id) { bad(f + ' 子主题缺 id'); continue; }
    if (subtopics.has(st.id)) bad('子主题 id 重复：' + st.id);
    subtopics.set(st.id, st);
  }
  for (const g of groups) {
    const list = Array.isArray(doc[g]) ? doc[g] : [doc[g]];
    for (const e of list) {
      if (!e || !e.id) { bad(f + ' 存在无 id 的条目'); continue; }
      e.__file = f; e.__group = g;
      if (seenId.has(e.id)) bad('id 重复：' + e.id + '（' + seenId.get(e.id) + ' 与 ' + f + '）');
      else seenId.set(e.id, f);
      all.push(e);
      for (const a of (e.aliases || [])) {
        const k = String(a).toLowerCase().trim();
        if (!k) continue;
        if (aliasOwner.has(k) && aliasOwner.get(k) !== e.id) bad('别名冲突：' + a + ' → ' + aliasOwner.get(k) + ' / ' + e.id);
        else aliasOwner.set(k, e.id);
      }
    }
  }
}

console.log('== 1. 清单载入 ==');
ok(files.length + ' 份清单 · ' + all.length + ' 条目 · ' + subtopics.size + ' 个子主题');

console.log('== 2. 条目结构 ==');
for (const e of all) {
  const where = e.id + '（' + e.__file + '）';
  if (!STATUS.includes(e.status)) bad(where + ' status 非法：' + e.status);
  if (!QUALITY.includes(e.quality)) bad(where + ' quality 非法：' + e.quality);
  if (!e.title) bad(where + ' 缺 title');
  if (!e.title_en) wrn(where + ' 缺 title_en（中英同步门禁会拦）');
  if (e.status === 'todo' && !(e.priority || e.target)) bad(where + ' status=todo 但缺 priority/target');
  if (e.status === 'exempt' && !e.note) bad(where + ' status=exempt 但缺 note');
  if (e.quality !== 'tier3' && !(e.sources && e.sources.length)) bad(where + ' tier1/2 缺出处');
  if (e.quality === 'tier1' && !(e.sources || []).some(s => s && (s.kind === 'primary' || s.kind === 'authoritative'))) {
    wrn(where + ' tier1 无 primary/authoritative 级出处');
  }
  if (!Array.isArray(e.domain) || !e.domain.length) bad(where + ' 缺 domain');
  if (!Array.isArray(e.subtopic) || !e.subtopic.length) bad(where + ' 缺 subtopic');
  for (const s of (e.subtopic || [])) if (!subtopics.has(s)) bad(where + ' subtopic 不存在：' + s);
  if (!Array.isArray(e.apps) || !e.apps.length) bad(where + ' 缺 apps');
  for (const a of (e.apps || [])) if (!APPS.includes(a)) bad(where + ' apps 取值域非法：' + a);
  if (!Array.isArray(e.threats) || !e.threats.length) bad(where + ' 缺 threats');
  for (const t of (e.threats || [])) if (!THREATS.includes(t)) bad(where + ' threats 取值域非法：' + t);
  if (!(e.level >= 1 && e.level <= 4)) bad(where + ' level 越界：' + e.level);
  if (!Array.isArray(e.era) || !e.era.length) bad(where + ' 缺 era');
  if (!Array.isArray(e.prereq)) bad(where + ' prereq 非数组');
  if (e.playable === undefined) wrn(where + ' 未标 playable');
  for (const s of (e.sources || [])) {
    if (!s || !s.title) bad(where + ' 出处条目缺 title');
    if (s && s.kind && !['primary', 'authoritative', 'tertiary'].includes(s.kind)) bad(where + ' 出处 kind 非法：' + s.kind);
  }
}

console.log('== 3. 交叉引用 ==');
const idSet = new Set(all.map(e => e.id));
/* 跨清单引用合法（如 d07 的差分分析前置 d08 的 S 盒）→ 存在于其他清单或实体文件即算解析成功 */
const knownElsewhere = new Set();
for (const d of ['people', 'artifacts', 'machines', 'algorithms', 'protocols', 'standards', 'attacks', 'theorems', 'events']) {
  const abs = path.join(ROOT, d);
  if (!fs.existsSync(abs)) continue;
  for (const f of fs.readdirSync(abs)) if (f.endsWith('.md') && f !== 'README.md') knownElsewhere.add(f.replace(/\.md$/, ''));
}
/* 术语注册表（tools/mdgen/term-notes.js / gen-glossary 用的 key） */
for (const f of ['tools/mdgen/term-notes.js', 'tools/mdgen/source-ledger.js']) {
  const abs = path.join(ROOT, f);
  if (!fs.existsSync(abs)) continue;
  const src = fs.readFileSync(abs, 'utf8');
  for (const m of src.matchAll(/^\s*'([^']+)':/gm)) knownElsewhere.add(m[1]);
}
/* 技术域文件里的条目标题（### X（…））→ slug */
const slug = s => String(s).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const techDir = path.join(ROOT, 'tech');
if (fs.existsSync(techDir)) {
  for (const f of fs.readdirSync(techDir)) {
    if (!f.endsWith('.md')) continue;
    const t = fs.readFileSync(path.join(techDir, f), 'utf8');
    for (const m of t.matchAll(/^###\s+(.+?)(?:（|\()/gm)) knownElsewhere.add(slug(m[1]));
    for (const m of t.matchAll(/^\s*-\s+`([a-z0-9-]+)`/gm)) knownElsewhere.add(m[1]);
  }
}
let crossRefs = 0;
for (const e of all) {
  for (const p of (e.prereq || [])) {
    if (idSet.has(p)) continue;
    if (knownElsewhere.has(p)) { crossRefs++; continue; }
    bad(e.id + ' prereq 悬空：' + p);
  }
}
if (crossRefs) ok(crossRefs + ' 处跨清单前置引用（指向其他清单的实体）');

console.log('== 4. done 条目应有实体 ==');
/* 实体文件位置约定：type → 目录 */
const TYPE_DIR = {
  person: 'people', artifact: 'artifacts', machine: 'machines', term: 'glossary',
  algorithm: 'algorithms', protocol: 'protocols', standard: 'standards',
  attack: 'attacks', theorem: 'theorems', event: 'events',
};
/* 目录尚未建立 → 实体存在性检查降级为提示（等实体语料迁到 slug 后转严） */
const dirReady = d => fs.existsSync(path.join(ROOT, d));
for (const e of all) {
  if (e.status !== 'done') continue;
  if (!e.type) { wrn(e.id + ' status=done 但未标 type'); continue; }
  const dir = TYPE_DIR[e.type];
  if (!dir) continue;
  if (!dirReady(dir)) { wrn(e.id + '（' + dir + '/ 语料目录尚未建立，实体存在性暂不校验）'); continue; }
  const cands = [path.join(ROOT, dir, e.id + '.md'), path.join(ROOT, dir, e.id, 'README.md')];
  if (!cands.some(c => fs.existsSync(c))) {
    const inDomain = fs.readdirSync(path.join(ROOT, 'tech')).some(f => {
      const t = fs.readFileSync(path.join(ROOT, 'tech', f), 'utf8');
      return t.includes('### ' + e.title + '（') || t.includes('### ' + e.title);
    });
    if (!inDomain) bad(e.id + ' status=done 但既无 ' + dir + '/' + e.id + '.md，域文件也无该条目');
  }
}

console.log('== 5. 有货无账（实体存在但未登记）==');
/* 只检查「已经有对应清单」的实体目录——清单尚未铺开时不误报 */
const ENTITY_DIRS = [
  { dir: 'people', list: 'people.yaml' },
  { dir: 'artifacts', list: 'artifacts.yaml' },
  { dir: 'machines', list: 'machines.yaml' },
  { dir: 'algorithms', list: 'algorithms.yaml' },
  { dir: 'protocols', list: 'protocols.yaml' },
  { dir: 'standards', list: 'standards.yaml' },
  { dir: 'attacks', list: 'attacks.yaml' },
  { dir: 'theorems', list: 'theorems.yaml' },
  { dir: 'events', list: 'events.yaml' },
];
let orphans = 0, scoped = 0;
for (const { dir, list } of ENTITY_DIRS) {
  if (!files.includes(list)) continue;      // 该类清单尚未铺开 → 暂不校验
  scoped++;
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const f of fs.readdirSync(abs)) {
    if (!f.endsWith('.md') || f === 'README.md') continue;
    const id = f.replace(/\.md$/, '');
    if (!idSet.has(id)) { bad('有货无账：' + dir + '/' + f + ' 不在任何清单中'); orphans++; }
  }
}
if (!scoped) ok('实体类清单尚未铺开，孤儿检查暂不启用');
else if (!orphans) ok(scoped + ' 类实体目录均无孤儿');

console.log('== 6. 覆盖矩阵（报告，不阻断）==');
const byStatus = {}; const byQuality = {};
for (const e of all) { byStatus[e.status] = (byStatus[e.status] || 0) + 1; byQuality[e.quality] = (byQuality[e.quality] || 0) + 1; }
console.log('  status: ' + JSON.stringify(byStatus));
console.log('  quality: ' + JSON.stringify(byQuality));
const gaps = all.filter(e => e.status === 'todo' || e.status === 'draft');
console.log('  待办/在写: ' + gaps.length + ' 条');
for (const g of gaps.slice(0, 20)) console.log('    · ' + g.id + ' [' + g.status + '] ' + (g.priority || '') + ' ' + (g.title || ''));

console.log('\n' + (fail ? '❌ ' + fail + ' 项不通过' : '✅ 全部通过') + (warn ? '（' + warn + ' 项提示）' : ''));
process.exit(fail ? 1 : 0);
