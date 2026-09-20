import { resolveImage } from './ImageSlot.jsx';

// An optional company logo. Without an image it shows the short name instead.
export default function Logo({ src, short, name }) {
  const url = resolveImage(src);
  return (
    <span className="logo" title={name}>
      {url ? <img src={url} alt={`${name} logo`} /> : <span className="logo-initials" aria-hidden="true">{short}</span>}
    </span>
  );
}
