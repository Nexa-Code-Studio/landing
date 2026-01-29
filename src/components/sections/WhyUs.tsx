"use client";

import { motion } from "framer-motion";
import { Smile, Wallet, MessageCircle, HeartHandshake } from "lucide-react";

const reasons = [
    {
        icon: Smile,
        title: "User-Friendly (Anti-Pusing)",
        desc: "Desain aplikasi kami fokus pada kemudahan penggunaan. Jika staf Anda bisa pakai WhatsApp, mereka pasti bisa pakai software kami.",
    },
    {
        icon: Wallet,
        title: "Transparansi Budget",
        desc: "Kami bekerja sesuai skala kebutuhan Anda. Tidak ada biaya tersembunyi. Apa yang disepakati, itu yang dibayar.",
    },
    {
        icon: MessageCircle,
        title: "Konsultasi Gratis",
        desc: "Kami tidak akan membingungkan Anda dengan istilah IT yang rumit. Kami bicara tentang solusi bisnis Anda.",
    },
    {
        icon: HeartHandshake,
        title: "Dukungan Penuh",
        desc: "Kami siap membantu jika ada kendala atau butuh tambah fitur.",
    },
];

export default function WhyUs() {
    return (
        <section className="py-24 px-6 md:px-12 bg-gray-50">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 md:text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Mengapa Harus NexaCode?
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Kami mengerti bahwa Anda ingin hasil jadi yang siap dipakai, bukan pusing memikirkan hal teknis.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {reasons.map((r, i) => (
                        <motion.div
                            key={r.title}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:bg-orange-400 transition-all duration-300 flex items-center gap-6"
                        >
                            <div className="shrink-0 w-14 h-14 flex items-center justify-center text-orange-400 group-hover:text-white transition-colors">
                                <r.icon size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">{r.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-orange-50 transition-colors">{r.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
