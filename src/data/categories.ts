import { PLACEHOLDER } from "../lib/assets";

export type Category = {
  name: string;
  image: string;
  count: number;
  href: string;
};

export const CATEGORIES: Category[] = [
  { name: "Dogs", image: PLACEHOLDER.categoryDogs, count: 128, href: "#" },
  { name: "Cats", image: PLACEHOLDER.categoryCats, count: 96, href: "#" },
  { name: "Small Pets", image: PLACEHOLDER.categorySmallPets, count: 54, href: "#" },
  {
    name: "Toys & Accessories",
    image: PLACEHOLDER.categoryToys,
    count: 73,
    href: "#",
  },
];
