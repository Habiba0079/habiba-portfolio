import { Fragment } from 'react';
import Level from './Level.jsx';
import Panel from './Panel.jsx';
import Rating from './Rating.jsx';
import { TrophyIcon } from './Icons.jsx';
import { EDUCATION, EXPERIENCE, SKILLS, SOFT_SKILLS } from '../data.js';

function RatingList({ items }) {
  return (
    <dl className="rating-list">
      {items.map((item) => (
        <Fragment key={item.name}>
          <dt>{item.name}</dt>
          <dd>
            <Rating value={item.level} />
          </dd>
        </Fragment>
      ))}
    </dl>
  );
}

export default function Stats() {
  return (
    <Level id="stats" world="1-1" title="Player Stats">
      <div className="stats-grid">
        <Panel title="Education">
          <p className="school">{EDUCATION.school}</p>
          <ul className="plain-list">
            {EDUCATION.lines.map((line) => (
              <li key={line.text} className={`with-icon${line.highlight ? ' hl' : ''}`}>
                {line.trophy && <TrophyIcon className="trophy-mini" />}
                {line.text}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Experience">
          <ul className="plain-list">
            {EXPERIENCE.map((item) => (
              <li key={item.title}>
                {item.title}
                {item.period && <span className="hl"> {item.period}</span>}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Skills">
          <RatingList items={SKILLS} />
        </Panel>

        <Panel title="Soft Skills">
          <RatingList items={SOFT_SKILLS} />
        </Panel>
      </div>
    </Level>
  );
}
