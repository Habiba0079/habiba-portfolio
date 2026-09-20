import Level from './Level.jsx';
import Glitch from './Glitch.jsx';
import Keywords from './Keywords.jsx';
import Logo from './Logo.jsx';
import { TrophyIcon } from './Icons.jsx';
import { CV } from '../data.js';

// A shiny bronze medal for the class rank.
function Medal({ medal }) {
  return (
    <div className="medal" role="img" aria-label={`Ranked ${medal.rank} ${medal.rankLabel}`}>
      <span className="medal-ribbon" aria-hidden="true">
        <i />
        <i />
      </span>
      <span className="medal-disc" aria-hidden="true">
        <span className="medal-rank">{medal.rank}</span>
        <span className="medal-label">{medal.rankLabel}</span>
      </span>
      <span className="sparkle sparkle--1" aria-hidden="true" />
      <span className="sparkle sparkle--2" aria-hidden="true" />
      <span className="sparkle sparkle--3" aria-hidden="true" />
    </div>
  );
}

// Education is split in two: the medal (rank, GPA) and the graduation project (Drago) with its awards.
export default function Education() {
  const edu = CV.education[0];
  const { medal, graduationProject: project } = edu;

  return (
    <Level id="education" world="1-1" title="Education" glitch>
      <div className="edu-grid">
        <article className="panel">
          <p className="panel-title">{edu.period}</p>
          <div className="panel-body edu-medal">
            <div className="edu-school">
              <Logo src={edu.logo} short={edu.short} name={edu.org} plate={edu.plate} />
              <div>
                <h3 className="edu-degree">
                  <Glitch>{edu.title}</Glitch>
                </h3>
                <p className="edu-org">{edu.org}</p>
              </div>
            </div>

            <Medal medal={medal} />

            <p className="gpa-plate">
              <span>{medal.gpaLabel}</span>
              <strong>{medal.gpa}</strong>
            </p>

            <ul className="chips">
              {medal.badges.map((badge) => (
                <li key={badge} className="chip">
                  <Keywords>{badge}</Keywords>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="panel">
          <p className="panel-title">Graduation project</p>
          <div className="panel-body drago">
            <div className="drago-brand">
              <Logo src={project.logo} short={project.name} name={project.name} size="xlg" className="logo--drago" />
              <p className="drago-lead">
                <Keywords>{project.lead}</Keywords>
              </p>
              <p className="grade">
                <span>Grade</span>
                <strong>{project.grade}</strong>
              </p>
            </div>

            <div className="drago-awards">
              <h3 className="subhead subhead--small">Awards</h3>
              <ul className="awards">
                {project.awards.map((award) => (
                  <li key={award.title + award.event} className={`award${award.locked ? ' award--locked' : ''}`}>
                    <TrophyIcon className="award-icon" />
                    <div>
                      <p className="award-title">{award.title}</p>
                      <p className="award-event">{award.event}</p>
                      {award.detail && <p className="award-detail">{award.detail}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </Level>
  );
}
