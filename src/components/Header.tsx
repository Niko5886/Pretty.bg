import { useEffect } from "react";
import { Search, ShoppingCart, Star, PawPrint } from "lucide-react";
import { NAV_ITEMS } from "../data/nav";
import { MobileMenu } from "./MobileMenu";
import { AccountMenu } from "./AccountMenu";
import { useShop } from "../context/ShopContext";

function Badge({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-orange text-[10px] font-bold text-white">
      {count}
    </span>
  );
}

export function Header() {
  const { cartCount, wishlistCount, openSearch, openCart, openWishlist } =
    useShop();

  // Cmd/Ctrl+K or "/" opens search (unless the user is typing in a field).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const typing =
        !!t &&
        (t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable);
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        openSearch();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openSearch]);

  return (
    <header className="relative z-30 w-full shrink-0 px-4 py-4 md:px-8 lg:px-12">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          aria-label="Pretty.bg home"
          className="flex animate-fade-in items-center gap-2 delay-100 outline-none focus-visible:ring-2 focus-visible:ring-orange"
        >
          <PawPrint className="h-7 w-7 text-orange lg:h-8 lg:w-8" aria-hidden="true" />
          <span className="font-serif-display text-2xl text-green-dark lg:text-3xl">
            Pretty.bg
          </span>
        </a>

        {/* Center nav */}
        <nav
          aria-label="Primary"
          className="hidden animate-fade-in items-center gap-8 text-sm font-medium delay-200 md:flex"
        >
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`rounded transition hover:text-green-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange ${
                i === 0 ? "text-green-dark" : "text-green-dark/70"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex animate-fade-in items-center gap-3 delay-300">
          <button
            type="button"
            onClick={openSearch}
            aria-label="Search (press / )"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-green-dark transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange sm:flex"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={openWishlist}
            aria-label={`Favorites, ${wishlistCount} ${
              wishlistCount === 1 ? "item" : "items"
            }`}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-orange text-white transition hover:bg-orange-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Star className="h-4 w-4" fill="currentColor" aria-hidden="true" />
            <Badge count={wishlistCount} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label={`Cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-green-dark transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
          >
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
            <Badge count={cartCount} />
          </button>
          <AccountMenu />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
