/* ==========================================================================
   Ondea Academy — app.js (chargé en dernier)
   Routeur par hash (#/chapitre/…), sommaire interactif, barre de progression,
   thèmes clair/sombre mémorisés, réduction des animations, recherche,
   introduction cinématographique, apparitions au défilement, raccourcis.
   ========================================================================== */
(function (OA) {
  'use strict';

  const { $, $$, esc, icon, progress, PARTS, chapters, chapterById, chapterNumber, norm, stripTags, store, reducedMotion, toast } = OA;
  const viewEl = $('#view');
  const mainEl = $('#contenu');
  let current = { key: null, view: null };
  let revealObserver = null;
  let stepObserver = null;

  /* ======================================================================
     ROUTEUR
     ====================================================================== */
  function parse(hash = location.hash) {
    const clean = String(hash || '').replace(/^#\/?/, '');
    const [path, qs = ''] = clean.split('?');
    const seg = path.split('/').filter(Boolean).map(decodeURIComponent);
    const query = Object.fromEntries(new URLSearchParams(qs));
    return { seg, query };
  }

  function resolve({ seg, query }) {
    const [a = 'accueil', b, c] = seg;
    switch (a) {
      case 'accueil': return { key: 'accueil', make: () => OA.views.home(), nav: '#/accueil' };
      case 'partie': return { key: `partie/${b}`, make: () => OA.views.part(b), nav: `#/partie/${b}` };
      case 'chapitre': return { key: `chapitre/${b}`, make: () => OA.views.chapter(b), nav: `#/chapitre/${b}`, target: c ? `s-${c}` : null, part: chapterById(b)?.part };
      case 'fil-rouge': return { key: 'fil-rouge', make: () => OA.views.filRouge(), nav: '#/fil-rouge', target: b || null };
      case 'jury': return { key: 'jury', make: () => OA.views.jury(), nav: '#/jury', target: b ? `s-${b}` : null };
      case 'glossaire': return { key: `glossaire?${query.q || ''}`, make: () => OA.views.glossaire(query.q || ''), nav: '#/glossaire' };
      case 'memos': return { key: 'memos', make: () => OA.views.memos(), nav: '#/memos' };
      case 'progression': return { key: 'progression', make: () => OA.views.progression(), nav: '#/progression' };
      default: return { key: 'notfound', make: () => OA.views.notFound(), nav: '' };
    }
  }

  function scrollToTarget(id, focus = true) {
    const el = id && document.getElementById(id);
    if (!el) return false;
    el.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
    if (focus) {
      const h = el.querySelector('h2, h1');
      if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
    }
    return true;
  }

  function render(force = false) {
    if (location.hash && !location.hash.startsWith('#/')) return;   // ancre ordinaire : on garde la vue
    const route = resolve(parse());
    // Même vue : on se contente de défiler vers la section demandée
    if (!force && route.key === current.key) {
      if (route.target) scrollToTarget(route.target);
      return;
    }
    let view = null;
    try { view = route.make(); } catch (err) { console.error(err); }
    if (!view) view = OA.views.notFound();

    if (current.view && typeof current.view.unmount === 'function') current.view.unmount();
    current = { key: route.key, view };

    viewEl.className = `view view-enter ${['memos', 'progression', 'fil-rouge'].includes(route.key) || route.key.startsWith('partie') ? 'view-wide' : ''}`;
    viewEl.innerHTML = view.html;
    try { if (view.mount) view.mount(viewEl); } catch (err) { console.error(err); toast('Une partie de la page n’a pas pu être initialisée.'); }
    OA.Playground.cleanup();
    document.title = `${view.title} — Ondea Academy`;

    playCurtain();
    updateToc(route);
    closeSidebar(false);
    observeReveals();
    observeSteps();
    if (route.target) {
      setTimeout(() => scrollToTarget(route.target), 60);
    } else {
      window.scrollTo(0, 0);
      mainEl.focus({ preventScroll: true });
    }
  }

  OA.router = { refresh: () => render(true), go: (h) => { location.hash = h; } };

  function playCurtain() {
    if (reducedMotion()) return;
    const c = $('.curtain');
    c.classList.remove('is-playing');
    void c.offsetWidth;
    c.classList.add('is-playing');
  }

  /* ======================================================================
     SOMMAIRE + PROGRESSION
     ====================================================================== */
  function buildToc() {
    const groups = Object.values(PARTS).map((p) => {
      const list = chapters.filter((c) => c.part === p.key);
      return `<details class="part-${p.key}" data-part="${p.key}">
        <summary><span class="part-dot" aria-hidden="true"></span><span>${esc(p.label)} <small data-part-count="${p.key}"></small></span>${icon('chev-r', 'icon chev')}</summary>
        <ol>${list.map((c) => `<li><a class="toc-link" href="#/chapitre/${esc(c.id)}" data-nav="#/chapitre/${esc(c.id)}"><span class="toc-num">${esc(chapterNumber(c))}</span><span>${esc(c.title)}</span><span class="toc-check" data-check="${esc(c.id)}"><span class="visually-hidden"></span></span></a></li>`).join('')}</ol>
      </details>`;
    }).join('');
    $('#toc').innerHTML = `
      <ul><li><a class="toc-link" href="#/accueil" data-nav="#/accueil">${icon('home')}<span>Accueil</span></a></li></ul>
      <p class="toc-title">Le cours</p>
      ${groups}
      <p class="toc-title">Projet & titre pro</p>
      <ul>
        <li><a class="toc-link" href="#/fil-rouge" data-nav="#/fil-rouge">${icon('route')}<span>Fil rouge Ondea Commandes</span></a></li>
        <li><a class="toc-link" href="#/jury" data-nav="#/jury">${icon('mic')}<span>Préparer le jury</span></a></li>
        <li><a class="toc-link" href="#/glossaire" data-nav="#/glossaire">${icon('book')}<span>Glossaire technique</span></a></li>
        <li><a class="toc-link" href="#/memos" data-nav="#/memos">${icon('print')}<span>Fiches mémo imprimables</span></a></li>
        <li><a class="toc-link" href="#/progression" data-nav="#/progression">${icon('chart')}<span>Ma progression</span></a></li>
      </ul>`;
    refreshProgressUi();
  }

  function updateToc(route) {
    $$('#toc [data-nav]').forEach((a) => {
      if (a.dataset.nav === route.nav) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    const partKey = route.part || (route.key.startsWith('partie/') ? route.key.split('/')[1] : null);
    if (partKey) {
      const d = $(`#toc details[data-part="${partKey}"]`);
      if (d) d.open = true;
    }
  }

  function refreshProgressUi() {
    const p = progress.percent();
    $('#hp-bar').style.setProperty('--value', `${p.pct}%`);
    $('#hp-text').textContent = `${p.pct} %`;
    $('.header-progress').setAttribute('title', `${p.done} chapitres terminés sur ${p.total}`);
    $$('#toc [data-check]').forEach((el) => {
      const done = progress.isDone(el.dataset.check);
      el.classList.toggle('is-done', done);
      el.querySelector('.visually-hidden').textContent = done ? '(terminé)' : '';
    });
    Object.keys(PARTS).forEach((k) => {
      const pp = progress.partPercent(k);
      const s = $(`[data-part-count="${k}"]`);
      if (s) s.textContent = `· ${pp.done}/${pp.total}`;
    });
  }
  progress.onChange(refreshProgressUi);

  /* ======================================================================
     BARRE LATÉRALE MOBILE
     ====================================================================== */
  const sidebar = $('#sidebar');
  const menuBtn = $('#menu-btn');
  const overlay = $('#overlay');
  const isDrawer = () => window.matchMedia('(max-width: 1099px)').matches;
  function openSidebar() {
    sidebar.classList.add('is-open');
    overlay.classList.add('is-visible');
    menuBtn.setAttribute('aria-expanded', 'true');
    const cur = sidebar.querySelector('[aria-current="page"]') || sidebar.querySelector('a');
    setTimeout(() => cur && cur.focus(), 50);
  }
  function closeSidebar(restoreFocus = true) {
    if (!sidebar.classList.contains('is-open')) return;
    sidebar.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    menuBtn.setAttribute('aria-expanded', 'false');
    if (restoreFocus && isDrawer()) menuBtn.focus();
  }
  menuBtn.addEventListener('click', () => (sidebar.classList.contains('is-open') ? closeSidebar() : openSidebar()));
  $('#sidebar-close').addEventListener('click', () => closeSidebar());
  overlay.addEventListener('click', () => closeSidebar());

  /* ======================================================================
     THÈME ET ANIMATIONS
     ====================================================================== */
  const root = document.documentElement;
  function paintThemeButton() {
    const dark = root.dataset.theme === 'dark';
    $('#theme-btn').setAttribute('aria-label', dark ? 'Passer en thème clair' : 'Passer en thème sombre');
    $('#theme-btn').setAttribute('title', dark ? 'Thème clair' : 'Thème sombre');
    $('#theme-icon').setAttribute('href', dark ? '#i-sun' : '#i-moon');
  }
  $('#theme-btn').addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    store.raw('oa.theme', root.dataset.theme);
    paintThemeButton();
    toast(root.dataset.theme === 'dark' ? 'Thème sombre activé.' : 'Thème clair activé.');
  });
  function paintMotionButton() {
    const off = root.classList.contains('no-motion');
    const b = $('#motion-btn');
    b.setAttribute('aria-pressed', String(off));
    b.setAttribute('aria-label', 'Réduire les animations');
    b.setAttribute('title', off ? 'Animations réduites (cliquer pour les réactiver)' : 'Réduire les animations');
  }
  $('#motion-btn').addEventListener('click', () => {
    root.classList.toggle('no-motion');
    store.raw('oa.motion', root.classList.contains('no-motion') ? 'reduce' : 'auto');
    paintMotionButton();
    observeReveals();
    toast(root.classList.contains('no-motion') ? 'Animations réduites.' : 'Animations activées.');
  });

  /* ======================================================================
     APPARITIONS AU DÉFILEMENT + ÉTAPE ACTIVE
     ====================================================================== */
  function observeReveals() {
    if (revealObserver) revealObserver.disconnect();
    const items = $$('.reveal', viewEl);
    if (reducedMotion() || !('IntersectionObserver' in window)) { items.forEach((el) => el.classList.add('is-visible')); return; }
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); revealObserver.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    items.forEach((el) => revealObserver.observe(el));
  }
  function observeSteps() {
    if (stepObserver) stepObserver.disconnect();
    const links = $$('.steps-nav a', viewEl);
    if (!links.length || !('IntersectionObserver' in window)) return;
    const setActive = (id) => links.forEach((a) => {
      const on = `s-${a.dataset.step}` === id;
      a.classList.toggle('is-active', on);
      if (on) {
        a.setAttribute('aria-current', 'step');
        // Défilement horizontal de la barre d'étapes seulement (scrollIntoView interromprait le défilement de la page)
        const ol = a.closest('ol');
        ol.scrollLeft = a.offsetLeft - ol.clientWidth / 2 + a.offsetWidth / 2;
      }
      else a.removeAttribute('aria-current');
    });
    stepObserver = new IntersectionObserver((entries) => {
      const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (vis[0]) setActive(vis[0].target.id);
    }, { rootMargin: '-25% 0px -65% 0px' });
    $$('.step', viewEl).forEach((s) => stepObserver.observe(s));
  }

  /* ======================================================================
     RECHERCHE DANS LE COURS
     ====================================================================== */
  let index = null;
  function buildIndex() {
    const d = OA.data;
    index = [];
    chapters.forEach((c) => {
      const text = stripTags([c.intro, c.explain, c.guided, c.auto, c.solution, c.ondea].join(' ')) + ' ' + c.example.map((e) => e.code).join(' ') + ' ' + c.quiz.map((q) => q.q).join(' ');
      index.push({ kind: `${PARTS[c.part].short} · ${chapterNumber(c)}`, title: c.title, sub: c.subtitle, text, href: `#/chapitre/${c.id}`, n: norm(`${c.title} ${c.subtitle} ${c.feature}`), nt: norm(text) });
    });
    d.glossaire.forEach(([t, def]) => index.push({ kind: 'Glossaire', title: t, sub: def, text: def, href: `#/glossaire?q=${encodeURIComponent(t)}`, n: norm(t), nt: norm(def) }));
    d.filRouge.forEach((f, i) => index.push({ kind: `Fil rouge · étape ${i + 1}`, title: f.titre, sub: f.objectif, text: f.mission.join(' ') + ' ' + f.livrable, href: `#/fil-rouge/${f.id}`, n: norm(f.titre), nt: norm(f.objectif + ' ' + f.mission.join(' ')) }));
    d.jury.questions.forEach((q) => index.push({ kind: 'Jury', title: q.q, sub: q.r, text: q.r, href: '#/jury/ex4', n: norm(q.q), nt: norm(q.r) }));
  }
  function highlightText(text, words) {
    let out = esc(text);
    words.forEach((w) => {
      if (w.length < 2) return;
      // Recherche insensible aux accents : on parcourt le texte normalisé en parallèle
      const re = new RegExp(w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').split('').map((ch) => `${ch}[\\u0300-\\u036f]?`).join(''), 'gi');
      out = out.replace(/(^|>)([^<]*)/g, (m, a, txt) => a + txt.replace(re, (x) => `<mark>${x}</mark>`));
    });
    return out;
  }
  function excerpt(item, words) {
    const pos = Math.max(0, ...words.map((w) => item.nt.indexOf(w)).filter((x) => x >= 0).slice(0, 1));
    const src = item.text.normalize('NFC');
    const start = Math.max(0, pos - 60);
    return (start > 0 ? '…' : '') + src.slice(start, start + 170) + (src.length > start + 170 ? '…' : '');
  }
  function search(q) {
    if (!index) buildIndex();
    const words = norm(q).split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return index.map((it) => {
      let score = 0;
      for (const w of words) {
        const inTitle = it.n.includes(w);
        const inText = it.nt.includes(w);
        if (!inTitle && !inText) return null;
        score += (inTitle ? 10 : 0) + (inText ? Math.min(5, it.nt.split(w).length - 1) : 0);
      }
      if (it.kind.startsWith('HTML') || it.kind.startsWith('CSS') || it.kind.startsWith('JS')) score += 2;
      return { it, score };
    }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 25).map((r) => ({ ...r.it, words }));
  }
  const searchDlg = $('#search-dlg');
  const searchInput = $('#search-input');
  const resultsEl = $('#search-results');
  function renderResults() {
    const q = searchInput.value.trim();
    const res = search(q);
    if (!q) {
      resultsEl.innerHTML = `<li class="muted" style="padding:.8rem">Tapez un mot-clé : <em>formulaire</em>, <em>grid</em>, <em>reduce</em>, <em>TVA</em>, <em>IndexedDB</em>…</li>`;
      $('#search-count').textContent = '';
      return;
    }
    resultsEl.innerHTML = res.length ? res.map((r) => `<li><a href="${esc(r.href)}"><small>${esc(r.kind)}</small><b>${highlightText(r.title, r.words)}</b><small>${highlightText(excerpt(r, r.words), r.words)}</small></a></li>`).join('')
      : `<li class="muted" style="padding:.8rem">Aucun résultat pour « ${esc(q)} ».</li>`;
    $('#search-count').textContent = `${res.length} résultat(s).`;
  }
  function openSearch() {
    if (searchDlg.open) return;
    searchDlg.showModal();
    searchInput.select();
    renderResults();
  }
  $('#search-btn').addEventListener('click', openSearch);
  $('#search-close').addEventListener('click', () => searchDlg.close());
  searchInput.addEventListener('input', renderResults);
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { const a = resultsEl.querySelector('a'); if (a) { e.preventDefault(); a.click(); } }
    if (e.key === 'ArrowDown') { const a = resultsEl.querySelector('a'); if (a) { e.preventDefault(); a.focus(); } }
  });
  resultsEl.addEventListener('keydown', (e) => {
    const links = $$('a', resultsEl);
    const i = links.indexOf(document.activeElement);
    if (e.key === 'ArrowDown' && i < links.length - 1) { e.preventDefault(); links[i + 1].focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); (i > 0 ? links[i - 1] : searchInput).focus(); }
  });
  resultsEl.addEventListener('click', (e) => { if (e.target.closest('a')) searchDlg.close(); });
  searchDlg.addEventListener('click', (e) => { if (e.target === searchDlg) searchDlg.close(); });   // clic sur le fond

  /* ======================================================================
     INTRODUCTION CINÉMATOGRAPHIQUE
     ====================================================================== */
  const intro = $('#intro');
  function setInert(on) {
    ['.app-header', '.layout', '.app-footer', '.skip-link'].forEach((s) => {
      const el = $(s);
      if (!el) return;
      if (on) el.setAttribute('inert', ''); else el.removeAttribute('inert');
    });
  }
  function prepareIntro() {
    const title = $('#intro-title');
    if (!title.dataset.ready) {
      const words = title.dataset.text.split(' ');
      let i = 0;
      title.innerHTML = words.map((w, wi) => `<span style="white-space:nowrap">${[...w].map((ch) => `<span class="ch${wi === 1 ? ' gold' : ''}" style="--i:${i++}" aria-hidden="true">${esc(ch)}</span>`).join('')}</span>`).join(' ') + `<span class="visually-hidden">${esc(title.dataset.text)}</span>`;
      const particles = $('.intro-particles');
      particles.innerHTML = Array.from({ length: 28 }, () => `<i style="left:${(Math.random() * 100).toFixed(1)}%;--d:${(6 + Math.random() * 8).toFixed(1)}s;--delay:${(Math.random() * 6).toFixed(1)}s;transform:scale(${(0.5 + Math.random()).toFixed(2)})"></i>`).join('');
      title.dataset.ready = '1';
    }
  }
  function showIntro() {
    prepareIntro();
    intro.hidden = false;
    intro.classList.remove('is-leaving');
    intro.classList.toggle('is-playing', !reducedMotion());
    setInert(true);
    setTimeout(() => $('#intro-enter').focus(), 30);
  }
  function hideIntro() {
    try { sessionStorage.setItem('oa.introSeen', '1'); } catch (e) { /* ignoré */ }
    setInert(false);
    const done = () => { intro.hidden = true; intro.classList.remove('is-playing', 'is-leaving'); mainEl.focus({ preventScroll: true }); };
    if (reducedMotion()) done();
    else { intro.classList.add('is-leaving'); setTimeout(done, 750); }
  }
  $('#intro-enter').addEventListener('click', hideIntro);
  $('#intro-skip').addEventListener('click', hideIntro);
  intro.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.preventDefault(); hideIntro(); }
    if (e.key === 'Tab') {   // piège du focus entre les deux boutons
      const f = [$('#intro-enter'), $('#intro-skip')];
      const i = f.indexOf(document.activeElement);
      e.preventDefault();
      f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });
  $('#replay-intro').addEventListener('click', showIntro);

  /* ======================================================================
     ÉCOUTEURS GLOBAUX (délégation)
     ====================================================================== */
  document.addEventListener('click', async (e) => {
    const copy = e.target.closest('[data-copy]');
    if (copy) {
      const code = document.getElementById(copy.dataset.copy);
      const ok = code && (await OA.copyText(code.textContent));
      toast(ok ? 'Code copié dans le presse-papiers.' : 'Copie impossible : sélectionnez le code puis Ctrl + C.', ok ? 'success' : '');
      if (ok) {
        const old = copy.innerHTML;
        copy.innerHTML = `${icon('check')} Copié`;
        setTimeout(() => { copy.innerHTML = old; }, 1600);
      }
    }
  });
  // Lien d'évitement : on garde l'adresse de la page
  $('.skip-link').addEventListener('click', (e) => { e.preventDefault(); mainEl.focus(); mainEl.scrollIntoView(); });

  document.addEventListener('keydown', (e) => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName) || document.activeElement.isContentEditable;
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); return; }
    if (e.key === '/' && !typing && intro.hidden) { e.preventDefault(); openSearch(); return; }
    if (e.key === 'Escape' && sidebar.classList.contains('is-open')) { closeSidebar(); return; }
    if (e.altKey && !typing && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
      const r = parse();
      if (r.seg[0] !== 'chapitre') return;
      const i = OA.chapterIndex(r.seg[1]);
      const t = chapters[i + (e.key === 'ArrowRight' ? 1 : -1)];
      if (t) { e.preventDefault(); location.hash = `#/chapitre/${t.id}`; }
    }
  });

  window.addEventListener('afterprint', () => { delete document.body.dataset.print; });
  window.addEventListener('hashchange', () => render());
  // Synchronisation entre onglets : la progression change ailleurs → on met à jour
  window.addEventListener('storage', (e) => { if (e.key === 'oa.progress.v1') progress.reload(); });
  // Filet de sécurité : toute erreur imprévue est signalée sans bloquer l'interface
  window.addEventListener('error', (e) => { if (e.filename && e.filename.includes('/js/')) console.error('[Ondea Academy]', e.message); });

  /* ======================================================================
     DÉMARRAGE
     ====================================================================== */
  buildToc();
  paintThemeButton();
  paintMotionButton();
  render(true);
  let seen = false;
  try { seen = sessionStorage.getItem('oa.introSeen') === '1'; } catch (e) { seen = false; }
  if (!seen && !reducedMotion()) showIntro();
})(window.OA);
