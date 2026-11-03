/* ==========================================================================
   Ondea Academy — back-to-top.js
   Bouton « Retour en haut » effet film d'action :
   - anneau doré qui montre la progression de lecture ;
   - au clic : SON 1 « décollage » (souffle + montée + grondement), bandes
     cinéma, traînées de vitesse, la flèche part comme une fusée ;
   - à l'arrivée en haut, et JAMAIS AVANT : SON 2 « impact » (boum grave +
     claquement + résonance métallique), onde de choc, flash doré.
   Les sons sont générés par la Web Audio API (aucun fichier, compatible file://).
   Si l'utilisateur fait défiler pendant le vol, le retour est annulé, sans son d'arrivée.
   Animations réduites : saut direct en haut, sans effets visuels.
   ========================================================================== */
(function () {
  'use strict';

  var btn = document.getElementById('back-top');
  var fx = document.getElementById('back-top-fx');
  var live = document.getElementById('back-top-live');
  if (!btn || !fx) return;

  var root = document.documentElement;
  var progress = btn.querySelector('.back-top-progress');
  var title = fx.querySelector('.bt-title');
  var streaksBox = fx.querySelector('.bt-streaks');
  var RADIUS = 30;
  var CIRC = 2 * Math.PI * RADIUS;
  var SHOW_AFTER = 400;          // le bouton apparaît après 400 px de défilement
  var state = { flying: false, raf: 0, timer: 0, impactTimer: 0 };
  var audio = null;
  var ticking = false;

  progress.style.strokeDasharray = CIRC.toFixed(2);
  progress.style.strokeDashoffset = CIRC.toFixed(2);

  function reducedMotion() {
    return root.classList.contains('no-motion') ||
      (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }
  function currentY() { return window.scrollY || root.scrollTop || 0; }

  /* ---------- Affichage du bouton + anneau de progression ---------- */
  function refresh() {
    ticking = false;
    var max = Math.max(1, root.scrollHeight - window.innerHeight);
    var y = currentY();
    var ratio = Math.min(1, Math.max(0, y / max));
    progress.style.strokeDashoffset = (CIRC * (1 - ratio)).toFixed(2);
    btn.classList.toggle('is-visible', y > SHOW_AFTER || state.flying);
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(refresh); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  window.addEventListener('hashchange', function () { setTimeout(refresh, 150); });
  refresh();

  /* ---------- Traînées de vitesse (créées une seule fois) ---------- */
  function buildStreaks() {
    if (streaksBox.childElementCount) return;
    var html = '';
    for (var i = 0; i < 28; i++) {
      html += '<i class="bt-streak" style="--x:' + (Math.random() * 100).toFixed(1) +
        '%;--h:' + Math.round(90 + Math.random() * 240) +
        'px;--d:' + (0.32 + Math.random() * 0.45).toFixed(2) +
        's;--delay:' + (Math.random() * 0.5).toFixed(2) + 's"></i>';
    }
    streaksBox.innerHTML = html;
  }

  /* ======================================================================
     SONS (Web Audio API)
     ====================================================================== */
  function getAudio() {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!audio) audio = new AC();                 // créé au clic : autorisé par les navigateurs
    if (audio.state === 'suspended') audio.resume();
    return audio;
  }
  function noise(a, seconds) {
    var length = Math.floor(a.sampleRate * seconds);
    var buffer = a.createBuffer(1, length, a.sampleRate);
    var data = buffer.getChannelData(0);
    for (var i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
    var src = a.createBufferSource();
    src.buffer = buffer;
    return src;
  }
  function masterOut(a) {
    var comp = a.createDynamicsCompressor();      // évite la saturation
    comp.threshold.value = -12;
    comp.ratio.value = 4;
    var vol = a.createGain();
    vol.gain.value = 0.85;
    comp.connect(vol);
    vol.connect(a.destination);
    return comp;
  }
  function envelope(gainNode, t, peak, attack, release) {
    gainNode.gain.setValueAtTime(0.0001, t);
    gainNode.gain.exponentialRampToValueAtTime(peak, t + attack);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, t + attack + release);
  }

  /** SON 1 : décollage (souffle qui monte + montée en puissance + grondement). */
  function playLaunch() {
    var a = getAudio();
    if (!a) return;
    try {
      var t = a.currentTime;
      var out = masterOut(a);

      var whoosh = noise(a, 1.3);
      var band = a.createBiquadFilter();
      band.type = 'bandpass';
      band.Q.value = 1.1;
      band.frequency.setValueAtTime(280, t);
      band.frequency.exponentialRampToValueAtTime(4200, t + 0.95);
      var wg = a.createGain();
      envelope(wg, t, 0.65, 0.4, 0.8);
      whoosh.connect(band); band.connect(wg); wg.connect(out);
      whoosh.start(t); whoosh.stop(t + 1.3);

      var riser = a.createOscillator();
      riser.type = 'sawtooth';
      riser.frequency.setValueAtTime(110, t);
      riser.frequency.exponentialRampToValueAtTime(880, t + 0.85);
      var low = a.createBiquadFilter();
      low.type = 'lowpass';
      low.frequency.setValueAtTime(500, t);
      low.frequency.exponentialRampToValueAtTime(3200, t + 0.85);
      var rg = a.createGain();
      envelope(rg, t, 0.16, 0.55, 0.45);
      riser.connect(low); low.connect(rg); rg.connect(out);
      riser.start(t); riser.stop(t + 1.1);

      var rumble = a.createOscillator();
      rumble.type = 'sine';
      rumble.frequency.setValueAtTime(48, t);
      rumble.frequency.linearRampToValueAtTime(95, t + 0.9);
      var ug = a.createGain();
      envelope(ug, t, 0.55, 0.12, 0.9);
      rumble.connect(ug); ug.connect(out);
      rumble.start(t); rumble.stop(t + 1.1);
    } catch (e) { /* son indisponible : le bouton fonctionne quand même */ }
  }

  /** SON 2 : impact à l'arrivée (boum grave + claquement + résonance métallique). */
  function playImpact() {
    var a = getAudio();
    if (!a) return;
    try {
      var t = a.currentTime;
      var out = masterOut(a);

      var boom = a.createOscillator();
      boom.type = 'sine';
      boom.frequency.setValueAtTime(150, t);
      boom.frequency.exponentialRampToValueAtTime(32, t + 0.7);
      var bg = a.createGain();
      envelope(bg, t, 0.95, 0.008, 1.5);
      boom.connect(bg); bg.connect(out);
      boom.start(t); boom.stop(t + 1.7);

      var crack = noise(a, 0.5);
      var cf = a.createBiquadFilter();
      cf.type = 'lowpass';
      cf.frequency.setValueAtTime(3000, t);
      cf.frequency.exponentialRampToValueAtTime(250, t + 0.4);
      var cg = a.createGain();
      envelope(cg, t, 0.8, 0.004, 0.4);
      crack.connect(cf); cf.connect(cg); cg.connect(out);
      crack.start(t); crack.stop(t + 0.5);

      var clang = a.createGain();
      envelope(clang, t, 0.14, 0.005, 1.3);
      [523.25, 1046.5, 1568].forEach(function (f, i) {
        var o = a.createOscillator();
        o.type = 'triangle';
        o.frequency.setValueAtTime(f * (1 + i * 0.003), t);
        o.connect(clang);
        o.start(t); o.stop(t + 1.4);
      });
      var echo = a.createDelay(1);
      echo.delayTime.value = 0.17;
      var feedback = a.createGain();
      feedback.gain.value = 0.32;
      echo.connect(feedback); feedback.connect(echo);
      clang.connect(out); clang.connect(echo); echo.connect(out);
    } catch (e) { /* son indisponible */ }
  }

  /* ======================================================================
     VOL VERS LE HAUT
     ====================================================================== */
  function jump(y) {
    var prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, y);
    root.style.scrollBehavior = prev;
  }

  function launch() {
    if (state.flying) return;
    var startY = currentY();
    if (startY <= 1) return;

    state.flying = true;
    playLaunch();                                  // SON 1 : au départ
    clearTimeout(state.impactTimer);
    root.classList.remove('bt-impact');
    btn.classList.add('is-launching');
    if (live) live.textContent = 'Retour en haut de la page…';

    if (reducedMotion()) {                         // pas d'animation : saut direct
      jump(0);
      requestAnimationFrame(checkArrival);
      return;
    }

    buildStreaks();
    title.textContent = 'Décollage';
    root.classList.add('bt-flying');
    listenInterrupt(true);

    var duration = Math.min(1500, Math.max(850, startY * 0.22));
    var t0 = 0;
    state.timer = setTimeout(function () {         // petite mise à feu avant le départ
      root.style.scrollBehavior = 'auto';
      state.raf = requestAnimationFrame(function step(now) {
        if (!t0) t0 = now;
        var k = Math.min(1, (now - t0) / duration);
        var eased = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
        window.scrollTo(0, Math.round(startY * (1 - eased)));
        if (k < 1) state.raf = requestAnimationFrame(step);
        else { window.scrollTo(0, 0); requestAnimationFrame(checkArrival); }
      });
    }, 260);
  }

  /** Le son d'arrivée n'est joué QUE si la page est vraiment tout en haut. */
  function checkArrival() {
    if (currentY() <= 1) arrive();
    else abort();
  }

  function arrive() {
    listenInterrupt(false);
    state.flying = false;
    root.style.scrollBehavior = '';
    root.classList.remove('bt-flying');
    btn.classList.remove('is-launching');
    playImpact();                                  // SON 2 : seulement à l'arrivée
    if (live) live.textContent = 'Vous êtes en haut de la page.';
    var main = document.getElementById('contenu');
    if (main) main.focus({ preventScroll: true });
    if (!reducedMotion()) {
      title.textContent = 'Objectif atteint';
      root.classList.add('bt-impact');
      state.impactTimer = setTimeout(function () { root.classList.remove('bt-impact'); }, 1300);
    }
    refresh();
  }

  function abort() {
    cancelAnimationFrame(state.raf);
    clearTimeout(state.timer);
    listenInterrupt(false);
    state.flying = false;
    root.style.scrollBehavior = '';
    root.classList.remove('bt-flying');
    btn.classList.remove('is-launching');
    if (live) live.textContent = '';
    refresh();
  }

  /* L'utilisateur reprend la main (molette, doigt, touche, clic) : on annule. */
  function onInterrupt(e) {
    if (e.type === 'keydown' && /^(Shift|Control|Alt|Meta)$/.test(e.key)) return;
    abort();
  }
  function listenInterrupt(on) {
    ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function (type) {
      if (on) window.addEventListener(type, onInterrupt, { passive: true });
      else window.removeEventListener(type, onInterrupt, { passive: true });
    });
  }

  btn.addEventListener('click', launch);
})();