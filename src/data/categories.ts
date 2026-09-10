import { PLACEHOLDER } from "../lib/assets";

/** Category names live in the i18n dictionary (`t.categories.names[key]`). */
export type Category = {
  key: string;
  image: string;
  count: number;
  href: string;
};

export const CATEGORIES: Category[] = [
  { key: "dogs", image: PLACEHOLDER.categoryDogs, count: 128, href: "#" },
  { key: "cats", image: PLACEHOLDER.categoryCats, count: 96, href: "#" },
  { key: "small-pets", image: PLACEHOLDER.categorySmallPets, count: 54, href: "#" },
  { key: "toys", image: PLACEHOLDER.categoryToys, count: 73, href: "#" },
];
