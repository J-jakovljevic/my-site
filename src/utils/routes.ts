export const HOME = "/";
export const EXPERIENCE = "/experience";
export const PROJECTS = "/projects";
export const CONTACT = "/contact";

export const NAV_LINKS = [
  { to: HOME, label: "Home", end: true },
  { to: EXPERIENCE, label: "Experience", end: false },
  { to: PROJECTS, label: "Projects", end: false },
  { to: CONTACT, label: "Contact", end: false },
] as const;
