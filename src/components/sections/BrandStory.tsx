import { Check } from "lucide-react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { PLACEHOLDER } from "../../lib/assets";
import { useI18n } from "../../i18n/I18nContext";

export function BrandStory() {
  const { t } = useI18n();
  return (
    <Section id="story" aria-labelledby="story-heading">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <Reveal animation="animate-photo-reveal">
          <div className="overflow-hidden rounded-3xl shadow-sm">
            <img
              src={PLACEHOLDER.brandStory}
              alt={t.story.imageAlt}
              width={900}
              height={1000}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal animation="animate-fade-up" delay="delay-200">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            {t.story.eyebrow}
          </p>
          <h2
            id="story-heading"
            className="font-serif-display text-4xl leading-tight tracking-tight text-green-dark md:text-5xl"
          >
            {t.story.title}
          </h2>
          <p className="mt-4 text-base text-gray-600 md:text-lg">{t.story.body}</p>

          <ul className="mt-6 space-y-3">
            {t.story.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-dark text-white">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-green-dark">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#" variant="primary" size="lg">
              {t.story.shopNow}
            </Button>
            <Button href="#" variant="outline" size="lg">
              {t.story.ourStory}
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
