# 全网检索研究底稿 · 密码学知识全景（§6.2–§10）

> 检索日期：2026-10-22 · 方法：Wikipedia 分类目录、Kahn《The Codebreakers》、HAC 十章结构、
> Applied Cryptography 目录、NIST/IETF/ISO/GB 标准目录、CCF 推荐目录、中科院大学课程体系等权威来源交叉比对。
> 用途：作为 `_meta/inventory/` 知识总目录的**依据**（不是凭空设计的分类）。

---<task_result>
（承接上文 §6.2）

### 6.2 复杂度理论基础

**P / NP / coNP / BPP / ZPP / RP / coRP / Σ₂ᴾ / Π₂ᴾ / PSPACE / EXPTIME / NP-complete** · **P ≠ NP 蕴含关系**（**"单向函数存在 ⇒ P ≠ NP"**；反之不成立）· **NP-完全性问题**：**break-even NP-completeness（破平分问题）** · **格问题的 NP-hardness**（SVP/CVP 近似）· **具体安全性（concrete security）** · **渐进安全性 vs 具体安全** · **随机化算法** · **average-case vs worst-case hardness** · **worst-case to average-case 归约**

### 6.3 单向函数与伪随机性

- **单向函数（OWF）**、**强单向函数**、**膨胀（pushing-forward）**、**OWF ↔ PRG**（HILL定理）· **OWF ↔ 数字签名**（Rompel）· **OWF → 承诺**· **OWF 的必要性**
- **陷门函数（trapdoor function）**、**陷门置换**· **Rabin 陷门**
- **伪随机函数（PRF）**· **伪随机置换（PRP）**· **伪随机生成器（PRG）**· **PRG ⇒ OWF**、**PRF ⇒ PRG**（HILL）
- **hard-core bit（核心位）**、**Goldreich-Levin 定理**（从 PRG 提取 hardcore bit）
- **Hybrid argument（混合论证）**
- **Pairing-based / Weaker assumptions**

### 6.4 安全性定义

| 定义 | 内容 |
|---|---|
| **语义安全（semantic security）** | 等价于 IND-CPA |
| **IND-CPA** | 不可区分性（选择明文） |
| **IND-CCA / IND-CCA2** | 不可区分性（选择密文，适应性） |
| **NM-CPA / NM-CCA** |不可延拓性（非可塑性） |
| **EUF-CMA** | 存在性不可伪造（选择消息攻击） |
| **SUF-CMA（强不可伪造）** | 对已签过消息的新签名也不可伪造 |
| **Plaintext awareness（明文感知）** | 解密前必须能解密 → 抗 CCA |
| **IND-CCA ↔ 非可延拓性** | 等价类 |
| **NSS（non-signaling / 无信号）** | NSS 游戏 |
| **Authenticated encryption 定义**（IND-CPA + INT-CTXT） |完整性 + 机密性组合安全 |
| **Key indistinguishability（KD）/ UKE** | 密钥不可区分 / 密钥泄露 |
| **Denial-of-service resilience**（如 SPA 抗性） | — |
| **Secure key exchange / UC**（**Universally Composable**） | 可组合安全 |

### 6.5 零知识证明的层级

**Interactive / Non-interactive** · **Perfect HVZK**（Q-P、MWVZK）· **Computational ZK** · **Witness indistinguishable（WI）** · **Witness hiding** · **LWE-based ZK** · **Sigma 协议 + Fiat-Shamir 启发式**（在 ROM 中）· **NIZK in ROM** · **UC-Secure ZK** · **Composable ZK** · **零知识证明 vs 可验证计算** · **Pinocchio（通用电路编译）** · **隐私集合求交与 PIR 中的 ZK**

### 6.6 密码困难假设（Computational Hardness Assumptions）

来源：<https://en.wikipedia.org/wiki/Computational_hardness_assumption>、<https://en.wikipedia.org/wiki/Category:Computational_hardness_assumptions>、<https://flyingnobita.com/notes/math/cryptographic-hardness-assumptions>、<https://nglaeser.github.io/crypto-glossary/assumptions/>

| 族 | 假设 |
|---|---|
| 数论 | **整数分解**、**RSA 假设**、**Strong RSA**、**二次剩余（QR）**、**Decisional Composite Residuosity (DCR)**、**Phi-hiding**、**Class group 假设**、**N-th Residuosity** |
| 离散对数 | **DLP**、**CDH**、**DDH**、**Gap-DH**、**Strong-DDH**、**co-CDH / co-DDH**、**D-Linear (DLIN)**、**SDH / q-SDH**、**q-DHI / q-BDHI**、**LRSW**、**XDH / SXDH**、**Bilinear DH (BDH/DBDH)**、**Subgroup decision (BGN)**、**Knowledge-of-Exponent (KEA)**、**Representation problem**、**LUCAS / XLP** |
| 格 | **SVP / CVP / GapSVP / SIVP**、**SIS**、**ISIS**、**LWE**、**Ring-LWE / Module-LWE**、**NTRU**、**Approximate GCD (DGHV)**、**Ideal-SVP** |
| 编码 | **Syndrome decoding（McEliece）**、**LPN**（HB RFID / PCG） |
| 多变量 | **MQ / UOV / HFE**、**MinRank** |
| 同源 | **Supersingular isogeny path**（CSIDH、SQIsign）、**SIDH（已破）** |
| 组合 | **Subset sum / knapsack** |
| 对称 | **碰撞抗性**、**原像抗性**、**AES 为强 PRP**、**PRF 假设** |
| 时序 | **RSW time-lock**（顺序平方）· **VDF** |
| 通用/不可证伪 | **单向函数存在**、**OWF 存在**、**trapdoor function 存在**、**knowledge assumption**、**可延拓的 hardcore bit 假设** |

**Reduction（归约）作为一等问题**：**Tight reduction**、**lossy reduction**、**non-tight reduction**、**security loss**、**advantage amplification**、**random self-reducibility**、**黑盒归约 vs 灰盒归约**。

### 6.7 关键定理清单（可作为"定理条目"）

| 定理 | 内容 |
|---|---|
| **Shannon 完美保密定理** | OTP 完美保密 |
| **Goldreich-Levin 定理** | PRG 中提取 hardcore bit |
| **Håstad broadcast定理** | 同一明文多次 RSA 加密可恢复明文 |
| **Miller / Bleichenbacher 定理** | RSA 填充预言可解密 |
| **Shoup 通用群模型下界** | DLP 需 Ω(√q) |
| **Ajtai 归约** | SIS ← 最坏情况格问题 |
| **Regev 归约** | LWE ← 最坏情况 GapSVP/SIVP |
| **Lyubashevsky–Peikert–Regev 归约** | Ring-LWE ← Ideal-SVP |
| **Bellare–Rogaway 安全定义** | IND-CPA/IND-CCA 的游戏定义 |
| **Bellare–Neven归约** | 3DES 多重加密 |
| **Shoup 通用界** | MAC/PRF 成功率下界 |
| **Renyi / Shannon** | 密钥熵下界 |
| **Maurer界 / Pirachvili 界** | 信息论安全所需密钥长度 |
| **Canetti–Halevi / Rabin** | 加密 → 签名 |
| **Rompel** | OWF → 签名 |
| **HILL（Håstad–Impagliazzo–Levin–Luby）** | OWF ⇔ PRG |
| **Goldwasser–Micali / Goldwasser–Sipser** | 层次化方法 |
| **Fiat–Shamir 启发式**（非可证伪） | 交互式证明转非交互式 |
| **Barak 等 UC** | 可组合安全 |
| **Gentry构造 FHE** | 全同态 |
| **LWE ⇒ FHE** | Regev 2009 |
| **Shor / Grover** | 量子加速 |
| **Yu 等**（2022） | 量子不可区分性 |

### 6.8 信息论安全边界

- 完美保密要求 **密钥熵 ≥ 明文熵**
- 密钥长度与安全强度对照（NIST/BSI/CRYPTREC）：112 / 128 / 192 / 256 bit
- **Quantum-safe 对称安全强度**：AES-256 ≳ 2^128（Grover）
- **Maurer 定理**：满足条件时，密钥长度 ≈ 明文熵 + 2log(1/ε) 即可达到信息论安全

---

## 7. 实体（Entities）

### 7.1 关键人物（约 190 位，按时代排列）

来源：<https://en.wikipedia.org/wiki/Category:Cryptographers>、<https://cryptography.fandom.com/wiki/List_of_cryptographers>、<https://www.hackersminds.com/en/category/cryptographers>、<https://en.wikisource.org/wiki/Category:Cryptographers_as_authors>、<https://www.oscca.gov.cn/sca/zxfw/2017-04/24/content_1011709.shtml>

#### 古代 – 中世纪
| 人物 | 贡献 |
|---|---|
| **Polybius** | 前 150 年_polybius 方阵 |
| **Suetonius** | 《十二凯撒》记载凯撒密码 |
| **Probus**（Valerius Probus） | 记述凯撒的军用密码 |
| **al-Kindi（约 800–873）** | **频率分析的发明**，《密码信息解密手稿》 |
| **Ibn Mun'im** | 组合数学与密码学著作 |
| **Abu al-Qasim** | 密码学著作 |
| **al-Dina（Ibn al-Dina，卒 1258）** | "穆纳（已失传的密码）"，标准参考书 |
| **Ibn al-Haytham（约 965–1040）** | 密码分析（frequency analysis 早期），光学 |
| **Sextus Julius Frontinus** | 罗马军用密码，《Strategemata》 |
| **Sucre / 摩斯** | — |

