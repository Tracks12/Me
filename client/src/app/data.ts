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
      id: 'html',
      title: 'HTML5',
      status: 98,
    },
    {
      id: 'js',
      title: 'JavaScript',
      status: 90,
    },
    {
      id: 'bootstrap',
      title: 'BootStrap',
      status: 90,
    },
    {
      id: 'mysql',
      title: 'MySQL',
      status: 80,
    },
    {
      id: 'css',
      title: 'CSS3',
      status: 95,
    },
    {
      id: 'jquery',
      title: 'JQuery',
      status: 90,
    },
    {
      id: 'php',
      title: 'PHP7',
      status: 85,
    },
    {
      id: 'python',
      title: 'Python2/3',
      status: 75,
    },
  ],

  /** du plus récent au plus ancien ; description en HTML */
  experiences: [
    {
      entity: 'ORPALIS',
      job: 'développeur web junior',
      period: "sep. 2020 - aujourd'hui",
      description:
        'France<br /><br />Maintenance et Développement des outils du projet <a target="_blank" href="https://avepdf.com/en">AvePDF</a><br /><br />Technologie: React, .NET Core',
    },
    {
      entity: 'WHYNOGROUP EU',
      job: 'développeur web front end',
      period: 'fév. 2019 - juin. 2020',
      description:
        "France<br /><br />Conception, Réalisation et Déploiement d'IHM Responsive adapter aux API de Whynogroup<br />Résolutions de bugs graphiques sur les pages web",
    },
    {
      entity: 'Conseil Départemental HG',
      job: 'stagiaire développeur web',
      period: 'mai. 2019 - juin. 2019',
      description:
        'France<br /><br />Création d’un formulaire d’entretien professionnel<br />Mettre à jour et Développer l’infrastructure intranet de l’organisation (Portail Web)<br />Technologie: Symfony',
    },
    {
      entity: 'Indépendant',
      job: 'développeur web',
      period: 'juil. 2017 - sept. 2018',
      description: 'France<br />',
    },
  ],

  /** du plus récent au plus ancien ; title et description en HTML */
  formations: [
    {
      date: 2020,
      entity: 'IPI Institut Poly Informatique',
      title: "Licence Professionnelle Concepteur Développeur d'application Web & Mobile",
      description: 'Développement, Conception & Gestion de projets<br />En cours...',
      link: '0',
    },
    {
      date: 2020,
      entity: 'Lycée GT Déodat de Séverac',
      title: 'Brevet Technicien Supérieur<br /><br />',
      description: 'Systèmes Numériques<br />Mention Bien',
      link: '0',
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
      link: '0',
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
  '/LegaChat': 'http://betawallahso.altervista.org/LegaChat/',
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
