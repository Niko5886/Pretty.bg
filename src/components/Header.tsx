import type { ReactNode } from "react";
import { Search, ShoppingCart, Star } from "lucide-react";
import { ASSETS } from "../lib/assets";

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-orange text-[10px] font-bold text-white">
      {children}
    </span>
  );
}

export function Header() {
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
          <button
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-green-dark transition hover:bg-white sm:flex"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            aria-label="Favorites, 4 items"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-orange text-white transition hover:bg-orange-hover"
          >
            <Star className="h-4 w-4" fill="currentColor" aria-hidden="true" />
            <Badge>4</Badge>
          </button>
          <button
            aria-label="Cart, 1 item"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-green-dark transition hover:bg-white"
          >
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
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
