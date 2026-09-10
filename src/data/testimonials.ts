/**
 * Structural testimonial data. The translatable `pet` label and `quote` live
 * in the i18n dictionary (`t.reviews.items[id]`); the reviewer name is a
 * proper noun and stays here.
 */
export type Testimonial = {
  id: string;
  name: string;
  rating: number;
  avatar: string;
};

export const TESTIMONIALS: Testimonial[] = [
  { id: "emma", name: "Emma R.", rating: 5, avatar: "https://i.pravatar.cc/128?img=5" },
  { id: "daniel", name: "Daniel K.", rating: 5, avatar: "https://i.pravatar.cc/128?img=32" },
  { id: "sofia", name: "Sofia M.", rating: 4, avatar: "https://i.pravatar.cc/128?img=47" },
];
