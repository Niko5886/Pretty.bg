import { unsplashPhoto } from "../lib/assets";

export type Product = {
  id: string;
  name: string;
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
    id: "ceramic-bowl",
    name: "Premium Ceramic Bowl",
    price: 24.99,
    rating: 4.8,
    reviews: 214,
    image: img("1568640347023-a616a30bc3bd"),
    badge: "Bestseller",
  },
  {
    id: "grain-free-food",
    name: "Grain-Free Dog Food",
    price: 39.99,
    oldPrice: 49.99,
    rating: 4.7,
    reviews: 512,
    image: img("1516222338250-863216ce01ea"),
    badge: "-20%",
  },
  {
    id: "feather-teaser",
    name: "Feather Teaser Toy",
    price: 12.99,
    rating: 4.6,
    reviews: 98,
    image: img("1589924691995-400dc9ecc119"),
  },
  {
    id: "walking-set",
    name: "Everyday Walking Set",
    price: 29.99,
    rating: 4.5,
    reviews: 143,
    image: img("1594149929911-78975a43d4f5"),
  },
  {
    id: "salmon-treats",
    name: "Salmon Training Treats",
    price: 9.99,
    rating: 4.9,
    reviews: 320,
    image: img("1583743814966-8936f5b7be1a"),
    badge: "New",
  },
  {
    id: "adult-dry-food",
    name: "Adult Dry Food 5kg",
    price: 44.99,
    rating: 4.7,
    reviews: 187,
    image: img("1526947425960-945c6e72858f"),
  },
  {
    id: "orthopedic-bed",
    name: "Orthopedic Pet Bed",
    price: 69.99,
    oldPrice: 89.99,
    rating: 4.8,
    reviews: 276,
    image: img("1535294435445-d7249524ef2e"),
    badge: "-22%",
  },
  {
    id: "cat-scratcher",
    name: "Modern Cat Scratcher",
    price: 34.99,
    rating: 4.6,
    reviews: 121,
    image: img("1548767797-d8c844163c4c"),
  },
];
