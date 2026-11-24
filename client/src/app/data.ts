/**
 * Contenu du CV, codé en dur (anciennement base MySQL cv.sql + API PHP).
 * Pour mettre à jour le site, modifier directement ce fichier.
 */
import { Cv } from './models';

export const CV: Cv = {
  network: [
    {
      name: 'github',
      title: 'Mon GitHub',
      link: 'https://github.com/Tracks12',
    },
    {
      name: 'linkedin',
      title: 'Mon LinkedIn',
      link: 'https://www.linkedin.com/in/florian-cardinal-13317b150',
    },
  ],

  /** status en pourcentage (0-100) */
  skills: [
    {
      id: 'angular',
      title: 'Angular',
      status: 98,
    },
    {
      id: 'vue',
      title: 'Vue',
      status: 90,
    },
    {
      id: 'react',
      title: 'React',
      status: 95,
    },
    {
      id: 'dotnet',
      title: '.NET Core',
      status: 95,
    },
    {
      id: 'docker',
      title: 'Docker',
      status: 90,
    },
    {
      id: 'rocket',
      title: 'Rocket Rust',
      status: 82,
    },
    {
      id: 'cicd',
      title: 'Azure / AWS',
      status: 95,
    },
    {
      id: 'python',
      title: 'Python',
      status: 90,
    },
  ],

  /** du plus récent au plus ancien ; description en HTML */
  experiences: [
    {
      entity: 'ASC-it',
      job: 'Tech Lead',
      period: "oct. 2023 - aujourd'hui",
      description:
        'France',
      technologies: [
        'Angular',
        'Express.js',
        '.NET Core',
        'Rust',
        'Laravel',
        'Docker',
        'AWS',
        'TypeScript',
        'Material'
      ]
    },
    {
      entity: 'Infomil',
      job: 'ingénieur sécurité',
      period: "sep. 2020 - aujourd'hui",
      description:
        'France<br /><br />Dans le cadre d’un vaste programme de modernisation des infrastructures internes, j’ai été chargé d’améliorer la qualité, la sécurité et la cohérence des environnements de développement et d’intégration continue. L’objectif était de normaliser les processus, renforcer la sécurité applicative et mettre en place des outils DevSecOps performants pour soutenir les équipes de développement. Le périmètre incluait la mise en place d’une nouvelle plateforme GitLab, la configuration d’un registre d’artefacts Nexus Sonatype, l’analyse de vulnérabilités via Checkmarx, ainsi que l’optimisation des distributions WSL utilisées par les équipes. Cette mission s’est déroulée au sein d’une équipe dédiée à la transformation technique et à la fiabilisation des environnements.',
      realisations: [
        'Modernisation et optimisation de l’infrastructure de développement',
        'Normalisation et formalisation des process techniques pour harmoniser les pratiques entre les équipes',
        'Mise en place et configuration complète de GitLab (CI/CD, gestion des dépôts, intégration des runners)',
        'Déploiement et configuration avancée du registre d’artefacts Nexus Sonatype',
        'Analyse, détection et remédiation des vulnérabilités avec Checkmarx (SAST)',
        'Maintenance, mise à jour et sécurisation des distributions WSL dédiées aux développeurs',
        'Mise en place et structuration d’un process sécurisé pour le cycle de développement (DevSecOps)',
        'Documentation des procédures, diffusion des bonnes pratiques et accompagnement des équipes',
        'Amélioration continue de la sécurité, de la conformité et de la standardisation des environnements',
        'Documentation des process de traitement des failles de sécurité'
      ],
      technologies: [
        'Checkmarx',
        'GitLab Ultimate',
        'WSL',
        'React',
        'Angular',
        '.NET Core',
        'Perforce',
        'Suite Kali Linux',
        'Darkmoon',
        'Docker',
        'PhP',
        'C#',
        'Python',
        'Bash'
      ]
    },
    {
      entity: 'MedHubCompany',
      job: 'développeur full stack',
      period: "juil. 2024 - févr. 2025",
      description:
        'France<br /><br />Dans le cadre d’un projet from scratch, MedHubCompany veut mettre en place une application permettant aux grossistes répartiteurs de pouvoir faciliter les échanges de transactions des produits pharmaceutiques, j’ai donc été en charge de la réalisation des tâches fullstack du backlog du projet MedHubPlace, une solution permettant aux clients de faciliter leurs échanges professionnels dans le domaine de l’achat et revente de médicaments. L’équipe se compose de 3 développeurs, j’ai pu participer à la réalisation des fonctionnalités ainsi que la maintenance dans un environnement Agile',
      realisations: [
        'Développement de l’IHM avec Angular CLI',
        'Développement de l’intelligence métier avec .NET Core, Entity Framework et SignalR',
        'Gestion de la base de données avec PostgreSQL',
        'Conformité aux cahiers des charges',
        'Versionnage du code et gestion des tickets avec GitHub',
        'Conception et design pattern',
        'Test d’intégration avec Cypress',
        'Intégration Swagger',
        'Déploiement avec Azure Web Application',
        'Recettage et planification des tâches'
      ],
      technologies: [
        'Angular',
        '.NET Core',
        'Azure DevOps',
        'Tailwind',
        'Docker',
        'Bash'
      ]
    },
    {
      entity: 'ASC-it',
      job: 'Chef de projet',
      period: "janv. 2022 - oct. 2023",
      description:
        'France',
      realisations: [
        'Gestion des projets et composants internes & externes',
        'Refonte d’applications E-Commerce vers une architecture logicielle développée en micro services',
        'Rédaction des Users Stories et chiffrage',
        'Planification des tâches des projets au sein de l’équipe et de la RoadMap',
        'Mise en place des processus du GitFlow',
        'Gestions des risques',
        'Réalisation de la politique de déploiement continu',
      ],
      technologies: [
        'Angular',
        'Express.js',
        '.NET Core',
        'Rust',
        'Laravel',
        'Docker',
        'AWS',
        'TypeScript',
        'Material'
      ]
    },
    {
      entity: 'ASC-it',
      job: 'développeur full stack',
      period: "oct. 2021 - janv. 2022",
      description:
        'France',
      realisations: [
        'Développement des outils d’optimisation des processus.',
        'Maintenance site E-Commerce avec WordPress',
        'Réalisation de projet de refonte site vitrine avec Angular et Express TS.',
        'Conception d’architecture micro service afin de permettre l’implémentation d’un SSO personnalisable avec Express TS et .NET Core.',
        'Mise en place de pipeline CI CD',
      ],
      technologies: [
        'Angular',
        'Express.js',
        '.NET Core',
        'Rust',
        'Laravel',
        'Docker',
        'AWS',
        'TypeScript',
        'Material'
      ]
    },
    {
      entity: 'ORPALIS',
      job: 'développeur web',
      period: "sept. 2020 - sept. 2021",
      description:
        'France<br /><br />Maintenance et Développement des outils du projet <a target="_blank" href="https://avepdf.com/en">AvePDF</a><br />Réalisation UI / UX Design des nouveau outils<br />Gestion de déploiement avec Azure Pipeline',
      technologies: [
        'React.js',
        '.NET Core',
        'Azure DevOps',
        'JavaScript',
        'C#'
      ]
    },
    {
      entity: 'WHYNOGROUP EU',
      job: 'développeur web',
      period: 'févr. 2019 - juin. 2020',
      description:
        "France<br /><br />Conception, Réalisation et Déploiement d'IHM Responsive adapter aux API de Whynogroup<br />Résolutions de bugs graphiques sur les pages web",
      technologies: [
        'PhP',
        'HTML5 / CSS3',
        'Bootstrap',
        '3CX',
        'JavaScript',
        'OVH'
      ]
    },
    {
      entity: 'Conseil Départemental HG',
      job: 'développeur web junior',
      period: 'mai. 2019 - juin. 2019',
      description:
        'France<br /><br />Création d’un formulaire d’entretien professionnel<br />Mettre à jour et Développer l’infrastructure intranet de l’organisation (Portail Web)',
      technologies: [
        'Docker',
        'Symfony',
        'Doctrine',
        'PhP',
        'HTML5 / CSS3',
        'JavaScript',
        'Fixtures Tests',
        'JQuery'
      ]
    },
    {
      entity: 'Indépendant',
      job: 'développeur web',
      period: 'juil. 2017 - sept. 2018',
      description: 'France<br />',
      technologies: [
        'Angular',
        '.NET',
        'Symfony',
        'HTML5 / CSS3',
        'PhP',
        'JavaScript',
        'JQuery'
      ]
    },
  ],

  /** du plus récent au plus ancien ; title et description en HTML */
  formations: [
    {
      date: 2023,
      entity: 'IPI Institut Poly Informatique',
      title: "Master professionnel Expert en Informatique et Système d'Informations",
      description: 'Développement, Conception & Gestion de projets',
    },
    {
      date: 2021,
      entity: 'IPI Institut Poly Informatique',
      title: "Licence Professionnelle Concepteur Développeur d'application Web & Mobile",
      description: 'Développement, Conception & Gestion de projets',
    },
    {
      date: 2020,
      entity: 'Lycée GT Déodat de Séverac',
      title: 'Brevet Technicien Supérieur<br /><br />',
      description: 'Systèmes Numériques<br />Mention Bien',
    },
    {
      date: 2020,
      entity: '3CX Basic Certified Engineer v16',
      title: 'Formation online<br />Basic Telecom Engineer',
      description:
        'Formation basique sur les outils 3CX<br />Installation, Configuration et Maintenance serveur',
      link: 'https://customer.3cx.com/prm/documents/certification.ashx?c=f2oFUTH2rj',
    },
    {
      date: 2017,
      entity: 'Udemy.com',
      title: 'Formation online<br />Web Designer',
      description: 'Illustrator, PhotoShop, XDesign<br />Web Design',
      link: 'https://www.udemy.com/certificate/UC-GMXYYE9B/',
    },
    {
      date: 2017,
      entity: 'Udemy.com',
      title: 'Formation online<br />Web Developer',
      description: 'HTML5/CSS3, JavaScript, JQuery, Php7, MySQL<br />Responsive Design',
      link: 'https://www.udemy.com/certificate/UC-8XQUXMMT/',
    },
    {
      date: 2017,
      entity: 'Lycée GT Déodat de Séverac',
      title: 'Baccalauréat STI2D<br /><br />',
      description: 'Système Informatique et Numérique<br />Mention Assez Bien',
    },
    {
      date: 2016,
      entity: 'Codecademy.com',
      title: 'Formation online<br />Programer & Developer',
      description:
        'HTML5/CSS3, JavaScript, JQuery, Python, Ruby<br />Responsive Design, Deploy a Website',
      link: 'https://www.codecademy.com/profiles/Tracks12',
    },
  ],

  /** maquettes du dossier portfolio/ (image : assets/img/portfolio/pN.jpg) */
  portfolio: [
    {
      key: 'bouton',
      items: [
        {
          name: 'btn-design-UI_1.0',
          title: 'btn design UI_1.0',
          url: '/portfolio/btn-design-UI_1.0/',
          image: '/assets/img/portfolio/p0.jpg',
        },
        {
          name: 'btn-design-UI_2.0',
          title: 'btn design UI_2.0',
          url: '/portfolio/btn-design-UI_2.0/',
          image: '/assets/img/portfolio/p1.jpg',
        },
        {
          name: 'btn-design-UI_3.0',
          title: 'btn design UI_3.0',
          url: '/portfolio/btn-design-UI_3.0/',
          image: '/assets/img/portfolio/p2.jpg',
        },
        {
          name: 'btn-design-UI_4.0',
          title: 'btn design UI_4.0',
          url: '/portfolio/btn-design-UI_4.0/',
          image: '/assets/img/portfolio/p3.jpg',
        },
        {
          name: 'btn-design-UI_5.0',
          title: 'btn design UI_5.0',
          url: '/portfolio/btn-design-UI_5.0/',
          image: '/assets/img/portfolio/p4.jpg',
        },
        {
          name: 'btn-design-UI_6.0',
          title: 'btn design UI_6.0',
          url: '/portfolio/btn-design-UI_6.0/',
          image: '/assets/img/portfolio/p5.jpg',
        },
      ],
    },
    {
      key: 'chargement',
      items: [
        {
          name: 'loader-design-UI_1.0',
          title: 'loader design UI_1.0',
          url: '/portfolio/loader-design-UI_1.0/',
          image: '/assets/img/portfolio/p6.jpg',
        },
      ],
    },
    {
      key: 'connexion',
      items: [
        {
          name: 'login-design-UI_1.0',
          title: 'login design UI_1.0',
          url: '/portfolio/login-design-UI_1.0/',
          image: '/assets/img/portfolio/p7.jpg',
        },
        {
          name: 'login-design-UI_2.0',
          title: 'login design UI_2.0',
          url: '/portfolio/login-design-UI_2.0/',
          image: '/assets/img/portfolio/p8.jpg',
        },
        {
          name: 'login-design-UI_3.0',
          title: 'login design UI_3.0',
          url: '/portfolio/login-design-UI_3.0/',
          image: '/assets/img/portfolio/p9.jpg',
        },
        {
          name: 'login-design-UI_4.0',
          title: 'login design UI_4.0',
          url: '/portfolio/login-design-UI_4.0/',
          image: '/assets/img/portfolio/p10.jpg',
        },
      ],
    },
    {
      key: 'navigation',
      items: [
        {
          name: 'nav-design-UI_1.0',
          title: 'nav design UI_1.0',
          url: '/portfolio/nav-design-UI_1.0/',
          image: '/assets/img/portfolio/p11.jpg',
        },
        {
          name: 'nav-design-UI_2.0',
          title: 'nav design UI_2.0',
          url: '/portfolio/nav-design-UI_2.0/',
          image: '/assets/img/portfolio/p12.jpg',
        },
        {
          name: 'nav-design-UI_3.0',
          title: 'nav design UI_3.0',
          url: '/portfolio/nav-design-UI_3.0/',
          image: '/assets/img/portfolio/p13.jpg',
        },
        {
          name: 'nav-design-UI_4.0',
          title: 'nav design UI_4.0',
          url: '/portfolio/nav-design-UI_4.0/',
          image: '/assets/img/portfolio/p14.jpg',
        },
      ],
    },
    {
      key: 'panneau',
      items: [
        {
          name: 'slide-design-UI_1.0',
          title: 'slide design UI_1.0',
          url: '/portfolio/slide-design-UI_1.0/',
          image: '/assets/img/portfolio/p15.jpg',
        },
      ],
    },
  ],
};

/** redirections courtes : /github, /linkedin, /LegaChat */
export const REDIRECTS: Record<string, string> = {
  '/github': 'https://github.com/Tracks12',
  '/linkedin': 'https://www.linkedin.com/in/florian-cardinal-13317b150',
};

/** destinataire du formulaire de contact (base64, pour limiter le scraping) */
export const CONTACT_MAIL = 'Y2FyZGluYWwuZmxvcmlhbi5lcndhbkBnbWFpbC5jb20=';

/** contenu affiché par le terminal animé de l'accueil */
export const README = String.raw` _    _                        __
| |  | |      _ _           _  \ \
| |__| | ___ | | | ___     (_)  | |
|  __  |/ _ \| | |/ _ \     _   | |
| |  | |  __/| | | (_) |   (_)  | |
|_|  |_|\___||_|_|\___/        /_/`;
