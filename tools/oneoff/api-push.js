#!/usr/bin/env node
/* ============================================================
   api-push.js —— 经 GitHub API 推送（git-over-HTTPS 不通时的替代路径）
   用法：GITHUB_TOKEN=xxx node tools/oneoff/api-push.js [owner/repo] [branch]
   原理：拉远端树 → 逐文件比对 git blob sha → 差异项建 blob → tree → commit → ref
        不依赖本地 git 历史（本地与远端可能已分叉）
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) { console.error('缺少 GITHUB_TOKEN'); process.exit(1); }
const repoArg = process.argv[2] || 'poyinet/cryptography-decode-history';
const BRANCH = process.argv[3] || 'main';
const [OWNER, REPO] = repoArg.split('/');
const ROOT = path.resolve(__dirname, '..', '..');
process.chdir(ROOT);

function api(method, p, body) {
  return new Promise((resolve, reject) => {
    const data = body ? Buffer.from(typeof body === 'string' ? body : JSON.stringify(body), 'utf8') : null;
    const req = https.request({
      hostname: 'api.github.com', path: p, method,
      headers: {
        'Authorization': 'Bearer ' + TOKEN, 'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'poyi-api-push',
        'Content-Type': 'application/json', ...(data ? { 'Content-Length': data.length } : {})
      }
    }, res => {
      let b = '';
      res.on('data', c => b += c);
      res.on('end', () => {
        let j = null; try { j = b ? JSON.parse(b) : null; } catch (e) { }
        if (res.statusCode >= 400) reject(new Error(method + ' ' + p + ' → ' + res.statusCode + ' ' + b.slice(0, 240)));
        else resolve(j);
      });
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

(async function main() {
  console.log('== 1. 读取远端基线 ==');
  let baseTree = null, baseCommit = null, remoteMap = new Map();
  try {
    const ref = await api('GET', '/repos/' + OWNER + '/' + REPO + '/git/ref/heads/' + BRANCH);
    baseCommit = ref.object.sha;
    const c = await api('GET', '/repos/' + OWNER + '/' + REPO + '/git/commits/' + baseCommit);
    baseTree = c.tree.sha;
    const t = await api('GET', '/repos/' + OWNER + '/' + REPO + '/git/trees/' + baseTree + '?recursive=1');
    for (const n of (t.tree || [])) if (n.type === 'blob') remoteMap.set(n.path, n.sha);
    console.log('  远端 HEAD ' + baseCommit.slice(0, 10) + ' · ' + remoteMap.size + ' 个文件');
  } catch (e) {
    console.log('  远端无分支，将创建：' + e.message.slice(0, 60));
  }

  console.log('== 2. 列出本地应跟踪的文件 ==');
  const tracked = execSync('git ls-files', { encoding: 'utf8' }).split('\n').map(s => s.trim()).filter(Boolean);
  const local = tracked.filter(f => fs.existsSync(f) && fs.statSync(f).isFile());
  console.log('  本地跟踪 ' + local.length + ' 个文件');

  console.log('== 3. 比对差异 ==');
  const changed = [];
  for (const f of local) {
    let sha;
    try { sha = execSync('git hash-object "' + f + '"', { encoding: 'utf8' }).trim(); } catch (e) { continue; }
    if (remoteMap.get(f) !== sha) changed.push(f);
  }
  console.log('  待推送 ' + changed.length + ' 个文件');
  if (!changed.length) { console.log('\n✓ 无差异，远端已是最新'); return; }

  console.log('== 4. 建 blob ==');
  const entries = [];
  for (const f of changed) {
    const buf = fs.readFileSync(f);
    const blob = await api('POST', '/repos/' + OWNER + '/' + REPO + '/git/blobs', {
      content: buf.toString('base64'), encoding: 'base64'
    });
    entries.push({ path: f, mode: '100644', type: 'blob', sha: blob.sha });
  }

  console.log('== 5. 建 tree + commit ==');
  const tree = await api('POST', '/repos/' + OWNER + '/' + REPO + '/git/trees', {
    base_tree: baseTree || undefined, tree: entries
  });
  const msg = (process.env.PUSH_MSG || 'chore: API 推送').slice(0, 200);
  const commit = await api('POST', '/repos/' + OWNER + '/' + REPO + '/git/commits', {
    message: msg, tree: tree.sha, parents: baseCommit ? [baseCommit] : []
  });

  console.log('== 6. 更新 ref ==');
  if (baseCommit) await api('PATCH', '/repos/' + OWNER + '/' + REPO + '/git/refs/heads/' + BRANCH, { sha: commit.sha, force: false });
  else await api('POST', '/repos/' + OWNER + '/' + REPO + '/git/refs', { ref: 'refs/heads/' + BRANCH, sha: commit.sha });

  console.log('\n✓ 推送完成 ' + (baseCommit ? baseCommit.slice(0, 10) : '(new)') + ' → ' + commit.sha.slice(0, 10));
  console.log('  ' + OWNER + '/' + REPO + '@' + BRANCH + '（' + changed.length + ' 个文件）');
  console.log('\n提示：本地 git 与远端已分叉，下次同步前先 `git fetch origin && git reset --hard origin/' + BRANCH + '`（会丢弃本地未推送的提交）。');
})().catch(e => { console.error('失败：' + e.message); process.exit(1); });
