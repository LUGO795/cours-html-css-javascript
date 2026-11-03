/* Ondea Academy — contenu du cours (généré par build.py, ne pas modifier à la main).
   Chaque chapitre : explication, exemple, démonstration, exercices, correction, QCM, lien Ondea. */
window.COURS = {
 "chapters": [
  {
   "id": "html-bases",
   "part": "html",
   "title": "Premiers pas en HTML",
   "subtitle": "Balises, éléments, attributs et squelette d'une page",
   "duration": "1 h",
   "feature": "La coque de l'application (index.html)",
   "intro": "<p>Le <strong>HTML</strong> (HyperText Markup Language) n'est pas un langage de programmation : c'est un langage de <strong>description</strong>. Il dit au navigateur « ceci est un titre », « ceci est un paragraphe », « ceci est un bouton ».</p>\n<p>On écrit le HTML avec des <strong>balises</strong> entre chevrons. La plupart vont par deux : une balise ouvrante <code>&lt;p&gt;</code> et une balise fermante <code>&lt;/p&gt;</code>. Le tout (balises + contenu) s'appelle un <strong>élément</strong>.</p>\n<p>Une balise peut porter des <strong>attributs</strong> qui ajoutent une information : <code>&lt;html lang=\"fr\"&gt;</code> indique que la page est en français. Certaines balises sont <strong>vides</strong> (sans fermeture) : <code>&lt;meta&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>.</p>\n<div class=\"analogy\"><strong>Image mentale :</strong> le HTML est le squelette de la page, le CSS est la peau et les vêtements, le JavaScript est les muscles qui la font bouger.</div>",
   "example": [
    {
     "lang": "html",
     "code": "<!DOCTYPE html>                 <!-- 1. Je déclare un document HTML5 -->\n<html lang=\"fr\">                <!-- 2. Racine de la page, en français -->\n  <head>                        <!-- 3. Informations pour le navigateur (invisibles) -->\n    <meta charset=\"UTF-8\">      <!-- Encodage : accents corrects -->\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <title>Ondea Commandes</title>   <!-- Titre de l'onglet -->\n    <link rel=\"stylesheet\" href=\"css/style.css\">  <!-- Feuille de style -->\n  </head>\n  <body>                        <!-- 4. Tout ce qui est visible -->\n    <h1>Ondea Commandes</h1>\n    <p>Gestion des commandes pour TPE et PME.</p>\n    <script src=\"js/app.js\" defer></script>  <!-- JS chargé après le HTML -->\n  </body>\n</html>"
    }
   ],
   "explain": "<ul>\n<li><code>&lt;!DOCTYPE html&gt;</code> doit être la toute première ligne : sans elle, le navigateur passe en « mode bizarre » (quirks).</li>\n<li><code>&lt;head&gt;</code> contient les <em>métadonnées</em> : encodage, titre de l'onglet, liens vers le CSS. Rien n'y est affiché dans la page.</li>\n<li><code>&lt;meta name=\"viewport\"&gt;</code> est indispensable pour que la page s'adapte aux smartphones.</li>\n<li><code>&lt;body&gt;</code> contient tout ce que l'utilisateur voit.</li>\n<li>L'attribut <code>defer</code> sur <code>&lt;script&gt;</code> attend que tout le HTML soit lu avant d'exécuter le JavaScript.</li>\n<li>Les commentaires <code>&lt;!-- ... --&gt;</code> ne sont pas affichés : ils servent à expliquer le code.</li>\n<li>On <strong>indente</strong> (décale) les éléments enfants de 2 espaces pour voir l'imbrication d'un coup d'œil.</li>\n</ul>",
   "demo-html": "<h1>Ondea Commandes</h1>\n<p>Gestion des commandes pour <strong>TPE</strong> et <em>PME</em>.</p>\n<p>Ce texte est dans un paragraphe.<br>Celui-ci après un saut de ligne.</p>\n<hr>\n<p><small>Modifiez le code à gauche : l'aperçu se met à jour tout seul.</small></p>",
   "guided": "<p>Créez l'en-tête de l'écran d'accueil d'Ondea Commandes.</p>\n<ol>\n<li>Ajoutez un titre de niveau 1 contenant <strong>Ondea Commandes</strong>.</li>\n<li>Ajoutez un paragraphe contenant le slogan <strong>Vos commandes, maîtrisées.</strong></li>\n<li>Ajoutez un second paragraphe avec le texte <strong>Version 1.1</strong> où « 1.1 » est mis en valeur avec <code>&lt;strong&gt;</code>.</li>\n</ol>",
   "guided-html": "<!-- Écrivez votre code ici -->",
   "checks": [
    [
     "sel",
     "h1",
     "Un titre <h1> existe"
    ],
    [
     "text",
     "h1",
     "Ondea Commandes",
     "Le titre contient « Ondea Commandes »"
    ],
    [
     "count",
     "p",
     "2",
     "Au moins deux paragraphes <p>"
    ],
    [
     "text",
     "body",
     "Vos commandes, maîtrisées.",
     "Le slogan est présent"
    ],
    [
     "sel",
     "p strong",
     "Un <strong> est placé dans un paragraphe"
    ]
   ],
   "guided-solution-html": "<h1>Ondea Commandes</h1>\n<p>Vos commandes, maîtrisées.</p>\n<p>Version <strong>1.1</strong></p>",
   "auto": "<p>Sur votre ordinateur, créez un dossier <code>ondea-commandes</code> contenant un fichier <code>index.html</code> complet (doctype, <code>html lang=\"fr\"</code>, <code>head</code> avec <code>meta charset</code>, <code>viewport</code> et <code>title</code>, puis <code>body</code>). Dans le body : le titre de l'application, une phrase de présentation et un commentaire HTML qui explique à quoi sert la page. Ouvrez le fichier par double-clic et vérifiez le titre de l'onglet.</p>",
   "solution": "<p>Le squelette est toujours le même : on le connaît par cœur après quelques jours. Vérifiez trois points : la langue (<code>lang=\"fr\"</code>) pour les lecteurs d'écran, l'encodage UTF-8 pour les accents, le viewport pour le mobile.</p>",
   "solution-code": [
    {
     "lang": "html",
     "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Ondea Commandes — Accueil</title>\n</head>\n<body>\n  <!-- Page d'accueil : présente l'application aux utilisateurs -->\n  <h1>Ondea Commandes</h1>\n  <p>L'application qui suit vos commandes de la saisie à la livraison.</p>\n</body>\n</html>"
    }
   ],
   "quiz": [
    {
     "q": "Quel est le rôle du HTML ?",
     "options": [
      "Programmer des calculs",
      "Décrire la structure et le sens du contenu",
      "Mettre en forme les couleurs",
      "Stocker des données"
     ],
     "answer": 1,
     "why": "Le HTML décrit ; le CSS met en forme ; le JavaScript agit."
    },
    {
     "q": "Où place-t-on la balise <title> ?",
     "options": [
      "Dans <body>",
      "Dans <head>",
      "Après </html>",
      "Dans <footer>"
     ],
     "answer": 1,
     "why": "<title> est une métadonnée : il s'affiche dans l'onglet, pas dans la page."
    },
    {
     "q": "Que fait l'attribut lang=\"fr\" ?",
     "options": [
      "Traduit la page",
      "Indique la langue du contenu (prononciation des lecteurs d'écran, césure…)",
      "Change la police",
      "Rien du tout"
     ],
     "answer": 1,
     "why": "La langue sert aux technologies d'assistance et aux moteurs de recherche."
    },
    {
     "q": "Laquelle de ces balises est vide (sans balise fermante) ?",
     "options": [
      "<p>",
      "<h1>",
      "<meta>",
      "<body>"
     ],
     "answer": 2,
     "why": "<meta>, <img>, <br>, <hr>, <input>, <link> sont des éléments vides."
    },
    {
     "q": "Pourquoi ajouter defer sur <script> ?",
     "options": [
      "Pour exécuter le JavaScript après la lecture complète du HTML",
      "Pour rendre le script plus rapide à écrire",
      "Pour désactiver le script",
      "Pour le charger depuis Internet"
     ],
     "answer": 0,
     "why": "Avec defer, le DOM est prêt quand le script démarre ; c'est ce que fait Ondea Commandes."
    }
   ],
   "ondea": "<p>Ouvrez <code>index.html</code> d'Ondea Commandes : c'est une <strong>coque</strong>. On y trouve le doctype, le <code>head</code> (titre, favicon, 6 feuilles de style) et, en bas du <code>body</code>, une vingtaine de <code>&lt;script defer&gt;</code> chargés <strong>dans l'ordre</strong> : <code>utils.js</code> d'abord, <code>app.js</code> en dernier. Le contenu des écrans est ensuite fabriqué par JavaScript.</p>"
  },
  {
   "id": "html-semantique",
   "part": "html",
   "title": "HTML5 sémantique",
   "subtitle": "header, nav, main, aside, section, article, footer",
   "duration": "1 h 30",
   "feature": "Mise en page : barre latérale, barre supérieure, zone de contenu",
   "intro": "<p>Une balise <strong>sémantique</strong> a un <em>sens</em>. <code>&lt;div&gt;</code> ne veut rien dire (c'est une boîte neutre), alors que <code>&lt;nav&gt;</code> veut dire « ceci est une navigation ».</p>\n<p>Pourquoi c'est important ? Les lecteurs d'écran proposent de « sauter à la navigation » ou « au contenu principal » ; Google comprend mieux la page ; et vos collègues relisent le code plus vite.</p>\n<p>Les zones principales s'appellent des <strong>landmarks</strong> (points de repère) : <code>&lt;header&gt;</code> (en-tête), <code>&lt;nav&gt;</code> (menu), <code>&lt;main&gt;</code> (contenu principal, <strong>un seul</strong> par page), <code>&lt;aside&gt;</code> (contenu annexe), <code>&lt;footer&gt;</code> (pied). À l'intérieur : <code>&lt;section&gt;</code> regroupe un thème avec son titre, <code>&lt;article&gt;</code> est un bloc autonome (une carte commande, un billet).</p>",
   "example": [
    {
     "lang": "html",
     "code": "<body>\n  <!-- Barre latérale : logo + menu principal -->\n  <aside class=\"sidebar\">\n    <p class=\"logo\">Ondea Commandes</p>\n    <nav aria-label=\"Menu principal\">\n      <ul>\n        <li><a href=\"#/tableau-de-bord\">Tableau de bord</a></li>\n        <li><a href=\"#/commandes\">Commandes</a></li>\n        <li><a href=\"#/clients\">Clients</a></li>\n      </ul>\n    </nav>\n  </aside>\n\n  <!-- En-tête de la zone de travail -->\n  <header class=\"topbar\">\n    <h1>Tableau de bord</h1>\n  </header>\n\n  <!-- Contenu principal : un seul <main> -->\n  <main id=\"contenu\">\n    <section aria-labelledby=\"titre-kpi\">\n      <h2 id=\"titre-kpi\">Indicateurs du jour</h2>\n      <article class=\"kpi\">\n        <h3>Commandes en attente</h3>\n        <p>12</p>\n      </article>\n    </section>\n  </main>\n\n  <footer>© 2026 Ondea Web Studio</footer>\n</body>"
    }
   ],
   "explain": "<ul>\n<li><code>&lt;aside&gt;</code> contient ici la barre latérale ; <code>&lt;nav&gt;</code> le menu. Le <code>aria-label</code> nomme ce menu pour les lecteurs d'écran.</li>\n<li>Le menu est une <strong>liste</strong> <code>&lt;ul&gt;</code> de liens : un lecteur d'écran annonce « liste, 3 éléments ».</li>\n<li><code>&lt;main id=\"contenu\"&gt;</code> est unique ; l'<code>id</code> permettra un lien d'évitement « Aller au contenu ».</li>\n<li><code>&lt;section aria-labelledby=\"titre-kpi\"&gt;</code> : la section prend pour nom le texte de son titre.</li>\n<li>Chaque indicateur est un <code>&lt;article&gt;</code> : il a du sens tout seul.</li>\n<li>La hiérarchie des titres <code>h1 → h2 → h3</code> ne saute pas de niveau.</li>\n</ul>",
   "demo-html": "<aside class=\"sb\">\n  <p class=\"logo\">◆ Ondea</p>\n  <nav aria-label=\"Menu principal\"><ul>\n    <li><a href=\"#\" aria-current=\"page\">Tableau de bord</a></li>\n    <li><a href=\"#\">Commandes</a></li>\n    <li><a href=\"#\">Clients</a></li>\n  </ul></nav>\n</aside>\n<div class=\"zone\">\n  <header><h1>Tableau de bord</h1></header>\n  <main>\n    <section><h2>Indicateurs</h2>\n      <article class=\"kpi\"><h3>En attente</h3><p>12</p></article>\n      <article class=\"kpi\"><h3>À expédier</h3><p>5</p></article>\n    </section>\n  </main>\n  <footer>© Ondea Web Studio</footer>\n</div>",
   "demo-css": "body{display:flex;margin:0;font-family:system-ui;min-height:100vh}\n.sb{background:#11131c;color:#f4e8c8;padding:1rem;width:180px}\n.sb a{color:#f4e8c8;text-decoration:none;display:block;padding:.4rem}\n.sb a[aria-current]{background:#c9a14a;color:#11131c;border-radius:6px}\n.sb ul{list-style:none;padding:0}\n.logo{font-weight:700;color:#d6b05c}\n.zone{flex:1;display:flex;flex-direction:column}\nheader,footer{padding:.5rem 1rem;background:#f4f1ea}\nmain{flex:1;padding:1rem}\n.kpi{display:inline-block;border:1px solid #c9a14a;border-radius:10px;padding:.2rem 1rem;margin-right:.5rem}",
   "guided": "<p>Construisez la structure de l'écran « Commandes » avec des balises sémantiques.</p>\n<ol>\n<li>Un <code>&lt;header&gt;</code> contenant un <code>&lt;h1&gt;</code> « Commandes ».</li>\n<li>Un <code>&lt;nav&gt;</code> avec <code>aria-label=\"Menu principal\"</code> contenant une liste <code>&lt;ul&gt;</code> d'au moins 3 liens.</li>\n<li>Un <code>&lt;main&gt;</code> contenant une <code>&lt;section&gt;</code> avec un <code>&lt;h2&gt;</code> « Commandes récentes » et deux <code>&lt;article&gt;</code> (une commande chacun).</li>\n<li>Un <code>&lt;footer&gt;</code>.</li>\n</ol>",
   "guided-html": "<!-- Remplacez les div par des balises sémantiques -->\n<div>\n  <h1>Commandes</h1>\n</div>",
   "checks": [
    [
     "sel",
     "header h1",
     "Un <h1> dans un <header>"
    ],
    [
     "sel",
     "nav[aria-label]",
     "Un <nav> nommé avec aria-label"
    ],
    [
     "count",
     "nav ul li a",
     "3",
     "Au moins 3 liens dans une liste du menu"
    ],
    [
     "sel",
     "main section h2",
     "Une section avec un <h2> dans <main>"
    ],
    [
     "count",
     "main article",
     "2",
     "Deux <article> dans <main>"
    ],
    [
     "count",
     "main",
     "1",
     "Un <main> présent"
    ],
    [
     "sel",
     "footer",
     "Un <footer>"
    ]
   ],
   "guided-solution-html": "<header><h1>Commandes</h1></header>\n<nav aria-label=\"Menu principal\">\n  <ul>\n    <li><a href=\"#/tableau-de-bord\">Tableau de bord</a></li>\n    <li><a href=\"#/commandes\">Commandes</a></li>\n    <li><a href=\"#/clients\">Clients</a></li>\n  </ul>\n</nav>\n<main>\n  <section>\n    <h2>Commandes récentes</h2>\n    <article><h3>CMD-2026-0042</h3><p>Brico Sud — Validée</p></article>\n    <article><h3>CMD-2026-0043</h3><p>Visso Bricolage — En préparation</p></article>\n  </section>\n</main>\n<footer>© 2026 Ondea Web Studio</footer>",
   "auto": "<p>Réalisez la structure complète de l'écran « Fiche client » : barre latérale avec menu (5 liens : Tableau de bord, Commandes, Clients, Produits, Stocks), en-tête avec le nom du client, <code>main</code> avec trois sections (Coordonnées, Commandes du client, Notes) et un pied de page. Aucune <code>div</code> n'est autorisée sauf pour un regroupement purement visuel. Vérifiez la hiérarchie des titres avec l'extension « HeadingsMap » ou l'inspecteur.</p>",
   "solution": "<p>L'astuce : lisez votre page à voix haute en ne prononçant que les balises. Si on comprend l'organisation de l'écran sans voir le rendu, la sémantique est bonne.</p>",
   "solution-code": [
    {
     "lang": "html",
     "code": "<aside>\n  <p class=\"logo\">Ondea Commandes</p>\n  <nav aria-label=\"Menu principal\">\n    <ul>\n      <li><a href=\"#/tableau-de-bord\">Tableau de bord</a></li>\n      <li><a href=\"#/commandes\">Commandes</a></li>\n      <li><a href=\"#/clients\" aria-current=\"page\">Clients</a></li>\n      <li><a href=\"#/produits\">Produits</a></li>\n      <li><a href=\"#/stocks\">Stocks</a></li>\n    </ul>\n  </nav>\n</aside>\n<header><h1>Brico Sud</h1></header>\n<main>\n  <section aria-labelledby=\"t-coord\"><h2 id=\"t-coord\">Coordonnées</h2>\n    <address>12 rue des Artisans, 83300 Draguignan</address></section>\n  <section aria-labelledby=\"t-cmd\"><h2 id=\"t-cmd\">Commandes du client</h2>\n    <article><h3>CMD-2026-0042</h3><p>Livrée</p></article></section>\n  <section aria-labelledby=\"t-notes\"><h2 id=\"t-notes\">Notes</h2>\n    <p>Livraison le matin uniquement.</p></section>\n</main>\n<footer>© 2026 Ondea Web Studio</footer>"
    }
   ],
   "quiz": [
    {
     "q": "Combien d'éléments <main> une page peut-elle contenir (visibles) ?",
     "options": [
      "Autant qu'on veut",
      "Un seul",
      "Deux maximum",
      "Aucun, c'est déprécié"
     ],
     "answer": 1,
     "why": "<main> désigne le contenu principal unique de la page."
    },
    {
     "q": "Quelle balise convient à une carte « commande » autonome ?",
     "options": [
      "<div>",
      "<span>",
      "<article>",
      "<aside>"
     ],
     "answer": 2,
     "why": "Un article a du sens sorti de son contexte, comme une carte commande."
    },
    {
     "q": "À quoi sert aria-label sur <nav> ?",
     "options": [
      "Donner un nom au menu pour les technologies d'assistance",
      "Changer la couleur du menu",
      "Afficher une info-bulle",
      "Rendre le menu invisible"
     ],
     "answer": 0,
     "why": "S'il existe plusieurs <nav>, le nom permet de les distinguer."
    },
    {
     "q": "Quelle hiérarchie de titres est correcte ?",
     "options": [
      "h1 → h3 → h2",
      "h1 → h2 → h3",
      "h2 → h1 → h3",
      "Que des h1"
     ],
     "answer": 1,
     "why": "On ne saute pas de niveau : c'est le plan du document."
    },
    {
     "q": "Que signifie « landmark » ?",
     "options": [
      "Une balise obsolète",
      "Une grande zone repère de la page (header, nav, main…)",
      "Un lien externe",
      "Une image de fond"
     ],
     "answer": 1,
     "why": "Les landmarks permettent de naviguer rapidement au clavier ou au lecteur d'écran."
    }
   ],
   "ondea": "<p>Dans <code>index.html</code> d'Ondea Commandes, la coque utilise exactement ce découpage : un <code>&lt;aside&gt;</code> pour la barre latérale avec <code>&lt;nav id=\"main-nav\"&gt;</code>, un <code>&lt;header&gt;</code> pour la barre supérieure (recherche, notifications, profil) et un unique <code>&lt;main&gt;</code> dans lequel le routeur injecte chaque écran. Le README le résume par « Coque sémantique (landmarks, régions aria-live) ».</p>"
  },
  {
   "id": "html-contenus",
   "part": "html",
   "title": "Textes, listes, liens et images",
   "subtitle": "Les briques de contenu d'un écran",
   "duration": "1 h",
   "feature": "Tableau de bord et fiches produits",
   "intro": "<p>Six familles de balises suffisent pour 90 % des contenus :</p>\n<ul>\n<li><strong>Titres</strong> <code>&lt;h1&gt;</code> à <code>&lt;h6&gt;</code> : le plan de la page.</li>\n<li><strong>Paragraphes</strong> <code>&lt;p&gt;</code> et mise en valeur <code>&lt;strong&gt;</code> (important) ou <code>&lt;em&gt;</code> (accentué).</li>\n<li><strong>Listes</strong> : <code>&lt;ul&gt;</code> (à puces), <code>&lt;ol&gt;</code> (numérotée), chaque élément dans <code>&lt;li&gt;</code>.</li>\n<li><strong>Liens</strong> <code>&lt;a href=\"...\"&gt;</code> : vers une autre page, une ancre <code>#id</code>, un e-mail <code>mailto:</code> ou un téléphone <code>tel:</code>.</li>\n<li><strong>Images</strong> <code>&lt;img src alt&gt;</code> : <code>alt</code> décrit l'image pour qui ne la voit pas.</li>\n<li><strong>Figures</strong> <code>&lt;figure&gt;</code> + <code>&lt;figcaption&gt;</code> : une image avec sa légende.</li>\n</ul>\n<p>Règle d'or : on choisit la balise pour son <strong>sens</strong>, jamais pour son apparence (le CSS s'en chargera).</p>",
   "example": [
    {
     "lang": "html",
     "code": "<article class=\"fiche-produit\">\n  <!-- Image : alt décrit ce que montre la photo -->\n  <figure>\n    <img src=\"perceuse.jpg\" alt=\"Perceuse sans fil bleue avec sa batterie\"\n         width=\"320\" height=\"240\" loading=\"lazy\">\n    <figcaption>Photo fournisseur</figcaption>\n  </figure>\n\n  <h2>Perceuse sans fil 18 V</h2>\n  <p>Référence <strong>PER-18V-01</strong> — <em>stock faible</em>.</p>\n\n  <!-- Liste à puces : caractéristiques sans ordre -->\n  <ul>\n    <li>2 batteries incluses</li>\n    <li>Garantie 3 ans</li>\n  </ul>\n\n  <!-- Liste numérotée : les étapes ont un ordre -->\n  <ol>\n    <li>Commander</li>\n    <li>Préparer</li>\n    <li>Expédier</li>\n  </ol>\n\n  <p>Fournisseur : <a href=\"mailto:contact@outipro.fr\">contact@outipro.fr</a>\n     — <a href=\"tel:+33494000000\">04 94 00 00 00</a></p>\n</article>"
    }
   ],
   "explain": "<ul>\n<li><code>width</code> et <code>height</code> sur <code>&lt;img&gt;</code> réservent la place : la page ne « saute » pas au chargement.</li>\n<li><code>loading=\"lazy\"</code> ne charge l'image que lorsqu'elle approche de l'écran.</li>\n<li>Une image purement décorative reçoit <code>alt=\"\"</code> (vide) : le lecteur d'écran l'ignore.</li>\n<li><code>&lt;strong&gt;</code> = importance ; <code>&lt;b&gt;</code> = simple gras visuel (à éviter).</li>\n<li>Les liens <code>mailto:</code> et <code>tel:</code> ouvrent la messagerie ou le téléphone sur mobile.</li>\n<li>Le texte d'un lien doit avoir du sens seul : « Voir la commande CMD-42 » plutôt que « cliquez ici ».</li>\n</ul>",
   "demo-html": "<article class=\"fiche\">\n  <figure>\n    <svg width=\"120\" height=\"80\" role=\"img\" aria-label=\"Pictogramme de perceuse\"><rect width=\"120\" height=\"80\" rx=\"10\" fill=\"#171a26\"/><circle cx=\"40\" cy=\"40\" r=\"18\" fill=\"#c9a14a\"/><rect x=\"55\" y=\"34\" width=\"50\" height=\"12\" rx=\"4\" fill=\"#f4e8c8\"/></svg>\n    <figcaption>Pictogramme produit</figcaption>\n  </figure>\n  <h2>Perceuse sans fil 18 V</h2>\n  <p>Référence <strong>PER-18V-01</strong> — <em>stock faible</em></p>\n  <ul><li>2 batteries</li><li>Garantie 3 ans</li></ul>\n  <ol><li>Commander</li><li>Préparer</li><li>Expédier</li></ol>\n  <p><a href=\"#prix\">Voir le prix</a></p>\n  <p id=\"prix\">Prix : 129,00 € HT</p>\n</article>",
   "demo-css": "body{font-family:system-ui;padding:1rem}\n.fiche{max-width:340px;border:1px solid #c9a14a;border-radius:14px;padding:1rem}\nfigure{margin:0}figcaption{font-size:.8rem;color:#555}\na{color:#614608;font-weight:700}",
   "guided": "<p>Créez la carte produit « Vis inox 4x40 ».</p>\n<ol>\n<li>Un <code>&lt;h2&gt;</code> avec le nom du produit.</li>\n<li>Une image <code>&lt;img&gt;</code> avec un attribut <code>alt</code> non vide (utilisez l'image fournie <code>src=\"assets/img/vis-inox.svg\"</code>).</li>\n<li>Une liste à puces <code>&lt;ul&gt;</code> de 3 caractéristiques.</li>\n<li>Une liste numérotée <code>&lt;ol&gt;</code> de 3 étapes.</li>\n<li>Un lien <code>mailto:</code> vers le fournisseur.</li>\n</ol>",
   "guided-html": "<article>\n  <!-- À vous -->\n</article>",
   "checks": [
    [
     "sel",
     "h2",
     "Un titre <h2>"
    ],
    [
     "sel",
     "img[alt]:not([alt=\"\"])",
     "Une image avec un alt descriptif"
    ],
    [
     "count",
     "ul li",
     "3",
     "Une liste à puces de 3 éléments"
    ],
    [
     "count",
     "ol li",
     "3",
     "Une liste numérotée de 3 éléments"
    ],
    [
     "sel",
     "a[href^=\"mailto:\"]",
     "Un lien mailto:"
    ]
   ],
   "guided-solution-html": "<article>\n  <h2>Vis inox 4x40</h2>\n  <img src=\"assets/img/vis-inox.svg\" alt=\"Boîte de 200 vis inox à tête fraisée\" width=\"200\" height=\"150\">\n  <ul>\n    <li>Acier inoxydable A2</li>\n    <li>Tête fraisée</li>\n    <li>Boîte de 200</li>\n  </ul>\n  <ol>\n    <li>Contrôler le stock</li>\n    <li>Réserver la quantité</li>\n    <li>Préparer le colis</li>\n  </ol>\n  <p><a href=\"mailto:ventes@visso.fr\">Contacter le fournisseur</a></p>\n</article>",
   "auto": "<p>Créez la page « Fiche fournisseur » d'Ondea : logo (image avec alt pertinent), nom du fournisseur en titre, adresse dans <code>&lt;address&gt;</code>, liste des catégories fournies, liens <code>mailto:</code> et <code>tel:</code>, et un lien d'ancre « Voir les produits » qui descend vers une section <code>id=\"produits\"</code> contenant une liste de 4 produits.</p>",
   "solution": "<p>Points de contrôle : chaque image a un alt qui décrit ce qu'on voit (pas « image »), les liens ont un texte explicite, l'ancre <code>href=\"#produits\"</code> correspond exactement à l'<code>id</code>.</p>",
   "solution-code": [
    {
     "lang": "html",
     "code": "<article>\n  <img src=\"logo-visso.svg\" alt=\"Logo Visso Bricolage\" width=\"120\" height=\"60\">\n  <h1>Visso Bricolage</h1>\n  <address>8 avenue des Lices, 83000 Toulon</address>\n  <h2>Catégories</h2>\n  <ul><li>Visserie</li><li>Outillage</li><li>Quincaillerie</li></ul>\n  <p><a href=\"mailto:pro@visso.fr\">pro@visso.fr</a> — <a href=\"tel:+33494112233\">04 94 11 22 33</a></p>\n  <p><a href=\"#produits\">Voir les produits</a></p>\n  <section id=\"produits\">\n    <h2>Produits</h2>\n    <ul><li>Vis inox 4x40</li><li>Chevilles 8 mm</li><li>Équerre 60 mm</li><li>Charnière laiton</li></ul>\n  </section>\n</article>"
    }
   ],
   "quiz": [
    {
     "q": "Que doit contenir l'attribut alt d'une photo de produit ?",
     "options": [
      "Le nom du fichier",
      "Une description utile de ce que montre l'image",
      "Le mot « image »",
      "Rien, il est facultatif"
     ],
     "answer": 1,
     "why": "alt remplace l'image pour les personnes non voyantes et quand l'image ne charge pas."
    },
    {
     "q": "Quelle liste utiliser pour les étapes d'une préparation de commande ?",
     "options": [
      "<ul>",
      "<ol>",
      "<dl>",
      "<menu>"
     ],
     "answer": 1,
     "why": "L'ordre compte : liste ordonnée."
    },
    {
     "q": "Quel est l'alt d'une image purement décorative ?",
     "options": [
      "alt=\"\"",
      "alt=\"décoration\"",
      "Pas d'attribut alt",
      "alt=\"none\""
     ],
     "answer": 0,
     "why": "Un alt vide indique explicitement que l'image ne porte pas d'information."
    },
    {
     "q": "Que fait href=\"#produits\" ?",
     "options": [
      "Ouvre un site nommé produits",
      "Fait défiler jusqu'à l'élément id=\"produits\"",
      "Télécharge un fichier",
      "Rien"
     ],
     "answer": 1,
     "why": "Le # désigne une ancre interne à la page."
    },
    {
     "q": "Pourquoi donner width et height à une image ?",
     "options": [
      "Pour la rendre floue",
      "Pour réserver sa place et éviter que la page saute au chargement",
      "C'est obligatoire en HTML5",
      "Pour la compresser"
     ],
     "answer": 1,
     "why": "On limite ainsi le décalage de mise en page (CLS)."
    }
   ],
   "ondea": "<p>Dans Ondea Commandes, les photos des utilisateurs (dossier <code>photos-utilisateurs/</code>) et des produits sont affichées avec un <code>alt</code> qui reprend le nom de la personne ou du produit. Le logo de la société cliente (<code>visso-bricolage-logo.svg</code>) illustre l'intérêt du format SVG : net à toutes les tailles. Le module <code>zoom-photos.js</code> agrandit une image au clic.</p>"
  },
  {
   "id": "html-navigation",
   "part": "html",
   "title": "Navigation et liens d'application",
   "subtitle": "Menu, page courante, routes par hash",
   "duration": "45 min",
   "feature": "Navigation entre les écrans",
   "intro": "<p>Une application web d'une seule page (on dit <strong>SPA</strong>, Single Page Application) ne recharge pas la page à chaque clic. Elle utilise des liens qui changent seulement la partie après le <code>#</code> de l'adresse : <code>index.html#/commandes</code>, <code>index.html#/clients</code>.</p>\n<p>Le HTML prépare le terrain : un <code>&lt;nav&gt;</code>, une liste de liens, et l'attribut <code>aria-current=\"page\"</code> sur le lien de l'écran affiché. C'est lui qui dit à un lecteur d'écran « page actuelle », et le CSS peut s'en servir pour le surligner.</p>\n<p>On ajoute aussi un <strong>lien d'évitement</strong> tout en haut : « Aller au contenu ». Au clavier, c'est le premier élément atteint avec Tab : il évite de traverser tout le menu.</p>",
   "example": [
    {
     "lang": "html",
     "code": "<!-- Lien d'évitement : premier élément focusable de la page -->\n<a class=\"skip-link\" href=\"#contenu\">Aller au contenu</a>\n\n<nav id=\"main-nav\" aria-label=\"Menu principal\">\n  <ul>\n    <!-- data-route : information personnalisée lue par JavaScript -->\n    <li><a class=\"nav-link\" href=\"#/tableau-de-bord\" data-route=\"tableau-de-bord\"\n           aria-current=\"page\">Tableau de bord</a></li>\n    <li><a class=\"nav-link\" href=\"#/commandes\" data-route=\"commandes\">Commandes</a></li>\n    <li><a class=\"nav-link\" href=\"#/preparation\" data-route=\"preparation\">Préparation</a></li>\n    <li><a class=\"nav-link\" href=\"#/livraisons\" data-route=\"livraisons\">Livraisons</a></li>\n  </ul>\n</nav>\n\n<main id=\"contenu\" tabindex=\"-1\">…</main>"
    }
   ],
   "explain": "<ul>\n<li><code>href=\"#/commandes\"</code> : le navigateur ne recharge pas, il change l'adresse et déclenche l'événement <code>hashchange</code> qu'écoute le JavaScript.</li>\n<li>Les attributs <code>data-*</code> (ici <code>data-route</code>) stockent une donnée libre, lisible en JS via <code>element.dataset.route</code>.</li>\n<li><code>aria-current=\"page\"</code> ne doit être que sur <strong>un</strong> lien à la fois.</li>\n<li><code>tabindex=\"-1\"</code> sur <code>&lt;main&gt;</code> permet de lui donner le focus par programme après un changement d'écran.</li>\n<li>Le lien d'évitement est caché visuellement mais réapparaît quand il reçoit le focus clavier.</li>\n</ul>",
   "demo-html": "<a class=\"skip\" href=\"#contenu\">Aller au contenu</a>\n<nav aria-label=\"Menu principal\"><ul>\n  <li><a href=\"#/tableau-de-bord\" data-route=\"tableau-de-bord\">Tableau de bord</a></li>\n  <li><a href=\"#/commandes\" data-route=\"commandes\">Commandes</a></li>\n  <li><a href=\"#/clients\" data-route=\"clients\">Clients</a></li>\n</ul></nav>\n<main id=\"contenu\" tabindex=\"-1\"><h1 id=\"titre\">Tableau de bord</h1><p>Cliquez dans le menu. Appuyez sur Tab pour voir le lien d'évitement.</p></main>",
   "demo-css": "body{font-family:system-ui;margin:0}\nnav ul{display:flex;gap:.5rem;list-style:none;padding:.5rem;margin:0;background:#171a26}\nnav a{color:#f4e8c8;padding:.4rem .8rem;border-radius:6px;text-decoration:none;display:block}\nnav a[aria-current=\"page\"]{background:#c9a14a;color:#171a26;font-weight:700}\n.skip{position:absolute;left:-999px}.skip:focus{left:.5rem;top:.5rem;background:#fff;padding:.5rem;z-index:2}\nmain{padding:1rem}",
   "demo-js": "// Ce script surligne le lien correspondant à l'adresse (#/...)\nfunction majMenu() {\n  const route = location.hash.replace('#/', '') || 'tableau-de-bord';\n  document.querySelectorAll('nav a').forEach((a) => {\n    if (a.dataset.route === route) a.setAttribute('aria-current', 'page');\n    else a.removeAttribute('aria-current');\n  });\n  document.getElementById('titre').textContent = document.querySelector('nav a[aria-current]').textContent;\n}\nwindow.addEventListener('hashchange', majMenu);\nmajMenu();",
   "guided": "<p>Écrivez le menu de l'application Ondea pour le profil <strong>magasinier</strong>.</p>\n<ol>\n<li>Un lien d'évitement <code>href=\"#contenu\"</code> en premier.</li>\n<li>Un <code>&lt;nav aria-label=\"Menu principal\"&gt;</code> avec une liste de 4 liens : Tableau de bord, Commandes, Préparation, Livraisons. Chaque lien a un <code>href</code> qui commence par <code>#/</code> et un attribut <code>data-route</code>.</li>\n<li>Le lien « Préparation » porte <code>aria-current=\"page\"</code>.</li>\n<li>Un <code>&lt;main id=\"contenu\"&gt;</code>.</li>\n</ol>",
   "guided-html": "<!-- Menu magasinier -->",
   "checks": [
    [
     "sel",
     "a[href=\"#contenu\"]",
     "Un lien d'évitement vers #contenu"
    ],
    [
     "count",
     "nav[aria-label] ul li a[href^=\"#/\"]",
     "4",
     "4 liens de route dans le menu"
    ],
    [
     "count",
     "nav a[data-route]",
     "4",
     "Chaque lien a un data-route"
    ],
    [
     "count",
     "nav a[aria-current=\"page\"]",
     "=1",
     "Un seul lien marqué aria-current=\"page\""
    ],
    [
     "text",
     "nav a[aria-current=\"page\"]",
     "Préparation",
     "C'est le lien Préparation qui est courant"
    ],
    [
     "sel",
     "main#contenu",
     "Un <main id=\"contenu\">"
    ]
   ],
   "guided-solution-html": "<a class=\"skip-link\" href=\"#contenu\">Aller au contenu</a>\n<nav aria-label=\"Menu principal\">\n  <ul>\n    <li><a href=\"#/tableau-de-bord\" data-route=\"tableau-de-bord\">Tableau de bord</a></li>\n    <li><a href=\"#/commandes\" data-route=\"commandes\">Commandes</a></li>\n    <li><a href=\"#/preparation\" data-route=\"preparation\" aria-current=\"page\">Préparation</a></li>\n    <li><a href=\"#/livraisons\" data-route=\"livraisons\">Livraisons</a></li>\n  </ul>\n</nav>\n<main id=\"contenu\" tabindex=\"-1\"><h1>Préparation</h1></main>",
   "auto": "<p>Créez le menu complet du profil <strong>directeur</strong> (13 entrées d'Ondea : tableau de bord, commandes, clients, produits, stocks, fournisseurs, préparation, livraisons, documents, statistiques, historique, utilisateurs, paramètres), regroupé en trois listes titrées : « Activité », « Catalogue », « Administration ». Ajoutez le lien d'évitement et testez toute la navigation au clavier (Tab, Maj+Tab, Entrée).</p>",
   "solution": "<p>On peut regrouper les liens avec un titre par groupe. Le titre est relié à la liste par <code>aria-labelledby</code> pour que le lecteur d'écran annonce « Activité, liste, 4 éléments ».</p>",
   "solution-code": [
    {
     "lang": "html",
     "code": "<a class=\"skip-link\" href=\"#contenu\">Aller au contenu</a>\n<nav aria-label=\"Menu principal\">\n  <h2 id=\"g1\">Activité</h2>\n  <ul aria-labelledby=\"g1\">\n    <li><a href=\"#/tableau-de-bord\" data-route=\"tableau-de-bord\">Tableau de bord</a></li>\n    <li><a href=\"#/commandes\" data-route=\"commandes\">Commandes</a></li>\n    <li><a href=\"#/preparation\" data-route=\"preparation\">Préparation</a></li>\n    <li><a href=\"#/livraisons\" data-route=\"livraisons\">Livraisons</a></li>\n    <li><a href=\"#/documents\" data-route=\"documents\">Documents</a></li>\n  </ul>\n  <h2 id=\"g2\">Catalogue</h2>\n  <ul aria-labelledby=\"g2\">\n    <li><a href=\"#/clients\" data-route=\"clients\">Clients</a></li>\n    <li><a href=\"#/produits\" data-route=\"produits\">Produits</a></li>\n    <li><a href=\"#/stocks\" data-route=\"stocks\">Stocks</a></li>\n    <li><a href=\"#/fournisseurs\" data-route=\"fournisseurs\">Fournisseurs</a></li>\n  </ul>\n  <h2 id=\"g3\">Administration</h2>\n  <ul aria-labelledby=\"g3\">\n    <li><a href=\"#/statistiques\" data-route=\"statistiques\">Statistiques</a></li>\n    <li><a href=\"#/historique\" data-route=\"historique\">Historique</a></li>\n    <li><a href=\"#/utilisateurs\" data-route=\"utilisateurs\">Utilisateurs</a></li>\n    <li><a href=\"#/parametres\" data-route=\"parametres\">Paramètres</a></li>\n  </ul>\n</nav>\n<main id=\"contenu\" tabindex=\"-1\"></main>"
    }
   ],
   "quiz": [
    {
     "q": "Que se passe-t-il quand on clique sur href=\"#/commandes\" ?",
     "options": [
      "La page se recharge",
      "Seule la partie après # change ; l'événement hashchange est déclenché",
      "Le navigateur télécharge commandes.html",
      "Rien du tout"
     ],
     "answer": 1,
     "why": "C'est le principe des routeurs par hash, compatibles file://."
    },
    {
     "q": "Comment lire data-route=\"clients\" en JavaScript ?",
     "options": [
      "element.route",
      "element.dataset.route",
      "element.data.route",
      "element.getRoute()"
     ],
     "answer": 1,
     "why": "Les attributs data-* sont rassemblés dans l'objet dataset."
    },
    {
     "q": "Combien de liens peuvent porter aria-current=\"page\" en même temps dans un menu ?",
     "options": [
      "Tous",
      "Un seul",
      "Deux",
      "Aucun"
     ],
     "answer": 1,
     "why": "Il n'y a qu'une page courante."
    },
    {
     "q": "À quoi sert le lien d'évitement ?",
     "options": [
      "À quitter le site",
      "À sauter directement au contenu principal au clavier",
      "À revenir en haut",
      "À afficher le menu mobile"
     ],
     "answer": 1,
     "why": "Critère WCAG 2.4.1 « Contourner des blocs »."
    },
    {
     "q": "Pourquoi tabindex=\"-1\" sur <main> ?",
     "options": [
      "Pour l'exclure de la page",
      "Pour pouvoir lui donner le focus en JavaScript sans l'ajouter à l'ordre de tabulation",
      "Pour le rendre prioritaire",
      "C'est une erreur"
     ],
     "answer": 1,
     "why": "-1 : focusable par programme uniquement."
    }
   ],
   "ondea": "<p>Le fichier <code>router.js</code> d'Ondea lit l'adresse (<code>#/module/identifiant/action?filtre=…</code>), vérifie les permissions de l'utilisateur, affiche l'écran puis appelle <code>setActiveNav(name)</code> qui pose <code>aria-current=\"page\"</code> sur le bon lien grâce à <code>a.dataset.route</code>. C'est exactement le script de la démonstration, en plus complet.</p>"
  },
  {
   "id": "html-formulaires",
   "part": "html",
   "title": "Formulaires",
   "subtitle": "label, input, select, textarea, fieldset et validation native",
   "duration": "2 h",
   "feature": "Connexion et fiche client",
   "intro": "<p>Un formulaire permet à l'utilisateur d'envoyer des informations : se connecter, créer un client, saisir une commande.</p>\n<p>Trois règles pour un formulaire professionnel :</p>\n<ol>\n<li><strong>Chaque champ a un <code>&lt;label&gt;</code></strong> relié par <code>for</code> = <code>id</code> du champ. Cliquer sur le label met le curseur dans le champ, et le lecteur d'écran lit le label.</li>\n<li><strong>Le bon type</strong> : <code>email</code>, <code>tel</code>, <code>number</code>, <code>date</code>, <code>password</code>… Sur mobile, le clavier s'adapte.</li>\n<li><strong>La validation native</strong> : <code>required</code>, <code>minlength</code>, <code>min</code>, <code>max</code>, <code>pattern</code>. Le navigateur bloque l'envoi si c'est invalide.</li>\n</ol>\n<p>On regroupe les champs liés dans un <code>&lt;fieldset&gt;</code> avec une légende <code>&lt;legend&gt;</code>.</p>",
   "example": [
    {
     "lang": "html",
     "code": "<form id=\"form-connexion\" novalidate>\n  <h1>Connexion</h1>\n\n  <!-- for=\"identifiant\" relie le label au champ id=\"identifiant\" -->\n  <label for=\"identifiant\">Identifiant</label>\n  <input id=\"identifiant\" name=\"username\" type=\"text\"\n         autocomplete=\"username\" required>\n\n  <label for=\"mdp\">Mot de passe</label>\n  <input id=\"mdp\" name=\"password\" type=\"password\"\n         autocomplete=\"current-password\" required minlength=\"8\"\n         aria-describedby=\"aide-mdp\">\n  <p id=\"aide-mdp\">8 caractères minimum.</p>\n\n  <fieldset>\n    <legend>Profil</legend>\n    <input type=\"radio\" id=\"p-dir\" name=\"role\" value=\"directeur\" checked>\n    <label for=\"p-dir\">Directeur</label>\n    <input type=\"radio\" id=\"p-mag\" name=\"role\" value=\"magasinier\">\n    <label for=\"p-mag\">Magasinier</label>\n  </fieldset>\n\n  <button type=\"submit\">Se connecter</button>\n</form>"
    }
   ],
   "explain": "<ul>\n<li><code>name</code> est la clé de la donnée envoyée ; <code>id</code> sert au label et au CSS/JS.</li>\n<li><code>autocomplete=\"username\"</code> / <code>current-password</code> aide le gestionnaire de mots de passe.</li>\n<li><code>aria-describedby</code> fait lire l'aide après le label.</li>\n<li>Les boutons radio d'un même groupe partagent le même <code>name</code> : un seul choix possible.</li>\n<li><code>novalidate</code> désactive les bulles du navigateur pour afficher nos propres messages en JS (chapitre Formulaires JS). Sans lui, la validation native s'applique.</li>\n<li><code>type=\"submit\"</code> : le bouton envoie le formulaire. <code>type=\"button\"</code> ne l'envoie pas.</li>\n</ul>",
   "demo-html": "<form>\n  <fieldset><legend>Nouveau client</legend>\n    <label for=\"nom\">Raison sociale *</label>\n    <input id=\"nom\" required minlength=\"2\">\n    <label for=\"mail\">E-mail</label>\n    <input id=\"mail\" type=\"email\" placeholder=\"contact@exemple.fr\">\n    <label for=\"type\">Type</label>\n    <select id=\"type\"><option>Professionnel</option><option>Particulier</option></select>\n    <label for=\"remise\">Remise (%)</label>\n    <input id=\"remise\" type=\"number\" min=\"0\" max=\"50\" step=\"0.5\" value=\"0\">\n    <label for=\"notes\">Notes</label>\n    <textarea id=\"notes\" rows=\"3\"></textarea>\n  </fieldset>\n  <button>Enregistrer</button>\n</form>",
   "demo-css": "body{font-family:system-ui;padding:1rem}\nfieldset{border:1px solid #c9a14a;border-radius:12px;display:grid;gap:.3rem;max-width:360px}\ninput,select,textarea{font:inherit;padding:.5rem;border:1px solid #888;border-radius:8px}\ninput:invalid{border-color:#b91c1c}\ninput:focus-visible{outline:3px solid #1d4ed8;outline-offset:2px}\nbutton{margin-top:.7rem;padding:.6rem 1.2rem;background:#171a26;color:#fdf8ea;border:0;border-radius:8px}",
   "guided": "<p>Construisez le formulaire « Nouveau produit » d'Ondea.</p>\n<ol>\n<li>Un champ <strong>Référence</strong> obligatoire (<code>required</code>) avec son <code>label</code> relié.</li>\n<li>Un champ <strong>Désignation</strong> obligatoire.</li>\n<li>Un champ <strong>Prix HT</strong> de type <code>number</code> avec <code>min=\"0\"</code> et <code>step=\"0.01\"</code>.</li>\n<li>Une liste déroulante <strong>TVA</strong> (<code>select</code>) avec les options 20 %, 10 %, 5,5 %.</li>\n<li>Un bouton d'envoi <code>type=\"submit\"</code>.</li>\n</ol>",
   "guided-html": "<form>\n  <!-- À vous -->\n</form>",
   "checks": [
    [
     "count",
     "form label[for]",
     "4",
     "Au moins 4 labels reliés par for"
    ],
    [
     "sel",
     "input[required]",
     "Un champ obligatoire"
    ],
    [
     "count",
     "input[required]",
     "2",
     "Deux champs obligatoires"
    ],
    [
     "sel",
     "input[type=\"number\"][min=\"0\"]",
     "Prix HT en type number avec min=\"0\""
    ],
    [
     "count",
     "select option",
     "3",
     "Un select avec 3 options"
    ],
    [
     "sel",
     "button[type=\"submit\"]",
     "Un bouton type=\"submit\""
    ]
   ],
   "guided-solution-html": "<form>\n  <label for=\"ref\">Référence</label>\n  <input id=\"ref\" name=\"reference\" required>\n  <label for=\"des\">Désignation</label>\n  <input id=\"des\" name=\"designation\" required>\n  <label for=\"prix\">Prix HT (€)</label>\n  <input id=\"prix\" name=\"prixHT\" type=\"number\" min=\"0\" step=\"0.01\">\n  <label for=\"tva\">TVA</label>\n  <select id=\"tva\" name=\"tva\">\n    <option value=\"2000\">20 %</option>\n    <option value=\"1000\">10 %</option>\n    <option value=\"550\">5,5 %</option>\n  </select>\n  <button type=\"submit\">Créer le produit</button>\n</form>",
   "auto": "<p>Créez le formulaire complet « Fiche client » d'Ondea : raison sociale (obligatoire), SIRET (14 chiffres : utilisez <code>pattern=\"[0-9]{14}\"</code> et <code>inputmode=\"numeric\"</code>), e-mail, téléphone, adresse (rue, code postal à 5 chiffres, ville) regroupée dans un <code>fieldset</code>, conditions de paiement (select : comptant, 30 jours, 45 jours fin de mois), case à cocher « Client actif », notes. Testez l'envoi avec des valeurs fausses.</p>",
   "solution": "<p>L'attribut <code>pattern</code> attend une expression régulière : <code>[0-9]{14}</code> signifie « exactement 14 chiffres ». <code>inputmode=\"numeric\"</code> affiche le pavé numérique sur mobile sans les flèches du type number.</p>",
   "solution-code": [
    {
     "lang": "html",
     "code": "<form>\n  <label for=\"rs\">Raison sociale *</label>\n  <input id=\"rs\" name=\"raisonSociale\" required autocomplete=\"organization\">\n  <label for=\"siret\">SIRET</label>\n  <input id=\"siret\" name=\"siret\" pattern=\"[0-9]{14}\" inputmode=\"numeric\" aria-describedby=\"aide-siret\">\n  <p id=\"aide-siret\">14 chiffres, sans espace.</p>\n  <label for=\"email\">E-mail</label>\n  <input id=\"email\" name=\"email\" type=\"email\" autocomplete=\"email\">\n  <label for=\"tel\">Téléphone</label>\n  <input id=\"tel\" name=\"tel\" type=\"tel\" autocomplete=\"tel\">\n  <fieldset>\n    <legend>Adresse</legend>\n    <label for=\"rue\">Rue</label><input id=\"rue\" name=\"rue\" autocomplete=\"street-address\">\n    <label for=\"cp\">Code postal</label><input id=\"cp\" name=\"cp\" pattern=\"[0-9]{5}\" inputmode=\"numeric\">\n    <label for=\"ville\">Ville</label><input id=\"ville\" name=\"ville\">\n  </fieldset>\n  <label for=\"paiement\">Conditions de paiement</label>\n  <select id=\"paiement\" name=\"paiement\">\n    <option value=\"comptant\">Comptant</option>\n    <option value=\"30j\">30 jours</option>\n    <option value=\"45jfm\">45 jours fin de mois</option>\n  </select>\n  <input type=\"checkbox\" id=\"actif\" name=\"actif\" checked><label for=\"actif\">Client actif</label>\n  <label for=\"notes\">Notes</label><textarea id=\"notes\" name=\"notes\" rows=\"4\"></textarea>\n  <button type=\"submit\">Enregistrer le client</button>\n</form>"
    }
   ],
   "quiz": [
    {
     "q": "Comment relier un label à son champ ?",
     "options": [
      "En les mettant côte à côte",
      "for=\"x\" sur le label et id=\"x\" sur le champ",
      "name identique",
      "class identique"
     ],
     "answer": 1,
     "why": "Le lien for/id est lu par les technologies d'assistance."
    },
    {
     "q": "Quel type pour une adresse e-mail ?",
     "options": [
      "text",
      "email",
      "mail",
      "url"
     ],
     "answer": 1,
     "why": "type=\"email\" valide le format et adapte le clavier mobile."
    },
    {
     "q": "Que font des boutons radio qui partagent le même name ?",
     "options": [
      "Ils forment un groupe : un seul choix possible",
      "Ils sont tous cochés",
      "Rien de spécial",
      "Ils deviennent des cases à cocher"
     ],
     "answer": 0,
     "why": "name définit le groupe."
    },
    {
     "q": "Quelle différence entre type=\"submit\" et type=\"button\" ?",
     "options": [
      "Aucune",
      "submit envoie le formulaire, button ne fait rien par défaut",
      "button envoie, submit non",
      "submit est obsolète"
     ],
     "answer": 1,
     "why": "Dans un formulaire, un <button> sans type est un submit."
    },
    {
     "q": "À quoi sert <fieldset> ?",
     "options": [
      "À dessiner un tableau",
      "À regrouper des champs liés, avec une <legend>",
      "À masquer des champs",
      "À valider le formulaire"
     ],
     "answer": 1,
     "why": "Le lecteur d'écran annonce la légende avant chaque champ du groupe."
    }
   ],
   "ondea": "<p>L'écran de connexion d'Ondea Commandes (<code>auth.js → renderLogin</code>) suit ces règles : labels reliés, <code>autocomplete</code>, message d'erreur annoncé. Les fiches client et produit utilisent le même principe ; la validation finale est faite en JavaScript par les fonctions de <code>utils.js</code> (e-mail, SIRET, code postal) car le JS ne doit jamais faire confiance au seul HTML.</p>"
  },
  {
   "id": "html-tableaux",
   "part": "html",
   "title": "Tableaux de données",
   "subtitle": "table, caption, thead, tbody, tfoot, th et scope",
   "duration": "1 h",
   "feature": "Liste des commandes et lignes d'une commande",
   "intro": "<p>Un tableau HTML sert à présenter des <strong>données à deux dimensions</strong> : des lignes (une commande par ligne) et des colonnes (numéro, client, statut, montant). On ne s'en sert <strong>jamais</strong> pour faire de la mise en page.</p>\n<p>Structure : <code>&lt;table&gt;</code> contient un titre <code>&lt;caption&gt;</code>, une tête <code>&lt;thead&gt;</code>, un corps <code>&lt;tbody&gt;</code> et éventuellement un pied <code>&lt;tfoot&gt;</code> pour les totaux. Chaque ligne est un <code>&lt;tr&gt;</code> ; une cellule d'en-tête est un <code>&lt;th&gt;</code>, une cellule de donnée un <code>&lt;td&gt;</code>.</p>\n<p>L'attribut <code>scope=\"col\"</code> ou <code>scope=\"row\"</code> sur <code>&lt;th&gt;</code> indique si l'en-tête concerne une colonne ou une ligne.</p>",
   "example": [
    {
     "lang": "html",
     "code": "<table class=\"table\">\n  <caption>Lignes de la commande CMD-2026-0042</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">Produit</th>\n      <th scope=\"col\">Qté</th>\n      <th scope=\"col\">PU HT</th>\n      <th scope=\"col\">Total HT</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">Vis inox 4x40</th>\n      <td>10</td><td>8,50 €</td><td>85,00 €</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Perceuse 18 V</th>\n      <td>1</td><td>129,00 €</td><td>129,00 €</td>\n    </tr>\n  </tbody>\n  <tfoot>\n    <tr><th scope=\"row\" colspan=\"3\">Total HT</th><td>214,00 €</td></tr>\n    <tr><th scope=\"row\" colspan=\"3\">TVA 20 %</th><td>42,80 €</td></tr>\n    <tr><th scope=\"row\" colspan=\"3\">Total TTC</th><td>256,80 €</td></tr>\n  </tfoot>\n</table>"
    }
   ],
   "explain": "<ul>\n<li><code>&lt;caption&gt;</code> donne le titre du tableau : il est annoncé en premier.</li>\n<li>Le nom du produit est un <code>&lt;th scope=\"row\"&gt;</code> : c'est l'en-tête de sa ligne.</li>\n<li><code>colspan=\"3\"</code> fusionne 3 colonnes (et <code>rowspan</code> fusionne des lignes).</li>\n<li><code>&lt;tfoot&gt;</code> accueille les totaux HT, TVA, TTC.</li>\n<li>Sur mobile, on entoure le tableau d'un conteneur qui défile horizontalement plutôt que de casser la structure.</li>\n</ul>",
   "demo-html": "<div class=\"wrap\"><table>\n  <caption>Commandes récentes</caption>\n  <thead><tr><th scope=\"col\">N°</th><th scope=\"col\">Client</th><th scope=\"col\">Statut</th><th scope=\"col\" class=\"num\">TTC</th></tr></thead>\n  <tbody>\n    <tr><th scope=\"row\">0042</th><td>Brico Sud</td><td><span class=\"b ok\">Livrée</span></td><td class=\"num\">256,80 €</td></tr>\n    <tr><th scope=\"row\">0043</th><td>Visso</td><td><span class=\"b wait\">En attente</span></td><td class=\"num\">1 044,00 €</td></tr>\n    <tr><th scope=\"row\">0044</th><td>Atelier Mistral</td><td><span class=\"b prep\">En préparation</span></td><td class=\"num\">89,90 €</td></tr>\n  </tbody>\n</table></div>",
   "demo-css": "body{font-family:system-ui;padding:1rem}\n.wrap{overflow-x:auto}\ntable{border-collapse:collapse;width:100%;min-width:420px}\ncaption{text-align:left;font-weight:700;padding:.5rem 0}\nth,td{padding:.55rem .7rem;border-bottom:1px solid #e2dbcc;text-align:left}\nthead th{background:#171a26;color:#f4e8c8}\ntbody tr:hover{background:#faf3e0}\n.num{text-align:right;font-variant-numeric:tabular-nums}\n.b{padding:.15rem .5rem;border-radius:99px;font-size:.85rem}\n.ok{background:#dcf3e4;color:#0b4a26}.wait{background:#fbeccb;color:#5c3b00}.prep{background:#ebe2fb;color:#3b1a7a}",
   "guided": "<p>Créez le tableau « Stock bas » d'Ondea.</p>\n<ol>\n<li>Un <code>&lt;caption&gt;</code> « Produits sous le seuil d'alerte ».</li>\n<li>Un <code>&lt;thead&gt;</code> avec 4 colonnes (<code>th scope=\"col\"</code>) : Référence, Produit, Stock, Seuil.</li>\n<li>Un <code>&lt;tbody&gt;</code> avec au moins 3 lignes.</li>\n</ol>",
   "guided-html": "<table>\n  <!-- À vous -->\n</table>",
   "checks": [
    [
     "sel",
     "table caption",
     "Un <caption>"
    ],
    [
     "count",
     "thead th[scope=\"col\"]",
     "4",
     "4 en-têtes de colonne avec scope=\"col\""
    ],
    [
     "count",
     "tbody tr",
     "3",
     "Au moins 3 lignes dans <tbody>"
    ],
    [
     "text",
     "caption",
     "seuil",
     "Le caption parle du seuil"
    ]
   ],
   "guided-solution-html": "<table>\n  <caption>Produits sous le seuil d'alerte</caption>\n  <thead>\n    <tr><th scope=\"col\">Référence</th><th scope=\"col\">Produit</th><th scope=\"col\">Stock</th><th scope=\"col\">Seuil</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>VIS-440</td><td>Vis inox 4x40</td><td>12</td><td>50</td></tr>\n    <tr><td>PER-18V</td><td>Perceuse 18 V</td><td>2</td><td>5</td></tr>\n    <tr><td>CHV-08</td><td>Chevilles 8 mm</td><td>30</td><td>100</td></tr>\n  </tbody>\n</table>",
   "auto": "<p>Reproduisez le bon de commande d'Ondea sous forme de tableau : 5 lignes de produits avec quantité, prix unitaire HT, remise %, taux de TVA et total HT, puis un <code>tfoot</code> avec Total HT, détail de la TVA par taux (20 % et 5,5 %), frais de port et Total TTC. Calculez les montants à la main (ou à la calculatrice) : vous les recalculerez en JavaScript plus tard.</p>",
   "solution": "<p>La difficulté est le pied : on utilise <code>colspan</code> pour que l'intitulé occupe toutes les colonnes sauf la dernière. Les montants sont alignés à droite (CSS) pour faciliter la lecture.</p>",
   "solution-code": [
    {
     "lang": "html",
     "code": "<table>\n  <caption>Bon de commande CMD-2026-0050</caption>\n  <thead><tr><th scope=\"col\">Produit</th><th scope=\"col\">Qté</th><th scope=\"col\">PU HT</th><th scope=\"col\">Remise</th><th scope=\"col\">TVA</th><th scope=\"col\">Total HT</th></tr></thead>\n  <tbody>\n    <tr><th scope=\"row\">Vis inox 4x40</th><td>10</td><td>8,50 €</td><td>0 %</td><td>20 %</td><td>85,00 €</td></tr>\n    <tr><th scope=\"row\">Perceuse 18 V</th><td>2</td><td>129,00 €</td><td>10 %</td><td>20 %</td><td>232,20 €</td></tr>\n    <tr><th scope=\"row\">Chevilles 8 mm</th><td>5</td><td>4,00 €</td><td>0 %</td><td>20 %</td><td>20,00 €</td></tr>\n    <tr><th scope=\"row\">Guide technique</th><td>1</td><td>20,00 €</td><td>0 %</td><td>5,5 %</td><td>20,00 €</td></tr>\n    <tr><th scope=\"row\">Équerre 60 mm</th><td>4</td><td>2,50 €</td><td>0 %</td><td>20 %</td><td>10,00 €</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><th scope=\"row\" colspan=\"5\">Total HT produits</th><td>367,20 €</td></tr>\n    <tr><th scope=\"row\" colspan=\"5\">TVA 20 % (sur 347,20 €)</th><td>69,44 €</td></tr>\n    <tr><th scope=\"row\" colspan=\"5\">TVA 5,5 % (sur 20,00 €)</th><td>1,10 €</td></tr>\n    <tr><th scope=\"row\" colspan=\"5\">Frais de port HT (TVA 20 % : 2,00 €)</th><td>10,00 €</td></tr>\n    <tr><th scope=\"row\" colspan=\"5\">Total TTC</th><td>449,74 €</td></tr>\n  </tfoot>\n</table>"
    }
   ],
   "quiz": [
    {
     "q": "Quand utiliser un tableau HTML ?",
     "options": [
      "Pour aligner les blocs d'une page",
      "Pour présenter des données en lignes et colonnes",
      "Pour faire un menu",
      "Jamais, c'est obsolète"
     ],
     "answer": 1,
     "why": "La mise en page se fait en CSS (Flexbox, Grid)."
    },
    {
     "q": "Quelle balise donne le titre d'un tableau ?",
     "options": [
      "<title>",
      "<th>",
      "<caption>",
      "<legend>"
     ],
     "answer": 2,
     "why": "caption est le premier enfant de table."
    },
    {
     "q": "Que signifie scope=\"col\" ?",
     "options": [
      "Cet en-tête s'applique à toute la colonne",
      "La colonne est cachée",
      "La colonne est triable",
      "La cellule fait 2 colonnes"
     ],
     "answer": 0,
     "why": "scope relie l'en-tête aux cellules concernées."
    },
    {
     "q": "Où mettre les totaux d'une commande ?",
     "options": [
      "<thead>",
      "<caption>",
      "<tfoot>",
      "En dehors du tableau"
     ],
     "answer": 2,
     "why": "tfoot = pied du tableau."
    },
    {
     "q": "Que fait colspan=\"3\" ?",
     "options": [
      "Crée 3 tableaux",
      "Fusionne la cellule sur 3 colonnes",
      "Répète la cellule 3 fois",
      "Ajoute 3 lignes"
     ],
     "answer": 1,
     "why": "rowspan fait la même chose verticalement."
    }
   ],
   "ondea": "<p>Ondea Commandes affiche presque toutes ses listes (commandes, clients, produits, mouvements de stock) avec des tableaux générés par <code>ui.js</code> : en-têtes cliquables pour trier, pagination, montants alignés à droite. Les documents imprimables (bons de commande, factures, bons de livraison) de <code>documents.js</code> utilisent <code>tfoot</code> pour les totaux HT, TVA par taux et TTC.</p>"
  },
  {
   "id": "html-accessibilite",
   "part": "html",
   "title": "Accessibilité et organisation",
   "subtitle": "alt, ARIA, focus, régions live, dialog, structure de projet",
   "duration": "1 h 30",
   "feature": "Notifications, modales et organisation des fichiers",
   "intro": "<p>L'<strong>accessibilité</strong> (a11y) consiste à rendre l'application utilisable par tout le monde : personnes aveugles (lecteur d'écran), malvoyantes (zoom, contraste), qui n'utilisent que le clavier, daltoniennes, ou simplement sur un téléphone en plein soleil. En France, c'est aussi une obligation légale pour de nombreux services.</p>\n<p>Les bonnes pratiques clés :</p>\n<ul>\n<li>Utiliser d'abord le <strong>bon élément HTML</strong> : un <code>&lt;button&gt;</code> est déjà focusable et activable au clavier, une <code>&lt;div&gt;</code> non.</li>\n<li>ARIA seulement en complément : <code>aria-label</code> (nom), <code>aria-expanded</code> (ouvert/fermé), <code>aria-live</code> (annoncer un changement).</li>\n<li>Ne jamais transmettre une information par la <strong>couleur seule</strong> : un statut « En retard » a une couleur <em>et</em> un texte ou une icône.</li>\n<li>Le focus doit être <strong>visible</strong> et suivre un ordre logique.</li>\n</ul>\n<p>Côté organisation, un projet propre sépare <code>index.html</code>, un dossier <code>css/</code>, un dossier <code>js/</code> et un dossier <code>assets/</code> (images, icônes, polices).</p>",
   "example": [
    {
     "lang": "html",
     "code": "<!-- Bouton icône : le texte invisible donne son nom -->\n<button type=\"button\" class=\"btn-icon\" aria-label=\"Notifications (3 non lues)\"\n        aria-expanded=\"false\" aria-controls=\"panneau-notifs\">\n  <svg aria-hidden=\"true\" width=\"20\" height=\"20\"><use href=\"#i-bell\"></use></svg>\n</button>\n\n<!-- Zone annoncée automatiquement par les lecteurs d'écran -->\n<div id=\"toasts\" role=\"status\" aria-live=\"polite\"></div>\n\n<!-- Boîte de dialogue native : gère le focus et la touche Échap -->\n<dialog id=\"confirm-annulation\" aria-labelledby=\"titre-dialog\">\n  <h2 id=\"titre-dialog\">Annuler la commande CMD-2026-0042 ?</h2>\n  <p>Le stock réservé sera libéré.</p>\n  <form method=\"dialog\">\n    <button value=\"non\">Garder la commande</button>\n    <button value=\"oui\">Annuler la commande</button>\n  </form>\n</dialog>"
    }
   ],
   "explain": "<ul>\n<li>Un bouton qui ne contient qu'une icône doit avoir un <code>aria-label</code> ; l'icône a <code>aria-hidden=\"true\"</code> pour ne pas être lue.</li>\n<li><code>aria-expanded</code> dit si le panneau commandé est ouvert ; le JS le met à jour.</li>\n<li><code>aria-live=\"polite\"</code> : tout texte ajouté dans la zone est lu dès que l'utilisateur fait une pause. On l'utilise pour les messages « Commande enregistrée ».</li>\n<li><code>&lt;dialog&gt;</code> ouvert avec <code>showModal()</code> bloque le reste de la page, piège le focus et se ferme avec Échap.</li>\n<li>Dans un <code>&lt;form method=\"dialog\"&gt;</code>, cliquer sur un bouton ferme la boîte et donne sa <code>value</code> à <code>dialog.returnValue</code>.</li>\n</ul>",
   "demo-html": "<button type=\"button\" id=\"ouvrir\">Annuler la commande…</button>\n<div id=\"toasts\" role=\"status\" aria-live=\"polite\"></div>\n<dialog id=\"dlg\" aria-labelledby=\"t\">\n  <h2 id=\"t\">Annuler CMD-2026-0042 ?</h2>\n  <p>Le stock réservé sera libéré.</p>\n  <form method=\"dialog\">\n    <button value=\"non\" autofocus>Garder</button>\n    <button value=\"oui\">Annuler la commande</button>\n  </form>\n</dialog>",
   "demo-css": "body{font-family:system-ui;padding:1rem}\nbutton{font:inherit;padding:.5rem 1rem;border-radius:8px;border:1px solid #171a26;background:#fff;cursor:pointer}\nbutton:focus-visible{outline:3px solid #1d4ed8;outline-offset:2px}\ndialog{border:1px solid #c9a14a;border-radius:14px;padding:1.2rem}\ndialog::backdrop{background:rgba(10,12,20,.6)}\n#toasts{margin-top:1rem;font-weight:700;color:#0b4a26}",
   "demo-js": "const dlg = document.getElementById('dlg');\ndocument.getElementById('ouvrir').addEventListener('click', () => dlg.showModal());\ndlg.addEventListener('close', () => {\n  // Le texte inséré dans la région aria-live est lu par le lecteur d'écran\n  document.getElementById('toasts').textContent =\n    dlg.returnValue === 'oui' ? 'Commande annulée.' : 'Commande conservée.';\n});",
   "guided": "<p>Rendez accessible la barre supérieure d'Ondea.</p>\n<ol>\n<li>Un bouton icône « Notifications » : <code>&lt;button&gt;</code> avec <code>aria-label</code> et un <code>&lt;svg aria-hidden=\"true\"&gt;</code> à l'intérieur.</li>\n<li>Un bouton « Menu » avec <code>aria-expanded=\"false\"</code> et <code>aria-controls=\"menu\"</code>.</li>\n<li>Une zone de messages avec <code>role=\"status\"</code> et <code>aria-live=\"polite\"</code>.</li>\n<li>Une boîte <code>&lt;dialog&gt;</code> de déconnexion avec un titre relié par <code>aria-labelledby</code>.</li>\n</ol>",
   "guided-html": "<header>\n  <!-- À vous -->\n</header>",
   "checks": [
    [
     "sel",
     "button[aria-label] svg[aria-hidden=\"true\"]",
     "Bouton icône nommé avec SVG masqué"
    ],
    [
     "sel",
     "button[aria-expanded=\"false\"][aria-controls]",
     "Bouton menu avec aria-expanded et aria-controls"
    ],
    [
     "sel",
     "[role=\"status\"][aria-live=\"polite\"]",
     "Une région live polie"
    ],
    [
     "sel",
     "dialog[aria-labelledby]",
     "Un dialog nommé par aria-labelledby"
    ]
   ],
   "guided-solution-html": "<header>\n  <button type=\"button\" aria-expanded=\"false\" aria-controls=\"menu\">Menu</button>\n  <button type=\"button\" aria-label=\"Notifications (2 non lues)\">\n    <svg aria-hidden=\"true\" width=\"20\" height=\"20\"><circle cx=\"10\" cy=\"10\" r=\"8\"/></svg>\n  </button>\n  <div role=\"status\" aria-live=\"polite\"></div>\n</header>\n<nav id=\"menu\" hidden>…</nav>\n<dialog id=\"dlg-logout\" aria-labelledby=\"t-logout\">\n  <h2 id=\"t-logout\">Se déconnecter ?</h2>\n  <form method=\"dialog\"><button value=\"non\">Rester</button><button value=\"oui\">Se déconnecter</button></form>\n</dialog>",
   "auto": "<p>Faites l'audit d'une de vos pages précédentes : (1) parcourez-la uniquement au clavier et notez chaque problème, (2) passez l'outil Lighthouse (onglet Accessibilité des outils de développement), (3) vérifiez le contraste de vos couleurs avec un vérificateur de contraste, (4) corrigez et rédigez un court rapport « avant / après » de 5 lignes. Puis organisez votre projet en dossiers <code>css/</code>, <code>js/</code>, <code>assets/img/</code>.</p>",
   "solution": "<p>Les défauts les plus fréquents : images sans alt, champs sans label, focus invisible (<code>outline: none</code>), contraste insuffisant du texte gris, boutons faits en <code>&lt;div&gt;</code>, titres qui sautent des niveaux. Exemple de rapport :</p>",
   "solution-code": [
    {
     "lang": "html",
     "code": "<!-- Rapport d'audit — Fiche client -->\n<!-- Avant : 3 champs sans label, contraste du texte gris 3,2:1, focus supprimé. -->\n<!-- Après : labels reliés par for/id, texte #434753 sur #ffffff (> 7:1),\n     :focus-visible avec contour bleu de 3 px, score Lighthouse 78 → 100. -->\n<!-- Arborescence -->\n<!-- ondea-commandes/\n       index.html\n       css/style.css\n       js/app.js\n       assets/img/logo.svg -->"
    }
   ],
   "quiz": [
    {
     "q": "Quelle est la première règle de l'accessibilité en HTML ?",
     "options": [
      "Utiliser le bon élément natif avant d'ajouter de l'ARIA",
      "Ajouter role=\"button\" partout",
      "Utiliser des div",
      "Mettre aria-label sur tout"
     ],
     "answer": 0,
     "why": "« Pas d'ARIA vaut mieux qu'un mauvais ARIA. »"
    },
    {
     "q": "Que fait aria-live=\"polite\" ?",
     "options": [
      "Rend un texte plus poli",
      "Fait annoncer les changements de contenu de la zone",
      "Cache la zone",
      "Rend la zone cliquable"
     ],
     "answer": 1,
     "why": "Idéal pour les notifications de succès."
    },
    {
     "q": "Un bouton qui contient seulement une icône doit avoir…",
     "options": [
      "Un title uniquement",
      "Un nom accessible, par exemple aria-label",
      "Rien",
      "Une classe icon"
     ],
     "answer": 1,
     "why": "Sans nom, le lecteur d'écran dit seulement « bouton »."
    },
    {
     "q": "Pourquoi ne pas indiquer un retard uniquement en rouge ?",
     "options": [
      "Le rouge est démodé",
      "Les personnes daltoniennes ou malvoyantes ne percevront pas l'information",
      "Le rouge ne s'imprime pas",
      "Ce n'est pas un problème"
     ],
     "answer": 1,
     "why": "Critère WCAG 1.4.1 : utilisation de la couleur."
    },
    {
     "q": "Quel avantage de <dialog> avec showModal() ?",
     "options": [
      "Il est plus joli",
      "Il gère la modalité, le focus et la touche Échap",
      "Il fonctionne sans JavaScript",
      "Il remplace les formulaires"
     ],
     "answer": 1,
     "why": "Moins de code à écrire et un comportement accessible par défaut."
    }
   ],
   "ondea": "<p>Ondea Commandes déclare dans <code>index.html</code> des régions <code>aria-live</code> pour ses toasts. <code>ui.js</code> fournit des modales accessibles (focus piégé, retour du focus sur le bouton d'origine, Échap), et chaque statut de commande associe couleur <strong>et</strong> libellé <strong>et</strong> icône (<code>STATUSES</code> dans <code>utils.js</code>). Les icônes sont regroupées dans un sprite SVG (<code>assets/icons/sprite.svg</code>) avec <code>aria-hidden</code>.</p>"
  },
  {
   "id": "css-selecteurs",
   "part": "css",
   "title": "Sélecteurs, cascade et spécificité",
   "subtitle": "Cibler exactement le bon élément",
   "duration": "1 h 30",
   "feature": "Boutons et badges de statut",
   "intro": "<p>Le <strong>CSS</strong> (Cascading Style Sheets) décrit l'apparence. Une <strong>règle</strong> CSS a deux parties : un <strong>sélecteur</strong> (qui ?) et des <strong>déclarations</strong> (quoi ?) entre accolades, sous la forme <code>propriété: valeur;</code>.</p>\n<p>Les sélecteurs essentiels :</p>\n<ul>\n<li><code>p</code> : tous les paragraphes (sélecteur d'<strong>élément</strong>).</li>\n<li><code>.btn</code> : tous les éléments ayant <code>class=\"btn\"</code> (<strong>classe</strong>, le plus utilisé).</li>\n<li><code>#contenu</code> : l'élément <code>id=\"contenu\"</code> (unique, à éviter pour le style).</li>\n<li><code>[data-theme=\"dark\"]</code> : sélecteur d'<strong>attribut</strong>.</li>\n<li><code>.nav a</code> : les liens <em>à l'intérieur</em> de <code>.nav</code> (descendant).</li>\n<li><code>.btn:hover</code>, <code>:focus-visible</code>, <code>li:nth-child(2)</code> : <strong>pseudo-classes</strong> (un état ou une position).</li>\n</ul>\n<p>Quand deux règles se contredisent, le navigateur applique la <strong>cascade</strong> : la règle la plus <strong>spécifique</strong> gagne (id &gt; classe &gt; élément) ; à égalité, la <strong>dernière</strong> écrite gagne.</p>",
   "example": [
    {
     "lang": "css",
     "code": "/* Sélecteur de classe : la base de tous les boutons */\n.btn {\n  padding: .6rem 1.1rem;          /* espace intérieur */\n  border-radius: 10px;            /* coins arrondis */\n  border: 1px solid transparent;\n  font-weight: 700;\n  cursor: pointer;                /* main au survol */\n}\n\n/* Variante : deux classes sur le même élément class=\"btn btn-primary\" */\n.btn-primary { background: #171a26; color: #fdf8ea; }\n\n/* Pseudo-classe : état survolé */\n.btn-primary:hover { background: #262a3b; }\n\n/* Focus clavier visible : NE JAMAIS le supprimer */\n.btn:focus-visible { outline: 3px solid #1d4ed8; outline-offset: 2px; }\n\n/* Sélecteur d'attribut : badge selon le statut */\n.badge[data-status=\"livree\"]  { background: #dcf3e4; color: #0b4a26; }\n.badge[data-status=\"annulee\"] { background: #fbe0de; color: #7a1410; }\n\n/* Descendant : liens du menu seulement */\n.sidebar nav a { text-decoration: none; }"
    }
   ],
   "explain": "<ul>\n<li>Une classe est réutilisable : on compose <code>class=\"btn btn-primary\"</code> plutôt que de tout réécrire.</li>\n<li><code>:hover</code> = survol souris ; <code>:focus-visible</code> = focus clavier. Supprimer le contour de focus est une faute d'accessibilité grave.</li>\n<li><code>[data-status=\"livree\"]</code> cible un attribut : pratique quand le JS change l'état d'un élément.</li>\n<li>Spécificité : <code>#id</code> vaut (1,0,0), <code>.classe</code>/<code>[attr]</code>/<code>:hover</code> valent (0,1,0), <code>p</code> vaut (0,0,1). On les additionne.</li>\n<li><code>!important</code> écrase tout : à réserver aux cas exceptionnels, il rend le code difficile à maintenir.</li>\n</ul>",
   "demo-html": "<button class=\"btn\">Bouton simple</button>\n<button class=\"btn btn-primary\">Valider la commande</button>\n<p><span class=\"badge\" data-status=\"livree\">Livrée</span> <span class=\"badge\" data-status=\"annulee\">Annulée</span> <span class=\"badge\" data-status=\"attente\">En attente</span></p>\n<ul class=\"liste\"><li>Ligne 1</li><li>Ligne 2</li><li>Ligne 3</li><li>Ligne 4</li></ul>",
   "demo-css": "body{font-family:system-ui;padding:1rem}\n.btn{padding:.6rem 1.1rem;border-radius:10px;border:1px solid #171a26;font-weight:700;cursor:pointer;background:#fff}\n.btn-primary{background:#171a26;color:#fdf8ea}\n.btn-primary:hover{background:#c9a14a;color:#171a26}\n.btn:focus-visible{outline:3px solid #1d4ed8;outline-offset:2px}\n.badge{padding:.2rem .6rem;border-radius:99px;font-size:.85rem}\n.badge[data-status=\"livree\"]{background:#dcf3e4;color:#0b4a26}\n.badge[data-status=\"annulee\"]{background:#fbe0de;color:#7a1410}\n.badge[data-status=\"attente\"]{background:#fbeccb;color:#5c3b00}\n.liste li:nth-child(even){background:#f4f1ea}",
   "guided": "<p>Le HTML des badges de statut est fourni. Écrivez le CSS dans l'onglet CSS :</p>\n<ol>\n<li>La classe <code>.badge</code> : <code>padding</code>, <code>border-radius: 999px</code> et <code>display: inline-block</code>.</li>\n<li>Le badge <code>[data-status=\"validee\"]</code> a un fond bleu clair <code>#dfe9fb</code> et un texte <code>#0f2f6e</code>.</li>\n<li>Le badge <code>[data-status=\"expediee\"]</code> a un fond <code>#f4e8c8</code> et un texte <code>#614608</code>.</li>\n<li>Au survol (<code>:hover</code>), un badge passe en gras.</li>\n</ol>",
   "guided-html": "<span class=\"badge\" data-status=\"validee\">Validée</span>\n<span class=\"badge\" data-status=\"expediee\">Expédiée</span>",
   "guided-css": "/* À vous */",
   "checks": [
    [
     "style",
     ".badge",
     "display",
     "inline-block",
     ".badge est en inline-block"
    ],
    [
     "style",
     ".badge",
     "border-top-left-radius",
     "999px",
     ".badge a des coins en pilule"
    ],
    [
     "style",
     "[data-status=\"validee\"]",
     "background-color",
     "rgb(223, 233, 251)",
     "Fond bleu clair pour « validée »"
    ],
    [
     "style",
     "[data-status=\"expediee\"]",
     "color",
     "rgb(97, 70, 8)",
     "Texte doré foncé pour « expédiée »"
    ],
    [
     "css",
     "\\.badge:hover\\s*\\{[^}]*font-weight",
     "Une règle .badge:hover change la graisse"
    ]
   ],
   "guided-solution-css": ".badge { display: inline-block; padding: .2rem .7rem; border-radius: 999px; }\n.badge[data-status=\"validee\"]  { background: #dfe9fb; color: #0f2f6e; }\n.badge[data-status=\"expediee\"] { background: #f4e8c8; color: #614608; }\n.badge:hover { font-weight: 700; }",
   "auto": "<p>Créez les 9 badges de statut d'Ondea (brouillon, attente, validée, préparation, partielle, prête, expédiée, livrée, annulée) avec un sélecteur d'attribut chacun, puis les 3 badges de priorité (normale, haute, urgente). Ajoutez un petit point coloré avant le texte grâce au pseudo-élément <code>::before</code>. Calculez à la main la spécificité de 3 de vos sélecteurs.</p>",
   "solution": "<p>Le pseudo-élément <code>::before</code> crée un élément virtuel avant le contenu ; il a besoin de la propriété <code>content</code> (même vide) pour exister.</p>",
   "solution-code": [
    {
     "lang": "css",
     "code": ".badge { display: inline-flex; align-items: center; gap: .4rem; padding: .2rem .7rem; border-radius: 999px; font-size: .85rem; }\n.badge::before { content: \"\"; width: .5rem; height: .5rem; border-radius: 50%; background: currentColor; }\n.badge[data-status=\"brouillon\"]   { background: #ebe7de; color: #2c2f38; }\n.badge[data-status=\"attente\"]     { background: #fbeccb; color: #5c3b00; }\n.badge[data-status=\"validee\"]     { background: #dfe9fb; color: #0f2f6e; }\n.badge[data-status=\"preparation\"] { background: #ebe2fb; color: #3b1a7a; }\n.badge[data-status=\"partielle\"]   { background: #fbeccb; color: #5c3b00; }\n.badge[data-status=\"prete\"]       { background: #d7f1ef; color: #0b4541; }\n.badge[data-status=\"expediee\"]    { background: #f4e8c8; color: #614608; }\n.badge[data-status=\"livree\"]      { background: #dcf3e4; color: #0b4a26; }\n.badge[data-status=\"annulee\"]     { background: #fbe0de; color: #7a1410; }\n.badge[data-priority=\"haute\"]     { background: #fbeccb; color: #5c3b00; }\n.badge[data-priority=\"urgente\"]   { background: #fbe0de; color: #7a1410; }\n/* Spécificité : .badge = (0,1,0) ; .badge[data-status=\"livree\"] = (0,2,0) ; .badge::before = (0,1,1) */"
    }
   ],
   "quiz": [
    {
     "q": "Quel sélecteur cible class=\"btn\" ?",
     "options": [
      "#btn",
      ".btn",
      "btn",
      "[btn]"
     ],
     "answer": 1,
     "why": "Le point désigne une classe, le dièse un id."
    },
    {
     "q": "Quelle règle l'emporte : #total { color: red } ou .total { color: blue } ?",
     "options": [
      "#total, car un id est plus spécifique",
      ".total, car elle est écrite après",
      "Aucune",
      "Celle avec la couleur la plus claire"
     ],
     "answer": 0,
     "why": "La spécificité passe avant l'ordre d'écriture."
    },
    {
     "q": "Que cible .sidebar a ?",
     "options": [
      "Les éléments qui ont les deux classes",
      "Les liens situés à l'intérieur de .sidebar",
      "Le lien juste après .sidebar",
      "Toutes les sidebars"
     ],
     "answer": 1,
     "why": "L'espace est le combinateur descendant."
    },
    {
     "q": "Pourquoi ne jamais écrire :focus { outline: none } sans alternative ?",
     "options": [
      "C'est invalide",
      "Les utilisateurs au clavier ne voient plus où ils sont",
      "Cela ralentit la page",
      "Cela casse le JavaScript"
     ],
     "answer": 1,
     "why": "Critère WCAG 2.4.7 : focus visible."
    },
    {
     "q": "Que fait li:nth-child(even) ?",
     "options": [
      "Cible le premier li",
      "Cible les li en position paire",
      "Cible les li vides",
      "Cible le dernier li"
     ],
     "answer": 1,
     "why": "Pratique pour zébrer des lignes."
    }
   ],
   "ondea": "<p>Dans <code>components.css</code> d'Ondea, tous les boutons partent de <code>.btn</code> avec des variantes (<code>.btn-primary</code>, <code>.btn-ghost</code>, <code>.btn-danger</code>) et les statuts utilisent des classes <code>.badge-success</code>, <code>.badge-warning</code>, <code>.badge-gold</code>… choisies par le JavaScript à partir de la constante <code>STATUSES</code>. Le thème entier repose sur le sélecteur d'attribut <code>[data-theme=\"dark\"]</code>.</p>"
  },
  {
   "id": "css-couleurs-typo",
   "part": "css",
   "title": "Couleurs, contrastes et typographie",
   "subtitle": "Hexadécimal, rgb, polices, tailles en rem et lisibilité",
   "duration": "1 h 30",
   "feature": "Identité Obsidienne & Or",
   "intro": "<p>Une couleur s'écrit de plusieurs façons : <code>#c9a14a</code> (hexadécimal : rouge, vert, bleu de 00 à ff), <code>rgb(201 161 74)</code>, avec transparence <code>rgb(201 161 74 / 45%)</code>, ou <code>hsl()</code> (teinte, saturation, luminosité).</p>\n<p>Le <strong>contraste</strong> entre le texte et le fond se mesure par un ratio : 4,5:1 minimum (niveau AA), <strong>7:1</strong> pour le niveau AAA visé par Ondea. Un gris clair sur blanc paraît élégant mais devient illisible pour beaucoup de gens.</p>\n<p>Pour la typographie : <code>font-family</code> (avec des polices de secours), <code>font-size</code> en <code>rem</code> (relatif à la taille choisie par l'utilisateur, 1rem = 16px par défaut), <code>line-height</code> autour de 1,5 pour le texte courant, et une largeur de ligne limitée (environ 70 caractères : <code>max-width: 70ch</code>).</p>\n<p>On peut embarquer une police avec <code>@font-face</code> et un fichier <code>.woff2</code> : l'application fonctionne alors hors ligne.</p>",
   "example": [
    {
     "lang": "css",
     "code": "/* Embarquer une police locale (fonctionne sans Internet) */\n@font-face {\n  font-family: \"Atkinson Hyperlegible\";\n  src: url(\"../assets/fonts/atkinson-hyperlegible-400.woff2\") format(\"woff2\");\n  font-weight: 400;\n  font-display: swap;      /* affiche une police de secours en attendant */\n}\n\nbody {\n  /* Police principale puis polices de secours */\n  font-family: \"Atkinson Hyperlegible\", system-ui, sans-serif;\n  font-size: 1rem;         /* respecte le réglage du navigateur */\n  line-height: 1.6;        /* interligne confortable */\n  color: #14161f;          /* quasi-noir sur fond ivoire : 16:1 */\n  background: #f4f1ea;\n}\n\nh1, h2 {\n  font-family: \"Playfair Display\", Georgia, serif;\n  line-height: 1.2;\n  color: #0f111a;\n}\n\n/* Taille fluide : jamais moins de 1.8rem, jamais plus de 3rem */\nh1 { font-size: clamp(1.8rem, 1.2rem + 2.5vw, 3rem); }\n\n.texte-or { color: #614608; }   /* or foncé lisible (≥ 7:1 sur blanc) */\n.prose    { max-width: 70ch; }  /* lignes pas trop longues */"
    }
   ],
   "explain": "<ul>\n<li><code>font-display: swap</code> évite un texte invisible pendant le chargement de la police.</li>\n<li>Le doré vif <code>#c9a14a</code> ne contraste pas assez avec le blanc pour du texte : Ondea l'utilise en décor (bordures, halos) et réserve <code>#614608</code> pour le texte doré.</li>\n<li><code>clamp(min, idéal, max)</code> crée une taille qui grandit avec l'écran (<code>vw</code> = 1 % de la largeur de la fenêtre) sans dépasser les bornes.</li>\n<li><code>ch</code> = largeur du caractère « 0 » : <code>70ch</code> ≈ 70 caractères par ligne.</li>\n<li>Préférez <code>rem</code> à <code>px</code> pour les tailles de texte : l'utilisateur qui agrandit la police par défaut sera respecté.</li>\n</ul>",
   "demo-html": "<h1>Ondea Commandes</h1>\n<p class=\"prose\">Le texte courant utilise une police très lisible, un interligne de 1,6 et une couleur quasi-noire sur fond ivoire. <span class=\"or\">Ce texte doré foncé reste lisible.</span></p>\n<p class=\"mauvais\">Exemple à éviter : gris clair sur blanc (contraste 2,3:1).</p>\n<div class=\"palette\"><span style=\"background:#0f111a\">#0f111a</span><span style=\"background:#171a26\">#171a26</span><span style=\"background:#c9a14a;color:#171a26\">#c9a14a</span><span style=\"background:#f4e8c8;color:#171a26\">#f4e8c8</span><span style=\"background:#f4f1ea;color:#171a26\">#f4f1ea</span></div>",
   "demo-css": "body{font-family:Georgia,serif;background:#f4f1ea;color:#14161f;padding:1rem;line-height:1.6}\nh1{font-size:clamp(1.6rem,1rem + 3vw,2.6rem);margin:0 0 .5rem}\n.prose{max-width:60ch;font-family:system-ui}\n.or{color:#614608;font-weight:700}\n.mauvais{color:#aaa;background:#fff;padding:.5rem;font-family:system-ui}\n.palette{display:flex;flex-wrap:wrap;gap:.4rem}.palette span{color:#fdf8ea;padding:.8rem;border-radius:8px;font:600 .8rem monospace}",
   "guided": "<p>Appliquez l'identité Obsidienne & Or à une carte d'accueil.</p>\n<ol>\n<li><code>body</code> : fond <code>#0f111a</code> (obsidienne), texte <code>#f4e8c8</code>, <code>line-height: 1.6</code>.</li>\n<li><code>h1</code> : couleur or <code>#d6b05c</code> et taille définie avec <code>clamp()</code>.</li>\n<li><code>.prose</code> : largeur maximale <code>60ch</code>.</li>\n<li><code>.muted</code> : couleur <code>#c7c2b4</code> (reste lisible sur fond sombre).</li>\n</ol>",
   "guided-html": "<h1>Bienvenue, Claire</h1>\n<p class=\"prose\">Vous avez 4 commandes à valider et 2 produits sous le seuil d'alerte.</p>\n<p class=\"muted\">Dernière connexion : hier à 17 h 42</p>",
   "guided-css": "/* À vous */",
   "checks": [
    [
     "style",
     "body",
     "background-color",
     "rgb(15, 17, 26)",
     "Fond obsidienne #0f111a"
    ],
    [
     "style",
     "body",
     "color",
     "rgb(244, 232, 200)",
     "Texte ivoire #f4e8c8"
    ],
    [
     "style",
     "h1",
     "color",
     "rgb(214, 176, 92)",
     "Titre doré #d6b05c"
    ],
    [
     "css",
     "h1\\s*\\{[^}]*clamp\\(",
     "Taille du h1 avec clamp()"
    ],
    [
     "css",
     "\\.prose\\s*\\{[^}]*max-width\\s*:\\s*60ch",
     ".prose limité à 60ch"
    ],
    [
     "style",
     ".muted",
     "color",
     "rgb(199, 194, 180)",
     ".muted en #c7c2b4"
    ]
   ],
   "guided-solution-css": "body { background: #0f111a; color: #f4e8c8; line-height: 1.6; font-family: system-ui, sans-serif; padding: 1.5rem; }\nh1 { color: #d6b05c; font-family: Georgia, serif; font-size: clamp(1.8rem, 1rem + 3vw, 3rem); }\n.prose { max-width: 60ch; }\n.muted { color: #c7c2b4; }",
   "auto": "<p>Créez une page « Charte graphique Ondea » : une pastille par couleur de la palette avec son code, et pour chaque couple texte/fond le ratio de contraste mesuré (outil de contraste de l'inspecteur Chrome ou Firefox). Présentez la hiérarchie typographique (h1, h2, h3, texte, petit texte, code) avec les polices Playfair Display, Atkinson Hyperlegible et JetBrains Mono embarquées par <code>@font-face</code>.</p>",
   "solution": "<p>Les trois polices ont des rôles distincts : Playfair (titres, caractère luxueux), Atkinson Hyperlegible (texte, conçue pour les personnes malvoyantes), JetBrains Mono (codes, références, montants alignés). Elles sont fournies dans le dossier <code>assets/fonts</code> de ce cours.</p>",
   "solution-code": [
    {
     "lang": "css",
     "code": "@font-face { font-family: \"Playfair Display\"; font-weight: 700; font-display: swap;\n  src: url(\"assets/fonts/playfair-display-latin-700-normal.woff2\") format(\"woff2\"); }\n@font-face { font-family: \"Atkinson Hyperlegible\"; font-weight: 400; font-display: swap;\n  src: url(\"assets/fonts/atkinson-hyperlegible-latin-400-normal.woff2\") format(\"woff2\"); }\n@font-face { font-family: \"JetBrains Mono\"; font-weight: 400; font-display: swap;\n  src: url(\"assets/fonts/jetbrains-mono-latin-400-normal.woff2\") format(\"woff2\"); }\n\nbody  { font: 1rem/1.6 \"Atkinson Hyperlegible\", system-ui, sans-serif; color: #14161f; background: #f4f1ea; }\nh1    { font: 700 clamp(2rem, 1.4rem + 2.5vw, 3rem)/1.15 \"Playfair Display\", Georgia, serif; }\nh2    { font: 700 1.75rem/1.2 \"Playfair Display\", Georgia, serif; }\nh3    { font-size: 1.25rem; }\nsmall { font-size: .875rem; }\ncode  { font-family: \"JetBrains Mono\", ui-monospace, monospace; }\n.pastille { display: inline-grid; place-items: center; width: 7rem; height: 4rem; border-radius: 12px; }\n/* #14161f sur #f4f1ea : 16,1:1 — #614608 sur #ffffff : 8,6:1 — #f4e8c8 sur #0f111a : 15,4:1 */"
    }
   ],
   "quiz": [
    {
     "q": "Quel ratio de contraste minimal vise le niveau AAA pour du texte courant ?",
     "options": [
      "3:1",
      "4,5:1",
      "7:1",
      "21:1"
     ],
     "answer": 2,
     "why": "AA = 4,5:1 ; AAA = 7:1 (texte normal)."
    },
    {
     "q": "Pourquoi préférer rem à px pour la taille du texte ?",
     "options": [
      "rem respecte la taille de police choisie par l'utilisateur",
      "px n'existe plus",
      "rem est plus rapide",
      "Pour l'impression uniquement"
     ],
     "answer": 0,
     "why": "1rem = taille de base de la racine (souvent 16px, modifiable)."
    },
    {
     "q": "Que fait clamp(1.8rem, 4vw, 3rem) ?",
     "options": [
      "Fixe la taille à 4vw",
      "Une taille fluide bornée entre 1,8rem et 3rem",
      "Une animation de taille",
      "Une erreur"
     ],
     "answer": 1,
     "why": "Typographie fluide sans media query."
    },
    {
     "q": "Pourquoi mettre plusieurs polices dans font-family ?",
     "options": [
      "Pour mélanger les styles",
      "Pour avoir des polices de secours si la première est indisponible",
      "C'est obligatoire",
      "Pour la rapidité"
     ],
     "answer": 1,
     "why": "Le navigateur prend la première disponible."
    },
    {
     "q": "Quel interligne pour un texte courant lisible ?",
     "options": [
      "1",
      "Environ 1,5 à 1,6",
      "3",
      "0,8"
     ],
     "answer": 1,
     "why": "WCAG 1.4.12 recommande au moins 1,5."
    }
   ],
   "ondea": "<p>Le fichier <code>themes.css</code> d'Ondea charge les trois polices en <code>@font-face</code> depuis <code>assets/fonts/</code> et précise en commentaire : « Tous les couples texte / fond ont été choisis pour viser un contraste ≥ 7:1 (WCAG AAA) ». On y voit la distinction entre <code>--gold</code> (décor) et <code>--gold-text</code> (<code>#614608</code>, texte).</p>"
  },
  {
   "id": "css-box-model",
   "part": "css",
   "title": "Le modèle de boîte",
   "subtitle": "content, padding, border, margin et box-sizing",
   "duration": "1 h",
   "feature": "Les cartes du tableau de bord",
   "intro": "<p>Pour le navigateur, <strong>chaque élément est une boîte rectangulaire</strong> composée de quatre couches, de l'intérieur vers l'extérieur :</p>\n<ol>\n<li><strong>content</strong> : le contenu (texte, image), dimensionné par <code>width</code>/<code>height</code> ;</li>\n<li><strong>padding</strong> : l'espace intérieur, qui prend la couleur de fond ;</li>\n<li><strong>border</strong> : la bordure ;</li>\n<li><strong>margin</strong> : l'espace extérieur, transparent, qui éloigne les autres boîtes.</li>\n</ol>\n<p>Piège classique : par défaut, <code>width: 300px</code> ne compte que le contenu ; le padding et la bordure s'ajoutent. Avec <code>box-sizing: border-box</code>, la largeur inclut padding et bordure : beaucoup plus intuitif. Presque tous les projets professionnels commencent par cette règle.</p>\n<p>Il existe aussi deux grands types d'affichage : <code>block</code> (prend toute la largeur, passe à la ligne : div, p, h1) et <code>inline</code> (dans le flux du texte : span, a, strong).</p>",
   "example": [
    {
     "lang": "css",
     "code": "/* Règle de base de tout projet : la largeur inclut padding + bordure */\n*, *::before, *::after { box-sizing: border-box; }\n\n.card {\n  width: 100%;\n  max-width: 320px;              /* jamais plus large que 320px */\n  padding: 1.25rem;              /* espace intérieur sur les 4 côtés */\n  border: 1px solid #e2dbcc;     /* épaisseur, style, couleur */\n  border-radius: 14px;\n  margin-bottom: 1rem;           /* espace sous la carte */\n  background: #ffffff;\n  box-shadow: 0 10px 30px rgb(23 26 38 / 10%);  /* profondeur */\n}\n\n/* Raccourcis : haut droite bas gauche (sens des aiguilles d'une montre) */\n.kpi-valeur { margin: 0 0 .25rem 0; }\n.kpi-label  { padding: .25rem .5rem; }  /* vertical | horizontal */\n\n/* Centrer un bloc horizontalement */\n.conteneur { max-width: 1200px; margin-inline: auto; }"
    }
   ],
   "explain": "<ul>\n<li>Le sélecteur universel <code>*</code> applique <code>border-box</code> à tous les éléments et pseudo-éléments.</li>\n<li><code>max-width</code> laisse la carte rétrécir sur mobile mais l'empêche de trop s'étaler sur grand écran.</li>\n<li>Valeurs raccourcies : 1 valeur = 4 côtés ; 2 valeurs = vertical puis horizontal ; 4 valeurs = haut, droite, bas, gauche.</li>\n<li><code>margin-inline: auto</code> répartit l'espace restant à gauche et à droite : le bloc est centré.</li>\n<li>Les marges verticales de deux blocs voisins <strong>fusionnent</strong> (la plus grande l'emporte) : c'est le « margin collapsing ».</li>\n<li>Dans l'inspecteur du navigateur, l'onglet « Calculé » dessine le modèle de boîte de l'élément sélectionné.</li>\n</ul>",
   "demo-html": "<div class=\"card a\"><p class=\"v\">12</p><p class=\"l\">content-box : 220px + padding + bordure</p></div>\n<div class=\"card b\"><p class=\"v\">12</p><p class=\"l\">border-box : 220px au total</p></div>",
   "demo-css": "body{font-family:system-ui;padding:1rem;background:#f4f1ea}\n.card{width:220px;padding:24px;border:6px solid #c9a14a;margin:0 0 1rem;background:#fff;border-radius:14px;box-shadow:0 10px 30px rgb(23 26 38/12%)}\n.a{box-sizing:content-box}.b{box-sizing:border-box}\n.v{font-size:2rem;font-weight:700;margin:0}.l{margin:0;font-size:.85rem}",
   "guided": "<p>Mettez en forme la carte indicateur « Chiffre d'affaires du mois ».</p>\n<ol>\n<li>Appliquez <code>box-sizing: border-box</code> à tous les éléments.</li>\n<li><code>.kpi</code> : <code>padding</code> de 24px (1.5rem), bordure de 1px pleine, <code>border-radius</code> de 14px, <code>max-width</code> de 280px.</li>\n<li>Centrez la carte avec <code>margin-inline: auto</code> (ou <code>margin: 0 auto</code>).</li>\n<li>Ajoutez une ombre avec <code>box-shadow</code>.</li>\n</ol>",
   "guided-html": "<article class=\"kpi\">\n  <h2>Chiffre d'affaires du mois</h2>\n  <p class=\"valeur\">18 420,00 €</p>\n  <p class=\"evolution\">+12 % par rapport au mois dernier</p>\n</article>",
   "guided-css": "/* À vous */",
   "checks": [
    [
     "style",
     ".kpi",
     "box-sizing",
     "border-box",
     "box-sizing: border-box appliqué"
    ],
    [
     "style",
     ".kpi",
     "padding-top",
     "24px",
     "padding de 24px"
    ],
    [
     "style",
     ".kpi",
     "border-top-style",
     "solid",
     "Bordure pleine"
    ],
    [
     "style",
     ".kpi",
     "border-top-left-radius",
     "14px",
     "Coins arrondis à 14px"
    ],
    [
     "style",
     ".kpi",
     "max-width",
     "280px",
     "Largeur max 280px"
    ],
    [
     "css",
     "box-shadow\\s*:",
     "Une ombre box-shadow"
    ],
    [
     "css",
     "margin(-inline)?\\s*:\\s*(0\\s+)?auto",
     "Carte centrée avec auto"
    ]
   ],
   "guided-solution-css": "*, *::before, *::after { box-sizing: border-box; }\nbody { font-family: system-ui, sans-serif; background: #f4f1ea; padding: 1rem; }\n.kpi { max-width: 280px; margin-inline: auto; padding: 1.5rem; border: 1px solid #e2dbcc; border-radius: 14px; background: #fff; box-shadow: 0 10px 30px rgb(23 26 38 / 10%); }\n.valeur { font-size: 2rem; font-weight: 700; margin: .25rem 0; }\n.evolution { color: #0b4a26; margin: 0; }",
   "auto": "<p>Réalisez les 4 cartes indicateurs du tableau de bord d'Ondea (commandes en attente, à préparer, à expédier, CA du mois) avec une icône, une valeur et une évolution. Donnez à chaque carte une bordure supérieure colorée de 4px selon son thème. Ouvrez l'inspecteur et faites une capture du modèle de boîte d'une carte en l'annotant.</p>",
   "solution": "<p>La bordure supérieure seule s'écrit <code>border-top</code>. Comme <code>box-sizing: border-box</code> est actif, ajouter 4px de bordure ne change pas la largeur des cartes.</p>",
   "solution-code": [
    {
     "lang": "css",
     "code": "*, *::before, *::after { box-sizing: border-box; }\n.kpi { padding: 1.25rem; border: 1px solid #e2dbcc; border-top: 4px solid var(--accent, #c9a14a); border-radius: 14px; background: #fff; box-shadow: 0 8px 24px rgb(23 26 38 / 8%); }\n.kpi--attente  { --accent: #b45309; }\n.kpi--preparer { --accent: #6d28d9; }\n.kpi--expedier { --accent: #0f766e; }\n.kpi--ca       { --accent: #c9a14a; }\n.kpi__valeur { font-size: 2rem; font-weight: 700; margin: .25rem 0; }\n.kpi__evolution { margin: 0; font-size: .9rem; }"
    }
   ],
   "quiz": [
    {
     "q": "Quelle couche du modèle de boîte prend la couleur de fond ?",
     "options": [
      "margin",
      "padding",
      "Aucune",
      "Seulement la bordure"
     ],
     "answer": 1,
     "why": "Le fond s'étend sous le contenu et le padding (et la bordure)."
    },
    {
     "q": "Avec box-sizing: border-box, width: 300px; padding: 20px, la largeur totale est…",
     "options": [
      "300px",
      "340px",
      "320px",
      "260px"
     ],
     "answer": 0,
     "why": "Le padding est inclus dans les 300px."
    },
    {
     "q": "Que signifie margin: 10px 20px ?",
     "options": [
      "10px en haut, 20px en bas",
      "10px en haut et en bas, 20px à gauche et à droite",
      "10px à gauche, 20px à droite",
      "Erreur"
     ],
     "answer": 1,
     "why": "Deux valeurs : vertical puis horizontal."
    },
    {
     "q": "Comment centrer horizontalement un bloc de largeur max 1200px ?",
     "options": [
      "text-align: center",
      "margin-inline: auto",
      "align: center",
      "float: center"
     ],
     "answer": 1,
     "why": "Les marges automatiques se partagent l'espace restant."
    },
    {
     "q": "Quel élément est inline par défaut ?",
     "options": [
      "<p>",
      "<div>",
      "<span>",
      "<section>"
     ],
     "answer": 2,
     "why": "span, a, strong, em sont inline."
    }
   ],
   "ondea": "<p>Le fichier <code>style.css</code> d'Ondea commence par la réinitialisation <code>box-sizing: border-box</code>. Les cartes <code>.card</code> et les indicateurs du tableau de bord (<code>dashboard.js</code>) combinent padding, bordure fine <code>var(--border)</code>, rayon <code>var(--radius)</code> et ombre. Les rayons sont centralisés dans <code>themes.css</code> : <code>--radius-xs</code> à <code>--radius-lg</code>.</p>"
  },
  {
   "id": "css-flexbox",
   "part": "css",
   "title": "Flexbox",
   "subtitle": "Aligner des éléments sur une ligne ou une colonne",
   "duration": "1 h 30",
   "feature": "Barre supérieure et barres d'actions",
   "intro": "<p><strong>Flexbox</strong> sert à aligner des éléments <strong>sur un seul axe</strong> : une ligne (barre d'outils, menu horizontal) ou une colonne. On l'active sur le <strong>parent</strong> avec <code>display: flex</code> ; ses enfants directs deviennent des « éléments flexibles ».</p>\n<p>Les propriétés du parent à connaître :</p>\n<ul>\n<li><code>flex-direction</code> : <code>row</code> (ligne, défaut) ou <code>column</code>.</li>\n<li><code>justify-content</code> : répartition sur l'axe principal (<code>flex-start</code>, <code>center</code>, <code>space-between</code>…).</li>\n<li><code>align-items</code> : alignement sur l'axe secondaire (<code>center</code> pour centrer verticalement).</li>\n<li><code>gap</code> : espace entre les enfants.</li>\n<li><code>flex-wrap: wrap</code> : passage à la ligne si la place manque.</li>\n</ul>\n<p>Côté enfant, <code>flex: 1</code> signifie « prends toute la place restante ».</p>",
   "example": [
    {
     "lang": "css",
     "code": "/* Barre supérieure : titre à gauche, actions à droite */\n.topbar {\n  display: flex;                    /* active Flexbox */\n  align-items: center;              /* centre verticalement */\n  justify-content: space-between;   /* écarte les extrémités */\n  gap: 1rem;                        /* espace entre enfants */\n  padding: .75rem 1.25rem;\n  min-height: 68px;\n}\n\n/* La recherche prend toute la place disponible */\n.topbar .recherche { flex: 1; max-width: 480px; }\n\n/* Groupe de boutons */\n.actions {\n  display: flex;\n  gap: .5rem;\n  flex-wrap: wrap;                  /* passe à la ligne sur mobile */\n}\n\n/* Centrer parfaitement un élément (écran vide, chargement) */\n.centre {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 60vh;\n}"
    }
   ],
   "explain": "<ul>\n<li><code>display: flex</code> agit sur les <strong>enfants directs</strong> uniquement, pas sur les petits-enfants.</li>\n<li>Axe principal = sens de <code>flex-direction</code>. Si on passe en <code>column</code>, <code>justify-content</code> agit verticalement.</li>\n<li><code>space-between</code> colle le premier élément à gauche, le dernier à droite, et répartit le reste.</li>\n<li><code>gap</code> remplace les marges entre éléments : plus de problème de marge en trop sur le dernier.</li>\n<li><code>flex: 1</code> est un raccourci de <code>flex-grow: 1; flex-shrink: 1; flex-basis: 0</code>.</li>\n<li><code>margin-left: auto</code> sur un enfant le pousse tout à droite.</li>\n</ul>",
   "demo-html": "<header class=\"topbar\">\n  <h1>Commandes</h1>\n  <input class=\"recherche\" type=\"search\" placeholder=\"Rechercher une commande…\" aria-label=\"Rechercher\">\n  <div class=\"actions\"><button>Exporter</button><button class=\"p\">+ Nouvelle commande</button></div>\n</header>\n<p>Réduisez la largeur de l'aperçu : les éléments s'adaptent.</p>\n<div class=\"chips\"><span>Toutes</span><span>En attente</span><span>Validées</span><span>En préparation</span><span>Expédiées</span><span>Livrées</span></div>",
   "demo-css": "body{font-family:system-ui;margin:0}\n.topbar{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.75rem 1rem;background:#171a26;color:#f4e8c8;flex-wrap:wrap}\n.topbar h1{margin:0;font-size:1.3rem}\n.recherche{flex:1;min-width:160px;max-width:420px;padding:.5rem;border-radius:8px;border:0}\n.actions{display:flex;gap:.5rem}\nbutton{padding:.5rem .8rem;border-radius:8px;border:1px solid #c9a14a;background:transparent;color:#f4e8c8}\nbutton.p{background:#c9a14a;color:#171a26;font-weight:700}\np{padding:0 1rem}\n.chips{display:flex;flex-wrap:wrap;gap:.4rem;padding:0 1rem}\n.chips span{border:1px solid #c9a14a;border-radius:99px;padding:.25rem .7rem}",
   "guided": "<p>Mettez en page la ligne d'une commande dans la liste « Préparation ».</p>\n<ol>\n<li><code>.ligne</code> : Flexbox, éléments centrés verticalement, espace de 1rem entre eux.</li>\n<li><code>.infos</code> prend toute la place restante (<code>flex: 1</code>).</li>\n<li><code>.boutons</code> : Flexbox avec un <code>gap</code> de .5rem.</li>\n</ol>",
   "guided-html": "<div class=\"ligne\">\n  <span class=\"numero\">CMD-2026-0043</span>\n  <div class=\"infos\"><strong>Visso Bricolage</strong><br>12 articles — priorité haute</div>\n  <div class=\"boutons\"><button>Détails</button><button>Préparer</button></div>\n</div>",
   "guided-css": "/* À vous */",
   "checks": [
    [
     "style",
     ".ligne",
     "display",
     "flex",
     ".ligne est en display: flex"
    ],
    [
     "style",
     ".ligne",
     "align-items",
     "center",
     "Alignement vertical centré"
    ],
    [
     "style",
     ".ligne",
     "column-gap",
     "16px",
     "gap de 1rem"
    ],
    [
     "style",
     ".infos",
     "flex-grow",
     "1",
     ".infos prend la place restante"
    ],
    [
     "style",
     ".boutons",
     "display",
     "flex",
     ".boutons en Flexbox"
    ],
    [
     "style",
     ".boutons",
     "column-gap",
     "8px",
     "gap de .5rem entre les boutons"
    ]
   ],
   "guided-solution-css": "body { font-family: system-ui, sans-serif; padding: 1rem; }\n.ligne { display: flex; align-items: center; gap: 1rem; padding: .75rem 1rem; border: 1px solid #e2dbcc; border-radius: 12px; }\n.numero { font-family: ui-monospace, monospace; font-weight: 700; }\n.infos { flex: 1; }\n.boutons { display: flex; gap: .5rem; }",
   "auto": "<p>Construisez la barre supérieure complète d'Ondea : bouton menu (mobile), titre de l'écran, barre de recherche extensible, bouton notifications avec une pastille de compteur positionnée en haut à droite (indice : <code>position: relative</code> sur le bouton, <code>absolute</code> sur la pastille), avatar et nom de l'utilisateur. Sous 600px, la recherche passe sur une seconde ligne (<code>flex-wrap</code> + <code>order</code> ou <code>flex-basis: 100%</code>).</p>",
   "solution": "<p><code>order</code> change l'ordre d'affichage sans toucher au HTML (attention : l'ordre de tabulation reste celui du HTML). <code>flex-basis: 100%</code> force l'élément à occuper toute une ligne.</p>",
   "solution-code": [
    {
     "lang": "css",
     "code": ".topbar { display: flex; align-items: center; gap: .75rem; padding: .75rem 1rem; flex-wrap: wrap; }\n.topbar h1 { margin: 0; font-size: 1.25rem; }\n.topbar .recherche { flex: 1; min-width: 200px; }\n.topbar .profil { display: flex; align-items: center; gap: .5rem; margin-left: auto; }\n.btn-notif { position: relative; }\n.btn-notif .pastille { position: absolute; top: -4px; right: -4px; min-width: 1.25rem; height: 1.25rem; border-radius: 999px; background: #b91c1c; color: #fff; font-size: .75rem; display: grid; place-items: center; }\n.avatar { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; }\n@media (max-width: 600px) {\n  .topbar .recherche { flex-basis: 100%; order: 10; }\n}"
    }
   ],
   "quiz": [
    {
     "q": "Sur quel élément écrit-on display: flex ?",
     "options": [
      "Sur le parent des éléments à aligner",
      "Sur chaque enfant",
      "Sur body uniquement",
      "Sur le dernier enfant"
     ],
     "answer": 0,
     "why": "Le parent devient un conteneur flexible."
    },
    {
     "q": "Comment centrer verticalement des éléments dans une ligne flex ?",
     "options": [
      "justify-content: center",
      "align-items: center",
      "vertical-align: middle",
      "text-align: center"
     ],
     "answer": 1,
     "why": "align-items agit sur l'axe secondaire (vertical pour une ligne)."
    },
    {
     "q": "Que fait justify-content: space-between ?",
     "options": [
      "Centre tout",
      "Place le premier et le dernier élément aux extrémités et répartit l'espace entre eux",
      "Ajoute des marges égales autour",
      "Inverse l'ordre"
     ],
     "answer": 1,
     "why": "Idéal pour un titre à gauche et des actions à droite."
    },
    {
     "q": "Que fait flex: 1 sur un enfant ?",
     "options": [
      "Le cache",
      "Lui fait prendre l'espace restant",
      "Le met en première position",
      "Le fixe à 1px"
     ],
     "answer": 1,
     "why": "flex-grow: 1 lui attribue la place libre."
    },
    {
     "q": "À quoi sert flex-wrap: wrap ?",
     "options": [
      "À entourer d'une bordure",
      "À autoriser le passage à la ligne quand la place manque",
      "À inverser les colonnes",
      "À grouper les éléments"
     ],
     "answer": 1,
     "why": "Sans wrap, les éléments rétrécissent ou débordent."
    }
   ],
   "ondea": "<p>Ondea utilise Flexbox partout où il y a une seule rangée : la barre supérieure (<code>.topbar</code>), les barres d'actions des fiches, les groupes de filtres par statut (<code>.chips</code> dans <code>commandes.js</code>), les lignes de la file de préparation et l'alignement icône + texte à l'intérieur des boutons.</p>"
  },
  {
   "id": "css-grid",
   "part": "css",
   "title": "CSS Grid",
   "subtitle": "Mises en page en deux dimensions",
   "duration": "1 h 30",
   "feature": "Structure de l'application et grille d'indicateurs",
   "intro": "<p><strong>CSS Grid</strong> organise des éléments en <strong>lignes ET colonnes</strong> à la fois. C'est l'outil idéal pour la structure générale d'une application (barre latérale + contenu) et pour les grilles de cartes.</p>\n<ul>\n<li><code>display: grid</code> active la grille sur le parent.</li>\n<li><code>grid-template-columns: 268px 1fr</code> : une colonne fixe de 268px puis une colonne qui prend le reste. L'unité <code>fr</code> signifie « fraction de l'espace libre ».</li>\n<li><code>repeat(3, 1fr)</code> : trois colonnes égales.</li>\n<li><code>repeat(auto-fit, minmax(220px, 1fr))</code> : « autant de colonnes de 220px minimum qu'il en tient ». Responsive sans aucune media query !</li>\n<li><code>grid-template-areas</code> : on dessine la mise en page avec des noms de zones.</li>\n</ul>\n<p>Flexbox ou Grid ? Flexbox pour une ligne de contenus, Grid pour une mise en page à deux dimensions. Les deux se combinent très bien.</p>",
   "example": [
    {
     "lang": "css",
     "code": "/* Structure de l'application dessinée avec des zones nommées */\n.app {\n  display: grid;\n  grid-template-columns: 268px 1fr;      /* barre latérale | contenu */\n  grid-template-rows: 68px 1fr;          /* barre supérieure | écran */\n  grid-template-areas:\n    \"sidebar topbar\"\n    \"sidebar main\";\n  min-height: 100vh;\n}\n.app > aside  { grid-area: sidebar; }\n.app > header { grid-area: topbar; }\n.app > main   { grid-area: main; }\n\n/* Grille d'indicateurs : responsive automatiquement */\n.kpis {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem;\n}\n\n/* Une carte qui occupe 2 colonnes */\n.graphique-ca { grid-column: span 2; }"
    }
   ],
   "explain": "<ul>\n<li><code>grid-template-areas</code> se lit comme un dessin : chaque chaîne est une ligne, chaque mot une cellule. Un nom répété fusionne les cellules.</li>\n<li><code>grid-area</code> place un enfant dans la zone portant ce nom.</li>\n<li><code>minmax(220px, 1fr)</code> : jamais moins de 220px, et partage de l'espace en plus.</li>\n<li><code>auto-fit</code> crée autant de colonnes que possible et étire les cartes pour remplir la ligne.</li>\n<li><code>grid-column: span 2</code> étend une carte sur deux colonnes.</li>\n<li>L'inspecteur de Chrome/Firefox a un badge « grid » qui dessine les lignes de la grille : utilisez-le !</li>\n</ul>",
   "demo-html": "<div class=\"app\">\n  <aside>Menu</aside>\n  <header>Tableau de bord</header>\n  <main>\n    <div class=\"kpis\">\n      <article>En attente<b>12</b></article><article>À préparer<b>7</b></article>\n      <article>À expédier<b>5</b></article><article>Livrées<b>31</b></article>\n      <article class=\"large\">Chiffre d'affaires (2 colonnes)</article>\n    </div>\n  </main>\n</div>",
   "demo-css": "body{margin:0;font-family:system-ui}\n.app{display:grid;grid-template-columns:140px 1fr;grid-template-rows:56px 1fr;grid-template-areas:\"sidebar topbar\" \"sidebar main\";min-height:100vh}\naside{grid-area:sidebar;background:#171a26;color:#f4e8c8;padding:1rem}\nheader{grid-area:topbar;background:#f4f1ea;padding:1rem;font-weight:700}\nmain{grid-area:main;padding:1rem}\n.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:.8rem}\n.kpis article{border:1px solid #c9a14a;border-radius:12px;padding:.8rem;display:flex;flex-direction:column}\n.kpis b{font-size:1.8rem}\n.large{grid-column:span 2;background:#f4e8c8}",
   "guided": "<p>Créez la grille de la page « Produits » d'Ondea.</p>\n<ol>\n<li><code>.catalogue</code> en <code>display: grid</code>.</li>\n<li>Colonnes automatiques : <code>repeat(auto-fit, minmax(200px, 1fr))</code>.</li>\n<li>Espace de 1rem entre les cartes.</li>\n<li>La carte <code>.vedette</code> s'étend sur 2 colonnes.</li>\n</ol>",
   "guided-html": "<section class=\"catalogue\">\n  <article class=\"produit vedette\">Perceuse 18 V — produit vedette</article>\n  <article class=\"produit\">Vis inox 4x40</article>\n  <article class=\"produit\">Chevilles 8 mm</article>\n  <article class=\"produit\">Équerre 60 mm</article>\n  <article class=\"produit\">Charnière laiton</article>\n</section>",
   "guided-css": ".produit { border: 1px solid #c9a14a; border-radius: 12px; padding: 1rem; }\n/* À vous */",
   "checks": [
    [
     "style",
     ".catalogue",
     "display",
     "grid",
     ".catalogue est une grille"
    ],
    [
     "css",
     "grid-template-columns\\s*:\\s*repeat\\(\\s*auto-fit\\s*,\\s*minmax\\(\\s*200px",
     "Colonnes auto-fit minmax(200px, 1fr)"
    ],
    [
     "style",
     ".catalogue",
     "row-gap",
     "16px",
     "gap de 1rem"
    ],
    [
     "css",
     "\\.vedette\\s*\\{[^}]*grid-column\\s*:\\s*span\\s+2",
     ".vedette sur 2 colonnes"
    ]
   ],
   "guided-solution-css": ".produit { border: 1px solid #c9a14a; border-radius: 12px; padding: 1rem; }\n.catalogue { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }\n.vedette { grid-column: span 2; background: #f4e8c8; }",
   "auto": "<p>Construisez la mise en page complète du tableau de bord d'Ondea avec <code>grid-template-areas</code> : 4 indicateurs en haut, un graphique « Chiffre d'affaires » large (2/3) avec à côté « Commandes par statut » (1/3), puis une liste « Commandes en retard » sur toute la largeur. Sous 900px, tout passe en une seule colonne en redéfinissant seulement <code>grid-template-areas</code> dans une media query.</p>",
   "solution": "<p>Toute la force de <code>grid-template-areas</code> : la version mobile ne demande que de redessiner les zones.</p>",
   "solution-code": [
    {
     "lang": "css",
     "code": ".dashboard {\n  display: grid; gap: 1rem;\n  grid-template-columns: 2fr 1fr;\n  grid-template-areas:\n    \"kp kp\"\n    \"ca st\"\n    \"rt rt\";\n}\n.zone-kpis   { grid-area: kp; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }\n.zone-ca     { grid-area: ca; }   /* 2/3 de la largeur */\n.zone-statut { grid-area: st; }   /* 1/3 */\n.zone-retard { grid-area: rt; }   /* toute la largeur */\n@media (max-width: 900px) {\n  .dashboard { grid-template-columns: 1fr; grid-template-areas: \"kp\" \"ca\" \"st\" \"rt\"; }\n}"
    }
   ],
   "quiz": [
    {
     "q": "Quand préférer Grid à Flexbox ?",
     "options": [
      "Pour aligner trois boutons sur une ligne",
      "Pour une mise en page en lignes et colonnes à la fois",
      "Jamais",
      "Pour les textes"
     ],
     "answer": 1,
     "why": "Grid est bidimensionnel, Flexbox unidimensionnel."
    },
    {
     "q": "Que signifie 1fr ?",
     "options": [
      "1 pixel",
      "Une fraction de l'espace libre",
      "1 % de l'écran",
      "La première colonne"
     ],
     "answer": 1,
     "why": "1fr 2fr donne un tiers / deux tiers."
    },
    {
     "q": "Que produit repeat(auto-fit, minmax(220px, 1fr)) ?",
     "options": [
      "Autant de colonnes d'au moins 220px qu'il en tient, étirées pour remplir",
      "Exactement 220 colonnes",
      "Une seule colonne",
      "Une erreur"
     ],
     "answer": 0,
     "why": "Grille responsive sans media query."
    },
    {
     "q": "Comment étendre une carte sur deux colonnes ?",
     "options": [
      "width: 200%",
      "grid-column: span 2",
      "colspan=\"2\"",
      "flex: 2"
     ],
     "answer": 1,
     "why": "colspan est un attribut de tableau HTML, pas du CSS."
    },
    {
     "q": "À quoi sert grid-template-areas ?",
     "options": [
      "À nommer des couleurs",
      "À dessiner la mise en page avec des noms de zones",
      "À créer des animations",
      "À ajouter des marges"
     ],
     "answer": 1,
     "why": "On place ensuite les enfants avec grid-area."
    }
   ],
   "ondea": "<p>La coque d'Ondea est une grille : barre latérale de largeur <code>var(--sidebar-w)</code> (268px) et barre supérieure de hauteur <code>var(--topbar-h)</code> (68px), deux variables définies dans <code>themes.css</code>. Les indicateurs du tableau de bord et les grilles de produits utilisent <code>auto-fit</code> + <code>minmax()</code> pour s'adapter de l'ordinateur au smartphone.</p>"
  },
  {
   "id": "css-responsive",
   "part": "css",
   "title": "Responsive design",
   "subtitle": "Mobile first, media queries, images et tableaux adaptatifs",
   "duration": "1 h 30",
   "feature": "Ondea sur tablette et smartphone (magasinier en entrepôt)",
   "intro": "<p>Le magasinier prépare les commandes dans l'entrepôt, tablette ou téléphone à la main : l'application doit être aussi confortable sur un écran de 360px que sur un écran de 1920px. C'est le <strong>responsive design</strong>.</p>\n<p>La démarche <strong>mobile first</strong> : on écrit d'abord le CSS pour le petit écran (une colonne, gros boutons), puis on ajoute des règles pour les écrans plus larges avec des <strong>media queries</strong> :</p>\n<p><code>@media (min-width: 900px) { ... }</code> = « à partir de 900px de large, applique aussi ces règles ».</p>\n<p>Autres outils : unités relatives (<code>%</code>, <code>rem</code>, <code>vw</code>), <code>max-width: 100%</code> sur les images, zones tactiles d'au moins 44×44px, et les <strong>préférences utilisateur</strong> : <code>prefers-color-scheme</code> (thème), <code>prefers-reduced-motion</code> (animations).</p>",
   "example": [
    {
     "lang": "css",
     "code": "/* 1. Mobile d'abord : une seule colonne, menu caché */\n.app { display: block; }\n.sidebar {\n  position: fixed; inset: 0 auto 0 0;\n  width: 268px;\n  transform: translateX(-100%);       /* hors de l'écran */\n  transition: transform .24s;\n}\n.sidebar.is-open { transform: none; } /* ouvert par le bouton menu */\n\n/* Zones tactiles confortables */\n.btn { min-height: 44px; padding-inline: 1rem; }\n\n/* Images et tableaux jamais plus larges que l'écran */\nimg { max-width: 100%; height: auto; }\n.table-wrap { overflow-x: auto; }\n\n/* 2. Tablette paysage et ordinateur : barre latérale fixe */\n@media (min-width: 900px) {\n  .app { display: grid; grid-template-columns: 268px 1fr; }\n  .sidebar { position: sticky; top: 0; height: 100vh; transform: none; }\n  .btn-menu { display: none; }        /* bouton menu inutile */\n}\n\n/* 3. Grand écran : on limite la largeur du contenu */\n@media (min-width: 1400px) {\n  main { max-width: 1280px; margin-inline: auto; }\n}"
    }
   ],
   "explain": "<ul>\n<li>Sans <code>&lt;meta name=\"viewport\"&gt;</code> dans le HTML, les media queries ne fonctionnent pas correctement sur mobile.</li>\n<li><code>transform: translateX(-100%)</code> décale le menu de sa propre largeur vers la gauche : il est caché, prêt à glisser.</li>\n<li><code>position: sticky; top: 0</code> : l'élément défile normalement puis reste collé en haut.</li>\n<li><code>inset: 0 auto 0 0</code> est le raccourci de <code>top right bottom left</code>.</li>\n<li>Points de rupture (breakpoints) : on les choisit quand <strong>le contenu</strong> se casse, pas d'après une liste d'appareils.</li>\n<li>Testez avec le mode « appareil » des outils de développement (Ctrl+Maj+M).</li>\n</ul>",
   "demo-html": "<div class=\"app\">\n  <aside class=\"sidebar\" id=\"sb\"><b>◆ Ondea</b><p>Commandes<br>Préparation<br>Livraisons</p></aside>\n  <main>\n    <button class=\"btn-menu\" aria-expanded=\"false\" aria-controls=\"sb\">☰ Menu</button>\n    <h1>Préparation</h1>\n    <div class=\"cartes\"><article>CMD-0043</article><article>CMD-0044</article><article>CMD-0047</article></div>\n    <p class=\"info\">Largeur actuelle : <span id=\"w\"></span>px</p>\n  </main>\n</div>",
   "demo-css": "body{margin:0;font-family:system-ui}\n.sidebar{position:fixed;inset:0 auto 0 0;width:200px;background:#171a26;color:#f4e8c8;padding:1rem;transform:translateX(-100%);transition:transform .24s}\n.sidebar.is-open{transform:none}\nmain{padding:1rem}\n.btn-menu{min-height:44px;padding:0 1rem;border-radius:8px;border:1px solid #171a26;background:#fff}\n.cartes{display:grid;gap:.6rem}\n.cartes article{border:1px solid #c9a14a;border-radius:10px;padding:1rem}\n@media (min-width:560px){.app{display:grid;grid-template-columns:200px 1fr}.sidebar{position:static;transform:none}.btn-menu{display:none}.cartes{grid-template-columns:repeat(3,1fr)}}",
   "demo-js": "const sb = document.getElementById('sb');\nconst btn = document.querySelector('.btn-menu');\nbtn.addEventListener('click', () => {\n  const ouvert = sb.classList.toggle('is-open');\n  btn.setAttribute('aria-expanded', ouvert);\n});\nconst w = () => document.getElementById('w').textContent = window.innerWidth;\nwindow.addEventListener('resize', w); w();",
   "guided": "<p>Rendez responsive la liste des commandes à préparer (mobile first).</p>\n<ol>\n<li>Par défaut (mobile) : <code>.liste</code> est une grille d'<strong>une</strong> colonne avec un <code>gap</code> de 12px.</li>\n<li>À partir de 700px : 2 colonnes.</li>\n<li>À partir de 1100px : 3 colonnes.</li>\n<li>Les boutons <code>.btn</code> ont une hauteur minimale de 44px.</li>\n</ol>",
   "guided-html": "<div class=\"liste\">\n  <article>CMD-0043 <button class=\"btn\">Préparer</button></article>\n  <article>CMD-0044 <button class=\"btn\">Préparer</button></article>\n  <article>CMD-0047 <button class=\"btn\">Préparer</button></article>\n</div>",
   "guided-css": "article { border: 1px solid #c9a14a; border-radius: 10px; padding: 1rem; }\n/* À vous (mobile first) */",
   "checks": [
    [
     "style",
     ".liste",
     "display",
     "grid",
     ".liste est une grille"
    ],
    [
     "style",
     ".liste",
     "row-gap",
     "12px",
     "gap de 12px"
    ],
    [
     "css",
     "@media\\s*\\(\\s*min-width\\s*:\\s*700px\\s*\\)",
     "Media query à 700px (min-width)"
    ],
    [
     "css",
     "@media\\s*\\(\\s*min-width\\s*:\\s*1100px\\s*\\)",
     "Media query à 1100px (min-width)"
    ],
    [
     "style",
     ".btn",
     "min-height",
     "44px",
     "Boutons de 44px minimum"
    ]
   ],
   "guided-solution-css": "article { border: 1px solid #c9a14a; border-radius: 10px; padding: 1rem; }\n.liste { display: grid; grid-template-columns: 1fr; gap: 12px; }\n.btn { min-height: 44px; padding-inline: 1rem; }\n@media (min-width: 700px)  { .liste { grid-template-columns: repeat(2, 1fr); } }\n@media (min-width: 1100px) { .liste { grid-template-columns: repeat(3, 1fr); } }",
   "auto": "<p>Prenez votre structure d'application (chapitres Grid et Flexbox) et rendez-la entièrement responsive : menu latéral qui glisse sur mobile avec un fond assombri cliquable, tableau des commandes qui défile horizontalement, formulaire en une colonne sur mobile et deux colonnes sur ordinateur. Testez à 360px, 768px, 1024px et 1440px et faites une capture de chaque largeur.</p>",
   "solution": "<p>Pour le fond assombri, un élément <code>.overlay</code> plein écran apparaît en même temps que le menu ; un clic dessus ferme le menu (JavaScript du chapitre Événements).</p>",
   "solution-code": [
    {
     "lang": "css",
     "code": ".overlay { position: fixed; inset: 0; background: rgb(10 12 20 / 55%); opacity: 0; pointer-events: none; transition: opacity .24s; }\n.sidebar.is-open + .overlay { opacity: 1; pointer-events: auto; }\n.table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }\n.table-wrap table { min-width: 640px; }\n.form-grid { display: grid; gap: 1rem; }\n@media (min-width: 900px) {\n  .form-grid { grid-template-columns: 1fr 1fr; }\n  .form-grid .pleine-largeur { grid-column: 1 / -1; }\n  .overlay { display: none; }\n}"
    }
   ],
   "quiz": [
    {
     "q": "Que signifie « mobile first » ?",
     "options": [
      "Développer seulement pour mobile",
      "Écrire d'abord le CSS du petit écran, puis l'enrichir avec des min-width",
      "Tester sur mobile en dernier",
      "Utiliser une application mobile"
     ],
     "answer": 1,
     "why": "On ajoute de la complexité quand la place augmente."
    },
    {
     "q": "Que fait @media (min-width: 900px) { … } ?",
     "options": [
      "Applique les règles à partir de 900px de largeur",
      "Applique les règles en dessous de 900px",
      "Fixe la largeur à 900px",
      "Cible les imprimantes"
     ],
     "answer": 0,
     "why": "min-width = « au moins »."
    },
    {
     "q": "Quelle taille minimale pour une zone tactile confortable ?",
     "options": [
      "16×16px",
      "24×24px",
      "44×44px",
      "100×100px"
     ],
     "answer": 2,
     "why": "Recommandation courante (Apple, WCAG 2.5.5 AAA)."
    },
    {
     "q": "Comment empêcher une image de déborder de son conteneur ?",
     "options": [
      "width: 1000px",
      "max-width: 100%; height: auto",
      "overflow: hidden sur body",
      "display: none"
     ],
     "answer": 1,
     "why": "L'image rétrécit sans se déformer."
    },
    {
     "q": "Quelle balise est indispensable au responsive sur mobile ?",
     "options": [
      "<meta charset>",
      "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
      "<link rel=\"icon\">",
      "<base>"
     ],
     "answer": 1,
     "why": "Sans elle, le téléphone simule un écran de 980px."
    }
   ],
   "ondea": "<p>Le README d'Ondea Commandes annonce une application « responsive ». Dans <code>style.css</code>, la barre latérale devient un tiroir sur petit écran (bouton menu, fond assombri), les tableaux sont enveloppés pour défiler horizontalement, et l'écran « Préparation » est pensé pour une tablette en entrepôt (gros boutons, lignes lisibles). <code>print.css</code> est lui une media query <code>print</code> pour les documents A4.</p>"
  },
  {
   "id": "css-variables-themes",
   "part": "css",
   "title": "Variables CSS et thèmes clair / sombre",
   "subtitle": "Custom properties, data-theme et prefers-color-scheme",
   "duration": "1 h 30",
   "feature": "Mode clair / mode sombre mémorisé",
   "intro": "<p>Une <strong>variable CSS</strong> (custom property) commence par deux tirets : <code>--gold: #c9a14a;</code>. On la lit avec <code>var(--gold)</code>. On les déclare en général sur <code>:root</code> (la racine du document) pour qu'elles soient disponibles partout.</p>\n<p>Leur super-pouvoir : on peut les <strong>redéfinir</strong> dans un autre sélecteur. Pour créer un thème sombre, il suffit de redéfinir les mêmes variables dans <code>[data-theme=\"dark\"]</code> : tous les composants qui utilisent <code>var(--bg)</code> changent d'un coup.</p>\n<p>On nomme les variables par leur <strong>rôle</strong> (<code>--bg</code>, <code>--text</code>, <code>--surface</code>, <code>--border</code>) et non par leur couleur (<code>--blanc</code>) : en thème sombre, <code>--bg</code> n'est plus blanc !</p>",
   "example": [
    {
     "lang": "css",
     "code": "/* Thème clair : valeurs par défaut sur la racine */\n:root {\n  --bg: #f4f1ea;          /* fond de page ivoire */\n  --surface: #ffffff;     /* fond des cartes */\n  --text: #14161f;        /* texte principal */\n  --border: #e2dbcc;\n  --gold: #c9a14a;        /* décor */\n  --gold-text: #614608;   /* texte doré lisible */\n  --radius: 14px;\n  color-scheme: light;    /* barres de défilement, champs natifs clairs */\n}\n\n/* Thème sombre : on redéfinit SEULEMENT les valeurs */\n[data-theme=\"dark\"] {\n  --bg: #0b0c12;          /* obsidienne */\n  --surface: #151824;\n  --text: #f2eee4;\n  --border: #2c3142;\n  --gold-text: #e2c27a;\n  color-scheme: dark;\n}\n\n/* Les composants n'utilisent que des variables */\nbody  { background: var(--bg); color: var(--text); }\n.card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius);\n}\n.lien-or { color: var(--gold-text); }\n\n/* Valeur de secours si la variable n'existe pas */\n.badge { background: var(--badge-bg, #ebe7de); }"
    }
   ],
   "explain": "<ul>\n<li><code>:root</code> = l'élément <code>&lt;html&gt;</code>, avec une spécificité de classe.</li>\n<li>Le JavaScript change le thème en une ligne : <code>document.documentElement.dataset.theme = 'dark'</code>.</li>\n<li><code>color-scheme</code> indique au navigateur d'adapter ses éléments natifs (cases, barres de défilement, calendrier).</li>\n<li>Les variables héritent : définies sur un parent, elles valent pour tous ses descendants, et on peut les surcharger localement (<code>.kpi--ca { --accent: gold }</code>).</li>\n<li><code>var(--x, secours)</code> fournit une valeur par défaut.</li>\n<li>Pour respecter le réglage du système au premier lancement : <code>matchMedia('(prefers-color-scheme: dark)')</code> en JS, ou une media query en CSS.</li>\n</ul>",
   "demo-html": "<button id=\"t\" aria-pressed=\"false\">🌙 Passer en sombre</button>\n<article class=\"card\"><h2>CMD-2026-0042</h2><p>Brico Sud — <span class=\"or\">256,80 € TTC</span></p></article>",
   "demo-css": ":root{--bg:#f4f1ea;--surface:#fff;--text:#14161f;--border:#e2dbcc;--gold-text:#614608;color-scheme:light}\n[data-theme=\"dark\"]{--bg:#0b0c12;--surface:#151824;--text:#f2eee4;--border:#2c3142;--gold-text:#e2c27a;color-scheme:dark}\nbody{background:var(--bg);color:var(--text);font-family:system-ui;padding:1rem;transition:background .3s,color .3s}\n.card{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:1rem;margin-top:1rem}\n.or{color:var(--gold-text);font-weight:700}\nbutton{font:inherit;padding:.5rem 1rem;border-radius:8px}",
   "demo-js": "const btn = document.getElementById('t');\nbtn.addEventListener('click', () => {\n  const html = document.documentElement;\n  const sombre = html.dataset.theme !== 'dark';\n  html.dataset.theme = sombre ? 'dark' : 'light';\n  btn.setAttribute('aria-pressed', sombre);\n  btn.textContent = sombre ? '☀️ Passer en clair' : '🌙 Passer en sombre';\n});",
   "guided": "<p>Créez le système de thèmes d'une carte Ondea.</p>\n<ol>\n<li>Sur <code>:root</code>, déclarez <code>--bg: #f4f1ea</code>, <code>--text: #14161f</code> et <code>--surface: #ffffff</code>.</li>\n<li>Dans <code>[data-theme=\"dark\"]</code>, redéfinissez <code>--bg: #0b0c12</code>, <code>--text: #f2eee4</code> et <code>--surface: #151824</code>.</li>\n<li><code>body</code> utilise <code>var(--bg)</code> et <code>var(--text)</code> ; <code>.card</code> utilise <code>var(--surface)</code>.</li>\n<li>Le HTML a déjà <code>data-theme=\"dark\"</code> sur un conteneur pour tester.</li>\n</ol>",
   "guided-html": "<div class=\"card\">Thème clair</div>\n<div data-theme=\"dark\" class=\"zone-sombre\">\n  <div class=\"card\">Thème sombre</div>\n</div>",
   "guided-css": "/* À vous */",
   "checks": [
    [
     "css",
     ":root\\s*\\{[^}]*--bg\\s*:",
     "Variable --bg déclarée sur :root"
    ],
    [
     "css",
     "\\[data-theme=\"dark\"\\]\\s*\\{[^}]*--surface\\s*:",
     "--surface redéfinie en thème sombre"
    ],
    [
     "style",
     "body",
     "background-color",
     "rgb(244, 241, 234)",
     "body utilise --bg (clair)"
    ],
    [
     "style",
     ".zone-sombre .card",
     "background-color",
     "rgb(21, 24, 36)",
     "La carte sombre utilise --surface sombre"
    ],
    [
     "style",
     ".zone-sombre .card",
     "color",
     "rgb(242, 238, 228)",
     "Le texte de la carte sombre est clair"
    ]
   ],
   "guided-solution-css": ":root { --bg: #f4f1ea; --text: #14161f; --surface: #ffffff; }\n[data-theme=\"dark\"] { --bg: #0b0c12; --text: #f2eee4; --surface: #151824; }\nbody { background: var(--bg); color: var(--text); font-family: system-ui, sans-serif; }\n.zone-sombre { background: var(--bg); padding: 1rem; }\n.card { background: var(--surface); color: var(--text); padding: 1rem; border-radius: 12px; margin: .5rem 0; }",
   "auto": "<p>Écrivez la feuille <code>themes.css</code> complète de votre version d'Ondea : polices, rayons, durées d'animation, puis toutes les couleurs (fond, surfaces 1 à 3, bordures, texte, texte atténué, or, primaire, focus, et les couples fond/texte des 6 couleurs de statut) en thème clair et en thème sombre. Vérifiez chaque couple avec un outil de contraste et notez les ratios en commentaire.</p>",
   "solution": "<p>Le thème sombre n'est pas une simple inversion : les fonds sombres sont légèrement bleutés (moins fatigants que le noir pur), les couleurs de statut deviennent des fonds sombres avec un texte clair et coloré.</p>",
   "solution-code": [
    {
     "lang": "css",
     "code": ":root {\n  --font-display: \"Playfair Display\", Georgia, serif;\n  --font-body: \"Atkinson Hyperlegible\", system-ui, sans-serif;\n  --radius-sm: 10px; --radius: 14px; --radius-lg: 20px;\n  --dur-fast: 140ms; --dur: 240ms;\n}\n:root, [data-theme=\"light\"] {\n  --bg: #f4f1ea; --surface: #ffffff; --surface-2: #faf8f3; --surface-3: #f1ece1;\n  --border: #e2dbcc; --text: #14161f; --text-muted: #434753;\n  --gold: #c9a14a; --gold-text: #614608; --primary: #171a26; --on-primary: #fdf8ea;\n  --focus: #1d4ed8;\n  --success-bg: #dcf3e4; --success-fg: #0b4a26;  /* 8,9:1 */\n  --warning-bg: #fbeccb; --warning-fg: #5c3b00;  /* 8,7:1 */\n  --danger-bg:  #fbe0de; --danger-fg:  #7a1410;  /* 9,1:1 */\n  color-scheme: light;\n}\n[data-theme=\"dark\"] {\n  --bg: #0b0c12; --surface: #151824; --surface-2: #1b1f2e; --surface-3: #232838;\n  --border: #2c3142; --text: #f2eee4; --text-muted: #c7c2b4;\n  --gold: #d6b05c; --gold-text: #e2c27a; --primary: #d6b05c; --on-primary: #11131c;\n  --focus: #93b4ff;\n  --success-bg: #0f2e1d; --success-fg: #a7e8c0;\n  --warning-bg: #33260a; --warning-fg: #f6d48f;\n  --danger-bg:  #3a1513; --danger-fg:  #f8b4ae;\n  color-scheme: dark;\n}"
    }
   ],
   "quiz": [
    {
     "q": "Comment déclare-t-on une variable CSS ?",
     "options": [
      "$gold: #c9a14a;",
      "--gold: #c9a14a;",
      "var gold = #c9a14a;",
      "@gold: #c9a14a;"
     ],
     "answer": 1,
     "why": "Deux tirets ; $ et @ sont des syntaxes de préprocesseurs (Sass, Less)."
    },
    {
     "q": "Comment lire la variable --bg ?",
     "options": [
      "var(--bg)",
      "$bg",
      "get(--bg)",
      "--bg()"
     ],
     "answer": 0,
     "why": "var() accepte aussi une valeur de secours."
    },
    {
     "q": "Pourquoi nommer une variable --bg plutôt que --blanc ?",
     "options": [
      "C'est plus court",
      "Parce que sa valeur change selon le thème : on nomme le rôle, pas la couleur",
      "--blanc est interdit",
      "Pour le référencement"
     ],
     "answer": 1,
     "why": "En thème sombre, --blanc vaudrait du noir : absurde."
    },
    {
     "q": "Comment basculer en thème sombre en JavaScript ?",
     "options": [
      "document.theme = 'dark'",
      "document.documentElement.dataset.theme = 'dark'",
      "body.dark = true",
      "css.setTheme('dark')"
     ],
     "answer": 1,
     "why": "Le CSS réagit au sélecteur [data-theme=\"dark\"]."
    },
    {
     "q": "Que fait color-scheme: dark ?",
     "options": [
      "Inverse toutes les couleurs",
      "Indique au navigateur d'afficher ses éléments natifs en version sombre",
      "Active le mode sombre du système",
      "Rien"
     ],
     "answer": 1,
     "why": "Barres de défilement, champs de date, cases à cocher s'adaptent."
    }
   ],
   "ondea": "<p><code>themes.css</code> d'Ondea est un modèle du genre : jetons communs (polices, rayons, durées, <code>--sidebar-w</code>), puis <code>:root, [data-theme=\"light\"]</code> et <code>[data-theme=\"dark\"]</code> qui redéfinissent les mêmes noms. <code>storage.js</code> mémorise le choix dans LocalStorage (clé préfixée <code>oc.</code>) et l'applique avant le premier affichage pour éviter un flash de mauvais thème. Ce cours fonctionne de la même façon.</p>"
  },
  {
   "id": "css-animations",
   "part": "css",
   "title": "Transitions, animations et effets visuels",
   "subtitle": "transition, transform, @keyframes, ombres, dégradés et reduced motion",
   "duration": "2 h",
   "feature": "Micro-interactions et effets premium",
   "intro": "<p>Une bonne animation <strong>explique</strong> ce qui se passe : un panneau qui glisse indique d'où il vient, un bouton qui s'enfonce confirme le clic. Elle doit être <strong>courte</strong> (150 à 300 ms) et ne jamais gêner.</p>\n<ul>\n<li><code>transition</code> : anime le passage d'un état à un autre (au survol, à l'ajout d'une classe).</li>\n<li><code>transform</code> : déplace (<code>translate</code>), agrandit (<code>scale</code>) ou tourne (<code>rotate</code>) sans perturber la mise en page. Avec <code>opacity</code>, ce sont les propriétés les plus fluides à animer.</li>\n<li><code>@keyframes</code> + <code>animation</code> : une animation en plusieurs étapes, éventuellement en boucle.</li>\n<li>Effets : <code>box-shadow</code> (ombres et halos), <code>linear-gradient</code> (dégradés), <code>backdrop-filter: blur()</code> (verre dépoli).</li>\n</ul>\n<p><strong>Obligatoire :</strong> certaines personnes (troubles vestibulaires, migraines) sont malades devant le mouvement. La media query <code>prefers-reduced-motion: reduce</code> permet de couper les animations quand l'utilisateur l'a demandé dans son système.</p>",
   "example": [
    {
     "lang": "css",
     "code": "/* Micro-interaction : le bouton se soulève au survol */\n.btn {\n  transition: transform .14s ease-out, box-shadow .14s ease-out;\n}\n.btn:hover  { transform: translateY(-2px); box-shadow: 0 8px 20px rgb(201 161 74 / 35%); }\n.btn:active { transform: translateY(0) scale(.98); }   /* enfoncé au clic */\n\n/* Apparition d'une carte : de bas en haut avec fondu */\n@keyframes apparition {\n  from { opacity: 0; transform: translateY(16px); }\n  to   { opacity: 1; transform: none; }\n}\n.card { animation: apparition .48s cubic-bezier(.22, 1, .36, 1) both; }\n\n/* Halo doré autour d'une notification non lue */\n@keyframes pulse {\n  0%, 100% { box-shadow: 0 0 0 0 rgb(201 161 74 / 45%); }\n  50%      { box-shadow: 0 0 0 8px rgb(201 161 74 / 0%); }\n}\n.notif-non-lue { animation: pulse 2s infinite; }\n\n/* Titre doré avec dégradé dans le texte */\n.titre-or {\n  background: linear-gradient(90deg, #8a6a1f, #e7c873, #8a6a1f);\n  -webkit-background-clip: text; background-clip: text;\n  color: transparent;\n}\n\n/* RESPECT DES PRÉFÉRENCES : on coupe le mouvement */\n@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after {\n    animation-duration: .01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: .01ms !important;\n    scroll-behavior: auto !important;\n  }\n}"
    }
   ],
   "explain": "<ul>\n<li><code>transition</code> se place sur l'état <strong>de départ</strong> : l'animation joue dans les deux sens (survol et sortie).</li>\n<li>On liste les propriétés animées plutôt que <code>transition: all</code>, plus coûteux et imprévisible.</li>\n<li><code>cubic-bezier(.22, 1, .36, 1)</code> est une courbe « ease-out » marquée : départ rapide, arrivée douce, très cinématographique.</li>\n<li><code>both</code> (fill-mode) garde l'état initial avant le départ et l'état final après la fin.</li>\n<li><code>background-clip: text</code> découpe le fond selon les lettres : le dégradé apparaît dans le texte. Gardez un contraste suffisant !</li>\n<li>Dans la règle <code>prefers-reduced-motion</code>, <code>!important</code> est justifié : elle doit l'emporter sur tout.</li>\n</ul>",
   "demo-html": "<button class=\"btn\">Survolez-moi</button>\n<div class=\"grille\"><article class=\"card\">Carte 1</article><article class=\"card\" style=\"animation-delay:.1s\">Carte 2</article><article class=\"card\" style=\"animation-delay:.2s\">Carte 3</article></div>\n<p><span class=\"notif-non-lue\">3</span> notifications non lues</p>\n<h2 class=\"titre-or\">Obsidienne &amp; Or</h2>\n<button id=\"rejouer\" class=\"btn\">Rejouer l'apparition</button>",
   "demo-css": "body{font-family:system-ui;padding:1rem;background:#0f111a;color:#f4e8c8}\n.btn{font:inherit;padding:.6rem 1.1rem;border-radius:10px;border:1px solid #c9a14a;background:#171a26;color:#f4e8c8;cursor:pointer;transition:transform .14s ease-out,box-shadow .14s ease-out}\n.btn:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgb(201 161 74/35%)}\n.btn:active{transform:scale(.98)}\n.grille{display:flex;gap:.6rem;margin:1rem 0}\n@keyframes apparition{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}\n.card{flex:1;padding:1rem;border:1px solid #c9a14a;border-radius:12px;animation:apparition .6s cubic-bezier(.22,1,.36,1) both}\n@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgb(201 161 74/55%)}50%{box-shadow:0 0 0 8px rgb(201 161 74/0%)}}\n.notif-non-lue{display:inline-grid;place-items:center;width:1.6rem;height:1.6rem;border-radius:50%;background:#c9a14a;color:#171a26;font-weight:700;animation:pulse 2s infinite}\n.titre-or{font:700 2rem Georgia,serif;background:linear-gradient(90deg,#b8892c,#f1d68b,#b8892c);-webkit-background-clip:text;background-clip:text;color:transparent}\n@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}",
   "demo-js": "document.getElementById('rejouer').addEventListener('click', () => {\n  document.querySelectorAll('.card').forEach((c) => {\n    c.style.animation = 'none';\n    void c.offsetWidth;          // force le navigateur à recalculer\n    c.style.animation = '';\n  });\n});",
   "guided": "<p>Ajoutez les micro-interactions de la carte commande.</p>\n<ol>\n<li><code>.carte</code> a une <code>transition</code> sur <code>transform</code> et <code>box-shadow</code>.</li>\n<li>Au survol, <code>.carte</code> monte (<code>transform: translateY(-4px)</code>) et gagne une ombre.</li>\n<li>Créez une animation <code>@keyframes entree</code> (de <code>opacity: 0</code> à <code>opacity: 1</code>) appliquée à <code>.carte</code>.</li>\n<li>Ajoutez la règle <code>@media (prefers-reduced-motion: reduce)</code> qui supprime l'animation et la transition.</li>\n</ol>",
   "guided-html": "<article class=\"carte\"><h2>CMD-2026-0044</h2><p>Atelier Mistral — En préparation</p></article>",
   "guided-css": ".carte { padding: 1rem; border: 1px solid #c9a14a; border-radius: 12px; max-width: 320px; }\n/* À vous */",
   "checks": [
    [
     "css",
     "transition\\s*:[^;]*transform",
     "Transition sur transform"
    ],
    [
     "css",
     "\\.carte:hover\\s*\\{[^}]*translateY\\(\\s*-4px\\s*\\)",
     "Survol : translateY(-4px)"
    ],
    [
     "css",
     "\\.carte:hover\\s*\\{[^}]*box-shadow",
     "Survol : une ombre"
    ],
    [
     "css",
     "@keyframes\\s+entree",
     "Animation @keyframes entree"
    ],
    [
     "style",
     ".carte",
     "animation-name",
     "entree",
     "L'animation entree est appliquée"
    ],
    [
     "css",
     "@media\\s*\\(\\s*prefers-reduced-motion\\s*:\\s*reduce\\s*\\)",
     "Règle prefers-reduced-motion"
    ]
   ],
   "guided-solution-css": ".carte { padding: 1rem; border: 1px solid #c9a14a; border-radius: 12px; max-width: 320px;\n  transition: transform .2s ease-out, box-shadow .2s ease-out;\n  animation: entree .4s ease-out both; }\n.carte:hover { transform: translateY(-4px); box-shadow: 0 12px 28px rgb(23 26 38 / 18%); }\n@keyframes entree { from { opacity: 0; } to { opacity: 1; } }\n@media (prefers-reduced-motion: reduce) {\n  .carte { animation: none; transition: none; }\n}",
   "auto": "<p>Créez un écran de connexion « cinématographique » pour Ondea : fond obsidienne avec un dégradé radial doré discret, carte en verre dépoli (<code>backdrop-filter</code>), titre au dégradé doré, bordure qui s'illumine au focus des champs, bouton avec halo au survol, et un indicateur de chargement en <code>@keyframes</code> (rotation). Tout doit rester lisible (contraste) et s'arrêter avec <code>prefers-reduced-motion</code>. Testez en activant « Réduire les animations » dans votre système.</p>",
   "solution": "<p><code>:focus-within</code> s'applique à un parent quand un de ses enfants a le focus : pratique pour illuminer tout le groupe d'un champ.</p>",
   "solution-code": [
    {
     "lang": "css",
     "code": "body { min-height: 100vh; display: grid; place-items: center; color: #f2eee4;\n  background: radial-gradient(circle at 30% 20%, rgb(201 161 74 / 18%), transparent 45%), #0b0c12; }\n.login { width: min(420px, 92vw); padding: 2rem; border-radius: 20px;\n  background: rgb(21 24 36 / 70%); backdrop-filter: blur(14px);\n  border: 1px solid rgb(214 176 92 / 35%); }\n.login h1 { background: linear-gradient(90deg, #b8892c, #f1d68b, #b8892c); -webkit-background-clip: text; background-clip: text; color: transparent; }\n.champ { border: 1px solid #2c3142; border-radius: 12px; transition: border-color .2s, box-shadow .2s; }\n.champ:focus-within { border-color: #d6b05c; box-shadow: 0 0 0 4px rgb(214 176 92 / 25%); }\n.btn-login { transition: box-shadow .2s, transform .14s; }\n.btn-login:hover { box-shadow: 0 0 24px rgb(214 176 92 / 45%); transform: translateY(-1px); }\n@keyframes tourner { to { transform: rotate(1turn); } }\n.loader { width: 1.25rem; height: 1.25rem; border: 3px solid rgb(214 176 92 / 30%); border-top-color: #d6b05c; border-radius: 50%; animation: tourner .8s linear infinite; }\n@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after { animation: none !important; transition: none !important; }\n}"
    }
   ],
   "quiz": [
    {
     "q": "Quelles propriétés sont les plus fluides à animer ?",
     "options": [
      "width et height",
      "transform et opacity",
      "margin et padding",
      "top et left"
     ],
     "answer": 1,
     "why": "Elles ne déclenchent pas de recalcul de la mise en page."
    },
    {
     "q": "Où écrire la propriété transition pour un effet au survol ?",
     "options": [
      "Sur l'état normal de l'élément",
      "Uniquement dans :hover",
      "Dans @keyframes",
      "Sur body"
     ],
     "answer": 0,
     "why": "Ainsi l'effet joue à l'entrée et à la sortie du survol."
    },
    {
     "q": "Que permet @media (prefers-reduced-motion: reduce) ?",
     "options": [
      "Accélérer les animations",
      "Réduire ou supprimer le mouvement pour les personnes qui l'ont demandé",
      "Animer sur mobile",
      "Économiser la batterie automatiquement"
     ],
     "answer": 1,
     "why": "Critère WCAG 2.3.3 (AAA) : animations déclenchées par une interaction."
    },
    {
     "q": "Quelle durée pour une micro-interaction ?",
     "options": [
      "2 à 3 secondes",
      "Environ 150 à 300 ms",
      "1 ms",
      "10 secondes"
     ],
     "answer": 1,
     "why": "Assez pour être perçue, assez court pour ne pas ralentir."
    },
    {
     "q": "Que fait animation-fill-mode: both ?",
     "options": [
      "Joue l'animation deux fois",
      "Applique l'état de départ avant l'animation et garde l'état final après",
      "Joue dans les deux sens",
      "Rien"
     ],
     "answer": 1,
     "why": "Évite un « flash » de l'état final avant le départ."
    }
   ],
   "ondea": "<p><code>animations.css</code> d'Ondea (63 lignes) regroupe les micro-interactions : apparition des écrans (<code>.reveal</code>), soulèvement des boutons, entrée des toasts, graphiques SVG animés de <code>charts.js</code>. Son en-tête précise : « neutralisées si prefers-reduced-motion ». <code>premium.css</code> ajoute les halos dorés et effets de profondeur de l'identité Obsidienne & Or.</p>"
  },
  {
   "id": "js-variables",
   "part": "js",
   "title": "Variables, types et console",
   "subtitle": "let, const, nombres, chaînes, booléens, gabarits",
   "duration": "1 h 30",
   "feature": "Numéro de commande et informations d'une commande",
   "intro": "<p>Le <strong>JavaScript</strong> est le langage qui rend la page vivante : il calcule, réagit aux clics, enregistre les données. Il est exécuté par le navigateur.</p>\n<p>Une <strong>variable</strong> est une boîte étiquetée qui contient une valeur. On la crée avec :</p>\n<ul>\n<li><code>const</code> : la boîte ne sera <strong>pas réaffectée</strong> (à utiliser par défaut) ;</li>\n<li><code>let</code> : la valeur peut changer (un compteur, un total qui s'accumule).</li>\n</ul>\n<p>(On croise encore <code>var</code> dans de vieux codes : on ne l'utilise plus.)</p>\n<p>Les <strong>types</strong> de base : <code>number</code> (12, 8.5), <code>string</code> (texte entre guillemets), <code>boolean</code> (<code>true</code>/<code>false</code>), <code>null</code> (vide volontaire), <code>undefined</code> (pas encore de valeur). Les <strong>gabarits</strong> (template literals), entre accents graves <code>`…`</code>, insèrent une variable avec <code>${variable}</code>.</p>\n<p>Pour voir ce qui se passe, on affiche dans la <strong>console</strong> (F12 → Console) avec <code>console.log()</code>.</p>",
   "example": [
    {
     "lang": "js",
     "code": "// const : valeur fixe (on ne réaffecte pas la variable)\nconst prefixe = 'CMD';\nconst annee = 2026;\n\n// let : valeur qui va changer\nlet compteur = 41;\ncompteur = compteur + 1;          // ou compteur++ → 42\n\n// Un numéro de commande formaté : CMD-2026-0042\n// padStart(4, '0') complète à gauche avec des zéros\nconst numero = `${prefixe}-${annee}-${String(compteur).padStart(4, '0')}`;\nconsole.log(numero);              // CMD-2026-0042\n\n// Les types\nconst client = 'Brico Sud';       // string\nconst quantite = 10;              // number\nconst urgente = false;            // boolean\nlet dateLivraison = null;         // pas encore planifiée\nconsole.log(typeof client, typeof quantite, typeof urgente); // string number boolean\n\n// Attention aux décimales : on calcule l'argent en CENTIMES entiers\nconsole.log(0.1 + 0.2);           // 0.30000000000000004 !\nconst prixCentimes = 850;         // 8,50 €\nconsole.log(prixCentimes * quantite / 100); // 85"
    }
   ],
   "explain": "<ul>\n<li>Chaque instruction se termine par un point-virgule <code>;</code> (recommandé).</li>\n<li><code>//</code> commente une ligne, <code>/* … */</code> plusieurs lignes.</li>\n<li>Noms de variables en <strong>camelCase</strong> : <code>dateLivraison</code>, explicites et en français ou en anglais, mais pas un mélange.</li>\n<li><code>String(compteur)</code> convertit le nombre en texte pour pouvoir utiliser <code>padStart</code>.</li>\n<li>Les ordinateurs stockent les décimales en binaire, d'où <code>0.1 + 0.2 ≠ 0.3</code>. Ondea stocke donc tous les montants en <strong>centimes entiers</strong>.</li>\n<li><code>typeof</code> renvoie le type d'une valeur, utile pour déboguer.</li>\n</ul>",
   "demo-js": "const prefixe = 'CMD';\nconst annee = new Date().getFullYear();\nlet compteur = 41;\ncompteur++;\nconst numero = `${prefixe}-${annee}-${String(compteur).padStart(4, '0')}`;\nconsole.log('Numéro :', numero);\nconsole.log('0.1 + 0.2 =', 0.1 + 0.2);\nconsole.log('En centimes : (10 + 20) / 100 =', (10 + 20) / 100);\ndocument.getElementById('sortie').textContent = numero;",
   "demo-html": "<p>Numéro généré : <strong id=\"sortie\"></strong></p>\n<p><small>Les messages console.log apparaissent dans la console sous l'aperçu.</small></p>",
   "guided": "<p>Préparez les données d'une ligne de commande.</p>\n<ol>\n<li>Créez une constante <code>designation</code> valant <code>'Perceuse 18 V'</code>.</li>\n<li>Créez une constante <code>prixUnitaireCentimes</code> valant <code>12900</code> (129,00 €).</li>\n<li>Créez une variable <code>quantite</code> (avec <code>let</code>) valant 1, puis passez-la à 3.</li>\n<li>Créez une constante <code>totalCentimes</code> = prix × quantité.</li>\n<li>Affichez dans la console exactement : <code>Perceuse 18 V x3 = 387 €</code> avec un gabarit.</li>\n</ol>",
   "guided-js": "// À vous",
   "checks": [
    [
     "eval",
     "designation",
     "Perceuse 18 V",
     "La constante designation existe"
    ],
    [
     "eval",
     "totalCentimes",
     "38700",
     "totalCentimes vaut 38700"
    ],
    [
     "js",
     "let\\s+quantite",
     "quantite est déclarée avec let"
    ],
    [
     "js",
     "`",
     "Un gabarit (accents graves) est utilisé"
    ],
    [
     "log",
     "Perceuse 18 V x3 = 387 €",
     "Le message attendu est affiché"
    ]
   ],
   "guided-solution-js": "const designation = 'Perceuse 18 V';\nconst prixUnitaireCentimes = 12900;\nlet quantite = 1;\nquantite = 3;\nconst totalCentimes = prixUnitaireCentimes * quantite;\nconsole.log(`${designation} x${quantite} = ${totalCentimes / 100} €`);",
   "auto": "<p>Écrivez un script qui décrit une commande complète avec des variables : numéro (généré à partir d'un compteur), nom du client, date de création (<code>new Date().toLocaleDateString('fr-FR')</code>), nombre d'articles, montant HT en centimes, statut, priorité, booléen « payée ». Affichez un récapitulatif sur plusieurs lignes avec un seul gabarit (les accents graves acceptent les retours à la ligne).</p>",
   "solution": "<p>Un gabarit multiligne garde les retours à la ligne et l'indentation. Pour afficher un montant en euros au format français, on utilisera plus tard <code>Intl.NumberFormat</code>.</p>",
   "solution-code": [
    {
     "lang": "js",
     "code": "let compteur = 49;\ncompteur++;\nconst numero = `CMD-2026-${String(compteur).padStart(4, '0')}`;\nconst client = 'Atelier Mistral';\nconst dateCreation = new Date().toLocaleDateString('fr-FR');\nconst nbArticles = 7;\nconst montantHTCentimes = 36720;\nconst statut = 'validee';\nconst priorite = 'haute';\nconst payee = false;\n\nconsole.log(`Commande ${numero}\nClient : ${client}\nCréée le : ${dateCreation}\nArticles : ${nbArticles}\nMontant HT : ${(montantHTCentimes / 100).toFixed(2)} €\nStatut : ${statut} — priorité ${priorite}\nPayée : ${payee ? 'oui' : 'non'}`);"
    }
   ],
   "quiz": [
    {
     "q": "Quel mot-clé utiliser par défaut pour déclarer une variable ?",
     "options": [
      "const",
      "var",
      "let",
      "variable"
     ],
     "answer": 0,
     "why": "const par défaut, let si la valeur doit être réaffectée."
    },
    {
     "q": "Que vaut typeof 'CMD-42' ?",
     "options": [
      "'number'",
      "'string'",
      "'text'",
      "'boolean'"
     ],
     "answer": 1,
     "why": "Tout ce qui est entre guillemets est une chaîne."
    },
    {
     "q": "Que s'affiche avec const n = 5; console.log(`Total : ${n * 2}`) ?",
     "options": [
      "Total : ${n * 2}",
      "Total : 10",
      "Total : n * 2",
      "Une erreur"
     ],
     "answer": 1,
     "why": "${…} évalue l'expression dans le gabarit."
    },
    {
     "q": "Pourquoi Ondea calcule-t-il l'argent en centimes ?",
     "options": [
      "Pour économiser de la mémoire",
      "Pour éviter les erreurs d'arrondi des nombres décimaux",
      "Parce que l'euro l'exige",
      "Pour aller plus vite"
     ],
     "answer": 1,
     "why": "0.1 + 0.2 = 0.30000000000000004 en virgule flottante."
    },
    {
     "q": "Que se passe-t-il avec const x = 1; x = 2; ?",
     "options": [
      "x vaut 2",
      "Une erreur TypeError : assignation à une constante",
      "x vaut 1 et rien ne se passe",
      "x vaut 3"
     ],
     "answer": 1,
     "why": "Une constante ne peut pas être réaffectée."
    }
   ],
   "ondea": "<p>Dans <code>utils.js</code> d'Ondea, la fonction <code>toCents()</code> convertit une saisie comme « 12,5 » en <code>1250</code> centimes, et <code>money()</code> affiche les centimes en euros avec <code>Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' })</code>. Les numéros de commande sont fabriqués à partir d'un compteur stocké dans la table <code>counters</code> d'IndexedDB.</p>"
  },
  {
   "id": "js-conditions",
   "part": "js",
   "title": "Conditions",
   "subtitle": "if / else, opérateurs de comparaison et logiques, switch, ternaire",
   "duration": "1 h 30",
   "feature": "Alertes de stock et droits des profils",
   "intro": "<p>Une <strong>condition</strong> permet au programme de prendre une décision : <em>si</em> le stock est sous le seuil, <em>alors</em> afficher une alerte, <em>sinon</em> rien.</p>\n<ul>\n<li>Comparaisons : <code>===</code> (strictement égal), <code>!==</code> (différent), <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>. Toujours <code>===</code> et jamais <code>==</code> qui convertit les types de façon surprenante.</li>\n<li>Logique : <code>&amp;&amp;</code> (ET), <code>||</code> (OU), <code>!</code> (NON).</li>\n<li><code>if (…) { } else if (…) { } else { }</code> : plusieurs cas.</li>\n<li><code>switch</code> : quand on compare une même valeur à une liste de cas.</li>\n<li>Le <strong>ternaire</strong> <code>condition ? siVrai : siFaux</code> : un if/else court qui renvoie une valeur.</li>\n</ul>\n<p>Valeurs « fausses » (falsy) : <code>false</code>, <code>0</code>, <code>''</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>. Toutes les autres sont « vraies ».</p>",
   "example": [
    {
     "lang": "js",
     "code": "const stock = 4;\nconst seuilAlerte = 5;\n\n// if / else if / else : du cas le plus grave au moins grave\nif (stock === 0) {\n  console.log('Rupture de stock');\n} else if (stock <= seuilAlerte) {\n  console.log('Stock faible : réapprovisionner');\n} else {\n  console.log('Stock suffisant');\n}\n\n// Opérateurs logiques : && (ET), || (OU)\nconst role = 'magasinier';\nconst commandeValidee = true;\nif (role === 'directeur' || (role === 'magasinier' && commandeValidee)) {\n  console.log('Peut lancer la préparation');\n}\n\n// switch : libellé à partir d'une clé de statut\nconst statut = 'expediee';\nlet libelle;\nswitch (statut) {\n  case 'validee':  libelle = 'Validée'; break;\n  case 'expediee': libelle = 'Expédiée'; break;\n  case 'livree':   libelle = 'Livrée'; break;\n  default:         libelle = 'Inconnu';\n}\nconsole.log(libelle);\n\n// Ternaire : une valeur selon une condition\nconst badge = stock <= seuilAlerte ? 'badge-danger' : 'badge-success';\nconsole.log(badge);"
    }
   ],
   "explain": "<ul>\n<li>L'ordre des <code>else if</code> compte : le premier test vrai gagne, les suivants sont ignorés. On teste donc <code>stock === 0</code> avant <code>stock &lt;= 5</code>.</li>\n<li>Les parenthèses clarifient les priorités : <code>&amp;&amp;</code> passe avant <code>||</code>.</li>\n<li>Dans un <code>switch</code>, <code>break</code> arrête l'exécution ; sans lui, on « tombe » dans le cas suivant.</li>\n<li><code>'5' == 5</code> vaut <code>true</code> mais <code>'5' === 5</code> vaut <code>false</code> : <code>===</code> compare aussi le type.</li>\n<li>Le ternaire est parfait pour choisir une classe CSS ou un texte ; pour plusieurs instructions, préférez un if.</li>\n</ul>",
   "demo-html": "<label for=\"s\">Stock du produit : <output id=\"v\">4</output></label>\n<input id=\"s\" type=\"range\" min=\"0\" max=\"20\" value=\"4\">\n<p id=\"msg\" class=\"badge\"></p>",
   "demo-css": "body{font-family:system-ui;padding:1rem}\ninput{width:100%;max-width:320px;display:block}\n.badge{display:inline-block;padding:.4rem .9rem;border-radius:99px;font-weight:700}\n.rupture{background:#fbe0de;color:#7a1410}.faible{background:#fbeccb;color:#5c3b00}.ok{background:#dcf3e4;color:#0b4a26}",
   "demo-js": "const seuil = 5;\nconst curseur = document.getElementById('s');\nfunction evaluer() {\n  const stock = Number(curseur.value);\n  document.getElementById('v').textContent = stock;\n  const msg = document.getElementById('msg');\n  if (stock === 0) { msg.textContent = '⛔ Rupture de stock'; msg.className = 'badge rupture'; }\n  else if (stock <= seuil) { msg.textContent = '⚠ Stock faible'; msg.className = 'badge faible'; }\n  else { msg.textContent = '✔ Stock suffisant'; msg.className = 'badge ok'; }\n  console.log(`stock=${stock} → ${msg.textContent}`);\n}\ncurseur.addEventListener('input', evaluer);\nevaluer();",
   "guided": "<p>Écrivez la fonction de décision de priorité d'une commande.</p>\n<ol>\n<li>Les variables <code>joursAvantLivraison</code> et <code>montantTTC</code> sont fournies.</li>\n<li>Créez une variable <code>priorite</code> : <code>'urgente'</code> si la livraison est dans 1 jour ou moins, sinon <code>'haute'</code> si moins de 4 jours <strong>ou</strong> si le montant dépasse 1000 €, sinon <code>'normale'</code>.</li>\n<li>Affichez <code>Priorité : haute</code> dans la console.</li>\n</ol>",
   "guided-js": "const joursAvantLivraison = 6;\nconst montantTTC = 1044;\n// À vous",
   "checks": [
    [
     "eval",
     "priorite",
     "haute",
     "priorite vaut 'haute' (montant > 1000)"
    ],
    [
     "js",
     "if\\s*\\(",
     "Une condition if est utilisée"
    ],
    [
     "js",
     "\\|\\|",
     "L'opérateur OU || est utilisé"
    ],
    [
     "js",
     "(===|<=|<)",
     "Comparaisons strictes ou d'ordre utilisées"
    ],
    [
     "log",
     "Priorité : haute",
     "Le message est affiché"
    ]
   ],
   "guided-solution-js": "const joursAvantLivraison = 6;\nconst montantTTC = 1044;\nlet priorite;\nif (joursAvantLivraison <= 1) {\n  priorite = 'urgente';\n} else if (joursAvantLivraison < 4 || montantTTC > 1000) {\n  priorite = 'haute';\n} else {\n  priorite = 'normale';\n}\nconsole.log(`Priorité : ${priorite}`);",
   "auto": "<p>Écrivez le contrôle d'accès simplifié d'Ondea : à partir des variables <code>role</code> (<code>'directeur'</code> ou <code>'magasinier'</code>) et <code>action</code> (<code>'voir-finances'</code>, <code>'preparer'</code>, <code>'supprimer-commande'</code>, <code>'expedier'</code>), affichez « Autorisé » ou « Refusé ». Le directeur a tous les droits ; le magasinier peut préparer et expédier uniquement. Testez les 8 combinaisons. Utilisez d'abord un <code>switch</code>, puis réécrivez avec un tableau et <code>includes()</code>.</p>",
   "solution": "<p>La version avec un tableau est plus facile à maintenir : ajouter un droit = ajouter un mot dans la liste. C'est le principe de la matrice de <code>permissions.js</code>.</p>",
   "solution-code": [
    {
     "lang": "js",
     "code": "function autoriser(role, action) {\n  if (role === 'directeur') return true;\n  switch (action) {\n    case 'preparer':\n    case 'expedier':\n      return role === 'magasinier';\n    default:\n      return false;\n  }\n}\n// Version « matrice »\nconst DROITS = { magasinier: ['preparer', 'expedier'] };\nfunction autoriser2(role, action) {\n  return role === 'directeur' || (DROITS[role] || []).includes(action);\n}\nfor (const role of ['directeur', 'magasinier']) {\n  for (const action of ['voir-finances', 'preparer', 'supprimer-commande', 'expedier']) {\n    console.log(role, action, autoriser2(role, action) ? 'Autorisé' : 'Refusé');\n  }\n}"
    }
   ],
   "quiz": [
    {
     "q": "Quel opérateur utiliser pour comparer une valeur ET son type ?",
     "options": [
      "==",
      "===",
      "=",
      "!="
     ],
     "answer": 1,
     "why": "= affecte, == compare avec conversion, === compare strictement."
    },
    {
     "q": "Que vaut 0 || 'défaut' ?",
     "options": [
      "0",
      "'défaut'",
      "true",
      "false"
     ],
     "answer": 1,
     "why": "0 est falsy, donc || renvoie la seconde valeur."
    },
    {
     "q": "Que se passe-t-il si on oublie break dans un case ?",
     "options": [
      "Erreur de syntaxe",
      "L'exécution continue dans le case suivant",
      "Le switch s'arrête",
      "Rien"
     ],
     "answer": 1,
     "why": "C'est le « fall-through », parfois voulu pour regrouper des cas."
    },
    {
     "q": "Que renvoie stock > 0 ? 'Disponible' : 'Rupture' avec stock = 0 ?",
     "options": [
      "'Disponible'",
      "'Rupture'",
      "0",
      "undefined"
     ],
     "answer": 1,
     "why": "0 > 0 est faux."
    },
    {
     "q": "Laquelle de ces valeurs est « falsy » ?",
     "options": [
      "'false'",
      "[ ]",
      "''",
      "'texte'"
     ],
     "answer": 2,
     "why": "La chaîne vide est fausse ; la chaîne 'false' est vraie car non vide."
    }
   ],
   "ondea": "<p><code>permissions.js</code> d'Ondea définit une <code>MATRIX</code> : pour chaque profil, un ensemble (<code>Set</code>) de droits comme <code>'orders.validate'</code>. La fonction <code>OC.perm.require()</code> est appelée avant chaque écriture et lève une <code>PermissionError</code> si le droit manque. <code>stocks.js</code> compare le stock disponible au seuil d'alerte pour générer les notifications « stock bas ».</p>"
  },
  {
   "id": "js-boucles",
   "part": "js",
   "title": "Boucles",
   "subtitle": "for, for…of, while et accumulation",
   "duration": "1 h",
   "feature": "Total des lignes d'une commande",
   "intro": "<p>Une <strong>boucle</strong> répète des instructions. C'est indispensable dès qu'on a une liste : additionner toutes les lignes d'une commande, afficher tous les clients, compter les commandes en retard.</p>\n<ul>\n<li><code>for (let i = 0; i &lt; n; i++)</code> : la boucle classique avec un compteur.</li>\n<li><code>for (const element of tableau)</code> : parcourt chaque élément d'un tableau. <strong>La plus lisible</strong>, à préférer.</li>\n<li><code>while (condition)</code> : répète tant que la condition est vraie (attention à la boucle infinie !).</li>\n<li><code>break</code> sort de la boucle ; <code>continue</code> passe directement au tour suivant.</li>\n</ul>\n<p>Le schéma le plus courant est l'<strong>accumulateur</strong> : une variable <code>let total = 0</code> avant la boucle, à laquelle on ajoute une valeur à chaque tour.</p>",
   "example": [
    {
     "lang": "js",
     "code": "// Quantités et prix (en centimes) des lignes d'une commande\nconst quantites = [10, 2, 5];\nconst prix      = [850, 12900, 400];\n\n// 1. for classique : i va de 0 à 2\nlet totalHT = 0;                       // accumulateur\nfor (let i = 0; i < quantites.length; i++) {\n  totalHT += quantites[i] * prix[i];   // += : ajoute à la valeur actuelle\n}\nconsole.log(totalHT);                  // 36300 centimes = 363,00 €\n\n// 2. for...of : parcourt directement les valeurs\nconst statuts = ['livree', 'attente', 'livree', 'annulee', 'livree'];\nlet nbLivrees = 0;\nfor (const s of statuts) {\n  if (s === 'annulee') continue;       // on ignore les annulées\n  if (s === 'livree') nbLivrees++;\n}\nconsole.log(`${nbLivrees} commandes livrées`);\n\n// 3. while : réapprovisionner par cartons de 12 jusqu'au seuil\nlet stock = 3;\nlet cartons = 0;\nwhile (stock < 30) {\n  stock += 12;\n  cartons++;\n}\nconsole.log(`${cartons} cartons → stock ${stock}`); // 3 cartons → stock 39"
    }
   ],
   "explain": "<ul>\n<li>Les indices d'un tableau commencent à <strong>0</strong> : le dernier est à <code>length - 1</code>, d'où <code>i &lt; length</code> (et non <code>&lt;=</code>).</li>\n<li><code>i++</code> ajoute 1 à <code>i</code> après chaque tour.</li>\n<li><code>totalHT += x</code> est le raccourci de <code>totalHT = totalHT + x</code>.</li>\n<li>Avec <code>for…of</code>, pas d'indice à gérer : moins de risque d'erreur.</li>\n<li>Dans un <code>while</code>, quelque chose doit faire évoluer la condition (ici <code>stock += 12</code>), sinon la page se fige.</li>\n</ul>",
   "demo-html": "<ul id=\"liste\"></ul>\n<p id=\"total\"></p>",
   "demo-css": "body{font-family:system-ui;padding:1rem}\nli{padding:.3rem 0;border-bottom:1px solid #e2dbcc;list-style:none;display:flex;justify-content:space-between;max-width:340px}\n#total{font-weight:700;color:#614608}",
   "demo-js": "const lignes = [\n  { nom: 'Vis inox 4x40', qte: 10, pu: 850 },\n  { nom: 'Perceuse 18 V', qte: 2, pu: 12900 },\n  { nom: 'Chevilles 8 mm', qte: 5, pu: 400 }\n];\nlet total = 0;\nfor (const l of lignes) {\n  const sousTotal = l.qte * l.pu;\n  total += sousTotal;\n  document.getElementById('liste').innerHTML += `<li><span>${l.qte} × ${l.nom}</span><span>${(sousTotal / 100).toFixed(2)} €</span></li>`;\n  console.log(`${l.nom} : ${sousTotal} centimes (cumul ${total})`);\n}\ndocument.getElementById('total').textContent = `Total HT : ${(total / 100).toFixed(2)} €`;",
   "guided": "<p>Comptez et additionnez les commandes du jour.</p>\n<ol>\n<li>Le tableau <code>montants</code> (en centimes) est fourni.</li>\n<li>Avec une boucle <code>for…of</code>, calculez <code>total</code> (la somme).</li>\n<li>Dans la même boucle, comptez dans <code>nbGrosses</code> les commandes de plus de 50 000 centimes (500 €).</li>\n<li>Affichez <code>Total : 1945.5 € — 2 grosses commandes</code>.</li>\n</ol>",
   "guided-js": "const montants = [25680, 104400, 8990, 2400, 52000, 1080];\n// À vous",
   "checks": [
    [
     "eval",
     "total",
     "194550",
     "total vaut 194550"
    ],
    [
     "eval",
     "nbGrosses",
     "2",
     "nbGrosses vaut 2"
    ],
    [
     "js",
     "for\\s*\\(\\s*const\\s+\\w+\\s+of",
     "Une boucle for…of est utilisée"
    ],
    [
     "log",
     "Total : 1945.5 € — 2 grosses commandes",
     "Le message est affiché"
    ]
   ],
   "guided-solution-js": "const montants = [25680, 104400, 8990, 2400, 52000, 1080];\nlet total = 0;\nlet nbGrosses = 0;\nfor (const m of montants) {\n  total += m;\n  if (m > 50000) nbGrosses++;\n}\nconsole.log(`Total : ${total / 100} € — ${nbGrosses} grosses commandes`);",
   "auto": "<p>À partir d'un tableau de 10 produits (nom, stock, seuil), écrivez un script qui : (1) affiche la liste des produits sous le seuil, (2) compte les ruptures (stock 0), (3) trouve le produit au stock le plus bas, (4) s'arrête et affiche un message dès qu'il trouve un produit dont le nom contient « Perceuse » (avec <code>break</code>). Utilisez au moins une boucle <code>for</code> classique et une boucle <code>for…of</code>.</p>",
   "solution": "<p>Pour trouver un minimum, on initialise avec le premier élément puis on compare chaque élément au « meilleur » trouvé jusqu'ici.</p>",
   "solution-code": [
    {
     "lang": "js",
     "code": "const produits = [\n  { nom: 'Vis inox 4x40', stock: 12, seuil: 50 }, { nom: 'Perceuse 18 V', stock: 2, seuil: 5 },\n  { nom: 'Chevilles 8 mm', stock: 0, seuil: 100 }, { nom: 'Équerre 60 mm', stock: 80, seuil: 20 },\n  { nom: 'Charnière laiton', stock: 15, seuil: 10 }, { nom: 'Scie égoïne', stock: 0, seuil: 3 },\n  { nom: 'Mètre ruban 5 m', stock: 40, seuil: 10 }, { nom: 'Colle bois 750 g', stock: 6, seuil: 8 },\n  { nom: 'Niveau 60 cm', stock: 9, seuil: 4 }, { nom: 'Perceuse à percussion', stock: 3, seuil: 2 }\n];\nlet ruptures = 0;\nlet plusBas = produits[0];\nfor (const p of produits) {\n  if (p.stock <= p.seuil) console.log(`Sous le seuil : ${p.nom} (${p.stock}/${p.seuil})`);\n  if (p.stock === 0) ruptures++;\n  if (p.stock < plusBas.stock) plusBas = p;\n}\nconsole.log(`${ruptures} ruptures ; stock le plus bas : ${plusBas.nom}`);\nfor (let i = 0; i < produits.length; i++) {\n  if (produits[i].nom.includes('Perceuse')) {\n    console.log(`Première perceuse trouvée à l'indice ${i} : ${produits[i].nom}`);\n    break;\n  }\n}"
    }
   ],
   "quiz": [
    {
     "q": "Quel est l'indice du premier élément d'un tableau ?",
     "options": [
      "0",
      "1",
      "-1",
      "Cela dépend"
     ],
     "answer": 0,
     "why": "Le dernier est donc à length - 1."
    },
    {
     "q": "Quelle boucle est la plus lisible pour parcourir un tableau ?",
     "options": [
      "while",
      "for…of",
      "do…while",
      "for…in"
     ],
     "answer": 1,
     "why": "for…in parcourt les clés (à réserver aux objets)."
    },
    {
     "q": "Que fait continue dans une boucle ?",
     "options": [
      "Sort de la boucle",
      "Passe directement au tour suivant",
      "Recommence la boucle depuis le début",
      "Met en pause"
     ],
     "answer": 1,
     "why": "break, lui, sort de la boucle."
    },
    {
     "q": "Que vaut total après : let total = 0; for (const n of [2, 3, 5]) total += n; ?",
     "options": [
      "0",
      "5",
      "10",
      "235"
     ],
     "answer": 2,
     "why": "0 + 2 + 3 + 5."
    },
    {
     "q": "Quel risque principal avec while ?",
     "options": [
      "Il est lent",
      "La boucle infinie si la condition ne devient jamais fausse",
      "Il ne fonctionne pas avec les tableaux",
      "Il est obsolète"
     ],
     "answer": 1,
     "why": "Toujours vérifier que la condition évolue."
    }
   ],
   "ondea": "<p>La fonction <code>computeTotals(order)</code> de <code>utils.js</code> parcourt <code>order.lines</code> pour calculer le brut, la remise, le HT et la TVA ligne par ligne, puis les additionne (en centimes). <code>notifications.js</code> parcourt les commandes ouvertes pour détecter celles dont la date de livraison souhaitée est dépassée.</p>"
  },
  {
   "id": "js-fonctions",
   "part": "js",
   "title": "Fonctions",
   "subtitle": "Paramètres, return, fonctions fléchées, portée",
   "duration": "2 h",
   "feature": "Calculs HT, TVA et TTC",
   "intro": "<p>Une <strong>fonction</strong> est une recette réutilisable : on lui donne des ingrédients (les <strong>paramètres</strong>), elle fait un travail et renvoie un résultat avec <code>return</code>.</p>\n<p>Avantages : on écrit le calcul de la TVA <strong>une seule fois</strong> et on l'utilise partout ; si la règle change, on ne corrige qu'à un endroit. On peut aussi tester la fonction seule.</p>\n<ul>\n<li>Déclaration : <code>function calculerTVA(ht, taux) { return … }</code></li>\n<li>Fonction fléchée : <code>const calculerTVA = (ht, taux) =&gt; …</code> (plus courte, très utilisée avec les tableaux).</li>\n<li>Paramètre par défaut : <code>function f(taux = 20)</code>.</li>\n<li><strong>Portée</strong> : une variable créée dans une fonction n'existe que dans cette fonction.</li>\n</ul>\n<p>Une bonne fonction fait <strong>une seule chose</strong>, porte un nom qui commence par un verbe (<code>calculer</code>, <code>formater</code>, <code>valider</code>) et ne modifie pas les données qu'on lui donne.</p>",
   "example": [
    {
     "lang": "js",
     "code": "/**\n * Calcule la TVA d'un montant HT.\n * @param {number} htCentimes  montant hors taxes en centimes\n * @param {number} tauxPourcent taux de TVA (20, 10, 5.5)\n * @returns {number} TVA en centimes, arrondie au centime\n */\nfunction calculerTVA(htCentimes, tauxPourcent = 20) {\n  return Math.round(htCentimes * tauxPourcent / 100);\n}\n\n// Fonction fléchée : une ligne, return implicite\nconst calculerTTC = (htCentimes, taux = 20) => htCentimes + calculerTVA(htCentimes, taux);\n\n// Formater des centimes en euros à la française\nconst formaterEuros = (centimes) =>\n  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(centimes / 100);\n\n// Une fonction qui en utilise d'autres\nfunction resumeLigne(designation, quantite, puCentimes, taux) {\n  const ht = quantite * puCentimes;\n  return `${designation} : ${formaterEuros(ht)} HT, ${formaterEuros(calculerTTC(ht, taux))} TTC`;\n}\n\nconsole.log(calculerTVA(10000));                     // 2000 (20 € sur 100 €)\nconsole.log(calculerTTC(2000, 5.5));                 // 2110\nconsole.log(resumeLigne('Perceuse 18 V', 2, 12900, 20));\n// Perceuse 18 V : 258,00 € HT, 309,60 € TTC"
    }
   ],
   "explain": "<ul>\n<li>Le commentaire <code>/** … */</code> (JSDoc) documente les paramètres : l'éditeur l'affiche en info-bulle.</li>\n<li><code>return</code> renvoie la valeur <strong>et arrête</strong> la fonction. Sans <code>return</code>, la fonction renvoie <code>undefined</code>.</li>\n<li><code>tauxPourcent = 20</code> : si on n'envoie pas de taux, 20 est utilisé.</li>\n<li>Une fléchée sans accolades renvoie directement son expression. Avec accolades, il faut écrire <code>return</code>.</li>\n<li><code>Math.round()</code> arrondit à l'entier le plus proche : indispensable pour garder des centimes entiers.</li>\n<li>On appelle une fonction avec des parenthèses : <code>calculerTVA(10000)</code>. Sans parenthèses, on manipule la fonction elle-même sans l'exécuter.</li>\n</ul>",
   "demo-html": "<form id=\"f\">\n  <label>Prix HT (€) <input id=\"ht\" type=\"number\" value=\"129\" step=\"0.01\" min=\"0\"></label>\n  <label>Quantité <input id=\"q\" type=\"number\" value=\"2\" min=\"1\"></label>\n  <label>TVA <select id=\"t\"><option>20</option><option>10</option><option>5.5</option></select> %</label>\n</form>\n<p id=\"r\"></p>",
   "demo-css": "body{font-family:system-ui;padding:1rem}\nform{display:grid;gap:.5rem;max-width:300px}\ninput,select{font:inherit;padding:.3rem}\n#r{font-size:1.1rem;font-weight:700;color:#614608}",
   "demo-js": "const tva = (ht, taux) => Math.round(ht * taux / 100);\nconst euros = (c) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(c / 100);\nfunction maj() {\n  const puCentimes = Math.round(Number(document.getElementById('ht').value) * 100);\n  const ht = puCentimes * Number(document.getElementById('q').value);\n  const taux = Number(document.getElementById('t').value);\n  const montantTVA = tva(ht, taux);\n  document.getElementById('r').textContent = `HT ${euros(ht)} + TVA ${euros(montantTVA)} = TTC ${euros(ht + montantTVA)}`;\n}\ndocument.getElementById('f').addEventListener('input', maj);\nmaj();",
   "guided": "<p>Écrivez les fonctions de calcul d'une ligne de commande avec remise.</p>\n<ol>\n<li><code>appliquerRemise(htCentimes, remisePourcent)</code> renvoie le HT après remise, arrondi (<code>Math.round</code>).</li>\n<li><code>calculerTVA(htCentimes, taux)</code> renvoie la TVA arrondie.</li>\n<li><code>totalLigne(quantite, puCentimes, remisePourcent, taux)</code> renvoie un objet <code>{ ht, tva, ttc }</code> en utilisant les deux fonctions précédentes.</li>\n</ol>\n<p>Exemple : <code>totalLigne(2, 12900, 10, 20)</code> → <code>{ ht: 23220, tva: 4644, ttc: 27864 }</code>.</p>",
   "guided-js": "// À vous",
   "checks": [
    [
     "eval",
     "appliquerRemise(10000, 10)",
     "9000",
     "appliquerRemise(10000, 10) vaut 9000"
    ],
    [
     "eval",
     "calculerTVA(2000, 5.5)",
     "110",
     "calculerTVA(2000, 5.5) vaut 110"
    ],
    [
     "eval",
     "JSON.stringify(totalLigne(2, 12900, 10, 20))",
     "{\"ht\":23220,\"tva\":4644,\"ttc\":27864}",
     "totalLigne renvoie le bon objet"
    ],
    [
     "eval",
     "totalLigne(3, 333, 0, 20).tva",
     "200",
     "La TVA est arrondie (999 × 20 % = 199,8 → 200)"
    ]
   ],
   "guided-solution-js": "function appliquerRemise(htCentimes, remisePourcent) {\n  return Math.round(htCentimes * (100 - remisePourcent) / 100);\n}\nfunction calculerTVA(htCentimes, taux) {\n  return Math.round(htCentimes * taux / 100);\n}\nfunction totalLigne(quantite, puCentimes, remisePourcent, taux) {\n  const ht = appliquerRemise(quantite * puCentimes, remisePourcent);\n  const tva = calculerTVA(ht, taux);\n  return { ht, tva, ttc: ht + tva };\n}\nconsole.log(totalLigne(2, 12900, 10, 20));",
   "auto": "<p>Écrivez une bibliothèque <code>calculs.js</code> pour Ondea : <code>versCentimes(saisie)</code> qui accepte « 12,5 », « 12.50 » ou « 1 234,56 » ; <code>formaterEuros(centimes)</code> ; <code>totalCommande(lignes, fraisPortHT)</code> qui renvoie le total HT, la TVA <strong>détaillée par taux</strong> et le TTC. Testez avec la commande du chapitre Tableaux HTML (vous devez retrouver 449,74 € TTC). Documentez chaque fonction en JSDoc.</p>",
   "solution": "<p>On regroupe la TVA par taux dans un objet dont les clés sont les taux : <code>{ '20': {...}, '5.5': {...} }</code>. La remise se calcule avant la TVA, ligne par ligne, comme dans Ondea.</p>",
   "solution-code": [
    {
     "lang": "js",
     "code": "/** « 1 234,56 » → 123456 centimes (NaN si invalide) */\nfunction versCentimes(saisie) {\n  const s = String(saisie).replace(/\\s/g, '').replace(',', '.');\n  if (!/^\\d+(\\.\\d{1,2})?$/.test(s)) return NaN;\n  const [ent, dec = ''] = s.split('.');\n  return Number(ent) * 100 + Number((dec + '00').slice(0, 2));\n}\n/** 123456 → « 1 234,56 € » */\nconst formaterEuros = (c) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(c / 100);\n\n/** Totaux d'une commande. lignes : [{ qte, pu, remise, taux }] en centimes / % */\nfunction totalCommande(lignes, fraisPortHT = 0, tauxPort = 20) {\n  const parTaux = {};\n  let totalHT = 0;\n  const ajouter = (ht, taux) => {\n    const tva = Math.round(ht * taux / 100);\n    parTaux[taux] = parTaux[taux] || { base: 0, tva: 0 };\n    parTaux[taux].base += ht; parTaux[taux].tva += tva;\n    totalHT += ht;\n    return tva;\n  };\n  let totalTVA = 0;\n  for (const l of lignes) {\n    const ht = Math.round(l.qte * l.pu * (100 - l.remise) / 100);\n    totalTVA += ajouter(ht, l.taux);\n  }\n  if (fraisPortHT) totalTVA += ajouter(fraisPortHT, tauxPort);\n  return { totalHT, parTaux, totalTVA, totalTTC: totalHT + totalTVA };\n}\nconst r = totalCommande([\n  { qte: 10, pu: 850, remise: 0, taux: 20 }, { qte: 2, pu: 12900, remise: 10, taux: 20 },\n  { qte: 5, pu: 400, remise: 0, taux: 20 }, { qte: 1, pu: 2000, remise: 0, taux: 5.5 },\n  { qte: 4, pu: 250, remise: 0, taux: 20 }\n], 1000);\nconsole.log(formaterEuros(r.totalTTC)); // 449,74 €"
    }
   ],
   "quiz": [
    {
     "q": "Que renvoie une fonction sans instruction return ?",
     "options": [
      "0",
      "null",
      "undefined",
      "Une erreur"
     ],
     "answer": 2,
     "why": "undefined est la valeur de retour par défaut."
    },
    {
     "q": "Que vaut const double = (n) => n * 2; double(4) ?",
     "options": [
      "4",
      "8",
      "n * 2",
      "undefined"
     ],
     "answer": 1,
     "why": "Fléchée sans accolades : return implicite."
    },
    {
     "q": "Quelle est la portée d'une variable déclarée avec const dans une fonction ?",
     "options": [
      "Toute la page",
      "Uniquement l'intérieur de cette fonction (son bloc)",
      "Toutes les fonctions",
      "Le fichier HTML"
     ],
     "answer": 1,
     "why": "Elle disparaît à la fin de l'appel."
    },
    {
     "q": "Comment appeler la fonction calculerTVA avec 1000 ?",
     "options": [
      "calculerTVA",
      "calculerTVA[1000]",
      "calculerTVA(1000)",
      "call calculerTVA 1000"
     ],
     "answer": 2,
     "why": "Les parenthèses exécutent la fonction."
    },
    {
     "q": "Pourquoi découper le calcul en petites fonctions ?",
     "options": [
      "Pour réutiliser, tester et corriger chaque règle à un seul endroit",
      "Pour que le code soit plus long",
      "C'est obligatoire en JavaScript",
      "Pour aller plus vite à l'exécution"
     ],
     "answer": 0,
     "why": "Principe de responsabilité unique."
    }
   ],
   "ondea": "<p><code>utils.js</code> d'Ondea contient exactement cette chaîne de fonctions : <code>toCents()</code>, <code>applyBp()</code> (applique un taux exprimé en <em>points de base</em> : 20 % = 2000 pb, ce qui évite aussi les décimales comme 5,5), <code>roundHalfUp()</code> (arrondi commercial) et <code>computeTotals(order)</code> qui renvoie HT, TVA par taux (<code>vatBreakdown</code>) et TTC. Toutes sont pures : elles ne modifient pas la commande reçue.</p>"
  },
  {
   "id": "js-tableaux-objets",
   "part": "js",
   "title": "Tableaux et objets",
   "subtitle": "Structurer les données, map, filter, reduce, find, déstructuration",
   "duration": "2 h 30",
   "feature": "Clients, produits, recherche et filtres, statistiques",
   "intro": "<p>Un <strong>objet</strong> regroupe les informations d'une même chose sous forme de paires <code>clé: valeur</code> : un client a un nom, un e-mail, une ville. Un <strong>tableau</strong> est une liste ordonnée : la liste des clients.</p>\n<p>Ensemble, ils modélisent toutes les données d'Ondea : un tableau de commandes, chaque commande est un objet qui contient un tableau de lignes, chaque ligne est un objet.</p>\n<p>Les méthodes de tableau à connaître absolument (elles ne modifient pas le tableau d'origine) :</p>\n<ul>\n<li><code>filter(fn)</code> : garde les éléments qui passent le test → les commandes en attente.</li>\n<li><code>map(fn)</code> : transforme chaque élément → la liste des noms.</li>\n<li><code>find(fn)</code> : le premier élément qui correspond → le client n° 3.</li>\n<li><code>reduce(fn, départ)</code> : combine tout en une valeur → le chiffre d'affaires.</li>\n<li><code>some</code>/<code>every</code>, <code>includes</code>, <code>sort</code>, <code>push</code>.</li>\n</ul>",
   "example": [
    {
     "lang": "js",
     "code": "// Un objet : des propriétés clé: valeur\nconst client = { id: 3, nom: 'Brico Sud', ville: 'Draguignan', actif: true };\nconsole.log(client.nom);            // notation pointée\nclient.telephone = '04 94 00 00 00'; // ajout d'une propriété\n\n// Un tableau d'objets\nconst commandes = [\n  { numero: 'CMD-0042', clientId: 3, statut: 'livree',  ttc: 25680 },\n  { numero: 'CMD-0043', clientId: 5, statut: 'attente', ttc: 104400 },\n  { numero: 'CMD-0044', clientId: 3, statut: 'attente', ttc: 8990 },\n  { numero: 'CMD-0045', clientId: 7, statut: 'annulee', ttc: 2400 }\n];\n\n// filter : les commandes en attente\nconst enAttente = commandes.filter((c) => c.statut === 'attente');\n\n// map : uniquement les numéros\nconst numeros = enAttente.map((c) => c.numero);   // ['CMD-0043', 'CMD-0044']\n\n// find : la première commande du client 3\nconst premiere = commandes.find((c) => c.clientId === 3);\n\n// reduce : chiffre d'affaires hors commandes annulées\nconst ca = commandes\n  .filter((c) => c.statut !== 'annulee')\n  .reduce((somme, c) => somme + c.ttc, 0);        // 139070\n\n// Déstructuration et décomposition (spread)\nconst { numero, ttc } = premiere;                 // deux variables d'un coup\nconst copie = { ...premiere, statut: 'expediee' }; // copie modifiée, original intact\n\n// Recherche insensible à la casse\nconst recherche = 'cmd-004';\nconst resultats = commandes.filter((c) => c.numero.toLowerCase().includes(recherche));\nconsole.log(numeros, ca, numero, ttc, copie.statut, resultats.length);"
    }
   ],
   "explain": "<ul>\n<li>Chaque méthode reçoit une fonction (souvent fléchée) appelée pour chaque élément : <code>(c) =&gt; c.statut === 'attente'</code>.</li>\n<li>On peut <strong>enchaîner</strong> : <code>filter(...).map(...)</code> se lit comme une phrase.</li>\n<li><code>reduce((accumulateur, element) =&gt; …, valeurInitiale)</code> : l'accumulateur part de 0 et grossit à chaque élément.</li>\n<li><code>find</code> renvoie <code>undefined</code> si rien ne correspond : pensez à le vérifier.</li>\n<li><code>{ ...objet }</code> crée une copie superficielle : on ne modifie jamais les données d'origine par accident.</li>\n<li><code>sort</code> <strong>modifie</strong> le tableau : on trie une copie <code>[...tab].sort((a, b) =&gt; a.ttc - b.ttc)</code>.</li>\n</ul>",
   "demo-html": "<label for=\"q\">Rechercher</label> <input id=\"q\" type=\"search\" placeholder=\"client ou numéro\">\n<div class=\"chips\"><button data-s=\"\">Toutes</button><button data-s=\"attente\">En attente</button><button data-s=\"livree\">Livrées</button></div>\n<ul id=\"l\"></ul>\n<p id=\"ca\"></p>",
   "demo-css": "body{font-family:system-ui;padding:1rem}\n.chips{display:flex;gap:.4rem;margin:.6rem 0}\n.chips button{border:1px solid #c9a14a;background:#fff;border-radius:99px;padding:.3rem .8rem}\n.chips button[aria-pressed=\"true\"]{background:#c9a14a}\nli{list-style:none;padding:.4rem;border-bottom:1px solid #e2dbcc}\n#ca{font-weight:700}",
   "demo-js": "const data = [\n  { n: 'CMD-0042', client: 'Brico Sud', s: 'livree', ttc: 25680 },\n  { n: 'CMD-0043', client: 'Visso Bricolage', s: 'attente', ttc: 104400 },\n  { n: 'CMD-0044', client: 'Atelier Mistral', s: 'attente', ttc: 8990 },\n  { n: 'CMD-0046', client: 'Brico Sud', s: 'livree', ttc: 15400 }\n];\nlet filtre = '';\nfunction afficher() {\n  const q = document.getElementById('q').value.toLowerCase();\n  const liste = data\n    .filter((c) => !filtre || c.s === filtre)\n    .filter((c) => (c.n + c.client).toLowerCase().includes(q));\n  document.getElementById('l').innerHTML = liste.map((c) => `<li>${c.n} — ${c.client} — ${(c.ttc / 100).toFixed(2)} €</li>`).join('');\n  const total = liste.reduce((s, c) => s + c.ttc, 0);\n  document.getElementById('ca').textContent = `${liste.length} commande(s), total ${(total / 100).toFixed(2)} €`;\n  document.querySelectorAll('.chips button').forEach((b) => b.setAttribute('aria-pressed', b.dataset.s === filtre));\n}\ndocument.getElementById('q').addEventListener('input', afficher);\ndocument.querySelector('.chips').addEventListener('click', (e) => {\n  if (e.target.dataset.s !== undefined) { filtre = e.target.dataset.s; afficher(); }\n});\nafficher();",
   "guided": "<p>Produisez les statistiques du catalogue produits.</p>\n<ol>\n<li><code>sousSeuil</code> : les produits dont <code>stock &lt;= seuil</code> (<code>filter</code>).</li>\n<li><code>references</code> : un tableau des références de ces produits (<code>map</code>).</li>\n<li><code>valeurStock</code> : la valeur totale du stock en centimes, somme de <code>stock × prixAchat</code> (<code>reduce</code>).</li>\n<li><code>perceuse</code> : le produit dont la référence est <code>'PER-18V'</code> (<code>find</code>).</li>\n</ol>",
   "guided-js": "const produits = [\n  { reference: 'VIS-440', nom: 'Vis inox 4x40', stock: 12, seuil: 50, prixAchat: 420 },\n  { reference: 'PER-18V', nom: 'Perceuse 18 V', stock: 2, seuil: 5, prixAchat: 7800 },\n  { reference: 'EQU-060', nom: 'Équerre 60 mm', stock: 80, seuil: 20, prixAchat: 110 },\n  { reference: 'CHV-008', nom: 'Chevilles 8 mm', stock: 0, seuil: 100, prixAchat: 190 }\n];\n// À vous",
   "checks": [
    [
     "eval",
     "sousSeuil.length",
     "3",
     "3 produits sous le seuil"
    ],
    [
     "eval",
     "references.join(',')",
     "VIS-440,PER-18V,CHV-008",
     "Références correctes"
    ],
    [
     "eval",
     "valeurStock",
     "29440",
     "Valeur du stock : 29440 centimes"
    ],
    [
     "eval",
     "perceuse.nom",
     "Perceuse 18 V",
     "find a trouvé la perceuse"
    ],
    [
     "js",
     "\\.reduce\\(",
     "reduce est utilisé"
    ]
   ],
   "guided-solution-js": "const produits = [\n  { reference: 'VIS-440', nom: 'Vis inox 4x40', stock: 12, seuil: 50, prixAchat: 420 },\n  { reference: 'PER-18V', nom: 'Perceuse 18 V', stock: 2, seuil: 5, prixAchat: 7800 },\n  { reference: 'EQU-060', nom: 'Équerre 60 mm', stock: 80, seuil: 20, prixAchat: 110 },\n  { reference: 'CHV-008', nom: 'Chevilles 8 mm', stock: 0, seuil: 100, prixAchat: 190 }\n];\nconst sousSeuil = produits.filter((p) => p.stock <= p.seuil);\nconst references = sousSeuil.map((p) => p.reference);\nconst valeurStock = produits.reduce((total, p) => total + p.stock * p.prixAchat, 0);\nconst perceuse = produits.find((p) => p.reference === 'PER-18V');\nconsole.log(references, valeurStock, perceuse.nom);",
   "auto": "<p>Créez un module « statistiques » : à partir d'un tableau de 12 commandes (client, date, statut, ttc), calculez le CA par mois (objet <code>{ '2026-10': 1234, … }</code>), le nombre de commandes par statut, le top 3 des clients par CA (tri décroissant), le panier moyen, et le taux d'annulation en %. Affichez le résultat avec <code>console.table()</code>.</p>",
   "solution": "<p><code>reduce</code> peut construire un objet : l'accumulateur de départ est <code>{}</code> et on incrémente une clé à chaque élément. Pour un top 3 : <code>Object.entries()</code> transforme l'objet en tableau de paires, qu'on trie puis coupe avec <code>slice(0, 3)</code>.</p>",
   "solution-code": [
    {
     "lang": "js",
     "code": "const cmds = [\n  { client: 'Brico Sud', date: '2026-09-04', statut: 'livree', ttc: 25680 },\n  { client: 'Visso', date: '2026-09-12', statut: 'livree', ttc: 104400 },\n  { client: 'Atelier Mistral', date: '2026-09-20', statut: 'annulee', ttc: 8990 },\n  { client: 'Brico Sud', date: '2026-10-01', statut: 'livree', ttc: 15400 },\n  { client: 'Menuiserie Var', date: '2026-10-03', statut: 'expediee', ttc: 48200 },\n  { client: 'Visso', date: '2026-10-08', statut: 'livree', ttc: 31000 },\n  { client: 'Atelier Mistral', date: '2026-10-15', statut: 'livree', ttc: 12990 },\n  { client: 'Brico Sud', date: '2026-10-22', statut: 'attente', ttc: 7400 },\n  { client: 'Menuiserie Var', date: '2026-10-28', statut: 'annulee', ttc: 5200 },\n  { client: 'Visso', date: '2026-11-02', statut: 'validee', ttc: 66000 },\n  { client: 'Brico Sud', date: '2026-11-02', statut: 'preparation', ttc: 9900 },\n  { client: 'Atelier Mistral', date: '2026-11-03', statut: 'attente', ttc: 4400 }\n];\nconst valides = cmds.filter((c) => c.statut !== 'annulee');\nconst caParMois = valides.reduce((acc, c) => {\n  const mois = c.date.slice(0, 7);\n  acc[mois] = (acc[mois] || 0) + c.ttc;\n  return acc;\n}, {});\nconst parStatut = cmds.reduce((acc, c) => ({ ...acc, [c.statut]: (acc[c.statut] || 0) + 1 }), {});\nconst caClients = valides.reduce((acc, c) => { acc[c.client] = (acc[c.client] || 0) + c.ttc; return acc; }, {});\nconst top3 = Object.entries(caClients).sort((a, b) => b[1] - a[1]).slice(0, 3);\nconst panierMoyen = Math.round(valides.reduce((s, c) => s + c.ttc, 0) / valides.length);\nconst tauxAnnulation = (cmds.length - valides.length) / cmds.length * 100;\nconsole.table(caParMois);\nconsole.table(parStatut);\nconsole.table(top3);\nconsole.log({ panierMoyen, tauxAnnulation: tauxAnnulation.toFixed(1) + ' %' });"
    }
   ],
   "quiz": [
    {
     "q": "Quelle méthode garde seulement les commandes livrées ?",
     "options": [
      "map",
      "filter",
      "find",
      "reduce"
     ],
     "answer": 1,
     "why": "filter renvoie un nouveau tableau des éléments qui passent le test."
    },
    {
     "q": "Que renvoie [1, 2, 3].map((n) => n * 10) ?",
     "options": [
      "60",
      "[10, 20, 30]",
      "[1, 2, 3]",
      "10"
     ],
     "answer": 1,
     "why": "map transforme chaque élément, la longueur reste la même."
    },
    {
     "q": "Que renvoie find si aucun élément ne correspond ?",
     "options": [
      "null",
      "false",
      "undefined",
      "[]"
     ],
     "answer": 2,
     "why": "Toujours vérifier le résultat avant d'utiliser ses propriétés."
    },
    {
     "q": "Que vaut [5, 10, 15].reduce((s, n) => s + n, 0) ?",
     "options": [
      "30",
      "0",
      "[5, 10, 15]",
      "15"
     ],
     "answer": 0,
     "why": "L'accumulateur part de 0."
    },
    {
     "q": "Que fait const copie = { ...commande, statut: 'livree' } ?",
     "options": [
      "Modifie la commande d'origine",
      "Crée une nouvelle commande copiée dont le statut est remplacé",
      "Supprime le statut",
      "Provoque une erreur"
     ],
     "answer": 1,
     "why": "L'original reste intact : pratique pour annuler une modification."
    }
   ],
   "ondea": "<p>Les modules <code>commandes.js</code>, <code>clients.js</code> et <code>produits.js</code> d'Ondea filtrent leurs listes avec <code>filter()</code> (filtre par statut via les puces, recherche texte), trient pour les colonnes cliquables, et <code>statistiques.js</code> utilise <code>reduce()</code> pour le CA par mois, la répartition par statut et le classement des meilleurs clients et produits, ensuite dessinés par <code>charts.js</code>.</p>"
  },
  {
   "id": "js-dom",
   "part": "js",
   "title": "Le DOM : lire et modifier la page",
   "subtitle": "querySelector, textContent, classList, createElement, sécurité",
   "duration": "2 h",
   "feature": "Affichage dynamique des listes et du tableau de bord",
   "intro": "<p>Le <strong>DOM</strong> (Document Object Model) est la représentation de la page HTML sous forme d'arbre d'objets que le JavaScript peut lire et modifier. Chaque balise devient un objet <code>Element</code>.</p>\n<ul>\n<li><strong>Trouver</strong> : <code>document.querySelector('.kpi')</code> (le premier), <code>document.querySelectorAll('tr')</code> (tous). Ils acceptent n'importe quel sélecteur CSS.</li>\n<li><strong>Lire/écrire le texte</strong> : <code>el.textContent = 'Livrée'</code>.</li>\n<li><strong>Changer les classes</strong> : <code>el.classList.add('is-open')</code>, <code>remove</code>, <code>toggle</code>.</li>\n<li><strong>Attributs</strong> : <code>el.setAttribute('aria-expanded', 'true')</code>, <code>el.dataset.status</code>, <code>el.hidden = true</code>.</li>\n<li><strong>Créer</strong> : <code>document.createElement('li')</code> puis <code>parent.append(li)</code>.</li>\n</ul>\n<p><strong>Sécurité :</strong> <code>innerHTML</code> interprète du HTML. Si on y insère un texte saisi par un utilisateur (un nom de client « &lt;img onerror=…&gt; »), on ouvre une faille <strong>XSS</strong>. Règle : <code>textContent</code> pour les données, ou bien on <strong>échappe</strong> les caractères spéciaux avant <code>innerHTML</code>.</p>",
   "example": [
    {
     "lang": "js",
     "code": "// Trouver des éléments avec des sélecteurs CSS\nconst titre = document.querySelector('h1');\nconst lignes = document.querySelectorAll('#liste-commandes tr');\nconsole.log(lignes.length);\n\n// Modifier le texte (sûr : aucun HTML interprété)\ntitre.textContent = 'Commandes (12)';\n\n// Classes et attributs\nconst panneau = document.querySelector('#panneau-notifs');\npanneau.classList.toggle('is-open');\npanneau.hidden = false;\ndocument.querySelector('[aria-controls=\"panneau-notifs\"]').setAttribute('aria-expanded', 'true');\n\n// Créer une ligne de tableau proprement\nfunction creerLigne(commande) {\n  const tr = document.createElement('tr');\n  const tdNum = document.createElement('td');\n  tdNum.textContent = commande.numero;           // jamais d'HTML injecté\n  const tdClient = document.createElement('td');\n  tdClient.textContent = commande.client;\n  tr.append(tdNum, tdClient);\n  tr.dataset.id = commande.id;                   // data-id=\"...\"\n  return tr;\n}\ndocument.querySelector('#liste-commandes').append(creerLigne({ id: 9, numero: 'CMD-0050', client: 'Visso' }));\n\n// Si on veut un gabarit HTML : ÉCHAPPER les données d'abord\nconst echapper = (s) => String(s).replace(/[&<>\"']/g, (c) =>\n  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', \"'\": '&#39;' }[c]));\nconst nom = '<img src=x onerror=alert(1)>';      // saisie malveillante\ndocument.querySelector('#fiche').innerHTML = `<h2>${echapper(nom)}</h2>`; // affiché comme du texte"
    }
   ],
   "explain": "<ul>\n<li><code>querySelector</code> renvoie <code>null</code> si rien n'est trouvé : <code>null.textContent</code> provoque une erreur « Cannot read properties of null ».</li>\n<li><code>querySelectorAll</code> renvoie une <code>NodeList</code> : on la parcourt avec <code>forEach</code> ou <code>for…of</code>.</li>\n<li><code>append()</code> accepte plusieurs éléments ou du texte.</li>\n<li><code>dataset.id = 9</code> crée l'attribut <code>data-id=\"9\"</code> : on retrouvera la commande au clic.</li>\n<li>La fonction <code>echapper</code> remplace <code>&lt;</code> par <code>&amp;lt;</code>, etc. : le navigateur affiche les symboles au lieu de les interpréter.</li>\n<li>Pour beaucoup d'éléments, on construit la chaîne entière puis on fait <strong>un seul</strong> <code>innerHTML</code> (plus rapide que 100 <code>append</code>).</li>\n</ul>",
   "demo-html": "<h2 id=\"t\">Clients (0)</h2>\n<form id=\"f\"><label for=\"n\">Nom du client</label> <input id=\"n\" value=\"&lt;b&gt;Brico&lt;/b&gt; Sud\"> <button>Ajouter</button></form>\n<ul id=\"l\"></ul>\n<p><small>Essayez de saisir du HTML : il est affiché comme du texte, pas interprété.</small></p>",
   "demo-css": "body{font-family:system-ui;padding:1rem}\nli{padding:.35rem .6rem;border:1px solid #e2dbcc;border-radius:8px;margin:.3rem 0;list-style:none;display:flex;justify-content:space-between}\nli.nouveau{border-color:#c9a14a;background:#faf3e0}",
   "demo-js": "const liste = document.getElementById('l');\ndocument.getElementById('f').addEventListener('submit', (e) => {\n  e.preventDefault();\n  const li = document.createElement('li');\n  li.textContent = document.getElementById('n').value;   // sûr\n  li.classList.add('nouveau');\n  const btn = document.createElement('button');\n  btn.textContent = 'Retirer';\n  btn.addEventListener('click', () => { li.remove(); maj(); });\n  li.append(btn);\n  liste.append(li);\n  maj();\n});\nfunction maj() {\n  document.getElementById('t').textContent = `Clients (${liste.children.length})`;\n  console.log('Nombre de clients :', liste.children.length);\n}",
   "guided": "<p>Affichez les indicateurs du tableau de bord à partir des données.</p>\n<ol>\n<li>Pour chaque élément du tableau <code>kpis</code>, créez un <code>&lt;article class=\"kpi\"&gt;</code> contenant un <code>&lt;h3&gt;</code> (le libellé) et un <code>&lt;p&gt;</code> (la valeur), avec <code>textContent</code>.</li>\n<li>Ajoutez chaque article dans <code>#kpis</code>.</li>\n<li>Si la valeur dépasse 10, ajoutez la classe <code>alerte</code> à l'article.</li>\n<li>Mettez à jour le titre <code>#titre</code> : <code>Tableau de bord (4 indicateurs)</code>.</li>\n</ol>",
   "guided-html": "<h1 id=\"titre\">Tableau de bord</h1>\n<section id=\"kpis\"></section>",
   "guided-css": "#kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: .6rem; }\n.kpi { border: 1px solid #c9a14a; border-radius: 12px; padding: .6rem; }\n.alerte { background: #fbeccb; }",
   "guided-js": "const kpis = [\n  { libelle: 'En attente', valeur: 12 },\n  { libelle: 'À préparer', valeur: 7 },\n  { libelle: 'À expédier', valeur: 5 },\n  { libelle: 'En retard', valeur: 14 }\n];\n// À vous",
   "checks": [
    [
     "count",
     "#kpis article.kpi",
     "4",
     "4 articles .kpi créés"
    ],
    [
     "count",
     "#kpis .kpi h3",
     "4",
     "Chaque carte a un h3"
    ],
    [
     "count",
     "#kpis .kpi.alerte",
     "=2",
     "2 cartes en alerte (valeur > 10)"
    ],
    [
     "text",
     "#titre",
     "Tableau de bord (4 indicateurs)",
     "Le titre est mis à jour"
    ],
    [
     "js",
     "createElement",
     "createElement est utilisé"
    ]
   ],
   "guided-solution-js": "const kpis = [\n  { libelle: 'En attente', valeur: 12 },\n  { libelle: 'À préparer', valeur: 7 },\n  { libelle: 'À expédier', valeur: 5 },\n  { libelle: 'En retard', valeur: 14 }\n];\nconst zone = document.querySelector('#kpis');\nfor (const k of kpis) {\n  const article = document.createElement('article');\n  article.className = 'kpi';\n  const h3 = document.createElement('h3');\n  h3.textContent = k.libelle;\n  const p = document.createElement('p');\n  p.textContent = k.valeur;\n  if (k.valeur > 10) article.classList.add('alerte');\n  article.append(h3, p);\n  zone.append(article);\n}\ndocument.querySelector('#titre').textContent = `Tableau de bord (${kpis.length} indicateurs)`;",
   "auto": "<p>Écrivez une fonction <code>afficherCommandes(commandes)</code> qui remplit le <code>&lt;tbody&gt;</code> d'un tableau (numéro, client, statut sous forme de badge, montant TTC formaté), avec une fonction <code>echapper()</code> et un seul <code>innerHTML</code>. Ajoutez un état vide (« Aucune commande ») quand le tableau est vide, et un compteur dans le titre. Testez avec un nom de client contenant <code>&lt;script&gt;</code>.</p>",
   "solution": "<p>On construit les lignes avec <code>map</code> puis <code>join('')</code>. Toute donnée passe par <code>echapper()</code> ; seules nos propres balises restent du HTML.</p>",
   "solution-code": [
    {
     "lang": "js",
     "code": "const echapper = (s) => String(s ?? '').replace(/[&<>\"']/g, (c) =>\n  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', \"'\": '&#39;' }[c]));\nconst euros = (c) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(c / 100);\nconst LIBELLES = { attente: 'En attente', validee: 'Validée', livree: 'Livrée', annulee: 'Annulée' };\n\nfunction afficherCommandes(commandes) {\n  const tbody = document.querySelector('#commandes tbody');\n  document.querySelector('#titre').textContent = `Commandes (${commandes.length})`;\n  if (commandes.length === 0) {\n    tbody.innerHTML = '<tr><td colspan=\"4\">Aucune commande</td></tr>';\n    return;\n  }\n  tbody.innerHTML = commandes.map((c) => `\n    <tr data-id=\"${echapper(c.id)}\">\n      <td>${echapper(c.numero)}</td>\n      <td>${echapper(c.client)}</td>\n      <td><span class=\"badge\" data-status=\"${echapper(c.statut)}\">${echapper(LIBELLES[c.statut] || c.statut)}</span></td>\n      <td class=\"num\">${euros(c.ttc)}</td>\n    </tr>`).join('');\n}\nafficherCommandes([{ id: 1, numero: 'CMD-0042', client: '<script>alert(1)</script>', statut: 'livree', ttc: 25680 }]);"
    }
   ],
   "quiz": [
    {
     "q": "Que renvoie document.querySelector('.absent') si aucun élément ne correspond ?",
     "options": [
      "undefined",
      "null",
      "Une liste vide",
      "false"
     ],
     "answer": 1,
     "why": "Toujours tester avant d'utiliser le résultat."
    },
    {
     "q": "Pourquoi préférer textContent à innerHTML pour afficher un nom de client ?",
     "options": [
      "C'est plus rapide à taper",
      "textContent n'interprète pas le HTML : pas de faille XSS",
      "innerHTML n'existe plus",
      "textContent met en forme le texte"
     ],
     "answer": 1,
     "why": "Une saisie malveillante reste du texte inoffensif."
    },
    {
     "q": "Comment ajouter la classe is-open si elle est absente et l'enlever sinon ?",
     "options": [
      "el.class = 'is-open'",
      "el.classList.toggle('is-open')",
      "el.addClass('is-open')",
      "el.style.toggle('is-open')"
     ],
     "answer": 1,
     "why": "toggle renvoie aussi true/false selon le nouvel état."
    },
    {
     "q": "Que crée el.dataset.id = 9 ?",
     "options": [
      "Une variable id",
      "L'attribut data-id=\"9\" sur l'élément",
      "Un id=\"9\"",
      "Rien"
     ],
     "answer": 1,
     "why": "dataset est le pont entre les attributs data-* et le JS."
    },
    {
     "q": "Que fait document.createElement('li') ?",
     "options": [
      "Ajoute un li dans la page",
      "Crée un élément li en mémoire, qu'il faut ensuite insérer avec append",
      "Cherche un li",
      "Supprime les li"
     ],
     "answer": 1,
     "why": "Il n'apparaît que lorsqu'on l'ajoute à un parent présent dans la page."
    }
   ],
   "ondea": "<p>Ondea Commandes est construit sur ce principe : chaque module (ex. <code>dashboard.js</code>) fabrique son écran en HTML puis l'insère dans le <code>main</code>. Pour la sécurité, <code>utils.js</code> fournit un gabarit étiqueté <code>html`…`</code> qui <strong>échappe automatiquement</strong> toute valeur interpolée grâce à <code>esc()</code> et une table <code>ESC_MAP</code> — sauf si elle a été marquée sûre (<code>SafeHtml</code>). C'est la version professionnelle de la fonction <code>echapper</code>.</p>"
  },
  {
   "id": "js-evenements",
   "part": "js",
   "title": "Événements",
   "subtitle": "addEventListener, objet event, délégation, clavier",
   "duration": "1 h 30",
   "feature": "Boutons d'action, raccourcis clavier, navigation",
   "intro": "<p>Un <strong>événement</strong> est quelque chose qui se produit : un clic, une touche pressée, un champ modifié, la page chargée, l'adresse qui change. On demande au navigateur : « quand <em>cet événement</em> arrive sur <em>cet élément</em>, exécute <em>cette fonction</em> ».</p>\n<p><code>element.addEventListener('click', maFonction)</code></p>\n<p>Événements courants : <code>click</code>, <code>input</code> (à chaque frappe), <code>change</code> (valeur validée), <code>submit</code> (formulaire), <code>keydown</code> (touche), <code>hashchange</code> (adresse #), <code>DOMContentLoaded</code> (HTML prêt).</p>\n<p>La fonction reçoit un objet <code>event</code> : <code>event.target</code> (l'élément cliqué), <code>event.key</code> (la touche), <code>event.preventDefault()</code> (annule le comportement par défaut).</p>\n<p>La <strong>délégation</strong> : au lieu de poser un écouteur sur chacun des 200 boutons d'un tableau, on en pose <strong>un seul</strong> sur le parent, et on regarde quel bouton a été cliqué. Ça fonctionne même pour les lignes ajoutées plus tard.</p>",
   "example": [
    {
     "lang": "js",
     "code": "// 1. Un écouteur simple\nconst btnTheme = document.querySelector('#btn-theme');\nbtnTheme.addEventListener('click', () => {\n  document.documentElement.classList.toggle('dark');\n});\n\n// 2. Délégation : UN écouteur pour tous les boutons du tableau\n//    HTML : <button data-action=\"voir\" data-id=\"42\">Voir</button>\ndocument.querySelector('#table-commandes').addEventListener('click', (event) => {\n  // closest() remonte jusqu'au bouton même si on clique sur son icône\n  const bouton = event.target.closest('[data-action]');\n  if (!bouton) return;                     // clic ailleurs : on ignore\n\n  const { action, id } = bouton.dataset;\n  if (action === 'voir') ouvrirCommande(id);\n  else if (action === 'annuler') confirmerAnnulation(id);\n});\n\n// 3. Raccourcis clavier : Ctrl+K = recherche, Échap = fermer\ndocument.addEventListener('keydown', (event) => {\n  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {\n    event.preventDefault();                // empêche le raccourci du navigateur\n    document.querySelector('#recherche').focus();\n  }\n  if (event.key === 'Escape') fermerPanneaux();\n});\n\n// 4. Saisie en direct dans un champ de recherche\ndocument.querySelector('#recherche').addEventListener('input', (event) => {\n  filtrerCommandes(event.target.value.trim());\n});"
    }
   ],
   "explain": "<ul>\n<li>On passe la fonction <strong>sans parenthèses</strong> : <code>addEventListener('click', ouvrir)</code>. Avec parenthèses, elle serait exécutée tout de suite.</li>\n<li><code>event.target</code> est l'élément le plus profond cliqué (une icône SVG dans le bouton…) ; <code>closest('[data-action]')</code> remonte au bouton.</li>\n<li>Les événements « remontent » (bubbling) de l'enfant vers les parents : c'est ce qui rend la délégation possible.</li>\n<li><code>metaKey</code> est la touche ⌘ sur Mac : on gère les deux systèmes.</li>\n<li><code>removeEventListener</code> retire un écouteur (avec la même fonction nommée).</li>\n<li>Un <code>&lt;button&gt;</code> réagit au clic, à Entrée et à Espace : un écouteur <code>click</code> suffit pour la souris <strong>et</strong> le clavier.</li>\n</ul>",
   "demo-html": "<table id=\"t\"><tbody>\n  <tr><td>CMD-0042</td><td><button data-action=\"voir\" data-id=\"42\">👁 Voir</button> <button data-action=\"dupliquer\" data-id=\"42\">⧉ Dupliquer</button></td></tr>\n  <tr><td>CMD-0043</td><td><button data-action=\"voir\" data-id=\"43\">👁 Voir</button> <button data-action=\"dupliquer\" data-id=\"43\">⧉ Dupliquer</button></td></tr>\n</tbody></table>\n<p id=\"info\">Cliquez un bouton, ou appuyez sur Ctrl + K.</p>\n<input id=\"rech\" placeholder=\"Recherche (Ctrl+K)\">",
   "demo-css": "body{font-family:system-ui;padding:1rem}\ntd{padding:.4rem}\nbutton{border:1px solid #c9a14a;background:#fff;border-radius:8px;padding:.3rem .6rem}\n#info{font-weight:700;color:#614608}",
   "demo-js": "let n = 44;\ndocument.getElementById('t').addEventListener('click', (e) => {\n  const b = e.target.closest('[data-action]');\n  if (!b) return;\n  const { action, id } = b.dataset;\n  document.getElementById('info').textContent = `Action « ${action} » sur la commande ${id}`;\n  console.log(action, id);\n  if (action === 'dupliquer') {\n    const tr = document.createElement('tr');\n    tr.innerHTML = `<td>CMD-00${n}</td><td><button data-action=\"voir\" data-id=\"${n}\">👁 Voir</button> <button data-action=\"dupliquer\" data-id=\"${n}\">⧉ Dupliquer</button></td>`;\n    n++;\n    document.querySelector('#t tbody').append(tr);   // le nouveau bouton fonctionne aussi !\n  }\n});\ndocument.addEventListener('keydown', (e) => {\n  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); document.getElementById('rech').focus(); console.log('Raccourci Ctrl+K'); }\n});",
   "guided": "<p>Faites fonctionner la file de préparation par délégation.</p>\n<ol>\n<li>Posez <strong>un seul</strong> écouteur <code>click</code> sur <code>#file</code>.</li>\n<li>Avec <code>closest('[data-action]')</code>, récupérez le bouton cliqué.</li>\n<li>Si l'action est <code>preparer</code>, ajoutez la classe <code>preparee</code> à la ligne <code>&lt;li&gt;</code> parente (<code>closest('li')</code>) et changez le texte du bouton en <code>Préparée</code>.</li>\n<li>Mettez à jour <code>#compteur</code> : nombre de lignes <code>.preparee</code>.</li>\n</ol>\n<p>Le test cliquera automatiquement sur les deux premiers boutons.</p>",
   "guided-html": "<ul id=\"file\">\n  <li>CMD-0043 <button data-action=\"preparer\" data-id=\"43\">Préparer</button></li>\n  <li>CMD-0044 <button data-action=\"preparer\" data-id=\"44\">Préparer</button></li>\n  <li>CMD-0047 <button data-action=\"preparer\" data-id=\"47\">Préparer</button></li>\n</ul>\n<p>Préparées : <span id=\"compteur\">0</span></p>",
   "guided-css": ".preparee { text-decoration: line-through; opacity: .7; }",
   "guided-js": "// À vous",
   "checks": [
    [
     "click",
     "#file li:nth-child(1) button",
     "Clic simulé sur la 1re commande"
    ],
    [
     "click",
     "#file li:nth-child(2) button",
     "Clic simulé sur la 2e commande"
    ],
    [
     "count",
     "#file li.preparee",
     "2",
     "Deux lignes marquées .preparee"
    ],
    [
     "text",
     "#compteur",
     "2",
     "Le compteur affiche 2"
    ],
    [
     "text",
     "#file li:nth-child(1) button",
     "Préparée",
     "Le texte du bouton a changé"
    ],
    [
     "js",
     "closest\\(",
     "closest() est utilisé (délégation)"
    ]
   ],
   "guided-solution-js": "document.querySelector('#file').addEventListener('click', (event) => {\n  const bouton = event.target.closest('[data-action]');\n  if (!bouton) return;\n  if (bouton.dataset.action === 'preparer') {\n    bouton.closest('li').classList.add('preparee');\n    bouton.textContent = 'Préparée';\n    bouton.disabled = true;\n    document.querySelector('#compteur').textContent = document.querySelectorAll('#file li.preparee').length;\n  }\n});",
   "auto": "<p>Ajoutez à votre version d'Ondea : (1) un bouton thème qui bascule clair/sombre, (2) un menu mobile qui s'ouvre au clic, se ferme avec Échap et au clic sur le fond assombri, et met à jour <code>aria-expanded</code>, (3) le raccourci <code>Ctrl+K</code> vers la recherche, (4) des boutons « Voir / Modifier / Supprimer » par ligne de tableau gérés par délégation. Vérifiez qu'aucun écouteur n'est ajouté deux fois (compteur dans la console).</p>",
   "solution": "<p>On centralise les écouteurs globaux dans une fonction <code>initialiser()</code> appelée <strong>une seule fois</strong> au démarrage. C'est ce que fait <code>app.js</code> d'Ondea.</p>",
   "solution-code": [
    {
     "lang": "js",
     "code": "function initialiser() {\n  const menu = document.querySelector('#sidebar');\n  const btnMenu = document.querySelector('#btn-menu');\n  const fond = document.querySelector('.overlay');\n  const ouvrirMenu = (ouvert) => {\n    menu.classList.toggle('is-open', ouvert);\n    btnMenu.setAttribute('aria-expanded', String(ouvert));\n  };\n  btnMenu.addEventListener('click', () => ouvrirMenu(!menu.classList.contains('is-open')));\n  fond.addEventListener('click', () => ouvrirMenu(false));\n\n  document.querySelector('#btn-theme').addEventListener('click', () => {\n    const html = document.documentElement;\n    html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';\n  });\n\n  document.addEventListener('keydown', (e) => {\n    if (e.key === 'Escape') ouvrirMenu(false);\n    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {\n      e.preventDefault();\n      document.querySelector('#recherche').focus();\n    }\n  });\n\n  document.querySelector('#table-commandes').addEventListener('click', (e) => {\n    const b = e.target.closest('[data-action]');\n    if (!b) return;\n    console.log(`Action ${b.dataset.action} sur ${b.dataset.id}`);\n  });\n}\ndocument.addEventListener('DOMContentLoaded', initialiser);"
    }
   ],
   "quiz": [
    {
     "q": "Quelle écriture est correcte ?",
     "options": [
      "btn.addEventListener('click', ouvrir())",
      "btn.addEventListener('click', ouvrir)",
      "btn.onclick('ouvrir')",
      "btn.addEventListener(click, ouvrir)"
     ],
     "answer": 1,
     "why": "Avec ouvrir(), la fonction s'exécuterait immédiatement."
    },
    {
     "q": "Que fait event.preventDefault() sur un submit ?",
     "options": [
      "Empêche l'envoi et le rechargement de la page",
      "Supprime le formulaire",
      "Arrête tout le JavaScript",
      "Vide les champs"
     ],
     "answer": 0,
     "why": "On peut alors valider et enregistrer en JavaScript."
    },
    {
     "q": "Quel est l'intérêt de la délégation d'événements ?",
     "options": [
      "Rendre les clics plus rapides",
      "Un seul écouteur sur le parent gère tous les enfants, même ajoutés plus tard",
      "Éviter le HTML",
      "Remplacer les boutons"
     ],
     "answer": 1,
     "why": "Moins d'écouteurs, moins de bugs de doublons."
    },
    {
     "q": "Quel événement se déclenche à chaque frappe dans un champ ?",
     "options": [
      "change",
      "input",
      "submit",
      "keyup uniquement"
     ],
     "answer": 1,
     "why": "change ne se déclenche qu'à la validation (perte du focus)."
    },
    {
     "q": "Que renvoie event.target.closest('[data-action]') ?",
     "options": [
      "Le premier enfant ayant data-action",
      "L'élément lui-même ou son ancêtre le plus proche ayant data-action (ou null)",
      "Tous les boutons",
      "Le parent direct"
     ],
     "answer": 1,
     "why": "closest remonte l'arbre du DOM."
    }
   ],
   "ondea": "<p>Ondea utilise massivement la délégation : les boutons portent <code>data-action</code> et un écouteur par écran les dispatche. Le routeur recrée l'écran à chaque navigation, ce qui évite les écouteurs dupliqués (commentaire de <code>router.js</code> : « vue recréée à chaque navigation (aucun écouteur dupliqué) »). <code>app.js</code> gère les raccourcis clavier et la synchronisation entre onglets via l'événement <code>storage</code>.</p>"
  },
  {
   "id": "js-formulaires",
   "part": "js",
   "title": "Formulaires en JavaScript",
   "subtitle": "submit, FormData, validation, messages d'erreur accessibles",
   "duration": "2 h",
   "feature": "Connexion, création de clients et de commandes",
   "intro": "<p>Le HTML offre une validation de base, mais une application professionnelle valide aussi en JavaScript pour : afficher des <strong>messages clairs en français</strong> sous chaque champ, appliquer des <strong>règles métier</strong> (un SIRET valide, une date de livraison après aujourd'hui, une quantité inférieure au stock), et <strong>préparer les données</strong> avant l'enregistrement.</p>\n<p>Le schéma est toujours le même :</p>\n<ol>\n<li>Écouter <code>submit</code> sur le formulaire et appeler <code>event.preventDefault()</code>.</li>\n<li>Lire les valeurs avec <code>new FormData(form)</code> (basé sur les attributs <code>name</code>).</li>\n<li>Valider et construire un objet <code>erreurs</code>.</li>\n<li>S'il y a des erreurs : les afficher, marquer les champs <code>aria-invalid=\"true\"</code>, mettre le focus sur le premier champ en erreur.</li>\n<li>Sinon : enregistrer, afficher un message de succès, réinitialiser.</li>\n</ol>\n<p>Attention : <code>input.value</code> est <strong>toujours une chaîne</strong>. Pour calculer : <code>Number(...)</code>.</p>",
   "example": [
    {
     "lang": "js",
     "code": "const form = document.querySelector('#form-client');\n\nform.addEventListener('submit', (event) => {\n  event.preventDefault();                       // pas de rechargement\n\n  // 1. Lire toutes les valeurs d'un coup (clé = attribut name)\n  const donnees = Object.fromEntries(new FormData(form));\n  donnees.nom = donnees.nom.trim();\n\n  // 2. Valider : un objet { nomDuChamp: 'message' }\n  const erreurs = {};\n  if (donnees.nom.length < 2) erreurs.nom = 'La raison sociale doit contenir au moins 2 caractères.';\n  if (donnees.email && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(donnees.email)) {\n    erreurs.email = \"L'adresse e-mail n'est pas valide (exemple : contact@societe.fr).\";\n  }\n  if (!/^\\d{5}$/.test(donnees.cp)) erreurs.cp = 'Le code postal doit contenir 5 chiffres.';\n\n  // 3. Afficher les erreurs (ou les effacer)\n  for (const champ of form.elements) {\n    if (!champ.name) continue;\n    const zone = document.querySelector(`#err-${champ.name}`);\n    const message = erreurs[champ.name];\n    champ.setAttribute('aria-invalid', message ? 'true' : 'false');\n    if (zone) zone.textContent = message || '';\n  }\n\n  // 4. Focus sur le premier champ en erreur\n  const premier = Object.keys(erreurs)[0];\n  if (premier) {\n    form.elements[premier].focus();\n    return;                                     // on n'enregistre pas\n  }\n\n  // 5. Succès\n  enregistrerClient(donnees);\n  document.querySelector('#statut').textContent = `Client « ${donnees.nom} » enregistré.`;\n  form.reset();\n});"
    }
   ],
   "explain": "<ul>\n<li><code>Object.fromEntries(new FormData(form))</code> transforme le formulaire en objet <code>{ nom: '…', email: '…', cp: '…' }</code>.</li>\n<li><code>trim()</code> supprime les espaces au début et à la fin : « Brico  » devient « Brico ».</li>\n<li>Les <strong>expressions régulières</strong> testent un format : <code>/^\\d{5}$/</code> = « du début (^) à la fin ($), exactement 5 chiffres ».</li>\n<li>Chaque champ a une zone d'erreur reliée par <code>aria-describedby=\"err-cp\"</code> : le lecteur d'écran lit l'erreur avec le champ.</li>\n<li><code>aria-invalid=\"true\"</code> annonce le champ comme invalide et permet de le styler en CSS : <code>[aria-invalid=\"true\"]</code>.</li>\n<li>La zone <code>#statut</code> a <code>role=\"status\"</code> : le succès est annoncé.</li>\n</ul>",
   "demo-html": "<form id=\"f\" novalidate>\n  <label for=\"nom\">Raison sociale *</label>\n  <input id=\"nom\" name=\"nom\" aria-describedby=\"err-nom\"><p class=\"err\" id=\"err-nom\"></p>\n  <label for=\"email\">E-mail</label>\n  <input id=\"email\" name=\"email\" type=\"email\" aria-describedby=\"err-email\"><p class=\"err\" id=\"err-email\"></p>\n  <label for=\"cp\">Code postal *</label>\n  <input id=\"cp\" name=\"cp\" inputmode=\"numeric\" aria-describedby=\"err-cp\"><p class=\"err\" id=\"err-cp\"></p>\n  <button>Enregistrer</button>\n  <p id=\"statut\" role=\"status\"></p>\n</form>",
   "demo-css": "body{font-family:system-ui;padding:1rem}\nform{display:grid;max-width:340px}\ninput{font:inherit;padding:.5rem;border:1px solid #888;border-radius:8px}\n[aria-invalid=\"true\"]{border:2px solid #b91c1c;background:#fff6f5}\n.err{color:#7a1410;font-size:.85rem;margin:.2rem 0 .6rem;min-height:1em}\n#statut{color:#0b4a26;font-weight:700}\nbutton{padding:.6rem;border-radius:8px;border:0;background:#171a26;color:#fdf8ea}",
   "demo-js": "const f = document.getElementById('f');\nf.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const d = Object.fromEntries(new FormData(f));\n  const err = {};\n  if (d.nom.trim().length < 2) err.nom = 'Au moins 2 caractères.';\n  if (d.email && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(d.email)) err.email = 'E-mail invalide (ex. : contact@societe.fr).';\n  if (!/^\\d{5}$/.test(d.cp)) err.cp = '5 chiffres attendus.';\n  for (const c of f.elements) {\n    if (!c.name) continue;\n    c.setAttribute('aria-invalid', err[c.name] ? 'true' : 'false');\n    document.getElementById('err-' + c.name).textContent = err[c.name] || '';\n  }\n  const premier = Object.keys(err)[0];\n  if (premier) { f.elements[premier].focus(); console.log('Erreurs :', err); return; }\n  document.getElementById('statut').textContent = `Client « ${d.nom.trim()} » enregistré.`;\n  console.log('Données valides :', d);\n  f.reset();\n});",
   "guided": "<p>Validez le formulaire d'ajout de ligne de commande.</p>\n<ol>\n<li>Écrivez une fonction <code>validerLigne(donnees, stockDisponible)</code> qui renvoie un objet d'erreurs.</li>\n<li>Règles : <code>produit</code> obligatoire → <code>'Choisissez un produit.'</code> ; <code>quantite</code> doit être un entier ≥ 1 → <code>'Quantité invalide.'</code> ; quantité ≤ stock disponible → <code>'Stock insuffisant.'</code></li>\n<li>Rappel : les valeurs du formulaire sont des chaînes, convertissez avec <code>Number()</code>. <code>Number.isInteger()</code> teste un entier.</li>\n</ol>",
   "guided-js": "// donnees ressemble à { produit: 'PER-18V', quantite: '3' }\nfunction validerLigne(donnees, stockDisponible) {\n  const erreurs = {};\n  // À vous\n  return erreurs;\n}",
   "checks": [
    [
     "eval",
     "JSON.stringify(validerLigne({ produit: 'PER-18V', quantite: '3' }, 5))",
     "{}",
     "Ligne valide : aucune erreur"
    ],
    [
     "eval",
     "validerLigne({ produit: '', quantite: '1' }, 5).produit",
     "Choisissez un produit.",
     "Produit manquant détecté"
    ],
    [
     "eval",
     "validerLigne({ produit: 'A', quantite: '0' }, 5).quantite",
     "Quantité invalide.",
     "Quantité 0 refusée"
    ],
    [
     "eval",
     "validerLigne({ produit: 'A', quantite: '2.5' }, 5).quantite",
     "Quantité invalide.",
     "Quantité décimale refusée"
    ],
    [
     "eval",
     "validerLigne({ produit: 'A', quantite: '8' }, 5).quantite",
     "Stock insuffisant.",
     "Stock insuffisant détecté"
    ]
   ],
   "guided-solution-js": "function validerLigne(donnees, stockDisponible) {\n  const erreurs = {};\n  const qte = Number(donnees.quantite);\n  if (!donnees.produit) erreurs.produit = 'Choisissez un produit.';\n  if (!Number.isInteger(qte) || qte < 1) erreurs.quantite = 'Quantité invalide.';\n  else if (qte > stockDisponible) erreurs.quantite = 'Stock insuffisant.';\n  return erreurs;\n}",
   "auto": "<p>Programmez l'écran de connexion d'Ondea : identifiant et mot de passe obligatoires, message d'erreur générique « Identifiant ou mot de passe incorrect » (ne jamais dire lequel est faux), blocage 30 secondes après 5 échecs avec un compte à rebours, bouton « afficher le mot de passe » (<code>type</code> qui passe de <code>password</code> à <code>text</code>, avec <code>aria-pressed</code>). Comptes de test : <code>directeur / Directeur2026!</code> et <code>magasinier / Magasin2026!</code>. Après connexion, affichez « Bonjour, Directeur » ou « Bonjour, Magasinier ».</p>",
   "solution": "<p>Le message générique évite d'aider un attaquant à deviner les identifiants. <strong>Important :</strong> une vérification en JavaScript dans le navigateur n'est <strong>pas</strong> une vraie sécurité (le code est lisible par tous) ; Ondea le signale lui-même. Une vraie authentification se fait côté serveur (PHP, Node…), ce que vous verrez dans le CCP 2.</p>",
   "solution-code": [
    {
     "lang": "js",
     "code": "const COMPTES = { directeur: { mdp: 'Directeur2026!', role: 'Directeur' }, magasinier: { mdp: 'Magasin2026!', role: 'Magasinier' } };\nlet echecs = 0;\nlet bloqueJusqua = 0;\nconst form = document.querySelector('#login');\nconst msg = document.querySelector('#msg');\n\ndocument.querySelector('#voir-mdp').addEventListener('click', (e) => {\n  const champ = document.querySelector('#mdp');\n  const visible = champ.type === 'password';\n  champ.type = visible ? 'text' : 'password';\n  e.currentTarget.setAttribute('aria-pressed', String(visible));\n});\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  if (Date.now() < bloqueJusqua) return;\n  const { identifiant, mdp } = Object.fromEntries(new FormData(form));\n  if (!identifiant || !mdp) { msg.textContent = 'Renseignez l’identifiant et le mot de passe.'; return; }\n  const compte = COMPTES[identifiant.trim().toLowerCase()];\n  if (!compte || compte.mdp !== mdp) {\n    echecs++;\n    msg.textContent = 'Identifiant ou mot de passe incorrect.';\n    if (echecs >= 5) bloquer();\n    return;\n  }\n  echecs = 0;\n  msg.textContent = `Bonjour, ${compte.role}`;\n});\n\nfunction bloquer() {\n  bloqueJusqua = Date.now() + 30000;\n  const bouton = form.querySelector('button[type=\"submit\"]');\n  bouton.disabled = true;\n  const minuteur = setInterval(() => {\n    const reste = Math.ceil((bloqueJusqua - Date.now()) / 1000);\n    msg.textContent = `Trop de tentatives. Réessayez dans ${reste} s.`;\n    if (reste <= 0) { clearInterval(minuteur); bouton.disabled = false; echecs = 0; msg.textContent = ''; }\n  }, 1000);\n}"
    }
   ],
   "quiz": [
    {
     "q": "Quel type a toujours input.value ?",
     "options": [
      "number",
      "string",
      "Cela dépend du type de l'input",
      "object"
     ],
     "answer": 1,
     "why": "Même pour type=\"number\" : il faut convertir avec Number()."
    },
    {
     "q": "Que fait Object.fromEntries(new FormData(form)) ?",
     "options": [
      "Crée un objet { name: valeur } à partir des champs du formulaire",
      "Envoie le formulaire au serveur",
      "Vide le formulaire",
      "Valide le formulaire"
     ],
     "answer": 0,
     "why": "FormData se base sur l'attribut name de chaque champ."
    },
    {
     "q": "Que signifie l'expression régulière /^\\d{5}$/ ?",
     "options": [
      "Au moins 5 chiffres",
      "Exactement 5 chiffres, rien d'autre",
      "5 lettres",
      "Un nombre inférieur à 5"
     ],
     "answer": 1,
     "why": "^ = début, \\d = chiffre, {5} = 5 fois, $ = fin."
    },
    {
     "q": "Comment signaler un champ invalide aux lecteurs d'écran ?",
     "options": [
      "En le colorant en rouge",
      "aria-invalid=\"true\" et un message relié par aria-describedby",
      "Avec un alert()",
      "En le désactivant"
     ],
     "answer": 1,
     "why": "Et on déplace le focus sur le premier champ en erreur."
    },
    {
     "q": "Une vérification de mot de passe en JavaScript côté navigateur est-elle une vraie sécurité ?",
     "options": [
      "Oui, si le code est minifié",
      "Non : le code est visible et modifiable, la vraie sécurité est côté serveur",
      "Oui, avec HTTPS",
      "Oui, si on utilise const"
     ],
     "answer": 1,
     "why": "Ondea l'indique clairement : « contrôle d'accès local »."
    }
   ],
   "ondea": "<p>Dans Ondea, <code>auth.js</code> ne stocke jamais les mots de passe en clair : il les <strong>sale et les hache</strong> (SHA-256 itéré via WebCrypto) et compare les empreintes ; il gère aussi le verrouillage. <code>ui.js</code> affiche les erreurs sous les champs à partir d'une <code>ValidationError</code> qui contient <code>fields</code> (même principe que l'objet <code>erreurs</code>). Le README précise que ces comptes sont un contrôle d'accès local, pas une authentification serveur.</p>"
  },
  {
   "id": "js-json-localstorage",
   "part": "js",
   "title": "JSON et LocalStorage",
   "subtitle": "Sérialiser, mémoriser des préférences, exporter une sauvegarde",
   "duration": "1 h 30",
   "feature": "Thème mémorisé, session, sauvegarde et restauration",
   "intro": "<p>Quand on recharge la page, toutes les variables JavaScript disparaissent. Pour garder une information, le navigateur offre le <strong>LocalStorage</strong> : un petit espace (environ 5 Mo) qui stocke des paires clé/valeur, <strong>uniquement des chaînes</strong>, et qui persiste même après fermeture du navigateur.</p>\n<ul>\n<li><code>localStorage.setItem('cle', 'valeur')</code> : enregistrer ;</li>\n<li><code>localStorage.getItem('cle')</code> : lire (renvoie <code>null</code> si absent) ;</li>\n<li><code>localStorage.removeItem('cle')</code> : supprimer.</li>\n</ul>\n<p>Pour stocker un objet ou un tableau, on le transforme en texte au format <strong>JSON</strong> (JavaScript Object Notation) avec <code>JSON.stringify()</code>, et on le relit avec <code>JSON.parse()</code>. JSON est aussi le format universel d'échange entre applications et des fichiers de sauvegarde.</p>\n<p>LocalStorage convient aux <strong>petites données</strong> : thème, préférences, brouillon, progression. Pour des centaines de commandes et des images, on utilise IndexedDB (chapitre suivant).</p>",
   "example": [
    {
     "lang": "js",
     "code": "const PREFIXE = 'oc.';     // évite les collisions avec d'autres applis du même domaine\n\n// Écrire et lire une valeur simple\nlocalStorage.setItem(PREFIXE + 'theme', 'dark');\nconst theme = localStorage.getItem(PREFIXE + 'theme') || 'light';   // valeur par défaut\n\n// Objet → JSON → LocalStorage\nconst preferences = { lignesParPage: 25, triCommandes: 'date-desc', sons: false };\nlocalStorage.setItem(PREFIXE + 'prefs', JSON.stringify(preferences));\n\n// LocalStorage → JSON → objet, avec protection contre un contenu corrompu\nfunction lirePrefs() {\n  try {\n    return JSON.parse(localStorage.getItem(PREFIXE + 'prefs')) ?? {};\n  } catch (erreur) {\n    console.warn('Préférences illisibles, valeurs par défaut utilisées.');\n    return {};\n  }\n}\nconsole.log(lirePrefs().lignesParPage);   // 25\n\n// Exporter une sauvegarde JSON téléchargeable\nfunction exporter(donnees) {\n  const texte = JSON.stringify({ version: 1, date: new Date().toISOString(), donnees }, null, 2);\n  const blob = new Blob([texte], { type: 'application/json' });\n  const lien = document.createElement('a');\n  lien.href = URL.createObjectURL(blob);\n  lien.download = `ondea-sauvegarde-${new Date().toISOString().slice(0, 10)}.json`;\n  lien.click();                          // déclenche le téléchargement\n  URL.revokeObjectURL(lien.href);        // libère la mémoire\n}"
    }
   ],
   "explain": "<ul>\n<li><code>||</code> fournit une valeur par défaut si <code>getItem</code> renvoie <code>null</code>.</li>\n<li><code>??</code> (coalescence) ne remplace que <code>null</code>/<code>undefined</code>, pas <code>0</code> ni <code>''</code>.</li>\n<li><code>JSON.parse</code> lève une erreur si le texte n'est pas du JSON valide : on l'entoure de <code>try…catch</code>.</li>\n<li><code>JSON.stringify(obj, null, 2)</code> indente le JSON de 2 espaces : lisible par un humain.</li>\n<li>JSON ne connaît pas les dates ni les fonctions : une date devient une chaîne ISO (« 2026-11-03T10:00:00.000Z »).</li>\n<li>Un <code>Blob</code> est un « fichier en mémoire » ; <code>URL.createObjectURL</code> lui donne une adresse temporaire utilisable dans un lien de téléchargement.</li>\n<li>Ne stockez <strong>jamais</strong> de mot de passe ou de donnée sensible en clair dans LocalStorage : tout script de la page peut le lire.</li>\n</ul>",
   "demo-html": "<p>Thème : <button id=\"b\" aria-pressed=\"false\">Sombre</button> — rechargez l'aperçu (bouton ↻) : le choix est conservé.</p>\n<label for=\"n\">Lignes par page</label> <select id=\"n\"><option>10</option><option>25</option><option>50</option></select>\n<pre id=\"json\"></pre>",
   "demo-css": "body{font-family:system-ui;padding:1rem;transition:background .3s}\nbody.dark{background:#0b0c12;color:#f2eee4}\npre{background:#171a26;color:#f4e8c8;padding:.8rem;border-radius:10px;font-size:.85rem}",
   "demo-js": "const K = 'demo.oc.prefs';\nconst lire = () => { try { return JSON.parse(localStorage.getItem(K)) ?? { theme: 'light', lignes: 25 }; } catch { return { theme: 'light', lignes: 25 }; } };\nconst ecrire = (p) => { localStorage.setItem(K, JSON.stringify(p)); afficher(p); };\nfunction afficher(p) {\n  document.body.classList.toggle('dark', p.theme === 'dark');\n  document.getElementById('b').setAttribute('aria-pressed', p.theme === 'dark');\n  document.getElementById('n').value = String(p.lignes);\n  document.getElementById('json').textContent = `localStorage[\"${K}\"] =\\n` + JSON.stringify(p, null, 2);\n}\ndocument.getElementById('b').addEventListener('click', () => { const p = lire(); p.theme = p.theme === 'dark' ? 'light' : 'dark'; ecrire(p); console.log('Thème :', p.theme); });\ndocument.getElementById('n').addEventListener('change', (e) => { const p = lire(); p.lignes = Number(e.target.value); ecrire(p); });\nafficher(lire());",
   "guided": "<p>Créez le petit module de stockage des préférences d'Ondea.</p>\n<ol>\n<li><code>sauver(cle, valeur)</code> enregistre <code>valeur</code> (n'importe quel type) en JSON sous la clé <code>'exo.oc.' + cle</code>.</li>\n<li><code>charger(cle, defaut)</code> renvoie la valeur relue (<code>JSON.parse</code>) ou <code>defaut</code> si la clé est absente <strong>ou</strong> si le contenu est invalide (<code>try…catch</code>).</li>\n</ol>",
   "guided-js": "// À vous",
   "checks": [
    [
     "eval",
     "(sauver('test', { a: 1, liste: [1, 2] }), charger('test', null).liste.length)",
     "2",
     "Un objet est sauvé puis relu"
    ],
    [
     "eval",
     "localStorage.getItem('exo.oc.test')",
     "{\"a\":1,\"liste\":[1,2]}",
     "La valeur est stockée en JSON avec le préfixe"
    ],
    [
     "eval",
     "charger('absente', 'défaut')",
     "défaut",
     "Valeur par défaut si la clé est absente"
    ],
    [
     "eval",
     "(localStorage.setItem('exo.oc.casse', '{oups'), charger('casse', 42))",
     "42",
     "Valeur par défaut si le JSON est invalide"
    ]
   ],
   "guided-solution-js": "const PREFIXE = 'exo.oc.';\nfunction sauver(cle, valeur) {\n  localStorage.setItem(PREFIXE + cle, JSON.stringify(valeur));\n}\nfunction charger(cle, defaut) {\n  const texte = localStorage.getItem(PREFIXE + cle);\n  if (texte === null) return defaut;\n  try {\n    return JSON.parse(texte);\n  } catch (e) {\n    return defaut;\n  }\n}",
   "auto": "<p>Créez une mini-application « Brouillon de commande » : un formulaire (client, produit, quantité, note) dont le contenu est enregistré automatiquement dans LocalStorage à chaque saisie, et restauré au rechargement. Ajoutez un bouton « Exporter en JSON » (téléchargement d'un fichier), un bouton « Importer » (<code>&lt;input type=\"file\" accept=\".json\"&gt;</code> + <code>file.text()</code> + <code>JSON.parse</code> avec vérification du format) et un bouton « Effacer le brouillon ».</p>",
   "solution": "<p>À l'import, on <strong>vérifie</strong> toujours la structure avant d'utiliser les données : un fichier peut provenir d'une autre application ou avoir été modifié à la main.</p>",
   "solution-code": [
    {
     "lang": "js",
     "code": "const CLE = 'oc.brouillon';\nconst form = document.querySelector('#brouillon');\n\nform.addEventListener('input', () => {\n  localStorage.setItem(CLE, JSON.stringify(Object.fromEntries(new FormData(form))));\n});\nfunction restaurer(donnees) {\n  for (const [nom, valeur] of Object.entries(donnees)) {\n    if (form.elements[nom]) form.elements[nom].value = valeur;\n  }\n}\ntry { restaurer(JSON.parse(localStorage.getItem(CLE)) ?? {}); } catch { localStorage.removeItem(CLE); }\n\ndocument.querySelector('#exporter').addEventListener('click', () => {\n  const blob = new Blob([localStorage.getItem(CLE) ?? '{}'], { type: 'application/json' });\n  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: 'brouillon-commande.json' });\n  a.click();\n  URL.revokeObjectURL(a.href);\n});\ndocument.querySelector('#importer').addEventListener('change', async (e) => {\n  const fichier = e.target.files[0];\n  if (!fichier) return;\n  try {\n    const donnees = JSON.parse(await fichier.text());\n    if (typeof donnees !== 'object' || donnees === null || !('client' in donnees)) throw new Error('Format inattendu');\n    restaurer(donnees);\n    localStorage.setItem(CLE, JSON.stringify(donnees));\n  } catch (err) {\n    alert('Fichier invalide : ' + err.message);\n  }\n});\ndocument.querySelector('#effacer').addEventListener('click', () => { localStorage.removeItem(CLE); form.reset(); });"
    }
   ],
   "quiz": [
    {
     "q": "Quel type de valeur LocalStorage stocke-t-il ?",
     "options": [
      "Tous les types JavaScript",
      "Uniquement des chaînes de caractères",
      "Uniquement des nombres",
      "Des fichiers"
     ],
     "answer": 1,
     "why": "D'où JSON.stringify pour les objets."
    },
    {
     "q": "Que renvoie localStorage.getItem('inconnue') ?",
     "options": [
      "undefined",
      "''",
      "null",
      "Une erreur"
     ],
     "answer": 2,
     "why": "Pensez à prévoir une valeur par défaut."
    },
    {
     "q": "Que renvoie JSON.parse('{\"stock\": 12}').stock ?",
     "options": [
      "12",
      "'12'",
      "undefined",
      "{\"stock\": 12}"
     ],
     "answer": 0,
     "why": "Le nombre JSON redevient un nombre."
    },
    {
     "q": "Pourquoi entourer JSON.parse d'un try…catch ?",
     "options": [
      "Pour aller plus vite",
      "Parce qu'un texte invalide lève une erreur qui bloquerait le script",
      "C'est obligatoire",
      "Pour chiffrer les données"
     ],
     "answer": 1,
     "why": "Données corrompues ou modifiées à la main : on se protège."
    },
    {
     "q": "Quelle donnée ne faut-il PAS stocker en clair dans LocalStorage ?",
     "options": [
      "Le thème choisi",
      "Le nombre de lignes par page",
      "Un mot de passe",
      "La dernière page visitée"
     ],
     "answer": 2,
     "why": "Tout script de la page y a accès."
    }
   ],
   "ondea": "<p><code>storage.js</code> d'Ondea encapsule LocalStorage avec le préfixe <code>oc.</code> pour le thème, la session (avec expiration), les préférences et quelques réglages légers. Les grosses données sont dans IndexedDB, mais la <strong>sauvegarde complète</strong> (<code>database.js</code>) les exporte en un fichier JSON — comme ceux du dossier <code>sauvegardes/</code> de l'application — et sait les restaurer, images comprises (converties en Data URL).</p>"
  },
  {
   "id": "js-indexeddb",
   "part": "js",
   "title": "IndexedDB et gestion des images",
   "subtitle": "Une vraie base de données dans le navigateur",
   "duration": "2 h 30",
   "feature": "Base locale des commandes et photos (Blob)",
   "intro": "<p><strong>IndexedDB</strong> est une base de données intégrée au navigateur. Contrairement à LocalStorage, elle stocke de <strong>grandes quantités</strong> de données (des centaines de Mo), des <strong>objets</strong> directement (pas besoin de JSON), des <strong>fichiers</strong> (images en <code>Blob</code>), avec des <strong>index</strong> pour chercher vite et des <strong>transactions</strong> pour garantir la cohérence.</p>\n<p>Le vocabulaire :</p>\n<ul>\n<li><strong>Base</strong> (database) : par exemple <code>ondea-commandes</code>, avec un numéro de <strong>version</strong>.</li>\n<li><strong>Magasin d'objets</strong> (object store) : l'équivalent d'une table : <code>clients</code>, <code>orders</code>, <code>files</code>.</li>\n<li><strong>Clé</strong> (keyPath) : la propriété unique de chaque objet, souvent <code>id</code>.</li>\n<li><strong>Index</strong> : permet de chercher par une autre propriété (le statut, le client).</li>\n<li><strong>Transaction</strong> : un groupe d'opérations qui réussissent toutes ou échouent toutes.</li>\n</ul>\n<p>L'API est <strong>asynchrone</strong> et basée sur des événements (<code>onsuccess</code>, <code>onerror</code>). On l'enveloppe dans des <strong>promesses</strong> pour écrire du code clair avec <code>async/await</code> (chapitre suivant).</p>",
   "example": [
    {
     "lang": "js",
     "code": "// 1. Ouvrir (ou créer) la base, version 1\nfunction ouvrirBase() {\n  return new Promise((resolve, reject) => {\n    const requete = indexedDB.open('ondea-cours', 1);\n\n    // Appelé seulement à la création ou quand la version augmente\n    requete.onupgradeneeded = () => {\n      const db = requete.result;\n      const clients = db.createObjectStore('clients', { keyPath: 'id' });\n      clients.createIndex('ville', 'ville');                 // index de recherche\n      db.createObjectStore('files', { keyPath: 'id' });      // pour les images\n    };\n    requete.onsuccess = () => resolve(requete.result);\n    requete.onerror = () => reject(requete.error);\n  });\n}\n\n// 2. Petite fonction utilitaire : transformer une requête en promesse\nconst promesse = (req) => new Promise((ok, ko) => { req.onsuccess = () => ok(req.result); req.onerror = () => ko(req.error); });\n\n// 3. Écrire (put = ajoute ou remplace)\nasync function enregistrerClient(client) {\n  const db = await ouvrirBase();\n  const tx = db.transaction('clients', 'readwrite');\n  await promesse(tx.objectStore('clients').put(client));\n}\n\n// 4. Lire tous les clients d'une ville grâce à l'index\nasync function clientsDeLaVille(ville) {\n  const db = await ouvrirBase();\n  const index = db.transaction('clients').objectStore('clients').index('ville');\n  return promesse(index.getAll(ville));\n}\n\n// 5. Stocker une image choisie par l'utilisateur (un File est un Blob)\nasync function enregistrerPhoto(id, fichier) {\n  const db = await ouvrirBase();\n  const tx = db.transaction('files', 'readwrite');\n  await promesse(tx.objectStore('files').put({ id, nom: fichier.name, blob: fichier }));\n}\n\n// 6. Afficher l'image stockée\nasync function afficherPhoto(id, img) {\n  const db = await ouvrirBase();\n  const enreg = await promesse(db.transaction('files').objectStore('files').get(id));\n  if (enreg) img.src = URL.createObjectURL(enreg.blob);\n}"
    }
   ],
   "explain": "<ul>\n<li><code>indexedDB.open(nom, version)</code> : si la version demandée est plus haute que celle existante, <code>onupgradeneeded</code> s'exécute : c'est le seul endroit où l'on crée des stores et des index (les <strong>migrations</strong>).</li>\n<li><code>transaction('clients', 'readwrite')</code> : par défaut une transaction est en lecture seule (<code>'readonly'</code>).</li>\n<li><code>put</code> ajoute ou remplace ; <code>add</code> échoue si la clé existe ; <code>get(cle)</code>, <code>getAll()</code>, <code>delete(cle)</code>.</li>\n<li>Un <code>File</code> issu d'un <code>&lt;input type=\"file\"&gt;</code> est un <code>Blob</code> : IndexedDB le stocke tel quel, sans conversion.</li>\n<li><code>URL.createObjectURL(blob)</code> crée une adresse temporaire pour l'afficher dans un <code>&lt;img&gt;</code>.</li>\n<li>On peut ouvrir les outils de développement → Application → IndexedDB pour voir le contenu de la base.</li>\n</ul>",
   "demo-html": "<p><label for=\"f\">Photo d'un produit :</label> <input id=\"f\" type=\"file\" accept=\"image/*\"></p>\n<p><button id=\"seed\">Ajouter 3 clients</button> <button id=\"lire\">Clients de Draguignan</button> <button id=\"raz\">Vider la base de démo</button></p>\n<img id=\"img\" alt=\"Photo du produit enregistrée dans IndexedDB\" hidden>\n<ul id=\"out\"></ul>",
   "demo-css": "body{font-family:system-ui;padding:1rem}\nbutton{border:1px solid #c9a14a;background:#fff;border-radius:8px;padding:.4rem .7rem;margin:.2rem 0}\nimg{max-width:200px;border-radius:12px;border:2px solid #c9a14a;display:block}\nimg[hidden]{display:none}",
   "demo-js": "const promesse = (r) => new Promise((ok, ko) => { r.onsuccess = () => ok(r.result); r.onerror = () => ko(r.error); });\nfunction ouvrir() {\n  const r = indexedDB.open('demo-ondea-cours', 1);\n  r.onupgradeneeded = () => {\n    const db = r.result;\n    db.createObjectStore('clients', { keyPath: 'id' }).createIndex('ville', 'ville');\n    db.createObjectStore('files', { keyPath: 'id' });\n  };\n  return promesse(r);\n}\nconst out = (t) => { document.getElementById('out').innerHTML += `<li>${t}</li>`; console.log(t); };\ndocument.getElementById('seed').addEventListener('click', async () => {\n  const db = await ouvrir();\n  const tx = db.transaction('clients', 'readwrite');\n  [{ id: 1, nom: 'Brico Sud', ville: 'Draguignan' }, { id: 2, nom: 'Visso', ville: 'Toulon' }, { id: 3, nom: 'Atelier Mistral', ville: 'Draguignan' }]\n    .forEach((c) => tx.objectStore('clients').put(c));\n  tx.oncomplete = () => out('3 clients enregistrés (transaction terminée)');\n});\ndocument.getElementById('lire').addEventListener('click', async () => {\n  const db = await ouvrir();\n  const liste = await promesse(db.transaction('clients').objectStore('clients').index('ville').getAll('Draguignan'));\n  out(`Draguignan : ${liste.map((c) => c.nom).join(', ') || 'aucun'}`);\n});\ndocument.getElementById('f').addEventListener('change', async (e) => {\n  const fichier = e.target.files[0];\n  if (!fichier) return;\n  const db = await ouvrir();\n  await promesse(db.transaction('files', 'readwrite').objectStore('files').put({ id: 'produit-1', blob: fichier }));\n  const enreg = await promesse(db.transaction('files').objectStore('files').get('produit-1'));\n  const img = document.getElementById('img');\n  img.src = URL.createObjectURL(enreg.blob); img.hidden = false;\n  out(`Image « ${fichier.name} » (${Math.round(fichier.size / 1024)} Ko) stockée puis relue`);\n});\ndocument.getElementById('raz').addEventListener('click', async () => {\n  const db = await ouvrir();\n  const tx = db.transaction(['clients', 'files'], 'readwrite');\n  tx.objectStore('clients').clear(); tx.objectStore('files').clear();\n  tx.oncomplete = () => { document.getElementById('img').hidden = true; out('Base de démonstration vidée'); };\n});",
   "guided": "<p>Complétez le module produits avec IndexedDB.</p>\n<ol>\n<li>La fonction <code>ouvrir()</code> est fournie : elle crée le store <code>produits</code> (clé <code>reference</code>).</li>\n<li>Écrivez <code>async function ajouterProduit(produit)</code> qui l'enregistre avec <code>put</code> dans une transaction <code>'readwrite'</code>.</li>\n<li>Écrivez <code>async function compterProduits()</code> qui renvoie le nombre de produits (<code>store.count()</code>).</li>\n<li>Le code de test en bas appelle vos fonctions et affiche <code>2 produits</code> dans la console.</li>\n</ol>",
   "guided-js": "const promesse = (r) => new Promise((ok, ko) => { r.onsuccess = () => ok(r.result); r.onerror = () => ko(r.error); });\nfunction ouvrir() {\n  const r = indexedDB.open('exo-ondea-produits', 1);\n  r.onupgradeneeded = () => r.result.createObjectStore('produits', { keyPath: 'reference' });\n  return promesse(r);\n}\n\n// À vous : ajouterProduit et compterProduits\n\n\n// Test (ne pas modifier)\n(async () => {\n  try {\n    await ajouterProduit({ reference: 'VIS-440', nom: 'Vis inox 4x40' });\n    await ajouterProduit({ reference: 'PER-18V', nom: 'Perceuse 18 V' });\n    await ajouterProduit({ reference: 'VIS-440', nom: 'Vis inox 4x40 (modifié)' });\n    console.log(`${await compterProduits()} produits`);\n  } catch (e) { console.log('Erreur : ' + e.message); }\n})();",
   "checks": [
    [
     "wait",
     "700",
     "Attente de la base de données"
    ],
    [
     "js",
     "readwrite",
     "Transaction en readwrite"
    ],
    [
     "js",
     "\\.put\\(",
     "put() est utilisé"
    ],
    [
     "js",
     "\\.count\\(",
     "count() est utilisé"
    ],
    [
     "log",
     "2 produits",
     "La console affiche « 2 produits » (put remplace le doublon)"
    ]
   ],
   "guided-solution-js": "const promesse = (r) => new Promise((ok, ko) => { r.onsuccess = () => ok(r.result); r.onerror = () => ko(r.error); });\nfunction ouvrir() {\n  const r = indexedDB.open('exo-ondea-produits', 1);\n  r.onupgradeneeded = () => r.result.createObjectStore('produits', { keyPath: 'reference' });\n  return promesse(r);\n}\n\nasync function ajouterProduit(produit) {\n  const db = await ouvrir();\n  const store = db.transaction('produits', 'readwrite').objectStore('produits');\n  await promesse(store.put(produit));\n}\nasync function compterProduits() {\n  const db = await ouvrir();\n  return promesse(db.transaction('produits').objectStore('produits').count());\n}\n\n// Test (ne pas modifier)\n(async () => {\n  try {\n    await ajouterProduit({ reference: 'VIS-440', nom: 'Vis inox 4x40' });\n    await ajouterProduit({ reference: 'PER-18V', nom: 'Perceuse 18 V' });\n    await ajouterProduit({ reference: 'VIS-440', nom: 'Vis inox 4x40 (modifié)' });\n    console.log(`${await compterProduits()} produits`);\n  } catch (e) { console.log('Erreur : ' + e.message); }\n})();",
   "auto": "<p>Créez la gestion des photos des utilisateurs d'Ondea : un formulaire (nom, rôle, photo) qui enregistre l'utilisateur dans le store <code>users</code> et la photo dans le store <code>files</code> (avec <code>ownerType: 'user'</code> et <code>ownerId</code>), le tout dans <strong>une seule transaction</strong> sur les deux stores. Refusez les fichiers qui ne sont pas des images ou qui dépassent 2 Mo. Affichez ensuite la liste des utilisateurs avec leur photo, et un bouton « Supprimer » qui efface l'utilisateur et sa photo.</p>",
   "solution": "<p>Une transaction peut couvrir plusieurs stores : <code>db.transaction(['users', 'files'], 'readwrite')</code>. Si l'une des écritures échoue, aucune n'est conservée. Pensez à appeler <code>URL.revokeObjectURL</code> quand une image n'est plus affichée.</p>",
   "solution-code": [
    {
     "lang": "js",
     "code": "const promesse = (r) => new Promise((ok, ko) => { r.onsuccess = () => ok(r.result); r.onerror = () => ko(r.error); });\nconst fin = (tx) => new Promise((ok, ko) => { tx.oncomplete = ok; tx.onerror = () => ko(tx.error); tx.onabort = () => ko(tx.error); });\nfunction ouvrir() {\n  const r = indexedDB.open('ondea-equipe', 1);\n  r.onupgradeneeded = () => {\n    r.result.createObjectStore('users', { keyPath: 'id' });\n    r.result.createObjectStore('files', { keyPath: 'id' }).createIndex('owner', ['ownerType', 'ownerId']);\n  };\n  return promesse(r);\n}\nasync function creerUtilisateur({ nom, role }, photo) {\n  if (photo && !photo.type.startsWith('image/')) throw new Error('Le fichier doit être une image.');\n  if (photo && photo.size > 2 * 1024 * 1024) throw new Error('Image trop lourde (2 Mo maximum).');\n  const db = await ouvrir();\n  const id = crypto.randomUUID();\n  const tx = db.transaction(['users', 'files'], 'readwrite');\n  tx.objectStore('users').put({ id, nom, role });\n  if (photo) tx.objectStore('files').put({ id: 'photo-' + id, ownerType: 'user', ownerId: id, blob: photo });\n  await fin(tx);\n  return id;\n}\nasync function supprimerUtilisateur(id) {\n  const db = await ouvrir();\n  const tx = db.transaction(['users', 'files'], 'readwrite');\n  tx.objectStore('users').delete(id);\n  tx.objectStore('files').delete('photo-' + id);\n  await fin(tx);\n}\nasync function listerAvecPhotos() {\n  const db = await ouvrir();\n  const users = await promesse(db.transaction('users').objectStore('users').getAll());\n  const files = db.transaction('files').objectStore('files');\n  return Promise.all(users.map(async (u) => {\n    const f = await promesse(files.get('photo-' + u.id));\n    return { ...u, photoUrl: f ? URL.createObjectURL(f.blob) : null };\n  }));\n}"
    }
   ],
   "quiz": [
    {
     "q": "Où crée-t-on les object stores et les index ?",
     "options": [
      "N'importe où",
      "Dans l'événement onupgradeneeded",
      "Dans onsuccess",
      "Dans une transaction readonly"
     ],
     "answer": 1,
     "why": "Seul onupgradeneeded peut modifier la structure de la base."
    },
    {
     "q": "Quel mode de transaction pour écrire ?",
     "options": [
      "'readonly'",
      "'readwrite'",
      "'write'",
      "'admin'"
     ],
     "answer": 1,
     "why": "Le mode par défaut est readonly."
    },
    {
     "q": "Quelle différence entre put et add ?",
     "options": [
      "put ajoute ou remplace ; add échoue si la clé existe déjà",
      "Aucune",
      "add remplace ; put échoue",
      "put supprime"
     ],
     "answer": 0,
     "why": "Dans l'exercice guidé, le doublon VIS-440 est remplacé."
    },
    {
     "q": "Pourquoi IndexedDB plutôt que LocalStorage pour les photos ?",
     "options": [
      "LocalStorage est plus lent",
      "IndexedDB stocke des Blob et de gros volumes ; LocalStorage seulement ~5 Mo de texte",
      "LocalStorage n'existe pas sur mobile",
      "IndexedDB compresse les images"
     ],
     "answer": 1,
     "why": "Une image en base64 dans LocalStorage gonfle de 33 % et sature vite."
    },
    {
     "q": "Que garantit une transaction ?",
     "options": [
      "La vitesse",
      "Que toutes ses opérations réussissent ensemble ou sont toutes annulées",
      "Le chiffrement",
      "La sauvegarde dans le cloud"
     ],
     "answer": 1,
     "why": "Exemple : réserver le stock ET changer le statut de la commande."
    }
   ],
   "ondea": "<p><code>database.js</code> d'Ondea déclare un <code>SCHEMA</code> de <strong>14 stores</strong> (users, clients, products, orders, shipments, stockMovements, files…) avec leurs index, des <code>MIGRATIONS</code> versionnées, une fonction de transaction atomique utilisée par exemple par <code>stocks.js</code> (réserver, expédier, libérer le stock en même temps que le changement de statut), et traduit les erreurs (<code>QuotaExceededError</code>, <code>ConstraintError</code>) en messages compréhensibles. Le store <code>files</code> a un index composé <code>['ownerType', 'ownerId']</code> : exactement celui de l'exercice autonome.</p>"
  },
  {
   "id": "js-async-organisation",
   "part": "js",
   "title": "Asynchrone et organisation du code",
   "subtitle": "Promesses, async/await, try/catch, espace de noms, ordre des scripts",
   "duration": "2 h",
   "feature": "Démarrage de l'application, gestion des erreurs, architecture",
   "intro": "<p>Certaines opérations prennent du temps : ouvrir la base, lire un fichier, attendre 30 secondes. Le JavaScript ne s'arrête pas pour attendre : il est <strong>asynchrone</strong>. Il continue et sera prévenu plus tard.</p>\n<ul>\n<li>Une <strong>promesse</strong> (<code>Promise</code>) représente un résultat futur : en attente, puis <em>tenue</em> (résultat) ou <em>rompue</em> (erreur).</li>\n<li><code>async</code> devant une fonction permet d'utiliser <code>await</code> à l'intérieur ; <code>await</code> « attend » la promesse et donne son résultat, comme si le code était séquentiel.</li>\n<li><code>try { … } catch (erreur) { … }</code> attrape les erreurs pour afficher un message au lieu de planter.</li>\n<li><code>Promise.all([...])</code> lance plusieurs opérations en parallèle.</li>\n</ul>\n<p><strong>Organisation :</strong> une application de 10 000 lignes doit être découpée en fichiers par responsabilité (utilitaires, stockage, interface, un fichier par module métier). En <code>file://</code>, les modules ES (<code>import</code>) sont bloqués : on charge des scripts classiques dans l'ordre avec <code>defer</code>, et chaque fichier s'enregistre dans <strong>un seul</strong> objet global (un <strong>espace de noms</strong>) pour ne pas polluer la page.</p>",
   "example": [
    {
     "lang": "js",
     "code": "// ---------- utils.js : chargé en premier ----------\n// IIFE : fonction exécutée immédiatement, ses variables restent privées\n(function (global) {\n  'use strict';                                  // mode strict : plus d'erreurs détectées\n  const OC = global.OC = global.OC || {};        // espace de noms unique\n\n  const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));\n  OC.utils = { pause };                          // on n'expose que l'utile\n})(window);\n\n// ---------- database.js : utilise OC.utils ----------\n(function (OC) {\n  'use strict';\n  async function ouvrir() {\n    await OC.utils.pause(300);                   // simule une ouverture lente\n    return { nom: 'ondea-commandes' };\n  }\n  OC.db = { ouvrir };\n})(window.OC);\n\n// ---------- app.js : chargé en dernier, démarre tout ----------\n(function (OC) {\n  'use strict';\n  async function demarrer() {\n    try {\n      console.log('Démarrage…');\n      const db = await OC.db.ouvrir();           // attend sans bloquer la page\n      const [prefs, notifs] = await Promise.all([ // en parallèle\n        chargerPreferences(), compterNotifications()\n      ]);\n      console.log(`Base ${db.nom} prête, ${notifs} notifications`, prefs);\n    } catch (erreur) {\n      console.error(erreur);\n      afficherErreur(\"L'application n'a pas pu démarrer. Rechargez la page.\");\n    } finally {\n      document.body.classList.remove('is-loading'); // toujours exécuté\n    }\n  }\n  document.addEventListener('DOMContentLoaded', demarrer);\n})(window.OC);"
    }
   ],
   "explain": "<ul>\n<li>L'<strong>IIFE</strong> <code>(function () { … })()</code> crée une portée privée : les variables internes ne deviennent pas globales.</li>\n<li><code>global.OC = global.OC || {}</code> : on réutilise l'objet s'il existe, sinon on le crée. Tous les fichiers ajoutent leur partie : <code>OC.utils</code>, <code>OC.db</code>…</li>\n<li>L'<strong>ordre des balises script</strong> compte : <code>database.js</code> utilise <code>OC.utils</code>, il doit donc être chargé après <code>utils.js</code>.</li>\n<li><code>await</code> ne fonctionne que dans une fonction <code>async</code> (ou au niveau supérieur d'un module ES).</li>\n<li><code>finally</code> s'exécute dans tous les cas, succès ou erreur : idéal pour retirer un indicateur de chargement.</li>\n<li>Une fonction <code>async</code> renvoie toujours une promesse.</li>\n<li><code>window.addEventListener('unhandledrejection', …)</code> attrape les erreurs de promesses oubliées : un filet de sécurité global.</li>\n</ul>",
   "demo-html": "<button id=\"go\">Démarrer l'application</button>\n<ol id=\"etapes\"></ol>",
   "demo-css": "body{font-family:system-ui;padding:1rem}\nli{padding:.2rem 0}\n.ok{color:#0b4a26}.ko{color:#7a1410;font-weight:700}\nbutton{padding:.5rem 1rem;border-radius:8px;border:1px solid #c9a14a;background:#171a26;color:#f4e8c8}",
   "demo-js": "const pause = (ms) => new Promise((r) => setTimeout(r, ms));\nconst etape = (t, cls = 'ok') => { document.getElementById('etapes').innerHTML += `<li class=\"${cls}\">${t}</li>`; console.log(t); };\nasync function ouvrirBase() { await pause(400); return 'ondea-commandes'; }\nasync function chargerPrefs() { await pause(300); return { theme: 'dark' }; }\nasync function compterNotifs() { await pause(500); if (Math.random() < 0.25) throw new Error('Lecture des notifications impossible'); return 3; }\ndocument.getElementById('go').addEventListener('click', async (e) => {\n  e.target.disabled = true;\n  document.getElementById('etapes').innerHTML = '';\n  const t0 = performance.now();\n  try {\n    etape('Ouverture de la base…');\n    const nom = await ouvrirBase();\n    etape(`Base « ${nom} » ouverte`);\n    const [prefs, n] = await Promise.all([chargerPrefs(), compterNotifs()]);\n    etape(`Thème ${prefs.theme}, ${n} notifications (chargées en parallèle)`);\n  } catch (err) {\n    etape('Erreur attrapée : ' + err.message + ' (relancez, 1 chance sur 4)', 'ko');\n  } finally {\n    etape(`Terminé en ${Math.round(performance.now() - t0)} ms`);\n    e.target.disabled = false;\n  }\n});",
   "guided": "<p>Écrivez le démarrage asynchrone d'Ondea.</p>\n<ol>\n<li>Les fonctions <code>ouvrirBase()</code> et <code>chargerSession()</code> sont fournies ; elles renvoient des promesses.</li>\n<li>Écrivez <code>async function demarrer()</code> qui attend <code>ouvrirBase()</code>, puis <code>chargerSession()</code>, et renvoie le texte <code>'Prêt : directeur'</code> (avec le rôle de la session).</li>\n<li>Si une erreur survient, <code>demarrer</code> l'attrape avec <code>try…catch</code> et renvoie <code>'Échec : '</code> suivi du message de l'erreur.</li>\n<li>Affichez le résultat de <code>demarrer()</code> dans la console.</li>\n</ol>",
   "guided-js": "const pause = (ms) => new Promise((r) => setTimeout(r, ms));\nasync function ouvrirBase() { await pause(100); return true; }\nlet sessionCassee = false;\nasync function chargerSession() {\n  await pause(100);\n  if (sessionCassee) throw new Error('session expirée');\n  return { role: 'directeur' };\n}\n// À vous",
   "checks": [
    [
     "js",
     "async\\s+function\\s+demarrer",
     "demarrer est une fonction async"
    ],
    [
     "js",
     "await\\s+(ouvrirBase|chargerSession)",
     "await est utilisé sur les fonctions fournies"
    ],
    [
     "js",
     "try\\s*\\{",
     "try…catch est utilisé"
    ],
    [
     "wait",
     "500",
     "Attente du démarrage"
    ],
    [
     "log",
     "Prêt : directeur",
     "La console affiche « Prêt : directeur »"
    ],
    [
     "evalasync",
     "(sessionCassee = true, demarrer())",
     "Échec : session expirée",
     "Une erreur donne « Échec : session expirée »"
    ]
   ],
   "guided-solution-js": "const pause = (ms) => new Promise((r) => setTimeout(r, ms));\nasync function ouvrirBase() { await pause(100); return true; }\nlet sessionCassee = false;\nasync function chargerSession() {\n  await pause(100);\n  if (sessionCassee) throw new Error('session expirée');\n  return { role: 'directeur' };\n}\n\nasync function demarrer() {\n  try {\n    await ouvrirBase();\n    const session = await chargerSession();\n    return `Prêt : ${session.role}`;\n  } catch (erreur) {\n    return `Échec : ${erreur.message}`;\n  }\n}\ndemarrer().then((message) => console.log(message));",
   "auto": "<p>Réorganisez tout le code JavaScript écrit pendant le cours en une architecture à la Ondea : <code>js/utils.js</code> (calculs, échappement, formatage), <code>js/storage.js</code> (LocalStorage), <code>js/database.js</code> (IndexedDB), <code>js/ui.js</code> (toasts, modales), <code>js/clients.js</code>, <code>js/commandes.js</code> et <code>js/app.js</code>, chacun dans une IIFE qui s'enregistre dans <code>window.OC</code>. Ajoutez un gestionnaire global d'erreurs (<code>error</code> et <code>unhandledrejection</code>) qui affiche un toast. Rédigez un schéma de dépendances entre fichiers pour votre dossier projet.</p>",
   "solution": "<p>Règle de dépendance : un fichier ne peut utiliser que ce qui a été chargé avant lui. Dessinez les flèches : utils ← storage ← database ← ui ← modules ← app. Pas de flèche dans l'autre sens.</p>",
   "solution-code": [
    {
     "lang": "html",
     "code": "<!-- index.html : l'ordre de chargement = l'ordre des dépendances -->\n<script src=\"js/utils.js\" defer></script>\n<script src=\"js/storage.js\" defer></script>\n<script src=\"js/database.js\" defer></script>\n<script src=\"js/ui.js\" defer></script>\n<script src=\"js/clients.js\" defer></script>\n<script src=\"js/commandes.js\" defer></script>\n<script src=\"js/app.js\" defer></script>\n<script>\n  // Extrait de js/app.js : filet de sécurité global\n  window.addEventListener('error', (e) => window.OC?.ui?.toast?.('Une erreur est survenue : ' + e.message, 'danger'));\n  window.addEventListener('unhandledrejection', (e) => {\n    e.preventDefault();\n    window.OC?.ui?.toast?.(e.reason?.message || 'Opération impossible.', 'danger');\n  });\n</script>"
    }
   ],
   "quiz": [
    {
     "q": "Que fait await devant une promesse ?",
     "options": [
      "Bloque tout le navigateur",
      "Attend son résultat dans la fonction async, sans bloquer la page",
      "Annule la promesse",
      "Transforme la promesse en tableau"
     ],
     "answer": 1,
     "why": "Le reste de la page reste réactif."
    },
    {
     "q": "Que renvoie toujours une fonction async ?",
     "options": [
      "undefined",
      "Une promesse",
      "Un booléen",
      "Une chaîne"
     ],
     "answer": 1,
     "why": "Même si on écrit return 5, on obtient une promesse de 5."
    },
    {
     "q": "À quoi sert Promise.all([a(), b()]) ?",
     "options": [
      "À exécuter a puis b",
      "À lancer a et b en parallèle et attendre les deux",
      "À ne garder que la plus rapide",
      "À annuler les promesses"
     ],
     "answer": 1,
     "why": "Promise.race garde la plus rapide."
    },
    {
     "q": "Pourquoi Ondea n'utilise-t-il pas import/export (modules ES) ?",
     "options": [
      "C'est trop récent",
      "Les navigateurs bloquent les modules en file:// (ouverture par double-clic)",
      "Les modules sont lents",
      "Pour cacher le code"
     ],
     "answer": 1,
     "why": "D'où les scripts classiques avec defer et l'espace de noms OC."
    },
    {
     "q": "Quel bloc s'exécute dans tous les cas, erreur ou non ?",
     "options": [
      "catch",
      "try",
      "finally",
      "then"
     ],
     "answer": 2,
     "why": "Idéal pour retirer un indicateur de chargement."
    }
   ],
   "ondea": "<p>C'est l'architecture exacte d'Ondea Commandes. Le README explique : « Les navigateurs bloquent <code>import</code> en <code>file://</code>. Les scripts sont donc classiques (<code>defer</code>), chargés dans l'ordre, et chacun s'enregistre dans un <strong>unique</strong> espace de noms ». <code>utils.js</code> crée <code>window.OC</code> et des classes d'erreurs (<code>AppError</code>, <code>PermissionError</code>, <code>ValidationError</code>) ; <code>app.js</code> assure « l'amorçage, la gestion centralisée des erreurs, les raccourcis et la synchronisation entre onglets ».</p>"
  }
 ],
 "filRouge": [
  {
   "id": "fr-connexion",
   "titre": "Connexion et profils",
   "icone": "lock",
   "objectif": "L'utilisateur s'identifie ; l'application reconnaît son profil (directeur ou magasinier) et n'affiche que ce qu'il a le droit de faire.",
   "chapitres": [
    "html-formulaires",
    "js-formulaires",
    "js-conditions",
    "js-json-localstorage"
   ],
   "mission": [
    "Construire le formulaire de connexion accessible (labels, autocomplete, message d'erreur annoncé).",
    "Valider la saisie en JavaScript et afficher une erreur générique.",
    "Définir une matrice de droits par profil (objet de tableaux) et une fonction autoriser(role, action).",
    "Mémoriser la session dans LocalStorage avec une date d'expiration et proposer la déconnexion."
   ],
   "livrable": "Un écran de connexion qui redirige vers le tableau de bord avec « Bonjour, Directeur » ou « Bonjour, Magasinier ».",
   "fichiers": [
    "js/auth.js",
    "js/permissions.js",
    "js/storage.js"
   ]
  },
  {
   "id": "fr-dashboard",
   "titre": "Tableau de bord",
   "icone": "dashboard",
   "objectif": "Vue d'ensemble de l'activité : indicateurs du jour, commandes en retard, alertes de stock.",
   "chapitres": [
    "html-semantique",
    "css-box-model",
    "css-grid",
    "js-dom",
    "js-tableaux-objets"
   ],
   "mission": [
    "Structurer l'écran avec section/article et une hiérarchie de titres correcte.",
    "Créer les cartes indicateurs (modèle de boîte, bordure colorée, ombre).",
    "Disposer les zones avec grid-template-areas, version mobile comprise.",
    "Calculer les indicateurs à partir d'un tableau de commandes (filter, reduce) et les injecter dans le DOM."
   ],
   "livrable": "Un tableau de bord dont les chiffres sont calculés depuis les données, responsive de 360 px à 1440 px.",
   "fichiers": [
    "js/dashboard.js",
    "css/components.css"
   ]
  },
  {
   "id": "fr-navigation",
   "titre": "Navigation",
   "icone": "menu",
   "objectif": "Passer d'un écran à l'autre sans recharger la page, au clavier comme à la souris, sur ordinateur et sur mobile.",
   "chapitres": [
    "html-navigation",
    "css-flexbox",
    "css-responsive",
    "js-evenements"
   ],
   "mission": [
    "Écrire le menu (nav, liste, data-route, lien d'évitement).",
    "Mettre en page barre latérale et barre supérieure ; transformer la barre latérale en tiroir sous 900 px.",
    "Écouter hashchange, afficher l'écran demandé et poser aria-current sur le bon lien.",
    "Masquer les entrées de menu interdites au profil connecté."
   ],
   "livrable": "Un mini-routeur par hash qui affiche 5 écrans et met à jour le titre de l'onglet.",
   "fichiers": [
    "js/router.js",
    "index.html"
   ]
  },
  {
   "id": "fr-clients-produits",
   "titre": "Gestion des clients et produits",
   "icone": "users",
   "objectif": "Créer, consulter, modifier et archiver clients et produits (référence unique, prix HT, TVA, seuil d'alerte, fournisseur).",
   "chapitres": [
    "html-formulaires",
    "html-tableaux",
    "js-tableaux-objets",
    "js-dom",
    "js-formulaires"
   ],
   "mission": [
    "Construire les formulaires fiche client et fiche produit.",
    "Afficher les listes dans des tableaux accessibles (caption, th scope).",
    "Ajouter, modifier (copie avec spread) et archiver un élément dans un tableau d'objets.",
    "Refuser une référence produit déjà existante (some ou find)."
   ],
   "livrable": "Deux écrans liste + fiche entièrement fonctionnels en mémoire.",
   "fichiers": [
    "js/clients.js",
    "js/produits.js",
    "js/fournisseurs.js"
   ]
  },
  {
   "id": "fr-commandes",
   "titre": "Création et suivi des commandes",
   "icone": "cart",
   "objectif": "Saisir une commande (client, lignes de produits, remises, frais de port) puis la faire avancer de statut en statut jusqu'à la livraison.",
   "chapitres": [
    "html-tableaux",
    "js-tableaux-objets",
    "js-conditions",
    "js-evenements"
   ],
   "mission": [
    "Modéliser une commande : { numero, clientId, statut, lignes: [...], dates }.",
    "Écrire le formulaire de saisie avec ajout/suppression dynamique de lignes (délégation).",
    "Définir les transitions de statut autorisées (brouillon → attente → validée → préparation → prête → expédiée → livrée, et annulation).",
    "Historiser chaque changement de statut (date, utilisateur, ancien → nouveau)."
   ],
   "livrable": "Une commande qui peut être créée, validée, préparée, expédiée et livrée, avec un historique.",
   "fichiers": [
    "js/commandes.js",
    "js/notifications.js"
   ]
  },
  {
   "id": "fr-calculs",
   "titre": "Calculs HT, TVA et TTC",
   "icone": "euro",
   "objectif": "Des montants exacts au centime : remises ligne et globale, TVA par taux, frais de port, total TTC.",
   "chapitres": [
    "js-variables",
    "js-boucles",
    "js-fonctions"
   ],
   "mission": [
    "Convertir toutes les saisies en centimes entiers (versCentimes).",
    "Écrire calculerTVA, appliquerRemise et totalLigne, puis totalCommande avec détail par taux.",
    "Afficher les montants avec Intl.NumberFormat en euros.",
    "Vérifier sur l'exemple du cours : 449,74 € TTC."
   ],
   "livrable": "Une bibliothèque de calcul documentée en JSDoc et testée avec au moins 5 cas.",
   "fichiers": [
    "js/utils.js (computeTotals, toCents, money)"
   ]
  },
  {
   "id": "fr-stocks",
   "titre": "Gestion des stocks",
   "icone": "box",
   "objectif": "Suivre stock physique, stock réservé et stock disponible ; alerter sous le seuil ; tracer chaque mouvement.",
   "chapitres": [
    "js-conditions",
    "js-boucles",
    "js-tableaux-objets",
    "js-indexeddb"
   ],
   "mission": [
    "Calculer disponible = physique − réservé.",
    "Réserver à la validation d'une commande, déstocker à l'expédition, libérer à l'annulation.",
    "Enregistrer chaque mouvement (entrée, sortie, ajustement) avec date, motif et utilisateur.",
    "Générer une notification quand un produit passe sous son seuil."
   ],
   "livrable": "Un moteur de stock dont les mouvements se font dans une transaction avec le changement de statut.",
   "fichiers": [
    "js/stocks.js"
   ]
  },
  {
   "id": "fr-preparation",
   "titre": "Préparation et livraison",
   "icone": "truck",
   "objectif": "Le magasinier prépare les commandes validées sur tablette, signale les manques, puis enregistre l'expédition et la livraison.",
   "chapitres": [
    "css-responsive",
    "js-evenements",
    "js-dom"
   ],
   "mission": [
    "Créer une file de préparation triée par priorité et date souhaitée.",
    "Cocher les lignes préparées (gros boutons tactiles, délégation d'événements).",
    "Gérer la préparation partielle (quantité préparée < quantité commandée).",
    "Saisir l'expédition (transporteur, numéro de suivi) puis la livraison."
   ],
   "livrable": "Un écran tablette utilisable d'une main en entrepôt.",
   "fichiers": [
    "js/preparation.js",
    "js/livraisons.js"
   ]
  },
  {
   "id": "fr-recherche",
   "titre": "Recherche et filtres",
   "icone": "search",
   "objectif": "Retrouver instantanément une commande, un client ou un produit ; filtrer par statut, priorité, période.",
   "chapitres": [
    "js-tableaux-objets",
    "js-evenements",
    "html-formulaires"
   ],
   "mission": [
    "Champ de recherche avec filtrage à chaque frappe (input), insensible à la casse et aux accents (normalize('NFD')).",
    "Puces de filtre par statut avec aria-pressed.",
    "Combiner recherche + filtre + tri dans une seule fonction.",
    "Conserver les filtres dans l'adresse (#/commandes?statut=attente)."
   ],
   "livrable": "Une liste de commandes filtrable, avec compteur de résultats et état vide.",
   "fichiers": [
    "js/commandes.js (filtres)",
    "js/router.js (query)"
   ]
  },
  {
   "id": "fr-stats",
   "titre": "Statistiques et notifications",
   "icone": "chart",
   "objectif": "CA par mois, répartition par statut, meilleurs clients et produits ; notifications internes (retards, stock bas).",
   "chapitres": [
    "js-tableaux-objets",
    "html-accessibilite",
    "css-animations",
    "js-dom"
   ],
   "mission": [
    "Agréger les données avec reduce (par mois, par statut, par client).",
    "Dessiner un graphique en barres simple en HTML/CSS (largeur proportionnelle) ou en SVG, avec une alternative textuelle.",
    "Créer un centre de notifications (badge compteur, marquer comme lu).",
    "Annoncer les nouvelles notifications dans une région aria-live."
   ],
   "livrable": "Un écran statistiques lisible au lecteur d'écran et un panneau de notifications.",
   "fichiers": [
    "js/statistiques.js",
    "js/charts.js",
    "js/notifications.js"
   ]
  },
  {
   "id": "fr-sauvegarde",
   "titre": "Sauvegarde des données",
   "icone": "save",
   "objectif": "Les données survivent au rechargement ; l'utilisateur peut exporter une sauvegarde complète et la restaurer.",
   "chapitres": [
    "js-json-localstorage",
    "js-indexeddb",
    "js-async-organisation"
   ],
   "mission": [
    "Stocker préférences et session dans LocalStorage (préfixe oc.).",
    "Stocker toutes les données métier dans IndexedDB (un store par entité).",
    "Exporter toute la base en un fichier JSON daté.",
    "Importer un fichier en vérifiant sa structure, avec confirmation avant d'écraser."
   ],
   "livrable": "Un cycle complet : saisir → recharger → exporter → vider → restaurer, sans perte.",
   "fichiers": [
    "js/database.js",
    "js/storage.js",
    "js/settings.js"
   ]
  },
  {
   "id": "fr-images",
   "titre": "Gestion des images avec IndexedDB",
   "icone": "image",
   "objectif": "Photos des produits et des utilisateurs stockées localement (Blob), affichées, agrandies et incluses dans la sauvegarde.",
   "chapitres": [
    "html-contenus",
    "js-indexeddb",
    "js-async-organisation"
   ],
   "mission": [
    "Champ fichier accept=\"image/*\" avec contrôle du type et du poids.",
    "Stocker le fichier dans le store files avec ownerType / ownerId.",
    "Afficher via URL.createObjectURL et libérer avec revokeObjectURL.",
    "Convertir les Blob en Data URL à l'export JSON, et l'inverse à l'import."
   ],
   "livrable": "Une fiche produit avec photo persistante et un zoom accessible (Échap pour fermer).",
   "fichiers": [
    "js/database.js (files)",
    "js/zoom-photos.js"
   ]
  }
 ],
 "jury": {
  "intro": "<p>Le titre professionnel <strong>Développeur web et web mobile</strong> (RNCP 37674, niveau 5) comporte deux certificats de compétences professionnelles : <strong>CCP 1 – Développer la partie front-end</strong> d'une application web ou web mobile sécurisée, et <strong>CCP 2 – Développer la partie back-end</strong>. Ce cours prépare le CCP 1.</p><p>L'évaluation repose sur la <strong>présentation d'un projet réalisé en amont</strong> (avec le dossier de projet, lu par le jury avant votre passage), un <strong>entretien technique</strong> sur ce projet et les compétences non couvertes, un <strong>questionnaire professionnel</strong>, puis un <strong>entretien final</strong>. Les durées exactes figurent dans le référentiel de certification (RC) et votre convocation : vérifiez-les avec votre formateur.</p>",
  "competences": [
   "Installer et configurer son environnement de travail en fonction du projet web ou web mobile",
   "Maquetter des interfaces utilisateur web ou web mobile",
   "Réaliser des interfaces utilisateur statiques web ou web mobile",
   "Développer la partie dynamique des interfaces utilisateur web ou web mobile"
  ],
  "grille": [
   "Je sais présenter le contexte et les utilisateurs d'Ondea Commandes (TPE/PME, directeur, magasinier) en 1 minute.",
   "Je sais justifier mes choix techniques (HTML/CSS/JS natifs, file://, IndexedDB) et leurs limites.",
   "Je sais montrer une maquette et expliquer le passage maquette → intégration.",
   "Je sais expliquer la structure sémantique de mes pages et mes choix d'accessibilité.",
   "Je sais expliquer mon système de thèmes (variables CSS) et mon responsive (mobile first).",
   "Je sais lire à voix haute et expliquer une fonction JavaScript de mon projet, ligne par ligne.",
   "Je sais expliquer comment j'empêche une faille XSS dans mon affichage.",
   "Je sais expliquer comment les données sont enregistrées (LocalStorage / IndexedDB) et sauvegardées.",
   "Je sais faire une démonstration fluide d'un parcours complet (créer → valider → préparer → livrer).",
   "Je sais présenter une difficulté rencontrée, comment je l'ai résolue et ce que j'en ai appris.",
   "Je sais citer une source de veille technique et une information récente que j'y ai trouvée.",
   "Je sais répondre « je ne sais pas, mais voici comment je chercherais » sans me déstabiliser."
  ],
  "plan": [
   {
    "titre": "Accroche et présentation",
    "duree": 1,
    "aide": "Qui je suis, le projet en une phrase, le besoin du client (une TPE qui gère ses commandes sur papier ou tableur)."
   },
   {
    "titre": "Contexte et cahier des charges",
    "duree": 3,
    "aide": "Utilisateurs (directeur, magasinier), fonctionnalités principales, contraintes (hors ligne, sans serveur, accessible AAA, responsive)."
   },
   {
    "titre": "Conception et maquettes",
    "duree": 4,
    "aide": "Arborescence des écrans, maquettes mobile et desktop, charte Obsidienne & Or, choix d'accessibilité."
   },
   {
    "titre": "Réalisation technique",
    "duree": 8,
    "aide": "Architecture des fichiers, une fonctionnalité expliquée en profondeur (ex. calcul TTC ou réservation de stock), extraits de code commentés."
   },
   {
    "titre": "Démonstration",
    "duree": 5,
    "aide": "Parcours complet préparé à l'avance avec des données de démonstration. Prévoir une vidéo de secours."
   },
   {
    "titre": "Tests, sécurité, bilan",
    "duree": 3,
    "aide": "Tests réalisés, protections (échappement XSS, validation), limites assumées, améliorations prévues (V2 PHP/MySQL), ce que j'ai appris."
   }
  ],
  "questions": [
   {
    "q": "Quelle est la différence entre une balise sémantique et une div ?",
    "r": "Une balise sémantique (header, nav, main, article…) porte un sens que comprennent les lecteurs d'écran et les moteurs de recherche ; une div est un conteneur neutre, utilisé seulement pour un regroupement visuel. Dans Ondea, la coque utilise aside, nav, header et un seul main."
   },
   {
    "q": "Comment avez-vous rendu votre application accessible ?",
    "r": "Structure sémantique et landmarks, labels reliés à chaque champ, contrastes visés à 7:1, focus visible, navigation complète au clavier, lien d'évitement, régions aria-live pour les messages, statuts jamais indiqués par la seule couleur, respect de prefers-reduced-motion. Vérifié avec Lighthouse et au clavier."
   },
   {
    "q": "Pourquoi stocker les montants en centimes ?",
    "r": "Les nombres décimaux en JavaScript sont en virgule flottante binaire : 0,1 + 0,2 ne vaut pas exactement 0,3. En travaillant en centimes entiers et en arrondissant au centime à chaque étape, les totaux sont exacts et reproductibles."
   },
   {
    "q": "Quelle différence entre LocalStorage et IndexedDB ?",
    "r": "LocalStorage : quelques Mo, uniquement des chaînes, API synchrone, idéal pour les préférences et la session. IndexedDB : base asynchrone, objets et fichiers (Blob), index, transactions, gros volumes : pour les commandes et les photos."
   },
   {
    "q": "Qu'est-ce qu'une faille XSS et comment l'évitez-vous ?",
    "r": "C'est l'injection de code (HTML/JS) par une donnée saisie, exécutée ensuite dans la page d'un autre utilisateur. J'utilise textContent pour les données, ou j'échappe les caractères & < > \" ' avant tout innerHTML (fonction esc / gabarit html`` dans Ondea)."
   },
   {
    "q": "Votre authentification est-elle sécurisée ?",
    "r": "Non, et je le dis : dans une application 100 % locale, le code est accessible, c'est un contrôle d'accès local. Les mots de passe sont salés et hachés, jamais stockés en clair, mais une vraie sécurité nécessite un serveur (sessions, HTTPS, hachage côté serveur avec password_hash en PHP), prévu pour la V2."
   },
   {
    "q": "Expliquez la différence entre let, const et var.",
    "r": "const déclare une variable non réaffectable, let une variable réaffectable ; les deux ont une portée de bloc. var a une portée de fonction et est « remontée » (hoisting), source de bugs : on ne l'utilise plus."
   },
   {
    "q": "Qu'est-ce que la délégation d'événements ?",
    "r": "Poser un seul écouteur sur un parent et utiliser event.target.closest() pour savoir quel enfant a été cliqué. Avantages : moins d'écouteurs, et les éléments ajoutés plus tard fonctionnent automatiquement."
   },
   {
    "q": "Comment fonctionne votre responsive ?",
    "r": "Approche mobile first : CSS de base pour petit écran, puis media queries min-width ; Grid auto-fit/minmax pour les grilles, Flexbox wrap pour les barres, barre latérale transformée en tiroir sous 900 px, zones tactiles de 44 px, tableaux qui défilent horizontalement."
   },
   {
    "q": "Qu'est-ce qu'une promesse et à quoi sert async/await ?",
    "r": "Une promesse représente un résultat futur (en attente, tenue ou rompue). async/await permet d'écrire du code asynchrone de façon séquentielle et lisible, avec try/catch pour les erreurs. Je l'utilise pour IndexedDB."
   },
   {
    "q": "Pourquoi ne pas avoir utilisé de framework (React, Vue) ?",
    "r": "Le cahier des charges impose un fonctionnement par double-clic sans installation ni serveur, et c'est l'occasion de maîtriser les bases. Je sais que les frameworks apportent des composants et une gestion d'état ; mon architecture (espace de noms, modules par fonctionnalité, rendu centralisé) s'en inspire."
   },
   {
    "q": "Comment avez-vous testé votre application ?",
    "r": "Tests manuels par parcours utilisateur pour chaque profil, avec un cahier de recette ; tests des fonctions de calcul avec des cas connus ; vérification console sans erreur ; Lighthouse ; tests sur plusieurs navigateurs et tailles d'écran. Ondea dispose aussi de tests automatisés Playwright de bout en bout."
   },
   {
    "q": "Comment gérez-vous les thèmes clair et sombre ?",
    "r": "Des variables CSS nommées par rôle (--bg, --text, --surface) définies sur :root et redéfinies dans [data-theme=\"dark\"]. Le JavaScript change l'attribut data-theme et mémorise le choix dans LocalStorage ; au premier lancement, je respecte prefers-color-scheme."
   },
   {
    "q": "Qu'est-ce que le DOM ?",
    "r": "Le Document Object Model : la représentation de la page sous forme d'arbre d'objets que JavaScript peut lire et modifier (querySelector, textContent, classList, createElement, append)."
   },
   {
    "q": "Comment faites-vous votre veille technique ?",
    "r": "Exemples à adapter : MDN Web Docs, la newsletter et le blog web.dev, les notes de version des navigateurs, Can I use pour la compatibilité, le W3C/WAI pour l'accessibilité. Citez une nouveauté précise que vous avez lue et testée."
   }
  ],
  "code": [
   {
    "titre": "Échapper le HTML",
    "code": "const esc = (v) => String(v ?? '').replace(/[&<>\"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', \"'\": '&#39;' }[c]));",
    "points": [
     "Rôle : empêcher l'interprétation d'une donnée comme du HTML (XSS)",
     "?? '' : gère null et undefined",
     "Expression régulière avec classe de caractères et drapeau g",
     "Fonction de remplacement qui lit une table de correspondance"
    ]
   },
   {
    "titre": "Calculer une TVA en centimes",
    "code": "const applyBp = (cents, bp) => Math.round((cents * bp) / 10000);",
    "points": [
     "Montant en centimes entiers",
     "Taux en points de base : 20 % = 2000",
     "Division par 10 000",
     "Arrondi au centime"
    ]
   },
   {
    "titre": "Filtrer et additionner",
    "code": "const ca = commandes.filter((c) => c.statut !== 'annulee').reduce((s, c) => s + c.ttc, 0);",
    "points": [
     "filter : exclut les annulées sans modifier le tableau",
     "reduce : accumulateur s qui part de 0",
     "Enchaînement de méthodes",
     "Résultat en centimes"
    ]
   },
   {
    "titre": "Délégation d'événements",
    "code": "liste.addEventListener('click', (e) => {\n  const b = e.target.closest('[data-action]');\n  if (!b) return;\n  actions[b.dataset.action]?.(b.dataset.id);\n});",
    "points": [
     "Un seul écouteur sur le parent",
     "closest remonte jusqu'au bouton",
     "Retour anticipé si clic hors bouton",
     "dataset lit data-action et data-id",
     "?.() : n'appelle que si l'action existe"
    ]
   },
   {
    "titre": "Thème mémorisé",
    "code": "const t = localStorage.getItem('oc.theme') ?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');\ndocument.documentElement.dataset.theme = t;",
    "points": [
     "Lecture LocalStorage avec clé préfixée",
     "?? : valeur de secours si rien d'enregistré",
     "matchMedia : préférence du système",
     "dataset.theme pilote les variables CSS"
    ]
   },
   {
    "titre": "Ouvrir IndexedDB",
    "code": "const req = indexedDB.open('ondea-commandes', 1);\nreq.onupgradeneeded = () => req.result.createObjectStore('orders', { keyPath: 'id' });\nreq.onsuccess = () => demarrer(req.result);",
    "points": [
     "Nom et version de la base",
     "onupgradeneeded : création des stores (migration)",
     "keyPath : clé primaire",
     "onsuccess : base prête, API asynchrone"
    ]
   }
  ]
 },
 "glossaire": [
  [
   "Accessibilité (a11y)",
   "Fait de rendre un site utilisable par tous, y compris les personnes en situation de handicap. « a11y » : a + 11 lettres + y."
  ],
  [
   "Attribut",
   "Information ajoutée dans une balise ouvrante : href, alt, class, id, data-*…"
  ],
  [
   "ARIA",
   "Accessible Rich Internet Applications : attributs (aria-label, aria-live…) qui complètent la sémantique HTML pour les technologies d'assistance."
  ],
  [
   "Asynchrone",
   "Opération dont le résultat arrive plus tard sans bloquer le reste du programme (promesse, async/await)."
  ],
  [
   "Blob",
   "« Binary Large Object » : un fichier en mémoire (image, JSON exporté). Un File est un Blob."
  ],
  [
   "Box model",
   "Modèle de boîte CSS : content, padding, border, margin."
  ],
  [
   "Cascade",
   "Règles qui décident quelle déclaration CSS s'applique quand plusieurs se contredisent (importance, spécificité, ordre)."
  ],
  [
   "CCP",
   "Certificat de compétences professionnelles : bloc d'un titre professionnel (le DWWM en a deux)."
  ],
  [
   "Centimes",
   "Unité utilisée par Ondea pour stocker l'argent en entiers et éviter les erreurs d'arrondi."
  ],
  [
   "Classe CSS",
   "Nom donné via class=\"…\" et ciblé en CSS par .nom ; réutilisable sur plusieurs éléments."
  ],
  [
   "Console",
   "Outil de développement (F12) qui affiche les messages console.log et les erreurs JavaScript."
  ],
  [
   "Contraste",
   "Rapport de luminosité entre texte et fond. AA : 4,5:1 ; AAA : 7:1."
  ],
  [
   "CRUD",
   "Create, Read, Update, Delete : les quatre opérations de base sur des données."
  ],
  [
   "Délégation d'événements",
   "Un seul écouteur sur un parent pour gérer les événements de tous ses enfants."
  ],
  [
   "DOM",
   "Document Object Model : arbre d'objets représentant la page, manipulable en JavaScript."
  ],
  [
   "Échappement",
   "Remplacement des caractères spéciaux (< > & \" ') par des entités pour qu'ils soient affichés et non interprétés."
  ],
  [
   "Élément",
   "Balise ouvrante + contenu + balise fermante (ou élément vide)."
  ],
  [
   "Espace de noms",
   "Objet global unique (window.OC) qui regroupe tout le code d'une application pour éviter les conflits de noms."
  ],
  [
   "Événement",
   "Action détectée par le navigateur (click, input, submit, keydown…) à laquelle on réagit avec addEventListener."
  ],
  [
   "Flexbox",
   "Modèle de mise en page CSS sur un axe (ligne ou colonne)."
  ],
  [
   "Focus",
   "Élément actuellement actif au clavier ; doit toujours être visible."
  ],
  [
   "Fonction fléchée",
   "Syntaxe courte d'une fonction : (a, b) => a + b."
  ],
  [
   "Grid",
   "Modèle de mise en page CSS en deux dimensions (lignes et colonnes)."
  ],
  [
   "Hash (#)",
   "Partie de l'URL après #, utilisée par les routeurs d'applications d'une seule page ; sa modification déclenche hashchange."
  ],
  [
   "Hachage",
   "Transformation irréversible d'un mot de passe en empreinte (SHA-256…), salée pour éviter les attaques par dictionnaire."
  ],
  [
   "IIFE",
   "Immediately Invoked Function Expression : fonction exécutée dès sa définition pour créer une portée privée."
  ],
  [
   "Index (IndexedDB)",
   "Structure qui permet de rechercher rapidement des objets par une propriété autre que la clé."
  ],
  [
   "IndexedDB",
   "Base de données NoSQL intégrée au navigateur : objets, fichiers, transactions, index."
  ],
  [
   "JSON",
   "JavaScript Object Notation : format texte d'échange de données ; JSON.stringify / JSON.parse."
  ],
  [
   "Landmark",
   "Zone repère d'une page (header, nav, main, aside, footer) permettant une navigation rapide."
  ],
  [
   "LocalStorage",
   "Stockage clé/valeur persistant du navigateur, limité à quelques Mo de texte."
  ],
  [
   "Media query",
   "Règle CSS conditionnelle (@media (min-width: 900px)) selon l'écran ou les préférences."
  ],
  [
   "Mobile first",
   "Méthode qui écrit d'abord le CSS du petit écran puis l'enrichit pour les écrans plus larges."
  ],
  [
   "Object store",
   "Équivalent d'une table dans IndexedDB."
  ],
  [
   "Portée (scope)",
   "Zone du code où une variable existe (bloc, fonction, globale)."
  ],
  [
   "prefers-reduced-motion",
   "Préférence système indiquant que l'utilisateur souhaite moins d'animations."
  ],
  [
   "Promesse",
   "Objet représentant un résultat futur : en attente, tenue ou rompue."
  ],
  [
   "Responsive",
   "Capacité d'une interface à s'adapter à toutes les tailles d'écran."
  ],
  [
   "SPA",
   "Single Page Application : application d'une seule page HTML dont le contenu change sans rechargement."
  ],
  [
   "Sélecteur",
   "Partie d'une règle CSS qui désigne les éléments ciblés."
  ],
  [
   "Sémantique",
   "Utilisation des balises HTML selon leur sens et non leur apparence."
  ],
  [
   "Spécificité",
   "Poids d'un sélecteur CSS : id > classe/attribut/pseudo-classe > élément."
  ],
  [
   "Template literal",
   "Chaîne entre accents graves `…` qui accepte ${expressions} et les retours à la ligne."
  ],
  [
   "Transaction",
   "Groupe d'opérations de base de données qui réussissent toutes ou sont toutes annulées."
  ],
  [
   "TVA / HT / TTC",
   "Hors taxes + taxe sur la valeur ajoutée = toutes taxes comprises. TTC = HT × (1 + taux)."
  ],
  [
   "Variable CSS",
   "Propriété personnalisée (--nom) lue avec var(--nom) ; base des thèmes."
  ],
  [
   "Viewport",
   "Zone d'affichage du navigateur ; la balise meta viewport adapte la page aux mobiles."
  ],
  [
   "WCAG",
   "Web Content Accessibility Guidelines : règles internationales d'accessibilité (niveaux A, AA, AAA)."
  ],
  [
   "XSS",
   "Cross-Site Scripting : faille d'injection de code dans la page via une donnée non échappée."
  ]
 ],
 "memos": [
  {
   "id": "memo-html",
   "titre": "Fiche mémo HTML5",
   "part": "html",
   "blocs": [
    [
     "Squelette",
     "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Titre</title>\n  <link rel=\"stylesheet\" href=\"css/style.css\">\n</head>\n<body>\n  <script src=\"js/app.js\" defer></script>\n</body>\n</html>"
    ],
    [
     "Landmarks",
     "<header> <nav aria-label=\"…\"> <main> (1 seul)\n<aside> <footer> <section> <article>"
    ],
    [
     "Contenus",
     "<h1>…<h6>  <p>  <strong> <em>\n<ul>/<ol> + <li>   <a href=\"#id\">\n<img src alt width height>  <figure><figcaption>"
    ],
    [
     "Formulaires",
     "<label for=\"x\">  <input id=\"x\" name=\"x\" type=\"email\" required>\n<select> <option>   <textarea>\n<fieldset><legend>   <button type=\"submit\">"
    ],
    [
     "Tableaux",
     "<table><caption>\n<thead><tr><th scope=\"col\">\n<tbody><tr><td>   <tfoot> (totaux)\ncolspan / rowspan"
    ],
    [
     "Accessibilité",
     "alt descriptif (ou alt=\"\" décoratif)\naria-label · aria-expanded · aria-current=\"page\"\naria-live=\"polite\" · aria-describedby · <dialog>\nLien d'évitement · focus visible"
    ]
   ]
  },
  {
   "id": "memo-css",
   "titre": "Fiche mémo CSS3",
   "part": "css",
   "blocs": [
    [
     "Sélecteurs",
     "p  .classe  #id  [data-x=\"y\"]\n.parent .enfant   .a.b   a:hover\n:focus-visible  li:nth-child(even)  ::before\nSpécificité : id(1,0,0) > classe(0,1,0) > élément(0,0,1)"
    ],
    [
     "Boîte",
     "*, *::before, *::after { box-sizing: border-box; }\nmargin | border | padding | content\nmargin-inline: auto (centrer)"
    ],
    [
     "Flexbox",
     "display:flex; gap; flex-wrap:wrap;\njustify-content (axe principal)\nalign-items (axe secondaire)\nflex: 1 (prend la place restante)"
    ],
    [
     "Grid",
     "display:grid; gap;\ngrid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\ngrid-template-areas: \"a b\" \"a c\";\ngrid-column: span 2;"
    ],
    [
     "Responsive",
     "@media (min-width: 900px) { … }\nclamp(min, idéal, max)   rem  %  vw  ch\nimg { max-width:100%; height:auto }\nzones tactiles ≥ 44 px"
    ],
    [
     "Thèmes & animations",
     ":root { --bg: #f4f1ea; }  var(--bg, secours)\n[data-theme=\"dark\"] { --bg: #0b0c12; }\ntransition: transform .2s;  @keyframes nom {…}\n@media (prefers-reduced-motion: reduce) { … }"
    ]
   ]
  },
  {
   "id": "memo-js",
   "titre": "Fiche mémo JavaScript",
   "part": "js",
   "blocs": [
    [
     "Bases",
     "const / let   `Total : ${x}`   typeof\n=== !==  && || !   cond ? a : b\nif / else if / else   switch / case / break"
    ],
    [
     "Boucles & fonctions",
     "for (const x of tab) { }\nfor (let i = 0; i < n; i++) { }\nfunction f(a, b = 1) { return a + b; }\nconst f = (a) => a * 2;"
    ],
    [
     "Tableaux & objets",
     "tab.filter(fn)  .map(fn)  .find(fn)\n.reduce((acc, x) => acc + x, 0)\n.some .every .includes .sort((a, b) => a - b)\nconst { a, b } = obj;   { ...obj, a: 2 }"
    ],
    [
     "DOM & événements",
     "document.querySelector('.x') / querySelectorAll\nel.textContent  el.classList.toggle('on')\nel.dataset.id  document.createElement('li')  parent.append(el)\nel.addEventListener('click', (e) => e.target.closest('[data-action]'))"
    ],
    [
     "Formulaires & stockage",
     "form.addEventListener('submit', (e) => { e.preventDefault(); … })\nObject.fromEntries(new FormData(form))\nlocalStorage.setItem(k, JSON.stringify(v))\nJSON.parse(localStorage.getItem(k)) ?? défaut"
    ],
    [
     "Asynchrone & IndexedDB",
     "async function f() { try { await p; } catch (e) { } finally { } }\nPromise.all([a(), b()])\nindexedDB.open(nom, version) → onupgradeneeded / onsuccess\ndb.transaction('store', 'readwrite').objectStore('store').put(obj)"
    ]
   ]
  },
  {
   "id": "memo-ondea",
   "titre": "Fiche mémo Architecture Ondea",
   "part": "projet",
   "blocs": [
    [
     "Fichiers CSS",
     "themes.css   jetons Obsidienne & Or (clair/sombre)\nstyle.css    base, mise en page, responsive\ncomponents.css  boutons, cartes, tableaux, modales\nanimations.css  micro-interactions (reduced motion)\nprint.css    documents A4"
    ],
    [
     "Fichiers JS (ordre)",
     "utils.js → storage.js → database.js → ui.js\n→ charts.js → permissions.js → auth.js\n→ notifications.js → stocks.js → seed.js → router.js\n→ modules métier → app.js (démarrage)"
    ],
    [
     "Données",
     "IndexedDB « ondea-commandes » : 14 stores\nusers clients categories suppliers products\norders shipments stockMovements anomalies\nhistory notifications files counters meta\nLocalStorage « oc. » : thème, session, préférences"
    ],
    [
     "Statuts",
     "brouillon → attente → validée → préparation\n(→ partielle) → prête → expédiée → livrée\nannulée (libère le stock réservé)"
    ],
    [
     "Règles métier",
     "Montants en centimes, taux en points de base\nTVA ligne par ligne puis additionnée\nStock disponible = physique − réservé\nChaque écriture : OC.perm.require(droit)"
    ],
    [
     "Profils",
     "Directeur : tous les droits\nMagasinier : commandes (sans finances),\npréparation, expéditions, stock opérationnel"
    ]
   ]
  }
 ]
};
