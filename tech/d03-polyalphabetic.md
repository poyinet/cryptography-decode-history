---
title: 多表替换
title_en: Polyalphabetic Substitution
type: domain
domain: d03
---

# 多表替换（Polyalphabetic Substitution）

> 技术域 d03

## 概念

**中文**：多表替换：用**多张**替换表轮替，同一个字母在不同位置变成不同字母，把字母频率抹平（维吉尼亚、Playfair、Hill 同属此族）。频率分析失灵后，曾长期「不可破」，直到 19 世纪 Kasiski 利用周期重复把它打穿。

**English**: Polyalphabetic: rotate through **multiple** substitution tables so the same letter becomes different letters at different positions, flattening letter frequencies (Vigenère, Playfair, Hill). Frequency analysis stops working, so these ciphers stood "unbreakable" until Kasiski exploited periodic repeats in the 1800s.
## 算法 / 协议

### 可交互算法（Workshop）

- `vigenere` · **维吉尼亚 Vigenère**（Vigenère Cipher）· 密钥：密钥词 / Key word，默认 `KEY`
- `autokey` · **自动密钥 Autokey**（Autokey）· 密钥：引子 / Primer，默认 `KEY`
- `playfair` · **Playfair**（Playfair）· 密钥：密钥词 / Key word，默认 `MONARCHY`
- `hill` · **希尔 2×2 Hill**（Hill 2×2）· 密钥：k11,k12,k21,k22 / k11,k12,k21,k22，默认 `3,2,2,3`
- `porta` · **波尔塔 Porta**（Porta Cipher）· 密钥：密钥词（每对字母一档） / Key word (letter pairs as key groups)，默认 `PORTA`

## 术语

### Vigenère（维吉尼亚密码）
- 中文：用密钥逐字母决定用哪张字母表，让频率分析失效的多表替换密码。
- English: A polyalphabetic cipher: the key chooses a fresh alphabet per letter, defeating frequency analysis.
- 为什么重要：用密钥词循环替换，第一个"每字母不同表"的密码，统治了约三百年。
- 现实哪里用：近代外交与教学。
- 怎么被破：卡斯基法找密钥长度，再逐表频度分析即可破。
- 游戏：`vigenere`
- 章节：bacon, bletchley

### Playfair
- 中文：5×5 方阵把字母成对加密的英军野战密码。
- English: A digraph cipher on a 5×5 square, used by the British Army.
- 为什么重要：两字母成对、5×5 表加密，19 世纪英军的标准装备。
- 现实哪里用：一战初期与教学。
- 怎么被破：明密文对+表结构分析，强度弱于多表。
- 游戏：`playfair`
- 章节：ww1, midway

### Hill Cipher（希尔密码）
- 中文：用密钥矩阵对字母向量做线性变换的分组密码。
- English: A block cipher multiplying letter vectors by a key matrix.
- 为什么重要：用矩阵乘法加密，把替换变成线性代数。
- 现实哪里用：教学，演示"密钥矩阵必须可逆"。
- 怎么被破：已知明文列线性方程直接解出矩阵，极脆弱。
- 游戏：`hill`
- 章节：modern

### Nihilist Cipher（虚无主义者密码）
- 中文：波利比奥斯坐标 + 密钥数字逐位相加的俄罗斯古典密码。
- English: A Russian classical cipher: Polybius coordinates plus key digits.
- 为什么重要：维吉尼亚+换位+同音，把单字伪装成多字。
- 现实哪里用：19 世纪外交与间谍。
- 怎么被破：先还原换位，再逐表频度分析。
- 游戏：`nihilist`
- 章节：ww1

### Two-Square Cipher（双方形密码）
- 中文：双方形密码。用两个按密钥打乱的波利比奥斯方阵，把明文字母对在两阵中交叉替换成密文对；属双字母替换密码，比单表替换更难破解。
- English: A classical digraph substitution cipher using two keyed Polybius squares. Plaintext letter pairs are replaced by the letters found at the intersections of their rows and columns across the squares, making it harder to break than single-letter substitution.
- 为什么重要：用两张 5×5 表替代单表，增加频度复杂度。
- 现实哪里用：近代加密。
- 怎么被破：双表仍可逐表频度分析，强度有限。
- 游戏：`playfair`
- 章节：ww1

### Gronsfeld Cipher（格朗斯费尔德密码）
- 中文：格朗斯费尔德密码。17 世纪德国人 Gronsfeld 发明的古典密码：用数字密钥对明文字母移位，类似维吉尼亚密码但密钥只含数字，属多表替换。
- English: A classical polyalphabetic cipher invented by Gronsfeld in the seventeenth century. It shifts plaintext letters by a numeric key, resembling the Vigenère cipher but using only digits as the key, and is easily broken with modern methods.
- 为什么重要：维吉尼亚的变体，用一段数字（如经文）做密钥。
- 现实哪里用：16 世纪教廷。
- 怎么被破：已知明文可直接恢复密钥序列，再猜数字来源。
- 游戏：`vigenere`
- 章节：bacon

