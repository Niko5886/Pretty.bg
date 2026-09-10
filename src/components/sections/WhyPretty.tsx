import { ShieldCheck, Leaf, Zap, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { useI18n } from "../../i18n/I18nContext";

const ICONS: LucideIcon[] = [ShieldCheck, Leaf, Zap, HeartHandshake];
/** The first card is visually highlighted. */
const HIGHLIGHT_INDEX = 0;

export function WhyPretty() {
  const { t } = useI18n();
  return (
    <Section id="why" aria-labelledby="why-heading">
      <SectionHeading
        id="why-heading"
        eyebrow={t.why.eyebrow}
        title={t.why.title}
        subtitle={t.why.subtitle}
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {t.why.items.map(({ title, text }, i) => {
          const Icon = ICONS[i];
          const highlight = i === HIGHLIGHT_INDEX;
          return (
            <Reveal key={title} className="h-full" delay={`delay-${(i + 1) * 100}`}>
              <article
                className={`flex h-full flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 md:p-8 ${
                  highlight
                    ? "bg-green-dark text-white shadow-lg"
                    : "bg-white text-green-dark shadow-sm hover:shadow-md"
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    highlight ? "bg-white/15 text-white" : "bg-orange/10 text-orange"
                  }`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif-display text-xl md:text-2xl">
                  {title}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    highlight ? "text-white/75" : "text-gray-600"
                  }`}
                >
                  {text}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
