---
title: 随机数与 CSPRNG
title_en: Randomness & CSPRNG
type: domain
domain: d19
---

# 随机数与 CSPRNG（Randomness & CSPRNG）

> 技术域 d19

## 概念

**中文**：随机数与 CSPRNG：密码学的地基不是算法，是**随机性**——可预测的种子让一切算法归零。PRNG 快但可预测；CSPRNG（/dev/urandom、BCrypt）用真熵做种，输出不可由内部状态反推。密钥、nonce、盐都必须来自 CSPRNG。

**English**: Randomness & CSPRNG: cryptography’s bedrock is **randomness**, not algorithms — a predictable seed zeroes out every scheme. PRNGs are fast but predictable; CSPRNGs (/dev/urandom, CryptGenRandom) seed from real entropy so output is not reversible from internal state. Keys, nonces, and salts must all come from a CSPRNG.
## 算法 / 协议

### 随机数与 CSPRNG（Randomness & CSPRNG）

**中文**：密码学的地基不是算法，是随机数。再强的算法遇上可预测的密钥等于零。本演示用「当前秒数当种子」的普通 LCG 生成一把"随机"密钥——攻击者只需穷举一天之内的 86400 个种子，秒级还原全部输出。V8 的 Math.random（xorshift128+）同样可从连续输出恢复内部状态。密码学必须使用 CSPRNG：种子来自操作系统熵源，且不可观测、不可穷举。

**English**: The foundation of cryptography is not algorithms — it is randomness. The strongest cipher with a predictable key equals zero. This demo generates a "random" key from an ordinary LCG seeded by the current second: an attacker brute-forces just 86,400 seeds per day and reproduces every output. V8's Math.random (xorshift128+) can likewise have its state recovered from outputs. Cryptography demands a CSPRNG: seeded from OS entropy, unobservable and unenumerable.
## 术语

（本域在 282 术语表中无独立条目，相关概念见「概念」节与「关联人物」）
## 关联时代 / 人物 / 游戏

**关联时代**（轴1 编年叙事）
- （无）

**关联人物**（人物志）
- （无）

**关联游戏**（站内可玩 · 游戏 ID）
- （无）