### Alberti Cipher Disk（阿尔贝蒂密码盘）
- 中文：1467 年阿尔贝蒂发明的两个同轴圆盘：转动外盘即可让每个字母使用不同替换表——多表替换的第一件实物工具。
- English: Alberti's 1467 pair of coaxial disks: rotating the outer ring gives each letter its own substitution alphabet — the first physical polyalphabetic device.
- 为什么重要：第一个真正多表替换（每字换表），早维吉尼亚一个多世纪。
- 现实哪里用：文艺复兴。
- 怎么被破：表序一旦猜出即可破。
- 游戏：`vigenere`
- 章节：bacon

### Beaufort Cipher（博福特密码）
- 中文：维吉尼亚的镜像变体：密钥字母减明文字母得到密文（c = k − p mod 26）。其自倒置形式被美国 M-209 拉杆式密码机采用为核心运算。
- English: A mirrored Vigenère variant: ciphertext equals key minus plaintext (c = k − p mod 26). Its reciprocal form was adopted as the core operation of the American M-209 lug-based cipher machine.
- 为什么重要：维吉尼亚的变体（加密=解密），结构略有不同。
- 现实哪里用：教学与近代。
- 怎么被破：频度分析同维吉尼亚。
- 游戏：`vigenere`
- 章节：ww1

### Tabula Recta（维吉尼亚方表）
- 中文：26×26 字母方阵：第 i 行是字母表左移 i 位的结果。维吉尼亚/博福特等所有多表替换的查表核心——一张表统治古典密码两百年。
- English: A 26×26 letter square whose row i is the alphabet shifted by i. The lookup heart of Vigenere, Beaufort and every polyalphabetic classical cipher.
- 为什么重要：维吉尼亚的"表格工具"，26×26 的替换对照。
- 现实哪里用：一切维吉尼亚系密码的操作工具。
- 怎么被破：工具本身不保密，破的是密钥。
- 游戏：`vigenere`
- 章节：bacon

### Autokey Cipher（自动密钥加密）
- 中文：维吉尼亚的一个变体：第一个密钥由种子组成，之后每个密文字符自动成为下一个明文字符的密钥——密钥随长度自足，周期消失，频率分析更难。1557 年贝拉索与 19 世纪用改过的形式写下。
- English: A Vigenere self-stretching variant: a short seed starts the key, then every ciphertext character becomes the key for the next plaintext character — no repeating period left to attack. Known to Bellaso in 1557 and re-formed in the 19th century.
- 为什么重要：用明文自身做后续密钥，密钥长度不再循环。
- 现实哪里用：近代加密。
- 怎么被破：明文的统计规律会渗进密文，可据此破。
- 游戏：`autokey`
- 章节：bacon

### Porta Cipher（波尔塔密码）
- 中文：波尔塔 1563 年发明的自互逆的多表密码：密钥字母一一对应整个字对，加密和解密是同一张表。它是文艺复兴意大利学派最有生命力的设计之一，被收录进 19 世纪的职业密码教材并延用至一战。
- English: Porta's 1563 self-reciprocal polyalphabetic cipher: each key letter covers an entire pair of alphabets, and the same table both encrypts and decrypts — one of the Renaissance Italian school's most durable designs, still in WWII textbooks.
- 为什么重要：把 26 字母分成 13 对，每对共享一表，减少表数。
- 现实哪里用：文艺复兴。
- 怎么被破：表数少，频度分析更容易。
- 游戏：`vigenere`
- 章节：bacon

### Four-Square Cipher（四格密码）
- 中文：Playfair 的改良：用四个 5×5 方阵（两个密钥方阵）同格对加密——比 Playfair 更难破，是英国皇家学会 1900 年代推荐的手工双字母密码。
- English: An improved Playfair: four 5x5 squares (two keyed) encrypt digraphs by mirror positions — harder to break, recommended by the RSA in its 1900s manual ciphers.
- 为什么重要：用四张表同时替换，抗频度更强。
- 现实哪里用：近代。
- 怎么被破：四表仍可逐一破，复杂度更高但可破。
- 章节：ww1
## 关联时代 / 人物 / 游戏

**关联时代**（轴1 编年叙事）
- [文艺复兴与宗教改革](../02-eras/e06-renaissance/README.md)
- [破译者时代](../02-eras/e08-codebreakers/README.md)
- [第一次世界大战](../02-eras/e09-ww1/README.md)
- [第二次世界大战](../02-eras/e11-ww2/README.md)
- [公钥革命](../02-eras/e13-public-key/README.md)

**关联人物**（人物志）
- [布莱斯·德·维吉尼亚](../people/vigenere.md)
- [莱昂·普莱费尔勋爵](../people/playfair.md)
- [弗里德里希·卡西斯基](../people/kasiski.md)
- [查尔斯·巴贝奇](../people/babbage.md)
- [莱昂·巴蒂斯塔·阿尔贝蒂](../people/alberti.md)

**关联游戏**（站内可玩 · 游戏 ID）
- `autokey` · 自动密钥
- `hill` · 希尔密码机
- `nihilist` · 尼希尔斯特
- `playfair` · Playfair
- `vigenere` · 维吉尼亚
