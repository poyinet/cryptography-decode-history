---
title: 后量子时代
title_en: Post-Quantum Era
type: era
era: e17-post-quantum
---

# 后量子时代（Post-Quantum Era）

> 2016–今 · 轴1 编年叙事

**中文**：既然量子机会破掉 RSA 和 ECC，密码学必须换「计算困难」的数学根基。答案藏在**格密码**里：基于「格上最短向量」或「环上带误差」的难题，这些在已知模型下抗量子也抗经典。NIST 从 2016 年开始公开征集后量子算法，2024 年 8 月正式发布首批标准：ML-KEM（Kyber，密钥封装）、ML-DSA（Dilithium，签名）、SLH-DSA（SPHINCS+，哈希签名）。这些算法的密钥比经典大得多（几千字节到几百 KB），但数学上安全。过渡期用「混合方案」（经典算法 + 后量子算法叠一起）兜底，一边迁移一边观察。这是密码学第一次被迫「整体换地基」，而非打补丁。

**English**: Since a quantum computer will break RSA and ECC, cryptography must change its "computational-hardness" math foundation. The answer hides in **lattice cryptography**: problems like "shortest vector in a lattice" or "ring with errors," which resist both quantum and classical attacks under known models. NIST began a public search for post-quantum algorithms in 2016 and released the first batch in August 2024: ML-KEM (Kyber, key encapsulation), ML-DSA (Dilithium, signatures), SLH-DSA (SPHINCS+, hash-based signatures). These algorithms’ keys are far larger than classical (thousands of bytes to hundreds of KB) but mathematically secure. The transition uses "hybrid schemes" (classic + post-quantum layered) as a backstop, migrating while observing. This is the first time cryptography has had to "replace the foundation wholesale" rather than patch it.

## 关联

- 技术域：见 `../../tech/` 24 域
- 实体：人物/密件/机器 见 `../../people/` `../../artifacts/` `../../machines/`