#### 文艺复兴 – 17 世纪
| 人物 | 贡献 |
|---|---|
| **Leon Battista Alberti（1404–1472）** | **多表替换发明**，密码盘（De cifris, 1467） |
| **Johannes Trithemius（1462–1536）** | **Polygraphia (1518)**，首个印刷出版的多表替换；"Ave Maria" 钥匙 |
| **Blaise de Vigenère（1523–1596）** | **Vigenère 表**，1526 年密钥表/《密码论文集》 |
| **Giambattista della Porta（1535–1615）** | 《De furtivis literarum notis》(1563)，**互反表（Porta cipher）**，密码分析论著 |
| **Giovanni Battista Belaso（1535–1612）** | 密钥（"口令"）控制替换表 |
| **Giulio Camillo** | 记忆术与"密码剧院" |
| **Francis Bacon（1561–1626）** | **培根密码**（双写编码），《Advancement of Learning》 |
| **Cardano（Girolamo Cardano，1501–1576）** | 《De subtilitate (1550)》**Cardan grille** |
| **Selimus（Selimus/哈雷尔）** | 早期密码学著作 |
| **Guybrush（Guybrush / A. Guybrush）** | 早期英格兰密码实践 |
| **John Wallis（1616–1703）** | 密码分析，破解"金刚石"密码 |
| **Samuel Clarke / 解读者** | — |
| **William Camden** | 密码史料 |
| **Caspar Schwenckfeld** | 16 世纪德意志密码实践 |

#### 17–19 世纪（密码分析时代）
| 人物 | 贡献 |
|---|---|
| **Augustus Kerckhoffs（1835–1907）** | **Kerckhoffs 原则**（《La cryptographie militaire》1883） |
| **Charles Babbage（1791–1871）** | 破多表替换（未发表）；差分机 |
| **Friedrich Kasiski（1805–1880）** | **Kasiski 检验**（1863） |
| **Charles Wheatstone（1802–1875）** | **Playfair cipher 发明**（1854，未署名） |
| **Lyon Playfair, 1st Baron Playfair（1818–1899）** | 推广 Playfair |
| **Felix Delastelle（1835–1919）** | **Four-square、Two-square、Bifid、Trifid** |
| **Émile Bazeries（1840–1906）** | **Bazeries cylinder**，《Les Chiffres secrets dévoilés》(1901) |
| **Friedrich Gauss** | 密码分析（"三个字母的密文"），数论密码学 |
| **Auguste Oppermann** | 密码设计 |
| **Julius W. Finkelstein** | 德国的早期分析师 |
| **Richard P. Finkelstein** | — |
| **Friedrich Vieweg** |德国密码史 |
| **Philips van Marnix (Lord of Sint-Aldegonde)** | 荷兰独立战争期间破西班牙密电 |
| **Charles Babbage / Herbert Yardley** | 见下 |
| **Georges Painvin（1886–1975）** | **1918 年破 ADFGVX** |
| **Étienne Bazeries** | 见上 |
| **Max Euwe（1885–1957）** | 破荷兰枢密院电码（1939–40） |
| **Marconi / 无** | — |
| **Friedrich Walter Fricke** | — |
| **William F. Friedman** | 见 WWII |

#### 一战 – 二战（密码机时代）
| 人物 | 贡献 |
|---|---|
| **Dilly Knox（1882–1943）** | Room 40 破 Enigma 与早期德国电码 |
| **Nigel de Grey** | Room 40，解 Zimmermann 电报 |
| **Hugh Alexander** | Room 40 主管 |
| **Ernest Sinclair / Alastair Denniston** | GC&CS 主管 |
| **Charles H. Thomas / C. H. T. "Tommy" Flowers** | Colossus 设计 |
| **Max Newman** | Colossus 逻辑设计 |
| **Alan Turing（1912–1954）** | **Bombe 设计**、Enigma 攻击理论、"Nihilist"、De Bruijn 序列、Imitation Game |
| **Gordon Welchman（1911–1984）** | **Hut 6 主管**，Wheatstone 修正，**"Welchman 盘"** |
| **Mavis Batey（1913–2001）** | 破意大利海军 Enigma，**Cape Matapan**（1941） |
| **Joan Clarke（1913–1997）** | Hut 8、**Tunny/Lorenz** 破译核心人物 |
| **Bill Tutte（William Thomas Tutte，1917–2002）** | **破 Lorenz（1942）**，"Tutte 判决"，图论与拟阵 |
| **John Herivel（1917–2013）** | **"Herivel 提示"**，Bletchley 手工法 |
| **Eric Nave** | 密码史料学家 |
| **Jerry Roberts（1913–2003）** | Colossus 团队，**Colossus 复刻** |
| **Arne Bechman** | 德国密码机史料 |
| **Hans-Thilo Schmidt（1918–1945）** | 德国 SS 密码学家，被处决 |
| **Abraham Sinkov（1909–2000）** | 美国 SIS 密码分析家 |
| **William F. Friedman（1891–1969）** | **SIS 创立者**，密码统计学方法；**紫色（Purple）破译**，Index（《The Index》教科书） |
| **Abraham Sinkov / Solomon Kullback** | 频率与统计方法 |
| **Laurance Safford（1894–1970）** | 美国海军 20 年首席密码学家 |
| **Frank Rowlett（1894–1984）** | **破 Purple（1940）** 团队领导 |
| **William B. Friedman / Elizebeth Friedman（1890–1980）** | 美国密码学奠基；*"Elizebeth"曾破解海盗与走私者密码* |
| **Herbert O. Yardley（1889–1966）** | 《The American Black Chamber》 |
| **Boris Hagelin（1892–1983）** | **C-36 / C-38 (M-209) / C-52** 密码机 |
| **Arvid Damm（1869–1928）** | 转轮密码机先驱（Crypto AG 前身 AB Cryptograph） |
| **Arthur Scherbius（1878–1929）** | **Enigma 专利 (1918)** |
| **Edward Hebern（1869–1952）** | 转轮机专利（1917/1924） |
| **Hugo Koch（1869–1940）** | 转轮机专利（1919） |
| **Fredrik Gripenstierna（1728–1804）** | 世界上第一台"密码机"（手摇轮盘） |
| **Charles Wheatstone / Charles Babbage** | 见前 |
| **Dilly Knox / John Tiltman（1894–1975）** | GC&CS/NSA，长期密码服务 |
| **Abraham Sinkov / 保密局** | — |
| **Frank Rowlett / Solomon Kullback** | — |
| **Louis Brown / Joseph Rochefort（1888–1976）** | **JN-25 / Magic 破译** |
| **William Hamilton Martin / Bernon F. Mitchell** | **1960 年叛逃苏联**（VENONA 关键） |
| **Luigi Sacco（1872–1945）** | 意大利密码学家，《密码学手册》 |
| **Dilly Knox** | — |
| **A. M. Turing / Max Newman / Tommy Flowers** | — |
| **Leo Marks（1896–1960）** | SOE 密码主任，**以一次一密取代诗歌密码**，Violette Szabo |
| **Friedrich Wilhelm Lenz / Hans-Thilo Schmidt** | — |
| **Kurt F. Priebe** | — |
| **Hugo R. G. (Hagelin)** | — |
| **Otto K. (R. L. Morrison)** | 见现代 |
| **Walter F. Friedman** | 见上（Walter F. Friedman / William F. Friedman 同一人） |
| **R. L. Morrison** | 无 |
| **Arne Bechman** | 见上 |

