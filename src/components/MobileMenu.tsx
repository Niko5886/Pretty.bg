import { useEffect, useState } from "react";
import { Menu, X, PawPrint } from "lucide-react";
import { NAV_ITEMS } from "../data/nav";
import { LanguageSwitcher } from "./ui/LanguageSwitcher";
import { useI18n } from "../i18n/I18nContext";

/**
 * Mobile navigation: a hamburger button (below md) that opens a full-screen
 * overlay with the shared nav items. Closes on link click, backdrop click or
 * Escape. Used by both Header and StickyNav so mobile users always have nav.
 */
export function MobileMenu() {
  const { t } = useI18n();
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
        aria-label={t.mobileMenu.open}
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
            <span className="flex items-center gap-2">
              <PawPrint className="h-7 w-7 text-orange" aria-hidden="true" />
              <span className="font-serif-display text-2xl text-green-dark">
                Pretty.bg
              </span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.mobileMenu.close}
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
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 font-serif-display text-2xl text-green-dark transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </nav>

          {/* Language toggle at the bottom of the mobile menu */}
          <div className="mt-auto px-4 pb-8 pt-6">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </div>
  );
}
