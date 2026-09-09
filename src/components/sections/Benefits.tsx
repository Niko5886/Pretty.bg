import { Truck, ShieldCheck, RefreshCw, Lock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "../ui/Reveal";

type Benefit = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const BENEFITS: Benefit[] = [
  { icon: Truck, title: "Free & fast delivery", text: "On all orders over $49" },
  { icon: ShieldCheck, title: "Vet-approved quality", text: "Trusted by 500+ vets" },
  { icon: RefreshCw, title: "Easy 30-day returns", text: "Hassle-free refunds" },
  { icon: Lock, title: "Secure payment", text: "Encrypted checkout" },
];

export function Benefits() {
  return (
    <section
      id="benefits"
      aria-label="Why shop with Pretty.bg"
      className="scroll-mt-24 border-y border-green-dark/10 bg-white/50"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:px-8 lg:grid-cols-4 lg:px-12">
        {BENEFITS.map(({ icon: Icon, title, text }, i) => (
          <Reveal
            key={title}
            delay={`delay-${(i + 1) * 100}`}
            className="flex items-center gap-4"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background text-green-dark">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-semibold text-green-dark">{title}</p>
              <p className="text-sm text-gray-600">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