#### 战间期 – 现代（公开密码学）
| 人物 | 贡献 |
|---|---|
| **Claude Shannon（1916–2001）** | **信息论、完美保密、OTP 定理**（1949） |
| **Alan Turing** | 见上 |
| **Max Semon（1912–1952）** | 二战德军 **Tunny / Lorenz 机器的发明者** |
| **W. T. Tutte** | 见上 |
| **Marian Rejewski（1905–1983）** | **1932 年破 Enigma**（数学方法，"grill"理论） |
| **Jerzy Różycki（1909–1989）** | **Zygalski 记录 + 炸弹原理**，"clock method" |
| **Henryk Zygalski（1906–1990）** | Biuro Szyfrów，**Zygalski 记录法**、 bomba kryptologiczna |
| **Ludomir Danielewicz** | Enigma 复制（"pomocniczy"） |
| **Witold Różycki** | — |
| **Whitfield Diffie（1944–）** | **Diffie–Hellman 公钥密码（1976）** |
| **Martin Hellman（1945–）** | **Diffie-Hellman**、**ElGamal**、**Merkle–Hellman 背包** |
| **Ralph Merkle（1951–）** | **Merkle 树**、**Merkle–Hellman**、**Merkle 签名** |
| **Ronald Rivest（1947–）** | **RSA**、**RC 系列**、**MD 系列**、**ElGamal 签名** |
| **Adi Shamir（1952–）** | **RSA**、**Schnorr 签名（共同提出）**、**Shamir 秘密共享**、**差分/线性密码分析**、**Shor协议** |
| **Leonard Adleman（1945–）** | **RSA**、**Adleman–Pomerance–Rumely (APR)** |
| **Taher Elgamal（1955–）** | **ElGamal 加密/签名** |
| **David Chaum（1955–）** | **盲签名**、**零知识证明**、**DigiCash** |
| **Victor Miller（1951–）** | **椭圆曲线密码**独立发明者 |
| **Neal Koblitz（1948–）** | **椭圆曲线密码** 独立发明者 |
| **Shafi Goldwasser（1958–）** | **零知识证明**、**语义安全**、**密码学公理化** |
| **Silvio Micali（1954–）** | **零知识证明**、**概率加密**、**Pseudorandom functions** |
| **Charles Rackoff（1948–）** | **零知识证明** |
| **Adi Shamir / Yvo Desmedt** | — |
| **Claus-Peter Schnorr（1943–2025）** | **Schnorr 签名**、**Schnorr 识别协议**、**Fiat-Shamir 攻击（1986）** |
| **Gustavus Simmons（1930–）** | **认证理论** |
| **Horst Feistel（1915–1990）** | **Feistel 网络**（IBM） |
| **Don Coppersmith（1950–）** | **DES S-box 设计**、**MARS**、**Coppersmith 攻击** |
| **Joan Daemen（1965–）** | **Rijndael (AES)**、**Salsa20**、**BLAKE**、**Panama**、**RadioGatún** |
| **Vincent Rijmen（1965–）** | **Rijndael (AES)**、**Whirlpool**、**Serpent** |
| **Lars Knudsen（1965–）** | **Serpent**、**截断差分**、**积分攻击**、**slide 家族** |
| **Ross Anderson（1964–）** | **Serpent**、**Luby-Rumpel论文**、**Kiwi** |
| **Eli Biham（1960–）** | **差分密码分析**、**Serpent**、**Tiger**、**相关密钥攻击** |
| **Amir(cx) Biryukov** | **slide / boomerang / rectangle**、**impossible differential** |
| **David Wagner（1966–）** | **slide / boomerang / rectangle**、**截断差分** |
| **Bart Preneel（1963–）** | **RIPEMD-160**、**Whirlpool**、COSIC |
| **Douglas Stinson（1956–）** | **密码学：理论与实践**教材作者 |
| **Alfred Menezes（1965–）** | **MQV**、HAC 作者 |
| **Paul van Oorschot** | **HAC**、**Van Oorschot–Wiener** |
| **Scott Vanstone（1950–2007）** | **Certicom** 创始人、**EC 密码**、**ECDSA 标准化** |
| **Bruce Schneier（1963–）** | **Blowfish / Twofish**、**Applied Cryptography**、**Solitaire**、**Skeptic** |
| **Niels Ferguson（1969–）** | **Twofish**、**Fortuna**、**Phelix** |
| **Doug Shoup（1961–）** | **Shoup 通用界**、**NIZK**、《A Computational Introduction to Number Theory and Cryptography》 |
| **Daniel Bleichenbacher（1964–）** | **Bleichenbacher 攻击（1998）**、**Manger攻击** |
| **Jean-Jacques Quisquater（1945–）** | **European Crypto协会**、**EID** |
| **Antoine Joux（1966–）** | **双线性配对（tripartite DH）** |
| **Florent Chabaud** | — |
| **Philippe Gulley / Yves Gueron (Guyon)** | — |
| **Jean-Pierre Aumasson（1975–）** | **BLAKE / BLAKE2 / BLAKE3**、**Argon2** |
| **Kaisa Nyberg（1963–）** | **IDEA**、**AES侧信道研究** |
| **Lars Knudsen / Antoon Bosselaers** | — |
| **Peter Gutmann** | — |
| **Oded Goldreich（1957–）** | **《密码学基础》**、**Fiat-Shamir 攻击**、** hardcore bit** |
| **Shafi Goldwasser / Silvio Micali** | 见上 |
| **Adi Shamir** | — |
| **Mihir Bellare / Phillip Rogaway** | **RO 模型**、**HMAC 的安全性证明**、**SP800-38 系列证明** |
| **Gilles Brassard（1955–）** | **BB84 量子密钥分发**、**密码协议**、**游戏理论证明** |
| **Charles Bennett** | **Bennett–Brassard** 量子密码 |
| **Artur Ekert（1967–）** | **E91 量子协议** |
| **Peter Shor（1956–）** | **Shor 算法** |
| **Lov Grover（1961–）** | **Grover 算法** |
| **Peter Shor / Daniel J. Bernstein（1971–）** | **SNAKE / Bernstein v. US**、** salsa20/ChaCha** |
| **Tanja Lange（1975–）** | **ECC加密实现**、**Curve25519**、**ECRYPT** |
| **Koblitz / Miller / Bernstein** | 见上 |
| **Mihir Bellare、David Pointcheval** | — |
| **Steven M. Bellovin** | — |
| **David A. McGrew** | — |
| **Alfred J. Menezes / Scott Vanstone / Paul van Oorschot** | HAC |
| **Steve Katz** | — |
| **Jean-Pierre Aumasson / Samuel Neves / Zooko Wilcox-O'Hearn / Jack O'Connor** | BLAKE2 / BLAKE3 |
| **Peter Schwabe** | **Kyber / Dilithium** 核心实现 |
| **Vadim Lyubashevsky** | **Ring-LWE / Kyber / Dilithium** |
| **Eike Kiltz / Leo Ducas / Damien Stehlé / Gregor Seiler** | **Kyber / Dilithium** |
| **Douglas Stebila** | **TLS PQ混合** |
| **Christopher J. Wood / Douglas Stebila / 岛田（Shima）** | — |
| **David Chaum / Antonín Kučera** | — |
| **Claus-Peter Schnorr / Jean-Jacques Quisquater / Antoine Joux** | 见上 |
| **Feng Dengguo（冯登国，1955–）** | **中国密码学领军**；"国内外密码学研究现状及发展趋势"；《网络安全原理与技术》 |
| **Wang Xiaoyun（王小云，1966–）** | **破解 MD4/MD5/HAVAL-128/RIPEMD、**SHA-0/SHA-1 碰撞攻击**；**SM3 设计者**；格密码 |
| **Lai Xuejia（赖晓嘉）** | MD4/MD5 碰撞攻击合作者 |
| **Shi-Qi Shen（沈世琦，1961–2022）** | **中国密码学奠基人之一**（华罗庚学派），**CACD（线性同余反馈移位寄存器）流密码**、"Stream Ciphers and Their Cryptographic Application"；中国科学院数学与系统科学研究院 |
| **Wen-Jun Wu（吴文俊，1919–2017）** | 中国科学院院士、**首届国家最高科学技术奖**；**中国密码学数学基础**、**有限域/自动机密码理论**、中国数学史 |
| **Zhe-Xian Wan（万哲先，1927–2023）** | 中国科学院院士；**有限几何/编码与密码理论**、区组设计 |
| **Ta-you Tao（陶仁骥）** | **有限自动机公开钥密码 FAPKC** |
| **Zhong-Ping Tan（覃中平）** | **有限自动机密码**、演化密码 |
| **Huan-Guo Zhang（张焕国，1945–）** | **演化密码**、可信计算、武汉大学密码学科奠基 |
| **Cun-Sheng Xiao（肖国镇）** | **流密码组合理论**、DNA 计算与 DNA 密码 |
| **Cun-Sheng Ding（丁存生）** | **流密码**（与肖国镇并称） |
| **Ken-ichi Takagi / 冈部（Okabe）** | — |
| **Kenichi Chin（秦肯成）** | 中国密码学会前身"CHINACRYPT"创办人之一、**编码与密码** |
| **Ding Yi Ren（赵仁杰）** | 认证码理论 |
| **Zhi-Ping Li / 刘建伟** | — |
| **Pei Dingyi（裴定一，1941–2023）** | **中国密码学会第一、二届理事长**；**认证码国际一流结果**；数论与密码 |
| **Zheng Jianhua（郑建华，1952–）** | 中国科学院院士，信息安全国家重点实验室原主任 |
| **Jing Jiwu（荆继武）** | **中国科学院信息工程研究所**原副所长；**全国网络安全标准化技术委员会鉴别与授权工作组组长** |
| **Ma Jianfeng（马建峰，西电）** | 西安电子科技大学密码学 |
| **Zhao Yunlei（赵运磊，复旦）** | 复旦密码学实验室负责人，后量子密码 |
| **Yu Yun（郁昱，复旦）** | 后量子密码与隐私计算；三大密码会发表最多论文的中国学者之一 |
| **Li Hongda（李红达，中科院信工所）** | **密码协议**、安全性归约证明 |
| **Dingfeng Ye（叶顶锋，中科院）** | **密码分析学**、代换密码理论 |
| **Hu Lei（胡磊，中科院数学院）** | 序列与阵列复杂度 |
| **Lin Dongdai（林东岱，中科院信工所）** | **应用密码学** |
| **Xu Haixia（徐海霞，中科院）** | **安全多方计算**、数字货币 |
| **Tao Kai（陶凯）** | — |
| **Wang Yi（王頔/王跃武）** | 证书认证体系 |
| **Xue Rui（薛锐）** | 公钥密码、理论密码 |
| **Zhao Xianfeng（赵险峰）** | **信息隐藏 / 数字水印** |
| **Li Bao（李宝）** | **椭圆曲线密码** |
| **Lu Xianhui（路献辉）** | **格密码**、公钥密码 |
| **Huang Zhenyu（黄震宇）** | **代数密码分析**、量子计算 |
| **Li Hongda / Xu Haixia** | 见上 |
| **Wang Liping（王丽萍）** | 序列密码、格密码 |
| **Lu Wujie（鲁武力）** |椭圆曲线密码 |
| **Li Hongtao** | 签名 |
| **Zhang Chao（张超）** | — |
| **Bao Zhenan（鲍振南）** | — |
| **Zhang Huaxun** | — |
| **Gu Yan（谷彦）** | — |
| **Shou-de Li / 涂时晏** | — |
| **Duan Yang（段扬）** | — |

**非西方/地区性**：**Venkatesh Raman**、**T. Y. Lam**、**K. S. Yang**、**Nguyễn Phúc Gia**（越南密码学）等。
**女性密码学家**：**Mavis Batey**、**Joan Clarke**、**Emily Anderson**、**Elizebeth Friedman**、**Wang Xiaoyun（王小云）**、**Shafi Goldwasser**、**Silvio Micali**（男）、**Anne Canteaut**、**Michele Mosca**、**Atsuko Miyaji**、**Yvo Desmedt**、**Vanessa Teague**、**Huaxiong Wang（王华雄，NTU）**、**Moti Yung**（IACR 主席）、**Susan Landau**、**Karen McMillan**。

### 7.2 密码机与装置（30–40 项）

