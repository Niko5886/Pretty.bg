/* ------------------------------------------------------------------ */
/*  Shared asset URLs (all external — do not download)                */
/* ------------------------------------------------------------------ */
export const ASSETS = {
  logo: "https://polo-pecan-73837341.figma.site/_assets/v11/0ae29d6d9628bede667f90d57bebe81b8f1ec2bf.svg",
  avatar:
    "https://polo-pecan-73837341.figma.site/_assets/v11/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128",
  product:
    "https://polo-pecan-73837341.figma.site/_assets/v11/3e5158dad63d392ade022e81890edc9f54d750bc.png",
  video:
    "https://polo-pecan-73837341.figma.site/_assets/v11/76be6ec3a93a703b15e9cc01e764a4e3f9d7d2c0.png",
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
  categorySmallPets: unsplashPhoto("1452857297128-d9c29adba80b"),
  categoryToys: unsplashPhoto("1576201836106-db1758fd1c97"),
  brandStory: unsplashPhoto("1601758124510-52d02ddb7cbd", 900, 1000),
} as const;
