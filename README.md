# Site Portfolio 2018

## **[floriancardinal.000webhostapp.com](https://floriancardinal.000webhostapp.com/)**

---

## **Architecture**

Site 100 % statique en **Angular** (standalone components, signals) dans `/client/` : aucun back office, API ni base de données.

| Fichier / dossier                 | Rôle                                                        |
| --------------------------------- | ----------------------------------------------------------- |
| `src/app/data.ts`                 | **tout le contenu du CV** (réseaux, compétences, expériences, formations, portfolio, liens courts, README du terminal) |
| `src/app/app.ts`                  | composant racine (particules, thème, bouton "remonter")     |
| `src/app/components/`             | nav + horloge, terminal animé, profil, compétences, parcours, formations, portfolio, contact, footer |
| `src/app/theme.ts`                | thème clair/sombre selon l'heure + couleur de contraste     |
| `src/styles/`                     | styles globaux                                              |
| `public/assets/`                  | images, polices, CV pdf                                     |
| `public/portfolio/`               | maquettes UI du portfolio                                   |

Dépendances : Angular, [Font Awesome](https://fontawesome.com/v4/) 4.7.0, [particles.js](https://github.com/VincentGarreau/particles.js/) 2.0.0. Polices : Lato, Monospace.

### Mettre à jour le contenu

Modifier `client/src/app/data.ts` puis recompiler. Pour un nouveau projet de portfolio, ajouter son dossier dans `public/portfolio/`, son image dans `public/assets/img/portfolio/` et une entrée dans `CV.portfolio`.

### Formulaire de contact

Les champs sont vérifiés dans le navigateur, puis le client mail du visiteur s'ouvre avec le message pré-rempli (`mailto:`).

---

## **Développement**

```bash
cd client && npm install && npm start   # http://localhost:4200
```

## **Production**

```bash
cd client && npm ci && npm run build    # -> client/dist/client/browser
```

Le contenu de `client/dist/client/browser` se déploie sur n'importe quel hébergement statique (Apache : le `.htaccess` fourni renvoie les URL inconnues vers `index.html`, ce qui fait fonctionner `/github`, `/linkedin`, `/LegaChat`).

> Les 4 maquettes `portfolio/login-design-UI_*` sont des pages PHP (avec `portfolio/login.php`) : elles ne s'exécutent que sur un hébergement avec PHP.

---

## **Last Updates**

### Apr 28, 2020

- Dynamic theme
- Script fixed
- Update documentation updates

### Mar 23, 2020

- Explode all index views
- Php script fixed
- Style root var added
- Prepare css dynamic theme
- Data base update
- Add folder for assets
- Apply MVC architecture

### Sep 3, 2019

- Update php contact script
- Delete parasitic files
- Update portfolio link documentation
