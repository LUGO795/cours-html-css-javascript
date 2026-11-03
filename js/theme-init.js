/* ==========================================================================
   Ondea Academy — theme-init.js
   Chargé de façon synchrone dans <head> : applique le thème mémorisé (ou celui
   du système) et le choix « réduire les animations » AVANT le premier affichage.
   ========================================================================== */
(function () {
  'use strict';
  var root = document.documentElement;
  var theme = null;
  var motion = null;
  try {
    theme = localStorage.getItem('oa.theme');
    motion = localStorage.getItem('oa.motion');
  } catch (e) { /* stockage indisponible (navigation privée stricte) : on garde les valeurs par défaut */ }
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  root.setAttribute('data-theme', theme);
  if (motion === 'reduce') root.classList.add('no-motion');
})();
