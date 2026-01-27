export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-lg font-semibold text-gray-900">
              NexaCode
            </p>
            <p className="mt-2 text-sm text-gray-600 max-w-sm">
              Software studio focused on building reliable, scalable, and
              maintainable digital products.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-medium text-gray-900 mb-3">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#services" className="hover:text-gray-900">Services</a></li>
              <li><a href="#portfolio" className="hover:text-gray-900">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-medium text-gray-900 mb-3">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>hello@nexacode.dev</li>
              <li>Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between">
          <span>© {new Date().getFullYear()} NexaCode. All rights reserved.</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
