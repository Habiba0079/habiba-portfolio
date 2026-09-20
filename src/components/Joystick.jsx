// An arcade joystick: four direction buttons around a base, with a ball that tilts when you press.
const DIRS = ['up', 'right', 'down', 'left'];

export default function Joystick({ tilt, labels, onPress }) {
  return (
    <div className="stick" data-tilt={tilt || ''}>
      <div className="stick-base" aria-hidden="true">
        <span className="stick-ball" />
      </div>
      {DIRS.map((dir) => (
        <button key={dir} type="button" className={`dir dir-${dir}`} aria-label={labels[dir]} onClick={() => onPress(dir)}>
          <span className="arrow" aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
