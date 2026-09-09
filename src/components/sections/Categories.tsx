import { ArrowUpRight } from "lucide-react";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { CATEGORIES } from "../../data/categories";

export function Categories() {
  return (
    <Section id="categories" aria-labelledby="categories-heading">
      <SectionHeading
        id="categories-heading"
        eyebrow="Categories"
        title="Shop by pet"
        subtitle="Everything for every kind of companion — curated by our in-house pet parents."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
        {CATEGORIES.map((category, i) => (
          <Reveal
            key={category.name}
            animation="animate-slide-up"
            delay={`delay-${(i + 1) * 100}`}
          >
            <a
              href={category.href}
              className="group relative block overflow-hidden rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <img
                src={category.image}
                alt={category.name}
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-green-dark/85 via-green-dark/20 to-transparent transition group-hover:from-green-dark/90" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 md:p-5">
                <div>
                  <h3 className="font-serif-display text-xl leading-tight text-white md:text-2xl">
                    {category.name}
                  </h3>
                  <p className="text-sm text-white/80">
                    {category.count} products
                  </p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/90 text-green-dark transition group-hover:bg-orange group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
