/* ==========================================================================
   Ondea Academy — scrollbar-chrome.js
   Active la barre de défilement premium UNIQUEMENT dans Google Chrome
   (Edge, Opera, Brave, Safari et Firefox gardent leur barre d'origine).
   Ajoute la classe .sb-chrome sur <html> avant l'affichage, puis la classe
   .sb-active pendant le défilement pour « allumer » la barre (effet réacteur).
   ========================================================================== */
(function () {
  'use strict';
  var root = document.documentElement;

  /** Détecte Google Chrome (et non un autre navigateur basé sur Chromium). */
  function isGoogleChrome() {
    var uad = navigator.userAgentData;
    if (uad && Array.isArray(uad.brands)) {
      return uad.brands.some(function (b) { return b.brand === 'Google Chrome'; });
    }
    var ua = navigator.userAgent;
    return /Chrome\/\d+/.test(ua) && !/Edg\/|OPR\/|Opera|Brave|SamsungBrowser|YaBrowser|Vivaldi/i.test(ua) && navigator.vendor === 'Google Inc.';
  }
  if (!isGoogleChrome()) return;

  root.classList.add('sb-chrome');

  // Effet « réacteur » : la barre s'illumine pendant le défilement
  var timer = 0;
  function activate() {
    if (!root.classList.contains('sb-active')) root.classList.add('sb-active');
    clearTimeout(timer);
    timer = setTimeout(function () { root.classList.remove('sb-active'); }, 650);
  }
  window.addEventListener('scroll', activate, { passive: true });
  // Défilement des zones internes (sommaire, blocs de code, console…)
  document.addEventListener('scroll', function (e) { if (e.target !== document) activate(); }, { passive: true, capture: true });
})();