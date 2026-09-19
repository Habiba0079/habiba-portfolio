// Everything you see on the site lives in this file. Edit the text here.
//
// Images: put files inside  public/images/...  and reference them WITHOUT a
// leading slash, for example  "images/projects/drago-1.png".
// Leave a value as null to show an empty "?" slot.

export const PROFILE = {
  name: 'Habiba',
  tagline: 'Computer engineer. Web platforms, embedded systems and AI.',
  about:
    "Hey there! I'm Habiba, a computer engineer who turns lines of code into working products. I build web apps with React and ASP.NET Core, tinker with embedded systems, and put AI to work in projects like Drago, my graduation project that won first place at the Geniuses Forum. Scroll down to explore my levels.",
  photo: 'images/assets/avatar.png',
};

// The CV section. Leave `period` empty to hide the date.
export const CV = {
  headline: 'Computer Engineer',
  education: [
    {
      period: '2021 - 2026',
      title: 'Computer Engineering',
      place: 'Alexandria Higher Institute of Engineering and Technology (AIET), Alexandria, Egypt',
      points: [
        'GPA 3.8 / 4.0, graduated with honors',
        'Top Student',
        'Graduation project: Drago, an AI-powered learning platform for children with dyslexia. Led an 11-member team and won first place at the Geniuses Forum Competition.',
      ],
    },
  ],
  // Add years to the internships if you like, e.g. period: '2024'.
  experience: [
    { period: '', title: 'Intern at DEPI' },
    { period: '', title: 'Intern at Egypt Experts for Software & Hardware (EES)' },
    { period: '2023, 2024', title: 'ECPC Participant', place: 'Egyptian Collegiate Programming Contest' },
    { period: '2024', title: 'NASA Solution App Challenge Participant' },
  ],
};

// Colours of the pixel character that walks along the bottom of the page.
export const CHARACTER = {
  hair: '#3a2540',
  skin: '#f2c9a5',
  eye: '#1a1030',
  blush: '#e9868b',
  mouth: '#b5485a',
  outfit: '#60558d',
  accent: '#ebaaae',
  dark: '#2e2650',
  boots: '#3a1508',
};

// Skills are gear, not scores: no ratings, just what each one lets you do.
export const SKILL_TYPES = {
  hard: { label: 'Hard skill', tab: 'Hard skills', gear: 'Weapon', color: '#ff9d5c' },
  soft: { label: 'Soft skill', tab: 'Soft skills', gear: 'Power', color: '#7ee0a0' },
  language: { label: 'Language', tab: 'Languages', gear: 'Spell', color: '#7cc4ff' },
};

