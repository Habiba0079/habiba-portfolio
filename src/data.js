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
    "and I love **learning** and **building** things that make a difference.",
    "I build responsive **web apps**.",
    "I thrive in **team environments** and **collaborative projects**.",
    "I enjoy **mentoring** and helping others grow their skills.",
    // "**Team leader** and **frontend developer**",
    // "I mentor students in **problem solving**, **C++**, and **algorithms**.",
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
      logo: "images/logo/AIET.png",
      plate: "light", // "light" or "dark": the plate behind a logo (pick the one it reads best on)

      // Shown as the shiny bronze medal.
      medal: {
        rank: "3rd",
        rankLabel: "in class",
        gpaLabel: "CGPA",
        gpa: "3.81 / 4.0",
        badges: ["**Top Student**", "Graduated with **honors**"],
      },

      // Shown next to the medal. `logo` is optional (e.g. "images/logo/drago.png").
      graduationProject: {
        name: "Drago",
        logo: "images/logo/drago.png",
        lead: "**Led** the project as **Team Leader & Frontend Developer** of an **11-member** team",
        grade: "Excellent",
        // The awards Drago won. Set locked: true to show a mystery slot until you add the text.
        awards: [
          { title: "1st Place", event: "Geniuses Forum Competition" },
          {
            title: "9th Place",
            event: "NTRA Graduation Projects Competition 2026",
            detail: "Among 60+ projects",
          },
          { title: "???", event: "Locked", locked: true },
        ],
      },
    },
  ],

  // "oldest-first" makes level 1 the earliest experience; use "newest-first" to flip the map.
  mapOrder: "oldest-first",

  // The map shows only the period, the logo and `note`. The longer points and tools stay here for later.
  experience: [
    {
      period: "Feb 2025 - Apr 2026",
      title: "Problem Solving Mentor - C++ & Algorithms Instructor",
      org: "Microsoft Club Community - AIET",
      place: "Alexandria, Egypt",
      short: "MSC",
      logo: "images/logo/Microsoft.png",
      plate: "dark",
      note: "**C++ & Algorithms** instructor and problem-solving **mentor**, 20+ sessions",
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
      logo: "images/logo/EES.png",
      plate: "dark",
      note: "**Software Engineering** trainee: ERP system, **Distinction** grade",
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
      logo: "images/logo/depiEN.png",
      plate: "light",
      note: "**Full-Stack Web Development** trainee: React.js, Node.js, MERN capstone",
      points: [
        "Built web applications using **React.js** and **Node.js**, developing **reusable components** and integrating **backend APIs**",
        "**Capstone Project:** collaborated on a **MERN stack** task management application, implementing **frontend features** and **API-driven workflows**",
      ],
      tools: ["React.js", "Node.js", "MongoDB", "Git & GitHub"],
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
  programming: {
    label: "Programming language",
    tab: "Programming",
    gear: "Spell",
    color: "#d6a2ff",
  },
};

// Only technologies with hands-on development experience.
// icon: sword, shield, hammer, wand, bomb, heart, bolt, hourglass, crown, bubble, book
export const SKILLS = [
  // Programming Languages
  {
    id: "c",
    name: "C",
    type: "programming",
    category: "Programming",
    icon: "bomb",
    desc: "Programming fundamentals, memory concepts, and problem solving using C.",
  },
  {
    id: "cpp",
    name: "C++",
    type: "programming",
    category: "Programming",
    icon: "bomb",
    desc: "Data structures, algorithms, object-oriented programming, and competitive problem solving.",
  },
  {
    id: "python",
    name: "Python",
    type: "programming",
    category: "Programming",
    icon: "bomb",
    desc: "Programming, scripting, and problem solving using Python.",
  },
  {
    id: "javascript",
    name: "JavaScript",
    type: "programming",
    category: "Programming",
    icon: "bomb",
    desc: "Application logic, asynchronous programming, and interactive web development.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    type: "programming",
    category: "Programming",
    icon: "bomb",
    desc: "Typed JavaScript development for structured and maintainable applications.",
  },

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
  {
    id: "responsive-design",
    name: "Responsive Design",
    type: "hard",
    category: "Frontend",
    icon: "sword",
    desc: "Creating responsive interfaces that adapt across desktop, tablet, and mobile screen sizes.",
  },
  {
    id: "api-integration",
    name: "API Integration",
    type: "hard",
    category: "Frontend",
    icon: "shield",
    desc: "Integrating frontend applications with REST APIs, handling asynchronous requests, and connecting UI flows with backend services.",
  },
  {
    id: "i18next",
    name: "i18next",
    type: "hard",
    category: "Frontend",
    icon: "sword",
    desc: "Implementing Arabic/English localization and RTL/LTR layouts in React applications.",
  },

  // Data
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
    desc: "Working with document-based data in web development training and projects.",
  },

  // Tools
  {
    id: "git",
    name: "Git & GitHub",
    type: "hard",
    category: "Tools",
    icon: "sword",
    desc: "Version control, source-code management, branching, and collaborative development.",
  },

  // Soft Skills
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

  // Spoken Languages
  {
    id: "arabic",
    name: "Arabic",
    type: "language",
    category: "Spoken",
    icon: "book",
    desc: "Native communication.",
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
      "Vite",
      "i18next",
      "PWA",
      "JWT authentication",
      "ASP.NET Core",
      "SQL Server",
      "SignalR",
      "AI integration",
    ],
    images: [
      "images/projects/DragoGames.png",
      "images/projects/DragoLanding.png",
      "images/projects/DragoVolcano.png",
    ],
    // What the arcade screen shows: "images" (slideshow) or "video".
    // For video, put a file in public/videos/ and use its path (e.g. "videos/demo.mp4"),
    // or paste a YouTube / Google Drive / direct .mp4 link. `poster` is an optional cover image.
    display: "video",
    video: "videos/DEMO.mp4", // e.g. { src: "videos/drago-demo.mp4", poster: "images/projects/DragoGames.png" }
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
    tags: ["React", "MongoDB", "Node.js", "Material-UI", "Next.js"],
    images: [
      "images/projects/TaskyLanding.png",
      "images/projects/Tasky3.png",
      "images/projects/Tasky1.png",
      "images/projects/Tasky5.png",
      "images/projects/Tasky4.png",
      "images/projects/Tasky2.png",
    ], // e.g. "images/projects/tasky-1.png"
    // What the arcade screen shows: "images" (slideshow) or "video".
    // For video, put a file in public/videos/ and use its path (e.g. "videos/demo.mp4"),
    // or paste a YouTube / Google Drive / direct .mp4 link. `poster` is an optional cover image.
    display: "images",
    video: null, // e.g. { src: "videos/drago-demo.mp4", poster: "images/projects/DragoGames.png" }
    links: {
      live: "https://taskyfrontend.vercel.app/",
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
    // What the arcade screen shows: "images" (slideshow) or "video".
    // For video, put a file in public/videos/ and use its path (e.g. "videos/demo.mp4"),
    // or paste a YouTube / Google Drive / direct .mp4 link. `poster` is an optional cover image.
    display: "images",
    video: null, // e.g. { src: "videos/drago-demo.mp4", poster: "images/projects/DragoGames.png" }
    links: {
      live: "",
      code: "https://github.com/Habiba0079/Airline-Company-Booking-System-project",
    },
  },
];

