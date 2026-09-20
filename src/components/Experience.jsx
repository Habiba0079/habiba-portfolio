import Level from './Level.jsx';
import QuestCard from './QuestCard.jsx';
import { CV } from '../data.js';

export default function Experience() {
  return (
    <Level id="experience" world="1-2" title="Experience" glitch>
      <div className="quest-list">
        {CV.experience.map((item) => (
          <QuestCard key={item.title} item={item} />
        ))}
      </div>

      {CV.competitions.length > 0 && (
        <>
          <h3 className="subhead">Competitions</h3>
          <div className="comp-grid">
            {CV.competitions.map((item) => (
              <QuestCard key={item.title + item.period} item={item} compact />
            ))}
          </div>
        </>
      )}
    </Level>
  );
}
