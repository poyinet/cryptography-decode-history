---
title: 中国国密
title_en: China National Cryptography
type: domain
domain: d20
---

# 中国国密（China National Cryptography）

> 技术域 d20

## 概念

**中文**：中国国密：SM2（椭圆曲线公钥，GB/T 32918）/ SM3（哈希，GB/T 32905）/ SM4（分组密码，GB/T 32907）/ ZUC（序列密码，3GPP 128-EEA3/EIA3）。《密码法》（2020）让这套标准从「用」走向「立」，走进政务、金融、移动通信。

**English**: China National Cryptography: SM2 (elliptic-curve public key, GB/T 32918) / SM3 (hash, GB/T 32905) / SM4 (block cipher, GB/T 32907) / ZUC (stream cipher, 3GPP 128-EEA3/EIA3). The Cryptography Law (2020) moved this family from "using standards" to "making standards," into government, finance, and mobile networks.
## 算法 / 协议

（本域暂无独立工坊算法 / 协议演示，可玩实现见下方「关联游戏」）
## 术语

### SM4
- 中文：中国国家商用分组密码标准（GB/T 32907-2016，曾用名 SMS4）：128 位分组、128 位密钥、32 轮非平衡 Feistel 结构，S 盒与 AES 同源思路；最初为 WAPI 无线局域网安全设计，现广泛用于国内金融与政务系统。
- English: China's commercial block cipher standard (GB/T 32907-2016, formerly SMS4): 128-bit blocks and keys, 32-round unbalanced Feistel structure with an AES-style S-box. Originally designed for the WAPI WLAN security protocol, now widely deployed in domestic finance and government systems.
- 为什么重要：中国分组密码标准，128 位块、128 位密钥。
- 现实哪里用：国密、SIM 卡、无线通信。
- 怎么被破：已被破（相关密钥等），但密钥管理仍是软肋。
- 游戏：`sm4`
- 章节：modern

### SM3
- 中文：中国国家商用哈希标准（GB/T 32905-2016）：输出 256 位摘要，Merkle–Damgård 结构与填充方式类似 SHA-256，安全性目标同级。
- English: China's commercial hash standard (GB/T 32905-2016): a 256-bit digest with Merkle–Damgård strength targets and padding similar to SHA-256.
- 为什么重要：中国哈希标准，256 位输出。
- 现实哪里用：国密、数字签名。
- 怎么被破：无已知破法，量子下仍有抵抗。
- 游戏：`gm-gateway`
- 章节：modern
## 关联时代 / 人物 / 游戏

**关联时代**（轴1 编年叙事）
- [公钥革命](../02-eras/e13-public-key/README.md)
- [中国平行线](../02-eras/e19-china/README.md)

**关联人物**（人物志）
- [王小云](../people/wangxy.md)
- [曾希圣](../people/zengxisheng.md)

**关联游戏**（站内可玩 · 游戏 ID）
- `gm-gateway` · 国密网关
- `sm4` · SM4 国密试炼场
