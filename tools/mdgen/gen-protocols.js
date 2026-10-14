#!/usr/bin/env node
/* ============================================================
   gen-protocols.js — PROTOCOL_LAB 的 22 协议介绍 → 各技术域「算法/协议」节
   数据/逻辑分离：只取 META(名称) + *Intro/*Note(中英讲解)，不碰 H/modPow/交互模拟数据。
   幂等：每次重建各域「## 算法 / 协议」节。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const { loadFile, domainFile } = { loadFile: require('./gen-extras').loadFile, domainFile: require('./gen-glossary').domainFile };

const { genProtocols } = (() => {
  // 协议简称 → 域 + 标题
  const PROTO = {
    otp: { dom: 'd06', title: 'OTP 与复用灾难', en: 'One-Time Pad' },
    dh: { dom: 'd11', title: 'Diffie-Hellman 密钥交换', en: 'Diffie-Hellman' },
    dhpt: { dom: 'd11', title: 'DH 参数验证', en: 'DH Parameter Validation' },
    ec: { dom: 'd12', title: 'ECDSA 签名', en: 'ECDSA' },
    el: { dom: 'd11', title: 'ElGamal 加密', en: 'ElGamal' },
    hc: { dom: 'd13', title: '哈希链（一次性口令）', en: 'Hash Chain (OTP)' },
    rd: { dom: 'd11', title: '教科书 RSA 与填充', en: 'Textbook RSA & Padding' },
    rc4: { dom: 'd06', title: 'RC4', en: 'RC4' },
    chacha: { dom: 'd06', title: 'ChaCha20', en: 'ChaCha20' },
    a51: { dom: 'd06', title: 'A5/1 流密码', en: 'A5/1' },
    tls: { dom: 'd14', title: 'TLS 握手', en: 'TLS Handshake' },
    merkle: { dom: 'd09', title: 'Merkle 树', en: 'Merkle Tree' },
    chain: { dom: 'd14', title: '区块链哈希链', en: 'Blockchain Hash Chain' },
    zkp: { dom: 'd15', title: '零知识证明（图三着色）', en: 'Zero-Knowledge Proofs' },
    ecc: { dom: 'd11', title: '椭圆曲线点加法', en: 'ECC Point Addition' },
    math: { dom: 'd24', title: '公钥数论基石', en: 'Number-Theoretic Foundations' },
    diff: { dom: 'd07', title: '差分分析', en: 'Differential Analysis' },
    aead: { dom: 'd10', title: '认证加密 AEAD', en: 'Authenticated Encryption' },
    ext: { dom: 'd09', title: '长度扩展攻击', en: 'Length Extension Attack' },
    big: { dom: 'd11', title: '真实大数 RSA', en: 'Real RSA (BigInt)' },
    sign: { dom: 'd12', title: 'RSA 数字签名', en: 'RSA Signature' },
    rng: { dom: 'd19', title: '随机数与 CSPRNG', en: 'Randomness & CSPRNG' },
    pwd: { dom: 'd23', title: '口令破解成本', en: 'Password Cracking Cost' },
  };
  // 介绍/注释键 → 协议简称
  const ENTRY = {
    otpIntro: ['otp', 'otpNote'], dhpIntro: ['dh', 'dhpNote'], ecIntro: ['ec', 'ecNote'],
    elIntro: ['el', 'elNote'], hcIntro: ['hc', 'hcNote'], rdIntro: ['rd', 'rdNote'],
    rc4Intro: ['rc4', null], chachaIntro: ['chacha', null], a51Intro: ['a51', null],
    tlsEve: ['tls', null], merkleNote: ['merkle', null], chainNote: ['chain', null],
    zkpIntro: ['zkp', null], eccIntro: ['ecc', null], mathIntro: ['math', null],
    diffIntro: ['diff', null], aeadIntro: ['aead', null], extIntro: ['ext', null],
    bigIntro: ['big', null], signIntro: ['sign', null], rngIntro: ['rng', null], pwdIntro: ['pwd', null],
  };

  function setSection(content, heading, body) {
    const lines = content.split('\n');
    const start = lines.findIndex(l => l.trim() === heading);
    if (start === -1) return content.replace(/\s*$/, '') + `\n\n${heading}\n${body}\n`;
    let end = lines.length;
    for (let i = start + 1; i < lines.length; i++) if (lines[i].startsWith('## ')) { end = i; break; }
    return [...lines.slice(0, start + 1), '', body, ...lines.slice(end)].join('\n').replace(/\n{3,}/g, '\n\n').replace(/\s*$/, '') + '\n';
  }

  function main() {
    const P = loadFile('protocols.js').PROTOCOL_LAB;
    const byDom = {};
    for (const [introKey, [protoKey, noteKey]] of Object.entries(ENTRY)) {
      const intro = P[introKey];
      if (!intro || typeof intro.zh !== 'string') continue;
      const note = noteKey && P[noteKey] && P[noteKey].zh ? P[noteKey] : null;
      const proto = PROTO[protoKey]; if (!proto) continue;
      const block = [
        `### ${proto.title}（${proto.en}）`,
        '',
        `**中文**：${intro.zh}`,
        '',
        `**English**: ${intro.en}`,
        ...(note ? ['', `> 体验要点：**中文** ${note.zh} · **English** ${note.en}`] : []),
      ].join('\n');
      (byDom[proto.dom] = byDom[proto.dom] || []).push(block);
    }
    let total = 0;
    for (const [dom, blocks] of Object.entries(byDom)) {
      const fp = domainFile(dom);
      const content = fs.existsSync(fp) ? fs.readFileSync(fp, 'utf8') : '';
      const body = blocks.join('\n\n');
      fs.writeFileSync(fp, setSection(content, '## 算法 / 协议', body), 'utf8');
      total += blocks.length;
      console.log(`  [${dom}] +${blocks.length} 协议`);
    }
    console.log(`[gen-protocols] 完成：${total} 协议介绍 → 技术域`);
  }
  return { genProtocols: main };
})();

if (require.main === module) genProtocols();
module.exports = { main: genProtocols, genProtocols };
