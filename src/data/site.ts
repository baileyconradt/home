/**
 * Central site config. Edit this file to update copy, links, and contact info.
 * Anything marked TODO is a best guess or a gap Bailey should fill in.
 */

export const site = {
  name: "Bailey Conradt",
  role: "Web Developer · Project Manager · Musician",
  // Plain-text mirror of the bio (used for meta/SEO). The rendered version with
  // the "register to vote" link lives in src/components/Bio.tsx.
  about:
    "I'm a web developer, project manager, and musician from Green Bay, Wisconsin. When I'm not building websites, you can usually find me jamming out to Taylor Swift, keeping up to date on the latest political news (make sure you're registered to vote!), or making silly memes!",
  location: "Green Bay, Wisconsin",
  // Email is intentionally NOT stored here as a plain address—to limit
  // scraping, the Contact page assembles it from parts and only the Contact
  // page can open a composer. The "email" social below points to /contact.
  resume: "/bailey_conradt_resume.pdf",
  avatar: "/images/bailey_profile.jpg",
  blog: "https://medium.com/@baileyconradt",
};

/** Bailey's web studio—surfaced as a "let's talk websites" CTA. */
export const corgiDigital = {
  name: "Corgi Digital",
  url: "https://www.corgidigitalgb.com",
  tagline:
    "Websites that work—friendly, effective, and built right here in Green Bay.",
};

export type Social = {
  label: string;
  href: string;
  /** simple-icons style key used by the inline icon component */
  icon:
    | "github"
    | "linkedin"
    | "instagram"
    | "twitter"
    | "facebook"
    | "tiktok"
    | "email";
};

export const socials: Social[] = [
  { label: "Facebook", href: "https://facebook.com/baileyconradt", icon: "facebook" },
  {
    label: "Instagram",
    href: "https://instagram.com/baileyswizzle",
    icon: "instagram",
  },
  { label: "TikTok", href: "https://www.tiktok.com/@baileyconradt", icon: "tiktok" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/baileyconradt/",
    icon: "linkedin",
  },
  { label: "Twitter", href: "https://twitter.com/baileyswizzle", icon: "twitter" },
  { label: "GitHub", href: "https://github.com/baileyconradt", icon: "github" },
  // Points to the Contact page (not a raw mailto) to keep the address unscrapable.
  { label: "Email", href: "/contact", icon: "email" },
];
