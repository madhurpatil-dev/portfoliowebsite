# Madhur Patil Portfolio

This repository contains the Angular portfolio application. The original static HTML, CSS, and
JavaScript site has been removed; the migrated site and its required assets are maintained here.

## Requirements

- Node.js 26 LTS (Angular 22 also supports Node.js 22.22.3+ and 24.15+)
- npm

## Run locally

```powershell
npm ci
npm start
```

Open the local URL printed by Angular CLI (normally `http://localhost:4200`).

## Build, test, lint, and format

```powershell
npm run build
npm test
npm run lint
npm run format:check
```

The production build prerenders the single portfolio route to `dist/angular-app/browser`.

## Edit portfolio content

Update the typed, readonly content in `src/app/data/portfolio.data.ts`:

- `skillGroups` for skill categories and tags
- `experience` for roles, bullet points, employer logos, and technology tags
- `projects` for descriptions, preview images, destinations, and action labels
- `education` for qualifications and scores
- `navigationLinks` for section navigation

Text that should be emphasized in experience bullets belongs in the `emphasis` field. Place local
images under `public/assets/Images/` and documents under `public/assets/PDFs/`, then reference them
with paths beginning `assets/`.

## Source-to-Angular mapping

| Original static source (removed)                                     | Angular destination                                                                                                   |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `index.html`                                                         | `src/index.html` for document metadata; page content is split among the standalone components below                   |
| Existing header/nav markup                                           | `src/app/components/header/header.{ts,html,css}`                                                                      |
| Existing hero and architecture illustration                          | `src/app/components/hero/hero.{ts,html,css}`                                                                          |
| About, skills, experience, projects, education, and contact sections | Matching component folders under `src/app/components/`; repeated entries render from `src/app/data/portfolio.data.ts` |
| Existing footer and back-to-top button                               | `src/app/components/footer/` and `src/app/components/back-to-top/`                                                    |
| `scripts/main.js`                                                    | Angular bootstrapping in `src/main.ts`; current year in the footer component                                          |
| `scripts/modules/navigation.js`                                      | `src/app/components/header/` signal state and keyboard/resize handlers                                                |
| `scripts/modules/theme.js`                                           | `src/app/services/theme.service.ts`                                                                                   |
| `scripts/modules/motion.js`                                          | `src/app/directives/reveal.directive.ts` and `src/app/services/reveal.service.ts`                                     |
| `scripts/modules/back-to-top.js`                                     | `src/app/components/back-to-top/`                                                                                     |
| `styles/tokens.css`, `base.css`, `layout.css`, `responsive.css`      | Global styles in `src/styles.css`                                                                                     |
| `styles/components.css`                                              | Scoped component styles in `src/app/components/*/*.css`                                                               |
| `Images/*`, `PDFs/*`                                                 | Preserved at `public/assets/Images/` and `public/assets/PDFs/`                                                        |
| `_redirects`                                                         | `netlify.toml` redirects `/index.html` to `/`                                                                         |

## Deploy to the existing Netlify site

The app is prerendered as static HTML (SSG), so it needs no Netlify Functions or persistent Node
server. The Angular app and its `netlify.toml` are now at the repository root. Set the existing
Netlify site's **Base directory** to blank (clear `angular-app` if it was set there), then deploy
from the existing production branch. The root configuration sets the build command, Node 26, publish
directory, and `/index.html` redirect.

The prerendered root page includes SEO metadata. `public/robots.txt` and `public/sitemap.xml` are
published with the app.
