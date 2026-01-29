export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 text-gray-600">
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2">
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              NexaCode
            </span>
            <p className="mt-4 text-base leading-relaxed max-w-sm">
              Kami membangun website dan perangkat lunak yang dirancang khusus untuk memajukan bisnis Anda. Solusi digital tanpa kerumitan.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold text-gray-900 mb-4">
              Menu
            </p>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-orange-600 transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-orange-600 transition">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-orange-600 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-gray-900 mb-4">
              Hubungi Kami
            </p>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/6281234567890" className="hover:text-orange-600 transition">
                  WhatsApp Support
                </a>
              </li>
              <li>hello@nexacode.dev</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <span>&copy; {new Date().getFullYear()} NexaCode Studio. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
