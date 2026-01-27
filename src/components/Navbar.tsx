import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold text-gray-900">
          NexaCode
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <Link href="#services" className="hover:text-gray-900">
            Services
          </Link>
          <Link href="#portfolio" className="hover:text-gray-900">
            Portfolio
          </Link>
          <Link href="#about" className="hover:text-gray-900">
            Contact
          </Link>
          <Link
            href="#contact"
            className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
