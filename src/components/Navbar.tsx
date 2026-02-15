"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Header() {
  const [activeLink, setActiveLink] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { name: t.navbar.home, href: "#home" },
    { name: t.navbar.services, href: "#services" },
    { name: t.navbar.portfolio, href: "#portfolio" },
    { name: t.navbar.faq, href: "#faq" },
  ];

  // Observe sections to update active nav link when scrolling
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { root: null, rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200/50 shadow-[0_4px_20px_-2px_rgba(249,115,22,0.5)]">
      <div className="mx-auto max-w-6xl px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
          <Image
            src="/images/logo-light.png"
            alt="NexaCode Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span>
            <span className="text-black">Nexa</span>
            <span className="text-orange-400">Code</span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const id = link.href.replace('#', '');
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setActiveLink(link.href);
              }}
              className={`relative transition-colors ${activeLink === link.href ? "text-orange-400" : "hover:text-orange-400"
                }`}
            >
              {link.name}
              {activeLink === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400 rounded-full" />
              )}
            </Link>
          ))}

          <LanguageSwitcher />

          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              setActiveLink('#contact');
            }}
            className="rounded-full bg-orange-400 px-6 py-2.5 text-white hover:bg-orange-400 transition shadow-sm hover:shadow-md hover:shadow-orange-200"
          >
            {t.navbar.contact}
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((s) => !s)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      <div className={`md:hidden bg-white border-b border-gray-100 shadow-sm ${mobileOpen ? 'block' : 'hidden'}`}>
        <div className="mx-auto max-w-6xl px-6 pb-6 pt-2">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const id = link.href.replace('#', '');
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setActiveLink(link.href);
                  setMobileOpen(false);
                }}
                className={`block py-3 px-2 rounded-md text-base font-medium ${activeLink === link.href ? 'text-orange-400' : 'text-gray-700 hover:text-orange-400'}`}
              >
                {link.name}
              </a>
            ))}

            <div className="py-3 px-2">
              <LanguageSwitcher />
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setActiveLink('#contact');
                setMobileOpen(false);
              }}
              className="mt-2 inline-block w-full text-center bg-orange-400 text-white px-4 py-3 rounded-full font-semibold"
            >
              {t.navbar.contact}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
