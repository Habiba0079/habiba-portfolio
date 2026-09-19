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

export const EDUCATION = {
  school: 'Alexandria Higher Institute of Engineering and Technology (AIET)',
  lines: [
    { text: 'Top Student', highlight: true, trophy: true },
    { text: 'Computer Engineering Department' },
    { text: 'GPA: 3.8 / 4.0', highlight: true },
    { text: 'Graduated with honors' },
    { text: '2021 - 2026' },
  ],
};

// Add the years for the internships if you like, e.g. period: '2024'.
export const EXPERIENCE = [
  { title: 'Intern at DEPI', period: '' },
  { title: 'Intern at Egypt Experts for Software & Hardware (EES)', period: '' },
  { title: 'ECPC Participant', period: '2023, 2024' },
  { title: 'NASA Solution App Challenge Participant', period: '2024' },
];

// level: 1 to 5 stars.
// ASP.NET Core and C++ are new here and their levels are only placeholders: adjust them.
export const SKILLS = [
  { name: 'HTML', level: 5 },
  { name: 'CSS', level: 4 },
  { name: 'Bootstrap', level: 4 },
  { name: 'JavaScript', level: 3 },
  { name: 'React', level: 3 },
  { name: 'MongoDB', level: 3 },
  { name: 'ASP.NET Core', level: 3 },
  { name: 'C++', level: 3 },
];

export const SOFT_SKILLS = [
  { name: 'English', level: 4 },
  { name: 'Teamwork', level: 5 },
  { name: 'Problem-solving', level: 4 },
  { name: 'Communication', level: 4 },
  { name: 'Time Management', level: 4 },
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
