import { useState, type FormEvent } from "react";
import { Mail, Check } from "lucide-react";
import { Section } from "../ui/Section";
import { useI18n } from "../../i18n/I18nContext";

export function Newsletter() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function isValidEmail(v: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidEmail(email)) return;
    // TODO: wire up to a real email provider — no backend yet.
    setSubmitted(true);
  }

  return (
    <Section id="newsletter" aria-labelledby="newsletter-heading">
      <div className="rounded-3xl bg-green-dark px-6 py-12 text-center text-white md:px-12 md:py-16">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
          {t.newsletter.eyebrow}
        </p>
        <h2
          id="newsletter-heading"
          className="mx-auto max-w-2xl font-serif-display text-3xl md:text-4xl"
        >
          {t.newsletter.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/70">
          {t.newsletter.subtitle}
        </p>

        {submitted ? (
          <div
            role="status"
            className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-full bg-white/10 px-6 py-4"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange text-white">
              <Check className="h-4 w-4" aria-hidden="true" />
            </span>
            <p className="font-medium">{t.newsletter.success}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              {t.newsletter.emailLabel}
            </label>
            <div className="relative flex-1">
              <Mail
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                aria-hidden="true"
              />
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletter.placeholder}
                className="w-full rounded-full border-0 bg-white py-3 pl-11 pr-4 text-green-dark placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-3 font-medium text-white transition hover:bg-orange-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-dark"
            >
              {t.newsletter.subscribe}
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-white/50">{t.newsletter.privacy}</p>
      </div>
    </Section>
  );
}