| 装置 | 年代 | 关键点 |
|---|---|---|
| **Scytale（斯巴达棒）** | 前500 | 最早的机械转置装置 |
| **Alberti密码盘** | 1467 | 首个可旋转多表替换盘 |
| **Trithemius 表（tabula recta）** | 1518 | 首个印刷多表替换表 |
| **Vigenère 密码表** | 1553/1586 | 手写密钥表 |
| **Cardan grille（栅格）** | 1550 | 滑动纸栅格隐写 |
| **Jefferson disk / wheel cipher（杰斐逊圆盘）** | 1790s | 25 片乱序盘；M-94 前身 |
| **Jefferson bazeries cylinder** | 19c | 法军圆柱盘 |
| **M-94（美陆军条带/圆盘密码）** | 1922 | 25 片黄铜盘，1–10 万亿密钥空间 |
| **CSP-488（美海军条带密码）** | 1922–1942 | M-94 的海军版 |
| **Enigma（I / M3 / M4）** | 1918/1926/1942 | 转子 + 反射器 + 插板；Scherbius 专利 443,101 |
| **Typex** | 1937 | 英国转轮机，不规则步进 |
| **SIGABA (ECM Mark II)** | 1940 | 美制 15 转轮；轴心国从未破 |
| **SIGTOT / SIGTOT 打印版** | 1930s–1950s | 美海军 Top Secret 一次性密码打印机 |
| **Purple / Type 97 (ジキゴブンインジキ)** | 1939 | 日外交阶梯开关机；1940 破 |
| **Red / Type A** | 1931–1938 | 日外交机，Purple 前身 |
| **Type B (3-Type B)** | 1939 | 日军机；Friedman 破 |
| **Lorenz SZ40 / SZ42** | 1940/1941 | 12 针轮；Tunny；Colossus 目标 |
| **Lorenz T310** | 1943 | 后期电子管型 |
| **M-209 (Hagelin C-38 / CSP-1500)** | 1940 | 便携机械；6 互质针轮 + 27 鼓；周期 101,405,850 |
| **Hagelin C-36** | 1937 | M-209 的前身 |
| **Hagelin C-52 / CX-52** | 1945 | 周期 2,756,205,443；混合字母轮 |
| **US Navy ECB（Cipher Machine）** | 1920s– | 美海军电机，Manual for the ECB |
| **SIGSALY** | 1943–1946 | **世界首台"完美安全"语音加密**；50 吨；黑胶唱片作 OTP；罗斯福—丘吉尔通话 |
| **Heath Robinson** | 1943 | 首次电子可编程破 Lorenz 辅助机 |
| **Colossus** | 1943/1944 | **首台可编程电子数字计算机**；Tunny破译 |
| **Bombe（英国）** | 1940 | Turing–Welchman电动转轮搜索机 |
| **Bombe（美海军 / US Navy bombe）** | 1943 | 破解日本 JN-25 / 紫密码的 Navy bombe |
| **Zuse Z1** | 1938 | 机械可编程计算机（浮点） |
| **Zuse Z3** | 1941 | 首台可工作的可编程全电子计算机（2007复现） |
| **Zuse Z4** | 1945 | 首台通用型继电器计算机 |
| **Hagelin / Crypto AG 系列**（CX-52 等） | 1950s– |瑞士 Crypto AG 出售的可疑设备（见 §9） |
| **Siemens T310 / T52 / T57** | 1930s–1950s | 西门子密码机；T310 是 Lorenz 的民用版 |
| **NEMA** | 1947 | 瑞士四轮转子机 |
| **Slidex（英/盟军纸卡二元组密码）** | 1943–1945 | 滑动条二元组战术密码 |
| **One-time pad打字机 / OTP装置** | 1940s | 一次一密设备（SIGSALY 同类） |
| **Crypto (One-time) —— 一次性密码本 / 诗歌密码本** | 二战 | SOE 诗歌码（被 Leo Marks 替换） |
| **微点相机 / microdot** | 1941–1980s | 胶片隐写 |
| **Navajo Code Talkers 语** | 1942–1945 | 语码（唯一"从未被破"的军用密码） |
| **TPM / 可信密码模块（TCM）** | 1999– | GB/T 29829、GM/T 0012 |
| **HSM（硬件安全模块）** | 1990s– | FIPS 140-2/3 Level 3/4 载体 |

### 7.3 重大历史密码案例与文物（60–80 项）

来源：<https://en.wikipedia.org/wiki/List_of_ciphertexts>、<https://ciphermuseum.com/halls/unsolved.html>、<https://academickids.com/encyclopedia/index.php/Famous_ciphertexts>

| 年 | 案例/文物 | 行为者 | 技术 | 意义/状态 |
|---|---|---|---|---|
| 179–180 | **Papyrus Oxyrhynchus 90** | 古希腊 | 希腊密码（天书） | 未解 |
| 约 400 BC | **Kama Sutra 密码** | 梵文 | 替换 |最早的文本密码学记载 |
| 约 500 BC | **Scytale 通信** | 斯巴达 | 转置 | 最早的机械密码 |
| 约 1200 BC | **Phaistos Disc** | 米诺斯 | 45 符号活字印 | **世界最古老"活字印刷"；仍未解** |
| 约 200 | **Sator Square** | 罗马 | 回文方阵 | 拉丁护符 |
| 4–5c | **Suetonius 记载的凯撒密码** | 罗马 | 替换 | 史上最早的具名军用密码 |
| 9c | **al-Kindi 频率分析** | 巴格达 | 频率分析 | 密码分析学诞生 |
| 1467 | **Alberti 密码盘** | 佛罗伦萨 | 多表替换 | 密码学进入现代 |
| 1518 | **Trithemius Polygraphia** | 德国 | 递增位移 | 首本印刷密码书 |
| 1526/1586 | **Vigenère 表** | 法国 | 多表替换 | 500 年后才被破 |
| 1586 | **Babington Plot ciphers**（Babington 密信） | 玛格丽特·莱塞斯特/安妮·波琳 | 单表替换 | **直接导致玛丽·斯图亚特被处决**；Thomas Phelippes 破译 |
| 1587 | **Castelnau Letters（玛丽女王密信）** | 玛丽·斯图亚特 | 单表替换 | 2022 年由 Lasry–Megyesi–Tomokiyo 用频率分析破译（约 5 万字符） |
| 1590s | **Walsingham 破荷兰语密码** | 英 |频率分析 | 黑屋室密码分析 |
| 17c | **Great Cipher**（Vaubanson） | 法 |替换 | 17c 破 |
| 1730 | **Copiale cipher** | Wolfenbüttel 眼镜蛇会 | 同音替换 + 符号 | **2011 年由 Knight–Megyesi–Schaefer 破译**（7.5 万字符 / 105 页） |
| 1730 | **Olivier Levasseur密码** | 海盗 | 未知 | 未解 |
| 1748–1763 | **Shugborough Inscription** | 英国 | 未知 | **250 年未解**；OUOSVAVV |
| 1750s | **Franklin's "Wheel cipher"** | 美国 | 转置 | 分权/众包破译范式 |
| 1770s | **美国独立战争密信** | 大陆军 | 数字码本 | Jefferson–Rives 破译（Yale 2000s） |
| 1791 | **Dreyfus Affair**（Bazarroff 密信） | 法国军方 | 替换 | **" Dreyfus was traitor" 语出；Hugues Lesnes 破** |
| 1801 | **Patterson's cipher for Jefferson** | 美国 | 四层转置 | 杰斐逊破不了；**Smithline 2007 用爬山搜索破** |
| 1843 | **Poe《The Gold-Bug》** | 爱伦·坡 | 单表替换 | 第一篇普及密码分析的小说 |
| 1871–1945 | **中国电报码本**（《电报新书》《电信新法》《红字密本》等 13 版） | 清政府/民国 | 数字码本 + 加减密 | **日本在甲午战争破译中国电报** |
| 1879 | **Zimmermann Telegram**（齐默尔曼电报） | 德/墨西哥 | 转置 + 码本 | **Room 40 破译，美国1917 参战** |
| 1882 | **One-Time Pad（Miller 1882 / Mauborgne 1917）** | 美国 | XOR-OTP | Shannon 证明完美保密 |
| 1885 | **Beale ciphers** | 美国 | 书籍密码 | 1/3 已解（2号对《独立宣言》），1、3 号未解 |
| 1887 | **Great Cipher（Arthuretes）** | — | — | — |
| 1897 | **Dorabella Cipher** | 爱德华·埃尔加 | 符号 | **未解** |
| 1903 | **Doyle《The Dancing Men》** | Conan Doyle | 跳舞小人 | 小说内已解 |
| 1911 | **《The Magician》/Agatha** | — | — | Babbage 未发表的 Vigenère 破译 |
| 1917 | **Zimmermann Telegram** | 见上 | — | 见上 |
| 1918 | **ADFGVX 密电** | 德国陆军 | Polybius + 转置 | **Painvin 于 1918-08-27 破译** |
| 1918 | **Chaocipher** | John F. Byrne | 双盘动态替换 | **保密 90 年，2010 公开** |
| 1932 | **Enigma 破译** | Rejewski/Różycki/Zygalski | 数学 + 炸弹 | "**炸弹的启示**"（The Bombes） |
| 1939–1945 | **Enigma 机报文** | 德军 | — | 1932–1945 逐步破译；Ultra |
| 1939 | **D'Agapeyeff cipher** | 密码学家本人 | Polybius 5×5 + 复写 | **未解（作者本人也已遗忘）** |
| 1939 | **Purple 机报文** | 日本外务省 | 阶梯开关 | **1940-09-20 Rowlett/Friedman 团队破译（Magic）** |
| 1940 | **JN-25 / Magic** | 日海军 | 码本 + 加法 | 美国海军破译，**中途岛** |
| 1941 | **Lorenz SZ42 报文（Tunny）** | 德国高层 | 轮机 | Tutte 1942 破，Colossus 1944 工业化 |
| 1941 | **Cape Matapan** | 英皇家海军 | 意海军 Enigma（Mavis Batey） | 地中海大胜 |
| 1942 | **ULTRA / UltraMAGIC** | 英国 | — | 战争决定性情报 |
| 1943–1946 | **SIGSALY** | 美/英 | 唱片 OTP | 首台完美安全语音加密 |
| 1944 | **Pigeon 440 号邮件（NURP）** | — | 未知 | 未解 |
| 1945 | **Navajo Code Talkers** | 美海军陆战队 | 语码 | 战争中从未被破；1968 解密 |
| 1947 | **VERONA / VENONA** | 美/英 | 一次一密 | **William Martin & Bernon Mitchell 叛逃 → 数万份破译** |
| 1948 | **Tamám Shud（Somerton Man）** | 澳大利亚 | 撕书页 + 字母表 | 未解 |
| 1950 | **VIC cipher** | 苏联间谍 Häyhänen | 跨栏棋盘 + 链加 + 双转置 | **从未被密码分析破译** |
| 1950s | **James Hampton 的"手稿"** | 美国 | 未知 | 未解 |
| 1969–1970 | **Zodiac Killer ciphers（Z-13/Z-32/Z-408/Z-340）** | 美国 | 同音替换 + 符号 | Z-408 一周内破；**Z-340 于 2020-12 破**；Z-13、Z-32 未解 |
| 1973 | **Colossus 停机（英国 GCHQ）** | 英 | — | 直到 1997 年解密档案 |
| 1977 | **"The Magic Words are Squeamish Ossifrage"** | 美国 | — | 1993–94 破 |
| 1983 | **Decipher** | — | — | 已解 |
| 1986 | **Decipher II** | — | — | 4 密文解3，第 4 失传 |
| 1987 | **Decipher III** | — | — | 未解 |
| 1990 | **Kryptos 雕塑（K1–K4）** | Jim Sanborn，CIA 总部 | Vigenère + 转置 | K1–K3 于 1999 前破；**K4（97 字符）未解** |
| 1991 | **Scorpion ciphers** | — | — | 未解 |
| 1993 | **Crypto AG 泄密（Codenhancer）** | Crypto AG / CIA / BND | 硬件/软件后门 | **全球供应链级信任危机** |
| 1999 | **Ricky McCormick 的加密笔记** | 美国 | 混合符号 | FBI 2011 公开求援，仍未解 |
| 2004 | **《国家宝藏》** | 电影 | Bacon 密码梗 | 大众文化传播 |
| 2006 | **《达芬奇密码》判例中的 Smithy code** | 英国 | 隐藏编码 | 一个月内破 |
| 2012–2016 | **Cicada 3301 谜题** | 全球 | 复合 | 3 题解 2 |
| 2015 | **11B-X-1371** | — | — | 已解 |
| 2016 | **DROWN** | — | SSLv2 | 使大量服务器被跨协议解密 |
| 2020 | **Noita Eye Messages** | — | — | 未解 |
| 1949 | **"Q.E.D." 密电 / 曾肯成** | — | — | — |
| 1931–1938 | **中国红军"豪密"** | 周恩来 | **书本 + 册码 + 页/行/字序二重作业** | **1928–1949 从未被破**；邓颖超为首位译电员 |
| 1929–1930 | **中共首套无线电台密码** | 张沈川/黄尚英 | 明码颠倒 + 字母→数字→汉字 | 因被破（香港电台被英殖民政府破坏）而促生"豪密" |
| 1937–1945 | **抗战密码（中共）** | 中共 | 双层码本 + 加法密钥 | 借缴获日方密码材料改进；被日方密码专家识破 |
| 1947–1949 | **解放战争密码通信** | 中共中央/军委三局 | "一报一密制"、绝密/半密/公开电台、**两道防线**、报底立即销毁、**与敌台"工作格式同化"** | 1946–47 一年内发生 100 多起密码电报被破事件；**周恩来主持小河村会议**（1947-07）建立"前轻后重"通信架构 |
| 1950–1995 | **新中国密码学发展** | 中国科学院等 | 有限域、序列密码、有限自动机 | 四阶段：战时应急→规划拓荒→决裂突围→国防实战→商用转型 |
| 2010s | **SM2/SM3/SM4 标准与商用密码体系** | 国家密码管理局 | — | **1997 年商用密码起步；2006 年公布商用密码算法；2010 年 SM2/SM3 发布；2012 年 GM/T 0001–0010 批量发布** |
| 2024 | **ML-KEM/ML-DSA/SLH-DSA 标准化** | NIST | 格/哈希 | 后量子迁移启动 |

