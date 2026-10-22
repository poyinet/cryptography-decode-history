/* ============================================================
   crypto-subsite-bootstrap.js —— 初始化 poyinet/crypto 仓（分站产物仓）
   用法：node tools/oneoff/crypto-subsite-bootstrap.js
   环境：GITHUB_TOKEN 环境变量（不落盘）
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const https = require('https');

const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) { console.error('缺少 GITHUB_TOKEN 环境变量'); process.exit(1); }
const OWNER = 'poyinet';
const REPO = 'crypto';
const ROOT = path.resolve(__dirname, '..', '..');
const OUT = path.join(ROOT, 'build', 'crypto-repo');

function api(method, p, body) {
  return new Promise((resolve, reject) => {
    const data = body ? Buffer.from(JSON.stringify(body), 'utf8') : null;
    const req = https.request({
      hostname: 'api.github.com', path: p, method,
      headers: {
        'Authorization': 'Bearer ' + TOKEN,
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'poyi-deploy',
        'Content-Type': 'application/json',
        ...(data ? { 'Content-Length': data.length } : {})
      }
    }, res => {
      let b = '';
      res.on('data', c => b += c);
      res.on('end', () => {
        let j = null;
        try { j = b ? JSON.parse(b) : null; } catch (e) { }
        if (res.statusCode >= 400) reject(new Error(method + ' ' + p + ' → ' + res.statusCode + ' ' + b.slice(0, 300)));
        else resolve(j);
      });
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

function writeLocal(rel, content) {
  const abs = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content, 'utf8');
  return { path: rel, content };
}

(async function main() {
  console.log('== 1. 准备产物 ==');
  fs.rmSync(OUT, { recursive: true, force: true });
  const files = [];

  files.push(writeLocal('CNAME', 'crypto.poyi.net\n'));

  files.push(writeLocal('index.html', `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>crypto.poyi.net · 密码学知识站（建设中）</title>
<meta name="description" content="密码学知识站：三维知识晶格，按时代 / 技术 / 人物 / 物证 / 术语 / 标准多维展示，中英同步。">
<meta name="theme-color" content="#0a0a12">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔐</text></svg>">
<style>
  :root{--bg:#0a0a12;--fg:#e8e8f0;--dim:#8a8aa0;--cy:#00f0ff;--mg:#ff2d95}
  *{box-sizing:border-box}
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;
    background:radial-gradient(1200px 600px at 50% -10%,#16203a 0%,var(--bg) 60%);color:var(--fg);
    font-family:"PingFang SC","Microsoft YaHei",-apple-system,sans-serif;padding:24px}
  .box{max-width:640px;text-align:center}
  h1{font-size:clamp(28px,6vw,48px);margin:0 0 6px;letter-spacing:.02em;
    background:linear-gradient(92deg,var(--cy),var(--mg));-webkit-background-clip:text;background-clip:text;color:transparent}
  .en{font-size:12px;letter-spacing:.3em;color:var(--dim);text-transform:uppercase;margin-bottom:26px}
  p{line-height:1.85;color:#b8c6da;font-size:14px}
  .cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:26px;text-align:left}
  .c{border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:14px;background:rgba(255,255,255,.03)}
  .c h2{font-size:14px;margin:0 0 6px;color:var(--cy)}
  .c small{color:var(--dim);font-size:11.5px;line-height:1.6;display:block}
  .lattice{margin:26px auto 0;width:180px;height:180px;position:relative}
  .lattice i{position:absolute;width:7px;height:7px;border-radius:2px;background:var(--cy);box-shadow:0 0 10px var(--cy);animation:p 3.4s ease-in-out infinite}
  @keyframes p{0%,100%{transform:scale(1);opacity:.45}50%{transform:scale(1.7);opacity:1}}
  .foot{margin-top:30px;font-size:11.5px;color:var(--dim)}
  a{color:var(--cy)}
</style>
</head>
<body>
<div class="box">
  <div class="lattice" id="lat"></div>
  <h1>密码学知识站</h1>
  <div class="en">crypto.poyi.net · under construction</div>
  <p>本站是「破译 DECODE ARCADE」知识体系的知识面：把三千年的密码学按
     <b>时代 / 技术 / 人物 / 物证 / 术语 / 标准</b> 六个维度铺开，逐层钻取，可检索、可溯源、可按学习路径通读。
     知识源唯一，产物自动发布。</p>
  <div class="cards">
    <div class="c"><h2>三维知识晶格</h2><small>19 时代 × 24 技术域 × 实体层，交叉索引</small></div>
    <div class="c"><h2>多维多层次</h2><small>时代 / 域 / 应用 / 威胁模型 / 难度 / 层级 六轴标注</small></div>
    <div class="c"><h2>中英同步</h2><small>每条内容双语对齐，术语别名互通</small></div>
    <div class="c"><h2>可溯源</h2><small>每条实体都有可核查的纯文字出处</small></div>
  </div>
  <div class="foot">内容来源：<code>cryptography-decode-history</code> 知识源仓 · 持续构建中<br>
    主站 <a href="https://poyi.net">poyi.net</a>（密码学 3D 闯关游戏）</div>
</div>
<script>
  var lat = document.getElementById('lat');
  for (var i = 0; i < 24; i++) {
    var el = document.createElement('i');
    var a = i / 24 * Math.PI * 2, r = 60 + (i % 3) * 14;
    el.style.left = (90 + Math.cos(a) * r - 3.5) + 'px';
    el.style.top = (90 + Math.sin(a) * r - 3.5) + 'px';
    el.style.animationDelay = (i * 0.13) + 's';
    el.style.background = i % 7 === 3 ? '#ff2d95' : i % 7 === 5 ? '#9dff3e' : '#00f0ff';
    el.style.boxShadow = '0 0 10px ' + el.style.background;
    lat.appendChild(el);
  }
</script>
</body>
</html>
`));

  files.push(writeLocal('README.md', `# crypto.poyi.net — 密码学知识站（产物仓）

> 本仓是**编译产物**，内容由知识源仓 \`poyinet/cryptography-decode-history\` 的 CI 自动推送。
> **请勿手工修改本仓任何文件**——下次构建会覆盖。

- 域名：\`crypto.poyi.net\`（CNAME 已配置）
- 源：https://github.com/poyinet/cryptography-decode-history
- 构建契约见源仓 \`docs/BUILD-CONTRACT.md\`

许可：内容 CC BY 4.0 / 代码 MIT。
`));

  files.push(writeLocal('.nojekyll', ''));
  files.push(writeLocal('robots.txt', `User-agent: *
Allow: /
Sitemap: https://crypto.poyi.net/sitemap.xml
`));

  console.log('  本地产物 ' + files.length + ' 个文件 → ' + OUT);

  console.log('== 2. 创建/检查远端仓 ==');
  let repo = null;
  try {
    repo = await api('GET', '/repos/' + OWNER + '/' + REPO);
    console.log('  仓已存在: ' + repo.html_url + (repo.private ? '（private）' : ''));
  } catch (e) {
    console.log('  创建 ' + OWNER + '/' + REPO + ' …');
    repo = await api('POST', '/user/repos', {
      name: REPO, description: '密码学知识站 · crypto.poyi.net（构建产物，内容源自 cryptography-decode-history）',
      private: false, has_issues: true, has_wiki: false, auto_init: false
    });
    console.log('  已创建: ' + repo.html_url);
  }

  console.log('== 3. 推送初始提交（Contents API，空仓可用）==');
  const base = repo.default_branch || 'main';
  let pushed = 0;
  for (const f of files) {
    const body = {
      message: 'chore: bootstrap crypto.poyi.net 密码学知识站（构建产物仓初始提交）',
      content: Buffer.from(f.content, 'utf8').toString('base64'),
      branch: base
    };
    // 已存在则更新，否则新建
    let existing = null;
    try { existing = await api('GET', '/repos/' + OWNER + '/' + REPO + '/contents/' + f.path + '?ref=' + base); } catch (e) { }
    if (existing && existing.sha) body.sha = existing.sha;
    await api('PUT', '/repos/' + OWNER + '/' + REPO + '/contents/' + f.path, body);
    pushed++;
  }
  console.log('  已推送 ' + pushed + ' 个文件 → ' + repo.html_url + '/tree/' + base);
  console.log('\n完成。下一步：在 GitHub Pages 设置中启用，Pages 来源选该分支。');
})().catch(e => { console.error('失败：' + e.message); process.exit(1); });
