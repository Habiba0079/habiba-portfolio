import { useReveal } from '../hooks/useReveal.js';

// One "level" of the page: a world label, a heading and a brick floor.
export default function Level({ id, world, title, children }) {
  const [ref, visible] = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`level reveal${visible ? ' is-visible' : ''}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container">
        <div className="level-head">
          <span className="world">World {world}</span>
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        {children}
      </div>
      <div className="floor brick" aria-hidden="true" />
    </section>
  );
}
