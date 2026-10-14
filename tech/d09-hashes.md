---
title: 哈希
title_en: Hash Functions
type: domain
domain: d09
---

# 哈希（Hash Functions）

> 技术域 d09 ·（Phase 0 占位 · 概念/算法/协议/术语待填充）

## 概念

**中文**：哈希：单向函数，输入任意长、输出定长摘要，且**碰撞**（两个不同输入同摘要）在计算上不可行。它回答「这文件没被动过」。SHA-1 已被 SHAttered 实际碰撞攻破，SHA-2（SHA-256）与 SHA-3（Keccak 海绵）是现役标准，广泛用于文件校验、证书指纹、区块链。

**English**: Hash functions: one-way, any-length input to fixed-length digest, where a **collision** (two inputs, same digest) is computationally infeasible. They answer "this file is untouched." SHA-1 fell to real SHAttered collisions; SHA-2 (SHA-256) and SHA-3 (Keccak sponge) are current standards for file checks, certificate fingerprints, and blockchains.
## 算法 / 协议

### Merkle 树（Merkle Tree）

**中文**：改动任何一片叶子（哪怕一个字母），它的哈希立刻变，并且一路向上传染到树根——Merkle 根就是整组数据的指纹。

**English**: Change any single leaf (even one letter) and its hash flips, cascading up to the root — the Merkle root is the fingerprint of the whole set.

### 长度扩展攻击（Length Extension Attack）

**中文**：SHA-1/MD5 属于 Merkle-Damgård 结构：H(k‖msg) 这种「秘密前缀 MAC」有个致命缺陷——知道一条 msg 和它的 MAC，就能在不知道密钥的情况下，为 msg‖glue‖任意后缀 造出合法 MAC（把内部状态原样接力）。下方用真实 SHA-1 完整复现：伪造出的 MAC 经服务端重算验证通过。防御：用 HMAC（两层结构免疫），或换 SHA-3 这类非 MD 结构。

**English**: SHA-1/MD5 are Merkle-Damgård constructions: a secret-prefix MAC like H(k‖msg) has a fatal flaw — given msg and its MAC, you can forge a valid MAC for msg‖glue‖anything WITHOUT the key, by chaining the internal state forward. Reproduced fully with real SHA-1 below: the forged MAC passes server re-verification. Defenses: HMAC (two-layer, immune) or SHA-3 (non-MD).
### 可交互算法（Workshop）

- `sha256` · **SHA-256（FIPS 180-4）**（SHA-256 (FIPS 180-4)）· 密钥： / ，默认 ``

## 术语

### Cryptographic Hash（密码学哈希）
- 中文：密码学哈希。满足安全性质的哈希函数：单向不可逆、难以找到碰撞、输出看似随机；区别于普通校验和，须能抵抗恶意构造，是安全协议的核心组件。
- English: A hash function meeting cryptographic security properties: preimage resistance, collision resistance, and avalanche behavior. Unlike ordinary checksums, it must withstand adversarial input, making it a core component of signatures, MACs, and integrity verification.
- 游戏：`hashlab`
- 章节：modern

### Salt (Cryptography)（盐）
- 中文：盐。口令哈希前附加的随机数据，使相同口令产生不同哈希值，防止彩虹表攻击与跨站哈希比对，显著提升口令存储安全性。
- English: Random data prepended or appended to a password before hashing so that identical passwords yield different digests. Salting defeats rainbow-table attacks and cross-site password correlation, greatly improving stored-password security.
- 游戏：`hashlab`
- 章节：modern

### Merkle Tree（默克尔树）
- 中文：把数据块的哈希两两合并、层层向上，最终汇成单一根哈希；只要根哈希不变，任何叶子的篡改都会败露，比特币用它把整块交易压缩成一个根。
- English: A structure that hashes data blocks pairwise up to a single root; any tampering with a leaf is caught at the root. Bitcoin uses it to compress a whole block of transactions into one root hash.
- 游戏：`hashlab`
- 章节：modern

