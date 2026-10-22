/* ============================================================
   assets/crystal.js —— 三维知识晶格
   时代 × 技术域 × 实体：按轴排布的 3D 力导向晶格
   交互：拖动旋转 / 滚轮缩放 / 悬停高亮 / 点击下钻 / 图例筛选轴
   依赖：/assets/three.min.js（本地 UMD，无外链）
   ============================================================ */
(function () {
  'use strict';
  if (!window.THREE) return;
  var host = document.getElementById('crystal');
  var cv = document.getElementById('cv');
  if (!host || !cv) return;

  var COLORS = {
    era: 0x22e0ff, domain: 0xff4fa3, term: 0x9dff3e, person: 0xffc247,
    algorithm: 0xff8a3d, attack: 0xff4d5e, protocol: 0x7aa2ff, standard: 0x26e0d0,
    theorem: 0xb36cff, event: 0xffd54a, artifact: 0xff9d7a, machine: 0x8affc1,
  };
  var TYPE_ZH = {
    era: '时代', domain: '技术域', term: '术语', person: '人物', algorithm: '算法',
    attack: '攻击', protocol: '协议', standard: '标准', theorem: '定理', event: '事件',
    artifact: '密件', machine: '机器',
  };

  fetch('/data/graph.json').then(function (r) { return r.json(); }).then(function (G) {
    init(G);
  }).catch(function (e) {
    host.innerHTML = '<p class="muted" style="padding:20px">数据加载失败：' + esc(e.message) + '</p>';
  });

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]; }); }

  function init(G) {
    var W = host.clientWidth, H = Math.max(460, Math.min(720, window.innerHeight - 260));
    var renderer = new THREE.WebGLRenderer({ canvas: cv, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    renderer.setSize(W, H, false);
    renderer.setClearColor(0x0d0d1a, 1);

    var scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0d0d1a, 0.012);
    var cam = new THREE.PerspectiveCamera(52, W / H, 0.1, 900);
    scene.add(new THREE.AmbientLight(0x8090b0, 0.6));
    var key = new THREE.DirectionalLight(0xffffff, 0.9); key.position.set(20, 30, 20); scene.add(key);

    /* 时代环（内圈）· 技术域环（中圈）· 实体（外圈） */
    var group = new THREE.Group(); scene.add(group);
    var pickables = [], labelSprites = [];

    var eras = G.eras || [], doms = G.domains || [];
    var ER = 16, DR = 30, NR = 44;

    function ring(cnt, radius, y, color, size) {
      var g = new THREE.Group();
      for (var i = 0; i < cnt; i++) {
        var a = i / cnt * Math.PI * 2;
        var geo = new THREE.SphereGeometry(size, 16, 12);
        var mat = new THREE.MeshStandardMaterial({ color: color, emissive: color, emissiveIntensity: 0.55, roughness: 0.35, metalness: 0.5 });
        var m = new THREE.Mesh(geo, mat);
        m.position.set(Math.cos(a) * radius, y, Math.sin(a) * radius);
        m.userData = { kind: 'axis', id: '' };
        g.add(m); pickables.push(m);
      }
      group.add(g);
      return g;
    }
    ring(eras.length, ER, 0, 0x22e0ff, 1.5);
    ring(doms.length, DR, 0, 0xff4fa3, 1.2);

    /* 实体：按其所属域角度 + 时代角度插值摆放 */
    var pos = new Map();
    G.nodes.forEach(function (n, i) {
      var ei = eras.findIndex(function (e) { return e.id === (n.er && n.er[0]); });
      var di = doms.findIndex(function (d) { return d.id === (n.d && n.d[0]); });
      var ea = ei >= 0 ? ei / Math.max(1, eras.length) * Math.PI * 2 : 0;
      var da = di >= 0 ? di / Math.max(1, doms.length) * Math.PI * 2 : 0;
      var a = (ea + da) / 2 + (Math.random() - 0.5) * 0.16;
      var r = NR + Math.random() * 16;
      var x = Math.cos(a) * r, z = Math.sin(a) * r;
      var y = (Math.random() - 0.5) * 22;
      pos.set(n.id, new THREE.Vector3(x, y, z));
    });

    var geoNode = new THREE.SphereGeometry(0.72, 10, 8);
    G.nodes.forEach(function (n) {
      var c = COLORS[n.t] || 0xffffff;
      var mat = new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 0.5, roughness: 0.4, metalness: 0.4 });
      var m = new THREE.Mesh(geoNode, mat);
      m.position.copy(pos.get(n.id));
      m.userData = { kind: 'node', id: n.id, url: n.u, name: n.n, nameEn: n.ne, type: n.t };
      group.add(m); pickables.push(m);
    });

    /* 时代 / 域 的连线 */
    var lineMat = new THREE.LineBasicMaterial({ color: 0x2a3a5a, transparent: true, opacity: 0.55 });
    G.nodes.forEach(function (n) {
      (n.er || []).forEach(function (er) {
        var ei = eras.findIndex(function (e) { return e.id === er; });
        if (ei < 0) return;
        var a = ei / Math.max(1, eras.length) * Math.PI * 2;
        var p0 = new THREE.Vector3(Math.cos(a) * ER, 0, Math.sin(a) * ER);
        var g = new THREE.BufferGeometry().setFromPoints([p0, pos.get(n.id)]);
        group.add(new THREE.Line(g, lineMat));
      });
    });

    /* 图例 */
    var legend = document.getElementById('legend');
    if (legend) {
      var byType = {};
      G.nodes.forEach(function (n) { byType[n.t] = (byType[n.t] || 0) + 1; });
      legend.innerHTML = Object.keys(byType).map(function (t) {
        return '<span><i style="background:#' + (COLORS[t] || 0xffffff).toString(16).padStart(6, '0') + '"></i>' + (TYPE_ZH[t] || t) + ' ' + byType[t] + '</span>';
      }).join('');
    }

    /* 相机 */
    var ang = 0.7, elev = 0.42, dist = 92, tAng = ang, tElev = elev, tDist = dist;
    function place() {
      var ce = Math.cos(tElev);
      cam.position.set(Math.cos(tAng) * tDist * ce, Math.sin(tElev) * tDist, Math.sin(tAng) * tDist * ce);
      cam.lookAt(0, 0, 0);
    }

    /* 交互 */
    var drag = false, lx = 0, ly = 0, moved = 0;
    cv.addEventListener('pointerdown', function (e) { drag = true; moved = 0; lx = e.clientX; ly = e.clientY; cv.setPointerCapture(e.pointerId); });
    cv.addEventListener('pointermove', function (e) {
      if (drag) { moved += Math.abs(e.clientX - lx) + Math.abs(e.clientY - ly); tAng -= (e.clientX - lx) * 0.005; tElev = Math.max(-1.2, Math.min(1.2, tElev + (e.clientY - ly) * 0.004)); lx = e.clientX; ly = e.clientY; }
      hover(e);
    });
    cv.addEventListener('pointerup', function (e) { drag = false; if (moved < 6) click(e); });
    cv.addEventListener('pointercancel', function () { drag = false; });
    cv.addEventListener('wheel', function (e) { e.preventDefault(); tDist = Math.max(30, Math.min(180, tDist + e.deltaY * 0.06)); }, { passive: false });

    var ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), hovered = null, tipEl = null;
    function hit(e) {
      var r = cv.getBoundingClientRect();
      ndc.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      ndc.y = -((e.clientY - r.top) / r.height) * 2 + 1;
      ray.setFromCamera(ndc, cam);
      var hits = ray.intersectObjects(pickables, false);
      return hits.length ? hits[0].object : null;
    }
    function hover(e) {
      var o = hit(e);
      if (o !== hovered) {
        if (hovered && hovered.userData.kind === 'node') hovered.material.emissiveIntensity = 0.5;
        hovered = o;
        if (hovered && hovered.userData.kind === 'node') {
          hovered.material.emissiveIntensity = 1.4;
          showTip(hovered.userData, e);
        } else if (tipEl) { tipEl.remove(); tipEl = null; }
      } else if (hovered && hovered.userData.kind === 'node') { moveTip(e); }
      cv.style.cursor = hovered && hovered.userData.kind === 'node' ? 'pointer' : 'grab';
    }
    function click(e) {
      var o = hit(e);
      if (o && o.userData.url) location.href = o.userData.url;
    }
    function showTip(d, e) {
      if (!tipEl) { tipEl = document.createElement('div'); tipEl.className = 'crystal-tip'; host.appendChild(tipEl); }
      tipEl.innerHTML = '<b>' + esc(d.name) + '</b><i>' + esc(TYPE_ZH[d.type] || d.type) + '</i>';
      tipEl.style.cssText = 'position:absolute;pointer-events:none;background:#0b0b16ee;border:1px solid #22e0ff66;border-radius:8px;padding:6px 10px;font-size:12.5px;z-index:5';
      moveTip(e);
    }
    function moveTip(e) {
      if (!tipEl) return;
      var r = host.getBoundingClientRect();
      tipEl.style.left = Math.min(r.width - 160, e.clientX - r.left + 14) + 'px';
      tipEl.style.top = Math.max(4, e.clientY - r.top - 34) + 'px';
    }

    function resize() {
      W = host.clientWidth; H = Math.max(420, Math.min(720, window.innerHeight - 260));
      renderer.setSize(W, H, false);
      cam.aspect = W / H; cam.updateProjectionMatrix();
    }
    window.addEventListener('resize', resize);
    resize();

    var t0 = performance.now();
    (function loop() {
      requestAnimationFrame(loop);
      var now = performance.now(), dt = (now - t0) / 1000; t0 = now;
      if (!drag) tAng += 0.0009;
      ang += (tAng - ang) * 0.08; elev += (tElev - elev) * 0.08; dist += (tDist - dist) * 0.08;
      group.rotation.y = ang * 0.35;
      place();
      renderer.render(scene, cam);
    })();
  }
})();
