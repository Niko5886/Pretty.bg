import type { CSSProperties, ReactNode } from "react";
import {
  Search,
  ShoppingCart,
  Star,
  ArrowUpRight,
  Play,
  ArrowRight,
  Plus,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Assets (all external — do not download)                           */
/* ------------------------------------------------------------------ */
const ASSETS = {
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
};

type BoxProps = { className?: string; style?: CSSProperties };

/* ------------------------------------------------------------------ */
/*  Header                                                            */
/* ------------------------------------------------------------------ */
function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-orange text-[10px] font-bold text-white">
      {children}
    </span>
  );
}

function Header() {
  return (
    <header className="relative z-30 w-full shrink-0 px-4 py-4 md:px-8 lg:px-12">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img
          src={ASSETS.logo}
          alt="CozyPaws"
          className="h-[33px] w-[130px] animate-fade-in delay-100 lg:h-[52px] lg:w-[205px]"
        />

        {/* Center nav */}
        <nav className="hidden animate-fade-in items-center gap-8 text-sm font-medium delay-200 md:flex">
          <a href="#" className="text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-600 transition hover:text-gray-900">
            Shop
          </a>
          <a href="#" className="text-gray-600 transition hover:text-gray-900">
            Delivery and payment
          </a>
          <a href="#" className="text-gray-600 transition hover:text-gray-900">
            Brands
          </a>
          <a href="#" className="text-gray-600 transition hover:text-gray-900">
            Blog
          </a>
        </nav>

        {/* Actions */}
        <div className="flex animate-fade-in items-center gap-3 delay-300">
          <button className="hidden h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-green-dark transition hover:bg-white sm:flex">
            <Search className="h-4 w-4" />
          </button>
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-orange text-white transition hover:bg-orange-hover">
            <Star className="h-4 w-4" fill="currentColor" />
            <Badge>4</Badge>
          </button>
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-green-dark transition hover:bg-white">
            <ShoppingCart className="h-4 w-4" />
            <Badge>1</Badge>
          </button>
          <img
            src={ASSETS.avatar}
            alt="Account"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Reusable pieces                                                   */
/* ------------------------------------------------------------------ */
function ProductCard({ className = "", style }: BoxProps) {
  return (
    <div className={className} style={style}>
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{ aspectRatio: "260 / 257" }}
      >
        <img
          src={ASSETS.product}
          alt="Cozy Cat House"
          className="h-full w-full object-cover"
        />
        <button className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-green-dark text-white transition hover:bg-green-hover">
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
      <p
        className="mt-2 text-gray-700"
        style={{ fontSize: "clamp(12px,0.9vw,14px)" }}
      >
        Cozy Cat House
      </p>
      <p
        className="font-semibold text-green-dark"
        style={{ fontSize: "clamp(14px,1vw,18px)" }}
      >
        $49.99
      </p>
    </div>
  );
}

function VideoCard({ className = "", style }: BoxProps) {
  return (
    <div className={className} style={style}>
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{ aspectRatio: "177 / 287" }}
      >
        <img
          src={ASSETS.video}
          alt="Product reviews"
          className="h-full w-full object-cover"
        />
        <button className="absolute bottom-3 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-green-dark text-white transition hover:bg-green-hover">
          <Play className="h-4 w-4" fill="currentColor" />
        </button>
      </div>
      <p
        className="mt-2 text-gray-700"
        style={{ fontSize: "clamp(11px,0.8vw,13px)" }}
      >
        Watch Product Reviews on TikTok and YouTube
      </p>
    </div>
  );
}

function StatBadge({ light = true }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-3">
        <img
          src={ASSETS.avatar}
          alt=""
          className="h-9 w-9 rounded-full border-2 border-white object-cover"
        />
        <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-green-dark text-white">
          <Plus className="h-4 w-4" />
        </span>
      </div>
      <div className="leading-tight">
        <p
          className={`text-lg font-semibold ${
            light ? "text-white" : "text-green-dark"
          }`}
        >
          98K+
        </p>
        <p className={`text-xs ${light ? "text-white/80" : "text-gray-600"}`}>
          Happy Customers
        </p>
      </div>
    </div>
  );
}

function RatingBadge({ light = true }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <Star className="h-5 w-5 text-orange" fill="currentColor" />
      <span
        className={`text-lg font-semibold ${
          light ? "text-white" : "text-green-dark"
        }`}
      >
        4.6
      </span>
    </div>
  );
}

