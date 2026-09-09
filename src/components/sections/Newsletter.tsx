import { useState, type FormEvent } from "react";
import { Mail, Check } from "lucide-react";
import { Section } from "../ui/Section";

export function Newsletter() {
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
          Join the pack
        </p>
        <h2
          id="newsletter-heading"
          className="mx-auto max-w-2xl font-serif-display text-3xl md:text-4xl"
        >
          Get 10% off your first order
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/70">
          Sign up for treats, tips and members-only deals. No spam — just the
          good stuff.
        </p>

        {submitted ? (
          <div
            role="status"
            className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-full bg-white/10 px-6 py-4"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange text-white">
              <Check className="h-4 w-4" aria-hidden="true" />
            </span>
            <p className="font-medium">Thanks! Check your inbox to confirm.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
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
                placeholder="you@example.com"
                className="w-full rounded-full border-0 bg-white py-3 pl-11 pr-4 text-green-dark placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-3 font-medium text-white transition hover:bg-orange-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-dark"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-white/50">
          By subscribing you agree to our privacy policy.
        </p>
      </div>
    </Section>
  );
}
