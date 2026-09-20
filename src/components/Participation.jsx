import Level from './Level.jsx';
import Logo from './Logo.jsx';
import { PARTICIPATION } from '../data.js';

// Just a wall of logos (or names). No text.
export default function Participation() {
  return (
    <Level id="participation" world="1-4" title="Participation">
      <ul className="part-grid">
        {PARTICIPATION.map((item) => (
          <li key={item.name}>
            <Logo src={item.logo} short={item.name} name={item.name} plate={item.plate} size="tile" />
          </li>
        ))}
      </ul>
    </Level>
  );
}
