# Moaz El-Bssawy — Portfolio

Personal portfolio website of **Moaz El-Bssawy**, Web Developer.

A dark, neon-themed single page built with **React + Vite**, fully bilingual (**English / العربية** with RTL support) and available in both dark and light themes.

## Live site

https://el-bssawy.github.io/Portfolio/

## Tech stack

- React 19 + Vite
- Plain CSS (custom properties, no UI framework)
- Font Awesome (self-hosted webfonts)
- GitHub Actions → GitHub Pages

## Sections

- Hero — intro, CV download, tech chips
- About — bio, code card, tech logo marquee, CV button
- Skills — animated skill bars with a "show more" block
- Projects — filterable grid with a "show more" button
- Timeline — journey / roadmap
- Contact — Formspree form, email, phone (WhatsApp)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000/Portfolio/
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint     # eslint
```

## Project structure

```
public/            static files (logo, CV pdf)
src/
  assets/          images and skill logos
  components/      React sections and UI pieces
  context/         language provider (EN/AR + RTL)
  CSS/             global styles, Font Awesome, normalize
  data/            site content, projects, skills
  webfonts/        self-hosted Font Awesome woff2 files
```

## Editing content

- Text (EN/AR): `src/data/content.js`
- Projects: `src/data/projects.js`
- Skills and logos: `src/data/skills.js`
- CV file: replace `public/Moaz_Hamada_Salem_Resume.pdf`

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

The Vite `base` is set to `/Portfolio/` in `vite.config.js` so asset URLs resolve correctly on the Pages subpath.
