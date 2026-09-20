// Everything you see on the site lives in this file. Edit the text here.
//
// Wrap a keyword in **double asterisks** to highlight it.
// Images: put files inside public/images/... and reference them WITHOUT a
// leading slash, for example "images/projects/drago-1.png".
// Leave a value as null to show an empty slot.

export const PROFILE = {
  name: "Habiba",

  tagline: "Computer Engineer & Software Developer.",

  // One bullet per line, typed out when you press Start.
  about: [
    "Hi! I'm **Habiba**, a **computer engineering** graduate.",
    "I build responsive **web apps** with **React** and **JavaScript**.",
    "**Team leader** and **frontend developer** of **Drago**, my graduation project.",
    "**Drago** won **1st place** at the Geniuses Forum.",
  ],

  photo: "images/assets/avatar.png",
};

// Education and experience. `logo` is optional: put a file in public/images/logos/
// and use its path (e.g. "images/logos/depi.png"). Without a logo, the `short` name is shown.
// `tools` is optional too.
export const CV = {
  education: [
    {
      period: "2021 - 2026",
      title: "Computer Engineering",
      org: "Alexandria Higher Institute of Engineering and Technology (AIET)",
      place: "Alexandria, Egypt",
      short: "AIET",
      logo: null,
      points: [
        "**CGPA 3.81 / 4.0**, ranked **3rd** in class, graduated with **honors**",
        "**Top Student**",
        "Graduation project **Drago**, an AI-powered educational platform for children with dyslexia",
        "**Team Leader & Frontend Developer** of an **11-member** multidisciplinary team",
        "Drago won **first place** at the Geniuses Forum Competition",
      ],
    },
  ],

  experience: [
    {
      period: "Feb 2025 - Apr 2026",
      title: "Problem Solving Mentor - C++ & Algorithms Instructor",
      org: "Microsoft Club Community - AIET",
      place: "Alexandria, Egypt",
      short: "MSC",
      logo: null,
      points: [
        "Delivered **20+ technical sessions** on **Data Structures**, **Algorithms**, and **C++**, helping students improve **problem-solving** and **debugging** skills",
        "**Mentored** students preparing for **competitive programming** contests by reviewing solutions and teaching **optimization** techniques",
        "Designed structured **practice sheets** to help students apply algorithmic concepts through practical problems",
      ],
      tools: [
        "C++",
        "Data Structures",
        "Algorithms",
        "Competitive Programming",
      ],
    },

    {
      period: "Jul 2025 - Aug 2025",
      title: "Software Engineering Trainee",
      badge: "Grade: Distinction",
      org: "Egypt Experts for Software & Hardware (EES)",
      place: "Alexandria, Egypt",
      short: "EES",
      logo: null,
      points: [
        "Developed **GreenLeaf Restaurant & Farm**, an **ERP-based** restaurant management system using **SQL**, **Oracle Database**, **REST APIs**, and **JSON**, earning an **Excellent** evaluation",
        "Presented the system and **ERP integration** approach, earning a **Distinction** for the training program",
      ],
      tools: ["SQL", "Oracle Database", "REST APIs", "JSON"],
    },

    {
      period: "Apr 2024 - Oct 2024",
      title: "Full-Stack Web Development Trainee",
      org: "Digital Egypt Pioneers Initiative (DEPI)",
      place: "Hybrid",
      short: "DEPI",
      logo: null,
      points: [
        "Built web applications using **React.js** and **Node.js**, developing **reusable components** and integrating **backend APIs**",
        "**Capstone Project:** collaborated on a **MERN stack** task management application, implementing **frontend features** and **API-driven workflows**",
      ],
      tools: ["React.js", "Node.js", "MongoDB", "Git & GitHub"],
    },
  ],

  competitions: [
    {
      period: "2023, 2024",
      title: "ECPC Participant",
      org: "Egyptian Collegiate Programming Contest",
      short: "ECPC",
      logo: null,
      points: ["**39th place** among **450+ teams** in ECPC 2024"],
    },
    {
      period: "2024",
      title: "Participant",
      org: "NASA Space Apps Challenge",
      short: "NASA",
      logo: null,
      points: ["Member of **Team Scrat**"],
    },
  ],
};

