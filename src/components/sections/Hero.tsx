"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Hero() {
    const { t } = useTranslation();
    const [text, setText] = useState("");
    const fullText = t.hero.typingText;

    useEffect(() => {
        setText("");
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, [fullText]);

    // Smooth-scroll handler for the consultation button
    const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const el = document.getElementById("contact");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            window.location.hash = "#contact";
        }
    };

    const floatingWords = t.hero.floatingWords;
    const floatingConfig = [
        { x: -160, y: -90, delay: 0.5 },
        { x: 160, y: -100, delay: 0.6 },
        { x: 190, y: 40, delay: 0.7 },
        { x: -240, y: 180, delay: 0.9 },
        { x: -300, y: 10, delay: 1.1 },
    ];

    return (
        <section
            id="home"
            className="relative overflow-hidden -mt-20 pt-24 pb-20 lg:pt-32 lg:pb-28 px-6 md:px-12 bg-white group"
        >
            {/* Top Background Gradient */}
            <div className="absolute top-0 inset-x-0 h-96 bg-linear-to-b from-orange-50/50 to-transparent pointer-events-none -z-10" />

            {/* Base Background Decoration */}
            <div className="absolute top-0 right-0 w-200 h-200 bg-orange-100/40 blur-3xl rounded-full opacity-60 z-0 pointer-events-none translate-x-1/3 -translate-y-1/4" />

            {/* Hover Orange Glow */}
            <div
                className="
          pointer-events-none
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-700
          -z-10
        "
            >
                <div
                    className="
            absolute
            -top-40
            -left-40
            w-175
            h-175
            rounded-full
            bg-orange-400/20
            blur-3xl
            transition-transform duration-700
            group-hover:translate-x-20
            group-hover:translate-y-10
          "
                />
            </div>

            <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Column */}
                <div className="text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <motion.div
                            initial={{ opacity: 1 }}
                            className="inline-flex items-center gap-0.5 text-orange-400 text-sm font-medium mb-6"
                        >
                            <span>{text}</span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "linear",
                                }}
                                className="inline-block font-bold"
                            >
                                |
                            </motion.span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15]">
                            {t.hero.headingPart1}{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-400">
                                {t.hero.headingHighlight}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed"
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
                    >
                        <Link
                            href="#contact"
                            onClick={handleScrollToContact}
                            className="group/button flex items-center justify-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-white text-base font-semibold hover:bg-orange-400 transition-all hover:scale-105"
                        >
                            {t.hero.ctaButton}
                            <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Right Column: Image */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="relative z-10"
                    >
                        <div className="relative rounded-2xl overflow-hidden aspect-4/3 lg:aspect-auto">
                            <Image
                                src="/images/heros.png"
                                alt={t.hero.heroImageAlt}
                                width={800}
                                height={600}
                                className="object-cover w-full h-full"
                                priority
                            />
                            {/* Image Overlay (very subtle) */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Floating Words */}
                    {floatingWords.map((word, idx) => {
                        const config = floatingConfig[idx];
                        return (
                            <motion.div
                                key={word}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: config.delay,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15,
                                }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="absolute z-20 bg-white/90 backdrop-blur-sm border border-orange-100 shadow-lg px-5 py-2.5 rounded-full text-sm font-bold text-orange-400 hidden lg:block hover:scale-110 transition-transform cursor-default"
                                style={{
                                    top: "35%",
                                    left: "50%",
                                    translateX: config.x,
                                    translateY: config.y,
                                }}
                            >
                                {word}
                            </motion.div>
                        );
                    })}

                    {/* Floating Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 1.2, type: "spring" }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="absolute -bottom-6 -right-6 lg:right-10 bg-orange-400 p-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-none shadow-xl border border-orange-400 hidden md:block z-30"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
                                <MessageCircle className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-orange-100 font-medium uppercase">
                                    {t.hero.badgeLabel}
                                </p>
                                <p className="text-base font-bold text-white">
                                    {t.hero.badgeValue}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
