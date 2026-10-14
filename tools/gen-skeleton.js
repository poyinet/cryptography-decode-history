#!/usr/bin/env node
/* ============================================================
   gen-skeleton.js — 生成 cryptography-decode-history 的 Phase 0 空骨架
   三轴知识晶格：19 个时代(轴1) + 24 个技术域(轴2) + 实体层(轴3)
   幂等：可重复运行，已存在且内容相同的文件不改动。
   用法：node tools/gen-skeleton.js
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

/* ---------- 轴 1：19 个时代（段A 前计算机 8 章 + 段B 算法时代 11 章） ---------- */
const ERAS = [
  { n: 1,  dir: 'e01-origins',                    seg: 'A', zh: '古代起源',                 en: 'Ancient Origins',               span: '前 500 BCE 前',  brief: '象形/楔形、结绳、刺青、泥板暗记' },
  { n: 2,  dir: 'e02-classical',                  seg: 'A', zh: '古典希腊罗马',             en: 'Classical Greece & Rome',     span: '前 500–476 CE',   brief: 'scytale、Laconic、凯撒、Atbash、波利比奥斯' },
  { n: 3,  dir: 'e03-byzantine-islamic',          seg: 'A', zh: '拜占庭与早期伊斯兰',       en: 'Byzantine & Early Islamic',   span: '476–800',          brief: '拜占庭宫廷密码、早期阿拉伯' },
  { n: 4,  dir: 'e04-arabic-golden-age',          seg: 'A', zh: '阿拉伯黄金时代',           en: 'Islamic Golden Age',          span: '800–1258',         brief: 'al-Kindi 频率分析（约 850）' },
  { n: 5,  dir: 'e05-medieval-europe',            seg: 'A', zh: '中世纪欧洲',               en: 'Medieval Europe',             span: '1258–1450',        brief: 'Trithemius、Ars Magica、首个多表' },
  { n: 6,  dir: 'e06-renaissance',                seg: 'A', zh: '文艺复兴与宗教改革',       en: 'Renaissance & Reformation',   span: '1450–1600',        brief: '阿尔贝蒂盘 1467、维吉尼亚 1553、苏格兰玛丽 1586' },
  { n: 7,  dir: 'e07-early-modern-steganography', seg: 'A', zh: '近代早期与隐写',           en: 'Early Modern & Steganography',span: '1600–1789',        brief: '培根双字体、卡当格栅、书密码' },
  { n: 8,  dir: 'e08-codebreakers',               seg: 'A', zh: '破译者时代',               en: 'Age of Codebreaking',         span: '1789–1914',        brief: '含电报时代：摩斯、Kasiski、巴贝奇、惠斯通、Vernam 1917' },
  { n: 9,  dir: 'e09-ww1',                        seg: 'B', zh: '第一次世界大战',           en: 'World War I',                 span: '1914–1918',        brief: 'ADFGVX、Playfair、早期 Enigma' },
  { n: 10, dir: 'e10-interwar',                   seg: 'B', zh: '战间期',                   en: 'Interwar Period',             span: '1918–1939',        brief: 'Enigma 崛起、Typex、波兰数学家首破 Enigma' },
  { n: 11, dir: 'e11-ww2',                        seg: 'B', zh: '第二次世界大战',           en: 'World War II',                span: '1939–1945',        brief: 'Enigma/Bombe、M-209、紫密、JN-25、洛伦兹、纳瓦霍' },
  { n: 12, dir: 'e12-cold-war-info-theory',       seg: 'B', zh: '冷战与信息论转折',         en: 'Cold War & Information Theory',span: '1945–1975',        brief: 'VENONA、OTP 复用、NSA/GCHQ、香农 1949' },
  { n: 13, dir: 'e13-public-key',                 seg: 'B', zh: '公钥革命',                 en: 'Public-key Revolution',       span: '1976–1990',        brief: 'Diffie-Hellman 1976、RSA 1977、Merkle' },
  { n: 14, dir: 'e14-standardization',            seg: 'B', zh: '标准化时代',               en: 'Age of Standardization',      span: '1977–2001',        brief: 'DES、AES、SHA、NIST' },
  { n: 15, dir: 'e15-web-protocols',              seg: 'B', zh: '网络与协议时代',           en: 'Web & Protocol Era',          span: '1991–2010',        brief: 'TLS、PGP、PKI、证书、数字签名' },
  { n: 16, dir: 'e16-quantum-turn',               seg: 'B', zh: '量子转折',                 en: 'Quantum Turn',                span: '1984–2019',        brief: 'BB84、Shor、Grover、QKD' },
  { n: 17, dir: 'e17-post-quantum',               seg: 'B', zh: '后量子时代',               en: 'Post-quantum Era',            span: '2016–今',           brief: 'NIST PQC、ML-KEM/ML-DSA/SLH-DSA、FIPS 203-205' },
  { n: 18, dir: 'e18-frontier',                   seg: 'B', zh: '前沿',                     en: 'The Frontier',                span: '今',                brief: '同态、MPC、零知识、Passkey' },
  { n: 19, dir: 'e19-china',                      seg: 'B', zh: '中国平行线',               en: "China's Parallel Line",       span: '横切',             brief: '反切→红军无线电→国密（SM2/SM3/SM4/ZUC）' },
];

