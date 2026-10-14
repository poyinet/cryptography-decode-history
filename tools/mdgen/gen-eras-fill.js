#!/usr/bin/env node
/* ============================================================
   gen-eras-fill.js — Phase 2：补 5 个空时代叙述（E03/E05/E10/E18 + E19 扩充）
   每个空时代生成 02-eras/eNN-slug/era.md（双语叙述）。幂等。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const { writeIfDiff } = require('./gen-extras');
const ROOT = path.resolve(__dirname, '..', '..');

// 5 个空时代的权威双语叙述
const ERA = {
  'e03-byzantine-islamic': {
    t: '拜占庭与早期伊斯兰', te: 'Byzantine & Early Islamic', span: '476–800',
    zh: '西罗马 476 年陷落，但东罗马（拜占庭）把罗马的密写传统一路带进中世纪——行政与军情仍依赖移位与替换。真正的转折发生在伊斯兰世界：阿拉伯语从 7 世纪起成为科学语言，密码学随之进入「翻译—记录」阶段。阿拉伯学者不仅保存了希腊密码思想，更开始用阿拉伯文字母的频率特性研究密码——为下一个时代的黄金时代埋下种子。',
    en: 'After the fall of the Western Roman Empire in 476, the Eastern (Byzantine) Empire carried Roman cipher practice into the medieval era — administration and military traffic still relied on shift and substitution. The real pivot came in the Islamic world: Arabic became the language of science from the 7th century, and cryptography entered a "translation-and-recording" phase. Arab scholars preserved Greek cipher ideas and began analyzing ciphers using the letter-frequency properties of the Arabic script — planting the seed for the coming Golden Age.' },
  'e05-medieval-europe': {
    t: '中世纪欧洲', te: 'Medieval Europe', span: '1258–1450',
    zh: '1258 年蒙古 sack 巴格达，阿拉伯黄金时代落幕，密码学重心移回欧洲。中世纪欧洲的密写服务于**秘密外交**：教廷、各国王室各有一套「名册」（nomenclator）与代号体系，机密信件以替换或密语写成。这段时期的密码是**国家机密**而非科学，直到文艺复兴，数学才重新介入，密码学才从手艺变成学问。',
    en: 'After the 1258 sack of Baghdad, the Arab Golden Age ended and cryptography’s center of gravity shifted back to Europe. Medieval European secrecy served **secret diplomacy**: the papacy and royal courts each kept a "nomenclator" and code system, with confidential letters written in substitution or code. Cipher practice was a state secret, not a science — until the Renaissance, when mathematics re-entered and cryptography became a field of study again.' },
  'e10-interwar': {
    t: '战间期', te: 'Interwar Period', span: '1918–1939',
    zh: '两次大战之间，转子机从德军的 Enigma 升级为**国家安全工具**，而密码学第一次成为一门**工业**。波兰密码局（Biuro Szyfrów）的雷耶夫斯基、罗życki、齐加利斯克在 1932–39 年间连续破解德军 Enigma——这是「人类 vs 机器」的第一次胜利。德国则把 Enigma 加到 4 转子、加插线板，为二战的大对决上了膛。这段时期确立了「破译即工业」的新范式。',
    en: 'Between the wars, rotor machines rose from the German Enigma to a **national-security tool**, and cryptography became an **industry** for the first time. The Polish Cipher Bureau’s Rejewski, Różycki, and Zygalski broke the Wehrmacht Enigma in 1932–39 — the first human victory over a machine. Germany, in turn, hardened the Enigma to 4 rotors and a plugboard, loading the great WW2 duel. This period established the "codebreaking as industry" paradigm.' },
  'e18-frontier': {
    t: '前沿', te: 'The Frontier', span: '今 / Today',
    zh: '当下的三条前沿线：**完全同态加密（FHE）**——在密文上直接计算，解密前不出结果；**后量子迁移**——NIST 2024 标准（ML-KEM/ML-DSA/SLH-DSA）正式上岗，混合方案成为过渡默认；**AI 与密码分析**——大模型与对抗机器学习开始参与密码分析与侧信道推断。量子安全网络、隐私计算、AI 安全是未来十年的主战场。',
    en: 'Three frontier lines today: **fully homomorphic encryption (FHE)** — compute on ciphertext without decrypting; **post-quantum migration** — NIST’s 2024 standards (ML-KEM/ML-DSA/SLH-DSA) have entered service and hybrid schemes are the transitional default; **AI and cryptanalysis** — LLMs and adversarial ML are beginning to participate in cryptanalysis and side-channel inference. Quantum-safe networks, privacy computing, and AI security are the next decade’s main battlegrounds.' },
  'e19-china': {
    t: '中国平行线', te: "China's Parallel Line", span: '横切 / Cross-cutting',
    zh: '中国密码学从先秦**阴符**（兵符验信）到《六韬》**阴书**（拆信防截），到明将戚继光**反切码**，是一条与西方并行的密写传统。1930 年龙冈战斗缴获的**半部电台**，发展为曾希圣领导的红军无线电侦察——与同时代任何信号情报部队并驾齐驱。当代中国以 **SM2/SM3/SM4/ZUC** 四件套与《密码法》（2020）从「用标准」走向「立标准」，并率先把量子密钥分发投入运营。',
    en: 'Chinese cryptography runs parallel to the West, from the pre-Qin **yinfu** (tally authentication) and the Liu Tao’s **yinshu** (split-letter anti-intercept) to Qi Jiguang’s **fanqie** code — a distinct secrecy tradition. The "half radio" captured at Longgang (1930) grew into Zeng Xisheng’s Red Army signals intelligence, matching any contemporary SIGINT force. Modern China moved from "using standards" to "making standards" via the SM2/SM3/SM4/ZUC family and the Cryptography Law (2020), and first to operationalize quantum key distribution.' },
};

function main() {
  let n = 0;
  for (const [slug, e] of Object.entries(ERA)) {
    const dir = path.join(ROOT, '02-eras', slug);
    if (!fs.existsSync(dir)) { fs.mkdirSync(dir, { recursive: true }); }
    const body = ['---', `title: ${e.t}`, `title_en: ${e.te}`, 'type: era', `era: ${slug}`, '---', '',
      `# ${e.t}（${e.te}）`, '', `> ${e.span} · 轴1 编年叙事`, '',
      `**中文**：${e.zh}`, '', `**English**: ${e.en}`, '',
      '## 关联', '', '- 技术域：见 `../../tech/` 24 域', '- 实体：人物/密件/机器 见 `../people/` `../artifacts/` `../machines/`', ''].join('\n');
    writeIfDiff(path.join(dir, 'era.md'), body);
    console.log(`  [${slug}] 时代叙述已填`);
    n++;
  }
  console.log(`[gen-eras-fill] 完成：${n} 个时代`);
}

if (require.main === module) main();
module.exports = { main, ERA };
