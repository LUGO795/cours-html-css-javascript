/* ==========================================================================
   Ondea Academy — home-trailer.js
   « Bande-annonce » effet film d'action sur l'en-tête de la page d'accueil.
   Se lance quand l'en-tête devient visible (après l'introduction si elle est
   affichée), une fois par session ; bouton « Revoir la bande-annonce » ensuite.
   Séquence : rideau obsidienne, bandes cinéma, grain de pellicule, compte à
   rebours 3-2-1, cartons-titres percutants, « Prêt ? » en battements de cœur,
   ouverture des portes, balayage lumineux, étincelles, compteurs qui défilent,
   bouton « Commencer » qui pulse et phrase de suspense tapée à la machine.
   Accessibilité : textes très grands et très contrastés, bouton « Passer »
   (ou touche Échap), aucun effet si les animations sont réduites.
   Sons (impacts graves) uniquement si l'utilisateur a déjà interagi avec la page.
   ========================================================================== */
(function () {
  'use strict';

  var ONCE_PER_SESSION = false;          // false : rejouer à chaque arrivée sur l'accueil
  var KEY = 'oa.trailerSeen';
  var root = document.documentElement;
  var view = document.getElementById('view');
  if (!view) return;

  var current = null;   // { hero, timers, io, playing, trailer, onKey }

  function reduced() {
    return root.classList.contains('no-motion') ||
      (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }
  function seen() { try { return sessionStorage.getItem(KEY) === '1'; } catch (e) { return false; } }
  function markSeen() { try { sessionStorage.setItem(KEY, '1'); } catch (e) { /* ignoré */ } }
  function introOpen() { var i = document.getElementById('intro'); return !!(i && !i.hidden); }
  function restart(el, cls) { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }

  /* ---------- Chiffres du cours (lus dans les données) ---------- */
  function figures() {
    var c = window.COURS;
    if (!c || !c.chapters) return { ch: 26, q: 130 };
    var q = 0;
    c.chapters.forEach(function (x) { q += (x.quiz || []).length; });
    return { ch: c.chapters.length, q: q };
  }

  /* ======================================================================
     SONS (Web Audio API) — seulement après une interaction de l'utilisateur
     ====================================================================== */
  var ac = null;
  function audio() {
    var ua = navigator.userActivation;
    if (!ua || !ua.hasBeenActive) return null;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ac) ac = new AC();
    if (ac.state === 'suspended') ac.resume();
    return ac;
  }
  function noiseSource(a, seconds) {
    var len = Math.floor(a.sampleRate * seconds);
    var buf = a.createBuffer(1, len, a.sampleRate);
    var d = buf.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    var s = a.createBufferSource();
    s.buffer = buf;
    return s;
  }
  function boom(power) {
    var a = audio();
    if (!a) return;
    try {
      var t = a.currentTime;
      var o = a.createOscillator();
      var g = a.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(140, t);
      o.frequency.exponentialRampToValueAtTime(30, t + 0.6);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.7 * power, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);
      o.connect(g); g.connect(a.destination);
      o.start(t); o.stop(t + 1.2);
      var n = noiseSource(a, 0.3);
      var f = a.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = 1800;
      var ng = a.createGain();
      ng.gain.setValueAtTime(0.35 * power, t);
      ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
      n.connect(f); f.connect(ng); ng.connect(a.destination);
      n.start(t); n.stop(t + 0.3);
    } catch (e) { /* son indisponible */ }
  }
  function tick() {
    var a = audio();
    if (!a) return;
    try {
      var t = a.currentTime;
      var o = a.createOscillator();
      var g = a.createGain();
      o.type = 'square';
      o.frequency.value = 1150;
      g.gain.setValueAtTime(0.12, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
      o.connect(g); g.connect(a.destination);
      o.start(t); o.stop(t + 0.06);
    } catch (e) { /* son indisponible */ }
  }
  function riser(seconds) {
    var a = audio();
    if (!a) return;
    try {
      var t = a.currentTime;
      var n = noiseSource(a, seconds + 0.1);
      var f = a.createBiquadFilter();
      f.type = 'bandpass';
      f.Q.value = 1.4;
      f.frequency.setValueAtTime(200, t);
      f.frequency.exponentialRampToValueAtTime(3500, t + seconds);
      var g = a.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.32, t + seconds);
      g.gain.exponentialRampToValueAtTime(0.0001, t + seconds + 0.08);
      n.connect(f); f.connect(g); g.connect(a.destination);
      n.start(t); n.stop(t + seconds + 0.1);
    } catch (e) { /* son indisponible */ }
  }

  /* ======================================================================
     CONSTRUCTION DE LA BANDE-ANNONCE
     ====================================================================== */
  function buildTrailer() {
    var f = figures();
    var tr = document.createElement('div');
    tr.className = 'ot-trailer';
    tr.innerHTML =
      '<div class="ot-stage" aria-hidden="true">' +
        '<div class="ot-door ot-door-l"></div><div class="ot-door ot-door-r"></div>' +
        '<div class="ot-grain"></div>' +
        '<div class="ot-scan"></div>' +
        '<p class="ot-layer ot-kicker">Ondea Web Studio présente</p>' +
        '<div class="ot-count"><svg viewBox="0 0 100 100" focusable="false">' +
          '<circle class="ot-ring-bg" cx="50" cy="50" r="46"/><circle class="ot-ring" cx="50" cy="50" r="46"/>' +
          '<line x1="50" y1="0" x2="50" y2="100"/><line x1="0" y1="50" x2="100" y2="50"/></svg>' +
          '<span class="ot-num">3</span></div>' +
        '<p class="ot-layer ot-card" data-card="1"><small>Ondea Commandes</small><span>Une vraie application.</span></p>' +
        '<p class="ot-layer ot-card" data-card="2"><small>Du premier &lt;html&gt; à IndexedDB</small><span>' + f.ch + ' chapitres. ' + f.q + ' défis.</span></p>' +
        '<p class="ot-layer ot-card" data-card="3"><small>Un seul objectif</small><span class="ot-gold">Votre titre professionnel.</span></p>' +
        '<p class="ot-layer ot-card" data-card="4"><span class="ot-ready">Prêt ?</span></p>' +
        '<div class="ot-flash"></div>' +
        '<div class="ot-bar ot-bar-t"></div><div class="ot-bar ot-bar-b"></div>' +
      '</div>' +
      '<button class="ot-skip" type="button" aria-label="Passer la bande-annonce (touche Échap)">Passer ▸▸</button>' +
      '<p class="visually-hidden" role="status">Bande-annonce du cours en cours de lecture. Appuyez sur Échap pour la passer.</p>';
    return tr;
  }

  /* ======================================================================
     LECTURE
     ====================================================================== */
  function at(ms, fn) { current.timers.push(setTimeout(fn, ms)); }

  function play() {
    if (!current || current.playing) return;
    var hero = current.hero;
    var tr = buildTrailer();
    var stage = tr.querySelector('.ot-stage');
    var q = function (s) { return tr.querySelector(s); };
    current.trailer = tr;
    current.playing = true;
    markSeen();
    resetCounters(hero);
    hero.appendChild(tr);
    hero.classList.add('ot-playing');

    tr.querySelector('.ot-skip').addEventListener('click', reveal);
    current.onKey = function (e) { if (e.key === 'Escape' && current && current.playing) reveal(); };
    document.addEventListener('keydown', current.onKey);

    var flash = q('.ot-flash');
    function slam(card, power) {
      restart(card, 'is-on');
      restart(stage, 'is-shake');
      restart(flash, 'is-on');
      boom(power);
    }

    at(30, function () { tr.classList.add('is-open'); });
    at(450, function () { q('.ot-kicker').classList.add('is-on'); });
    at(1500, function () { q('.ot-kicker').classList.remove('is-on'); q('.ot-count').classList.add('is-on'); });
    [3, 2, 1].forEach(function (n, i) {
      at(1600 + i * 560, function () {
        q('.ot-num').textContent = String(n);
        restart(q('.ot-count'), 'is-tick');
        tick();
      });
    });
    at(3300, function () { q('.ot-count').classList.remove('is-on'); slam(q('[data-card="1"]'), 1); });
    at(5800, function () { slam(q('[data-card="2"]'), 1); });
    at(8300, function () { slam(q('[data-card="3"]'), 1.1); });
    at(10900, function () {
      restart(q('[data-card="4"]'), 'is-beat');
      boom(0.5);
      riser(2);
    });
    at(11600, function () { boom(0.45); });
    at(13100, reveal);
  }

  /** Ouverture des portes : on découvre l'accueil. */
  function reveal() {
    if (!current || !current.playing) return;
    var hero = current.hero;
    var tr = current.trailer;
    current.timers.forEach(clearTimeout);
    current.timers = [];
    current.playing = false;
    document.removeEventListener('keydown', current.onKey);
    var skipHadFocus = document.activeElement === tr.querySelector('.ot-skip');

    tr.classList.add('is-reveal');
    boom(1.2);
    hero.classList.remove('ot-playing');
    hero.classList.add('ot-revealed');

    at(1150, function () {
      tr.remove();
      if (skipHadFocus) {
        var h = hero.querySelector('h1');
        if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
      }
    });
    at(250, function () { sweep(hero); });
    at(500, function () { countUp(hero); });
    at(900, function () { sparks(hero); ctaPulse(hero); });
    at(1300, function () { teaser(hero); });
    at(3200, function () { hero.classList.remove('ot-revealed'); });
  }

  /* ---------- Effets après l'ouverture ---------- */
  function sweep(hero) {
    var s = document.createElement('div');
    s.className = 'ot-sweep';
    s.setAttribute('aria-hidden', 'true');
    hero.appendChild(s);
    setTimeout(function () { s.remove(); }, 1900);
  }

  function resetCounters(hero) {
    hero.querySelectorAll('.stat b').forEach(function (b) {
      if (!b.dataset.otFinal) b.dataset.otFinal = b.textContent;
      var m = b.dataset.otFinal.match(/^(\d+)(.*)$/);
      if (m) b.textContent = '0' + m[2];
    });
  }
  function countUp(hero) {
    hero.querySelectorAll('.stat b').forEach(function (b, i) {
      var final = b.dataset.otFinal || b.textContent;
      var m = final.match(/^(\d+)(.*)$/);
      if (!m) return;
      var target = parseInt(m[1], 10);
      var suffix = m[2];
      var start = 0;
      var dur = 1400 + i * 150;
      b.classList.add('ot-counting');
      function step(now) {
        if (!start) start = now;
        var k = Math.min(1, (now - start) / dur);
        var e = 1 - Math.pow(1 - k, 4);
        b.textContent = Math.round(target * e) + suffix;
        if (k < 1) requestAnimationFrame(step);
        else { b.textContent = final; b.classList.remove('ot-counting'); }
      }
      requestAnimationFrame(step);
    });
  }

  function sparks(hero) {
    var cta = hero.querySelector('.btn-gold');
    if (!cta) return;
    var hr = hero.getBoundingClientRect();
    var cr = cta.getBoundingClientRect();
    var cx = cr.left - hr.left + cr.width / 2;
    var cy = cr.top - hr.top + cr.height / 2;
    var box = document.createElement('div');
    box.className = 'ot-sparks';
    box.setAttribute('aria-hidden', 'true');
    var html = '';
    for (var i = 0; i < 34; i++) {
      var ang = Math.random() * Math.PI * 2;
      var dist = 70 + Math.random() * 190;
      html += '<i class="ot-spark" style="--x:' + cx.toFixed(0) + 'px;--y:' + cy.toFixed(0) +
        'px;--dx:' + (Math.cos(ang) * dist).toFixed(0) + 'px;--dy:' + (Math.sin(ang) * dist).toFixed(0) +
        'px;--t:' + (0.7 + Math.random() * 0.6).toFixed(2) + 's;--s:' + (0.6 + Math.random() * 0.9).toFixed(2) + '"></i>';
    }
    box.innerHTML = html;
    hero.appendChild(box);
    setTimeout(function () { box.remove(); }, 1600);
  }

  function ctaPulse(hero) {
    var cta = hero.querySelector('.btn-gold');
    if (!cta) return;
    cta.classList.add('ot-cta');
    setTimeout(function () { cta.classList.remove('ot-cta'); }, 8200);
  }

  function teaser(hero) {
    if (hero.querySelector('.ot-teaser')) return;
    var row = hero.querySelector('.btn-row');
    if (!row) return;
    var text = 'Votre première mission vous attend… Irez-vous jusqu’au titre ?';
    var p = document.createElement('p');
    p.className = 'ot-teaser';
    p.innerHTML = '<span class="visually-hidden"></span><span class="ot-typed" aria-hidden="true"></span><span class="ot-caret" aria-hidden="true"></span>';
    p.querySelector('.visually-hidden').textContent = text;
    row.insertAdjacentElement('afterend', p);
    var typed = p.querySelector('.ot-typed');
    var i = 0;
    (function type() {
      if (!document.body.contains(p)) return;
      typed.textContent = text.slice(0, ++i);
      if (i < text.length) setTimeout(type, text.charAt(i - 1) === '…' ? 420 : 38);
    })();
  }

  /* ---------- Bouton « Revoir la bande-annonce » ---------- */
  function addReplay(hero) {
    if (reduced() || hero.querySelector('.ot-replay')) return;
    var row = hero.querySelector('.btn-row');
    if (!row) return;
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'btn btn-ghost ot-replay';
    b.innerHTML = '<span aria-hidden="true">🎬</span> Revoir la bande-annonce';
    b.addEventListener('click', function () {
      if (!current || current.hero !== hero || current.playing) return;
      var t = hero.querySelector('.ot-teaser');
      if (t) t.remove();
      hero.scrollIntoView({ block: 'start', behavior: 'auto' });
      play();
    });
    row.appendChild(b);
  }

  /* ======================================================================
     DÉTECTION DE L'ARRIVÉE SUR L'EN-TÊTE DE L'ACCUEIL
     ====================================================================== */
  function teardown() {
    if (!current) return;
    current.timers.forEach(clearTimeout);
    if (current.io) current.io.disconnect();
    if (current.mo) current.mo.disconnect();
    if (current.onKey) document.removeEventListener('keydown', current.onKey);
    current = null;
  }

  function observeHero() {
    if (!current) return;
    var hero = current.hero;
    if (!('IntersectionObserver' in window)) { play(); return; }
    current.io = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) {
        current.io.disconnect();
        setTimeout(play, 250);
      }
    }, { threshold: 0.35 });
    current.io.observe(hero);
  }

  function setup() {
    var hero = view.querySelector('.hero');
    if (!hero) { teardown(); return; }
    if (current && current.hero === hero) return;
    teardown();
    current = { hero: hero, timers: [], io: null, mo: null, playing: false, trailer: null, onKey: null };
    addReplay(hero);
    if (reduced() || (ONCE_PER_SESSION && seen())) return;
    if (introOpen()) {
      // On attend la fin de l'introduction cinématographique
      var intro = document.getElementById('intro');
      current.mo = new MutationObserver(function () {
        if (!introOpen()) { current.mo.disconnect(); observeHero(); }
      });
      current.mo.observe(intro, { attributes: true, attributeFilter: ['hidden'] });
    } else observeHero();
  }

  var pending = false;
  new MutationObserver(function () {
    if (pending) return;
    pending = true;
    requestAnimationFrame(function () { pending = false; setup(); });
  }).observe(view, { childList: true });
  setup();
})();