/* ---------- 轴 2：24 个技术域（D01 在顶层 01-foundations.md，D02–D24 在 tech/） ---------- */
const DOMAINS = [
  { id: 'd01', file: '01-foundations.md',              zh: '基础与术语',                 en: 'Foundations & Terminology' },
  { id: 'd02', file: 'd02-monoalphabetic.md',          zh: '单表替换',                   en: 'Monoalphabetic Substitution' },
  { id: 'd03', file: 'd03-polyalphabetic.md',          zh: '多表替换',                   en: 'Polyalphabetic Substitution' },
  { id: 'd04', file: 'd04-transposition.md',           zh: '换位',                       en: 'Transposition' },
  { id: 'd05', file: 'd05-rotor-mechanical.md',        zh: '转子/机械密码',              en: 'Rotor & Mechanical Ciphers' },
  { id: 'd06', file: 'd06-otp-stream.md',              zh: 'OTP 与流密码',               en: 'OTP & Stream Ciphers' },
  { id: 'd07', file: 'd07-cryptanalysis.md',           zh: '破译方法',                   en: 'Cryptanalysis' },
  { id: 'd08', file: 'd08-block-ciphers.md',           zh: '对称分组密码',               en: 'Symmetric Block Ciphers' },
  { id: 'd09', file: 'd09-hashes.md',                  zh: '哈希',                       en: 'Hash Functions' },
  { id: 'd10', file: 'd10-auth-aead.md',               zh: '消息认证与 AEAD',            en: 'Authentication & AEAD' },
  { id: 'd11', file: 'd11-asymmetric.md',              zh: '非对称公钥',                 en: 'Asymmetric Public-key' },
  { id: 'd12', file: 'd12-signatures.md',              zh: '数字签名',                   en: 'Digital Signatures' },
  { id: 'd13', file: 'd13-key-management.md',          zh: '密钥管理',                   en: 'Key Management' },
  { id: 'd14', file: 'd14-protocols-pki.md',           zh: '协议与 PKI',                 en: 'Protocols & PKI' },
  { id: 'd15', file: 'd15-zkp.md',                     zh: '零知识证明',                 en: 'Zero-knowledge Proofs' },
  { id: 'd16', file: 'd16-secret-sharing-mpc.md',      zh: '秘密共享与 MPC',             en: 'Secret Sharing & MPC' },
  { id: 'd17', file: 'd17-side-channel.md',            zh: '侧信道与物理攻击',           en: 'Side-Channel & Physical Attacks' },
  { id: 'd18', file: 'd18-steganography.md',           zh: '隐写与信息隐藏',             en: 'Steganography & Info Hiding' },
  { id: 'd19', file: 'd19-randomness.md',              zh: '随机数与 CSPRNG',            en: 'Randomness & CSPRNG' },
  { id: 'd20', file: 'd20-china-sm.md',                zh: '中国国密',                   en: 'China National Cryptography' },
  { id: 'd21', file: 'd21-quantum-crypto.md',          zh: '量子密码',                   en: 'Quantum Cryptography' },
  { id: 'd22', file: 'd22-post-quantum.md',            zh: '后量子',                     en: 'Post-Quantum' },
  { id: 'd23', file: 'd23-applied-security.md',        zh: '应用安全工程',               en: 'Applied Security Engineering' },
  { id: 'd24', file: 'd24-theory.md',                  zh: '理论基础',                   en: 'Theoretical Foundations' },
];

/* ---------- 轴 3：实体/集合目录 ---------- */
const ENTITY_DIRS = [
  { dir: 'people',    zh: '人物志',      en: 'People' },
  { dir: 'artifacts', zh: '密件册',      en: 'Artifacts' },
  { dir: 'machines',  zh: '机器/装置',   en: 'Machines' },
  { dir: 'quiz',      zh: '测验',        en: 'Quiz' },
  { dir: 'facts',     zh: '冷知识',      en: 'Trivia' },
  { dir: 'quotes',    zh: '名言',        en: 'Quotes' },
  { dir: 'timeline',  zh: '时间线',      en: 'Timeline' },
  { dir: 'map',       zh: '世界地图',    en: 'World Map' },
  { dir: 'zh-crypto', zh: '中华密码史',  en: "China's Cryptography" },
  { dir: 'relations', zh: '人物关系网',  en: 'People Relations' },
  { dir: 'eggs',      zh: '隐藏彩蛋',    en: 'Easter Eggs' },
];

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }
function writeIfDiff(p, content) {
  if (fs.existsSync(p) && fs.readFileSync(p, 'utf8') === content) return false;
  fs.writeFileSync(p, content, 'utf8');
  return true;
}

