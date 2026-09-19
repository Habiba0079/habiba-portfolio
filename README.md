# Habiba's portfolio (React + Vite)

A platformer-style portfolio.

- **Runway map:** a level map is fixed to the bottom of the screen. A pixel character walks along it as you
  scroll, jumps when she reaches a new section, holds a different item in each one (graduation cap, sword,
  laptop, trophy, letter) and collects a coin at every flag. The flags are the navigation: tap one to walk there.
- **Education:** laid out like a CV sheet, with an RGB-split glitch on the headings.
- **Skills:** an RPG loadout. Tabs filter by type (hard skills, soft skills, languages), and picking an item
  shows what it is and where it was used. There are no ratings, only what each skill lets you do.
- **Hero:** stars that scatter when you hover them, and a Start button that opens the intro.

## Run it

```bash
npm install
npm run dev      # open the local URL it prints
npm run build    # production build in /dist
```

## Edit your content

Everything lives in `src/data.js`:

| What | Where |
| --- | --- |
| Intro text and tagline | `PROFILE` |
| CV: education and experience | `CV` |
| Skills (name, type, icon, description) | `SKILLS` |
| Character colours (hair, skin, outfit) | `CHARACTER` |
| Drago and other projects | `FEATURED_PROJECT`, `MORE_PROJECTS` |
| Trophies and certificates | `TROPHIES`, `CERTIFICATES` |
| Contact details | `CONTACT` |

Skill icons available: `sword`, `shield`, `hammer`, `wand`, `bomb`, `heart`, `bolt`, `hourglass`, `crown`,
`bubble`, `book`. Sections and their order are in `src/sections.js`.

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
  sections.js        the checkpoints (id, label, world, what the character holds)
  App.jsx            page layout and coin counter
  components/        Hero, Education, Skills, Projects, Trophies, Contact, Runner, Glitch...
  hooks/             useRunway (scroll to position), useReveal, useTypewriter
  pixel/             sprites.js (the character and props), icons.js (skill icons)
  styles/            base.css, hero.css, sections.css, runner.css
```

## Deploy

`npm run build`, then upload `dist/` to Vercel, Netlify or GitHub Pages.
Asset paths are relative, so it also works from a sub-path.
