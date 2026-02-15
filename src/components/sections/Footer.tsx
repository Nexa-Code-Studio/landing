"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = href.startsWith('#') ? href : `#${href}`;
    }
  };
  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-gray-50 text-gray-600">
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-light.png"
                alt="NexaCode Logo"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-gray-900">Nexa</span>
                <span className="text-orange-400">Code</span>
              </span>
            </div>
            <p className="mt-4 text-base leading-relaxed max-w-sm">
              {t.footer.brandDescription}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold text-gray-900 mb-4">
              {t.footer.menuTitle}
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleSmoothScroll(e, '#home')}
                  className="hover:text-orange-400 transition"
                >
                  {t.navbar.home}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, '#services')}
                  className="hover:text-orange-400 transition"
                >
                  {t.navbar.services}
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleSmoothScroll(e, '#portfolio')}
                  className="hover:text-orange-400 transition"
                >
                  {t.navbar.portfolio}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="hover:text-orange-400 transition"
                >
                  {t.navbar.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-gray-900 mb-4">
              {t.footer.contactTitle}
            </p>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/6281234567890" className="hover:text-orange-400 transition">
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/nexacode.studio?igsh=MWp3M2QzN3hua2diaA==" className="hover:text-orange-400 transition">
                  Our Instagram
                </a>
              </li>
              <li>studionexacode@gmail.com</li>
              <li>Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <span>&copy; {new Date().getFullYear()} {t.footer.copyright}</span>
        </div>
      </div>

      {/* Decorative low logo placed under content in bottom-right */}
      <div className="pointer-events-none z-10 absolute right-6 bottom-0 opacity-90">
        <Image src="/images/logo-low.png" alt="NexaCode low logo" width={420} height={140} className="w-48 md:w-72 lg:w-96 h-auto" />
      </div>
    </footer>
  );
}
