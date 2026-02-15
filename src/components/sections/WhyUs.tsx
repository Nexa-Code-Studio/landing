"use client";

import { motion } from "framer-motion";
import { Smile, Wallet, MessageCircle, HeartHandshake } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const reasonIcons = [Smile, Wallet, MessageCircle, HeartHandshake];

export default function WhyUs() {
    const { t } = useTranslation();

    return (
        <section className="py-24 px-6 md:px-12 bg-gray-50">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 md:text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {t.whyUs.heading}<span className="text-orange-400">{t.whyUs.headingHighlight}</span>{t.whyUs.headingEnd}
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        {t.whyUs.subtitle}
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {t.whyUs.reasons.map((r, i) => {
                        const Icon = reasonIcons[i];
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:bg-orange-400 transition-all duration-300 flex items-center gap-6"
                            >
                                <div className="shrink-0 w-14 h-14 flex items-center justify-center text-orange-400 group-hover:text-white transition-colors">
                                    <Icon size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">{r.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm group-hover:text-orange-50 transition-colors">{r.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
