import { useId, useState } from 'react';
import StarField from './StarField.jsx';
import AboutDialog from './AboutDialog.jsx';
import LevelNav from './LevelNav.jsx';
import { PROFILE } from '../data.js';

export default function Hero({ onCoin }) {
  const [open, setOpen] = useState(false);
  const aboutId = useId();

  return (
    <header className={`hero${open ? ' is-open' : ''}`} id="top">
      <StarField />

      <div className="hero-inner">
        <h1 className="title">Hello!</h1>
        <p className="tagline">{PROFILE.tagline}</p>

        <button
          type="button"
          className="start-btn"
          aria-expanded={open}
          aria-controls={aboutId}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Start'}
        </button>

        <div id={aboutId} className="about">
          <div className="about-clip">
            <AboutDialog active={open} />
          </div>
        </div>

        <LevelNav onCoin={onCoin} />
      </div>

      <div className="pipe" aria-hidden="true">
        <div className="pipe-lip" />
        <div className="pipe-body" />
      </div>
      <div className="hero-floor brick" aria-hidden="true" />
    </header>
  );
}
