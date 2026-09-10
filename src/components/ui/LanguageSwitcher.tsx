import { useI18n } from "../../i18n/I18nContext";
import type { Locale } from "../../i18n/translations";

const OPTIONS: { code: Locale; label: string; native: string }[] = [
  { code: "bg", label: "BG", native: "Български" },
  { code: "en", label: "EN", native: "English" },
];

/**
 * Segmented BG | EN language toggle. Matches the header's pill buttons
 * (h-10, rounded-full, gray border); the active language fills with the
 * brand green while orange stays reserved for calls-to-action.
 */
export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.a11y.languageGroup}
      className={`inline-flex h-10 items-center rounded-full border border-gray-300 bg-white p-1 ${className}`.trim()}
    >
      {OPTIONS.map(({ code, label, native }) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            onClick={() => setLang(code)}
            aria-pressed={active}
            aria-label={code === "bg" ? t.a11y.switchToBg : t.a11y.switchToEn}
            title={native}
            className={`flex h-8 min-w-[2rem] items-center justify-center rounded-full px-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange ${
              active
                ? "bg-green-dark text-white shadow-sm"
                : "text-green-dark/50 hover:text-green-dark"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
