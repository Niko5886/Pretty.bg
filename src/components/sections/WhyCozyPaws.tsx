import { ShieldCheck, Leaf, Zap, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

type Value = {
  icon: LucideIcon;
  title: string;
  text: string;
  highlight?: boolean;
};

const VALUES: Value[] = [
  {
    icon: ShieldCheck,
    title: "Vet-approved quality",
    text: "Every item is reviewed by licensed veterinarians before it ever reaches your pet.",
    highlight: true,
  },
  {
    icon: Leaf,
    title: "Sustainable & safe",
    text: "Non-toxic materials and recyclable, plastic-light packaging on everything we ship.",
  },
  {
    icon: Zap,
    title: "Delivered in 24h",
    text: "Fast, fully tracked shipping — most orders arrive the very next day.",
  },
  {
    icon: HeartHandshake,
    title: "Always here for you",
    text: "24/7 support and a no-questions happiness guarantee on every purchase.",
  },
];

export function WhyCozyPaws() {
  return (
    <Section id="why" aria-labelledby="why-heading">
      <SectionHeading
        id="why-heading"
        eyebrow="Why CozyPaws"
        title="Care you can feel good about"
        subtitle="The little things that make a big difference for you and your best friend."
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {VALUES.map(({ icon: Icon, title, text, highlight }, i) => (
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
        ))}
      </div>
    </Section>
  );
}
