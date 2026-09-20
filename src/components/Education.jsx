import Level from './Level.jsx';
import QuestCard from './QuestCard.jsx';
import { CV } from '../data.js';

export default function Education() {
  return (
    <Level id="education" world="1-1" title="Education" glitch>
      <div className="quest-list">
        {CV.education.map((item) => (
          <QuestCard key={item.title} item={item} />
        ))}
      </div>
    </Level>
  );
}
