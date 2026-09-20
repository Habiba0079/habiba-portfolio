# Habiba's portfolio (React + Vite)

A platformer-style portfolio.

- **Runway map:** a small level map sits at the bottom of the screen. A pixel character walks along it as you
  scroll, jumps when she reaches a new section, holds a different item in each one and collects a coin at every
  flag. The flags are the navigation: tap one to walk there.
- **Education:** split in two. A shiny bronze medal (class rank, CGPA, badges), and the graduation project
  (Drago logo, the role you led it in, its grade, and the awards it won).
- **Experience:** a vertical world map. Scroll down through floating islands, one per role, each with the logo,
  the level number, the dates and one line about the training.
- **Projects:** an arcade. The screen is on the left and the joystick and buttons are on the right. Pick a game with
  the joystick, press A to start it, then flip through its screenshots (up/down changes game, left/right changes
  image, B goes back to the game list). A project can show a **video** instead of the slideshow (see below).
- **Participation:** a wall of logos or names, no text.
- **Skills:** an RPG loadout with small tiles. Tabs filter by type; picking a tile shows what it does.
- **Certificates:** a film strip that just rolls past (it pauses on hover).
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
| Education: medal, Drago panel and its awards | `CV.education` (`medal`, `graduationProject`) |
| Experience map (logo, dates, one-line `note`) | `CV.experience`, `CV.mapOrder` |
| Skills (name, type, icon, description) | `SKILLS`, `SKILL_TYPES` |
| Character colours | `CHARACTER` |
| The three arcade projects | `PROJECTS` |
| Participation logos and names | `PARTICIPATION` |
| Certificates (the film strip) | `CERTIFICATES` |
| Contact details | `CONTACT` |

Skill icons: `sword`, `shield`, `hammer`, `wand`, `bomb`, `heart`, `bolt`, `hourglass`, `crown`, `bubble`, `book`.
The order of the sections (and the checkpoints on the runway) is in `src/sections.js` and `src/App.jsx`:
keep the two in the same order.

## Images and logos

Put files in `public/images/` and reference them without a leading slash, e.g. `"images/logo/DEPI.png"`.
Every logo has an optional `plate` (`"light"` or `"dark"`): pick the one it reads best on.
Without a logo, the short name is shown instead.

## Video in the arcade

Each project in `PROJECTS` has two fields:

```js
display: "video",   // "images" (slideshow) or "video"
video: { src: "videos/drago-demo.mp4", poster: "images/projects/DragoGames.png" },
```

`src` can be a file in `public/videos/`, a direct `.mp4` link, or a YouTube / Google Drive link (those are embedded).
For a file, A plays and pauses and left/right jump 5 seconds. Keep files small (or use YouTube) since the repo
serves them as they are. Set `display: "images"` to go back to the slideshow.

## Structure

```
src/
  data.js            all content
  sections.js        the checkpoints (id, label, world, what the character holds)
  App.jsx            page layout and coin counter
  components/        Hero, Education, Experience, Projects (arcade), Participation, Skills, Contact,
                     CertificateStrip, Runner, Logo, Glitch...
  hooks/             useRunway (scroll to position), useReveal, useTypewriter
  pixel/             sprites.js (the character), icons.js (skill icons), island.js (experience islands)
  styles/            base.css, hero.css, sections.css, arcade.css, runner.css
```

## Deploy

`npm run build`, then upload `dist/` to Vercel, Netlify or GitHub Pages.
Asset paths are relative, so it also works from a sub-path.
