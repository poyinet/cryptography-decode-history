#!/usr/bin/env node
/* ============================================================
   gen-glossary.js — 282 术语 → 24 技术域文件的「术语」节
   路由：cat 直接映射 + classical/modern 逐词显式覆盖（全覆盖）。
   幂等：每次重建「## 术语」节，其余内容不动。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const { load } = require('./lib/load-poyi');

const ROOT = path.resolve(__dirname, '..', '..');

// cat → domain 直接映射
const CAT_DEF = {
  basic: 'd01', encoding: 'd01', methods: 'd07', theoretical: 'd24',
  postquantum: 'd22', protocol: 'd14', security: 'd23', people: 'd01',
};
// 显式覆盖（classical + modern 全部 127 条逐一归域）
const EXPLICIT = {
  // —— classical ——
  'Enigma': 'd05', 'Bombe': 'd05', 'Purple': 'd05', 'JN-25': 'd05', 'Combined Cipher Machine (CCM)': 'd05', 'Typex': 'd05', 'Hagelin C-38': 'd05', 'Rockex Cipher': 'd05', 'Half-a-Radio': 'd04',
  'Transposition': 'd04', 'Rail Fence': 'd04', 'ADFGVX': 'd04', 'Bifid Cipher': 'd04', 'Trifid Cipher': 'd04', 'Double Transposition': 'd04', 'Scytale': 'd04',
  'Vigenère': 'd03', 'Playfair': 'd03', 'Hill Cipher': 'd03', 'Autokey Cipher': 'd03', 'Alberti Cipher Disk': 'd03', 'Gronsfeld Cipher': 'd03', 'Nihilist Cipher': 'd03', 'Porta Cipher': 'd03', 'Two-Square Cipher': 'd03', 'Four-Square Cipher': 'd03', 'Beaufort Cipher': 'd03', 'Tabula Recta': 'd03',
  'Homophonic Substitution': 'd02', 'Homophonic with Nomenclator': 'd02', 'Nomenclator': 'd02', 'Codebook': 'd02', 'Null Cipher': 'd02', 'Book Cipher': 'd02', 'Great Cipher of Louis XIV': 'd02', 'Red Army Radio Cipher': 'd02', 'Yinfu Tally Codes': 'd02', 'Yinshu Split Letters': 'd02', 'Ziyan Code': 'd02', 'Fanqie Code': 'd02', 'Navajo Code Talkers': 'd02', 'Caesar Cipher': 'd02', 'Substitution': 'd02', 'Affine Cipher': 'd02',
  'One-Time Pad History': 'd06',
  // —— modern ——
  'One-Time Pad (OTP)': 'd06', 'XOR': 'd06', 'RC4': 'd06', 'ChaCha20': 'd06', 'Stream Cipher (Keystream)': 'd06', 'Pseudorandom Function (PRF)': 'd06', 'Pseudorandom Generator (PRG)': 'd06',
  'Block Cipher': 'd08', 'Symmetric Key': 'd08', 'Data Encryption Standard (DES)': 'd08', 'AES': 'd08', 'Feistel Network': 'd08', 'Substitution-Permutation Network (SPN)': 'd08', 'Symmetric Cryptography': 'd08', 'Block Cipher Mode (ECB/CBC/GCM)': 'd08', 'Counter Mode (CTR)': 'd08', 'Cipher Block Chaining (CBC)': 'd08', 'Galois/Counter Mode (GCM)': 'd08', '3DES (Triple DES)': 'd08', 'Blowfish / Twofish': 'd08', 'Camellia': 'd08', 'KASUMI': 'd08', 'RC6': 'd08', 'CFB/OFB 模式': 'd08', 'Padding': 'd08', 'Feistel vs SPN (Confusion vs Diffusion)': 'd08', 'Key Schedule': 'd08',
  'Cryptographic Hash': 'd09', 'Salt (Cryptography)': 'd09', 'Merkle Tree': 'd09', 'Proof of Work (PoW)': 'd09', 'SHA-3': 'd09', 'MD5': 'd09', 'SHA-1': 'd09', 'SHA-2': 'd09', 'RIPEMD & Whirlpool': 'd09', 'Hashcash': 'd09',
  'Message Authentication Code (MAC)': 'd10', 'HMAC': 'd10', 'Poly1305': 'd10', 'KMAC / cSHAKE': 'd10',
  'Public-Key Crypto': 'd11', 'Asymmetric Key': 'd11', 'RSA': 'd11', 'Elliptic Curve Cryptography (ECC)': 'd11', 'Asymmetric Cryptography': 'd11', 'ElGamal': 'd11', 'DH Parameter Validation': 'd11', 'NIST P-256 (secp256r1)': 'd11', 'Rabin Cryptosystem': 'd11', 'Paillier Encryption': 'd11',
  'Digital Signature': 'd12', 'Digital Signature Algorithm (DSA)': 'd12', 'Schnorr Signature': 'd12', 'Hash-Based Signatures': 'd12', 'Ring Signature': 'd12',
  'Initialization Vector (IV)': 'd13', 'Key Derivation Function (KDF)': 'd13', 'bcrypt': 'd13', 'Argon2': 'd13', 'Key Length': 'd13', 'Key Space': 'd13',
  'HTTPS': 'd14', 'Base64': 'd14', 'WebCrypto': 'd14', 'RSA Padding (PKCS#1)': 'd14',
  "Shamir's Secret Sharing": 'd16',
  'Quantum Cryptography': 'd21', 'BB84': 'd21', 'Quantum Key Distribution (QKD)': 'd21',
  'SM4': 'd20', 'SM3': 'd20',
  'Learning With Errors (LWE)': 'd22', 'Ring-LWE (RLWE)': 'd22', 'Post-Quantum Hybrids': 'd22', 'NTRU': 'd22',
  'Format-Preserving Encryption (FPE)': 'd23', 'Password Manager': 'd23', 'PRISM & 2013 Surveillance Disclosures': 'd23',
  'Entropy': 'd24', 'Perfect Secrecy': 'd24',
  'First Computers (ENIAC/EDSAC)': 'd01',
};

function route(term, cat) {
  return EXPLICIT[term] || CAT_DEF[cat] || 'd01';
}

// domain id → 文件路径
function domainFile(domainId) {
  const n = domainId.replace('d', '');
  const slug = {
    d01: null, d02: 'd02-monoalphabetic', d03: 'd03-polyalphabetic', d04: 'd04-transposition',
    d05: 'd05-rotor-mechanical', d06: 'd06-otp-stream', d07: 'd07-cryptanalysis', d08: 'd08-block-ciphers',
    d09: 'd09-hashes', d10: 'd10-auth-aead', d11: 'd11-asymmetric', d12: 'd12-signatures',
    d13: 'd13-key-management', d14: 'd14-protocols-pki', d15: 'd15-zkp', d16: 'd16-secret-sharing-mpc',
    d17: 'd17-side-channel', d18: 'd18-steganography', d19: 'd19-randomness', d20: 'd20-china-sm',
    d21: 'd21-quantum-crypto', d22: 'd22-post-quantum', d23: 'd23-applied-security', d24: 'd24-theory',
  }[domainId];
  return domainId === 'd01'
    ? path.join(ROOT, '01-foundations.md')
    : path.join(ROOT, 'tech', `${slug}.md`);
}

// 重建某文件的「## 术语」节（幂等）
function setTermsSection(content, body) {
  const lines = content.split('\n');
  const start = lines.findIndex(l => l.trim() === '## 术语');
  if (start === -1) {
    return content.replace(/\s*$/, '') + '\n\n## 术语\n' + body + '\n';
  }
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) {
    if (lines[i].startsWith('## ')) { end = i; break; }
  }
  const out = [...lines.slice(0, start + 1), '', body, ...lines.slice(end)];
  return out.join('\n').replace(/\n{3,}/g, '\n\n').replace(/\s*$/, '') + '\n';
}

function termEntry(g) {
  // 中文名已在 term 内（如 KASUMI→KASUMI（3G…））则不再重复包裹
  const wrap = g.zh && g.zh !== g.term && !g.zh.startsWith(g.term) ? `（${g.zh}）` : '';
  const parts = [`### ${g.term}${wrap}`];
  if (g.zhDef) parts.push(`- 中文：${g.zhDef}`);
  if (g.enDef) parts.push(`- English: ${g.enDef}`);
  if (g.game) parts.push(`- 游戏：\`${g.game}\``);
  if (g.chapters && g.chapters.length) parts.push(`- 章节：${g.chapters.join(', ')}`);
  return parts.join('\n');
}

function main() {
  const d = load();
  const byDomain = {};
  let unplaced = [];
  for (const g of d.GLOSSARY) {
    const dom = route(g.term, g.cat);
    (byDomain[dom] = byDomain[dom] || []).push(g);
  }
  // 校验：所有 classical/modern 是否都被显式覆盖（应无遗漏）
  const missed = d.GLOSSARY.filter(g => !EXPLICIT[g.term] && (g.cat === 'classical' || g.cat === 'modern'));
  if (missed.length) console.log('  ⚠ 未显式归域的 classical/modern 词:', missed.map(g => g.term).join(', '));

  let totalPlaced = 0, filesTouched = 0;
  for (const [dom, terms] of Object.entries(byDomain)) {
    const fp = domainFile(dom);
    const content = fs.existsSync(fp) ? fs.readFileSync(fp, 'utf8') : '';
    const body = terms.map(termEntry).join('\n\n');
    const next = setTermsSection(content, body);
    fs.writeFileSync(fp, next, 'utf8');
    totalPlaced += terms.length;
    filesTouched++;
    console.log(`  [${dom}] ${terms.length} 术语 → ${path.relative(ROOT, fp)}`);
  }
  console.log(`[gen-glossary] 完成：共 ${totalPlaced} 术语 / ${d.GLOSSARY.length} 条 → ${filesTouched} 个域文件`);
  if (totalPlaced !== d.GLOSSARY.length) console.log('  ⚠ 数量不一致！');
}

if (require.main === module) main();
module.exports = { main, route, domainFile, EXPLICIT, CAT_DEF };
