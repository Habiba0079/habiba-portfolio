export default function Hud({ coins, total, world }) {
  const score = String(coins * 100).padStart(6, '0');
  const pad = (n) => String(n).padStart(2, '0');
  return (
    <div className="hud" role="group" aria-label="Game status">
      <div className="hud-item">
        <span>Habiba</span>
        <span>{score}</span>
      </div>
      <div className="hud-item">
        <span>Coins</span>
        <span>
          <i className="coin-dot" aria-hidden="true" />x{pad(coins)}/{pad(total)}
        </span>
      </div>
      <div className="hud-item">
        <span>World</span>
        <span>{world}</span>
      </div>
    </div>
  );
}
