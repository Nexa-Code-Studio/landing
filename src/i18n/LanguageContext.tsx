"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
    type ReactNode,
} from "react";
import { en, id } from "./index";
import type { Locale, Dictionary } from "./index";

const dictionaries: Record<Locale, Dictionary> = { en, id };

interface LanguageContextValue {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: Dictionary;
}

// Provide a default context value so SSR prerendering never throws
const defaultContextValue: LanguageContextValue = {
    locale: "en",
    setLocale: () => { },
    t: en,
};

const LanguageContext = createContext<LanguageContextValue>(defaultContextValue);

const STORAGE_KEY = "lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("en");
    const [mounted, setMounted] = useState(false);

    // Read from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "en" || stored === "id") {
            setLocaleState(stored);
        }
        setMounted(true);
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem(STORAGE_KEY, newLocale);
        document.documentElement.lang = newLocale;
    };

    const t = dictionaries[locale];

    // Prevent hydration mismatch by rendering children only after mount
    if (!mounted) {
        return (
            <LanguageContext.Provider value={{ locale: "en", setLocale, t: en }}>
                <div style={{ visibility: "hidden" }}>{children}</div>
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    return useContext(LanguageContext);
}
