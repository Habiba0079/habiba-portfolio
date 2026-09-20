import { CHARACTER } from '../data.js';

// Turn rows of characters into merged horizontal <rect> runs.
export function gridToRects(rows, palette) {
  const rects = [];
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      if (ch === '.' || !palette[ch]) {
        x += 1;
      } else {
        let run = 1;
        while (x + run < row.length && row[x + run] === ch) run += 1;
        rects.push({ x, y, w: run, fill: palette[ch] });
        x += run;
      }
    }
  });
  return rects;
}

/* The character is a 16 x 20 pixel grid.
   Letters: h hair, s skin, e eye, p blush, m mouth, o outfit, a accent,
   d dark hem, b boots. Props: n cap, y gold, g steel, q white, k dark, z screen, w paper, c leather. */
const blank = '.'.repeat(16);

const BODY = [
  '......hhhh......',
  '....hhhhhhhh....',
  '...hhhhhhhhhh...',
  '...hhhhhhhhhh...',
  '...hhsssssshh...',
  '...hssessessh...',
  '...hspsssspsh...',
  '....hssmmssh....',
  '.....oooooo.....',
  '....ooaaaaoo....',
  '....ooaaaaoo....',
  '....ssooooss....',
  '.....oooooo.....',
  '....dddddddd....',
];

const LEGS = {
  idle: ['.....ss..ss.....', '.....ss..ss.....', '....bbb..bbb....'],
  apart: ['....ss....ss....', '...ss......ss...', '..bbb......bbb..'],
  together: ['......ssss......', '......ssss......', '.....bbbbbb.....'],
  jump: ['.....ssssss.....', '....bbbbbbbb....', blank],
};

const frame = (legs) => [blank, blank, blank, ...BODY, ...legs];

// Props are drawn on the same 16 x 20 grid, keyed by row number.
const layer = (map) => Array.from({ length: 20 }, (_, i) => map[i] ?? blank);
const sword = { 5: '............q...', 13: '...........yyy..', 14: '............k...', 15: '............y...' };
for (let r = 6; r <= 12; r += 1) sword[r] = '............g...';

const PROPS = {
  cap: layer({ 1: '..nnnnnnnnnnnn..', 2: '....nnnnnnnn..y.', 3: '..............y.' }),
  sword: layer(sword),
  laptop: layer({
    12: '....kkkkkkkk....',
    13: '....kzzzzzzk....',
    14: '....kzzzzzzk....',
    15: '...kkkkkkkkkk...',
  }),
  trophy: layer({ 0: '...yyyyyyyyyy...', 1: '.....yyyyyy.....', 2: '......yyyy......' }),
  letter: layer({ 12: '...........wwww.', 13: '...........wkkw.', 14: '...........wwww.' }),
  briefcase: layer({
    14: '............kk..',
    15: '...........cccc.',
    16: '...........cyyc.',
    17: '...........cccc.',
  }),
};

export const PALETTE = {
  h: CHARACTER.hair,
  s: CHARACTER.skin,
  e: CHARACTER.eye,
  p: CHARACTER.blush,
  m: CHARACTER.mouth,
  o: CHARACTER.outfit,
  a: CHARACTER.accent,
  d: CHARACTER.dark,
  b: CHARACTER.boots,
  n: '#1a1a2e',
  y: '#ffd84a',
  g: '#cfd8e3',
  q: '#ffffff',
  k: '#1a1030',
  z: '#5ee0ff',
  w: '#f5efe4',
  c: '#a5622a',
};

export const RAW = { frames: Object.fromEntries(Object.entries(LEGS).map(([k, l]) => [k, frame(l)])), props: PROPS };

export const FRAME_RECTS = Object.fromEntries(
  Object.entries(RAW.frames).map(([k, rows]) => [k, gridToRects(rows, PALETTE)])
);
export const PROP_RECTS = Object.fromEntries(
  Object.entries(PROPS).map(([k, rows]) => [k, gridToRects(rows, PALETTE)])
);
