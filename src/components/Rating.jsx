export default function Rating({ value, max = 5 }) {
  return (
    <span className="rating" role="img" aria-label={`${value} out of ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={i < value ? 'on' : 'off'} aria-hidden="true">
          <polygon points="12,2 15,8 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,8" />
        </svg>
      ))}
    </span>
  );
}
