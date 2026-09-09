import { BadgeCheck } from "lucide-react";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { StarRating } from "../ui/StarRating";
import { Reveal } from "../ui/Reveal";
import { TESTIMONIALS } from "../../data/testimonials";

const PRESS = ["PetMag", "The Bark", "VetDaily", "PawPost", "Groomed"];

export function Testimonials() {
  return (
    <Section id="reviews" aria-labelledby="reviews-heading">
      <SectionHeading
        id="reviews-heading"
        eyebrow="Reviews"
        title="Loved by 98K+ pet parents"
        subtitle="Real words from real customers — and their very good boys and girls."
      />

      {/* Stat row */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-green-dark">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-semibold">4.6</span>
          <StarRating value={4.6} size={20} />
        </div>
        <span className="hidden h-6 w-px bg-green-dark/20 sm:block" />
        <p className="text-sm text-gray-600">
          <strong className="font-semibold text-green-dark">98K+</strong> happy
          customers
        </p>
        <span className="hidden h-6 w-px bg-green-dark/20 sm:block" />
        <p className="text-sm text-gray-600">
          <strong className="font-semibold text-green-dark">12K+</strong>{" "}
          five-star reviews
        </p>
      </div>

      {/* Review cards */}
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.id} className="h-full" delay={`delay-${(i + 1) * 100}`}>
            <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <StarRating value={t.rating} size={18} />
              <blockquote className="mt-4 flex-1 text-green-dark">
                “{t.quote}”
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt=""
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-green-dark">{t.name}</p>
                  <p className="flex items-center gap-1 text-xs text-gray-500">
                    <BadgeCheck
                      className="h-3.5 w-3.5 text-orange"
                      aria-hidden="true"
                    />
                    {t.pet} · Verified buyer
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Press / as seen in */}
      <div className="mt-14 border-t border-green-dark/10 pt-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400">
          As seen in
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-gray-400">
          {PRESS.map((name) => (
            <span key={name} className="font-serif-display text-xl">
              {name}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
