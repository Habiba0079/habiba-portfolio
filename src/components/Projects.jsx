import Level from './Level.jsx';
import Panel from './Panel.jsx';
import ImageSlot from './ImageSlot.jsx';
import { FEATURED_PROJECT, MORE_PROJECTS } from '../data.js';

function Tags({ items }) {
  if (!items.length) return null;
  return (
    <ul className="tags">
      {items.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  const p = FEATURED_PROJECT;
  return (
    <Level id="projects" world="1-2" title="Projects">
      <div className="featured">
        <div className="shots">
          {p.screenshots.map((src, i) => (
            <ImageSlot
              key={i}
              src={src}
              alt={`${p.title} screenshot ${i + 1}`}
              label="Project screenshot"
              ratio={i === 0 ? '16 / 9' : '4 / 3'}
            />
          ))}
        </div>

        <Panel title={p.title}>
          <p className="subtitle hl">{p.subtitle}</p>
          {p.description.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <Tags items={p.tags} />
          {(p.links.live || p.links.code) && (
            <div className="project-actions">
              {p.links.live && (
                <a className="pixel-link" href={p.links.live} target="_blank" rel="noopener noreferrer">
                  Live demo
                </a>
              )}
              {p.links.code && (
                <a className="pixel-link" href={p.links.code} target="_blank" rel="noopener noreferrer">
                  Source code
                </a>
              )}
            </div>
          )}
        </Panel>
      </div>

      <div className="more">
        {MORE_PROJECTS.map((project, i) => (
          <Panel key={i} title={project.title}>
            <ImageSlot src={project.image} alt={project.title} label="Project screenshot" />
            <p className="slot-text">{project.description}</p>
            <Tags items={project.tags} />
          </Panel>
        ))}
      </div>
    </Level>
  );
}
