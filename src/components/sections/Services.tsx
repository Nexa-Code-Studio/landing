"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Custom Software & Web Apps",
    desc: "Sistem Manajemen RS, CRM, Aplikasi Inventori, atau POS (Kasir) khusus. Dibangun sesuai kebutuhan operasional.",
    image: "/images/hero-card1.jpg",
  },
  {
    title: "Business Profile & Landing Page",
    desc: "Website yang didesain untuk meningkatkan kepercayaan klien dan konversi penjualan. Estetik dan fungsional.",
    image: "/images/hero-card2.jpg",
  },
  {
    title: "UI/UX Design",
    desc: "Desain antarmuka yang intuitif dan menarik untuk meningkatkan pengalaman pengguna aplikasi atau website Anda.",
    image: "/images/hero-card3.png",
  },
  {
    title: "Maintenance & Upgrade",
    desc: "Punya sistem lama yang lemot? Kami siap bedah, optimasi, dan buat jadi lebih kencang.",
    image: "/images/hero-card4.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Apa Pun Kebutuhannya, <span className="text-orange-400">NexaCode</span> Solusinya
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Kami tidak hanya menjual kode, kami memberikan solusi yang dipersonalisasi sesuai dengan kebutuhan Anda.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden bg-gray-900 hover:scale-105 transition-transform duration-300 cursor-pointer h-[400px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-30 transition-opacity"
                />
              </div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-gray-200 leading-relaxed text-sm">
                    {s.desc}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-orange-400 transition-colors">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
