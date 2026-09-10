import { useEffect, useRef, useState } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { PRODUCTS } from "../data/products";
import { useShop } from "../context/ShopContext";
import { useI18n } from "../i18n/I18nContext";

export function SearchOverlay() {
  const { panel, closePanel, addToCart, openCart } = useShop();
  const { t, formatPrice } = useI18n();
  const open = panel === "search";
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => inputRef.current?.focus(), 60);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [open, closePanel]);

  const q = query.trim().toLowerCase();
  const results = q
    ? PRODUCTS.filter((p) =>
        t.product.names[p.id].toLowerCase().includes(q)
      )
    : [];

  return (
    <div
      className="fixed inset-0 z-[80]"
      aria-hidden={!open}
      inert={!open ? true : undefined}
      style={{ pointerEvents: open ? "auto" : "none" }}
    >
      <button
        type="button"
        aria-label={t.search.close}
        tabIndex={-1}
        onClick={closePanel}
        className={`absolute inset-0 h-full w-full cursor-default bg-green-dark/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.search.aria}
        className={`absolute inset-x-0 top-0 bg-background shadow-xl transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-3xl px-4 py-6 md:py-8">
          <div className="flex items-center gap-3 rounded-full border border-green-dark/15 bg-white px-4 py-3">
            <Search className="h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search.placeholder}
              aria-label={t.search.aria}
              className="flex-1 bg-transparent text-green-dark outline-none placeholder:text-gray-400"
            />
            <button
              type="button"
              onClick={closePanel}
              aria-label={t.search.close}
              className="flex h-8 w-8 items-center justify-center rounded-full text-green-dark transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {!query && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="py-1.5 text-sm text-gray-500">
                {t.search.popular}
              </span>
              {t.search.suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setQuery(s)}
                  className="rounded-full border border-green-dark/15 bg-white px-3 py-1.5 text-sm text-green-dark transition hover:border-orange hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {query && (
            <div className="mt-4 max-h-[50vh] overflow-y-auto">
              {results.length === 0 ? (
                <p className="py-6 text-center text-gray-600">
                  {t.search.noResults(query)}
                </p>
              ) : (
                <ul className="space-y-2">
                  {results.map((p) => (
                    <li key={p.id}>
                      <div className="flex items-center gap-3 rounded-2xl bg-white p-2 pr-3">
                        <img
                          src={p.image}
                          alt=""
                          width={48}
                          height={48}
                          loading="lazy"
                          className="h-12 w-12 shrink-0 rounded-xl object-cover"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-green-dark">
                            {t.product.names[p.id]}
                          </p>
                          <p className="text-sm text-gray-600">
                            {formatPrice(p.price)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            addToCart(p);
                            openCart();
                          }}
                          className="inline-flex items-center gap-1.5 rounded-full bg-orange px-3 py-1.5 text-xs font-medium text-white transition hover:bg-orange-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                        >
                          {t.search.add}
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
