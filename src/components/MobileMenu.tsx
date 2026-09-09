import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ASSETS } from "../lib/assets";
import { NAV_ITEMS } from "../data/nav";

/**
 * Mobile navigation: a hamburger button (below md) that opens a full-screen
 * overlay with the shared nav items. Closes on link click, backdrop click or
 * Escape. Used by both Header and StickyNav so mobile users always have nav.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-green-dark transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
      >
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[70] flex flex-col bg-background"
        >
          <div className="flex items-center justify-between px-4 py-4">
            <img
              src={ASSETS.logo}
              alt="CozyPaws"
              className="h-[33px] w-[130px]"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-green-dark transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="flex flex-col gap-2 px-4 pt-6"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 font-serif-display text-2xl text-green-dark transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
