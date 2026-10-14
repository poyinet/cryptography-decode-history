---
title: 消息认证与 AEAD
title_en: Authentication & AEAD
type: domain
domain: d10
---

# 消息认证与 AEAD（Authentication & AEAD）

> 技术域 d10 ·（Phase 0 占位 · 概念/算法/协议/术语待填充）

## 概念

**中文**：消息认证与 AEAD：光加密不够——还须**认证**（完整性 + 来源）。MAC/HMAC 用密钥给消息盖戳，接收方可验签防篡改；AEAD（GCM、ChaCha20-Poly1305）把加密与认证合成一步，同时给机密性与完整性，是现代 TLS 的默认姿势。

**English**: Authentication & AEAD: encryption alone is not enough — you also need **authentication** (integrity + origin). MAC/HMAC stamps a message with a key so the receiver can detect tampering; AEAD (GCM, ChaCha20-Poly1305) fuses encryption and authentication into one step, delivering confidentiality and integrity together — the modern TLS default.
## 算法 / 协议

### 认证加密 AEAD（Authenticated Encryption）

**中文**：只有加密没有认证的密文，改一位你也不知道。对比两种方案对同一比特翻转的结局：裸加密 → 接收方解出被篡改的明文且毫无察觉；Encrypt-then-MAC → 标签对不上，当场拒收。顺序本身也是学问：MAC-then-Encrypt（先签后加）曾让 TLS 1.0 时代饱受 padding-oracle 之苦——现代答案是一个原子里同时完成两者的 AEAD（GCM/ChaCha20-Poly1305）。

**English**: Ciphertext without authentication lets a bit-flip slip through unnoticed. Compare both schemes under the same bit flip: raw encryption → receiver decrypts tampered plaintext with zero suspicion; Encrypt-then-MAC → tag mismatch, rejected on sight. Order matters too: MAC-then-Encrypt plagued TLS 1.0 with padding oracles — the modern answer is AEAD (GCM / ChaCha20-Poly1305), doing both in one atomic primitive.
### 可交互算法（Workshop）

- `hmac` · **HMAC-SHA256（密钥哈希）**（HMAC-SHA256 (keyed)）· 密钥：密钥词 / Key word，默认 `KEY`

## 术语

### Message Authentication Code (MAC)（消息认证码）
- 中文：用共享密钥给消息算出的短校验标签，接收方重算比对即可发现任何篡改；它保证「消息没被动过」，但证明不了「是谁发的」。
- English: A short tag computed from a message with a shared secret key; recomputing and comparing it reveals any tampering. It proves a message is unchanged, but not who sent it.
- 游戏：`spotdiff`
- 章节：modern

### HMAC
- 中文：1996 年基于哈希函数（如 SHA-256）构造的 MAC，安全性几乎不依赖哈希的实现细节；TLS、JWT、API 签名里到处是它的身影。
- English: A 1996 MAC built on top of a hash function such as SHA-256, whose security barely depends on the hash's implementation details. It appears everywhere: TLS, JWT, and API signing.
- 游戏：`spotdiff`
- 章节：modern

### Poly1305
- 中文：与 ChaCha20 配对的一次性消息认证码，速度快且常数时间。ChaCha20-Poly1305 是 TLS 1.3 的主力 AEAD 套件。
- English: A fast one-time authenticator paired with ChaCha20. ChaCha20-Poly1305 is TLS 1.3's primary AEAD suite.
- 游戏：`hashlab`
- 章节：modern

### KMAC / cSHAKE
- 中文：SHA-3 海绵构造的可定制家族：cSHAKE 加上下文与功能名、KMAC 把它升级为密钥 MAC——为密码学提供「域分离」的原生工具。
- English: The customizable SHA-3 sponge family: cSHAKE adds context and function names, KMAC turns it into a keyed MAC — giving domain separation natively.
- 章节：modern
## 关联时代 / 人物 / 游戏
（待填）
