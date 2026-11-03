# Ondea Academy — Cours interactif HTML5 · CSS3 · JavaScript (DWWM 2027)

Plateforme pédagogique pour les stagiaires **Développeur web et web mobile** (titre professionnel RNCP 37674, niveau 5), grands débutants. Tout le cours est construit autour de l'application professionnelle **Ondea Commandes** (gestion des commandes pour TPE/PME) : chaque notion est reliée à une fonctionnalité réelle et à un fichier de l'application.

- **26 chapitres** : 7 HTML5, 8 CSS3, 11 JavaScript (environ 34 h de travail guidé)
- Pour chaque chapitre : explication pour débutant, exemple commenté, explication du code, démonstration modifiable, exercice guidé **corrigé automatiquement**, exercice autonome, correction détaillée, **QCM de 5 questions** (130 au total), lien concret avec Ondea Commandes
- **Fil rouge** en 12 étapes pour reconstruire l'application (connexion et profils, tableau de bord, navigation, clients et produits, commandes, calculs HT/TVA/TTC, stocks, préparation et livraison, recherche et filtres, statistiques et notifications, sauvegarde, images avec IndexedDB)
- **Préparation au jury** : auto-évaluation des compétences du CCP 1, plan de présentation, chronomètre par phases, 15 questions du jury avec réponses modèles, explication d'extraits de code, simulation d'entretien
- **Glossaire** (49 termes) et **4 fiches mémo imprimables** (HTML, CSS, JavaScript, architecture Ondea)

## Installation et démarrage

Aucune installation, aucun serveur, aucune connexion Internet nécessaire.

1. Décompressez l'archive `cours-dwwm-ondea.zip`.
2. Ouvrez le dossier `cours-dwwm-ondea/`.
3. Double-cliquez sur **`index.html`** : le cours s'ouvre dans votre navigateur.

Navigateurs conseillés : Chrome, Edge, Firefox ou Safari dans une version récente (2024 ou plus). Le cours fonctionne directement en `file://`.

> Pour une salle de formation, vous pouvez aussi copier le dossier sur un partage réseau ou le publier sur n'importe quel hébergement statique (GitHub Pages, par exemple) : il n'y a rien à configurer.

## Utilisation

| Action | Comment |
|---|---|
| Sommaire | Barre latérale (bouton ☰ sur tablette et smartphone) |
| Rechercher dans tout le cours | Bouton « Rechercher », <kbd>Ctrl</kbd>+<kbd>K</kbd> (<kbd>⌘</kbd>+<kbd>K</kbd> sur Mac) ou <kbd>/</kbd> |
| Chapitre suivant / précédent | Liens en bas de page, ou <kbd>Alt</kbd>+<kbd>→</kbd> / <kbd>Alt</kbd>+<kbd>←</kbd> |
| Thème clair / sombre | Bouton soleil / lune (choix mémorisé ; au premier lancement, le thème du système est utilisé) |
| Réduire les animations | Bouton « onde » de la barre supérieure (la préférence système `prefers-reduced-motion` est aussi respectée) |
| Exécuter le code d'un bac à sable | Automatique à la frappe, bouton « Exécuter » ou <kbd>Ctrl</kbd>+<kbd>Entrée</kbd> |
| Quitter un éditeur de code au clavier | <kbd>Échap</kbd> puis <kbd>Tab</kbd> (<kbd>Tab</kbd> seul insère une indentation) |
| Imprimer une fiche mémo / l'enregistrer en PDF | Page « Fiches mémo » → « Imprimer cette fiche » |

### Progression
La progression (chapitres terminés, exercices réussis, meilleurs scores de QCM, étapes du fil rouge, préparation jury) et le code saisi dans les exercices guidés sont enregistrés **dans le navigateur** (LocalStorage, clés préfixées `oa.`). Un chapitre est validé automatiquement quand l'exercice guidé est réussi et que le QCM atteint 4/5 ; on peut aussi le marquer manuellement.

Page **Ma progression** : export de la progression en JSON (pour changer de poste), import, réinitialisation.

> La progression est propre à chaque navigateur et à chaque poste. Si les stagiaires changent de machine, ils exportent puis importent leur fichier JSON.

## Parcours conseillé

1. **HTML5** (H1 → H7), puis l'étape 1 du fil rouge (structure de l'écran de connexion).
2. **CSS3** (C1 → C8), en appliquant chaque notion à la maquette Ondea.
3. **JavaScript** (J1 → J11), en suivant les étapes 2 à 12 du fil rouge.
4. **Préparation au jury** en fin de parcours, puis chaque semaine jusqu'à la session.

