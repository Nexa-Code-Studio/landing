"use client";

import { useTranslation } from "@/i18n/LanguageContext";

export default function LanguageSwitcher() {
    const { locale, setLocale } = useTranslation();

    const toggle = () => {
        setLocale(locale === "en" ? "id" : "en");
    };

    return (
        <button
            onClick={toggle}
            aria-label="Switch language"
            className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:border-orange-300 hover:text-orange-500 transition-all select-none"
        >
            <span className="text-base leading-none">
                {locale === "en" ? "🇬🇧" : "🇮🇩"}
            </span>
            <span className="uppercase tracking-wide">{locale}</span>
        </button>
    );
}
