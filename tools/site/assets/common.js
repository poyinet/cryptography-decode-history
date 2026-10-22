/* ============================================================
   assets/common.js —— 分站通用交互（导航 / 搜索 / 语言切换）
   零依赖 · 渐进增强：无 JS 时页面正文仍完整可读
   ============================================================ */
(function () {
  'use strict';

  function getLang() {
    try {
      var u = new URLSearchParams(location.search).get('lang');
      if (u === 'zh' || u === 'en') return u;
      var saved = localStorage.getItem('crypto_lang');
      if (saved === 'zh' || saved === 'en') return saved;
      return (navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
    } catch (e) { return 'zh'; }
  }
  var LANG = getLang();

  /* 语言切换：保留路径，换 ?lang= */
  var langBtn = document.getElementById('lang');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      var next = LANG === 'zh' ? 'en' : 'zh';
      try { localStorage.setItem('crypto_lang', next); } catch (e) { }
      var u = new URL(location.href);
      u.searchParams.set('lang', next);
      location.href = u.toString();
    });
  }

  /* 搜索框 */
  var q = document.getElementById('q');

  /* 快捷键：/ 聚焦搜索 · Esc 退出 */
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== q) {
      e.preventDefault();
      if (q) q.focus();
    }
    if (e.key === 'Escape' && document.activeElement === q) q.blur();
  });

  if (q) {
    var pre = new URLSearchParams(location.search).get('q');
    if (pre) q.value = pre;
    q.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && q.value.trim()) {
        location.href = '/search/?q=' + encodeURIComponent(q.value.trim());
      }
    });
  }
})();
