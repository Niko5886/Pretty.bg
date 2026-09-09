import { PawPrint, Camera, Music2, AtSign, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const COLUMNS: { title: string; links: string[] }[] = [
  { title: "Shop", links: ["Dogs", "Cats", "Small Pets", "Toys & Accessories"] },
  { title: "About", links: ["Our story", "Blog", "Careers", "Sustainability"] },
  { title: "Help", links: ["Shipping", "Returns", "FAQ", "Contact"] },
];

const SOCIALS: { icon: LucideIcon; label: string }[] = [
  { icon: Camera, label: "Instagram" },
  { icon: Music2, label: "TikTok" },
  { icon: AtSign, label: "X (Twitter)" },
  { icon: Mail, label: "Email" },
];

const PAYMENTS = ["Visa", "Mastercard", "PayPal", "Apple Pay"];

export function Footer() {
  return (
    <footer className="bg-green-dark text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-green-dark"
            >
              <PawPrint className="h-7 w-7 text-orange" aria-hidden="true" />
              <span className="font-serif-display text-2xl">CozyPaws</span>
            </a>
            <p className="mt-4 max-w-xs text-sm">
              Everything your pets love — vet-approved quality, delivered fast to
              your door.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-green-dark"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="rounded transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-green-dark"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm">© 2026 CozyPaws. All rights reserved.</p>

          <div className="flex flex-wrap gap-2">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="rounded-md border border-white/15 px-2.5 py-1 text-xs text-white/60"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="rounded transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-green-dark"
            >
              Privacy
            </a>
            <a
              href="#"
              className="rounded transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-green-dark"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
