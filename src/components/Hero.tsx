import type { CSSProperties } from "react";
import { Star, ArrowRight, Plus } from "lucide-react";
import { ASSETS } from "../lib/assets";

/* ------------------------------------------------------------------ */
/*  Reusable pieces                                                   */
/* ------------------------------------------------------------------ */
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
          <Plus className="h-4 w-4" aria-hidden="true" />
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
      <Star className="h-5 w-5 text-orange" fill="currentColor" aria-hidden="true" />
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
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}

/* Bottom overlays shared by desktop + tablet */
function BottomOverlays() {
  const pos: CSSProperties = { bottom: "clamp(20px, 4vh, 50px)" };
  return (
    <>
      <div
        className="absolute left-8 hidden animate-scale-in delay-1000 lg:block"
        style={pos}
      >
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
      <div
        className="absolute right-8 hidden animate-scale-in delay-1200 lg:block"
        style={pos}
      >
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
            alt="Happy pets living their comfiest life with Pretty.bg"
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
            alt="Happy pets living their comfiest life with Pretty.bg"
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
          alt="Happy pets living their comfiest life with Pretty.bg"
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
/*  Hero — composes the three responsive layouts                      */
/* ------------------------------------------------------------------ */
export function Hero() {
  return (
    <div className="flex flex-1 flex-col">
      <DesktopHero />
      <TabletHero />
      <MobileHero />
    </div>
  );
}
