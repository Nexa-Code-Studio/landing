"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "FAQ", href: "#faq" },
  ];

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
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`relative transition-colors ${activeLink === link.href ? "text-orange-400" : "hover:text-orange-600"
                }`}
            >
              {link.name}
              {activeLink === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400 rounded-full" />
              )}
            </Link>
          ))}

          <Link
            href="#contact"
            className="rounded-full bg-orange-400 px-6 py-2.5 text-white hover:bg-orange-400 transition shadow-sm hover:shadow-md hover:shadow-orange-200"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
