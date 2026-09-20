import { useMemo } from 'react';
import Level from './Level.jsx';
import Keywords from './Keywords.jsx';
import Logo from './Logo.jsx';
import PixelIsland from './PixelIsland.jsx';
import { CV } from '../data.js';

// The path that winds down between the islands. Coordinates are percentages of the map.
function buildPath(count) {
  const xs = Array.from({ length: count }, (_, i) => (i % 2 === 0 ? 25 : 75));
  const ys = Array.from({ length: count }, (_, i) => ((i + 0.5) / count) * 100);
  let d = `M${xs[0]} 0 L${xs[0]} ${ys[0]}`;
  for (let i = 1; i < count; i += 1) {
    const mid = (ys[i - 1] + ys[i]) / 2;
    d += ` C${xs[i - 1]} ${mid}, ${xs[i]} ${mid}, ${xs[i]} ${ys[i]}`;
  }
  return `${d} L${xs[count - 1]} 100`;
}

// Experience as a vertical world map: scroll down through islands, one per role.
// Each island shows the logo, the level number, the dates and a single line about the training.
export default function Experience() {
  const stops = useMemo(
    () => (CV.mapOrder === 'newest-first' ? CV.experience : [...CV.experience].reverse()),
    []
  );

  return (
    <Level id="experience" world="1-2" title="Experience" glitch>
      <div className="worldmap">
        <svg className="map-path" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d={buildPath(stops.length)} />
        </svg>

        <ol className="map-list">
          {stops.map((item, i) => (
            <li key={item.org} className={`stop ${i % 2 === 0 ? 'stop--left' : 'stop--right'}`}>
              <div className="isle" style={{ '--i': i }}>
                <span className="isle-level">Level {i + 1}</span>
                <div className="isle-logo">
                  <Logo src={item.logo} short={item.short} name={item.org} plate={item.plate} size="lg" />
                </div>
                <div className="isle-base">
                  <PixelIsland />
                  <span className="isle-date">{item.period}</span>
                </div>
              </div>

              <p className="sign">
                <Keywords>{item.note}</Keywords>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Level>
  );
}
