import { unsplashPhoto } from "../lib/assets";

/**
 * Structural product data. The display `name` lives in the i18n dictionary
 * (`t.product.names[id]`). `badge` is a token: "bestseller"/"new" are
 * translated via `t.product.badges`, discount tokens (e.g. "-20%") render as-is.
 */
export type Product = {
  id: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
};

const img = (id: string) => unsplashPhoto(id, 600, 600);

export const PRODUCTS: Product[] = [
  {
    // white ceramic pet bowl
    id: "ceramic-bowl",
    price: 24.99,
    rating: 4.8,
    reviews: 214,
    image: img("1610328479607-67e69b2fc68c"),
    badge: "bestseller",
  },
  {
    // bowl of dog food / kibble
    id: "grain-free-food",
    price: 39.99,
    oldPrice: 49.99,
    rating: 4.7,
    reviews: 512,
    image: img("1676193866128-03a926df76ef"),
    badge: "-20%",
  },
  {
    // cat playing with a feather teaser toy
    id: "feather-teaser",
    price: 12.99,
    rating: 4.6,
    reviews: 98,
    image: img("1781030114295-aba2caaa9696"),
  },
  {
    // dog wearing a harness + leash (walking set)
    id: "walking-set",
    price: 29.99,
    rating: 4.5,
    reviews: 143,
    image: img("1773086727839-8d9180b510fc"),
  },
  {
    // bags of dog treats
    id: "salmon-treats",
    price: 9.99,
    rating: 4.9,
    reviews: 320,
    image: img("1709810024789-4519a14f05ae"),
    badge: "new",
  },
  {
    // large bag of dry dog food
    id: "adult-dry-food",
    price: 44.99,
    rating: 4.7,
    reviews: 187,
    image: img("1684882726821-2999db517441"),
  },
  {
    // real Pretty.bg photo: dog resting on its bed (optimised JPEG in /public)
    id: "orthopedic-bed",
    price: 69.99,
    oldPrice: 89.99,
    rating: 4.8,
    reviews: 276,
    image: "/product-orthopedic-bed.jpg",
    badge: "-22%",
  },
  {
    // cat with a scratching post
    id: "cat-scratcher",
    price: 34.99,
    rating: 4.6,
    reviews: 121,
    image: img("1636543459630-8975a3548121"),
  },
];
