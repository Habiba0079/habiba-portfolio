// Everything you see on the site lives in this file. Edit the text here.
//
// Images: put files inside public/images/... and reference them WITHOUT a
// leading slash, for example "images/projects/drago-1.png".
// Leave a value as null to show an empty "?" slot.

export const PROFILE = {
  name: "Habiba",

  tagline: "Computer Engineer & Software Developer.",

  about:
    "Hey there! I'm Habiba, a computer engineering graduate who builds responsive and interactive web applications with React and JavaScript. I enjoy turning ideas into working products, solving technical problems, and working with teams to build real-world software. I'm the team leader and frontend developer behind Drago, my award-winning graduation project. Scroll down to explore my work, skills, and achievements.",

  photo: "images/assets/avatar.png",
};

// The CV section. Leave `period` empty to hide the date.
export const CV = {
  headline: "Computer Engineer & Software Developer",

  education: [
    {
      period: "2021 - 2026",
      title: "Computer Engineering",
      place:
        "Alexandria Higher Institute of Engineering and Technology (AIET), Alexandria, Egypt",

      points: [
        "CGPA: 3.81 / 4.0, ranked 3rd in class, graduated with honors",
        "Top Student",
        "Graduation project: Drago, an AI-powered educational platform for children with dyslexia",
        "Team Leader & Frontend Developer of an 11-member multidisciplinary team",
        "Drago won first place at the Geniuses Forum Competition",
      ],
    },
  ],

  experience: [
    {
      period: "Apr 2024 - Oct 2024",
      title: "Full Stack Web Development Trainee",
      place: "Digital Egypt Pioneers Initiative (DEPI) - MCIT",
      points: [
        "160-hour hybrid training covering HTML, CSS, JavaScript, React, MongoDB, Node.js, Git/GitHub, and business English",
        "Built Tasky, a dashboard with dynamic charts, filtering, and interactive UI components",
      ],
    },

    {
      period: "Jul 2025 - Aug 2025",
      title: "Software Development Trainee",
      place: "Egypt Experts for Software & Hardware (EES), Alexandria",
      points: [
        "Training in Oracle Database, SQL, REST APIs, JSON, ERP systems, and PowerBuilder",
        "Developed GreenLeaf Restaurant & Farm ERP as a final project and earned a Distinction grade",
      ],
    },

    {
      period: "Feb 2025 - Apr 2026",
      title: "Problem-Solving Mentor & C++ / Algorithms Instructor",
      place: "Microsoft Club Community - AIET",
      points: [
        "Delivered 20+ sessions covering C++, data structures, algorithms, and competitive programming",
        "Coached students for ECPC / ICPC-style problem solving and contests",
      ],
    },

    {
      period: "2023, 2024",
      title: "ECPC Participant",
      place: "Egyptian Collegiate Programming Contest",
      points: ["39th place among 450+ teams in ECPC 2024"],
    },

    {
      period: "2024",
      title: "Participant",
      place: "NASA Space Apps Challenge",
      points: ["Participated as a member of Team Scrat"],
    },
  ],
};

// Colours of the pixel character that walks along the bottom of the page.
export const CHARACTER = {
  hair: "#150b17",
  skin: "#ef8427",
  eye: "#1a1030",
  blush: "#c6383f",
  mouth: "#b5485a",
  outfit: "#60558d",
  accent: "#ec5660",
  dark: "#2e2650",
  boots: "#0b0301",
};

// Skills are gear, not scores: no ratings, just what each one lets you do.
export const SKILL_TYPES = {
  hard: {
    label: "Hard skill",
    tab: "Hard skills",
    gear: "Weapon",
    color: "#ff9d5c",
  },

  soft: {
    label: "Soft skill",
    tab: "Soft skills",
    gear: "Power",
    color: "#7ee0a0",
  },

  language: {
    label: "Language",
    tab: "Languages",
    gear: "Spell",
    color: "#7cc4ff",
  },
};

