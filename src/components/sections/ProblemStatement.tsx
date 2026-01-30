"use client";

import { motion } from "framer-motion";
import { AlertTriangle, FileSpreadsheet, Layers } from "lucide-react";
import Image from "next/image";

const problems = [
    {
        icon: FileSpreadsheet,
        title: "Data Berantakan?",
        desc: "Laporan stok atau pasien masih pakai kertas/Excel manual. Resiko hilang atau salah input tinggi.",
    },
    {
        icon: Layers,
        title: "Kurang Profesional?",
        desc: "Bisnis belum punya 'rumah digital' yang bisa diakses pelanggan. Kredibilitas jadi pertanyaan.",
    },
    {
        icon: AlertTriangle,
        title: "Butuh Fitur Khusus?",
        desc: "Aplikasi yang ada di pasaran tidak ada yang cocok dengan alur kerja (SOP) unik bisnis Anda.",
    },
];

const AnimatedCross = () => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
    >
        <motion.path
            d="M18 6 6 18"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <motion.path
            d="M6 6 18 18"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        />
    </motion.svg>
);

export default function ProblemStatement() {
    return (
        <section className="pt-24 pb-32 md:pb-80 px-6 md:px-14 bg-gray-50">
            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Header & Image */}
                    <div className="flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="text-left mb-10"
                        >
                            <h3 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                                Masih Mengelola Bisnis Secara Manual?
                            </h3>
                            <p className="text-xl text-gray-600">
                                Atau punya masalah yang belum ada aplikasinya? Di era serba cepat ini,
                                mengandalkan cara lama hanya akan menghambat pertumbuhan bisnis Anda.
                            </p>
                        </motion.div>

                        {/* Image Composite */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="relative w-full max-w-md mx-auto aspect-square md:aspect-4/3 flex items-center justify-center"
                        >
                            {/* Confused Hero */}
                            <div className="relative z-10 w-64 md:w-80">
                                <Image
                                    src="/images/confused-hero.png"
                                    alt="Confused Business Owner"
                                    width={400}
                                    height={400}
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            {/* Floating Elements - Adjusted positions to be closer to head */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-6 md:-top-2 right-6 md:right-20 z-20 w-20 md:w-24"
                            >
                                <Image
                                    src="/images/think.png"
                                    alt="Thinking Bubble"
                                    width={150}
                                    height={150}
                                    className="w-full h-auto object-contain"
                                />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-6 md:-top-2 left-6 md:left-10 lg:left-22 z-20 w-12 md:w-20"
                            >
                                <Image
                                    src="/images/tandatanya.png"
                                    alt="Question Mark"
                                    width={120}
                                    height={120}
                                    className="w-full h-auto object-contain"
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column: Cards */}
                    <div className="space-y-6">
                        {problems.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:bg-orange-400 transition-all duration-300 flex items-center gap-4 cursor-default"
                            >
                                <div className="shrink-0 text-red-500 group-hover:text-white transition-colors">
                                    <AnimatedCross />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">{item.title}</h4>
                                    <p className="text-gray-600 leading-relaxed text-sm group-hover:text-orange-50 transition-colors">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="mt-20 md:mt-80 text-center relative z-10"
                >
                    {/* Blurred Orange Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-orange-400/20 blur-3xl rounded-full -z-10" />

                    <div className="relative inline-block">
                        <p className="text-2xl md:text-3xl font-medium text-gray-800">
                            <span className="text-orange-400 font-bold">NexaCode</span> hadir untuk menjembatani ide dan menyelesaikan masalah Anda.
                        </p>
                        {/* Animated Paint Underline */}
                        <svg
                            className="absolute -bottom-6 left-0 w-full h-3 text-orange-400"
                            viewBox="0 0 200 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                        >
                            <motion.path
                                d="M2.00025 7.00003C53.7631 3.19509 135.035 -1.03766 198.001 3.49997"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
