---
title: 量子密码
title_en: Quantum Cryptography
type: domain
domain: d21
---

# 量子密码（Quantum Cryptography）

> 技术域 d21

## 概念

**中文**：量子密码：用物理（而非计算困难）保证安全。量子密钥分发（QKD，如 BB84）让窃听本身就被**测不准原理**暴露——窃听即扰动、扰动即发现。它解决密钥分发，不替代公钥算法；是「换掉地基」而非「打补丁」。

**English**: Quantum cryptography: security from physics, not computational hardness. Quantum key distribution (QKD, e.g. BB84) makes eavesdropping itself detectable via the **uncertainty principle** — to observe is to perturb, and perturb is to be caught. It solves key distribution, not public-key substitution; it "changes the foundation," not a patch.
## 算法 / 协议

（本域暂无独立工坊算法 / 协议演示，可玩实现见下方「关联游戏」）
## 术语

### Quantum Cryptography（量子密码）
- 中文：量子密码。利用量子力学原理（如不可克隆定理）保证安全的密码技术，典型是量子密钥分发（QKD），理论上可证明安全，但工程实现仍有挑战。
- English: Cryptographic techniques built on quantum mechanics, notably quantum key distribution (QKD), which exploits properties such as the no-cloning theorem to detect eavesdropping. It offers provable security in theory, though practical deployment faces engineering challenges.
- 为什么重要：用量子物理做加密，安全性靠物理定律。
- 现实哪里用：QKD、量子网络。
- 怎么被破：是方向，不是单一算法。
- 游戏：`qkd-sim`
- 章节：quantum

### BB84
- 中文：1984 年贝内特与布拉萨德提出的首个实用量子密钥分发协议：发送方随机用两组基编码光子偏振，接收方随机选基测量；基匹配的位构成共享密钥，窃听必然引入约 25% 的误码率而暴露。
- English: The first practical quantum key distribution protocol, proposed by Bennett and Brassard in 1984. The sender encodes photon polarizations in two random bases and the receiver measures in randomly chosen bases; matching positions form a shared key, while any eavesdropper unavoidably injects about 25% errors and gives herself away.
- 为什么重要：1984 年第一个量子密钥分发协议，用偏振态传密钥。
- 现实哪里用：QKD 的基石。
- 怎么被破：窃听必破坏测量（量子不可克隆），会被当场发现。
- 游戏：`bb84`
- 章节：quantum

### Quantum Key Distribution (QKD)（量子密钥分发）
- 中文：利用量子力学原理（测不准与不可克隆）在信道上协商密钥的技术：任何窃听都会扰动量子态并留下可检测的误码指纹，安全性由物理定律而非计算复杂度保证。
- English: A technique that negotiates keys over a channel using quantum mechanics (uncertainty and no-cloning): any interception disturbs the quantum states and leaves detectable error fingerprints, so security rests on physical law rather than computational hardness.
- 为什么重要：量子密钥分发，物理保证的密钥交换。
- 现实哪里用：量子通信网络。
- 怎么被破：是协议，实现侧信道可破（如探测器漏洞）。
- 游戏：`qkd-sim`
- 章节：quantum
## 关联时代 / 人物 / 游戏

**关联时代**（轴1 编年叙事）
- [量子转折](../02-eras/e16-quantum-turn/README.md)

**关联人物**（人物志）
- [查尔斯·贝内特](../people/bennett.md)
- [吉尔·布拉萨德](../people/brassard.md)
- [阿图尔·埃克特](../people/ekert.md)
- [彼得·秀尔](../people/shor.md)

**关联游戏**（站内可玩 · 游戏 ID）
- `bb84` · BB84 量子密钥
- `qkd-sim` · QKD 密钥分发模拟
