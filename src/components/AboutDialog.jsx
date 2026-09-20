import { useTypedCount } from '../hooks/useTypewriter.js';
import { parseKeywords, stripKeywords } from './Keywords.jsx';
import { PROFILE } from '../data.js';

const LINES = PROFILE.about.map(parseKeywords);
const TOTAL = LINES.reduce((n, segs) => n + segs.reduce((m, s) => m + s.text.length, 0), 0);

// The intro box: a few short bullet lines that type themselves out when Start opens it.
export default function AboutDialog({ active }) {
  const count = useTypedCount(TOTAL, active);
  let left = count;
  let current = 0;

  const rows = LINES.map((segs, i) => {
    const shown = segs.map((seg) => {
      const take = Math.max(0, Math.min(seg.text.length, left));
      left -= take;
      return { ...seg, text: seg.text.slice(0, take) };
    });
    if (shown.some((s) => s.text)) current = i;
    return shown;
  });

  return (
    <div className="dialog">
      <span className="sr-only">{PROFILE.about.map(stripKeywords).join(' ')}</span>
      <ul className="dialog-list" aria-hidden="true">
        {rows.map((shown, i) => (
          <li key={i} className={shown.some((s) => s.text) ? 'on' : ''}>
            {/* invisible full line keeps the box from growing while it types */}
            <span className="ghost">{stripKeywords(PROFILE.about[i])}</span>
            <span className="typed">
              {shown.map((seg, k) =>
                seg.kw ? (
                  <mark key={k} className="kw">
                    {seg.text}
                  </mark>
                ) : (
                  seg.text
                )
              )}
              {i === current && <span className="caret" />}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
