import { useState } from "react";
import { Truck, X } from "lucide-react";

const KEY = "prettybg-announcement";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(
    () =>
      typeof sessionStorage !== "undefined" &&
      sessionStorage.getItem(KEY) === "dismissed"
  );

  function dismiss() {
    try {
      sessionStorage.setItem(KEY, "dismissed");
    } catch {
      /* ignore storage errors */
    }
    setDismissed(true);
  }

  return (
    <div
      aria-hidden={dismissed}
      inert={dismissed ? true : undefined}
      className={`shrink-0 overflow-hidden bg-green-dark text-white transition-all duration-300 ${
        dismissed ? "max-h-0 opacity-0" : "max-h-16 opacity-100"
      }`}
    >
      <div className="relative px-10 py-2 text-center text-xs sm:text-sm">
        <p className="flex items-center justify-center gap-2">
          <Truck className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            Free shipping on orders over{" "}
            <strong className="font-semibold">$49</strong>
            <span className="mx-2 text-white/40">·</span>
            24/7 vet chat support
          </span>
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
