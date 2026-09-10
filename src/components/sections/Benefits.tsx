import { Truck, ShieldCheck, RefreshCw, Lock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { useI18n } from "../../i18n/I18nContext";

const ICONS: LucideIcon[] = [Truck, ShieldCheck, RefreshCw, Lock];

export function Benefits() {
  const { t } = useI18n();
  return (
    <section
      id="benefits"
      aria-label={t.benefits.aria}
      className="scroll-mt-24 border-y border-green-dark/10 bg-white/50"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-12">
        {t.benefits.items.map(({ title, text }, i) => {
          const Icon = ICONS[i];
          return (
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
          );
        })}
      </div>
    </section>
  );
}
