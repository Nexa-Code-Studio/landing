"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: '"Saya nggak paham IT sama sekali, gimana?"',
        a: "Justru itu tugas kami. Anda cukup tahu beres, kami yang urus semua urusan teknisnya. Kami akan jelaskan dengan bahasa awam.",
    },
    {
        q: '"Bisa buat sistem yang harganya masuk budget UMKM?"',
        a: "Sangat bisa. Kami menawarkan sistem modular yang bisa dibangun bertahap sesuai kemampuan budget Anda.",
    },
    {
        q: '"Berapa lama pengerjaannya?"',
        a: "Tergantung kerumitan. Landing page bisa selesai dalam 3-5 hari, sistem kompleks bisa 2-4 minggu.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 px-6 md:px-12 bg-gray-50">
            <div className="mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Pertanyaan yang Sering Muncul
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className="font-semibold text-gray-900">{faq.q}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === i ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