// Only technologies I have hands-on development experience with.
export const SKILLS = [
  // Frontend
  {
    id: "react",
    name: "React.js",
    type: "hard",
    category: "Frontend",
    icon: "sword",
    desc: "Building responsive and interactive web interfaces with reusable components, hooks, state handling, and API integration.",
  },

  {
    id: "javascript",
    name: "JavaScript",
    type: "hard",
    category: "Frontend",
    icon: "sword",
    desc: "Application logic, DOM interaction, asynchronous operations, API integration, and interactive web interfaces.",
  },

  {
    id: "html",
    name: "HTML",
    type: "hard",
    category: "Frontend",
    icon: "sword",
    desc: "Semantic page structure and accessible web interfaces.",
  },

  {
    id: "css",
    name: "CSS",
    type: "hard",
    category: "Frontend",
    icon: "sword",
    desc: "Responsive layouts, animations, reusable styles, and CSS Modules.",
  },

  {
    id: "bootstrap",
    name: "Bootstrap",
    type: "hard",
    category: "Frontend",
    icon: "sword",
    desc: "Responsive layouts and reusable UI components for web applications.",
  },

  // Databases / data technologies with hands-on experience
  {
    id: "sql",
    name: "SQL",
    type: "hard",
    category: "Data",
    icon: "shield",
    desc: "Writing queries and working with relational data through academic, training, and project work.",
  },

  {
    id: "mongodb",
    name: "MongoDB",
    type: "hard",
    category: "Data",
    icon: "shield",
    desc: "Working with document-based data in full-stack web development training and projects.",
  },

  // Programming / problem solving
  {
    id: "cpp",
    name: "C++",
    type: "hard",
    category: "Programming",
    icon: "bomb",
    desc: "Programming, data structures, algorithms, and competitive problem solving through ECPC and mentoring.",
  },

  {
    id: "git",
    name: "Git & GitHub",
    type: "hard",
    category: "Tools",
    icon: "sword",
    desc: "Version control, source-code management, branching, and collaborative development.",
  },

  // Soft skills
  {
    id: "teamwork",
    name: "Teamwork",
    type: "soft",
    category: "People",
    icon: "heart",
    desc: "Worked within an 11-member multidisciplinary team on Drago.",
  },

  {
    id: "leadership",
    name: "Leadership",
    type: "soft",
    category: "People",
    icon: "crown",
    desc: "Led the Drago team and coordinated work across frontend, backend, AI/ML, UI/UX, database, and QA.",
  },

  {
    id: "communication",
    name: "Communication",
    type: "soft",
    category: "People",
    icon: "bubble",
    desc: "Presented software projects, communicated with supervisors and teammates, and delivered problem-solving sessions.",
  },

  {
    id: "problem-solving",
    name: "Problem-solving",
    type: "soft",
    category: "Mindset",
    icon: "bolt",
    desc: "Breaking complex problems into practical steps, from programming challenges to debugging real applications.",
  },

  {
    id: "time",
    name: "Time Management",
    type: "soft",
    category: "Mindset",
    icon: "hourglass",
    desc: "Balanced academic work, internships, mentoring, competitive programming, and a large graduation project.",
  },

  // Languages
  {
    id: "arabic",
    name: "Arabic",
    type: "language",
    category: "Spoken",
    icon: "book",
    desc: "Native communication and the primary language used in Drago for its target learners.",
  },

  {
    id: "english",
    name: "English",
    type: "language",
    category: "Spoken",
    icon: "book",
    desc: "Technical, academic, and professional communication.",
  },
];

export const FEATURED_PROJECT = {
  title: "Drago",

  subtitle: "AI-powered educational platform for children with dyslexia",

  description: [
    "Arabic educational platform for children with dyslexia, supporting reading, spelling, comprehension, memory, and ordering through interactive games.",
    "Graduation project at AIET, developed by an 11-member multidisciplinary team that I led as Team Leader & Frontend Developer.",
    "Built the React interface, reusable UI components, and frontend features.",
    "Integrated the frontend with ASP.NET Core, SQL Server, SignalR, and AI services for pre-assessment and Arabic speech analysis.",
    "Includes four Arabic learning games, an AI pre-test with adaptive recommendations, specialist dashboards, real-time messaging, and PWA/offline capabilities.",
    "Won first place at the Geniuses Forum Competition and placed 9th among 60+ projects in the NTRA Graduation Projects Competition 2026.",
  ],
  tags: [
    "React",
    "JavaScript",
    "ASP.NET Core",
    "SQL Server",
    "SignalR",
    "Faster-Whisper",
    "PWA",
  ],

  screenshots: [
    "images/projects/DragoGames.png",
    "images/projects/DragoLanding.png",
    "images/projects/DragoVolcano.png",
  ],

  links: {
    live: "",
    code: "",
  },
};

export const MORE_PROJECTS = [
  {
    title: "Tasky Dashboard",
    description:
      "A responsive web dashboard developed during DEPI training, featuring dynamic charts, filtering, and interactive UI components.",
    image: null,
    tags: ["React", "JavaScript", "Bootstrap", "MongoDB", "Node.js"],
  },

  {
    title: "Airline Reservation System",
    description:
      "A full-stack airline reservation system with responsive interfaces, relational database design, and backend integration using Flask and MySQL.",
    image: null,
    tags: ["Bootstrap", "Flask", "MySQL"],
  },
];

export const TROPHIES = [
  {
    title: "First Place - Geniuses Forum Competition",
    note: "Won with Drago, my graduation project.",
  },

  {
    title: "9th Place - NTRA Graduation Projects Competition 2026",
    note: "Drago placed 9th among 60+ graduation projects.",
  },

  {
    title: "Graduated with Honors",
    note: "Computer Engineering at AIET, CGPA 3.81/4.0, ranked 3rd in class.",
  },

  {
    title: "Led an 11-Member Team",
    note: "Led a multidisciplinary graduation-project team across frontend, backend, AI/ML, UI/UX, database, and QA.",
  },

  {
    title: "Competitive Programming",
    note: "ECPC participant in 2023 and 2024; placed 39th among 450+ teams in ECPC 2024.",
  },

  {
    title: "Problem-Solving Mentor",
    note: "Delivered 20+ C++ and algorithms sessions through Microsoft Club Community - AIET.",
  },
];

export const CERTIFICATES = [
  {
    title: "Full Stack Web Development",
    issuer: "Digital Egypt Pioneers Initiative (DEPI) - MCIT",
    image: null,
  },

  {
    title: "Software Development Training",
    issuer: "Egypt Experts for Software & Hardware (EES)",
    image: null,
  },

  {
    title: "Certificate title",
    issuer: "Issuing organization",
    image: null,
  },
];

export const CONTACT = {
  location: "Alexandria, Egypt",

  phone: {
    label: "+20 12 1204 9270",
    href: "tel:+201212049270",
  },

  email: "habibamohamed3880@gmail.com",

  github: {
    label: "Habiba0079",
    href: "https://github.com/Habiba0079",
  },

  linkedin: {
    label: "in/habiba-mohamed-47764525b",
    href: "https://www.linkedin.com/in/habiba-mohamed-47764525b",
  },
};
