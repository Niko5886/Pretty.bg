import { ShoppingCart, PawPrint } from "lucide-react";
import { NAV_ITEMS } from "../data/nav";
import { useScrolled } from "../hooks/useScrolled";
import { MobileMenu } from "./MobileMenu";

/**
 * Condensed navigation that slides in from the top once the hero has been
 * scrolled past — gives persistent nav access without altering the hero.
 */
export function StickyNav() {
  const scrolled = useScrolled(500);

  return (
    <div
      aria-hidden={!scrolled}
      inert={!scrolled ? true : undefined}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div className="border-b border-green-dark/10 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 lg:px-12">
          <a
            href="#top"
            aria-label="Pretty.bg home"
            className="flex items-center gap-2 rounded outline-none focus-visible:ring-2 focus-visible:ring-orange"
          >
            <PawPrint className="h-6 w-6 text-orange" aria-hidden="true" />
            <span className="font-serif-display text-xl text-green-dark">
              Pretty.bg
            </span>
          </a>

          <div className="flex items-center gap-4">
            <nav
              aria-label="Sticky"
              className="hidden items-center gap-8 text-sm font-medium md:flex"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded text-green-dark/70 transition hover:text-green-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#best-sellers"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ShoppingCart className="h-4 w-4" aria-hidden="true" />
              Shop
            </a>

            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
