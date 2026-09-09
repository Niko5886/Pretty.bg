export type Testimonial = {
  id: string;
  name: string;
  pet: string;
  quote: string;
  rating: number;
  avatar: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "emma",
    name: "Emma R.",
    pet: "Dog mom to Biscuit",
    quote:
      "The orthopedic bed was a game-changer for my senior pup. Fast delivery, gorgeous quality, and Biscuit hasn't left it since.",
    rating: 5,
    avatar: "https://i.pravatar.cc/128?img=5",
  },
  {
    id: "daniel",
    name: "Daniel K.",
    pet: "Cat dad to Miso",
    quote:
      "Finally a shop that gets it. The grain-free food is vet-approved and my fussy cat actually loves it. Reordering on repeat.",
    rating: 5,
    avatar: "https://i.pravatar.cc/128?img=32",
  },
  {
    id: "sofia",
    name: "Sofia M.",
    pet: "Bunny mom to Clover",
    quote:
      "Beautiful packaging, non-toxic materials and genuinely helpful 24/7 support. CozyPaws is now my go-to for everything.",
    rating: 4,
    avatar: "https://i.pravatar.cc/128?img=47",
  },
];
