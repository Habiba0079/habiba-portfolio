import { useTypewriter } from '../hooks/useTypewriter.js';
import { PROFILE } from '../data.js';

// The intro text box. Types itself out when the Start button opens it.
export default function AboutDialog({ active }) {
  const typed = useTypewriter(PROFILE.about, active);
  return (
    <div className="dialog">
      <p>
        <span className="sr-only">{PROFILE.about}</span>
        <span aria-hidden="true">
          {typed}
          <span className="caret" />
        </span>
      </p>
    </div>
  );
}