/* ---------- frontmatter 构造 ---------- */
function eraREADME(e) {
  return `---
title: ${e.zh}
title_en: ${e.en}
type: era
segment: ${e.seg}
span: "${e.span}"
---

# ${e.zh}（${e.en}）

> 段 ${e.seg} · ${e.span} · ${e.brief}

（Phase 0 占位 · 正文待填充）

## 关联
- 技术域：（待归）
- 人物：（待归）
- 机器：（待归）
- 密件：（待归）
- 游戏：（待归）
`;
}
function domainFile(d, isTop) {
  return `---
title: ${d.zh}
title_en: ${d.en}
type: domain
domain: ${d.id}
---

# ${d.zh}（${d.en}）

> 技术域 ${d.id} ·（Phase 0 占位 · 概念/算法/协议/术语待填充）

## 概念
（待填）

## 算法 / 协议
（待填）

## 术语
（待填）

## 关联时代 / 人物 / 游戏
（待填）
`;
}

/* ---------- 执行 ---------- */
let created = 0;
function put(rel, content) {
  const abs = path.join(ROOT, rel);
  ensureDir(path.dirname(abs));
  if (writeIfDiff(abs, content)) created++;
}

/* 顶层 README（中） */
put('README.md', [
  '# cryptography-decode-history · 加密解密知识百科',
  '',
  '> 一部以**三维知识晶格**组织的「人类三千年加密解密史」开源知识库：每个知识点同时被**哪个时代 × 哪类技术 × 关联谁/哪件密件/哪台机器**三轴定位并互链。',
  '> 纯 Markdown + frontmatter，GitHub 原生可读。中文主文 + 英文版双语。内容 CC BY 4.0。',
  '',
  '## 三轴结构',
  '',
  '### 轴 1 · 编年叙事（19 章，两段）',
  '段 A · 密码时代（前计算机，按时间段）：',
  ...ERAS.filter(e => e.seg === 'A').map(e => `- [${e.zh}（${e.span}）](02-eras/${e.dir}/) —— ${e.brief}`),
  '',
  '段 B · 算法时代（计算机时代，按革命）：',
  ...ERAS.filter(e => e.seg === 'B').map(e => `- [${e.zh}（${e.span}）](02-eras/${e.dir}/) —— ${e.brief}`),
  '',
  '### 轴 2 · 概念/技术体系（24 技术域）',
  `- [基础与术语](01-foundations.md)`,
  ...DOMAINS.filter(d => d.id !== 'd01').map(d => `- [${d.zh}（${d.en}）](tech/${d.file})`),
  '',
  '### 轴 3 · 实体层（人/物/词/题）',
  ...ENTITY_DIRS.map(x => `- **${x.zh}** ${x.en}`),
  '',
  '## 三条阅读路线',
  '- **零基础**：从 [轴 1 段 A 第 1 章](02-eras/e01-origins/) 顺着时间轴读到今，再进 [基础与术语](01-foundations.md)。',
  '- **破译者**：先读 [破译方法](tech/d07-cryptanalysis.md)，再按时代看真实破译战例。',
  '- **专家**：直接进 [轴 2 技术域](tech/) 的对应域，交叉引用时代与实体。',
  '',
  '## 状态',
  'Phase 0 空骨架已建（19 章 + 24 域 + 实体层占位）。正文按 Phase 1（现有内容对号入座）→ Phase 2（补缺口）逐步填充。',
  '',
].join('\n'));

/* 顶层 README（英） */
put('README.en.md', [
  '# cryptography-decode-history · A Knowledge Base of Encryption & Decryption',
  '',
  '> An open-source knowledge base of the 3,000-year history of human cryptography, organized as a **three-axis lattice**: every topic is located by **which era × which technical domain × which people/artifacts/machines** and cross-linked.',
  '> Pure Markdown + frontmatter, readable natively on GitHub. Chinese-primary with an English section. Content CC BY 4.0.',
  '',
  '## The three axes',
  '',
  '### Axis 1 · Chronology (19 chapters, two segments)',
  'Segment A — the age of ciphers (pre-computer, by time period):',
  ...ERAS.filter(e => e.seg === 'A').map(e => `- [${e.en} (${e.span})](02-eras/${e.dir}/) — ${e.brief}`),
  '',
  'Segment B — the age of algorithms (computer era, by revolution):',
  ...ERAS.filter(e => e.seg === 'B').map(e => `- [${e.en} (${e.span})](02-eras/${e.dir}/) — ${e.brief}`),
  '',
  '### Axis 2 · Technical taxonomy (24 domains)',
  `- [Foundations & Terminology](01-foundations.md)`,
  ...DOMAINS.filter(d => d.id !== 'd01').map(d => `- [${d.en}](tech/${d.file})`),
  '',
  '### Axis 3 · Entities (people / artifacts / machines / terms / quizzes)',
  ...ENTITY_DIRS.map(x => `- **${x.en}**`),
  '',
  '## Status',
  'Phase 0 skeleton in place (19 eras + 24 domains + entity layers, placeholders). Content is filled in Phase 1 (map existing content) → Phase 2 (fill the gaps).',
  '',
].join('\n'));

