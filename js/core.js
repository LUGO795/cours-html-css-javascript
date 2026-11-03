/* ==========================================================================
   Ondea Academy — core.js
   Espace de noms unique window.OA (même principe que window.OC dans Ondea
   Commandes), utilitaires, échappement HTML, sauvegarde de la progression
   dans LocalStorage, toasts et boîte de confirmation.
   ========================================================================== */
(function (global) {
  'use strict';

  const OA = global.OA = global.OA || {};
  const COURS = global.COURS;

  /* ---------- Raccourcis DOM ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------- Échappement : toute donnée insérée en HTML passe par esc() ---------- */
  const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ESC[c]);

  /** Icône du sprite SVG (décorative, donc masquée aux lecteurs d'écran). */
  const icon = (name, cls = 'icon') => `<svg class="${cls}" aria-hidden="true" focusable="false"><use href="#i-${name}"/></svg>`;

  /** Retire les balises d'un fragment HTML (pour la recherche). */
  const stripTags = (s) => String(s || '').replace(/<[^>]+>/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

  /** Normalise un texte pour comparer sans accents ni majuscules. */
  const norm = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  /* ---------- Préférences de mouvement ---------- */
  const reducedMotion = () =>
    document.documentElement.classList.contains('no-motion') ||
    (global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ---------- Stockage sécurisé (try/catch : LocalStorage peut être indisponible) ---------- */
  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; }
    },
    raw(key, value) {
      try {
        if (value === undefined) return localStorage.getItem(key);
        localStorage.setItem(key, value);
      } catch (e) { return null; }
      return value;
    }
  };

  /* ---------- Progression ---------- */
  const STATE_KEY = 'oa.progress.v1';
  const emptyState = () => ({ v: 1, done: {}, guided: {}, auto: {}, quiz: {}, fr: {}, jury: { grille: {}, plan: {}, rates: {}, code: {} }, last: '' });

  function loadState() {
    const s = store.get(STATE_KEY, null);
    if (!s || typeof s !== 'object' || s.v !== 1) return emptyState();
    const base = emptyState();
    // Fusion prudente : on garde la structure attendue même si le fichier a été modifié
    for (const k of Object.keys(base)) {
      if (s[k] !== undefined && typeof s[k] === typeof base[k]) base[k] = s[k];
    }
    base.jury = Object.assign(emptyState().jury, base.jury);
    return base;
  }
  let state = loadState();
  const listeners = new Set();

  const progress = {
    get state() { return state; },
    save() {
      store.set(STATE_KEY, state);
      listeners.forEach((fn) => { try { fn(state); } catch (e) { console.error(e); } });
    },
    onChange(fn) { listeners.add(fn); },
    /** Relit la progression (modifiée dans un autre onglet) sans réécrire le stockage. */
    reload() { state = loadState(); listeners.forEach((fn) => { try { fn(state); } catch (e) { console.error(e); } }); },
    replace(newState) { state = Object.assign(emptyState(), newState); state.jury = Object.assign(emptyState().jury, state.jury || {}); this.save(); },
    reset() { state = emptyState(); this.save(); },
    isDone: (id) => Boolean(state.done[id]),
    setDone(id, value = true) { if (value) state.done[id] = new Date().toISOString(); else delete state.done[id]; this.save(); },
    setFlag(kind, id, value = true) { if (value) state[kind][id] = true; else delete state[kind][id]; this.save(); },
    /** Pourcentage global (chapitres terminés). */
    percent() {
      const total = COURS.chapters.length;
      const done = COURS.chapters.filter((c) => state.done[c.id]).length;
      return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
    },
    partPercent(part) {
      const list = COURS.chapters.filter((c) => c.part === part);
      const done = list.filter((c) => state.done[c.id]).length;
      return { done, total: list.length, pct: list.length ? Math.round((done / list.length) * 100) : 0 };
    }
  };

  /* ---------- Toasts (zone aria-live) ---------- */
  function toast(message, type = '') {
    const zone = $('#toasts');
    if (!zone) return;
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.innerHTML = `${icon(type === 'success' ? 'check' : 'sparkles')}<span></span>`;
    el.querySelector('span').textContent = message;
    zone.append(el);
    setTimeout(() => {
      el.classList.add('is-leaving');
      setTimeout(() => el.remove(), reducedMotion() ? 0 : 260);
    }, 3800);
  }

  /* ---------- Confirmation accessible (dialog natif) ---------- */
  function confirmDialog(text, okLabel = 'Confirmer') {
    const dlg = $('#confirm-dlg');
    $('#confirm-text').textContent = text;
    $('#confirm-ok').textContent = okLabel;
    return new Promise((resolve) => {
      const opener = document.activeElement;
      dlg.returnValue = '';
      dlg.addEventListener('close', function onClose() {
        dlg.removeEventListener('close', onClose);
        if (opener && opener.focus) opener.focus();
        resolve(dlg.returnValue === 'oui');
      });
      dlg.showModal();
    });
  }

  /* ---------- Copie dans le presse-papiers ---------- */
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      // Repli pour file:// ou navigateurs restrictifs
      const ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.append(ta); ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
      ta.remove();
      return ok;
    }
  }

  /* ---------- Téléchargement d'un fichier généré ---------- */
  function download(filename, text, type = 'application/json') {
    const blob = new Blob([text], { type });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  /* ---------- Données du cours ---------- */
  const PARTS = {
    html: { key: 'html', label: 'HTML5 sémantique', short: 'HTML', icon: 'code', desc: "Structure d'une page, balises, navigation, formulaires, tableaux, accessibilité et organisation d'une application." },
    css: { key: 'css', label: 'CSS3', short: 'CSS', icon: 'palette', desc: 'Sélecteurs, couleurs, typographie, box model, Flexbox, Grid, responsive, variables, thèmes et animations.' },
    js: { key: 'js', label: 'JavaScript', short: 'JS', icon: 'bolt', desc: 'Variables, conditions, boucles, fonctions, tableaux, objets, DOM, événements, formulaires, JSON, LocalStorage, IndexedDB et asynchrone.' }
  };
  const chapters = COURS.chapters;
  const chapterById = (id) => chapters.find((c) => c.id === id);
  const chapterIndex = (id) => chapters.findIndex((c) => c.id === id);
  /** Numéro affiché : H1…H7, C1…C8, J1…J11 */
  const chapterNumber = (c) => {
    const list = chapters.filter((x) => x.part === c.part);
    return `${PARTS[c.part].short.charAt(0)}${list.indexOf(c) + 1}`;
  };

  Object.assign(OA, { $, $$, esc, icon, stripTags, norm, reducedMotion, store, progress, toast, confirmDialog, copyText, download, PARTS, chapters, chapterById, chapterIndex, chapterNumber, data: COURS });
})(window);
