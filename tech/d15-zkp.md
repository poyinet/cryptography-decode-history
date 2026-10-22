---
title: 零知识证明
title_en: Zero-knowledge Proofs
type: domain
domain: d15
---

# 零知识证明（Zero-knowledge Proofs）

> 技术域 d15

## 概念

**中文**：零知识证明：证明者向验证者证明「我知道某事」，却**不泄露**任何额外信息（经典的 3-着色例子）。它是区块链隐私（ZK-SNARKs）、身份认证、区块链扩容的理论基石——把「证明知识」与「透露知识」彻底解耦。

**English**: Zero-knowledge proofs: a prover convinces a verifier "I know X" while revealing **no** extra information (the classic 3-coloring example). They underpin blockchain privacy (ZK-SNARKs), identity authentication, and blockchain scaling — decoupling "proving knowledge" from "revealing knowledge."
## 算法 / 协议

### 零知识证明（图三着色）（Zero-Knowledge Proofs）

**中文**：证明者宣称自己知道这张图的合法三着色，但不想泄露它。协议：每轮把三种颜色随机改名（承诺）→ 验证者随机挑一条边 → 只揭开这条边两端（应答）。端点永远异色 ⇒ 通过；每轮换名 ⇒ 验证者拼不出完整着色。重复 n 轮，作弊被识破的概率指数上升，而「知识」零泄露。

**English**: Prover claims knowledge of a valid 3-coloring without revealing it. Each round: randomly rename the three colors (commit) → verifier picks a random edge → only those two ends are revealed (response). Ends always differ ⇒ pass; renaming every round ⇒ the verifier cannot assemble the full coloring. After n rounds cheating gets exponentially unlikely while zero knowledge leaks.
## 术语

（本域在 282 术语表中无独立条目，相关概念见「概念」节与「关联人物」）
## 关联时代 / 人物 / 游戏

**关联时代**（轴1 编年叙事）
- [公钥革命](../02-eras/e13-public-key/README.md)

**关联人物**（人物志）
- [莎菲耶·戈德瓦瑟](../people/goldwasser.md)
- [西尔维奥·米卡利](../people/micali.md)
- [查尔斯·拉科夫](../people/rackoff.md)
- [大卫·肖姆](../people/chaum.md)

**关联游戏**（站内可玩 · 游戏 ID）
- （无）
