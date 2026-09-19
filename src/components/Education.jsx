import Level from './Level.jsx';
import Glitch from './Glitch.jsx';
import { CV, CONTACT, PROFILE } from '../data.js';

function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li className="cv-entry" key={item.title}>
          {item.period && <span className="cv-period">{item.period}</span>}
          <h4 className="cv-title">
            <Glitch>{item.title}</Glitch>
          </h4>
          {item.place && <p className="cv-sub">{item.place}</p>}
          {item.points && (
            <ul className="cv-points">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

// The education level is laid out like a CV sheet, with a glitching screen effect.
export default function Education() {
  return (
    <Level id="education" world="1-1" title="Education" glitch>
      <article className="cv">
        <span className="cv-bar" aria-hidden="true" />
        <header className="cv-head">
          <div>
            <h3 className="cv-name">
              <Glitch>{PROFILE.name}</Glitch>
            </h3>
            <p className="cv-role">{CV.headline}</p>
          </div>
          <p className="cv-meta">
            {CONTACT.location}
            <br />
            {CONTACT.email}
          </p>
        </header>

        <div className="cv-cols">
          <section aria-labelledby="cv-edu">
            <h3 className="cv-heading" id="cv-edu">
              <Glitch>Education</Glitch>
            </h3>
            <Timeline items={CV.education} />
          </section>

          <section aria-labelledby="cv-exp">
            <h3 className="cv-heading" id="cv-exp">
              <Glitch>Experience</Glitch>
            </h3>
            <Timeline items={CV.experience} />
          </section>
        </div>
      </article>
    </Level>
  );
}