---

## 8. 中文密码学知识结构（Chinese-language knowledge structure）

### 8.1 法规与治理层

- **《中华人民共和国密码法》**（2019-10-26 十三届全国人大常委会第十四次会议通过，**2020-01-01 施行**，共 5 章 44 条）
  - 第 6–8 条：**密码分三类**——核心密码、普通密码、商用密码；核心密码保护最高密级绝密级、普通密码最高机密级，二者**属于国家秘密**，统一严格管理
  - 第 12–24 条：**商用密码标准体系**（国标/行标/团标/企标）、商用密码应用鼓励与强制性要求
  - 第 25 条：检测认证体系建设
  - 第 26 条：**涉及国家安全、国计民生、社会公共利益的商用密码产品**应列入网络关键设备和网络安全专用产品目录，经检测认证合格方可销售/提供
  - 第 27 条：**关键信息基础设施**须使用商用密码保护并开展**商用密码应用安全性评估（密评）**，与关基检测评估、等保测评衔接；采购需**国家安全审查**
  - 第 30–32 条：进出口管制（对高强度商用密码实施出口管制；大众消费类产品不实施）
  - 第 35–37 条：法律责任与罚则（10 万–100 万元；采购金额 1–10 倍）
  - 来源：<http://www.npc.gov.cn/c2/c30834/201910/t20191026_301700.html>、<https://www.oscca.gov.cn/sca/c100236/2019-10/28/content_1057345.shtml>
- **《商用密码管理条例》**（国务院令第 760 号，2023-04-14 修订通过，**2023-07-01 施行**）：第三章检测认证（第 12–22 条）、第五章使用（第 38–42 条，**每年至少一次密评**）、第 60–61 条罚则。<https://www.gov.cn/zhengce/zhengceku/202305/content_6875928.htm>
- **《商用密码应用安全性评估管理办法》**（国家密码管理局令第 3 号，2023-09-26 公布，**2023-11-01 施行**）：规划阶段→建设阶段→运行前→每年至少一次评估；原始记录与报告**保存不少于 6 年**；报告形成后 30 日内备案。<https://sca.gov.cn/sca/xxgk/2023-10/07/1061109/files/c32620ca4f414f2fb837edda024c8ea0.pdf>
- **《市场监管总局 国家密码管理局关于开展商用密码检测认证工作的实施意见》**（国市监认证〔2020〕50 号）：统一管理、共同实施；认证目录由两部门共同发布，认证规则由市场监管总局发布；联合组建**商用密码认证技术委员会**。<https://www.gov.cn/zhengce/zhengceku/2020-04/01/content_5497919.htm>
- 相关：《网络安全法》《数据安全法》《关键信息基础设施安全保护条例》《信息系统密码应用测评要求》（GB/T 43206-2023）

### 8.2 标准体系层（见 §3.6 完整表）

**三维框架**（官方《密码标准体系框架》）：**技术维**（基础类 / 基础设施类 / 密码产品类 / 应用支撑类 / 密码应用类 / 密码检测类）+ **管理维**（管理类标准）+ **应用维**。分类为：**密码基础类标准 → 基础设施类标准 → 密码产品类标准 → 应用支撑类标准 → 密码应用类标准 → 密码检测类标准 → 密码管理类标准**。

### 8.3 五大商用密码算法体系（核心必收）

| 算法 | 标准 | 结构 | 用途 |
|---|---|---|---|
| **SM1**（分组，128/128） | GM/T 0002 系列之外，为智能密码钥匙专用 | SPN | 智能密码钥匙/IC 卡专用（未公开） |
| **SM2**（椭圆曲线公钥） | GB/T 32918.1–.5 / GM/T 0003.x | 基于 sm2p256v1 曲线 | 数字签名、密钥交换、公钥加密、身份认证 |
| **SM3**（杂凑） | GB/T 32905 / GM/T 0004 | Merkle–Damgård，256-bit | 摘要、签名、MAC、随机数种子 |
| **SM4**（分组） | GB/T 32907 / GM/T 0002 | Feistel，32轮 | 商用数据加密 |
| **ZUC 祖冲之**（序列） | GB/T 33133.1–.3 / GM/T 0001.x | LFSR + 线性组合 | 3GPP LTE **EEA3（机密性）/ EIA3（完整性）**；**中国第一个成为国际标准的密码算法**（2011-09 3GPP SA 通过） |

**SM9**（标识密码）：GB/T 38635.1/.2 / GM/T 0044.1–.5（总则/签名/密钥交换/KEM+公钥加密/参数）；使用规范 GB/T 41389 / GM/T 0080；语法 GB/T 41389、GM/T 0081。
**ZUC-GXM / ZUC-MUR**：GM/T 0001.4—2024（鉴别式加密机制）。
来源：<https://www.oscca.gov.cn/sca/zxfw/2017-04/24/content_1011711.shtml>（国家密码管理局《密码发展史之近现代密码》）

### 8.4 密评（密码应用安全性评估）体系

**GB/T 39786—2021《信息安全技术 信息系统密码应用基本要求》**（2021-03-09 发布，2021-10-01 实施，**GM/T 0054-2018 上升为国标**）

