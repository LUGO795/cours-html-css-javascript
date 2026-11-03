/* ==========================================================================
   Ondea Academy — views.js
   Chaque vue renvoie { title, html, mount(root) } :
   - html  : le gabarit (toutes les données passent par esc())
   - mount : branche les écouteurs et les composants interactifs après insertion
   ========================================================================== */
(function (OA) {
  'use strict';

  const { esc, icon, progress, PARTS, chapters, chapterById, chapterIndex, chapterNumber, codeBlock, toast, norm, data } = OA;

  const STEPS = [
    ['comprendre', 'Comprendre'], ['exemple', 'Exemple commenté'], ['explication', 'Explication du code'],
    ['demo', 'Démonstration'], ['guide', 'Exercice guidé'], ['autonome', 'Exercice autonome'],
    ['correction', 'Correction détaillée'], ['qcm', 'QCM'], ['ondea', 'Lien Ondea']
  ];

  const statusOf = (c) => {
    const s = progress.state;
    const q = s.quiz[c.id];
    return { done: !!s.done[c.id], guided: !!s.guided[c.id], auto: !!s.auto[c.id], quiz: q ? q.best : null };
  };

  /* ======================================================================
     ACCUEIL
     ====================================================================== */
  function home() {
    const p = progress.percent();
    const next = chapters.find((c) => !progress.isDone(c.id)) || chapters[0];
    const last = progress.state.last && chapterById(progress.state.last);
    const totalQ = chapters.reduce((n, c) => n + c.quiz.length, 0);
    const partCard = (key) => {
      const part = PARTS[key];
      const pp = progress.partPercent(key);
      const first = chapters.find((c) => c.part === key);
      return `<article class="card card-tilt reveal part-${key}">
        <a class="card-link" href="#/partie/${key}">
          <span class="eyebrow"><span class="part-dot" aria-hidden="true"></span>${esc(part.short)} · ${pp.total} chapitres</span>
          <h3>${esc(part.label)}</h3>
          <p class="muted">${esc(part.desc)}</p>
          <div class="btn-row" style="margin-top:auto"><div class="progress" style="max-width:none"><span style="--value:${pp.pct}%"></span></div><span class="muted">${pp.pct} %</span></div>
        </a>
        <span class="visually-hidden">Premier chapitre : ${esc(first.title)}</span>
      </article>`;
    };
    const fr = data.filRouge.slice(0, 4).map((f, i) => `<li class="card card-tilt reveal"><span class="eyebrow">${icon(f.icone === 'menu' ? 'list' : f.icone)} Étape ${i + 1}</span><h3>${esc(f.titre)}</h3><p class="muted">${esc(f.objectif)}</p></li>`).join('');
    return {
      title: 'Accueil',
      html: `
      <section class="hero glow-border reveal" aria-labelledby="hero-title">
        <div class="hero-grid-bg" aria-hidden="true"></div>
        <p class="eyebrow">${icon('sparkles')} Plateforme pédagogique DWWM · Niveau 5</p>
        <h1 id="hero-title" class="title-glow">HTML5, CSS3, JavaScript natif : <br> Trois langages pour donner vie <br> au front d'Ondea Commandes.</h1>
        <p class="lead">Partez de zéro et repartez avec une vraie application professionnelle : <br> Chapitre après chapitre, vous maîtriserez <strong>HTML5 sémantique</strong>, <strong>CSS3</strong> et <strong>JavaScript natif</strong> <br> pour construire ensuite l'interface d'Ondea Commandes, l'outil de gestion des commandes des TPE et PME. <br> Chaque notion apprise devient une fonctionnalité qui prend vie sous vos yeux.</p>
        <div class="btn-row">
          <a class="btn btn-gold" href="#/chapitre/${esc(next.id)}">${icon('play')} ${p.done ? 'Continuer' : 'Commencer le cours'}</a>
          ${last && last.id !== next.id ? `<a class="btn" href="#/chapitre/${esc(last.id)}">${icon('reset')} Reprendre « ${esc(last.title)} »</a>` : ''}
          <a class="btn btn-ghost" href="#/fil-rouge">${icon('route')} Voir le fil rouge</a>
        </div>
        <dl class="stats">
          <div class="stat"><dt class="visually-hidden">Chapitres</dt><dd style="margin:0"><b>${chapters.length}</b><span>chapitres</span></dd></div>
          <div class="stat"><dt class="visually-hidden">Questions</dt><dd style="margin:0"><b>${totalQ}</b><span>questions de QCM</span></dd></div>
          <div class="stat"><dt class="visually-hidden">Exercices</dt><dd style="margin:0"><b>${chapters.length * 2}</b><span>exercices guidés et autonomes</span></dd></div>
          <div class="stat"><dt class="visually-hidden">Progression</dt><dd style="margin:0"><b>${p.pct} %</b><span>${p.done} / ${p.total} terminés</span></dd></div>
        </dl>
      </section>

      <div class="section-title"><h2>Trois langages, une application</h2><a href="#/progression">${icon('chart')} Ma progression</a></div>
      <div class="grid-cards">${partCard('html')}${partCard('css')}${partCard('js')}</div>

      <div class="section-title"><h2>Comment travailler chaque chapitre</h2></div>
      <ol class="how">
        <li class="reveal"><h3>Comprendre</h3><p class="muted">Une explication très simple, avec une image mentale.</p></li>
        <li class="reveal"><h3>Observer</h3><p class="muted">Un exemple commenté ligne par ligne, puis son explication.</p></li>
        <li class="reveal"><h3>Expérimenter</h3><p class="muted">Une démonstration modifiable : changez le code, voyez le résultat.</p></li>
        <li class="reveal"><h3>S'exercer</h3><p class="muted">Un exercice guidé corrigé automatiquement, puis un exercice autonome.</p></li>
        <li class="reveal"><h3>Vérifier</h3><p class="muted">Correction détaillée et QCM de 5 questions à correction immédiate.</p></li>
        <li class="reveal"><h3>Relier à Ondea</h3><p class="muted">Où et comment la notion est utilisée dans la vraie application.</p></li>
      </ol>

      <div class="section-title"><h2>L'application fil rouge</h2><a href="#/fil-rouge">Les 12 étapes ${icon('chev-r')}</a></div>
      <ol class="grid-cards" style="list-style:none;padding:0">${fr}</ol>

      <div class="section-title"><h2>Aller plus loin</h2></div>
      <div class="grid-cards">
        <article class="card card-tilt reveal part-projet"><a class="card-link" href="#/jury"><span class="eyebrow">${icon('mic')} Titre professionnel</span><h3>Préparer le jury</h3><p class="muted">Plan de présentation, chronomètre, questions du jury avec réponses modèles, auto-évaluation des compétences du CCP 1.</p></a></article>
        <article class="card card-tilt reveal part-projet"><a class="card-link" href="#/glossaire"><span class="eyebrow">${icon('book')} ${data.glossaire.length} définitions</span><h3>Glossaire technique</h3><p class="muted">Tous les mots du métier expliqués simplement, avec recherche instantanée.</p></a></article>
        <article class="card card-tilt reveal part-projet"><a class="card-link" href="#/memos"><span class="eyebrow">${icon('print')} 4 fiches A4</span><h3>Fiches mémo imprimables</h3><p class="muted">HTML, CSS, JavaScript et architecture d'Ondea Commandes, à garder sous la main.</p></a></article>
      </div>`
    };
  }

  /* ======================================================================
     PARTIE (liste des chapitres)
     ====================================================================== */
  function part(key) {
    const p = PARTS[key];
    if (!p) return null;
    const list = chapters.filter((c) => c.part === key);
    const pp = progress.partPercent(key);
    const cards = list.map((c) => {
      const st = statusOf(c);
      return `<article class="card card-tilt reveal part-${key}">
        <a class="card-link" href="#/chapitre/${esc(c.id)}">
          <span class="eyebrow">${esc(chapterNumber(c))} · ${esc(c.duration)}</span>
          <h2 style="font-size:1.3rem;margin-bottom:.35rem">${esc(c.title)}</h2>
          <p class="muted">${esc(c.subtitle)}</p>
          <p style="margin-top:auto" class="chips">
            ${st.done ? `<span class="badge badge-success">${icon('check')} Terminé</span>` : '<span class="badge">À faire</span>'}
            ${st.quiz !== null ? `<span class="badge badge-gold">QCM ${st.quiz}/5</span>` : ''}
          </p>
        </a></article>`;
    }).join('');
    return {
      title: p.label,
      html: `<header class="chapter-head reveal part-${key}">
          <p class="eyebrow"><span class="part-dot" aria-hidden="true"></span>Partie ${Object.keys(PARTS).indexOf(key) + 1} sur 3</p>
          <h1 class="title-glow">${esc(p.label)}</h1>
          <p class="lead muted prose">${esc(p.desc)}</p>
          <div class="btn-row" style="max-width:420px"><div class="progress progress-lg"><span style="--value:${pp.pct}%"></span></div><span>${pp.done}/${pp.total}</span></div>
        </header>
        <div class="grid-cards">${cards}</div>`
    };
  }

  /* ======================================================================
     QCM
     ====================================================================== */
  function quizHtml(c) {
    const best = progress.state.quiz[c.id];
    return `<form class="quiz" id="quiz-${esc(c.id)}" novalidate>
      ${c.quiz.map((q, i) => `<fieldset class="quiz-q" data-q="${i}">
          <legend><span class="n">${i + 1}.</span>${esc(q.q)}</legend>
          <div class="quiz-opts">
            ${q.options.map((o, j) => `<label class="quiz-opt"><input type="radio" name="q${i}" value="${j}"><span>${esc(o)}</span><span class="mark" aria-hidden="true"></span></label>`).join('')}
          </div>
          <p class="quiz-feedback" id="fb-${esc(c.id)}-${i}" hidden></p>
        </fieldset>`).join('')}
      <div class="btn-row">
        <button class="btn btn-primary" type="submit">${icon('check')} Valider mes réponses</button>
        <button class="btn" type="button" data-quiz="reset">${icon('reset')} Recommencer</button>
        ${best ? `<span class="badge badge-gold">Meilleur score : ${best.best}/5</span>` : ''}
      </div>
      <div class="quiz-score" role="status" aria-live="polite" hidden></div>
    </form>`;
  }

  function mountQuiz(root, c, onScore) {
    const form = root.querySelector(`#quiz-${CSS.escape(c.id)}`);
    if (!form) return;
    const scoreEl = form.querySelector('.quiz-score');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const answers = c.quiz.map((q, i) => {
        const r = form.querySelector(`input[name="q${i}"]:checked`);
        return r ? Number(r.value) : null;
      });
      const missing = answers.findIndex((a) => a === null);
      if (missing !== -1) {
        scoreEl.hidden = false;
        scoreEl.innerHTML = `<span>Répondez à toutes les questions avant de valider (question ${missing + 1} sans réponse).</span>`;
        form.querySelector(`input[name="q${missing}"]`).focus();
        return;
      }
      let score = 0;
      c.quiz.forEach((q, i) => {
        const fs = form.querySelector(`[data-q="${i}"]`);
        const ok = answers[i] === q.answer;
        if (ok) score++;
        fs.querySelectorAll('.quiz-opt').forEach((lab, j) => {
          lab.classList.remove('is-correct', 'is-wrong');
          const mark = lab.querySelector('.mark');
          mark.textContent = '';
          if (j === q.answer) { lab.classList.add('is-correct'); mark.textContent = '✓ Bonne réponse'; }
          else if (j === answers[i]) { lab.classList.add('is-wrong'); mark.textContent = '✗ Votre réponse'; }
          lab.querySelector('input').disabled = true;
        });
        const fb = fs.querySelector('.quiz-feedback');
        fb.hidden = false;
        fb.innerHTML = `<strong>${ok ? 'Exact.' : 'Pas tout à fait.'}</strong> `;
        fb.append(document.createTextNode(q.why));
      });
      const s = progress.state;
      const prev = s.quiz[c.id];
      s.quiz[c.id] = { last: score, best: Math.max(score, prev ? prev.best : 0), date: new Date().toISOString() };
      progress.save();
      scoreEl.hidden = false;
      const msg = score === 5 ? 'Parfait ! Notion maîtrisée.' : score >= 4 ? 'Très bien : relisez la correction de la question manquée.' : score >= 3 ? 'Correct, mais revoyez l’explication et l’exemple.' : 'Reprenez le chapitre depuis l’étape 1, puis recommencez.';
      scoreEl.innerHTML = `<b>${score}/5</b><span>${esc(msg)}</span>`;
      if (score >= 4 && !OA.reducedMotion()) { scoreEl.classList.remove('burst'); void scoreEl.offsetWidth; scoreEl.classList.add('burst'); }
      onScore && onScore(score);
    });
    form.querySelector('[data-quiz="reset"]').addEventListener('click', () => {
      form.reset();
      form.querySelectorAll('.quiz-opt').forEach((lab) => {
        lab.classList.remove('is-correct', 'is-wrong');
        lab.querySelector('.mark').textContent = '';
        lab.querySelector('input').disabled = false;
      });
      form.querySelectorAll('.quiz-feedback').forEach((f) => { f.hidden = true; f.textContent = ''; });
      scoreEl.hidden = true;
      form.querySelector('input').focus();
    });
  }

  /* ======================================================================
     CHAPITRE
     ====================================================================== */
  const sectionHead = (n, id, title, ic) => `<div class="step-head"><span class="step-num" aria-hidden="true">${n}</span><h2 id="t-${id}">${icon(ic)} ${esc(title)}</h2></div>`;

  function chapter(id) {
    const c = chapterById(id);
    if (!c) return null;
    const i = chapterIndex(id);
    const prev = chapters[i - 1];
    const next = chapters[i + 1];
    const st = statusOf(c);
    const p = PARTS[c.part];
    const hasDemo = c['demo-html'] || c['demo-css'] || c['demo-js'];
    const examples = c.example.map((ex) => codeBlock(ex.code, ex.lang, `Exemple commenté — ${OA.LANG_LABEL[ex.lang]}`)).join('');
    const solutionCode = (c['solution-code'] || []).map((ex) => codeBlock(ex.code, ex.lang, `Correction — ${OA.LANG_LABEL[ex.lang]}`)).join('');
    const guidedSolution = ['html', 'css', 'js'].filter((l) => c[`guided-solution-${l}`]).map((l) => codeBlock(c[`guided-solution-${l}`], l, `Solution de l'exercice guidé — ${OA.LANG_LABEL[l]}`)).join('');

    const html = `
      <article class="part-${c.part}" aria-labelledby="ch-title">
      <header class="chapter-head reveal">
        <nav aria-label="Fil d'Ariane" class="muted" style="font-size:.9rem"><a href="#/accueil">Accueil</a> › <a href="#/partie/${c.part}">${esc(p.label)}</a> › <span aria-current="page">${esc(chapterNumber(c))}</span></nav>
        <h1 id="ch-title" class="title-glow" style="margin-top:.6rem">${esc(c.title)}</h1>
        <p class="lead muted">${esc(c.subtitle)}</p>
        <div class="chapter-meta">
          <span class="badge badge-part"><span class="part-dot" aria-hidden="true"></span>${esc(p.label)} · ${esc(chapterNumber(c))}</span>
          <span class="badge">${icon('timer')} ${esc(c.duration)}</span>
          <span class="badge badge-gold">${icon('target')} Ondea : ${esc(c.feature)}</span>
          <span class="badge ${st.done ? 'badge-success' : ''}" id="ch-status">${st.done ? `${icon('check')} Terminé` : 'En cours'}</span>
        </div>
      </header>

      <nav class="steps-nav no-print" aria-label="Étapes du chapitre">
        <ol>${STEPS.map(([sid, label], n) => `<li><a href="#/chapitre/${esc(c.id)}/${sid}" data-step="${sid}"><span class="n">${n + 1}</span>${esc(label)}</a></li>`).join('')}</ol>
      </nav>

      <section class="step card reveal" id="s-comprendre" aria-labelledby="t-comprendre">
        ${sectionHead(1, 'comprendre', 'Comprendre : explication pour débutant', 'sparkles')}
        <div class="prose">${c.intro}</div>
      </section>

      <section class="step card reveal" id="s-exemple" aria-labelledby="t-exemple">
        ${sectionHead(2, 'exemple', 'Exemple commenté', 'code')}
        <p class="muted">Lisez chaque commentaire : il explique la ligne qui le précède ou le suit. Le bouton « Copier » place le code dans le presse-papiers.</p>
        ${examples}
      </section>

      <section class="step card reveal" id="s-explication" aria-labelledby="t-explication">
        ${sectionHead(3, 'explication', 'Explication du code', 'list')}
        <div class="prose">${c.explain}</div>
      </section>

      <section class="step card reveal" id="s-demo" aria-labelledby="t-demo">
        ${sectionHead(4, 'demo', 'Démonstration visuelle', 'eye')}
        ${hasDemo ? `<p class="muted">Cet aperçu est <strong>vivant</strong> : modifiez une valeur dans l'éditeur, le résultat change immédiatement. Cassez des choses, c'est fait pour !</p><div data-mount="demo"></div>` : ''}
      </section>

      <section class="step card reveal" id="s-guide" aria-labelledby="t-guide">
        ${sectionHead(5, 'guide', 'Exercice guidé', 'target')}
        <div class="exercise-statement prose">${c.guided}</div>
        <div data-mount="guided"></div>
        <div class="btn-row" style="margin-top:1rem">
          <button class="btn btn-gold" type="button" data-action="check">${icon('check')} Vérifier mon code</button>
          <button class="btn" type="button" data-action="show-solution">${icon('eye')} Charger la solution</button>
          ${st.guided ? `<span class="badge badge-success">${icon('check')} Exercice déjà réussi</span>` : ''}
        </div>
        <div data-checks aria-live="polite"></div>
        <details class="reveal-box solution"><summary>Voir la solution commentée de l'exercice guidé</summary><div>${guidedSolution}</div></details>
      </section>

      <section class="step card reveal" id="s-autonome" aria-labelledby="t-autonome">
        ${sectionHead(6, 'autonome', 'Exercice autonome', 'flag')}
        <div class="prose">${c.auto}</div>
        <p class="muted">Réalisez cet exercice dans votre éditeur (VS Code) sur votre ordinateur, dans votre propre dossier de projet. Vous pouvez aussi tester des morceaux de code dans la démonstration ci-dessus.</p>
        <label class="check-line"><input type="checkbox" data-action="auto" ${st.auto ? 'checked' : ''}> <span>J'ai réalisé l'exercice autonome et comparé avec la correction.</span></label>
      </section>

      <section class="step card reveal" id="s-correction" aria-labelledby="t-correction">
        ${sectionHead(7, 'correction', 'Correction détaillée', 'check')}
        <details class="reveal-box"><summary>Afficher la correction de l'exercice autonome</summary>
          <div><div class="prose">${c.solution}</div>${solutionCode}</div>
        </details>
      </section>

      <section class="step card reveal" id="s-qcm" aria-labelledby="t-qcm">
        ${sectionHead(8, 'qcm', 'QCM : 5 questions', 'award')}
        <p class="muted">Une seule bonne réponse par question. La correction s'affiche immédiatement. 4/5 ou plus valide la notion.</p>
        ${quizHtml(c)}
      </section>

      <section class="step card ondea-card glow-border reveal" id="s-ondea" aria-labelledby="t-ondea">
        ${sectionHead(9, 'ondea', 'Lien avec Ondea Commandes', 'box')}
        <p class="feature">${icon('target')} Fonctionnalité concernée : ${esc(c.feature)}</p>
        <div class="prose">${c.ondea}</div>
        <p><a href="#/fil-rouge">${icon('route')} Voir où se place ce chapitre dans le fil rouge</a></p>
      </section>

      <div class="chapter-end">
        <button class="btn ${st.done ? '' : 'btn-primary'}" type="button" data-action="done" aria-pressed="${st.done}">${icon('check')} ${st.done ? 'Chapitre terminé (annuler)' : 'Marquer le chapitre comme terminé'}</button>
        <span class="muted" id="ch-hint">${st.done ? '' : 'Astuce : un exercice guidé réussi + un QCM à 4/5 valident le chapitre automatiquement.'}</span>
      </div>
      <nav class="pager" aria-label="Chapitres précédent et suivant">
        ${prev ? `<a class="prev" href="#/chapitre/${esc(prev.id)}"><small>${icon('chev-l')} Précédent · ${esc(chapterNumber(prev))}</small><b>${esc(prev.title)}</b></a>` : '<span></span>'}
        ${next ? `<a class="next" href="#/chapitre/${esc(next.id)}"><small>Suivant · ${esc(chapterNumber(next))} ${icon('chev-r')}</small><b>${esc(next.title)}</b></a>` : `<a class="next" href="#/jury"><small>Et ensuite ${icon('chev-r')}</small><b>Préparer le jury</b></a>`}
      </nav>
      </article>`;

    function mount(root) {
      progress.state.last = c.id;
      progress.save();

      // Démonstration
      const demoSlot = root.querySelector('[data-mount="demo"]');
      if (demoSlot) {
        const demo = new OA.Playground({ key: `demo-${c.id}`, files: { html: c['demo-html'], css: c['demo-css'], js: c['demo-js'] } });
        demoSlot.append(demo.render());
      }

      // Exercice guidé
      const starter = { html: c['guided-html'] || '', css: c['guided-css'] || '', js: c['guided-js'] || '' };
      const solution = { html: c['guided-solution-html'] || '', css: c['guided-solution-css'] || '', js: c['guided-solution-js'] || '' };
      // Les parties non modifiées par la solution reprennent le code de départ
      ['html', 'css', 'js'].forEach((l) => { if (!solution[l]) solution[l] = starter[l]; });
      const guided = new OA.Playground({ key: `guided-${c.id}`, files: starter, solution, checks: c.checks, persist: true });
      root.querySelector('[data-mount="guided"]').append(guided.render());
      const checksBox = root.querySelector('[data-checks]');

      const maybeAutoComplete = () => {
        const s = progress.state;
        if (!s.done[c.id] && s.guided[c.id] && s.quiz[c.id] && s.quiz[c.id].best >= 4) {
          progress.setDone(c.id, true);
          toast(`Chapitre « ${c.title} » validé automatiquement !`, 'success');
          refreshDoneUi();
        }
      };

      root.querySelector('[data-action="check"]').addEventListener('click', async (e) => {
        const btn = e.currentTarget;
        btn.disabled = true;
        checksBox.innerHTML = '<p class="muted">Vérification en cours…</p>';
        const results = await guided.check();
        btn.disabled = false;
        const scored = results.filter((r) => !r.info);
        const okCount = scored.filter((r) => r.ok).length;
        const all = okCount === scored.length;
        checksBox.innerHTML = `<ul class="checks">${results.map((r) => `<li class="${r.info ? 'info' : r.ok ? 'ok' : 'ko'}"><span class="i" aria-hidden="true">${r.info ? 'i' : r.ok ? '✓' : '✗'}</span><span><span class="visually-hidden">${r.info ? 'Action :' : r.ok ? 'Validé :' : 'Non validé :'}</span> ${esc(r.label)}${!r.ok && r.why ? `<span class="why">${esc(r.why)}</span>` : ''}</span></li>`).join('')}</ul>
          <p class="result-banner ${all ? 'ok' : 'ko'}">${all ? `Bravo ! Les ${scored.length} critères sont validés.` : `${okCount} critère(s) validé(s) sur ${scored.length}. Corrigez les points marqués ✗ puis vérifiez à nouveau.`}</p>`;
        if (all) {
          if (!progress.state.guided[c.id]) progress.setFlag('guided', c.id, true);
          toast('Exercice guidé réussi !', 'success');
          if (!OA.reducedMotion()) { guided.el.classList.remove('burst'); void guided.el.offsetWidth; guided.el.classList.add('burst'); }
          maybeAutoComplete();
        }
      });
      root.querySelector('[data-action="show-solution"]').addEventListener('click', async () => {
        if (await OA.confirmDialog('Charger la solution dans l’éditeur ? Votre code actuel sera remplacé. Essayez d’abord seul : c’est en se trompant qu’on apprend !', 'Charger la solution')) {
          guided.setCode(solution);
          toast('Solution chargée : lisez-la, puis cliquez sur « Vérifier mon code ».');
        }
      });

      root.querySelector('[data-action="auto"]').addEventListener('change', (e) => {
        progress.setFlag('auto', c.id, e.target.checked);
        if (e.target.checked) toast('Exercice autonome noté comme réalisé.', 'success');
      });

      mountQuiz(root, c, () => maybeAutoComplete());

      const doneBtn = root.querySelector('[data-action="done"]');
      function refreshDoneUi() {
        const d = progress.isDone(c.id);
        doneBtn.setAttribute('aria-pressed', String(d));
        doneBtn.classList.toggle('btn-primary', !d);
        doneBtn.innerHTML = `${icon('check')} ${d ? 'Chapitre terminé (annuler)' : 'Marquer le chapitre comme terminé'}`;
        root.querySelector('#ch-status').className = `badge ${d ? 'badge-success' : ''}`;
        root.querySelector('#ch-status').innerHTML = d ? `${icon('check')} Terminé` : 'En cours';
        root.querySelector('#ch-hint').textContent = d ? '' : 'Astuce : un exercice guidé réussi + un QCM à 4/5 valident le chapitre automatiquement.';
      }
      doneBtn.addEventListener('click', () => {
        const d = !progress.isDone(c.id);
        progress.setDone(c.id, d);
        refreshDoneUi();
        toast(d ? 'Chapitre marqué comme terminé.' : 'Chapitre remis « en cours ».', d ? 'success' : '');
      });
    }

    return { title: `${chapterNumber(c)} · ${c.title}`, html, mount, chapter: c };
  }

  /* ======================================================================
     FIL ROUGE
     ====================================================================== */
  function filRouge() {
    const s = progress.state;
    const items = data.filRouge.map((f, i) => {
      const checked = s.fr[f.id] || [];
      const complete = checked.length === f.mission.length;
      return `<li class="reveal" id="${esc(f.id)}">
        <span class="tl-num ${complete ? 'is-done' : ''}" aria-hidden="true">${i + 1}</span>
        <article class="card" aria-labelledby="h-${esc(f.id)}">
          <p class="eyebrow">${icon(f.icone === 'menu' ? 'list' : f.icone)} Étape ${i + 1} sur ${data.filRouge.length}${complete ? ' · terminée' : ''}</p>
          <h2 id="h-${esc(f.id)}" style="font-size:1.5rem">${esc(f.titre)}</h2>
          <p>${esc(f.objectif)}</p>
          <h3 style="font-size:1.05rem;font-family:var(--font-body)">Notions nécessaires</h3>
          <ul class="chips" style="list-style:none;padding:0">${f.chapitres.map((cid) => { const c = chapterById(cid); return `<li><a class="badge badge-part part-${c.part}" href="#/chapitre/${esc(cid)}">${progress.isDone(cid) ? icon('check') : ''}${esc(chapterNumber(c))} · ${esc(c.title)}</a></li>`; }).join('')}</ul>
          <h3 style="font-size:1.05rem;font-family:var(--font-body);margin-top:1rem">Mission</h3>
          <ul class="mission">${f.mission.map((m, j) => `<li><label><input type="checkbox" data-fr="${esc(f.id)}" data-j="${j}" ${checked.includes(j) ? 'checked' : ''}><span>${esc(m)}</span></label></li>`).join('')}</ul>
          <dl class="kv"><dt>Livrable</dt><dd>${esc(f.livrable)}</dd><dt>Dans Ondea</dt><dd>${f.fichiers.map((x) => `<code>${esc(x)}</code>`).join(' ')}</dd></dl>
        </article></li>`;
    }).join('');
    const doneSteps = data.filRouge.filter((f) => (s.fr[f.id] || []).length === f.mission.length).length;
    return {
      title: 'Fil rouge Ondea Commandes',
      html: `<header class="chapter-head reveal">
        <p class="eyebrow">${icon('route')} Application fil rouge</p>
        <h1 class="title-glow">Construire Ondea Commandes</h1>
        <p class="lead muted prose">Douze étapes pour reconstruire progressivement l'application. Chaque étape liste les chapitres à maîtriser, une mission découpée en tâches à cocher et le livrable attendu. Les fichiers indiqués sont ceux de la vraie application.</p>
        <div class="btn-row" style="max-width:460px"><div class="progress progress-lg"><span id="fr-bar" style="--value:${Math.round((doneSteps / data.filRouge.length) * 100)}%"></span></div><span id="fr-count">${doneSteps}/${data.filRouge.length} étapes</span></div>
      </header>
      <ol class="timeline">${items}</ol>`,
      mount(root) {
        root.addEventListener('change', (e) => {
          const cb = e.target.closest('[data-fr]');
          if (!cb) return;
          const id = cb.dataset.fr;
          const j = Number(cb.dataset.j);
          const list = new Set(progress.state.fr[id] || []);
          if (cb.checked) list.add(j); else list.delete(j);
          progress.state.fr[id] = Array.from(list).sort();
          progress.save();
          const f = data.filRouge.find((x) => x.id === id);
          const complete = list.size === f.mission.length;
          root.querySelector(`#${CSS.escape(id)} .tl-num`).classList.toggle('is-done', complete);
          const n = data.filRouge.filter((x) => (progress.state.fr[x.id] || []).length === x.mission.length).length;
          root.querySelector('#fr-bar').style.setProperty('--value', `${Math.round((n / data.filRouge.length) * 100)}%`);
          root.querySelector('#fr-count').textContent = `${n}/${data.filRouge.length} étapes`;
          if (complete) toast(`Étape « ${f.titre} » terminée !`, 'success');
        });
      }
    };
  }

  /* ======================================================================
     GLOSSAIRE
     ====================================================================== */
  function glossaire(query = '') {
    const sorted = [...data.glossaire].sort((a, b) => a[0].localeCompare(b[0], 'fr'));
    const letters = [...new Set(sorted.map(([t]) => norm(t).charAt(0).toUpperCase()))];
    return {
      title: 'Glossaire technique',
      html: `<header class="chapter-head reveal">
        <p class="eyebrow">${icon('book')} ${sorted.length} définitions</p>
        <h1 class="title-glow">Glossaire technique</h1>
        <p class="lead muted">Le vocabulaire du développeur web, expliqué simplement.</p>
      </header>
      <div class="glossary-tools no-print">
        <div class="field" style="flex:1;min-width:240px"><label for="gloss-q">Filtrer le glossaire</label><input class="input" id="gloss-q" type="search" value="${esc(query)}" placeholder="Ex. : DOM, contraste, promesse…" aria-describedby="gloss-count"></div>
        <button class="btn" type="button" id="gloss-print">${icon('print')} Imprimer</button>
      </div>
      <p id="gloss-count" class="muted" role="status" aria-live="polite"></p>
      <nav class="letters no-print" aria-label="Aller à la lettre">${letters.map((l) => `<a href="#/glossaire" data-letter="${l}">${l}</a>`).join('')}</nav>
      <div id="gloss-list"></div>`,
      mount(root) {
        const input = root.querySelector('#gloss-q');
        const list = root.querySelector('#gloss-list');
        const render = () => {
          const q = norm(input.value.trim());
          const items = sorted.filter(([t, d]) => !q || norm(t).includes(q) || norm(d).includes(q));
          let current = '';
          let out = '';
          items.forEach(([t, d]) => {
            const L = norm(t).charAt(0).toUpperCase();
            if (L !== current) {
              if (current) out += '</dl>';
              current = L;
              out += `<h2 class="gloss-letter" id="g-${L}" tabindex="-1">${L}</h2><dl class="gloss">`;
            }
            out += `<div><dt>${esc(t)}</dt><dd>${esc(d)}</dd></div>`;
          });
          if (current) out += '</dl>';
          list.innerHTML = out || '<p>Aucun terme ne correspond. Essayez un autre mot ou la recherche générale (Ctrl + K).</p>';
          root.querySelector('#gloss-count').textContent = `${items.length} terme(s) affiché(s).`;
        };
        input.addEventListener('input', render);
        render();
        root.querySelector('.letters').addEventListener('click', (e) => {
          const a = e.target.closest('[data-letter]');
          if (!a) return;
          e.preventDefault();
          input.value = '';
          render();
          const h = root.querySelector(`#g-${a.dataset.letter}`);
          if (h) { h.scrollIntoView({ behavior: OA.reducedMotion() ? 'auto' : 'smooth', block: 'start' }); h.focus({ preventScroll: true }); }
        });
        root.querySelector('#gloss-print').addEventListener('click', () => { input.value = ''; render(); window.print(); });
      }
    };
  }

  /* ======================================================================
     FICHES MÉMO
     ====================================================================== */
  function memos() {
    const cards = data.memos.map((m) => `<article class="card memo reveal part-${m.part}" id="${esc(m.id)}" aria-labelledby="h-${esc(m.id)}">
        <div class="section-title" style="margin-top:0"><h2 id="h-${esc(m.id)}"><span class="part-dot" aria-hidden="true" style="display:inline-block;margin-right:.5rem"></span>${esc(m.titre)}</h2>
          <button class="btn btn-sm no-print" type="button" data-print="${esc(m.id)}">${icon('print')} Imprimer cette fiche</button></div>
        <div class="memo-blocks">${m.blocs.map(([t, code]) => `<section class="memo-block"><h3>${esc(t)}</h3><pre>${esc(code)}</pre></section>`).join('')}</div>
        <p class="muted" style="margin:.8rem 0 0;font-size:.85rem">Ondea Academy · DWWM 2027 · ondea-web-studio</p>
      </article>`).join('');
    return {
      title: 'Fiches mémo imprimables',
      html: `<header class="chapter-head reveal">
        <p class="eyebrow">${icon('print')} Format A4</p>
        <h1 class="title-glow">Fiches mémo imprimables</h1>
        <p class="lead muted">L'essentiel de chaque langage sur une page. Imprimez-les ou enregistrez-les en PDF (choisissez « Enregistrer au format PDF » dans la fenêtre d'impression).</p>
        <div class="btn-row no-print"><button class="btn btn-gold" type="button" data-print="all-memos">${icon('print')} Imprimer toutes les fiches</button></div>
      </header>
      <div class="memo-list">${cards}</div>`,
      mount(root) {
        root.addEventListener('click', (e) => {
          const b = e.target.closest('[data-print]');
          if (!b) return;
          document.body.dataset.print = b.dataset.print;
          window.print();
        });
      }
    };
  }

  /* ======================================================================
     PROGRESSION
     ====================================================================== */
  function progression() {
    const p = progress.percent();
    const s = progress.state;
    const rows = chapters.map((c) => {
      const st = statusOf(c);
      return `<tr><th scope="row"><a href="#/chapitre/${esc(c.id)}">${esc(chapterNumber(c))} · ${esc(c.title)}</a></th>
        <td>${st.guided ? '<span class="badge badge-success">Réussi</span>' : '<span class="badge">—</span>'}</td>
        <td>${st.auto ? '<span class="badge badge-success">Fait</span>' : '<span class="badge">—</span>'}</td>
        <td>${st.quiz !== null ? `<span class="badge ${st.quiz >= 4 ? 'badge-success' : 'badge-warning'}">${st.quiz}/5</span>` : '<span class="badge">—</span>'}</td>
        <td>${st.done ? `<span class="badge badge-success">${icon('check')} Terminé</span>` : '<span class="badge">En cours</span>'}</td></tr>`;
    }).join('');
    const quizzes = Object.values(s.quiz);
    const avg = quizzes.length ? (quizzes.reduce((n, q) => n + q.best, 0) / quizzes.length).toFixed(1).replace('.', ',') : '—';
    const partBar = (k) => { const pp = progress.partPercent(k); return `<div class="stat part-${k}"><b>${pp.pct} %</b><span>${esc(PARTS[k].label)} (${pp.done}/${pp.total})</span><div class="progress" style="margin-top:.5rem"><span style="--value:${pp.pct}%"></span></div></div>`; };
    return {
      title: 'Ma progression',
      html: `<header class="chapter-head reveal">
        <p class="eyebrow">${icon('chart')} Sauvegardée automatiquement dans ce navigateur</p>
        <h1 class="title-glow">Ma progression</h1>
        <div class="btn-row" style="max-width:520px"><div class="progress progress-lg"><span style="--value:${p.pct}%"></span></div><b>${p.pct} %</b></div>
        <div class="stats">
          ${partBar('html')}${partBar('css')}${partBar('js')}
          <div class="stat"><b>${avg}</b><span>moyenne des QCM (/5)</span></div>
          <div class="stat"><b>${Object.keys(s.guided).length}</b><span>exercices guidés réussis</span></div>
        </div>
      </header>
      <div class="table-wrap reveal" tabindex="0" role="region" aria-label="Tableau de progression par chapitre">
        <table class="table"><caption>Détail par chapitre</caption>
          <thead><tr><th scope="col">Chapitre</th><th scope="col">Exercice guidé</th><th scope="col">Exercice autonome</th><th scope="col">Meilleur QCM</th><th scope="col">Statut</th></tr></thead>
          <tbody>${rows}</tbody></table>
      </div>
      <section class="card reveal" style="margin-top:1.5rem" aria-labelledby="h-save">
        <h2 id="h-save">Sauvegarder ou transférer ma progression</h2>
        <p class="muted">La progression est enregistrée dans le LocalStorage de ce navigateur (clé <code>oa.progress.v1</code>). Pour changer d'ordinateur, exportez-la en JSON puis importez-la sur l'autre poste.</p>
        <div class="btn-row">
          <button class="btn btn-primary" type="button" id="pr-export">${icon('download')} Exporter (JSON)</button>
          <button class="btn" type="button" id="pr-import-btn">${icon('upload')} Importer un fichier</button>
          <input class="visually-hidden" type="file" id="pr-import" accept="application/json,.json" tabindex="-1" aria-hidden="true">
          <button class="btn btn-danger" type="button" id="pr-reset">${icon('trash')} Tout réinitialiser</button>
        </div>
      </section>`,
      mount(root) {
        root.querySelector('#pr-export').addEventListener('click', () => {
          OA.download(`ondea-academy-progression-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify({ app: 'ondea-academy', exportedAt: new Date().toISOString(), state: progress.state }, null, 2));
          toast('Progression exportée.', 'success');
        });
        root.querySelector('#pr-import-btn').addEventListener('click', () => root.querySelector('#pr-import').click());
        root.querySelector('#pr-import').addEventListener('change', async (e) => {
          const f = e.target.files[0];
          if (!f) return;
          try {
            const json = JSON.parse(await f.text());
            if (!json || json.app !== 'ondea-academy' || !json.state || json.state.v !== 1) throw new Error('Ce fichier ne provient pas d’Ondea Academy.');
            if (await OA.confirmDialog('Remplacer votre progression actuelle par celle du fichier ?', 'Importer')) {
              progress.replace(json.state);
              toast('Progression importée.', 'success');
              OA.router.refresh();
            }
          } catch (err) {
            toast(`Import impossible : ${err.message}`);
          }
          e.target.value = '';
        });
        root.querySelector('#pr-reset').addEventListener('click', async () => {
          if (await OA.confirmDialog('Effacer toute votre progression (chapitres, QCM, exercices, fil rouge, préparation jury) ? Cette action est définitive.', 'Tout effacer')) {
            progress.reset();
            try { Object.keys(localStorage).filter((k) => k.startsWith('oa.code.')).forEach((k) => localStorage.removeItem(k)); } catch (err) { /* ignoré */ }
            toast('Progression réinitialisée.');
            OA.router.refresh();
          }
        });
      }
    };
  }

  function notFound() {
    return { title: 'Page introuvable', html: `<section class="card reveal" style="text-align:center"><h1>Page introuvable</h1><p class="muted">Cette adresse ne correspond à aucune page du cours.</p><a class="btn btn-primary" href="#/accueil">${icon('home')} Retour à l'accueil</a></section>` };
  }

  OA.views = { home, part, chapter, filRouge, glossaire, memos, progression, notFound, STEPS };
})(window.OA);
