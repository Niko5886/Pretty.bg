import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Dict, type Locale } from "./translations";
import { formatPrice } from "./format";

const STORAGE_KEY = "prettybg-lang";

type I18nState = {
  lang: Locale;
  setLang: (l: Locale) => void;
  /** The active locale's dictionary — access as `t.hero.explore`, etc. */
  t: Dict;
  /** Format a number as localised euro (€24.99 / 24,99 €). */
  formatPrice: (value: number) => string;
};

const I18nContext = createContext<I18nState | null>(null);

/** Stored choice → browser language → English fallback. */
function detectInitialLang(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "bg" || stored === "en") return stored;
  return navigator.language?.toLowerCase().startsWith("bg") ? "bg" : "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>(detectInitialLang);

  // Keep <html lang> and the document title in sync with the active locale.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = translations[lang].meta.title;
  }, [lang]);

  const setLang = (l: Locale) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
  };

  const value: I18nState = {
    lang,
    setLang,
    t: translations[lang],
    formatPrice: (v: number) => formatPrice(v, lang),
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