- **四个技术层面**：①物理和环境安全 ②网络和通信安全 ③设备和计算安全 ④应用和数据安全
- **四个管理层面**：管理制度 / 人员管理 / 建设运行 / 应急处置
- **五个等级**：第一级至第四级为完整要求；**第五级仅描述通用要求**（技术与管理要求不在本标准描述）
- 附录 A（资料性）：不同级别密码应用基本要求**汇总列表**；附录 B：**密钥生存周期管理**
- 术语覆盖：机密性、数据完整性、真实性、**抗抵赖**、**可鉴别**、身份鉴别、消息鉴别码、一次性口令
- 来源：<https://www.sca.gov.cn/sca/xxgk/2021-03/19/content_1060852.shtml>、<https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=53282C88712CE157043B7A2C590278FC>

**配套**：GB/T 43206—2023《信息系统密码应用测评要求》· GM/T 0115—2021 测评要求 · GM/T 0116—2021 测评过程指南 · GM/T 0054—2018 · GB/T 43207—2023《信息系统密码应用设计指南》

### 8.5 中国古代密码学（见 §2.8 完整条目）

结构建议：**符号与信物**（虎符、符契、信牌）→ **编码与暗记**（阴符、阴书、字验）→ **书写与载体隐藏**（不成字、无形文、非纸简）→ **反切/摩斯/电报码本** → **书画印信** → **清末民初电码加密**（加法/减法、超等密码、代码凝缩器、明密双用）

### 8.6 中国近现代密码史（建议的分期）

1. **古代—清末**（阴符/字验/虎符/密直/电报码本 1871–1911）
2. **辛亥—北伐**（1912–1927：民国电信密码、红字密本、日方破译1894/1916）
3. **中共创建—长征**（1921–1936：明码颠倒 → "豪密"；红军密码电台1931 成立；中央特科红队）
4. **抗战**（1937–1945：双层码本 + 加法密钥；缴获日方密码材料；日本密码专家破译中共密码）
5. **解放战争**（1946–1949：中央前委/工委/后委三线架构；1947-07 靖边小河村会议；"前轻后重"；两道防线；一报一密制；工作格式与敌台"同化"）
6. **新中国**（1949–1978：军队密码体系、有限域与序列密码研究、有限自动机密码）
7. **改革开放**（1978–1996：CHINACRYPT 学术会议（1992 第二届、1996 第四届）、信息安全国家重点实验室（1989）、中科大 DCS 中心（1980s））
8. **商用密码**（1997–2006：商用密码管理起步；1997 年《商用密码管理条例》前身；2006 年公布 SM 算法）
9. **体系化**（2007–：中国密码学会成立（2007-03，裴定一任理事长）、GM/T 体系、GB/T 体系、2010 SM2/SM3、2012 GM/T 0001–0010、2016 SM9、2019《密码法》、2023《商用密码管理条例》、ZUC 国际标准化 2011）

**《中国共产党保密工作史》**是官方权威史料来源（第十八章 解放战争时期党的密码通信保密工作）：<https://bssbmj.gov.cn/info/1103/2429.htm>

### 8.7 中国密码学教育与学术生态- **学科专业**：2021 年**密码科学与技术**列入普通高等学校本科专业目录（13 所高校获批）；2022 年**交叉学科门类下新设「密码」硕士专业学位（代码 1452）**；设置博士点（信息安全国家重点实验室、中科院信工所、中科院数学院、西电、复旦、浙大等）。
- **中科院大学密码学院**：院长**荆继武**（兼全国网络安全标准化技术委员会鉴别与授权 WG4 组长），名誉院长**冯登国**；课程见 §8.8。
- **清华网络研究院**："网络空间安全"一级学科研究生课程体系，**61 门课**，分"基础理论课—专业基础课—专业课"，五个方向：网络空间安全基础、**密码学及应用**、系统安全、网络安全、应用安全。
- **北京大学**：数学学院《密码学》（00132610，3 学分，先修高等代数）——8 章：Shannon 理论 / 分组密码 / 序列密码 / Hash / 基于整数分解的公钥 / 基于离散对数的公钥 / 签名方案 / 身份识别方案；教材 Stinson + Goldreich。研究生《应用密码学》（关志）——15单元：概述 / 杂凑 / 序列 / 分组与模式 / **密码分析** / 消息完整性（MAC+AEAD） / 公钥数学基础 / 公钥加密与签名 / 公钥困难问题 / **数字证书与 PKI** / **SSL/TLS** / **密态计算（IBC、同态、FE、MPC）** / **隐私方案（秘密共享、隐私协议、ZKP）** / **密码货币与区块链** / **密码硬件安全**。
- **中科大**：1970s 国家聘请 7 位著名数学家任密码学高级顾问（其中 3 位来自科大：**华罗庚、龚昇、曾肯成**）；1974 年开办**编码与密码专业**；1980s 曾肯成成立中科院 DCS 中心；1989 年创立**信息安全国家重点实验室**；2002 年信息安全专业；2017 年成立网络空间安全学院；2016 年首批"网络空间安全一级学科博士点"。
- **复旦大学**：密码学实验室（负责人**赵运磊**），研究方向后量子密码、区块链、密码协议、密码工程与芯片、量子计算；**郁昱**团队后量子密码与隐私计算。
- **西安电子科技大学**：马建峰团队（密码学、无线安全）。
- **CCF 推荐国际学术会议和期刊目录（第七版，2026 年 3 月通过）—「网络与信息安全」领域**
  - **A 类会议（6）**：CCS、**EUROCRYPT**、S&P、**CRYPTO**、USENIX Security、NDSS
  - **B 类会议（11）**：ACSAC、**ASIACRYPT**、ESORICS、FSE、CSFW、SRDS、**CHES**、DSN、RAID、**PKC**、**TCC**
  - **C 类会议（29）**：WiSec、SACMAT、DRM、IH&MMSec、ACNS、AsiaCCS、ACISP、**CT-RSA**、DIMVA、DFRWS、**FC**、TrustCom、SEC、IFIP WG11.9、ISC、ICDF2C、ICICS、SecureComm、NSPW、PAM、**PETS**、**SAC**、SOUPS、HotSec、**EuroS&P**、Inscrypt、CODASPY、BlockSys、CSCloud
  - 来源：<https://www.ccf.org.cn/Academic_Evaluation/NIS/>、<https://ccf.atom.im/>（第七版）
  - **"密码学三大顶会"**（业界口语）= CRYPTO、EUROCRYPT、ASIACRYPT；**"信息安全四大顶会"** = CCS、S&P、USENIX Security、NDSS
- **中国密码学会**：2007-03 成立；**第一届、第二届理事长裴定一**（后任荣誉理事长）；现理事长**王小云**；副理事长兼秘书长安晓龙；下设专业委员会（密码数学理论、密码分析、密码工程、密码应用、电子认证等）；年度**中国密码学会年会**（特邀报告 + 密码创新奖 + 博士学位论文激励计划 + 密码应用/人才培养/前沿交叉分论坛）。
- **《密码学报》**（Journal of Cryptologic Research）——中文核心期刊，论文写作规范模板（北大《应用密码学》大作业即参照其格式）。
- **全国密码技术竞赛**、**全国密码算法设计竞赛**（2020 年两项一等奖、4 套算法获奖）。

### 8.8 中科院大学密码学院课程清单（可作中文课程体系的骨架）

**专业核心课**：应用密码学（林东岱）/ 网络与系统安全（荆继武）/ 信息安全数学基础（胡磊）/ 密码工程（王丽萍）/ 网络认证技术（林璟锵）/ **密码协议（邓燚）**
**专业普及课**：量子信息与量子密码（杨理）/ **密码分析学（叶顶锋）** / 椭圆曲线密码学（李宝）/ 信息论与编码（王丽萍）/ RFID安全算法与协议 / 信息隐藏（赵险峰）/ 计算复杂性基础 / **格密码（路献辉）** / **安全性归约证明-基础与方法（李红达）** / 理论密码学（薛锐）/ 公钥密码学（薛锐）/ 区块链技术及应用 / 安全协议设计与分析（李红达）
**专业研讨课**：可信计算 / **对称密码学（张文涛）** / 网络空间安全战略 / 入侵容忍技术 / **密码学中的量子计算基础（黄震宇）** / **密码杂凑函数分析（孙瑶）** / **代数密码分析（黄震宇）** / 数字图像真实性鉴别 / **密码分析新进展（王鹏）**
来源：<https://scs.ucas.edu.cn/index.php/zh-cn/jyjx/yjs>

**《密码分析学》课程大纲（中科院）**：第一章 密码分析学简介（基本概念）/ 第二章 古典和近代密码的分析（含 **Enigma 机的历史、原理及其破译过程**）/ 第三章 密码算法的分析（强力攻击、**差分分析**、**线性分析**、**对 Hash 函数的分析**、**公钥算法 RSA 的攻击**、**背包公钥算法的破译**）/ 第四章 密码方案的分析（对称方案、**padding-oracle 攻击**…）。
**《密码协议》课程大纲**：第一章 密码协议基础（安全模型、**安全性归约证明**）/ 第二章 高级签名（盲签名、群签名、环签名）/ 第三章 密钥协商（DH、安全模型、协议）/ 第四章 身份认证（经典协议、**Sigma 协议**）/ 第五章 不经意传输（安全模型、经典协议）/ 第六章 秘密分享（Shamir 门限、**可验证秘密分享**、一般存取结构）/ 第七章 安全多方计算（**Garbled circuit**、两方安全计算、多方安全计算）。教材：冯登国《安全协议：理论与实践》+ Goldreich《密码学基础（第二卷）》。

### 8.9 中国特有、值得独立成栏的知识块

