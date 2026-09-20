import Level from './Level.jsx';
import Panel from './Panel.jsx';
import Keywords from './Keywords.jsx';
import { TrophyIcon } from './Icons.jsx';
import { TROPHIES } from '../data.js';

export default function Trophies() {
  return (
    <Level id="trophies" world="1-4" title="Trophies">
      <div className="trophy-grid">
        {TROPHIES.map((t) => (
          <Panel key={t.title}>
            <div className="trophy-item">
              <TrophyIcon className="trophy-big" />
              <div>
                <h4 className="item-title">{t.title}</h4>
                <p>
                  <Keywords>{t.note}</Keywords>
                </p>
              </div>
            </div>
          </Panel>
        ))}
      </div>
    </Level>
  );
}