// Colours of the pixel character that walks along the bottom of the page.
export const CHARACTER = {
  hair: "#3a2540",
  skin: "#f2c9a5",
  eye: "#1a1030",
  blush: "#e9868b",
  mouth: "#b5485a",
  outfit: "#60558d",
  accent: "#ebaaae",
  dark: "#2e2650",
  boots: "#3a1508",
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

// Only technologies with hands-on development experience.
// icon: sword, shield, hammer, wand, bomb, heart, bolt, hourglass, crown, bubble, book
export const SKILLS = [
  // Frontend
  {
    id: "react",
    name: "React.js",
    type: "hard",
    category: "Frontend",
    icon: "sword",
    desc: "Building **responsive** and **interactive** web interfaces with **reusable components**, **hooks**, **state handling**, and **API integration**.",
  },
  {
    id: "javascript",
    name: "JavaScript",
    type: "hard",
    category: "Frontend",
    icon: "sword",
    desc: "Application logic, **DOM** interaction, **asynchronous** operations, **API integration**, and interactive web interfaces.",
  },
  {
    id: "html",
    name: "HTML",
    type: "hard",
    category: "Frontend",
    icon: "sword",
    desc: "**Semantic** page structure and **accessible** web interfaces.",
  },
  {
    id: "css",
    name: "CSS",
    type: "hard",
    category: "Frontend",
    icon: "sword",
    desc: "**Responsive** layouts, **animations**, reusable styles, and **CSS Modules**.",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    type: "hard",
    category: "Frontend",
    icon: "sword",
    desc: "**Responsive** layouts and reusable **UI components** for web applications.",
  },

  // Data
  {
    id: "sql",
    name: "SQL",
    type: "hard",
    category: "Data",
    icon: "shield",
    desc: "Writing **queries** and working with **relational data** through academic, training, and project work.",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    type: "hard",
    category: "Data",
    icon: "shield",
    desc: "Working with **document-based data** in **full-stack** web development training and projects.",
  },

  // Programming and tools
  {
    id: "cpp",
    name: "C++",
    type: "hard",
    category: "Programming",
    icon: "bomb",
    desc: "Programming, **data structures**, **algorithms**, and **competitive problem solving** through ECPC and mentoring.",
  },
  {
    id: "git",
    name: "Git & GitHub",
    type: "hard",
    category: "Tools",
    icon: "sword",
    desc: "**Version control**, source-code management, **branching**, and **collaborative development**.",
  },

  // Soft skills
  {
    id: "teamwork",
    name: "Teamwork",
    type: "soft",
    category: "People",
    icon: "heart",
    desc: "Worked within an **11-member** multidisciplinary team on Drago.",
  },
  {
    id: "leadership",
    name: "Leadership",
    type: "soft",
    category: "People",
    icon: "crown",
    desc: "**Led** the Drago team and coordinated work across **frontend, backend, AI/ML, UI/UX, database, and QA**.",
  },
  {
    id: "communication",
    name: "Communication",
    type: "soft",
    category: "People",
    icon: "bubble",
    desc: "**Presented** software projects, communicated with **supervisors** and teammates, and delivered **problem-solving sessions**.",
  },
  {
    id: "problem-solving",
    name: "Problem-solving",
    type: "soft",
    category: "Mindset",
    icon: "bolt",
    desc: "Breaking **complex problems** into practical steps, from programming challenges to **debugging** real applications.",
  },
  {
    id: "time",
    name: "Time Management",
    type: "soft",
    category: "Mindset",
    icon: "hourglass",
    desc: "Balanced **academic work**, **internships**, **mentoring**, competitive programming, and a large **graduation project**.",
  },

  // Languages
  {
    id: "arabic",
    name: "Arabic",
    type: "language",
    category: "Spoken",
    icon: "book",
    desc: "**Native** communication and the primary language used in **Drago** for its target learners.",
  },
  {
    id: "english",
    name: "English",
    type: "language",
    category: "Spoken",
    icon: "book",
    desc: "**Technical**, **academic**, and **professional** communication.",
  },
];

// The three "games" in the project arcade.
// images: screenshots shown on the arcade screen, in order (null = empty slot). Add or remove entries freely.
// links: shown as buttons next to the joystick, only when filled in.
export const PROJECTS = [
  {
    id: "drago",
    title: "Drago",
    tagline:
      "**AI-powered** learning platform for children with **dyslexia**. I led the team and built the **frontend**.",
    tags: [
      "React",
      "JavaScript",
      "ASP.NET Core",
      "SQL Server",
      "SignalR",
      "Faster-Whisper",
      "PWA",
    ],
    images: [
      "images/projects/DragoGames.png",
      "images/projects/DragoLanding.png",
      "images/projects/DragoVolcano.png",
    ],
    links: {
      live: "https://drago-frontend.vercel.app",
      code: "https://github.com/Drago-project/drago-frontend",
    },
  },
  {
    id: "tasky",
    title: "Tasky Dashboard",
    tagline:
      "Responsive **dashboard** with dynamic **charts**, filtering and interactive UI, built at **DEPI**.",
    tags: ["React", "JavaScript", "Bootstrap", "MongoDB", "Node.js"],
    images: [null, null, null], // e.g. "images/projects/tasky-1.png"
    links: {
      live: "https://taskyy.up.railway.app",
      code: "https://github.com/Habiba0079/Tasky-task-management-system-DEPI-Finale",
    },
  },
  {
    id: "airline",
    title: "Airline Reservation System",
    tagline:
      "**Full-stack** booking system with a responsive UI, **relational database** and a **Flask** backend.",
    tags: ["Bootstrap", "Flask", "MySQL"],
    images: [null, null, null], // e.g. "images/projects/airline-1.png"
    links: {
      live: "",
      code: "https://github.com/Habiba0079/Airline-Company-Booking-System-project",
    },
  },
];

export const TROPHIES = [
  {
    title: "First Place - Geniuses Forum Competition",
    note: "Won with **Drago**, my graduation project.",
  },
  {
    title: "9th Place - NTRA Graduation Projects Competition 2026",
    note: "Drago placed **9th** among **60+** graduation projects.",
  },
  {
    title: "Graduated with Honors",
    note: "Computer Engineering at AIET, **CGPA 3.81/4.0**, ranked **3rd** in class.",
  },
  {
    title: "Led an 11-Member Team",
    note: "Led a **multidisciplinary** graduation-project team across frontend, backend, AI/ML, UI/UX, database, and QA.",
  },
  {
    title: "Competitive Programming",
    note: "ECPC participant in 2023 and 2024; placed **39th** among **450+ teams** in ECPC 2024.",
  },
  {
    title: "Problem-Solving Mentor",
    note: "Delivered **20+** C++ and algorithms sessions through Microsoft Club Community - AIET.",
  },
];

// The certificates scroll past as a film strip at the bottom of the page.
// Add as many as you like: image = "images/certificates/depi.png"
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
  { title: "Certificate title", issuer: "Issuing organization", image: null },
];

export const CONTACT = {
  location: "Alexandria, Egypt",
  phone: { label: "+20 12 1204 9270", href: "tel:+201212049270" },
  email: "habibamohamed3880@gmail.com",
  github: { label: "Habiba0079", href: "https://github.com/Habiba0079" },
  linkedin: {
    label: "in/habiba-mohamed-47764525b",
    href: "https://www.linkedin.com/in/habiba-mohamed-47764525b",
  },
};
