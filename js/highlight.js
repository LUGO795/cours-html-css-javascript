/* ==========================================================================
   Ondea Academy — highlight.js
   Coloration syntaxique maison pour HTML, CSS et JavaScript, sans bibliothèque.
   Principe : on découpe le code en « jetons » (tokens) avec des expressions
   régulières, on ÉCHAPPE chaque jeton, puis on l'entoure d'un <span class="tk-…">.
   ========================================================================== */
(function (OA) {
  'use strict';

  const { esc } = OA;
  const span = (cls, text) => (cls ? `<span class="tk-${cls}">${esc(text)}</span>` : esc(text));

  /* ---------- JavaScript ---------- */
  const JS_KEYWORDS = new Set(('const let var function return if else for of in while do switch case break continue default new class extends ' +
    'try catch finally throw async await typeof instanceof this null undefined true false import export from delete void yield super static get set').split(' '));
  const JS_RULES = [
    ['c', /\/\/[^\n]*|\/\*[\s\S]*?\*\//y],
    ['s', /`(?:\\[\s\S]|[^`\\])*`|'(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*"/y],
    ['re', /\/(?![*/])(?:\\.|\[(?:\\.|[^\]\\\n])*\]|[^/\\\n[])+\/[dgimsuy]*/y],
    ['n', /\b\d[\d_]*(?:\.\d+)?(?:e[+-]?\d+)?\b/iy],
    ['w', /[A-Za-z_$][\w$]*/y],
    ['ws', /\s+/y],
    ['o', /=>|===|!==|&&|\|\||\?\?|\?\.|\.\.\.|[{}()[\];,.<>+\-*/%=!&|^~?:]/y]
  ];
  function highlightJS(code) {
    let out = '';
    let i = 0;
    let prev = '';        // dernier jeton significatif (pour distinguer division et regex)
    while (i < code.length) {
      let matched = false;
      for (const [type, re] of JS_RULES) {
        re.lastIndex = i;
        const m = re.exec(code);
        if (!m) continue;
        const t = m[0];
        if (type === 're' && !(prev === '' || /[(,=:[!&|?{};]$/.test(prev) || prev === 'return')) continue;
        if (type === 'w') {
          const after = code.slice(i + t.length).match(/^\s*\(/);
          if (JS_KEYWORDS.has(t)) out += span('k', t);
          else if (after) out += span('f', t);
          else if (/^[A-Z]/.test(t)) out += span('v', t);
          else out += esc(t);
        } else if (type === 're') out += span('s', t);
        else if (type === 'ws') out += t;
        else out += span(type, t);
        if (type !== 'ws' && type !== 'c') prev = t;
        i += t.length;
        matched = true;
        break;
      }
      if (!matched) { out += esc(code[i]); i++; }
    }
    return out;
  }

  /* ---------- CSS ---------- */
  const CSS_RULES = [
    ['c', /\/\*[\s\S]*?\*\//y],
    ['s', /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/y],
    ['v', /@[\w-]+/y],
    ['v', /--[\w-]+/y],
    ['p', /[\w-]+(?=\s*:[^{};]*[;}])/y],
    ['n', /#[0-9a-fA-F]{3,8}\b(?![-\w])/y],
    ['n', /-?(?:\d+\.?\d*|\.\d+)(?:px|rem|em|%|vw|vh|ms|s|fr|ch|deg|turn|dpi)?\b/y],
    ['f', /[\w-]+(?=\()/y],
    ['t', /[.#]?[A-Za-z][\w-]*|::?[\w-]+|\*/y],
    ['ws', /\s+/y],
    ['o', /[{}()[\];:,>+~=]/y]
  ];
  function highlightCSS(code) {
    let out = '';
    let i = 0;
    let afterProp = false;   // on vient de lire un nom de propriété
    let inValue = false;     // on est entre « : » et « ; » d'une déclaration
    while (i < code.length) {
      let matched = false;
      for (const [type, re] of CSS_RULES) {
        re.lastIndex = i;
        const m = re.exec(code);
        if (!m) continue;
        const t = m[0];
        if (type === 'ws') out += t;
        else if (type === 'p' && !inValue) { out += span('p', t); afterProp = true; }
        else if (type === 'p' || type === 't') out += span(inValue && !/^[.#:]/.test(t) ? 'v' : (type === 'p' ? 'v' : 't'), t);
        else {
          if (type === 'o') {
            if (t === ':' && afterProp) { inValue = true; afterProp = false; }
            else if (t === ';' || t === '{' || t === '}') { inValue = false; afterProp = false; }
          }
          out += span(type, t);
        }
        i += t.length;
        matched = true;
        break;
      }
      if (!matched) { out += esc(code[i]); i++; }
    }
    return out;
  }

  /* ---------- HTML ---------- */
  function highlightAttrs(src) {
    let out = '';
    const re = /(\s+)|([^\s=/>]+)(\s*=\s*)?("[^"]*"|'[^']*'|[^\s>]+)?|(\/)/gy;
    let m;
    let i = 0;
    re.lastIndex = 0;
    while (i < src.length && (m = re.exec(src)) && m[0].length) {
      if (m[1]) out += m[1];
      else if (m[5]) out += span('o', m[5]);
      else {
        out += span('a', m[2]);
        if (m[3]) out += span('o', m[3]);
        if (m[4]) out += span('s', m[4]);
      }
      i = re.lastIndex;
    }
    if (i < src.length) out += esc(src.slice(i));
    return out;
  }
  function highlightHTML(code) {
    let out = '';
    const re = /<!--[\s\S]*?-->|<!DOCTYPE[^>]*>|<\/?([A-Za-z][\w-]*)([^>]*)>/gi;
    let last = 0;
    let m;
    while ((m = re.exec(code))) {
      out += esc(code.slice(last, m.index));
      const t = m[0];
      if (t.startsWith('<!--')) out += span('c', t);
      else if (/^<!DOCTYPE/i.test(t)) out += span('k', t);
      else {
        const closing = t.startsWith('</');
        out += span('o', closing ? '</' : '<') + span('t', m[1]) + highlightAttrs(m[2].replace(/\/$/, '')) + (m[2].endsWith('/') ? span('o', '/') : '') + span('o', '>');
      }
      last = re.lastIndex;
    }
    out += esc(code.slice(last));
    return out;
  }

  function highlight(code, lang) {
    try {
      if (lang === 'js') return highlightJS(code);
      if (lang === 'css') return highlightCSS(code);
      return highlightHTML(code);
    } catch (e) {
      return esc(code);   // en cas de souci, on affiche le code brut (jamais d'erreur bloquante)
    }
  }

  const LANG_LABEL = { html: 'HTML', css: 'CSS', js: 'JavaScript' };

  /** Bloc de code complet : barre (langage + copier) + <pre> colorié. */
  function codeBlock(code, lang = 'html', title = '') {
    const id = 'code-' + Math.random().toString(36).slice(2, 9);
    return `<figure class="code" aria-labelledby="${id}-cap">
      <figcaption class="code-bar"><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span><span id="${id}-cap">${esc(title || LANG_LABEL[lang] || lang)}</span>
        <button class="btn btn-sm" type="button" data-copy="${id}">${OA.icon('copy')} Copier</button>
      </figcaption>
      <pre tabindex="0" aria-label="Code ${esc(LANG_LABEL[lang] || lang)}"><code id="${id}">${highlight(code, lang)}</code></pre>
    </figure>`;
  }

  OA.highlight = highlight;
  OA.codeBlock = codeBlock;
  OA.LANG_LABEL = LANG_LABEL;
})(window.OA);