/* _meta/schema.md */
put('_meta/schema.md', [
  '# Frontmatter 规范（schema）',
  '',
  '每个知识单元文件头统一如下。`type` 取值：era / domain / person / artifact / machine / term / protocol / algorithm / quiz / quote / fact / timeline / map / relation / egg。',
  '',
  '```yaml',
  '---',
  'title: 中文标题',
  'title_en: English Title',
  'type: person            # 见上方取值',
  'era: e02-classical      # 所属时代（轴1，用于反链）',
  'domain: d07-cryptanalysis # 所属技术域（轴2，用于反链）',
  'game: freq              # 关联游戏 id（反链回网站，仅文字，零外链）',
  'sources:                # 纯文字出处，零外链，宁缺勿空',
  '  - 作者, 《书名/论文》, 年份',
  '---',
  '```',
  '',
  '## 命名',
  '- 时代目录：`02-eras/eNN-<slug>/`（NN=两位序号）',
  '- 技术域文件：`tech/dNN-<slug>.md`；D01 在顶层 `01-foundations.md`',
  '- 实体：`people/<id>.md` / `artifacts/<id>.md` / `machines/<id>.md`（一人/一件/一台一文件）',
  '- 文件 UTF-8 无 BOM，正文先中文、后 `## English / 英文版` 段',
  '',
  '## 时代词表（轴1，19）',
  ...ERAS.map(e => `- ${e.dir} · ${e.zh} / ${e.en}（${e.span}）`),
  '',
  '## 技术域词表（轴2，24）',
  ...DOMAINS.map(d => `- ${d.id} · ${d.zh} / ${d.en}`),
  '',
  '## 铁律',
  '- 出处纯文字、零外链；未知留空，不写模糊占位。',
  '- 每个知识点必须能回答：这是什么 / 依据是什么 / 怎么用 / 署名给谁。',
  '- 三轴互链不得有孤儿（每个 game/era/domain 反链必须指向存在的目标）。',
].join('\n'));

/* LICENSE */
put('LICENSE', [
  'cryptography-decode-history',
  '',
  '内容（知识文本）：Creative Commons Attribution 4.0 International (CC BY 4.0)',
  '脚本（tools/ 等）：MIT License',
  '',
  'CC BY 4.0 — 你可以自由共享、改编本作品，须给出适当署名。',
  '完整条款见 https://creativecommons.org/licenses/by/4.0/（此处仅文字说明，非外链依赖）。',
  '',
].join('\n'));

/* CONTRIBUTING.md */
put('CONTRIBUTING.md', [
  '# 贡献指南',
  '',
  '1. 遵循 `_meta/schema.md` 的 frontmatter 规范。',
  '2. 每个知识点过「四问」：这是什么 / 依据是什么 / 怎么用 / 署名给谁。',
  '3. 出处纯文字、零外链；未知留空，不写模糊占位。',
  '4. 补全三轴互链：每个 era / domain / game 反链必须指向存在的目标。',
  '5. 正文先中文，后 `## English / 英文版` 段，双语齐全。',
  '',
].join('\n'));

/* 轴1：19 个时代 README */
for (const e of ERAS) put(`02-eras/${e.dir}/README.md`, eraREADME(e));

/* 轴2：24 个技术域文件（D01 顶层，D02-D24 在 tech/） */
for (const d of DOMAINS) {
  const rel = d.id === 'd01' ? d.file : `tech/${d.file}`;
  put(rel, domainFile(d, d.id === 'd01'));
}

/* 轴3：实体/集合目录（.gitkeep 占位） */
for (const x of ENTITY_DIRS) put(`${x.dir}/.gitkeep`, '');

console.log(`[gen-skeleton] 生成/更新 ${created} 个文件。骨架根：${ROOT}`);
console.log(`时代 ${ERAS.length} · 技术域 ${DOMAINS.length} · 实体目录 ${ENTITY_DIRS.length}`);
