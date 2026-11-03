/* ==========================================================================
   Ondea Academy — reset-progress.js
   Bouton « Réinitialiser ma progression » dans la barre latérale + fenêtre
   de confirmation premium. Efface : chapitres terminés, QCM, exercices,
   fil rouge, préparation jury et code saisi dans les exercices guidés.
   Sécurité : case « Je comprends » obligatoire, bouton « Annuler » par défaut,
   possibilité de télécharger une sauvegarde avant d'effacer.
   ========================================================================== */
(function (OA) {
  'use strict';
  if (!OA || !OA.progress) return;

  var byId = function (id) { return document.getElementById(id); };
  var openBtn = byId('rp-open');
  var dlg = byId('rp-dlg');
  if (!openBtn || !dlg) return;

  var bar = byId('rp-bar');
  var stat = byId('rp-stat');
  var list = byId('rp-list');
  var check = byId('rp-understand');
  var confirmBtn = byId('rp-confirm');
  var live = byId('rp-live');
  var checkLine = check.closest('.rp-check');

  /* ---------- Ce qui est enregistré ---------- */
  function codeKeys() {
    var keys = [];
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf('oa.code.') === 0) keys.push(k);
      }
    } catch (e) { /* stockage indisponible */ }
    return keys;
  }
  function count(obj) { return obj ? Object.keys(obj).length : 0; }
  function summary() {
    var s = OA.progress.state;
    var p = OA.progress.percent();
    var fr = 0;
    Object.keys(s.fr || {}).forEach(function (k) { fr += (s.fr[k] || []).length; });
    var j = s.jury || {};
    return {
      pct: p.pct, done: p.done, total: p.total,
      quiz: count(s.quiz), guided: count(s.guided), auto: count(s.auto),
      fr: fr, jury: count(j.grille) + count(j.plan) + count(j.rates) + count(j.code),
      code: codeKeys().length
    };
  }
  function isEmpty(x) { return !(x.done || x.quiz || x.guided || x.auto || x.fr || x.jury || x.code); }

  /* ---------- Encadré de la barre latérale ---------- */
  function paintBox() {
    var x = summary();
    bar.style.width = x.pct + '%';
    stat.textContent = isEmpty(x)
      ? 'Parcours vierge : rien à réinitialiser'
      : x.pct + ' % accompli · ' + x.done + '/' + x.total + ' chapitres';
    openBtn.setAttribute('aria-disabled', String(isEmpty(x)));
  }
  OA.progress.onChange(paintBox);
  paintBox();

  /* ---------- Fenêtre de confirmation ---------- */
  function fillList() {
    var x = summary();
    var rows = [
      ['Chapitres terminés', x.done + ' / ' + x.total],
      ['QCM réalisés', x.quiz],
      ['Exercices guidés réussis', x.guided],
      ['Exercices autonomes cochés', x.auto],
      ['Tâches du fil rouge cochées', x.fr],
      ['Éléments de préparation au jury', x.jury],
      ['Exercices avec du code enregistré', x.code]
    ];
    list.innerHTML = '';
    rows.forEach(function (r) {
      var li = document.createElement('li');
      var a = document.createElement('span');
      var b = document.createElement('b');
      a.textContent = r[0];
      b.textContent = String(r[1]);
      li.append(a, b);
      list.append(li);
    });
  }
  function setConfirmState() {
    confirmBtn.setAttribute('aria-disabled', String(!check.checked));
  }

  openBtn.addEventListener('click', function () {
    if (openBtn.getAttribute('aria-disabled') === 'true') {
      if (OA.toast) OA.toast('Votre parcours est déjà vierge : rien à réinitialiser.');
      return;
    }
    fillList();
    check.checked = false;
    setConfirmState();
    live.textContent = '';
    dlg.showModal();
    dlg.scrollTop = 0;
    byId('rp-cancel').focus({ preventScroll: true });
  });

  function closeDlg() { if (dlg.open) dlg.close(); }
  byId('rp-cancel').addEventListener('click', closeDlg);
  byId('rp-close').addEventListener('click', closeDlg);
  dlg.addEventListener('click', function (e) { if (e.target === dlg) closeDlg(); });   // clic sur le fond
  dlg.addEventListener('close', function () {
    if (document.body.contains(openBtn) && openBtn.offsetParent !== null) openBtn.focus();
  });

  check.addEventListener('change', function () {
    setConfirmState();
    checkLine.classList.remove('is-alert');
  });

  byId('rp-backup').addEventListener('click', function () {
    var data = { app: 'ondea-academy', exportedAt: new Date().toISOString(), state: OA.progress.state };
    OA.download('ondea-academy-progression-' + new Date().toISOString().slice(0, 10) + '.json', JSON.stringify(data, null, 2));
    live.textContent = 'Sauvegarde téléchargée.';
    if (OA.toast) OA.toast('Sauvegarde de votre progression téléchargée.', 'success');
  });

  confirmBtn.addEventListener('click', function () {
    if (!check.checked) {
      live.textContent = 'Cochez d’abord la case « Je comprends » pour confirmer.';
      checkLine.classList.remove('is-alert');
      void checkLine.offsetWidth;
      checkLine.classList.add('is-alert');
      check.focus();
      return;
    }
    OA.progress.reset();
    codeKeys().forEach(function (k) { try { localStorage.removeItem(k); } catch (e) { /* ignoré */ } });
    closeDlg();
    if (OA.toast) OA.toast('Votre parcours a été réinitialisé. Bonne reprise !', 'success');
    if (OA.router) OA.router.refresh();
    window.scrollTo(0, 0);
  });
})(window.OA);