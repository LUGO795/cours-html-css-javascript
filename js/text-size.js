/* ==========================================================================
   Ondea Academy — text-size.js
   Boutons « A− / A+ » de la barre supérieure : diminuent ou agrandissent tous
   les textes de la page (taille de police de <html>, dont dépendent les rem),
   de 100 % à 135 % par pas de 5 %. Le choix est mémorisé dans LocalStorage
   et appliqué AVANT l'affichage pour éviter un saut de mise en page.
   ========================================================================== */
(function () {
  'use strict';

  var KEY = 'oa.textsize';
  var MIN = 100;   // taille normale
  var MAX = 135;   // taille maximale demandée
  var STEP = 5;    // 100 → 105 → … → 135
  var root = document.documentElement;

  /** Lit la taille mémorisée (bornée entre MIN et MAX). */
  function read() {
    var v = NaN;
    try { v = parseInt(localStorage.getItem(KEY), 10); } catch (e) { /* stockage indisponible */ }
    if (isNaN(v)) return MIN;
    return Math.min(MAX, Math.max(MIN, v));
  }

  var size = read();

  /** Applique la taille à la page et met à jour les boutons. */
  function apply(announce) {
    root.style.fontSize = size === MIN ? '' : size + '%';
    try { localStorage.setItem(KEY, String(size)); } catch (e) { /* ignoré */ }

    var down = document.getElementById('text-smaller');
    var up = document.getElementById('text-bigger');
    var reset = document.getElementById('text-reset');
    var live = document.getElementById('text-size-live');
    if (!down || !up || !reset) return;   // boutons pas encore dans la page

    // aria-disabled (et non disabled) : le bouton garde le focus clavier
    down.setAttribute('aria-disabled', String(size <= MIN));
    up.setAttribute('aria-disabled', String(size >= MAX));
    reset.textContent = size + ' %';
    reset.setAttribute('aria-label', 'Taille du texte : ' + size + ' %. Revenir à 100 %');
    if (announce && live) live.textContent = 'Taille du texte : ' + size + ' %';
  }

  function change(delta) {
    var next = Math.min(MAX, Math.max(MIN, size + delta));
    if (next === size) return;
    size = next;
    apply(true);
  }

  // 1. Application immédiate (le script est chargé dans <head>)
  apply(false);

  // 2. Branchement des boutons quand le HTML est prêt
  document.addEventListener('DOMContentLoaded', function () {
    var down = document.getElementById('text-smaller');
    var up = document.getElementById('text-bigger');
    var reset = document.getElementById('text-reset');
    if (!down || !up || !reset) return;

    down.addEventListener('click', function () { change(-STEP); });
    up.addEventListener('click', function () { change(STEP); });
    reset.addEventListener('click', function () {
      if (size === MIN) return;
      size = MIN;
      apply(true);
    });
    apply(false);
  });

  // 3. Synchronisation si la taille est changée dans un autre onglet
  window.addEventListener('storage', function (e) {
    if (e.key === KEY) { size = read(); apply(false); }
  });
})();