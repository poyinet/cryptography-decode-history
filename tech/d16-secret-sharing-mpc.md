---
title: 秘密共享与 MPC
title_en: Secret Sharing & MPC
type: domain
domain: d16
---

# 秘密共享与 MPC（Secret Sharing & MPC）

> 技术域 d16 ·（Phase 0 占位 · 概念/算法/协议/术语待填充）

## 概念

**中文**：秘密共享与 MPC：把秘密切成 n 份，任意 t<n 份可恢复、t-1 份毫无信息（Shamir 门限方案）。多方安全计算（MPC）让若干方在不泄露各自输入的前提下**联合计算**——门限解密、门限签名、联邦学习都是它的下游。

**English**: Secret sharing & MPC: split a secret into n shares so any t < n recover it and t−1 reveal nothing (Shamir threshold). Multi-party computation (MPC) lets several parties **jointly compute** without revealing their inputs — threshold decryption, threshold signatures, and federated learning are downstream.
## 算法 / 协议
（待填）

## 术语

### Shamir's Secret Sharing（Shamir 秘密共享）
- 中文：1979 年 Shamir 的巧思：把一份秘密拆成 n 份，凑齐任意 k 份才能复原、少一份都不行；数学依据是「k 个点唯一确定一条 k-1 次多项式」，密码保险库和多签系统都在用。
- English: Shamir's 1979 scheme splits a secret into n shares such that any k of them reconstruct it while fewer reveal nothing—thanks to the fact that k points define a unique degree k-1 polynomial. Used in vaults and multi-signature systems.
- 游戏：`shamir`
- 章节：modern
## 关联时代 / 人物 / 游戏
（待填）