### Proof of Work (PoW)（工作量证明）
- 中文：先完成一件「算起来难、验证起来秒过」的苦力活（比如暴力搜一个满足条件的哈希），才获得记账资格；比特币把出块成本变成攻击成本，中本聪 2008 年将其应用于货币共识。
- English: Requiring a costly but instantly verifiable computation—like searching for a hash with many leading zeros—before earning the right to append a block. Bitcoin (2008) turns that cost into the price of an attack.
- 游戏：`hashlab`
- 章节：modern

### SHA-3
- 中文：由 NIST 于 2015 年标准化的哈希算法，采用 Keccak 的海绵结构，与 SHA-2 内部设计完全不同，为哈希家族提供了备用选择。
- English: A hash algorithm standardized by NIST in 2015, built on the Keccak sponge construction and sharing no internal design with SHA-2, giving the hash family a backup choice.
- 游戏：`hashlab`
- 章节：modern

### MD5
- 中文：1991 年 Rivest 设计的 128 位哈希函数，曾是最广泛使用的文件校验与口令摘要算法；2004 年被王小云团队证实可在数小时内构造碰撞，现仅可用于非安全场景。
- English: A 128-bit hash by Ron Rivest (1991), once the default for file checksums and password digests. In 2004 Xiaoyun Wang's team showed collisions computable in hours; today MD5 is fit only for non-security uses.
- 游戏：`hashlab`
- 章节：modern

### SHA-1
- 中文：NSA 设计、160 位输出的哈希标准，长期支撑代码签名与 TLS 证书；2005 年王小云团队给出理论碰撞攻击，2017 年 Google 与 CWI 以 SHAttered 实际演示——此后浏览器与证书机构全面弃用。
- English: An NSA-designed 160-bit hash standard that long underpinned code signing and TLS certificates. Theoretical collisions came from Xiaoyun Wang's team in 2005; in 2017 Google and CWI demonstrated SHAttered, and browsers and CAs dropped it for good.
- 游戏：`hashlab`
- 章节：modern

### Hashcash
- 中文：Adam Back 1997 年的反垃圾方案：发件人须为每封邮件付出少量哈希算力。它是工作量证明的直接祖先，比特币白皮书的第一条引用。
- English: Adam Back's 1997 anti-spam scheme making senders burn a little hash power per mail — the direct ancestor of proof-of-work and the first citation in Bitcoin's whitepaper.
- 游戏：`blockchain-miner`
- 章节：modern

### SHA-2
- 中文：NIST 2001 年（标准 FIPS 180-4）修订的标准哈希家族，包含 SHA-224/256/384/512，至今仍是互联网默认哈希。它以 Merkle-Damgård 结构建造，输出的 256 位是其最常用成员。
- English: The NIST family standardized as FIPS 180-4: SHA-224/256/384/512, the internet's default hashes. Built on Merkle-Damgård chaining, its 256-bit member secures nearly everything.
- 游戏：`hashlab`
- 章节：modern

### RIPEMD & Whirlpool（RIPEMD 与 Whirlpool 哈希）
- 中文：两族「非主流但正规」的哈希：RIPEMD 出自 1990 年代欧洲 RIPE 计划（1995，160 位，双管线结构，RIPEMD-160 至今用于 Bitcoin 地址）；Whirlpool 为 2000 年 Rijmen (AES 之父) 与 Barreto 设计的 512 位哈希（基于 AES 精神构造的 8×8 状态盒，入选 ISO/IEC 10118-3）。
- English: Two serious but non-mainstream hash families: RIPEMD from Europe’s RIPE project (1995, 160-bit double-line structure; RIPEMD-160 still secures Bitcoin addresses); Whirlpool, a 512-bit hash by Rijmen (the AES father) and Barreto in 2000, built with an AES-spirited 8×8 state box and listed in ISO/IEC 10118-3.
- 章节：modern
## 关联时代 / 人物 / 游戏
（待填）