// icon: sword, shield, hammer, wand, bomb, heart, bolt, hourglass, crown, bubble, book
export const SKILLS = [
  { id: 'react', name: 'React', type: 'hard', category: 'Frontend', icon: 'sword',
    desc: 'The frontend of Drago: React 19 and Vite, with i18next for Arabic and English and an offline-capable PWA.' },
  { id: 'javascript', name: 'JavaScript', type: 'hard', category: 'Frontend', icon: 'sword',
    desc: 'Interactive interfaces, API integration and state handling.' },
  { id: 'html', name: 'HTML', type: 'hard', category: 'Frontend', icon: 'sword',
    desc: 'The structure behind every page I build, including right-to-left Arabic layouts.' },
  { id: 'css', name: 'CSS', type: 'hard', category: 'Frontend', icon: 'sword',
    desc: 'Responsive layouts, animation and CSS Modules, styled for both Arabic and English.' },
  { id: 'bootstrap', name: 'Bootstrap', type: 'hard', category: 'Frontend', icon: 'sword',
    desc: 'Fast, responsive layouts and ready-made components.' },
  { id: 'aspnet', name: 'ASP.NET Core', type: 'hard', category: 'Backend and data', icon: 'shield',
    desc: "Drago's backend: a REST API with JWT authentication and real-time messaging." },
  { id: 'sql', name: 'SQL Server', type: 'hard', category: 'Backend and data', icon: 'shield',
    desc: 'The relational database behind Drago.' },
  { id: 'signalr', name: 'SignalR', type: 'hard', category: 'Backend and data', icon: 'shield',
    desc: 'Real-time messaging for doctors inside Drago.' },
  { id: 'mongodb', name: 'MongoDB', type: 'hard', category: 'Backend and data', icon: 'shield',
    desc: 'A document database for web projects.' },
  { id: 'embedded', name: 'Embedded systems', type: 'hard', category: 'Embedded', icon: 'hammer',
    desc: 'Hardware-level projects and coursework in embedded systems.' },
  { id: 'speech-ai', name: 'Speech AI', type: 'hard', category: 'AI', icon: 'wand',
    desc: 'Whisper and Wav2Vec2 speech models for Arabic reading practice, plus an Arabic-specific post-processing pipeline.' },
  { id: 'cpp', name: 'C++ and algorithms', type: 'hard', category: 'Algorithms', icon: 'bomb',
    desc: 'Competitive programming with data structures and algorithms, including ECPC in 2023 and 2024.' },

  { id: 'teamwork', name: 'Teamwork', type: 'soft', category: 'People', icon: 'heart',
    desc: 'Worked inside an 11-member multidisciplinary team on Drago.' },
  { id: 'leadership', name: 'Leadership', type: 'soft', category: 'People', icon: 'crown',
    desc: 'Led the Drago team across frontend, backend, AI/ML, UI/UX, database and QA.' },
  { id: 'communication', name: 'Communication', type: 'soft', category: 'People', icon: 'bubble',
    desc: 'Worked with supervisors, a clinical partner and teammates from different disciplines.' },
  { id: 'problem-solving', name: 'Problem-solving', type: 'soft', category: 'Mindset', icon: 'bolt',
    desc: 'Breaking hard problems down, from contest questions to debugging a full-stack platform.' },
  { id: 'time', name: 'Time management', type: 'soft', category: 'Mindset', icon: 'hourglass',
    desc: 'Balanced coursework, internships and a graduation project.' },

  { id: 'arabic', name: 'Egyptian Arabic', type: 'language', category: 'Spoken', icon: 'book',
    desc: 'Everyday communication, and the language Drago is built around.' },
  { id: 'english', name: 'English', type: 'language', category: 'Spoken', icon: 'book',
    desc: 'Technical and professional communication.' },
];

export const FEATURED_PROJECT = {
  title: 'Drago',
  subtitle: 'AI-powered learning platform for children with dyslexia',
  description: [
    'A bilingual learning platform that helps Arabic-speaking children with dyslexia practise reading through games, while their doctors follow each child\u2019s progress.',
    'My graduation project at AIET, built by a team of 11 that I led. It has four Arabic word games, an AI pre-test with adaptive recommendations, a doctor dashboard, real-time messaging and offline support. It won first place at the Geniuses Forum Competition.',
  ],
  tags: ['React', 'ASP.NET Core', 'SQL Server', 'SignalR', 'Whisper', 'Wav2Vec2'],
  // Three screenshot slots. Example: 'images/projects/drago-1.png'
  screenshots: [null, null, null],
  links: { live: '', code: '' }, // links show up only when filled in
};

// Empty project slots. Duplicate a block to add more.
export const MORE_PROJECTS = [
  { title: 'Project slot', description: 'Add the project name, a short description and a screenshot here.', image: null, tags: [] },
  { title: 'Project slot', description: 'Add the project name, a short description and a screenshot here.', image: null, tags: [] },
];

export const TROPHIES = [
  { title: 'First place, Geniuses Forum Competition', note: 'Won with Drago, my graduation project.' },
  { title: 'Graduated with honors', note: 'Computer Engineering at AIET, GPA 3.8.' },
  { title: 'Led an 11-member team', note: 'Coordinated frontend, backend, AI/ML, UI/UX, database and QA work.' },
  { title: 'Competitive programming', note: 'ECPC participant in 2023 and 2024.' },
];

// Empty certificate slots. Example image: 'images/certificates/depi.png'
export const CERTIFICATES = [
  { title: 'Certificate title', issuer: 'Issuing organization', image: null },
  { title: 'Certificate title', issuer: 'Issuing organization', image: null },
  { title: 'Certificate title', issuer: 'Issuing organization', image: null },
];

export const CONTACT = {
  location: 'Alexandria, Egypt',
  phone: { label: '+20 12 1204 9270', href: 'tel:+201212049270' },
  email: 'habibamohamed3880@gmail.com',
  github: { label: 'Habiba0079', href: 'https://github.com/Habiba0079' },
  linkedin: {
    label: 'in/habiba-mohamed-47764525b',
    href: 'https://www.linkedin.com/in/habiba-mohamed-47764525b',
  },
};
