export type ProjectCategory = "Client Site" | "Web App" | "Mobile App";

export type Project = {
  title: string;
  category: ProjectCategory;
  blurb: string;
  tags: string[];
  /** Optional image in /public/images. Falls back to a generated gradient. */
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  /** Featured projects show on the home page. */
  featured?: boolean;
  /** Accent gradient for the placeholder header, "a b" = two hex colors. */
  gradient?: [string, string];
};

export const projects: Project[] = [
  // ---- Political party sites (current focus) ---------------------------
  {
    title: "Brown County Democrats",
    category: "Client Site",
    blurb:
      "As Lead Digital Specialist for the Brown County Democratic Party of Wisconsin, I design, build, and manage the county party's website and digital presence.",
    tags: ["Political", "Lead Digital Specialist", "Web Design"],
    image: "/images/projects/brown-county-dems.jpg",
    demoUrl: "https://browncountydems.com",
    featured: true,
    gradient: ["#1e3a8a", "#2563eb"],
  },
  {
    title: "Door County Democrats",
    category: "Client Site",
    blurb:
      "Contracted to design and build the Door County Democrats of Wisconsin website—a clean, easy-to-manage site for organizing and outreach.",
    tags: ["Political", "Contract", "Web Design"],
    image: "/images/projects/door-county-dems.jpg",
    demoUrl: "https://doordems.org",
    featured: true,
    gradient: ["#1d4ed8", "#3b82f6"],
  },

  // ---- Campaign sites --------------------------------------------------
  {
    title: "Andrea Gage Campaign",
    category: "Client Site",
    blurb:
      "Campaign website for Andrea Gage's run for Brown County Supervisor—built for clarity, fast load times, and easy updates during a live race.",
    tags: ["Campaign", "Web Design", "Responsive"],
    image: "/images/projects/andrea-for-wisconsin.jpg",
    demoUrl: "https://andreaforwisconsin.com/",
    featured: true,
    gradient: ["#1e3a8a", "#2563eb"],
  },
  {
    title: "Rick Crosson Campaign",
    category: "Client Site",
    blurb:
      "Campaign website for Rick Crosson—bold, message-forward design with sections for issues, events, and getting involved.",
    tags: ["Campaign", "Web Design", "Responsive"],
    image: "/images/projects/rick-crosson.jpg",
    demoUrl: "https://rickcrosson.com",
    featured: true,
    gradient: ["#0f766e", "#14b8a6"],
  },

  // ---- Freelance client sites ------------------------------------------
  {
    title: "Schenk Realty",
    category: "Client Site",
    blurb:
      "Real estate website for Schenk Realty LLC—\"Former Teachers, Trusted Realtors\"—with listings, team bios, and client reviews.",
    tags: ["Real Estate", "Client Site"],
    image: "/images/projects/jodie-schenk.jpg",
    demoUrl: "https://www.jodieschenk.com",
    gradient: ["#7c2d12", "#b45309"],
  },
  {
    title: "St. John Lutheran Church",
    category: "Client Site",
    blurb:
      "Website for my home church—built to be welcoming and easy for the congregation to keep up to date.",
    tags: ["Community", "Client Site"],
    image: "/images/projects/st-john-church.jpg",
    demoUrl: "https://www.stjohnash.org",
    gradient: ["#0f766e", "#0891b2"],
  },

  // ---- Mobile ----------------------------------------------------------
  {
    title: "NoCap",
    category: "Mobile App",
    blurb:
      "A photo-captioning party game—grab 2+ friends, upload photos from your camera roll, caption them, and vote on the funniest. Built with React Native and Firebase.",
    tags: ["React Native", "Firebase", "iOS", "Android"],
    image: "/images/projects/nocap.jpg",
    appStoreUrl: "https://apps.apple.com/us/app/nocap-photo-captioning-game/id1640779504",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.baileyconradt.nocap",
    featured: true,
    gradient: ["#7c3aed", "#db2777"],
  },

  // ---- Web apps (GitHub) ----------------------------------------------
  {
    title: "GeoQuiz",
    category: "Web App",
    blurb:
      "A geography game—name countries, tap the map, match flags, and learn capitals while racing the clock.",
    tags: ["React", "Firebase", "Game"],
    image: "/images/projects/geoquiz.jpg",
    repoUrl: "https://github.com/baileyconradt/geoquiz",
    demoUrl: "https://country-learning-app.web.app",
    featured: true,
    gradient: ["#0ea5e9", "#22d3ee"],
  },
  {
    title: "Ball Knower",
    category: "Web App",
    blurb:
      "Five NFL trivia games in one—daily challenges, shareable scores, and modes like Career Path, Name the Roster, and Draft Order.",
    tags: ["React", "Firebase", "Game"],
    image: "/images/projects/ball-knower.jpg",
    demoUrl: "https://ball-knower.web.app/",
    featured: true,
    gradient: ["#ea580c", "#f59e0b"],
  },
  {
    title: "Jeff Stonks",
    category: "Web App",
    blurb:
      "A Rule One investing dashboard for tracking a stock watchlist and running the numbers, with settings that sync across devices. (Personal use; not financial advice.)",
    tags: ["React", "Firebase", "Investing"],
    image: "/images/projects/jeff-stonks.jpg",
    demoUrl: "https://jeff-stonks--jeff-stonks.us-central1.hosted.app/",
    featured: true,
    gradient: ["#1e293b", "#475569"],
  },
  {
    title: "Pip-drobe",
    category: "Web App",
    blurb:
      "A Fallout-inspired personal inventory system for tracking your gear and building loadouts.",
    tags: ["TypeScript", "Firebase", "Inventory"],
    image: "/images/projects/pip-drobe.jpg",
    repoUrl: "https://github.com/baileyconradt/pip-drobe",
    demoUrl: "https://brian-inventory-cc5d7.web.app",
    featured: false,
    gradient: ["#ca8a04", "#f59e0b"],
  },
  {
    title: "Lacquer Locker",
    category: "Web App",
    blurb:
      "A web app for cataloguing and organizing a nail polish collection.",
    tags: ["JavaScript", "Firebase", "Collection"],
    image: "/images/projects/lacquer-locker.jpg",
    repoUrl: "https://github.com/baileyconradt/lacquer-locker",
    demoUrl: "https://nail-polish-hex.web.app",
    gradient: ["#be185d", "#f472b6"],
  },
  {
    title: "Photo Globe",
    category: "Web App",
    blurb:
      "Map/globe-based photo explorer—pin and browse photos by where they were taken.",
    tags: ["JavaScript", "Maps"],
    repoUrl: "https://github.com/baileyconradt/photo-globe",
    demoUrl: undefined, // No Firebase deploy found—add a live URL if there is one.
    gradient: ["#15803d", "#4ade80"],
  },
  {
    title: "Ravelry App",
    category: "Web App",
    blurb:
      "A companion app built on the Ravelry API for knitting/crochet patterns and projects.",
    tags: ["JavaScript", "API"],
    repoUrl: "https://github.com/baileyconradt/ravelry-app",
    demoUrl: undefined, // No Firebase deploy found—add a live URL if there is one.
    gradient: ["#9333ea", "#c084fc"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
