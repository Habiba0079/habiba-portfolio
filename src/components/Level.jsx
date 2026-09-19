import { useReveal } from '../hooks/useReveal.js';
import Glitch from './Glitch.jsx';

// One "level" of the page: a world label, a heading and a brick floor.
export default function Level({ id, world, title, subtitle, glitch = false, wide = false, children }) {
  const [ref, visible] = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`level reveal${visible ? ' is-visible' : ''}`}
      aria-labelledby={`${id}-title`}
    >
      <div className={`container${wide ? ' container--wide' : ''}`}>
        <div className="level-head">
          <span className="world">World {world}</span>
          <h2 id={`${id}-title`}>{glitch ? <Glitch>{title}</Glitch> : title}</h2>
          {subtitle && <p className="level-sub">{subtitle}</p>}
        </div>
        {children}
      </div>
      <div className="floor brick" aria-hidden="true" />
    </section>
  );
}
