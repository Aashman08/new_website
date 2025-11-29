/**
 * Navigation Configuration
 * Centralized configuration for section navigation and menu items
 */

// Main navigation sections
export const SECTIONS = {
  ABOUT: 'ABOUT ME',
  PROJECTS: 'PROJECTS',
  CONTACT: 'CONTACT',
  RESEARCH: 'RESEARCH',
  ART: 'ART',
} as const;

export type SectionKey = keyof typeof SECTIONS;
export type SectionValue = (typeof SECTIONS)[SectionKey];

// Map URL section params to menu actions
export const SECTION_URL_MAP: Record<string, SectionValue> = {
  about: SECTIONS.ABOUT,
  projects: SECTIONS.PROJECTS,
  contact: SECTIONS.CONTACT,
  research: SECTIONS.RESEARCH,
  art: SECTIONS.ART,
};

// All valid section actions (for validation)
export const VALID_SECTIONS: SectionValue[] = Object.values(SECTIONS);

// Main menu items (ordered)
export const MAIN_MENU_ITEMS: SectionValue[] = [
  SECTIONS.ABOUT,
  SECTIONS.PROJECTS,
  SECTIONS.CONTACT,
  SECTIONS.RESEARCH,
  SECTIONS.ART,
];

// Menu items excluding specific sections (used for navigation within sections)
export const getMenuItemsExcluding = (exclude: SectionValue[]): string[] => {
  return MAIN_MENU_ITEMS.filter((item) => !exclude.includes(item)).map(
    (item) => item.replace('ABOUT ME', 'About Me') // Format for display
  );
};

