# Frontmatter 规范（schema）

每个知识单元文件头统一如下。`type` 取值：era / domain / person / artifact / machine / term / protocol / algorithm / quiz / quote / fact / timeline / map / relation / egg。

```yaml
---
title: 中文标题
title_en: English Title
type: person            # 见上方取值
era: e02-classical      # 所属时代（轴1，用于反链）
domain: d07-cryptanalysis # 所属技术域（轴2，用于反链）
game: freq              # 关联游戏 id（反链回网站，仅文字，零外链）
sources:                # 纯文字出处，零外链，宁缺勿空
  - 作者, 《书名/论文》, 年份
---
```

## 命名
- 时代目录：`02-eras/eNN-<slug>/`（NN=两位序号）
- 技术域文件：`tech/dNN-<slug>.md`；D01 在顶层 `01-foundations.md`
- 实体：`people/<id>.md` / `artifacts/<id>.md` / `machines/<id>.md`（一人/一件/一台一文件）
- 文件 UTF-8 无 BOM，正文先中文、后 `## English / 英文版` 段

## 时代词表（轴1，19）
- e01-origins · 古代起源 / Ancient Origins（前 500 BCE 前）
- e02-classical · 古典希腊罗马 / Classical Greece & Rome（前 500–476 CE）
- e03-byzantine-islamic · 拜占庭与早期伊斯兰 / Byzantine & Early Islamic（476–800）
- e04-arabic-golden-age · 阿拉伯黄金时代 / Islamic Golden Age（800–1258）
- e05-medieval-europe · 中世纪欧洲 / Medieval Europe（1258–1450）
- e06-renaissance · 文艺复兴与宗教改革 / Renaissance & Reformation（1450–1600）
- e07-early-modern-steganography · 近代早期与隐写 / Early Modern & Steganography（1600–1789）
- e08-codebreakers · 破译者时代 / Age of Codebreaking（1789–1914）
- e09-ww1 · 第一次世界大战 / World War I（1914–1918）
- e10-interwar · 战间期 / Interwar Period（1918–1939）
- e11-ww2 · 第二次世界大战 / World War II（1939–1945）
- e12-cold-war-info-theory · 冷战与信息论转折 / Cold War & Information Theory（1945–1975）
- e13-public-key · 公钥革命 / Public-key Revolution（1976–1990）
- e14-standardization · 标准化时代 / Age of Standardization（1977–2001）
- e15-web-protocols · 网络与协议时代 / Web & Protocol Era（1991–2010）
- e16-quantum-turn · 量子转折 / Quantum Turn（1984–2019）
- e17-post-quantum · 后量子时代 / Post-quantum Era（2016–今）
- e18-frontier · 前沿 / The Frontier（今）
- e19-china · 中国平行线 / China's Parallel Line（横切）

## 技术域词表（轴2，24）
- d01 · 基础与术语 / Foundations & Terminology
- d02 · 单表替换 / Monoalphabetic Substitution
- d03 · 多表替换 / Polyalphabetic Substitution
- d04 · 换位 / Transposition
- d05 · 转子/机械密码 / Rotor & Mechanical Ciphers
- d06 · OTP 与流密码 / OTP & Stream Ciphers
- d07 · 破译方法 / Cryptanalysis
- d08 · 对称分组密码 / Symmetric Block Ciphers
- d09 · 哈希 / Hash Functions
- d10 · 消息认证与 AEAD / Authentication & AEAD
- d11 · 非对称公钥 / Asymmetric Public-key
- d12 · 数字签名 / Digital Signatures
- d13 · 密钥管理 / Key Management
- d14 · 协议与 PKI / Protocols & PKI
- d15 · 零知识证明 / Zero-knowledge Proofs
- d16 · 秘密共享与 MPC / Secret Sharing & MPC
- d17 · 侧信道与物理攻击 / Side-Channel & Physical Attacks
- d18 · 隐写与信息隐藏 / Steganography & Info Hiding
- d19 · 随机数与 CSPRNG / Randomness & CSPRNG
- d20 · 中国国密 / China National Cryptography
- d21 · 量子密码 / Quantum Cryptography
- d22 · 后量子 / Post-Quantum
- d23 · 应用安全工程 / Applied Security Engineering
- d24 · 理论基础 / Theoretical Foundations

## 铁律
- 出处纯文字、零外链；未知留空，不写模糊占位。
- 每个知识点必须能回答：这是什么 / 依据是什么 / 怎么用 / 署名给谁。
- 三轴互链不得有孤儿（每个 game/era/domain 反链必须指向存在的目标）。