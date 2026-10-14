---
title: 后量子
title_en: Post-Quantum
type: domain
domain: d22
---

# 后量子（Post-Quantum）

> 技术域 d22 ·（Phase 0 占位 · 概念/算法/协议/术语待填充）

## 概念

**中文**：后量子：量子计算机将破掉 RSA/ECC 的数学根（Shor 算法），但**格密码**（基于 LWE/RLWE 的难题）在已知模型下安全。NIST 2024 首批后量子标准 ML-KEM (Kyber)、ML-DSA (Dilithium)、SLH-DSA (SPHINCS+) 是正式上岗的答案；混合方案（经典 + PQ）是过渡默认。

**English**: Post-quantum: a quantum computer breaks the math under RSA/ECC (Shor), but **lattice** problems (LWE/RLWE) remain safe under known models. NIST’s first post-quantum standards — ML-KEM (Kyber), ML-DSA (Dilithium), SLH-DSA (SPHINCS+) — are the answer that has formally entered service; hybrid schemes (classic + PQ) are the transitional default.
## 算法 / 协议
（待填）

## 术语

### Learning With Errors (LWE)（带错误学习问题（LWE））
- 中文：格密码的「镇山之宝」：给你一堆混着小噪声的线性方程，恢复其中的未知解极其困难，量子计算机也拿它没辙；NIST 选中的 Kyber 等后量子算法都建立在它之上。
- English: The workhorse of lattice cryptography: recovering a secret from noisy linear equations is provably hard, even for quantum computers. NIST's post-quantum picks like Kyber rest on it.
- 游戏：`pqc-match`
- 章节：modern

### Ring-LWE (RLWE)（环带错误学习（RLWE））
- 中文：LWE 的多项式环版本：密钥更小、运算更快，让格密码从理论变成实用；代价是安全证明依赖环结构，NIST 的后量子标准 Kyber、Dilithium 都是它的模块化近亲。
- English: The polynomial-ring version of LWE, with smaller keys and faster operations that make lattice crypto practical. Its proofs lean on ring structure; NIST's post-quantum standards Kyber and Dilithium are modular relatives.
- 游戏：`pqc-match`
- 章节：modern

### McEliece
- 中文：Robert McEliece 1978 年提出的基于纠错码的公钥密码——50 年未被攻破，但公钥巨大。NIST 后量子候选。
- English: Robert McEliece's 1978 code-based public-key crypto — unbroken for 50 years but with huge keys. A NIST post-quantum candidate.
- 游戏：`pqc-match`
- 章节：modern

### Falcon
- 中文：基于格的紧凑后量子签名算法，NIST 后量子签名候选——签名比 Dilithium 小但实现更复杂（需浮点运算）。
- English: A compact lattice-based post-quantum signature, a NIST candidate — smaller signatures than Dilithium but harder to implement (floating-point).
- 游戏：`pqc-match`
- 章节：quantum

### NTRU
- 中文：1996 年公布、2010 年进入 IEEE 标准的格基公钥体制：用多项式环上的小系数交换完成密钥协商，加解密极快且据信抗量子。
- English: A lattice public-key system first published in 1996 and standardized in IEEE 1363: keys exchange over polynomial rings with small coefficients, fast, and believed quantum-resistant.
- 游戏：`pqc-match`
- 章节：modern

### Post-Quantum Hybrids（后量子混合方案）
- 中文：在 NIST 标准未完全稳妥时，把经典与后量子算法叠加的迁移策略：TLS 1.3 用 X25519 + ML-KEM 或其他混合密钥交换组，任一侧被破防，整体仍安全。
- English: The migration strategy of stacking classical and post-quantum algorithms while standards mature: TLS 1.3 carries hybrid groups like X25519+ML-KEM so breaking either side still leaves the session safe.
- 游戏：`pqc-match`
- 章节：quantum

### SLH-DSA (SPHINCS+)（SLH-DSA（SPHINCS+））
- 中文：NIST FIPS 205 的标准哈希签名：安全性只建立在哈希函数的假设上，无状态、不需要格/编码——签名约 17KB、较慢，是最保守的后量子选择。
- English: NIST's FIPS 205 hash-based signature: security rests on hash assumptions alone, stateless, no lattices — signatures near 17KB and slow, the most conservative post-quantum pick.
- 游戏：`pqc-match`
- 章节：quantum
## 关联时代 / 人物 / 游戏
（待填）
