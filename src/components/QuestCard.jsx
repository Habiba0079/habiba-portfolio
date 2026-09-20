import Glitch from './Glitch.jsx';
import Keywords from './Keywords.jsx';
import Logo from './Logo.jsx';

// One education or experience entry, drawn as a game window: dates in the title bar,
// role and organisation on the left, key points and tools on the right.
export default function QuestCard({ item, compact = false }) {
  return (
    <article className={`panel quest${compact ? ' quest--compact' : ''}`}>
      <span className="scan" aria-hidden="true" />
      <p className="panel-title">{item.period}</p>

      <div className="quest-body">
        <div className="quest-head">
          <Logo src={item.logo} short={item.short} name={item.org} />
          <div className="quest-id">
            <h3 className="quest-title">
              <Glitch>{item.title}</Glitch>
            </h3>
            {item.badge && <span className="quest-badge">{item.badge}</span>}
            <p className="quest-org">{item.org}</p>
            {item.place && <p className="quest-place">{item.place}</p>}
          </div>
        </div>

        <div className="quest-detail">
          <ul className="quest-points">
            {item.points.map((point) => (
              <li key={point}>
                <Keywords>{point}</Keywords>
              </li>
            ))}
          </ul>
          {item.tools && item.tools.length > 0 && (
            <div className="quest-tools">
              <span className="quest-tools-label">Tools</span>
              <ul className="tags">
                {item.tools.map((tool) => (
                  <li key={tool} className="tag">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
