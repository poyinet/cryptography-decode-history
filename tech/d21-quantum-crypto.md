---
title: 量子密码
title_en: Quantum Cryptography
type: domain
domain: d21
---

# 量子密码（Quantum Cryptography）

> 技术域 d21 ·（Phase 0 占位 · 概念/算法/协议/术语待填充）

## 概念

**中文**：量子密码：用物理（而非计算困难）保证安全。量子密钥分发（QKD，如 BB84）让窃听本身就被**测不准原理**暴露——窃听即扰动、扰动即发现。它解决密钥分发，不替代公钥算法；是「换掉地基」而非「打补丁」。

**English**: Quantum cryptography: security from physics, not computational hardness. Quantum key distribution (QKD, e.g. BB84) makes eavesdropping itself detectable via the **uncertainty principle** — to observe is to perturb, and perturb is to be caught. It solves key distribution, not public-key substitution; it "changes the foundation," not a patch.
## 算法 / 协议
（待填）

## 术语

### Quantum Cryptography（量子密码）
- 中文：量子密码。利用量子力学原理（如不可克隆定理）保证安全的密码技术，典型是量子密钥分发（QKD），理论上可证明安全，但工程实现仍有挑战。
- English: Cryptographic techniques built on quantum mechanics, notably quantum key distribution (QKD), which exploits properties such as the no-cloning theorem to detect eavesdropping. It offers provable security in theory, though practical deployment faces engineering challenges.
- 游戏：`qkd-sim`
- 章节：quantum

### BB84
- 中文：1984 年贝内特与布拉萨德提出的首个实用量子密钥分发协议：发送方随机用两组基编码光子偏振，接收方随机选基测量；基匹配的位构成共享密钥，窃听必然引入约 25% 的误码率而暴露。
- English: The first practical quantum key distribution protocol, proposed by Bennett and Brassard in 1984. The sender encodes photon polarizations in two random bases and the receiver measures in randomly chosen bases; matching positions form a shared key, while any eavesdropper unavoidably injects about 25% errors and gives herself away.
- 游戏：`bb84`
- 章节：quantum

### Quantum Key Distribution (QKD)（量子密钥分发）
- 中文：利用量子力学原理（测不准与不可克隆）在信道上协商密钥的技术：任何窃听都会扰动量子态并留下可检测的误码指纹，安全性由物理定律而非计算复杂度保证。
- English: A technique that negotiates keys over a channel using quantum mechanics (uncertainty and no-cloning): any interception disturbs the quantum states and leaves detectable error fingerprints, so security rests on physical law rather than computational hardness.
- 游戏：`qkd-sim`
- 章节：quantum
## 关联时代 / 人物 / 游戏
（待填）
