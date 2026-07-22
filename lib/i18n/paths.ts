export const sectionIds = {
  art: "works",
  practice: "practice",
  about: "about",
  contact: "contact",
} as const;

export type SectionKey = keyof typeof sectionIds;

export type NavItem =
  | { key: string; kind: "section"; section: SectionKey }
  | { key: string; kind: "page"; path: "/design" | "/works" | "/exhibitions" | "/blog" };

export const navItems: NavItem[] = [
  { key: "availableWorks", kind: "page", path: "/works" },
  { key: "exhibitions", kind: "page", path: "/exhibitions" },
  { key: "design", kind: "page", path: "/design" },
  { key: "blog", kind: "page", path: "/blog" },
  { key: "about", kind: "section", section: "about" },
  { key: "contact", kind: "section", section: "contact" },
];

export function getSectionId(key: SectionKey): string {
  return sectionIds[key];
}

export function sectionHref(key: SectionKey): string {
  return `#${getSectionId(key)}`;
}

export function homeSectionHref(key: SectionKey): string {
  return `/${sectionHref(key)}`;
}

export function getNavHref(item: NavItem): string {
  if (item.kind === "page") {
    return item.path;
  }
  return homeSectionHref(item.section);
}
