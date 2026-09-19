import Level from './Level.jsx';
import Panel from './Panel.jsx';
import ImageSlot from './ImageSlot.jsx';
import { TrophyIcon } from './Icons.jsx';
import { TROPHIES, CERTIFICATES } from '../data.js';

export default function Trophies() {
  return (
    <Level id="trophies" world="1-3" title="Trophies and Certificates">
      <h3 className="subhead">Trophies</h3>
      <div className="trophy-grid">
        {TROPHIES.map((t) => (
          <Panel key={t.title}>
            <div className="trophy-item">
              <TrophyIcon className="trophy-big" />
              <div>
                <h4 className="item-title">{t.title}</h4>
                <p>{t.note}</p>
              </div>
            </div>
          </Panel>
        ))}
      </div>

      <h3 className="subhead">Certificates</h3>
      <div className="cert-grid">
        {CERTIFICATES.map((c, i) => (
          <Panel key={i}>
            <ImageSlot src={c.image} alt={`${c.title} certificate`} label="Certificate image" ratio="4 / 3" />
            <h4 className="item-title slot-text">{c.title}</h4>
            <p className="hl">{c.issuer}</p>
          </Panel>
        ))}
      </div>
    </Level>
  );
}
