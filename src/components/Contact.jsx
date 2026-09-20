import Level from './Level.jsx';
import Panel from './Panel.jsx';
import ImageSlot from './ImageSlot.jsx';
import { PinIcon, PhoneIcon, MailIcon, GithubIcon, LinkedinIcon } from './Icons.jsx';
import { CONTACT, PROFILE } from '../data.js';

export default function Contact() {
  return (
    <Level id="contact" world="1-6" title="Contact">
      <div className="contact-grid">
        <div className="player">
          <ImageSlot src={PROFILE.photo} alt={PROFILE.name} label="Your photo" ratio="1 / 1" />
          <span className="player-label">Player 1</span>
        </div>

        <Panel title="Let's connect">
          <ul className="contact-list">
            <li>
              <PinIcon />
              <span>{CONTACT.location}</span>
            </li>
            <li>
              <PhoneIcon />
              <a href={CONTACT.phone.href}>{CONTACT.phone.label}</a>
            </li>
            <li>
              <MailIcon />
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <GithubIcon />
              <a href={CONTACT.github.href} target="_blank" rel="noopener noreferrer">
                {CONTACT.github.label}
              </a>
            </li>
            <li>
              <LinkedinIcon />
              <a href={CONTACT.linkedin.href} target="_blank" rel="noopener noreferrer">
                {CONTACT.linkedin.label}
              </a>
            </li>
          </ul>
        </Panel>
      </div>
    </Level>
  );
}
