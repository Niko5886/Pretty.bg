/** Nav labels live in the i18n dictionary (`t.nav[key]`); href stays here. */
export type NavItem = { key: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { key: "home", href: "#top" },
  { key: "shop", href: "#categories" },
  { key: "delivery", href: "#benefits" },
  { key: "brands", href: "#best-sellers" },
  { key: "blog", href: "#reviews" },
];
