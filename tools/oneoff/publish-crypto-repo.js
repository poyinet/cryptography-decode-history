#!/usr/bin/env node
/* ============================================================
   publish-crypto-repo.js —— 把 build/site/ 镜像发布到 poyinet/crypto
   用法：PUBLISH_TOKEN=xxx node tools/oneoff/publish-crypto-repo.js
   原理：Git Trees API 一次性提交全部文件（树条目内联 content，服务端建 blob）
        → 一次 commit → 更新 ref。946 个文件只需 3 次 API 调用。
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const https = require('https');

const TOKEN = process.env.PUBLISH_TOKEN || process.env.GITHUB_TOKEN;
if (!TOKEN) { console.error('缺少 PUBLISH_TOKEN / GITHUB_TOKEN'); process.exit(1); }
const OWNER = process.env.PUBLISH_OWNER || 'poyinet';
const REPO = process.env.PUBLISH_REPO || 'crypto';
const BRANCH = process.env.PUBLISH_BRANCH || 'main';
const ROOT = path.resolve(__dirname, '..', '..');
const SRC = path.join(ROOT, 'build', 'site');
const KEEP = new Set(['CNAME']);   // 这些文件保留远端版本，不覆盖

function api(method, p, body) {
  return new Promise((resolve, reject) => {
    const data = body ? Buffer.from(typeof body === 'string' ? body : JSON.stringify(body), 'utf8') : null;
    const req = https.request({
      hostname: 'api.github.com', path: p, method,
      headers: {
        'Authorization': 'Bearer ' + TOKEN, 'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'poyi-publisher',
        'Content-Type': 'application/json', ...(data ? { 'Content-Length': data.length } : {})
      }
    }, res => {
      let b = '';
      res.on('data', c => b += c);
      res.on('end', () => {
        let j = null; try { j = b ? JSON.parse(b) : null; } catch (e) { }
        if (res.statusCode >= 400) reject(new Error(method + ' ' + p + ' → ' + res.statusCode + ' ' + b.slice(0, 260)));
        else resolve(j);
      });
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

(async function main() {
  if (!fs.existsSync(SRC)) { console.error('build/site 不存在——先运行 node tools/site/build.js'); process.exit(1); }

  console.log('== 1. 收集产物 ==');
  const files = [];
  (function walk(d, base) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const abs = path.join(d, e.name);
      const rel = base ? base + '/' + e.name : e.name;
      if (e.isDirectory()) walk(abs, rel);
      else files.push({ path: rel, abs, buf: fs.readFileSync(abs) });
    }
  })(SRC, '');
  console.log('  ' + files.length + ' 个文件');

  console.log('== 2. 读远端基线 ==');
  let baseTree = null, baseCommit = null;
  try {
    const ref = await api('GET', '/repos/' + OWNER + '/' + REPO + '/git/ref/heads/' + BRANCH);
    baseCommit = ref.object.sha;
    const c = await api('GET', '/repos/' + OWNER + '/' + REPO + '/git/commits/' + baseCommit);
    baseTree = c.tree.sha;
    console.log('  HEAD ' + baseCommit.slice(0, 10));
  } catch (e) { console.log('  远端无分支，将创建'); }

  console.log('== 3. 建树（内联 content，服务端建 blob）==');
  const tree = [];
  for (const f of files) {
    if (KEEP.has(f.path)) continue;
    const isText = /\.(html|css|js|json|xml|txt|md|webmanifest|svg)$/.test(f.path) && !f.buf.includes(0);
    tree.push({
      path: f.path, mode: '100644', type: 'blob',
      content: isText ? f.buf.toString('utf8') : f.buf.toString('base64'),
      encoding: isText ? 'utf-8' : 'base64',
    });
  }
  const t = await api('POST', '/repos/' + OWNER + '/' + REPO + '/git/trees', {
    base_tree: baseTree || undefined, tree
  });
  console.log('  树就绪');

  console.log('== 4. 提交 ==');
  const msg = (process.env.PUBLISH_MSG || 'chore(site): 发布密码学知识站构建产物').slice(0, 200);
  const commit = await api('POST', '/repos/' + OWNER + '/' + REPO + '/git/commits', {
    message: msg, tree: t.sha, parents: baseCommit ? [baseCommit] : []
  });

  console.log('== 5. 更新 ref ==');
  if (baseCommit) await api('PATCH', '/repos/' + OWNER + '/' + REPO + '/git/refs/heads/' + BRANCH, { sha: commit.sha, force: false });
  else await api('POST', '/repos/' + OWNER + '/' + REPO + '/git/refs', { ref: 'refs/heads/' + BRANCH, sha: commit.sha });

  console.log('\n✓ 发布完成 ' + (baseCommit ? baseCommit.slice(0, 10) : '(new)') + ' → ' + commit.sha.slice(0, 10));
  console.log('  ' + files.length + ' 个文件 → https://' + OWNER + '.github.io/' + REPO + '/  （自定义域 crypto.poyi.net）');
})().catch(e => { console.error('失败：' + e.message); process.exit(1); });