function ExploreButton({ className = "" }: { className?: string }) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-medium text-white transition hover:bg-orange-hover ${className}`}
    >
      Explore Products
      <ArrowRight className="h-4 w-4" />
    </button>
  );
}

/* Bottom overlays shared by desktop + tablet */
function BottomOverlays() {
  const pos: CSSProperties = { bottom: "clamp(20px, 4vh, 50px)" };
  return (
    <>
      <div className="absolute left-8 animate-scale-in delay-1000" style={pos}>
        <StatBadge />
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 animate-scale-in text-center delay-1100"
        style={pos}
      >
        <h3 className="mb-3 font-serif-display text-2xl text-white drop-shadow">
          Best Products for Your Pet
        </h3>
        <ExploreButton />
      </div>
      <div className="absolute right-8 animate-scale-in delay-1200" style={pos}>
        <RatingBadge />
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero heading (word-pop)                                           */
/* ------------------------------------------------------------------ */
function HeroHeading({ style }: { style?: CSSProperties }) {
  return (
    <h1
      className="font-serif-display leading-[0.95] tracking-tight text-green-dark"
      style={style}
    >
      <span className="block">
        <span className="inline-block animate-word-pop delay-200">
          Everything
        </span>
      </span>
      <span className="block">
        <span className="inline-block animate-word-pop delay-300">Your</span>{" "}
        <span className="inline-block animate-word-pop delay-400">Pets</span>{" "}
        <span className="inline-block animate-word-pop delay-500">Love</span>
      </span>
    </h1>
  );
}

/* ------------------------------------------------------------------ */
/*  Desktop hero (lg+)                                                */
/* ------------------------------------------------------------------ */
function DesktopHero() {
  return (
    <section className="relative hidden flex-1 flex-col overflow-hidden lg:flex">
      {/* Text layer */}
      <div className="relative z-[5] px-12 pt-[5.4rem] text-center">
        <HeroHeading style={{ fontSize: "clamp(60px,7.5vw,110px)" }} />
      </div>

      {/* Side cards */}
      <ProductCard
        className="absolute left-12 top-[50px] z-20 animate-slide-in-left delay-600"
        style={{ width: "clamp(160px,14vw,260px)" }}
      />
      <VideoCard
        className="absolute right-12 top-[50px] z-20 animate-slide-in-right delay-700"
        style={{ width: "clamp(120px,10vw,177px)" }}
      />

      {/* Bottom images + overlays */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="flex items-end">
          <img
            src={ASSETS.bottomLeft}
            alt=""
            className="block h-auto w-full flex-1 animate-photo-reveal delay-700"
            style={{ maxHeight: "min(70vh, 55vw)" }}
          />
          <img
            src={ASSETS.bottomCenter}
            alt=""
            className="block h-auto w-full flex-[1.265] animate-photo-reveal delay-600"
            style={{ maxHeight: "min(85vh, 70vw)" }}
          />
          <img
            src={ASSETS.bottomRight}
            alt=""
            className="block h-auto w-full flex-1 animate-photo-reveal delay-800"
            style={{ maxHeight: "min(70vh, 55vw)" }}
          />
        </div>
        <BottomOverlays />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Tablet hero (md to lg)                                            */
/* ------------------------------------------------------------------ */
function TabletHero() {
  return (
    <section className="relative hidden flex-1 flex-col overflow-hidden md:flex lg:hidden">
      <div className="relative z-[5] px-8 pt-16 text-center">
        <HeroHeading style={{ fontSize: "4.5rem" }} />
      </div>

      <ProductCard
        className="absolute left-4 top-[80px] z-20 animate-slide-in-left delay-600"
        style={{ width: "160px" }}
      />
      <VideoCard
        className="absolute right-4 top-[80px] z-20 animate-slide-in-right delay-700"
        style={{ width: "120px" }}
      />

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="flex items-end">
          <img
            src={ASSETS.bottomLeft}
            alt=""
            className="block h-auto w-full flex-1 animate-photo-reveal delay-700"
            style={{ maxHeight: "60vh" }}
          />
          <img
            src={ASSETS.bottomCenter}
            alt=""
            className="block h-auto w-full flex-[1.265] animate-photo-reveal delay-600"
            style={{ maxHeight: "75vh" }}
          />
          <img
            src={ASSETS.bottomRight}
            alt=""
            className="block h-auto w-full flex-1 animate-photo-reveal delay-800"
            style={{ maxHeight: "60vh" }}
          />
        </div>
        <BottomOverlays />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile hero (below md)                                            */
/* ------------------------------------------------------------------ */
function MobileHero() {
  return (
    <section className="relative flex flex-1 flex-col overflow-hidden md:hidden">
      {/* Title */}
      <div className="px-4 pt-6 text-center">
        <h1
          className="animate-fade-up font-serif-display leading-[1.05] tracking-tight text-green-dark delay-200"
          style={{ fontSize: "36px" }}
        >
          Everything Your Pets Love
        </h1>
        <p className="mt-2 animate-fade-up text-sm text-gray-600 delay-300">
          Cozy homes, tasty treats and everything your best friend needs.
        </p>
        <ExploreButton className="mt-4 animate-fade-up delay-400" />
      </div>

      {/* Two cards */}
      <div className="mt-5 flex animate-fade-up gap-3 px-4 delay-500">
        <ProductCard className="flex-1" />
        <VideoCard className="w-32 shrink-0" />
      </div>

      {/* Stats row */}
      <div className="mt-5 flex animate-fade-up items-center justify-between px-6 delay-600">
        <StatBadge light={false} />
        <div className="h-8 w-px bg-gray-300" />
        <RatingBadge light={false} />
      </div>

      {/* Bottom images */}
      <div className="mt-5 flex min-h-0 flex-1 items-end">
        <img
          src={ASSETS.bottomLeft}
          alt=""
          className="block h-auto w-full flex-1 animate-photo-reveal delay-700"
        />
        <img
          src={ASSETS.bottomCenter}
          alt=""
          className="block h-auto w-full flex-[1.265] animate-photo-reveal delay-600"
        />
        <img
          src={ASSETS.bottomRight}
          alt=""
          className="block h-auto w-full flex-1 animate-photo-reveal delay-800"
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Root                                                              */
/* ------------------------------------------------------------------ */
export default function App() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <Header />
      <DesktopHero />
      <TabletHero />
      <MobileHero />
    </div>
  );
}