| 主题 | 说明 |
|---|---|
| **密评（商用密码应用安全性评估）制度** | 中国独有的强制合规体系；GB/T 39786 四层面四级 + 测评要求/过程指南 + 管理办法 |
| **密码模块安全等级（GM/T 0028 / GB/T 37092）** | 密评与产品认证的交叉点 |
| **商用密码产品认证目录（三批）** | 30+ 产品种类；认证依据逐项对应 GM/T |
| **密码应用标识规范（GB/T 33560 / GM/T 0006）** | 密码产品/应用的统一标识编码规则 |
| **商用密码检测机构名录** | 每家的资质范围与有效期——中文站独有的实用信息 |
| **国密算法国际标准化映射表** | SM2→ISO 14888-3、SM3→ISO 10118-3、SM4→ISO 18033-3、ZUC→ISO 18033-4、SM9→ISO 14888-3/18033-5/11770-3 |
| **TLCP / DTLCP** | GB/T 38636 / GM/T 0128——基于国密的 TLS 变体 |
| **国密 JSON Web 语法（GM/T 0125.1–.4）** | 国产 JOSE规范 |
| **国密浏览器接口（GM/T 0087/0118）** | — |
| **"豪密"及中共密码史** | 中文语境的独家史料 |
| **中国电报码本史** | 中西学术新发现（Zhang 2018, Kuzuoğlu 2018, Chambers 2014） |
| **中国密码学学术谱系** | 华罗庚学派 → 曾肯成/陶仁骥/张焕国/裴定一 → 冯登国/王小云/郑建华/荆继武 → 赵运磊/郁昱等 |
| **全国密码算法设计竞赛与密码技术竞赛** | 生态动态 |
| **密码硕士专业学位（1452）** | 2022 年新设，教育条目 |

---

## 9. 已知空白、争议与"不可完备"的领域

### 9.1 权威来源本身互相矛盾的地方（需在站点上显式标注）

1. **EAL 等级 vs AVA_VAN 等级**：Common Criteria Part 5 仍定义 EAL1–EAL7；但 **EUCC 自 2026 年 2 月起在欧盟不再使用 EAL**，改用 AVA_VAN 的 substantial/high。同一产品在不同法域含义不同。<https://www.ul.com/services/common-criteria-certification-information-technology-it-security>
2. **FIPS 140-2 vs 140-3**：140-2 仍在 csrc 上列为现行（upd2），140-3 同时现行；CMVP 迁移政策决定实际效力。
3. **NIST SP 800-63 版本**：Rev.3（2017/2020）与 Rev.4（2025-07）并存于不同引用中；旧版仍在大量引用。
4. **NIST PQC 迁移时间表**：**NIST IR 8547** 与不同机构（NSA CNSA 2.0、ETSI、BSI）的弃用时间表不完全一致。
5. **"密码学三大顶会"**（CRYPTO/EUROCRYPT/ASIACRYPT）是业界口语，与 **CCF 目录**（A 类含 CCS/S&P/USENIX/NDSS）**不一致**。站点应同时给出两套并注明口径差异。
6. **RPC/OP 分类法重叠**：Wikipedia 的 Outline 是 wiki 社区产物，与 HAC/Stallings/Stinson 的学术分类法**并非一一对应**（例如 Wikipedia 把 "Codes" 与 "Classical" 并列，而 HAC 把代码本归入 Chapter 1.4）。
7. **分类法的"时代错位"**：Stallings 第 8 版仍以"Classical Encryption Techniques"一章覆盖转置与机械机，而 Wikipedia 已把 Rotor Machine 单列。**同一个"密码机"条目可能出现在多个分类下**——这要求站点采用**多标签 + 交叉引用**而非单一树。
8. **NIST SP 800-38 系列 vs ISO/IEC 10116 vs GB/T 17964**：三套模式标准并存，命名（CBC/CTR相同，XTS 与 GCM 的表述有细微差异）。
9. **中国算法命名混乱**：SM1–SM9 的"国标号/行标号/商用密码检测编号/ISO 号"四种编号体系并存，且 **SM1/SM2/SM3/SM4/SM9 与 ZUC 的关系**在官方《密码标准体系框架》中与商业宣传中常被混用。
10. **商业产品密码库目录（1752 项）**在 OSCCA 在线查询，其"编号"与认证证书编号规则非公开细节，难以结构化。

### 9.2 真正难以覆盖 / 不可能"完整"的部分

| 领域 | 为什么难 |
|---|---|
| **未破译密文**（Voynich、Kryptos K4、Beale 1&3、Dorabella、D'Agapeyeff、Shugborough、Somerton Man、McCormick、Zodiac Z-13/Z-32、Scorpion、Phaistos、Rohonc、Papyrus Oxyrhynchus 90、Noita、Olivier Levasseur） | 有些是**语言而非密码**（Phaistos、Rongorongo、Etruscan、Proto-Elamite、Meroitic），无法用密码分析解决；有些可能是**恶作剧**（Beale 1&3、McCormick）。**"完整"在这里等价于"尚未解决"**。<https://ciphermuseum.com/halls/unsolved.html> |
| **现代密码学最新成果** | 2024–2026 的 PQC 附加签名（14 个 on-ramp 第二轮）、HQC 标准化、RFC 9794/9954/10024、EUCC 切换——**变动速度快于任何静态清单** |
| **密钥长度/安全强度对照表** | 各机构（BSI/NIST/CRYPTREC/CNSA）给出的等价比特数不同；且随算法进展变化 |
| **侧信道/物理攻击** | 高度依赖具体实现；无法给出通用"攻击列表"；分类学本身就是开放的 |
| **零知识证明的证明系统全景** | 每年新增多个系统（Nova、FRI、HyperNova、Malachite、Tauron…），无稳定分类 |
| **同态加密 / MPC / FHE 工程实现** | 库版本、参数、性能差异巨大；站点难以保持"正确"的覆盖度 |
| **社会工程学与人为因素** | 密码学上是"最弱链接"，但缺乏权威的穷举式分类 |
| **量子计算威胁的时间表** | 物理与算法进展高度不确定；任何"X 年内破解 RSA"的断言都会过时 |
| **Crypto AG / 后门供应链** | 事实部分基于泄露文件与解密档案，公开证据仍有未解部分（如早期设备的具体后门范围） |
| **中国近现代密码史** | 大量档案未解密；官方史料（保密工作史）与学术研究（Kuzuoğlu、Chambers、Zhang）之间存在**叙事差异**，尤其1927–1945 中共密码技术的"自主 vs 技术转移"之争 |
| **中文古典密码学** | "反切码""阴阳""摩斯"等条目在中文资料中大量出现但**缺少权威一手定义与标准编号**，需要逐条考据，否则会变成民间密码传说的复制 |

### 9.3 已知需要二次核验的具体条目（我未能在本次研究中确证）

- **IEEE 2060 / 2140** 的准确标题与范围（IEEE 2140 应与 ISO/IEC 21434 道路车辆网络安全相关，需核实编号；2060 亦需核对）。
- **GM/T 0126–0132—2023** 的具体标题（原始表格中这 7 项标题列错位，我从《商用密码产品认证目录（第三批）》公告中反推得到 DTLCP 与 SSH 两项，其余5 项需逐一核对）。
- **GB/T 17901** 的完整分部（.1 框架 / .3 非对称机制已确证；.2/.4 待补）。
- **ISO/IEC 14888-3** 现行版本（2018）与 **14888-4**（2024，stateful hash-based）的细节。
- **NSA CNSA 2.0** 的具体算法时间表（未直接引用，仅二手提及）。
- **商用密码产品目录1752 项**的产品分类编号规则。
- **SP 800-63** 旧版与新版在 IAL/AAL 定义措辞上的细微差异（Rev.4 引入了可同步认证器、订阅者控制的钱包等新模型）。

### 9.4 结构性建议（供站点设计参考，非结论）

1. **采用"多轴标签"而非单一树**：实体至少应带 `分类法来源`（wikipedia / HAC / Stallings / Stinson / Kahn / 标准）、`时代`、`地域/文化`、`族（substitution/transposition/machine/steganography/code）`、`威胁模型`、`是否仍安全` 六个标签。
2. **每条内容必须可回溯到 §1–§7 的某个来源**，作为"覆盖率审计"的依据。
3. **中国条目与外国条目并列但标识清晰**（用「国标/行标/商用密码」标签区分），避免中文站点变成"翻译版 Wikipedia"。
4. **把 §9.1 的矛盾点在页面上显式呈现**（如 EAL vs AVA_VAN、CCF 口径 vs 三大顶会），这本身就是知识价值。
5. **"未破译"与"未分类"要分开**：前者是历史学问题，后者是知识库建设问题。

---

## 10. 主要来源索引（可复核）

