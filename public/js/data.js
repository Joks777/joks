// Contenu de secours du portfolio, au même format que la réponse de /api/content.
// Le site l'affiche si l'API ne répond pas, et « npm run db:setup » s'en sert pour remplir la base.
// Une fois la base en place, c'est l'espace administrateur qui fait foi : ce fichier n'est plus qu'une sauvegarde.
// ► Remplace chaque texte « À compléter » par tes propres informations.
const FALLBACK = {
  profile: {
    givenNames: 'Développeur',
    firstName: 'Lionel',
    lastName: 'Biaou',
    location: 'Bénin',
    statusText: 'ouvert aux opportunités',
    available: true,
    intro: "Développeur **Web & Mobile**. Passionné par la création d'applications performantes et intuitives, je suis toujours à la recherche de nouveaux défis pour mettre mes compétences à l'épreuve.",
    aboutTitle: 'À propos de moi',
    about: [
      "Titulaire d'une Licence Professionnelle en Systèmes Informatiques et Logiciels, je me présente comme développeur web et mobile, avec une base solide en Laravel.",
      "Mon objectif est de contribuer à des projets qui ont un impact réel, en utilisant mes compétences pour créer des applications web et mobiles robustes et conviviales."
    ],
    goal: 'Mon objectif est de contribuer à des projets qui ont un impact réel, en utilisant mes compétences pour créer des applications web et mobiles robustes et conviviales.',
    email: 'lionelbiaou17@gmail.com',
    photoUrl: 'img/file_00000000fcd4820e9a0097f79352175b.png',
    cvUrl: 'img/CV professionnel gris simple.pdf',
    contactTitle: 'Un projet ou un poste ? Parlons-en.'
  },

  // Projets : cartes de l'accueil (featured), page « Tous les projets » et page détails (#slug).
  // Un bouton démo ou code apparaît dès que demo ou code est renseigné.
  projects: [
    {
      id: 'projet-1', seed: 1, featured: true, title: 'DEVHUB', kind: 'Web/ACADEMIQUE', badge:'En Cours ', year:'2026',
      cats: ['Web'],
      img:'img/devhub-logo.jpg', logo: false,
      tag: 'Collaborez avec d\'autres développeurs pour créer des applications web et mobiles innovantes.',
      summary: 'DevHub est une plateforme de collaboration pour les développeurs, permettant de partager des idées, de travailler sur des projets communs et d\'apprendre les uns des autres.',
      about: ['DevHub est une plateforme de collaboration pour les développeurs, permettant de partager des idées, de travailler sur des projets communs et d\'apprendre les uns des autres. Le projet vise à créer un espace où les développeurs peuvent se connecter, collaborer et améliorer leurs compétences techniques.'],
      features: ['Mise en place d\'un système de gestion de projets collaboratifs.', 'Intégration d\'outils de communication pour faciliter la collaboration entre les membres.', 'Création d\'un espace de partage de ressources et de documentation technique.'],
      stepsTitle: 'Étapes du projet', steps: ['Analyse des besoins et définition des fonctionnalités.', 'Conception de l\'architecture de la plateforme.', 'Développement des fonctionnalités principales.', 'Tests et débogage.', 'Déploiement et mise en ligne.'],
      role: 'Conception et développement de la plateforme, intégration des fonctionnalités collaboratives, tests et déploiement.',
      stack: ['Laravel', 'React.js', 'MySQL', 'Bootstrap'],
      gallery: [],
      facts: [{ label: 'Type', value: 'Project académique' }],
      demo: null, code: null
    },
    {
      id: 'projet-2', seed: 2, featured: true, title: 'ParakouConnect', kind: 'Mobile', badge: 'En Cours', year: '2026',
      cats: ['Mobile'],
      img: 'img/logo-horizontal.png', logo: false,
      tag: 'Une application mobile pour connecter les utilisateurs de Parakou.',
      summary: 'ParakouConnect est une application mobile conçue pour connecter les utilisateurs de la ville de Parakou, facilitant la communication et le partage d\'informations.',
      about: ['ParakouConnect est une application mobile développée dans le cadre d\'un projet académique. L\'objectif était de créer une solution pour améliorer la communication entre les habitants de Parakou. Mon rôle a consisté à concevoir et développer l\'application.'],
      features: ['Carte interactive des lieux d\'intérêt.', 'Système de messagerie instantanée.', 'Profil utilisateur avec informations personnelles.'],
      stepsTitle: 'Étapes du projet', steps: ['Analyse des besoins et définition des fonctionnalités.', 'Conception de l\'architecture de l\'application.', 'Développement des fonctionnalités principales.', 'Tests et débogage.', 'Déploiement et mise en ligne.'],
      role: 'Conception et développement de l\'application mobile, intégration des fonctionnalités, tests et déploiement.',
      stack: ['React Native', 'Node.js', 'MongoDB'],
      gallery: [],
      facts: [{ label: 'Type', value: 'Project académique' }],
      demo: null, code: null
    }
  ],

  services: [
    { tag: 'Web', title: 'Développement web', description: 'Sites et applications web modernes, sécurisés et adaptés à chaque besoin, construits avec Laravel.' },
    { tag: 'Mobile', title: 'Applications mobiles', description: 'Applications mobiles simples et efficaces, avec une expérience utilisateur soignée.' },
    { tag: 'Design', title: 'Design', description: 'Design graphique et ergonomique pour des applications et sites web.' },
    { tag: 'Conception et Modélisation', title: 'Conception', description: 'Conception de solutions numériques innovantes, en tenant compte des besoins des utilisateurs.Analyse du besoin, diagrammes UML et modélisation de bases de données avant le développement.' }
  ],

  // Dates au format AAAA-MM ; end: null = poste actuel. months : durée affichée et additionnée dans les chiffres clés.
  experiences: [
    {
      role: 'Developpeur web/Mobile', company: 'DIGIT Consults SARL', location: 'Cotonou,Bénin',
      start: '2026-02', end: '2026-05', months: 3,
      tasks: ['Participation à la conception et au développement d\'applications web et mobiles.', 'Collaboration avec l\'équipe pour résoudre les problèmes techniques et améliorer les performances des applications.' , 'Mise en œuvre de nouvelles fonctionnalités et maintenance des applications existantes.']
    }
  ],

  // kind: 'tech' = compétences techniques (comptées dans les chiffres clés), 'soft' = savoir-être
  skillGroups: [
    { name: 'Front-end', kind: 'tech', skills: ['HTML', 'CSS', 'JavaScript'] },
    { name: 'Back-end', kind: 'tech', skills: ['PHP', 'Laravel', 'Node.js'] },
    { name: 'Mobile', kind: 'tech', skills: ['Flutter', 'Android(Java, Kotlin)'] },
    { name: 'Bases de données', kind: 'soft', skills: ['MySQL', 'PostgreSQL', 'MongoDB'] },
    { name: 'Langages de programmation', kind: 'soft', skills: ['Python', 'C', 'C++', 'Java'] }
  ],

  socials: [
    { label: 'github.com/ton-pseudo', url: 'https://github.com/Joks777'},
    { label: 'linkedin.com/in/ton-profil', url: 'https://www.linkedin.com/in/lionelbiaou' }
  ]
};
