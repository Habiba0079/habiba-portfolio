import { gridToRects } from './sprites.js';

// A floating island, generated as pixel art: three rows of grass on top, then dirt that narrows to a point.
// g grass light, G grass dark, d dirt, D dirt speckle.
const W = 28;
const pad = (n, ch) => '.'.repeat(n) + ch.repeat(W - 2 * n) + '.'.repeat(n);

const rows = [pad(3, 'g'), pad(1, 'g'), pad(0, 'G')];
for (let k = 0; k < 12; k += 1) {
  const p = 1 + k;
  const len = W - 2 * p;
  if (len < 4) break;
  let row = '';
  for (let i = 0; i < len; i += 1) row += (i * 5 + k * 3) % 11 === 0 ? 'D' : 'd';
  rows.push('.'.repeat(p) + row + '.'.repeat(p));
}

export const ISLAND_ROWS = rows;
export const ISLAND_SIZE = { w: W, h: rows.length };
export const ISLAND_RECTS = gridToRects(rows, { g: '#6ee36f', G: '#2f8f3a', d: '#a5622a', D: '#7a3d00' });
