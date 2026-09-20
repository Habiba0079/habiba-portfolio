# Habiba's portfolio (React + Vite)

A platformer-style portfolio.

- **Runway map:** a small level map sits at the bottom of the screen. A pixel character walks along it as you
  scroll, jumps when she reaches a new section, holds a different item in each one (graduation cap, briefcase,
  laptop, trophy, sword, letter) and collects a coin at every flag. The flags are the navigation: tap one to walk there.
- **Education and Experience:** separate levels drawn as game windows (dates in the title bar, role and
  organisation on the left, key points and tools on the right) with an RGB-split glitch. Each entry has an
  optional logo slot: set `logo: "images/logos/depi.png"` in `src/data.js`, otherwise the short name is shown.
  Everything is short bullet points, and `**keywords**` are highlighted.
- **Projects:** an arcade. The screen is on the left and the joystick and buttons are on the right, so you can
  watch and press at the same time. Pick a game with the joystick, press A to start it, then flip through its
  screenshots. Up/down changes game, left/right changes image, B goes back to the game list. Arrow keys, Enter and
  Escape work too, and you can swipe on the screen.
- **Skills:** an RPG loadout. Tabs filter by type (hard skills, soft skills, languages), and picking an item
  shows what it does and where it was used. There are no ratings.
- **Certificates:** a film strip at the bottom of the page. The certificates just roll past (it pauses on hover).
- **Hero:** stars that scatter when you hover them, and a Start button that opens a short bullet intro.

## Run it

```bash
npm install
npm run dev      # open the local URL it prints
npm run build    # production build in /dist
```

## Edit your content

Everything lives in `src/data.js`. Wrap a keyword in `**double asterisks**` to highlight it.

| What | Where |
| --- | --- |
| Intro text and tagline | `PROFILE` |
| Education, experience (logo, points, tools) and competitions | `CV` |
| Skills (name, type, icon, description) | `SKILLS` |
| Character colours (hair, skin, outfit) | `CHARACTER` |
| The three arcade projects (blurb, tags, images, links) | `PROJECTS` |
| Trophies | `TROPHIES` |
| Certificates (the film strip) | `CERTIFICATES` |
| Contact details | `CONTACT` |

Skill icons available: `sword`, `shield`, `hammer`, `wand`, `bomb`, `heart`, `bolt`, `hourglass`, `crown`,
`bubble`, `book`. The order of the sections (and the checkpoints on the runway) is in `src/sections.js`
and `src/App.jsx`: keep the two in the same order.

## Add images

1. Copy your files into `public/images/` (`projects/`, `certificates/`, `logos/`, or the root for your photo).
2. In `src/data.js`, replace `null` with the path, without a leading slash:

```js
images: ["images/projects/tasky-1.png", "images/projects/tasky-2.png", null],
```

Arcade screenshots show in full (nothing is cropped); 16:9 fills the screen best. Empty slots show a test card
that tells you the file name to use.

## Structure

```
src/
  data.js            all content
  sections.js        the checkpoints (id, label, world, what the character holds)
  App.jsx            page layout and coin counter
  components/        Hero, Education, Experience, Projects (arcade), Trophies, Skills, Contact,
                     CertificateStrip, Runner, QuestCard, Glitch...
  hooks/             useRunway (scroll to position), useReveal, useTypewriter
  pixel/             sprites.js (the character and props), icons.js (skill icons)
  styles/            base.css, hero.css, sections.css, arcade.css, runner.css
```

## Deploy

`npm run build`, then upload `dist/` to Vercel, Netlify or GitHub Pages.
Asset paths are relative, so it also works from a sub-path.
