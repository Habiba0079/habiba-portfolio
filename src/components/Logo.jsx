import { resolveImage } from './ImageSlot.jsx';

// A logo on a plate. Without an image it shows the short name instead.
// plate: "light" or "dark" (the plate behind the logo). size: "md", "lg" or "tile" (fills its box).
export default function Logo({ src, short, name, plate = 'light', size = 'md', className = '' }) {
  const url = resolveImage(src);
  return (
    <span className={`logo logo--${size} logo--${plate}${className ? ` ${className}` : ''}`} title={name}>
      {url ? (
        <img src={url} alt={`${name} logo`} loading="lazy" />
      ) : (
        <>
          <span className="logo-initials" aria-hidden="true">
            {short}
          </span>
          <span className="sr-only">{name}</span>
        </>
      )}
    </span>
  );
}