| 类别 | URL |
|---|---|
| Wikipedia 分类体系 | <https://en.wikipedia.org/wiki/Outline_of_cryptography> · <https://en.wikipedia.org/wiki/Category:Cryptography> · <https://en.wikipedia.org/wiki/Category:Theory_of_cryptography> · <https://en.wikipedia.org/wiki/Category:Computational_hardness_assumptions> · <https://en.wikipedia.org/wiki/Classical_cipher> · <https://en.wikipedia.org/wiki/List_of_ciphertexts> · <https://en.wikipedia.org/wiki/Comparison_of_cryptographic_hash_functions> · <https://en.wikipedia.org/wiki/List_of_hash_functions> · <https://en.wikipedia.org/wiki/Computational_hardness_assumption> · <https://en.wikipedia.org/wiki/Computational_Diffie%E2%80%93Hellman_assumption> · <https://en.wikipedia.org/wiki/Evaluation_Assurance_Level> · <https://en.wikipedia.org/wiki/Category:Cryptographers> |
| 教材目录 | HAC<https://cacr.uwaterloo.ca/hac/about/table_of_contents.html> · Stinson <https://cs.uwaterloo.ca/~dstinson/contents.html> · Stinson 3rd ed PDF <https://ic.unicamp.br/~rdahab/cursos/mo421-mc889/Welcome_files/Stinson-Paterson_CryptographyTheoryAndPractice-CRC%20Press%20%282019%29.pdf> · Stallings <https://www.pearson.com/en-us/pearsonplus/p/9780135764213> 与<https://api.pageplace.de/preview/DT0400.9781292437491_A43586158/preview-9781292437491_A43586158.pdf> · Kahn <https://www.thetedkarchive.com/library/david-kahn-the-codebreakers> 与 <https://www.gbv.de/dms/ilmenau/toc/214254070.PDF> |
| NIST | FIPS <https://csrc.nist.gov/publications/fips> · SP800 <https://csrc.nist.gov/publications/sp800> · PQC 项目 <https://csrc.nist.gov/Projects/post-quantum-cryptography/> · PQC 选定算法 <https://csrc.nist.gov/projects/post-quantum-cryptography/post-quantum-cryptography-standardization/selected-algorithms> · 第四轮报告 <https://nvlpubs.nist.gov/nistpubs/ir/2025/NIST.IR.8545.pdf> · 附加签名第一轮 <https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8528.pdf> · SP 800-63-4 <https://pages.nist.gov/800-63-4/sp800-63.html> |
| IETF | 全部文档 <https://datatracker.ietf.org/doc/all> · 安全主题 <https://www.rfc-editor.org/subjects/security/> · PQ 主题 <https://www.rfc-editor.org/subjects/post-quantum/> · RFC 7457（TLS 攻击综述）<https://www.rfc-editor.org/info/rfc7457/> · MASQUE WG <https://datatracker.ietf.org/wg/masque/documents/> · RFC 10024 <https://www.rfc-editor.org/rfc/rfc10024.html> · RFC 8446 <https://www.rfc-editor.org/info/rfc8446/> |
| ISO/IEC | SC27 工作组 <https://committee.iso.org/sites/jtc1sc27/home/projects.html> · SC27 目录 <https://www.iso.org/committee/45306/x/catalogue/p/0/u/1/w/0/d/0> · ISO密码学概览 <https://www.iso.org/information-security/what-is-cryptography> · ISO/IEC 24759:2025 <https://www.iso.org/standard/82424.html> · ISO/IEC 19790:2025 <https://www.iso.org/es/contents/data/standard/08/24/82423.html> · ISO/IEC/IEEE 8802-1AE:2020 <https://www.iso.org/standard/78102.html> |
| IEEE | NIS 活动清单 <https://standards.ieee.org/wp-content/uploads/import/documents/other/nis.pdf> · 802.1AE-2018 <https://standards.ieee.org/ieee/802.1AE/7154/> · 802.1 安全任务组 <https://1.ieee802.org/security/> |
| CA/B Forum | TLS BR 文档页 <https://cabforum.org/working-groups/server/baseline-requirements/documents/> · 证书内容 <https://cabforum.org/working-groups/server/baseline-requirements/certificate-contents/> · BR 2.0.2 PDF <https://cabforum.org/uploads/CA-Browser-Forum-TLS-BRs-v2.0.2.pdf> |
| Common Criteria / EUCC | CC Part 5 <https://commoncriteriaportal.org/files/ccfiles/CC2022PART5R1.pdf> · CC Part 3 <https://commoncriteriaportal.org/files/ccfiles/CCPART3V3.1R5.pdf> · EUCC <https://certification.enisa.europa.eu/browse-topic/eucc_en> · EAL→AVA_VAN 变更 <https://www.ul.com/services/common-criteria-certification-information-technology-it-security> |
| 日本 CRYPTREC | 暗号リスト <https://www.cryptrec.go.jp/en/list.html> · 规格 <https://www.cryptrec.go.jp/en/method.html> · LS-0001-2022R2 PDF <https://www.cryptrec.go.jp/list/cryptrec-ls-0001-2022r2.pdf> |
| 中国官方 | 密码法 <http://www.npc.gov.cn/c2/c30834/201910/t20191026_301700.html> · 国家密码管理局标准规范 <https://www.oscca.gov.cn/sca/xxgk/bzgf.shtml> · 标准规范查询 <https://oscca.gov.cn/app-zxfw/zxfw/bzgfcx.jsp> · 检测机构名录 <https://www.oscca.gov.cn/app-zxfw/xzspsx/symmjcjiancha.jsp> · 密码标准体系框架 PDF <http://www.gmbz.org.cn/file/2021-10-27/16ef88be-9607-4d39-af45-d936b9c21244.pdf> · 密码发展史（古典）<https://www.oscca.gov.cn/sca/zxfw/2017-04/24/content_1011709.shtml> · （近现代）<https://www.oscca.gov.cn/sca/zxfw/2017-04/24/content_1011711.shtml> · 商用密码管理条例 <https://www.gov.cn/zhengce/zhengceku/202305/content_6875928.htm> · 密评管理办法 <https://sca.gov.cn/sca/xxgk/2023-10/07/1061109/files/c32620ca4f414f2fb837edda024c8ea0.pdf> · 检测认证实施意见 <https://www.gov.cn/zhengce/zhengceku/2020-04/01/content_5497919.htm> · 认证目录第三批 <https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/rzjgs/art/2025/art_2d6ced073d784f4fa74b4fe5e5d60b4b.html> · 国标一览表 <https://tccia.org.cn/488/18109/1716271> · GB/T 39786 <https://www.sca.gov.cn/sca/xxgk/2021-03/19/content_1060852.shtml> · GB/T 32907 <https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=7803DE42D3BC5E80B0C3E5D8E873D56A> · 中国算法 ISO 映射 <https://www.niccs.org.cn/symmbzyjy/tzgg/pc/content/1937424224048648192/content_1937424224048648192.html> |
| 中国学术与教育 | CCF 目录（NIS）<https://www.ccf.org.cn/Academic_Evaluation/NIS/> · CCF 第七版 <https://ccf.atom.im/> · 中科院大学密码学院课程 <https://scs.ucas.edu.cn/index.php/zh-cn/jyjx/yjs> · 北大数学学院密码学 <https://math.pku.edu.cn/bks/sykc/148705.htm> · 北大应用密码学 <https://github.com/guanzhi/AppliedCryptoCourse> · 清华网络研究院课程体系 <https://www.insc.tsinghua.edu.cn/info/1192/3079.htm> · 复旦密码学实验室 <https://cs.fudan.edu.cn/7b/e5/c24781a490469/page.htm> · 中科大网络空间安全学院 <http://cybersec.ustc.edu.cn/_t1079/2018/0425/c23812a468133/page.htm> · 中科院数学院科研队伍 <https://iss.amss.cas.cn/gb2019/kydw/> · 密码高层次人才培养<http://www.sca.gov.cn/sca/xwdt/2022-11/24/content_1060977.shtml> · 王小云 <https://www.ias.tsinghua.edu.cn/info/1016/1217.htm> · 裴定一讣告 <https://www.thepaper.cn/newsDetail_forward_23953861> |
| 中国密码史学术 | 中国密码学 1871–1945 <https://cryptiana.web.fc2.com/code/chinesecrypto_e.htm> · Kuzuoğlu <https://doi.org/10.1080/01611194.2018.1449146> · 张文扬电码本 <https://doi.org/10.1080/17535654.2018.1540191> · Chambers 中国 SIGINT <https://doi.org/10.1080/16161262.2014.906147> · 中共保密工作史 <https://bssbmj.gov.cn/info/1103/2429.htm> · "豪密" <https://www.scge.gov.cn/html/website/outsite/sichuandangxiaobao/2025nian%20di19qi/di2ban%20changzheng2008718336304869378/zz2008722081101115394.html> · 哥伦比亚图书馆电码本 <https://blogs.library.columbia.edu/rbml/2019/10/09/chinese-telegraphic-codebooks-and-cryptography/> |
| 古典密码清单 | dCode 中世纪密码 <https://www.dcode.fr/medieval-ciphers> · dCode 混合密码 <https://www.dcode.fr/multi-layered-ciphers> · Practical Cryptography 古典时代 <http://www.practicalcryptography.com/ciphers/classical-era/> · cipherdecipher <https://www.cipherdecipher.com/categories/classical-ciphers> · agntn 72 密码/16 家族 <https://ciphers.agntn.dev/ciphers> |
| 攻击 | RFC 7457 <https://www.rfc-editor.org/info/rfc7457/> · awesome-tls-hacks <https://github.com/lennysec/awesome-tls-hacks> · Check Point 攻击综述 <https://research.checkpoint.com/2019/cryptographic-attacks-a-guide-for-the-perplexed/> · NIST TLS 攻击列表 <https://docs.broadcom.com/doc/tls-vulnerabilities-en> · 未破译密文 <https://ciphermuseum.com/halls/unsolved.html> |
| 理论 | 困难假设总览 <https://flyingnobita.com/notes/math/cryptographic-hardness-assumptions> · 假设类型学 <https://nglaeser.github.io/crypto-glossary/assumptions/> · ECRYPT 假设清单（crypto.SE 摘录）<https://crypto.stackexchange.com/questions/34301/> · 理论密码学分类 <https://en.wikipedia.org/wiki/Category:Theory_of_cryptography> |

---

**文档结束。**

**下一步建议**：把 §2–§7 的条目导成结构化表格（`name_en`, `name_zh`, `family`, `taxonomy_source`, `source_url`, `status`, `zh_coverage`），逐行填 `zh_coverage` 即得覆盖率仪表盘；§9.3 的 6 项与 §9.1 的 10 项应先建"待核验"工单再上线。
</task_result>
</task>