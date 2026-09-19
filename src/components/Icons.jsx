const base = { viewBox: '0 0 24 24', 'aria-hidden': 'true', focusable: 'false' };

export const PinIcon = () => (
  <svg {...base} className="icon">
    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);

export const PhoneIcon = () => (
  <svg {...base} className="icon">
    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1z" />
  </svg>
);

export const MailIcon = () => (
  <svg {...base} className="icon">
    <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 3.2V17h16V8.2l-8 5.6-8-5.6zM5.6 7l6.4 4.5L18.4 7H5.6z" />
  </svg>
);

export const GithubIcon = () => (
  <svg {...base} className="icon">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export const LinkedinIcon = () => (
  <svg {...base} className="icon">
    <rect width="24" height="24" rx="3" />
    <text x="12" y="17.5" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif" fill="#0f2748">
      in
    </text>
  </svg>
);

// Pixel-art trophy drawn on a 12x12 grid.
export const TrophyIcon = ({ className = 'trophy' }) => (
  <svg viewBox="0 0 12 12" className={className} aria-hidden="true" focusable="false" shapeRendering="crispEdges">
    <rect x="2" y="0" width="8" height="1" />
    <rect x="3" y="1" width="6" height="4" />
    <rect x="2" y="1" width="1" height="3" />
    <rect x="9" y="1" width="1" height="3" />
    <rect x="0" y="1" width="2" height="1" />
    <rect x="0" y="2" width="1" height="2" />
    <rect x="1" y="4" width="1" height="1" />
    <rect x="10" y="1" width="2" height="1" />
    <rect x="11" y="2" width="1" height="2" />
    <rect x="10" y="4" width="1" height="1" />
    <rect x="4" y="5" width="4" height="1" />
    <rect x="5" y="6" width="2" height="2" />
    <rect x="3" y="8" width="6" height="1" />
    <rect x="2" y="9" width="8" height="2" />
  </svg>
);
