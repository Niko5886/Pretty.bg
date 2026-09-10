import type { Locale } from "./translations";

/** Locale tag per language — drives euro formatting (€24.99 vs 24,99 €). */
const LOCALE_TAG: Record<Locale, string> = { bg: "bg-BG", en: "en-IE" };

/** Format a number as euro, localised (EN: €24.99, BG: 24,99 €). */
export function formatPrice(value: number, lang: Locale): string {
  return new Intl.NumberFormat(LOCALE_TAG[lang], {
    style: "currency",
    currency: "EUR",
  }).format(value);
}
