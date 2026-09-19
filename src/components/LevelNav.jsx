import { useEffect, useRef, useState } from 'react';

const LEVELS = [
  { id: 'stats', world: '1-1', label: 'Player Stats' },
  { id: 'projects', world: '1-2', label: 'Projects' },
  { id: 'trophies', world: '1-3', label: 'Trophies' },
  { id: 'contact', world: '1-4', label: 'Contact' },
];

// Hit a "?" block to jump to a level. Each hit pops a coin.
export default function LevelNav({ onCoin }) {
  const [pop, setPop] = useState({ id: null, n: 0 });
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const hit = (id) => {
    onCoin();
    setPop((p) => ({ id, n: p.n + 1 }));
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setPop((p) => ({ ...p, id: null })), 800);
  };

  return (
    <nav className="levelnav" aria-label="Levels">
      {LEVELS.map((level) => (
        <a key={level.id} className="levelbtn" href={`#${level.id}`} onClick={() => hit(level.id)}>
          <span className="qblock" aria-hidden="true">
            <span className="qmark">?</span>
            {pop.id === level.id && <span key={pop.n} className="coin-pop" />}
          </span>
          <span className="qlabel">
            <span>{level.world}</span>
            <span>{level.label}</span>
          </span>
        </a>
      ))}
    </nav>
  );
}
