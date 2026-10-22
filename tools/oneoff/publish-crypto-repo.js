#!/usr/bin/env node
/* ============================================================
   publish-crypto-repo.js —— 把 build/site/ 推送到 poyinet/crypto（分站产物仓）
   用法：node tools/oneoff/publish-crypto-repo.js
   环境：PUBLISH_TOKEN（GitHub PAT 或 Deploy Key 对应的 token）
        —— 建议用 Deploy Key + 专用只读/写权限的 fine-grained PAT
   策略：整树镜像删除+推送（Contents API 逐文件 PUT/DELETE）
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const https = require('https');

const TOKEN = process.env.PUBLISH_TOKEN || process.env.GITHUB_TOKEN;
const OWNER = process.env.PUBLISH_OWNER || 'poyinet';
const REPO = process.env.PUBLISH_REPO || 'crypto';
const BRANCH = process.env.PUBLISH_BRANCH || 'main';
const ROOT = path.resolve(__dirname, '..', '..');
const SRC = path.join(ROOT, 'build', 'site');

if (!TOKEN) { console.error('缺少 PUBLISH_TOKEN / GITHUB_TOKEN 环境变量'); process.exit(1); }
if (!fs.existsSync(SRC)) { console.error('build/site 不存在，请先运行 node tools/site/build.js'); process.exit(1); }

function api(method, p, body) {
  return new Promise((resolve, reject) => {
    const data = body ? Buffer.from(JSON.stringify(body), 'utf8') : null;
    const req = https.request({
      hostname: 'api.github.com', path: p, method,
      headers: {
        'Authorization': 'Bearer ' + TOKEN,
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'poyi-publisher',
        'Content-Type': 'application/json',
        ...(data ? { 'Content-Length': data.length } : {})
      }
    }, res => {
      let b = '';
      res.on('data', c => b += c);
      res.on('end', () => {
        let j = null;
        try { j = b ? JSON.parse(b) : null; } catch (e) { }
        if (res.statusCode >= 400) reject(new Error(method + ' ' + p + ' → ' + res.statusCode + ' ' + b.slice(0, 200)));
        else resolve(j);
      });
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

function walk(dir, base = '') {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? base + '/' + e.name : e.name;
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(abs, rel));
    else out.push({ path: rel, abs });
  }
  return out;
}

(async function main() {
  const local = walk(SRC);
  console.log('== 1. 本地产物 ==');
  console.log('  build/site 共 ' + local.length + ' 个文件');

  console.log('== 2. 远端现状 ==');
  let remote = [];
  try {
    const r = await api('GET', '/repos/' + OWNER + '/' + REPO + '/git/trees/' + BRANCH + '?recursive=1');
    remote = (r.tree || []).filter(x => x.type === 'blob' && x.path !== 'CNAME').map(x => x.path);
  } catch (e) { console.log('  远端树读取失败（首次发布？）: ' + e.message); }
  console.log('  远端 ' + remote.length + ' 个文件（CNAME 保留不动）');

  console.log('== 3. 推送 ==');
  let put = 0, del = 0, skip = 0;
  const remoteSet = new Set(remote);
  const localSet = new Set(local.map(f => f.path));

  for (const f of local) {
    const content = fs.readFileSync(f.abs);
    const body = {
      message: 'chore(build): 发布密码学知识站构建产物',
      content: content.toString('base64'),
      branch: BRANCH
    };
    if (remoteSet.has(f.path)) {
      // 已存在 → 需比对 sha 决定是否更新
      let cur = null;
      try { cur = await api('GET', '/repos/' + OWNER + '/' + REPO + '/contents/' + f.path + '?ref=' + BRANCH); } catch (e) { }
      if (cur && cur.sha) {
        const curBuf = Buffer.from(cur.content || '', 'base64');
        if (curBuf.equals(content)) { skip++; continue; }
        body.sha = cur.sha;
      }
    }
    await api('PUT', '/repos/' + OWNER + '/' + REPO + '/contents/' + f.path, body);
    put++;
  }

  // 删除远端有、本地无的（保留 CNAME）
  for (const p of remote) {
    if (localSet.has(p)) continue;
    try {
      const cur = await api('GET', '/repos/' + OWNER + '/' + REPO + '/contents/' + p + '?ref=' + BRANCH);
      if (!cur || !cur.sha) continue;
      await api('DELETE', '/repos/' + OWNER + '/' + REPO + '/contents/' + p, { message: 'chore(build): 移除已下线页面', sha: cur.sha, branch: BRANCH });
      del++;
    } catch (e) { /* 单个失败不阻断 */ }
  }

  console.log('  新增/更新 ' + put + ' · 删除 ' + del + ' · 未变 ' + skip);
  console.log('\n完成 → https://' + OWNER + '.github.io/' + REPO + '/  （自定义域 crypto.poyi.net）');
})().catch(e => { console.error('失败：' + e.message); process.exit(1); });
