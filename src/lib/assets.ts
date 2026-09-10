/* ------------------------------------------------------------------ */
/*  Shared asset URLs (all external — do not download)                */
/* ------------------------------------------------------------------ */
export const ASSETS = {
  logo: "https://polo-pecan-73837341.figma.site/_assets/v11/0ae29d6d9628bede667f90d57bebe81b8f1ec2bf.svg",
  // Real profile photo on a brand-green (#1a3d1a) backdrop (optimised, /public).
  avatar: "/avatar.jpg",
  bottomLeft:
    "https://polo-pecan-73837341.figma.site/_assets/v11/8d44b25186ef45a5789c74668fb781cea4e1ff49.png",
  bottomCenter:
    "https://polo-pecan-73837341.figma.site/_assets/v11/96745c4e72ad5c5208e53a885df797fd82cd854a.png?h=1024",
  bottomRight:
    "https://polo-pecan-73837341.figma.site/_assets/v11/81bd2e7a66b58f3d8f3ad78fd1ebf01af8dfdee1.png",
} as const;

/**
 * Placeholder imagery for the below-the-fold sections (Unsplash CDN).
 * TODO: swap with real Pretty.bg product/lifestyle photography.
 */
export const unsplashPhoto = (id: string, w = 800, h = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const PLACEHOLDER = {
  categoryDogs: unsplashPhoto("1552053831-71594a27632d"),
  categoryCats: unsplashPhoto("1514888286974-6c03e2ca1dba"),
  categorySmallPets: unsplashPhoto("1585110396000-c9ffd4e4b308"), // rabbit
  categoryToys: unsplashPhoto("1591946614720-90a587da4a36"), // dog with plush toy
  // Real Pretty.bg brand photo (optimised 900px JPEG in /public).
  brandStory: "/brand-story.jpg",
} as const;
