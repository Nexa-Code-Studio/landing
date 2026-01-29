"use client";

import { motion } from "framer-motion";
import { Coffee, FileText, Code, CheckCircle } from "lucide-react";

const steps = [
    {
        icon: Coffee,
        title: "Curhat Ide",
        desc: "Sampaikan masalah atau kebutuhan Anda lewat sesi konsultasi santai.",
    },
    {
        icon: FileText,
        title: "Blueprint & Penawaran",
        desc: "Kami buatkan rancangan solusi dan estimasi biaya yang masuk akal.",
    },
    {
        icon: Code,
        title: "Proses Development",
        desc: "Tim NexaCode mulai 'ngoding'. Anda akan mendapatkan update berkala.",
    },
    {
        icon: CheckCircle,
        title: "Serah Terima & Training",
        desc: "Sistem siap pakai! Kami ajarkan cara operasionalnya sampai Anda mahir.",
    },
];

export default function Process() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        4 Langkah Mudah Memulai Digitalisasi
                    </h2>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />

                    <div className="grid gap-12 md:grid-cols-4">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative bg-white pt-4 md:pt-0"
                            >
                                <div className="w-24 h-24 mx-auto bg-white border-4 border-orange-50 rounded-full flex items-center justify-center mb-6 text-orange-600 shadow-sm">
                                    <step.icon size={32} />
                                </div>
                                <div className="text-center">
                                    <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full mb-3">
                                        Langkah {i + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
