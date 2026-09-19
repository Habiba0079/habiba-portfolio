# Habiba's portfolio (React + Vite)

A platformer-style portfolio: a night sky of stars that scatter when you hover them,
a Start button that opens the intro, "?" blocks that jump to each level, and a
sticky game HUD that tracks your coins and current world.

## Run it

```bash
npm install
npm run dev      # open the local URL it prints
npm run build    # production build in /dist
```

## Edit your content

Everything (text, skills, projects, certificates, contact links) lives in `src/data.js`.

## Add images

1. Copy your files into `public/images/` (`projects/`, `certificates/`, or the root for your photo).
2. In `src/data.js`, replace `null` with the path, without a leading slash:

```js
screenshots: ['images/projects/drago-1.png', null, null],
```

Empty slots keep showing the "?" block until you add an image.

## Structure

```
src/
  data.js            all content
  App.jsx            page layout, coin counter, scroll spy
  components/        Hero, StarField, LevelNav, Stats, Projects, Trophies, Contact...
  hooks/             useReveal, useScrollSpy, useTypewriter
  styles/            base.css, hero.css, sections.css
```

## Deploy

`npm run build`, then upload `dist/` to Vercel, Netlify or GitHub Pages.
Asset paths are relative, so it also works from a sub-path.
