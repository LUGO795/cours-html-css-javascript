/* ==========================================================================
   Ondea Academy — playground.js
   Bac à sable HTML / CSS / JS : éditeurs, aperçu en direct dans une <iframe>,
   console intégrée, et correcteur automatique des exercices guidés.

   Types de critères (définis dans le contenu du cours) :
     sel   | sélecteur | libellé                → l'élément existe
     count | sélecteur | n (ou =n) | libellé    → au moins n (ou exactement n) éléments
     text  | sélecteur | texte | libellé        → l'élément contient le texte
     style | sélecteur | propriété | valeur | l → valeur calculée (getComputedStyle)
     html / css / js | expression régulière | l → le code source correspond
     log   | texte | libellé                    → la console a affiché ce texte
     eval / evalasync | expression | attendu | l→ l'expression vaut « attendu »
     click | sélecteur | libellé                → simule un clic
     wait  | millisecondes | libellé            → attend (base de données…)
   ========================================================================== */
(function (OA) {
  'use strict';

  const { esc, icon, norm, store } = OA;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  let counter = 0;

  /** Traduit les erreurs JavaScript les plus courantes pour un débutant. */
  function explainError(msg) {
    const m = String(msg || '');
    let hint = '';
    if (/is not defined/.test(m)) hint = "Ce nom n'existe pas : faute de frappe, majuscule oubliée ou variable non déclarée ?";
    else if (/Cannot read propert(y|ies) of (null|undefined)/.test(m)) hint = "Vous utilisez une valeur vide : un querySelector qui ne trouve rien renvoie null. Vérifiez le sélecteur.";
    else if (/is not a function/.test(m)) hint = "Vous appelez avec () quelque chose qui n'est pas une fonction : vérifiez le nom.";
    else if (/Assignment to constant/.test(m)) hint = 'Une constante (const) ne peut pas être réaffectée : utilisez let.';
    else if (/Unexpected token|Unexpected end|missing \)|Invalid or unexpected/.test(m)) hint = 'Erreur de syntaxe : parenthèse, accolade, guillemet ou virgule manquant(e) ?';
    else if (/has already been declared/.test(m)) hint = 'Ce nom est déclaré deux fois avec let/const.';
    return hint ? `${m}\n   💡 ${hint}` : m;
  }

  /** Script injecté AVANT le code de l'élève : capture console et erreurs. */
  function captureScript(id) {
    return `<script>(function(){
  var ID=${JSON.stringify(id)}; window.__logs=[];
  function fmt(a){ if(typeof a==='string') return a; try{ if(a instanceof Error) return a.name+': '+a.message;
    if(typeof Element!=='undefined' && a instanceof Element) return '<'+a.tagName.toLowerCase()+(a.id?'#'+a.id:'')+'>';
    if(typeof a==='function') return 'ƒ '+(a.name||'anonyme')+'()';
    var s=JSON.stringify(a); return s===undefined?String(a):s; }catch(e){ return String(a); } }
  function send(type,text){ window.__logs.push(text); try{ parent.postMessage({__pg:ID,type:type,text:text},'*'); }catch(e){} }
  ['log','info','warn','error','table','dir'].forEach(function(t){ var o=console[t]; console[t]=function(){ var a=[].slice.call(arguments);
    send(t==='warn'?'warn':(t==='error'?'error':'log'), a.map(fmt).join(' ')); try{ if(o) o.apply(console,a); }catch(e){} }; });
  window.addEventListener('error',function(e){ var l=e.lineno?e.lineno-__OFFSET__:0; send('error','Erreur'+(l>0?' (ligne '+l+' du JS)':'')+' : '+e.message); });
  window.addEventListener('unhandledrejection',function(e){ var r=e.reason; send('error','Promesse rejetée : '+(r&&r.message?r.message:String(r))); });
})();<\/script>`;
  }

  class Playground {
    /**
     * @param {object} opts
     * @param {string} opts.key        identifiant (sauvegarde du code des exercices)
     * @param {{html?:string, css?:string, js?:string}} opts.files  code de départ
     * @param {{html?:string, css?:string, js?:string}} [opts.solution]
     * @param {Array<string[]>} [opts.checks]  critères de correction
     * @param {boolean} [opts.persist]  mémoriser le code de l'élève
     * @param {Function} [opts.onPass]  appelé quand tous les critères sont validés
     */
    constructor(opts) {
      this.opts = opts;
      this.id = `pg-${++counter}`;
      this.start = { html: opts.files.html || '', css: opts.files.css || '', js: opts.files.js || '' };
      const sol = opts.solution || {};
      this.langs = ['html', 'css', 'js'].filter((l) => this.start[l] || sol[l]);
      if (!this.langs.length) this.langs = ['html'];
      const saved = opts.persist ? store.get(`oa.code.${opts.key}`, null) : null;
      this.code = Object.assign({}, this.start, saved && typeof saved === 'object' ? saved : {});
      this.logs = [];
      this.escaped = false;
      this.timer = null;
      Playground.instances.set(this.id, this);
    }

    render() {
      const tabs = this.langs.map((l, i) => `<button class="pg-tab" role="tab" type="button" id="${this.id}-tab-${l}" aria-controls="${this.id}-panel-${l}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-lang="${l}">${l === 'js' ? 'script.js' : l === 'css' ? 'style.css' : 'index.html'}</button>`).join('');
      const panels = this.langs.map((l, i) => `<div class="pg-panel" role="tabpanel" id="${this.id}-panel-${l}" aria-labelledby="${this.id}-tab-${l}" ${i === 0 ? '' : 'hidden'}>
          <label class="visually-hidden" for="${this.id}-ta-${l}">Code ${OA.LANG_LABEL[l]}</label>
          <textarea id="${this.id}-ta-${l}" data-lang="${l}" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" aria-describedby="${this.id}-help">${esc(this.code[l])}</textarea>
        </div>`).join('');
      const wrap = document.createElement('div');
      wrap.className = 'pg';
      wrap.id = this.id;
      wrap.innerHTML = `<div class="pg-grid">
        <div class="pg-editor">
          <div class="pg-tabs" role="tablist" aria-label="Fichiers de l'exercice">${tabs}</div>
          ${panels}
        </div>
        <div class="pg-preview">
          <div class="pg-preview-bar"><span>${icon('eye')} Aperçu</span>
            <div class="btn-row">
              <button class="btn btn-sm" type="button" data-pg="run">${icon('play')} Exécuter</button>
              <button class="btn btn-sm" type="button" data-pg="reset">${icon('reset')} Réinitialiser</button>
            </div>
          </div>
          <iframe title="Aperçu du résultat" sandbox="allow-scripts allow-same-origin allow-modals allow-forms" loading="lazy"></iframe>
          <div class="pg-console" role="log" aria-live="off" aria-label="Console JavaScript" tabindex="0"></div>
        </div>
      </div>
      <p class="pg-help" id="${this.id}-help">Modifiez le code : l'aperçu se met à jour automatiquement. <kbd>Tab</kbd> insère une indentation ; appuyez sur <kbd>Échap</kbd> puis <kbd>Tab</kbd> pour quitter l'éditeur. <kbd>Ctrl</kbd>+<kbd>Entrée</kbd> exécute.</p>`;
      this.el = wrap;
      this.iframe = wrap.querySelector('iframe');
      this.consoleEl = wrap.querySelector('.pg-console');
      this.bind();
      // Première exécution quand le bac à sable devient visible (économise les ressources)
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
          if (entries.some((e) => e.isIntersecting)) { io.disconnect(); if (!this.hasRun) this.run(); }
        }, { rootMargin: '200px' });
        io.observe(wrap);
      } else this.run();
      return wrap;
    }

    bind() {
      const el = this.el;
      // Onglets accessibles (flèches gauche/droite)
      const tabs = Array.from(el.querySelectorAll('.pg-tab'));
      const select = (tab) => {
        tabs.forEach((t) => {
          const on = t === tab;
          t.setAttribute('aria-selected', String(on));
          t.tabIndex = on ? 0 : -1;
          el.querySelector(`#${t.getAttribute('aria-controls')}`).hidden = !on;
        });
      };
      tabs.forEach((t, i) => {
        t.addEventListener('click', () => select(t));
        t.addEventListener('keydown', (e) => {
          let j = null;
          if (e.key === 'ArrowRight') j = (i + 1) % tabs.length;
          if (e.key === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length;
          if (e.key === 'Home') j = 0;
          if (e.key === 'End') j = tabs.length - 1;
          if (j !== null) { e.preventDefault(); select(tabs[j]); tabs[j].focus(); }
        });
      });
      // Éditeurs
      el.querySelectorAll('textarea').forEach((ta) => {
        ta.addEventListener('input', () => {
          this.code[ta.dataset.lang] = ta.value;
          if (this.opts.persist) store.set(`oa.code.${this.opts.key}`, this.code);
          clearTimeout(this.timer);
          this.timer = setTimeout(() => this.run(), 650);
        });
        ta.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') { this.escaped = true; return; }
          if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); this.run(); return; }
          if (e.key === 'Tab' && !e.shiftKey && !this.escaped) {
            e.preventDefault();
            const { selectionStart: s, selectionEnd: f, value } = ta;
            ta.value = value.slice(0, s) + '  ' + value.slice(f);
            ta.selectionStart = ta.selectionEnd = s + 2;
            ta.dispatchEvent(new Event('input'));
            return;
          }
          this.escaped = false;
        });
        ta.addEventListener('blur', () => { this.escaped = false; });
      });
      el.querySelector('[data-pg="run"]').addEventListener('click', () => { this.run(); OA.toast('Code exécuté'); });
      el.querySelector('[data-pg="reset"]').addEventListener('click', async () => {
        if (await OA.confirmDialog('Revenir au code de départ ? Vos modifications de ce bac à sable seront perdues.', 'Réinitialiser')) this.setCode(this.start);
      });
    }

    setCode(files) {
      this.code = { html: files.html || '', css: files.css || '', js: files.js || '' };
      this.el.querySelectorAll('textarea').forEach((ta) => { ta.value = this.code[ta.dataset.lang] || ''; });
      if (this.opts.persist) store.set(`oa.code.${this.opts.key}`, this.code);
      this.run();
    }

    /** Construit le document de l'aperçu. */
    buildDoc() {
      const { html, css, js } = this.code;
      const safeJs = (js || '').replace(/<\/script/gi, '<\\/script');
      const placeholder = !html.trim() && js.trim() ? '<p style="font:15px system-ui;color:#444;padding:.5rem">Ce programme n’affiche rien dans la page : le résultat apparaît dans la console ci-dessous.</p>' : '';
      const head = `<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>html{color-scheme:light}body{font-family:system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.5;color:#14161f;background:#fff}</style>\n<style>\n${css}\n</style>\n${captureScript(this.id)}\n</head><body>\n${placeholder}${html}\n`;
      const offset = head.split('\n').length;   // n° de la ligne <script> : la ligne 1 de l'élève est juste après
      return `${head.replace('__OFFSET__', String(offset))}<script>\n${safeJs}\n<\/script>\n</body></html>`;
    }

    run() {
      this.hasRun = true;
      this.logs = [];
      this.consoleEl.innerHTML = '<span class="l empty">Console vide : utilisez console.log(…) pour afficher des valeurs.</span>';
      this.loadPromise = new Promise((resolve) => { this.iframe.onload = () => resolve(); });
      this.iframe.srcdoc = this.buildDoc();
      return this.loadPromise;
    }

    log(type, text) {
      this.logs.push({ type, text });
      const empty = this.consoleEl.querySelector('.empty');
      if (empty) empty.remove();
      const line = document.createElement('span');
      line.className = `l ${type}`;
      line.textContent = type === 'error' ? explainError(text) : text;
      this.consoleEl.append(line);
      this.consoleEl.scrollTop = this.consoleEl.scrollHeight;
    }

    /** Correction automatique : renvoie [{ ok, label, why, info }] */
    async check() {
      await this.run();
      await sleep(180);
      const win = this.iframe.contentWindow;
      const doc = this.iframe.contentDocument;
      const results = [];
      const code = this.code;
      for (const c of this.opts.checks || []) {
        const [type, ...a] = c;
        const label = a[a.length - 1];
        let ok = false;
        let why = '';
        let info = false;
        try {
          switch (type) {
            case 'sel': ok = !!doc.querySelector(a[0]); if (!ok) why = 'Élément introuvable.'; break;
            case 'count': {
              const exact = String(a[1]).startsWith('=');
              const n = parseInt(String(a[1]).replace('=', ''), 10);
              const found = doc.querySelectorAll(a[0]).length;
              ok = exact ? found === n : found >= n;
              if (!ok) why = `Trouvé : ${found}, attendu : ${exact ? '' : 'au moins '}${n}.`;
              break;
            }
            case 'text': {
              const e = doc.querySelector(a[0]);
              ok = !!e && norm(e.textContent).replace(/\s+/g, ' ').includes(norm(a[1]));
              if (!ok) why = e ? `Texte actuel : « ${e.textContent.trim().slice(0, 80)} ».` : 'Élément introuvable.';
              break;
            }
            case 'style': {
              const e = doc.querySelector(a[0]);
              if (!e) { why = 'Élément introuvable.'; break; }
              const v = win.getComputedStyle(e).getPropertyValue(a[1]).trim();
              ok = v === a[2];
              if (!ok) why = `Valeur calculée de ${a[1]} : « ${v || 'aucune'} ».`;
              break;
            }
            case 'html': case 'css': case 'js': {
              const src = (code[type] || '').replace(/\/\*[\s\S]*?\*\//g, '').replace(type === 'js' ? /^\s*\/\/.*$/gm : /(?!)/, '').replace(type === 'html' ? /<!--[\s\S]*?-->/g : /(?!)/, '');
              ok = new RegExp(a[0], 'i').test(src);
              if (!ok) why = 'Non trouvé dans votre code.';
              break;
            }
            case 'log': {
              const all = (win.__logs || []);
              ok = all.some((l) => l.includes(a[0]));
              if (!ok) why = all.length ? `Dernier message : « ${all[all.length - 1].slice(0, 90)} ».` : 'Rien n’a été affiché dans la console.';
              break;
            }
            case 'eval': case 'evalasync': {
              let v = win.eval(a[0]);
              if (type === 'evalasync') v = await v;
              const s = typeof v === 'object' && v !== null ? JSON.stringify(v) : String(v);
              ok = s === a[1];
              if (!ok) why = `Obtenu : « ${s.slice(0, 90)} ».`;
              break;
            }
            case 'click': {
              const e = doc.querySelector(a[0]);
              info = true;
              if (e) { e.click(); ok = true; await sleep(60); } else { why = 'Élément à cliquer introuvable.'; info = false; }
              break;
            }
            case 'wait': info = true; await sleep(parseInt(a[0], 10) || 300); ok = true; break;
            default: why = 'Critère inconnu.';
          }
        } catch (err) {
          ok = false;
          why = explainError(err && err.message ? err.message : String(err));
        }
        results.push({ ok, label, why, info });
      }
      return results;
    }
  }
  Playground.instances = new Map();

  // Réception des messages console envoyés par les iframes
  window.addEventListener('message', (e) => {
    const d = e.data;
    if (!d || typeof d !== 'object' || !d.__pg) return;
    const pg = Playground.instances.get(d.__pg);
    if (pg && e.source === pg.iframe.contentWindow) pg.log(d.type, String(d.text));
  });

  /** Nettoie les instances dont l'élément n'est plus dans la page (changement de vue). */
  Playground.cleanup = () => {
    for (const [id, pg] of Playground.instances) {
      if (!document.body.contains(pg.el)) Playground.instances.delete(id);
    }
  };

  OA.Playground = Playground;
})(window.OA);
