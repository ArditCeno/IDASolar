import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  DEFAULT_LANG,
  isLang,
  type Lang,
  LOCALES,
  PAGE_TITLE_BY_LANG,
  STORAGE_KEY,
  translateText,
} from "./translations";
import { observeDom, restoreOriginalText, translateDom } from "./domTranslator";

interface LanguageContextValue {
  lang: Lang;
  locale: string;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readInitialLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLang(stored) ? stored : DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);
  const langRef = useRef(lang);
  langRef.current = lang;

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.title = PAGE_TITLE_BY_LANG[lang];

    const apply = () => {
      restoreOriginalText();
      translateDom(document.body, lang);
    };
    apply();
    const frame = window.requestAnimationFrame(apply);
    return () => window.cancelAnimationFrame(frame);
  }, [lang]);

  useEffect(() => observeDom(document.body, () => langRef.current), []);

  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const t = useCallback((key: string) => translateText(lang, key), [lang]);

  const value = useMemo(
    () => ({ lang, locale: LOCALES[lang], setLang, t }),
    [lang, setLang, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
