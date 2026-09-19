import { memo, useEffect, useRef, useState } from 'react';
import { useRunway } from '../hooks/useRunway.js';
import { SECTIONS, SECTION_IDS } from '../sections.js';
import { FRAME_RECTS, PROP_RECTS } from '../pixel/sprites.js';

const Rects = ({ list }) =>
  list.map((r, i) => <rect key={i} x={r.x} y={r.y} width={r.w} height="1" fill={r.fill} />);

// The pixel character: four poses (idle, two walk frames, jump) plus the prop for the current section.
const Sprite = memo(function Sprite({ prop }) {
  return (
    <svg className="sprite" viewBox="0 0 16 20" shapeRendering="crispEdges" aria-hidden="true" focusable="false">
      <g className="g-idle">
        <Rects list={FRAME_RECTS.idle} />
      </g>
      <g className="g-walk-a">
        <Rects list={FRAME_RECTS.apart} />
      </g>
      <g className="g-walk-b">
        <Rects list={FRAME_RECTS.together} />
      </g>
      <g className="g-jump">
        <Rects list={FRAME_RECTS.jump} />
      </g>
      {prop && PROP_RECTS[prop] && (
        <g>
          <Rects list={PROP_RECTS[prop]} />
        </g>
      )}
    </svg>
  );
});

// The level map: a runway along the bottom of the screen with one flag per section.
// The character walks along it as you scroll, and the flags are the navigation.
export default function Runner({ collected, onReach }) {
  const { x, index, moving, dir } = useRunway(SECTION_IDS);
  const [jumping, setJumping] = useState(false);
  const [bubble, setBubble] = useState(null);
  const [pop, setPop] = useState(0);
  const mounted = useRef(false);

  useEffect(() => {
    onReach(index);
    if (!mounted.current) {
      mounted.current = true;
      return undefined;
    }
    setJumping(true);
    setBubble(SECTIONS[index].label);
    if (index > 0) setPop((n) => n + 1);
    const a = setTimeout(() => setJumping(false), 650);
    const b = setTimeout(() => setBubble(null), 2400);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [index, onReach]);

  const pose = jumping ? 'jump' : moving ? 'walk' : 'idle';
  const edge = x < 0.08 ? 'start' : x > 0.92 ? 'end' : 'mid';
  const last = SECTIONS.length - 1;

  return (
    <nav className="runway" aria-label="Level map">
      <div className="track brick" aria-hidden="true" />

      <ul className="checkpoints">
        {SECTIONS.map((s, i) => (
          <li key={s.id} className="cp-item" style={{ '--i': i / last }}>
            <a
              className={`cp${i === last ? ' cp--goal' : ''}`}
              href={`#${s.id}`}
              aria-current={index === i ? 'location' : undefined}
            >
              <span className="sr-only">{s.label}</span>
              <span className="cp-pole" aria-hidden="true" />
              <span className="cp-flag" aria-hidden="true" />
              {i > 0 && !collected.has(i) && <span className="cp-coin" aria-hidden="true" />}
              <span className="cp-label" aria-hidden="true">
                {s.label}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="runner" style={{ '--x': x }} data-pose={pose} data-dir={dir} data-edge={edge} aria-hidden="true">
        {bubble && <div className="bubble">{bubble}</div>}
        {pop > 0 && <span key={pop} className="coin-pop" />}
        <div className="flip">
          <div className="bob">
            <Sprite prop={SECTIONS[index].prop} />
          </div>
        </div>
      </div>
    </nav>
  );
}
