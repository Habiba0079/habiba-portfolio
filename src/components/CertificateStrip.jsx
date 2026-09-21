import { CERTIFICATES } from '../data.js';
import { resolveImage } from './ImageSlot.jsx';

// Repeat the list so one half of the strip is always wider than the screen.
const MIN_PER_HALF = 12;
const REPEATS = Math.max(1, Math.ceil(MIN_PER_HALF / Math.max(1, CERTIFICATES.length)));
const HALF = Array.from({ length: REPEATS }, () => CERTIFICATES).flat();

function Frame({ cert }) {
  const url = resolveImage(cert.image);
  return (
    <figure className="frame">
      <div className="frame-shot">
        {url ? (
          <img src={url} alt="" loading="lazy" />
        ) : (
          <span className="qblock qblock--small" aria-hidden="true">
            <span className="qmark">?</span>
          </span>
        )}
      </div>
      <figcaption>{cert.title}</figcaption>
    </figure>
  );
}

// The certificates roll past like a film strip at the bottom of the page. Nothing to click.
export default function CertificateStrip() {
  return (
    <section className="strip" aria-labelledby="strip-title" style={{paddingTop: "150px"}}>
      <h2 className="strip-title" id="strip-title">
        Certificates
      </h2>
      <ul className="sr-only">
        {CERTIFICATES.map((c) => (
          <li key={c.title}>
            {c.title}, {c.issuer}
          </li>
        ))}
      </ul>

      <div className="strip-film" aria-hidden="true">
        <div className="strip-holes" />
        <div className="strip-window">
          <div className="strip-track">
            {[...HALF, ...HALF].map((cert, i) => (
              <Frame key={i} cert={cert} />
            ))}
          </div>
        </div>
        <div className="strip-holes" />
      </div>
    </section>
  );
}