Pour chaque chapitre, les 9 étapes se suivent dans l'ordre. Les exercices autonomes se font dans VS Code, dans le dossier de projet du stagiaire.

## Architecture du projet

```
cours-dwwm-ondea/
├── index.html              Page unique : coque sémantique, sprite d'icônes, dialogues
├── css/
│   ├── theme.css           Polices + jetons « Obsidienne & Or » (thèmes sombre et clair, contrastes ≥ 7:1)
│   ├── style.css           Base, mise en page Grid/Flexbox, composants, responsive mobile first
│   ├── effects.css         Introduction animée, titres lumineux, bordures animées, apparitions, reduced motion
│   └── print.css           Impression A4 (fiches mémo, glossaire, chapitres)
├── js/                     Scripts classiques chargés dans l'ordre (compatibles file://)
│   ├── theme-init.js       Applique le thème avant l'affichage (pas de flash)
│   ├── data.js             Contenu du cours (généré, voir « Modifier le contenu »)
│   ├── core.js             Espace de noms window.OA, échappement HTML, progression, toasts, dialogues
│   ├── highlight.js        Coloration syntaxique HTML / CSS / JS maison
│   ├── playground.js       Bac à sable (éditeurs, aperçu iframe, console) + correcteur automatique
│   ├── views.js            Vues : accueil, parties, chapitres, QCM, fil rouge, glossaire, mémos, progression
│   ├── jury.js             Préparation à l'épreuve du titre professionnel
│   └── app.js              Routeur par hash, sommaire, recherche, thèmes, introduction, raccourcis
├── assets/
│   ├── fonts/              Playfair Display, Atkinson Hyperlegible, JetBrains Mono (woff2, licence OFL)
│   └── img/                Favicon Ondea, image d'exercice
└── sources-contenu/        Sources éditables du contenu + script de génération de js/data.js
```

L'architecture reprend volontairement celle d'Ondea Commandes (scripts `defer` dans l'ordre, espace de noms unique, échappement systématique, LocalStorage préfixé) : le code du cours est lui-même un exemple que les stagiaires peuvent lire.

## Modifier le contenu

Le contenu des chapitres est rédigé dans `sources-contenu/content/html.txt`, `css.txt`, `js.txt` (format texte à blocs `§intro`, `§example js`, `§guided-checks`, `§quiz`…) et `extra.py` (fil rouge, jury, glossaire, fiches mémo). Après modification, regénérez `js/data.js` avec Python 3 :

```bash
cd sources-contenu
python3 build.py ../js/data.js
```

Le script vérifie que chaque chapitre contient toutes les rubriques et exactement 5 questions de QCM. Les critères de correction automatique des exercices guidés sont décrits en tête de `js/playground.js`.

## Accessibilité

- Structure sémantique (landmarks, titres hiérarchisés, listes, tableaux avec `caption` et `scope`)
- Navigation complète au clavier, focus toujours visible, lien d'évitement, dialogues natifs `<dialog>`
- Contrastes visés au niveau **AAA (≥ 7:1)** dans les deux thèmes, y compris dans les blocs de code
- Messages (toasts, résultats d'exercice, score du QCM, chronomètre) annoncés par des régions `aria-live`
- Information jamais transmise par la seule couleur (icône + texte)
- Respect de `prefers-reduced-motion` + bouton pour couper les animations
- Audit axe-core (WCAG 2.2 A/AA/AAA + bonnes pratiques) sans violation sur les vues principales

## Notes techniques

- Le code des stagiaires s'exécute dans une `<iframe srcdoc>` locale. Les démonstrations IndexedDB utilisent des bases dédiées (`demo-ondea-cours`, `exo-ondea-produits`) sans lien avec l'application Ondea Commandes.
- Les erreurs JavaScript des bacs à sable sont traduites en conseils pour débutants (« Ce nom n'existe pas : faute de frappe ? »).
- L'introduction animée s'affiche une fois par session ; « Rejouer l'introduction » en pied de page.
- Les durées officielles des épreuves du titre professionnel figurent dans le référentiel de certification en vigueur et la convocation : la page « Préparer le jury » permet d'adapter les durées du plan et du chronomètre.

## Crédits et licences

- Conception et contenu : Ondea Web Studio — Jean-Claude Lugo, Centre de Formation MODE 83 (Draguignan).
- Polices : Playfair Display, Atkinson Hyperlegible, JetBrains Mono — SIL Open Font License (voir `assets/fonts/OFL-LICENSE.txt`).
