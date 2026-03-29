/* ==========================================================================
   Language Toggle — CN / EN
   ========================================================================== */

(function () {
  function setLang(lang) {
    var use = lang || localStorage.getItem('lang') || 'en';
    document.documentElement.setAttribute('data-lang', use);
  }

  function toggleLang() {
    var current = document.documentElement.getAttribute('data-lang') || 'en';
    var next = current === 'zh' ? 'en' : 'zh';
    localStorage.setItem('lang', next);
    setLang(next);
  }

  // Apply saved preference immediately (before DOM ready to avoid flash)
  setLang();

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', toggleLang);
    }
  });
})();
