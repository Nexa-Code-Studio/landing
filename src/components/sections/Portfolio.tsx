"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const projects = [
  {
    name: "KasirQ",
    category: "Point of Sale System",
    description: "Sistem kasir modern untuk bisnis retail dengan fitur manajemen inventory, laporan penjualan, dan multi-user access.",
    image: "/portofolio/kasirq.png",
  },
  // Add more projects here in the future
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = projects.length === 1 ? 1 : 2;
  const totalSlides = Math.ceil(projects.length / itemsPerView);

  // Auto-scroll functionality
  useEffect(() => {
    if (totalSlides <= 1) return; // Don't auto-scroll if only one slide

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getCurrentProjects = () => {
    const start = currentIndex * itemsPerView;
    return projects.slice(start, start + itemsPerView);
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Portofolio Kami</h2>
          <p className="mt-2 text-gray-600">Beberapa karya digital yang telah kami bangun.</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Cards */}
          <div className={`grid gap-6 ${projects.length === 1 ? 'justify-center' : 'md:grid-cols-2'}`}>
            <AnimatePresence mode="wait">
              {getCurrentProjects().map((project, idx) => (
                <motion.div
                  key={`${currentIndex}-${idx}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className={`group relative rounded-2xl overflow-hidden bg-gray-900 hover:scale-105 transition-transform duration-300 cursor-pointer h-[400px] ${projects.length === 1 ? 'max-w-2xl' : ''}`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover opacity-50 group-hover:opacity-40 transition-opacity"
                    />
                  </div>

                  {/* Darker Bottom Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />

                  {/* Content - Positioned at Bottom */}
                  <div className="relative z-20 h-full flex flex-col justify-end p-8">
                    <div className="inline-block px-3 py-1 bg-orange-500/20 backdrop-blur-sm rounded-full mb-3 self-start">
                      <span className="text-orange-300 text-sm font-medium">{project.category}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">{project.name}</h3>
                    <p className="text-gray-200 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Controls Below Cards */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="text-gray-400 hover:text-orange-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous"
              disabled={totalSlides <= 1}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: Math.max(totalSlides, 1) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${index === currentIndex
                    ? "w-8 bg-orange-400"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="text-gray-400 hover:text-orange-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next"
              disabled={totalSlides <= 1}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
