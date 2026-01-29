"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <>
            {/* Floating Widget */}
            <motion.a
                href="https://wa.me/6288295477204"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition hover:scale-110"
            >
                <MessageCircle size={28} />
            </motion.a>

            <section id="contact" className="py-24 px-6 md:px-12 bg-gray-900 text-white">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        Jangan Biarkan Kompetitor Melangkah Lebih Jauh.
                    </h2>
                    <p className="text-xl text-gray-400 mb-10">
                        Konsultasikan kebutuhan software Anda hari ini dan dapatkan estimasi harga secara gratis.
                    </p>
                    <a
                        href="https://wa.me/6288295477204"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition transform hover:scale-105"
                    >
                        <MessageCircle size={20} />
                        Hubungi NexaCode Sekarang
                    </a>
                </div>
            </section>
        </>
    );
}
