#!/usr/bin/env node
/* ============================================================
   gen-domains.js — Phase 2：为 24 个技术域填「## 概念」节（权威双语叙述）
   这是网站最缺的"技术体系轴"：把每个"是什么/为什么/怎么破"讲清楚。
   幂等：每次重建「## 概念」节，不动「算法/协议」「术语」。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const { domainFile } = require('./gen-glossary');
const ROOT = path.resolve(__dirname, '..', '..');

// 24 域概念叙述（中英）——权威、精炼、可核查
const CONCEPT = {
  d01: { zh: '密码学的地基：把可读的**明文**变成不可读的**密文**（加密），再变回来（解密），全程由**密钥**控制。要分清两件事——**密码（cipher）改字母、编码（code）改单词**；**替换**换字母、**换位**挪位置。一切现代加密都站在这棵树的两条主干上。',
        en: 'The bedrock: turn readable **plaintext** into unreadable **ciphertext** (encrypt) and back (decrypt), driven by a **key**. Keep two things straight — a **cipher** scrambles letters, a **code** swaps words; **substitution** changes letters, **transposition** moves them. Every modern scheme stands on these two trunks.' },
  d02: { zh: '单表替换：每个字母**永远**映射到同一个字母（凯撒是它的特例，整体平移）。因为明文的字母频率是固定的（英文 e 最高），攻击者只需数密文里哪个字母最频繁就能破——**频率分析**是它的死穴。',
        en: 'Monoalphabetic: every letter maps to the **same** letter forever (Caesar is its special case — a uniform shift). Plaintext letter frequencies are fixed (e is most common in English), so counting the most frequent ciphertext letter breaks it — **frequency analysis** is the fatal flaw.' },
  d03: { zh: '多表替换：用**多张**替换表轮替，同一个字母在不同位置变成不同字母，把字母频率抹平（维吉尼亚、Playfair、Hill 同属此族）。频率分析失灵后，曾长期「不可破」，直到 19 世纪 Kasiski 利用周期重复把它打穿。',
        en: 'Polyalphabetic: rotate through **multiple** substitution tables so the same letter becomes different letters at different positions, flattening letter frequencies (Vigenère, Playfair, Hill). Frequency analysis stops working, so these ciphers stood "unbreakable" until Kasiski exploited periodic repeats in the 1800s.' },
  d04: { zh: '换位：字母**不变**，只改变它们的**排列顺序**（栅栏、斯巴达密码棒、列方）。它不掩盖字母频率，常与替换组合成混合密码——单用换位极易被破，但与替换结合会大幅增加密钥空间。',
        en: 'Transposition: the letters stay the same, only their **positions** change (rail fence, Spartan scytale, columnar). It hides nothing about letter frequency, so it is usually combined with substitution. Alone it breaks easily; combined it multiplies the key space.' },
  d05: { zh: '转子/机械密码：用**机电转子**自动完成换位与替换的联动（恩尼格玛、洛伦兹）。恩尼格玛的妙处是加密=解密的对称性，但**密钥设定**（转子序、环位、插线板）成了唯一弱点——波兰数学家的格罗夫与图灵的 Bombe 正是从这里入手。',
        en: 'Rotor & mechanical: electromechanical rotors automate linked substitution and permutation (Enigma, Lorenz). Enigma’s gift was encrypt-equals-decrypt symmetry, but its **key setup** (rotor order, ring settings, plugboard) was the only weak point — Polish grogs and Turing’s Bombe attacked exactly there.' },
  d06: { zh: 'OTP 与流密码：把随机**密钥流**与明文逐位异或。密钥若真随机、只用一次、绝不复用，就达到香农证明的**完美保密**；一旦复用，两条密文异或会直接泄出明文（Venona 的教训）。RC4/ChaCha20 用伪随机流替代真随机，快但有统计偏差的隐患。',
        en: 'OTP & stream ciphers: XOR a random **keystream** with the plaintext. If the key is truly random, used once, never reused, it reaches Shannon’s **perfect secrecy**; reuse leaks plaintext straight out (the Venona lesson). RC4/ChaCha20 substitute pseudorandom streams for speed, at the risk of statistical bias.' },
  d07: { zh: '破译方法：不靠密钥，靠算法与统计的弱点——频率分析（单表）、Kasiski/周期检测（多表）、已知/部分明文攻击、唯密文攻击；进入计算机时代升级为**差分/线性分析**（DES 之敌）与**代数攻击**。攻击者模型决定难度：唯密文最难，已知明文次之。',
        en: 'Cryptanalysis: break without the key, by exploiting statistical and structural weaknesses — frequency analysis (mono), Kasiski/period detection (poly), known/partial-plaintext attacks, ciphertext-only; in the computer era this escalates to **differential/linear** attacks (DES’s nemesis) and algebraic attacks. The attacker model sets the difficulty: ciphertext-only is hardest.' },
  d08: { zh: '对称分组密码：把明文切成定长**块**（通常 128 位），用同一密钥逐块加密（AES/DES）。DES 的 56 位密钥已被暴力破解淘汰，AES 是 2001 年 NIST 选定的 Rijndael，128/192/256 位密钥、128 位分组，是当今事实标准。结构分 **Feistel**（DES）与 **SPN**（AES）两大流派。',
        en: 'Symmetric block ciphers: cut plaintext into fixed **blocks** (usually 128 bits), encrypt each with the same key (AES/DES). DES’s 56-bit key is broken by brute force; AES, chosen by NIST in 2001, is Rijndael with 128/192/256-bit keys on 128-bit blocks — today’s de facto standard. Structures split into **Feistel** (DES) and **SPN** (AES).' },
  d09: { zh: '哈希：单向函数，输入任意长、输出定长摘要，且**碰撞**（两个不同输入同摘要）在计算上不可行。它回答「这文件没被动过」。SHA-1 已被 SHAttered 实际碰撞攻破，SHA-2（SHA-256）与 SHA-3（Keccak 海绵）是现役标准，广泛用于文件校验、证书指纹、区块链。',
        en: 'Hash functions: one-way, any-length input to fixed-length digest, where a **collision** (two inputs, same digest) is computationally infeasible. They answer "this file is untouched." SHA-1 fell to real SHAttered collisions; SHA-2 (SHA-256) and SHA-3 (Keccak sponge) are current standards for file checks, certificate fingerprints, and blockchains.' },
  d10: { zh: '消息认证与 AEAD：光加密不够——还须**认证**（完整性 + 来源）。MAC/HMAC 用密钥给消息盖戳，接收方可验签防篡改；AEAD（GCM、ChaCha20-Poly1305）把加密与认证合成一步，同时给机密性与完整性，是现代 TLS 的默认姿势。',
        en: 'Authentication & AEAD: encryption alone is not enough — you also need **authentication** (integrity + origin). MAC/HMAC stamps a message with a key so the receiver can detect tampering; AEAD (GCM, ChaCha20-Poly1305) fuses encryption and authentication into one step, delivering confidentiality and integrity together — the modern TLS default.' },
  d11: { zh: '非对称公钥：一对密钥——**公钥加密、私钥解密**（或私钥签名、公钥验证），从根本上解决了密钥分发难题。RSA 基于大数分解难题，ElGamal 基于离散对数，ECC 基于椭圆曲线群上的离散对数（相同安全强度下密钥更短）。Diffie-Hellman 则是公钥思想里第一个纯密钥交换方案。',
        en: 'Asymmetric public-key: a key **pair** — public key encrypts, private key decrypts (or signs/verifies) — solving key distribution at the root. RSA rests on integer factorization, ElGamal on discrete log, ECC on elliptic-curve discrete log (shorter keys at equal security). Diffie-Hellman is the first pure key-exchange scheme in the public-key lineage.' },
  d12: { zh: '数字签名：私钥签、公钥验，只有持私钥者能产出、全世界都能验签——提供**不可否认性**。RSA 签名、ECDSA（FIPS 186）、EdDSA 是三大主力；**随机数 k 复用**是签名崩溃的头号原因（k 相同则两条签名泄出私钥）。',
        en: 'Digital signatures: sign with the private key, verify with the public — only the holder of the private key can produce a valid signature, so it provides **non-repudiation**. RSA signatures, ECDSA (FIPS 186), and EdDSA are the mainstay; **reusing the nonce k** is the number-one reason signatures collapse (same k on two messages leaks the private key).' },
  d13: { zh: '密钥管理：密钥不是「生成好就完事」，**生成、分发、轮换、撤销、恢复、审计**六件事缺一不可。哈希链一次性口令（Lamport）、口令哈希（argon2）、密钥指纹是日常运维的三件套。再强的算法，密钥管理一旦出错全盘皆输。',
        en: 'Key management: a key is never "generate and done" — **generation, distribution, rotation, revocation, recovery, and audit** are all mandatory. Hash-chain one-time passwords (Lamport), password hashing (argon2), and key fingerprints are the daily three-piece set. Even the strongest algorithm loses everything if key management fails.' },
  d14: { zh: '协议与 PKI：把算法拼成可用的安全协议。TLS 1.3 一个往返完成握手 + 前向保密；X.509 证书链把「公钥 = 实体」的信任交给 CA 体系；Let’s Encrypt 让免费签发成为可能。PKI 是整个公钥互联网的信任骨架。',
        en: 'Protocols & PKI: assemble algorithms into usable secure protocols. TLS 1.3 completes handshake + forward secrecy in one round trip; X.509 certificate chains delegate "this public key is that entity" to the CA system; Let’s Encrypt made free issuance possible. PKI is the trust backbone of the public-key internet.' },
  d15: { zh: '零知识证明：证明者向验证者证明「我知道某事」，却**不泄露**任何额外信息（经典的 3-着色例子）。它是区块链隐私（ZK-SNARKs）、身份认证、区块链扩容的理论基石——把「证明知识」与「透露知识」彻底解耦。',
        en: 'Zero-knowledge proofs: a prover convinces a verifier "I know X" while revealing **no** extra information (the classic 3-coloring example). They underpin blockchain privacy (ZK-SNARKs), identity authentication, and blockchain scaling — decoupling "proving knowledge" from "revealing knowledge."' },
  d16: { zh: '秘密共享与 MPC：把秘密切成 n 份，任意 t<n 份可恢复、t-1 份毫无信息（Shamir 门限方案）。多方安全计算（MPC）让若干方在不泄露各自输入的前提下**联合计算**——门限解密、门限签名、联邦学习都是它的下游。',
        en: 'Secret sharing & MPC: split a secret into n shares so any t < n recover it and t−1 reveal nothing (Shamir threshold). Multi-party computation (MPC) lets several parties **jointly compute** without revealing their inputs — threshold decryption, threshold signatures, and federated learning are downstream.' },
  d17: { zh: '侧信道与物理攻击：算法本身没破，**实现**泄密——计时（差分耗时）、功耗（DPA/SPA）、电磁、缓存、故障注入。现代实现必须**常数时间**、掩码、随机化；这是「算法对」却「部署错」的常见死因。',
        en: 'Side-channel & physical attacks: the algorithm is fine, the **implementation** leaks — timing (differential execution time), power (DPA/SPA), EM, cache, fault injection. Modern implementations must be **constant-time**, masked, randomized; this is the classic "algorithm right, deployment wrong" failure.' },
  d18: { zh: '隐写与信息隐藏：不加密内容，而是**隐藏通信本身的存在**（密信藏于图、文件藏于文件）。历史用「看不见的墨水」，现代用 LSB 替换、隐写于 JPEG 量化表、隐于噪声。隐写不保证内容保密，只保证「有人通信」这件事不暴露。',
        en: 'Steganography & info hiding: don’t encrypt the content, **hide the existence of communication itself** (ciphertext in images, files in files). Historically "invisible ink," modern LSB substitution, JPEG quantization-table steganography, steganographic noise. Steganography guarantees nothing about the content’s secrecy — only that "someone is communicating" stays hidden.' },
  d19: { zh: '随机数与 CSPRNG：密码学的地基不是算法，是**随机性**——可预测的种子让一切算法归零。PRNG 快但可预测；CSPRNG（/dev/urandom、BCrypt）用真熵做种，输出不可由内部状态反推。密钥、nonce、盐都必须来自 CSPRNG。',
        en: 'Randomness & CSPRNG: cryptography’s bedrock is **randomness**, not algorithms — a predictable seed zeroes out every scheme. PRNGs are fast but predictable; CSPRNGs (/dev/urandom, CryptGenRandom) seed from real entropy so output is not reversible from internal state. Keys, nonces, and salts must all come from a CSPRNG.' },
  d20: { zh: '中国国密：SM2（椭圆曲线公钥，GB/T 32918）/ SM3（哈希，GB/T 32905）/ SM4（分组密码，GB/T 32907）/ ZUC（序列密码，3GPP 128-EEA3/EIA3）。《密码法》（2020）让这套标准从「用」走向「立」，走进政务、金融、移动通信。',
        en: 'China National Cryptography: SM2 (elliptic-curve public key, GB/T 32918) / SM3 (hash, GB/T 32905) / SM4 (block cipher, GB/T 32907) / ZUC (stream cipher, 3GPP 128-EEA3/EIA3). The Cryptography Law (2020) moved this family from "using standards" to "making standards," into government, finance, and mobile networks.' },
  d21: { zh: '量子密码：用物理（而非计算困难）保证安全。量子密钥分发（QKD，如 BB84）让窃听本身就被**测不准原理**暴露——窃听即扰动、扰动即发现。它解决密钥分发，不替代公钥算法；是「换掉地基」而非「打补丁」。',
        en: 'Quantum cryptography: security from physics, not computational hardness. Quantum key distribution (QKD, e.g. BB84) makes eavesdropping itself detectable via the **uncertainty principle** — to observe is to perturb, and perturb is to be caught. It solves key distribution, not public-key substitution; it "changes the foundation," not a patch.' },
  d22: { zh: '后量子：量子计算机将破掉 RSA/ECC 的数学根（Shor 算法），但**格密码**（基于 LWE/RLWE 的难题）在已知模型下安全。NIST 2024 首批后量子标准 ML-KEM (Kyber)、ML-DSA (Dilithium)、SLH-DSA (SPHINCS+) 是正式上岗的答案；混合方案（经典 + PQ）是过渡默认。',
        en: 'Post-quantum: a quantum computer breaks the math under RSA/ECC (Shor), but **lattice** problems (LWE/RLWE) remain safe under known models. NIST’s first post-quantum standards — ML-KEM (Kyber), ML-DSA (Dilithium), SLH-DSA (SPHINCS+) — are the answer that has formally entered service; hybrid schemes (classic + PQ) are the transitional default.' },
  d23: { zh: '应用安全工程：算法之外才是真战场——口令强度（熵 = 字符集 × 长度）、argon2id 内存困难哈希、供应链完整性、零信任。再强的算法被 `password123` 和一次钓鱼点击击穿，「安全」是系统属性不是组件属性。',
        en: 'Applied security engineering: the real battlefield is outside the algorithm — password strength (entropy = charset × length), argon2id memory-hard hashing, supply-chain integrity, zero trust. Even the strongest algorithm falls to `password123` and one phishing click; "security" is a system property, not a component property.' },
  d24: { zh: '理论基础：香农的信息论给了密码学「完美保密」的形式化——熵、混淆、扩散是三个基石。费马小定理、欧拉函数、离散对数三大数学问题撑起公钥密码；**可证明安全**（IND-CPA/IND-CCA 模型）让「安全」从经验判断升格为数学定理。',
        en: 'Theoretical foundations: Shannon’s information theory gives cryptography its formal notion of **perfect secrecy** — entropy, confusion, and diffusion are the three pillars. Fermat’s little theorem, Euler’s φ, and discrete log prop up public-key schemes; **provable security** (IND-CPA/IND-CCA models) upgrades "secure" from intuition to theorem.' },
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
  let total = 0;
  for (const [dom, c] of Object.entries(CONCEPT)) {
    const fp = domainFile(dom);
    if (!fs.existsSync(fp)) { console.log(`  ⚠ 缺 ${dom}`); continue; }
    const content = fs.readFileSync(fp, 'utf8');
    const body = `**中文**：${c.zh}\n\n**English**: ${c.en}`;
    fs.writeFileSync(fp, setSection(content, '## 概念', body), 'utf8');
    total++;
    console.log(`  [${dom}] 概念已填`);
  }
  console.log(`[gen-domains] 完成：${total} 个域概念叙述`);
}

if (require.main === module) main();
module.exports = { main, CONCEPT };