// Participation: only a logo or a name, no text. `plate` ("light" or "dark") is the plate behind the logo.
export const PARTICIPATION = [
  {
    name: "NASA Space Apps Challenge",
    logo: "images/logo/Nasa.png",
    plate: "dark",
  },
  { name: "ECPC", logo: "images/logo/ECPC.jfif", plate: "light" },
  // { name: "NTRA", logo: "images/logo/NTRA_Logo.svg", plate: "light" },
  // { name: "ISF", logo: null },
  // { name: "5th Environmental Forum (2023)", logo: null },
];

// The certificates scroll past as a film strip at the bottom of the page.
// Add as many as you like: image = "images/certificates/depi.png"
export const CERTIFICATES = [
  {
    title: "Full Stack Web Development",
    issuer: "Digital Egypt Pioneers Initiative (DEPI) - MCIT",
    image: "images/certificates/DEPI_certificate.png",
  },
  {
    title: "NASA Space Apps Challenge 2024",
    issuer: "NASA Space Apps Challenge",
    image:
      "images/certificates/certificate_hab_i_ba_2024__n_a_s_a__space__apps__challenge.png",
  },
  {
    title: "Software Development Training",
    issuer: "Egypt Experts for Software & Hardware (EES)",
    image: "images/certificates/EES.jfif",
  },
  {
    title: "ECPC 2024 Participant",
    issuer: "Egyptian Collegiate Programming Contest",
    image: "images/certificates/ECPC2024.png",
  },
  {
    title: "NTRA Graduation Projects Competition 2026",
    issuer: "National Telecommunication Regulatory Authority (NTRA)",
    image: "images/certificates/NTRA.png",
  },
  {
    title: "ECPC 2023 Participant",
    issuer: "Egyptian Collegiate Programming Contest",
    image: "images/certificates/ECPC2023.png",
  },
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
