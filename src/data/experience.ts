export type Role = {
  title: string;
  org: string;
  period: string;
  blurb: string;
  href?: string;
};

/**
 * Experience timeline shown on the About page. Built from Bailey's CV.
 * Most recent first; political/civic roles are surfaced near the top.
 */
export const experience: Role[] = [
  {
    title: "Digital Producer, Brand Sites",
    org: "General Mills",
    period: "Jan 2023 – Present",
    blurb:
      "Lead project management for General Mills brand websites. Built a first-of-its-kind logged-in account experience on a Shopify site, drove enterprise web accessibility to WCAG AA across 400+ domains, and managed builds like Mezco Foods and the Ratio site.",
    href: "https://www.generalmills.com",
  },
  {
    title: "Lead Digital Specialist",
    org: "Brown County Democratic Party of Wisconsin",
    period: "2022 – Present",
    blurb:
      "Design, build, and manage the county party's website and digital presence, supporting organizing, outreach, and elections.",
    href: "https://browncountydems.com",
  },
  {
    title: "Web Developer (Contract)",
    org: "Door County Democrats of Wisconsin",
    period: "2026 – Present",
    blurb:
      "Contracted to design and build the county party's website—a clean, easy-to-manage platform for organizing and outreach.",
    href: "https://doordems.org",
  },
  {
    title: "Marketing Technology Analyst, Blue Buffalo",
    org: "General Mills",
    period: "Jan 2022 – Jan 2023",
    blurb:
      "Owned mobile app releases to 400k+ users across the App Store and Google Play. Implemented privacy controls (OneTrust), analytics (Firebase, Datadog), feature flagging (LaunchDarkly), and A/B testing.",
    href: "https://www.generalmills.com",
  },
  {
    title: "Digital & Technology Intern, Core Sites",
    org: "General Mills",
    period: "Summer 2021",
    blurb:
      "Built a visual-search proof-of-concept for Betty Crocker recipe search (Google Cloud, .NET, C#, Docker) and presented it to the senior leadership team.",
  },
  {
    title: "Student Team Lead",
    org: "DoIT Help Desk—UW-Madison",
    period: "2020 – 2022",
    blurb:
      "Co-supervised the Help Desk (~80 student staff), building outage-communication and scheduling systems used across campus.",
    href: "https://it.wisc.edu",
  },
  {
    title: "Technical Writer & Support Specialist",
    org: "DoIT Help Desk—UW-Madison",
    period: "2018 – 2020",
    blurb:
      "Wrote and maintained Knowledgebase documentation used across the UW System and supported technology contacts.",
  },
];

/**
 * Political & civic work to highlight. The campaign sites are real (see
 * Projects); add any roles, volunteering, or organizing you want featured.
 */
export const politicalWork: string[] = [
  "Lead Digital Specialist for the Brown County Democratic Party of Wisconsin—I run the county party's website and digital presence.",
  "Contracted by the Door County Democrats of Wisconsin to design and build their website.",
  "Designed and built campaign websites for local Wisconsin candidates (Andrea Gage for Brown County Supervisor, Rick Crosson).",
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  detail?: string;
};

/** TODO: confirm graduation year. */
export const education: Education[] = [
  {
    school: "University of Wisconsin–Madison",
    degree: "B.S. Computer Science & B.S. Political Science",
    period: "2018 – 2021",
    detail: "GPA 4.0 · Dean's List",
  },
  {
    school: "Ashwaubenon High School",
    degree: "High School Diploma",
    period: "2014 – 2018",
    detail: "Valedictorian · National Merit Scholar",
  },
];

export const skills: string[] = [
  "Project Management",
  "React",
  "React Native",
  "TypeScript / JavaScript",
  "Firebase",
  "Shopify",
  "WordPress",
  "Web Accessibility (WCAG AA)",
  "Google Cloud & BigQuery",
  "SQL",
];
