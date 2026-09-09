import { useState } from "react";
import { Truck, X } from "lucide-react";

export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="relative shrink-0 bg-green-dark px-10 py-2 text-center text-xs text-white sm:text-sm">
      <p className="flex items-center justify-center gap-2">
        <Truck className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>
          Free shipping on orders over <strong className="font-semibold">$49</strong>
          <span className="mx-2 text-white/40">·</span>
          24/7 vet chat support
        </span>
      </p>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
