import { memo, useState } from 'react';

const COUNT = 42;
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const makeStars = () =>
  Array.from({ length: COUNT }, (_, id) => ({
    id,
    top: rand(3, 92),
    left: rand(2, 96),
    scale: [0.7, 1, 1.4][rand(0, 2)],
    delay: (Math.random() * 3).toFixed(2),
    dur: (2 + Math.random() * 2.5).toFixed(2),
  }));

// Pick a new spot that is clearly away from where the star is now.
function farFrom(top, left) {
  let next;
  let tries = 0;
  do {
    next = { top: rand(3, 92), left: rand(2, 96) };
    tries += 1;
  } while (Math.hypot(next.top - top, next.left - left) < 30 && tries < 8);
  return next;
}

function StarField() {
  const [stars, setStars] = useState(makeStars);

  const scatter = (id) =>
    setStars((list) => list.map((s) => (s.id === id ? { ...s, ...farFrom(s.top, s.left) } : s)));

  return (
    <div className="stars" aria-hidden="true">
      {stars.map((s) => (
        <svg
          key={s.id}
          className="star"
          viewBox="0 0 24 24"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            '--k': s.scale,
            '--delay': `${s.delay}s`,
            '--dur': `${s.dur}s`,
          }}
          onMouseEnter={() => scatter(s.id)}
          onTouchStart={() => scatter(s.id)}
        >
          <polygon points="12,2 15,8 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,8" />
        </svg>
      ))}
    </div>
  );
}

export default memo(StarField);
