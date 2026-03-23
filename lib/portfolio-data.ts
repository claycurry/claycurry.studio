export const locationData = {
  label: "Seattle, WA",
  mapHref: "https://www.google.com/maps/place/Seattle,+WA",
  mapEmbedUrl: "https://www.google.com/maps?q=Seattle,+WA&z=11&output=embed",
} as const;

export const profileData = {
  name: "Clay Curry",
  title: "Design Engineer",
  avatar: "/clay_profile_cropped.png",
  email: "me@claycurry.studio",
  location: locationData.label,
  locationHref: locationData.mapHref,
  githubUsername: "claycurry",
  xUsername: "claycurry__",
  social: {
    github: "https://github.com/claycurry",
    x: "https://x.com/claycurry__",
    linkedin: "https://www.linkedin.com/in/clay-curry/",
  },
} as const;

export const siteConfig = {
  repo: "https://github.com/claycurry/claycurry.studio",
} as const;

export const contactData = {
  email: "me@claycurry.studio",
  location: locationData.label,
  mapEmbedUrl: locationData.mapEmbedUrl,
} as const;

export type NavLink = { label: string; href: string };

const navLinks: NavLink[] = [
  { label: "about", href: "/" },
  { label: "work", href: "/work" },
  { label: "writing", href: "/writing" },
  { label: "random", href: "/random" },
];

export function getSiteNavLinks(): NavLink[] {
  return navLinks;
}
