/* ==========================================================================
   Ondea Academy — jury.js
   Préparation à l'épreuve du titre professionnel DWWM : auto-évaluation,
   plan de présentation, chronomètre par phases, questions du jury,
   explication de code et simulation d'entretien.
   ========================================================================== */
(function (OA) {
  'use strict';

  const { esc, icon, progress, toast, codeBlock, data } = OA;
  const J = data.jury;
  const fmt = (sec) => {
    const neg = sec < 0;
    const s = Math.abs(Math.round(sec));
    return `${neg ? '+' : ''}${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  };

  function jury() {
    const st = progress.state.jury;
    const planDur = (i) => Number(st.plan[i] && st.plan[i].duree) || J.plan[i].duree;
    const totalPlan = () => J.plan.reduce((n, p, i) => n + planDur(i), 0);
    const grilleDone = () => J.grille.filter((g, i) => st.grille[i]).length;
    const rated = () => Object.values(st.rates).filter((r) => r === 'ok').length;

    const html = `
    <header class="chapter-head reveal">
      <p class="eyebrow">${icon('mic')} Titre professionnel DWWM · RNCP 37674 · Niveau 5</p>
      <h1 class="title-glow">Préparer la présentation devant le jury</h1>
      <div class="prose">${J.intro}</div>
      <div class="chapter-meta">
        <a class="badge" href="#/jury/ex1">1 · Auto-évaluation</a><a class="badge" href="#/jury/ex2">2 · Plan</a><a class="badge" href="#/jury/ex3">3 · Chronomètre</a>
        <a class="badge" href="#/jury/ex4">4 · Questions</a><a class="badge" href="#/jury/ex5">5 · Expliquer du code</a><a class="badge" href="#/jury/ex6">6 · Simulation</a>
      </div>
    </header>

    <section class="card reveal step" id="s-ex1" aria-labelledby="h-ex1">
      <div class="step-head"><span class="step-num" aria-hidden="true">1</span><h2 id="h-ex1">Auto-évaluation des compétences</h2></div>
      <h3 style="font-size:1.05rem;font-family:var(--font-body)">Compétences du CCP 1 – Développer la partie front-end d'une application web ou web mobile sécurisée</h3>
      <ol class="prose">${J.competences.map((c) => `<li>${esc(c)}</li>`).join('')}</ol>
      <p class="muted">Cochez seulement ce que vous savez faire <strong>à voix haute, sans notes</strong>. Refaites cette grille chaque semaine.</p>
      <ul class="mission">${J.grille.map((g, i) => `<li><label><input type="checkbox" data-grille="${i}" ${st.grille[i] ? 'checked' : ''}><span>${esc(g)}</span></label></li>`).join('')}</ul>
      <div class="btn-row" style="max-width:420px"><div class="progress"><span id="grille-bar" style="--value:${Math.round((grilleDone() / J.grille.length) * 100)}%"></span></div><span id="grille-count">${grilleDone()}/${J.grille.length}</span></div>
    </section>

    <section class="card reveal step" id="s-ex2" aria-labelledby="h-ex2">
      <div class="step-head"><span class="step-num" aria-hidden="true">2</span><h2 id="h-ex2">Construire votre plan de présentation</h2></div>
      <p class="muted">Adaptez les durées à celles de votre convocation. Notez pour chaque partie les idées clés, les captures et les extraits de code que vous montrerez. Tout est enregistré automatiquement.</p>
      <ol class="plan-list" id="plan-list">${J.plan.map((p, i) => `<li data-plan="${i}">
          <div class="plan-head"><h3 style="margin:0;font-size:1.1rem">${esc(p.titre)}</h3>
            <label class="muted" for="plan-d-${i}" style="margin-left:auto">Durée (min)</label>
            <input class="input" id="plan-d-${i}" type="number" min="1" max="30" step="1" value="${planDur(i)}" data-plan-d="${i}"></div>
          <p class="muted" style="margin:.2rem 0 .5rem">${esc(p.aide)}</p>
          <label class="visually-hidden" for="plan-n-${i}">Mes notes pour « ${esc(p.titre)} »</label>
          <textarea class="textarea" id="plan-n-${i}" data-plan-n="${i}" placeholder="Mes notes…">${esc((st.plan[i] && st.plan[i].notes) || '')}</textarea>
        </li>`).join('')}</ol>
      <div class="btn-row" style="margin-top:1rem"><span>Durée totale prévue : <b id="plan-total">${totalPlan()} min</b></span>
        <button class="btn" type="button" id="plan-export">${icon('download')} Télécharger mon plan (.txt)</button></div>
    </section>

    <section class="card reveal step" id="s-ex3" aria-labelledby="h-ex3">
      <div class="step-head"><span class="step-num" aria-hidden="true">3</span><h2 id="h-ex3">Répéter avec le chronomètre</h2></div>
      <p class="muted">Le chronomètre suit les durées de votre plan et annonce chaque changement de partie. Répétez debout, à voix haute, devant un camarade qui joue le jury.</p>
      <div class="timer">
        <div class="timer-display" id="timer-display" aria-hidden="true">${fmt(totalPlan() * 60)}</div>
        <p class="timer-phase" id="timer-phase">Prêt : ${esc(J.plan[0].titre)}</p>
        <div class="progress progress-lg"><span id="timer-bar" style="--value:0%"></span></div>
        <p class="visually-hidden" id="timer-live" role="status" aria-live="polite"></p>
        <div class="btn-row">
          <button class="btn btn-gold" type="button" id="timer-start">${icon('play')} Démarrer</button>
          <button class="btn" type="button" id="timer-reset">${icon('reset')} Remettre à zéro</button>
          <span class="muted" id="timer-remaining">Temps restant : ${fmt(totalPlan() * 60)}</span>
        </div>
      </div>
    </section>

    <section class="card reveal step" id="s-ex4" aria-labelledby="h-ex4">
      <div class="step-head"><span class="step-num" aria-hidden="true">4</span><h2 id="h-ex4">Questions fréquentes du jury</h2></div>
      <p class="muted">Pour chaque question : répondez d'abord à voix haute (1 minute), puis ouvrez la réponse modèle et évaluez-vous. <b id="rate-count">${rated()}</b>/${J.questions.length} questions maîtrisées.</p>
      <div class="btn-row" style="margin-bottom:1rem"><label class="check-line" style="margin:0"><input type="checkbox" id="only-review"> <span>Afficher seulement les questions « à revoir » ou non évaluées</span></label></div>
      <div id="questions">${J.questions.map((q, i) => `<details class="reveal-box" style="margin-bottom:.6rem" data-qi="${i}">
          <summary>${esc(q.q)}</summary>
          <div><p>${esc(q.r)}</p>
            <div class="rate" role="group" aria-label="Mon niveau sur cette question">
              <button class="btn btn-sm" type="button" data-rate="revoir" aria-pressed="${st.rates[i] === 'revoir'}">À revoir</button>
              <button class="btn btn-sm" type="button" data-rate="ok" aria-pressed="${st.rates[i] === 'ok'}">${icon('check')} Maîtrisée</button>
            </div></div>
        </details>`).join('')}</div>
    </section>

    <section class="card reveal step" id="s-ex5" aria-labelledby="h-ex5">
      <div class="step-head"><span class="step-num" aria-hidden="true">5</span><h2 id="h-ex5">Expliquer un extrait de code</h2></div>
      <p class="muted">Le jury vous demandera d'expliquer une partie de votre code. Pour chaque extrait (issu d'Ondea Commandes), expliquez-le en 2 minutes maximum puis cochez les points que vous avez réellement abordés.</p>
      ${J.code.map((x, i) => `<article style="margin-bottom:1.5rem"><h3>${esc(x.titre)}</h3>${codeBlock(x.code, 'js', x.titre)}
        <ul class="mission">${x.points.map((pt, j) => `<li><label><input type="checkbox" data-code="${i}-${j}" ${st.code[`${i}-${j}`] ? 'checked' : ''}><span>${esc(pt)}</span></label></li>`).join('')}</ul></article>`).join('')}
    </section>

    <section class="card reveal step glow-border" id="s-ex6" aria-labelledby="h-ex6">
      <div class="step-head"><span class="step-num" aria-hidden="true">6</span><h2 id="h-ex6">Simulation d'entretien technique</h2></div>
      <p class="muted">Tirez une question au hasard : vous avez 60 secondes pour répondre sans regarder vos notes.</p>
      <div class="btn-row"><button class="btn btn-primary" type="button" id="sim-draw">${icon('sparkles')} Tirer une question</button><span class="timer-display" style="font-size:2rem" id="sim-timer" aria-hidden="true">1:00</span></div>
      <p id="sim-q" role="status" aria-live="polite" style="font-size:1.25rem;font-weight:700;margin-top:1rem;color:var(--heading)"></p>
    </section>`;

    let tick = null;
    let simTick = null;

    function mount(root) {
      // 1. Grille
      root.querySelector('#s-ex1').addEventListener('change', (e) => {
        const cb = e.target.closest('[data-grille]');
        if (!cb) return;
        if (cb.checked) st.grille[cb.dataset.grille] = true; else delete st.grille[cb.dataset.grille];
        progress.save();
        root.querySelector('#grille-bar').style.setProperty('--value', `${Math.round((grilleDone() / J.grille.length) * 100)}%`);
        root.querySelector('#grille-count').textContent = `${grilleDone()}/${J.grille.length}`;
      });

      // 2. Plan
      const planList = root.querySelector('#plan-list');
      let saveTimer = null;
      planList.addEventListener('input', (e) => {
        const d = e.target.closest('[data-plan-d]');
        const n = e.target.closest('[data-plan-n]');
        const i = d ? d.dataset.planD : n ? n.dataset.planN : null;
        if (i === null) return;
        st.plan[i] = st.plan[i] || {};
        if (d) {
          const v = Math.min(30, Math.max(1, parseInt(d.value, 10) || J.plan[i].duree));
          st.plan[i].duree = v;
          root.querySelector('#plan-total').textContent = `${totalPlan()} min`;
          if (!running) resetTimer();
        }
        if (n) st.plan[i].notes = n.value;
        clearTimeout(saveTimer);
        saveTimer = setTimeout(() => progress.save(), 400);
      });
      root.querySelector('#plan-export').addEventListener('click', () => {
        const txt = J.plan.map((p, i) => `${i + 1}. ${p.titre} (${planDur(i)} min)\n${(st.plan[i] && st.plan[i].notes) || '(pas de notes)'}\n`).join('\n');
        OA.download('plan-presentation-jury-dwwm.txt', `Plan de présentation — Ondea Commandes\nDurée totale : ${totalPlan()} min\n\n${txt}`, 'text/plain;charset=utf-8');
        toast('Plan téléchargé.', 'success');
      });

      // 3. Chronomètre par phases
      const display = root.querySelector('#timer-display');
      const phaseEl = root.querySelector('#timer-phase');
      const live = root.querySelector('#timer-live');
      const bar = root.querySelector('#timer-bar');
      const remainingEl = root.querySelector('#timer-remaining');
      const startBtn = root.querySelector('#timer-start');
      let running = false;
      let elapsed = 0;       // secondes écoulées
      let startedAt = 0;
      let lastPhase = -1;
      const phaseAt = (sec) => {
        let acc = 0;
        for (let i = 0; i < J.plan.length; i++) { acc += planDur(i) * 60; if (sec < acc) return i; }
        return J.plan.length;
      };
      function paint() {
        const total = totalPlan() * 60;
        const remaining = total - elapsed;
        display.textContent = fmt(remaining);
        display.classList.toggle('is-over', remaining < 0);
        remainingEl.textContent = remaining >= 0 ? `Temps restant : ${fmt(remaining)}` : `Dépassement : ${fmt(remaining)}`;
        bar.style.setProperty('--value', `${Math.min(100, (elapsed / total) * 100)}%`);
        const ph = phaseAt(elapsed);
        planList.querySelectorAll('li').forEach((li, i) => li.classList.toggle('is-current', running && i === ph));
        if (ph !== lastPhase) {
          lastPhase = ph;
          const label = ph < J.plan.length ? `Partie ${ph + 1} : ${J.plan[ph].titre}` : 'Temps écoulé : concluez !';
          phaseEl.textContent = label;
          if (running) live.textContent = label;
        }
      }
      function resetTimer() {
        running = false; elapsed = 0; lastPhase = -1;
        clearInterval(tick);
        startBtn.innerHTML = `${icon('play')} Démarrer`;
        paint();
        phaseEl.textContent = `Prêt : ${J.plan[0].titre}`;
      }
      startBtn.addEventListener('click', () => {
        if (running) {
          running = false;
          clearInterval(tick);
          startBtn.innerHTML = `${icon('play')} Reprendre`;
          live.textContent = 'Chronomètre en pause.';
          return;
        }
        running = true;
        startedAt = Date.now() - elapsed * 1000;
        startBtn.innerHTML = `${icon('pause')} Pause`;
        live.textContent = 'Chronomètre démarré.';
        tick = setInterval(() => { elapsed = (Date.now() - startedAt) / 1000; paint(); }, 250);
        paint();
      });
      root.querySelector('#timer-reset').addEventListener('click', resetTimer);

      // 4. Questions
      const qBox = root.querySelector('#questions');
      const onlyReview = root.querySelector('#only-review');
      const applyFilter = () => {
        qBox.querySelectorAll('[data-qi]').forEach((d) => { d.hidden = onlyReview.checked && st.rates[d.dataset.qi] === 'ok'; });
      };
      onlyReview.addEventListener('change', applyFilter);
      qBox.addEventListener('click', (e) => {
        const b = e.target.closest('[data-rate]');
        if (!b) return;
        const i = b.closest('[data-qi]').dataset.qi;
        st.rates[i] = b.dataset.rate;
        progress.save();
        b.parentElement.querySelectorAll('[data-rate]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
        root.querySelector('#rate-count').textContent = rated();
        applyFilter();
      });

      // 5. Points de code
      root.querySelector('#s-ex5').addEventListener('change', (e) => {
        const cb = e.target.closest('[data-code]');
        if (!cb) return;
        if (cb.checked) st.code[cb.dataset.code] = true; else delete st.code[cb.dataset.code];
        progress.save();
      });

      // 6. Simulation
      const simQ = root.querySelector('#sim-q');
      const simT = root.querySelector('#sim-timer');
      let lastQ = -1;
      root.querySelector('#sim-draw').addEventListener('click', () => {
        let i;
        do { i = Math.floor(Math.random() * J.questions.length); } while (i === lastQ && J.questions.length > 1);
        lastQ = i;
        simQ.textContent = J.questions[i].q;
        clearInterval(simTick);
        const end = Date.now() + 60000;
        simT.classList.remove('is-over');
        simT.textContent = '1:00';
        simTick = setInterval(() => {
          const left = Math.ceil((end - Date.now()) / 1000);
          simT.textContent = fmt(Math.max(0, left));
          if (left <= 0) { clearInterval(simTick); simT.classList.add('is-over'); toast('Temps écoulé ! Comparez avec la réponse modèle (exercice 4).'); }
        }, 250);
      });
    }

    return {
      title: 'Préparation au jury',
      html,
      mount,
      unmount() { clearInterval(tick); clearInterval(simTick); }
    };
  }

  OA.views.jury = jury;
})(window.OA);
