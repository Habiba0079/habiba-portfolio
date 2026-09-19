const WORLDS = { top: 'Start', stats: '1-1', projects: '1-2', trophies: '1-3', contact: '1-4' };

export default function Hud({ coins, active }) {
  const score = String(coins * 100).padStart(6, '0');
  return (
    <div className="hud" role="group" aria-label="Game status">
      <div className="hud-item">
        <span>Habiba</span>
        <span>{score}</span>
      </div>
      <div className="hud-item">
        <span>Coins</span>
        <span>
          <i className="coin-dot" aria-hidden="true" />x{String(coins).padStart(2, '0')}
        </span>
      </div>
      <div className="hud-item">
        <span>World</span>
        <span>{WORLDS[active] ?? 'Start'}</span>
      </div>
    </div>
  );
}
