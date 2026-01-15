import Link from "next/link";

const footerLinks = {
  services: [
    { href: "/services#vacation-rentals", label: "Vacation Rentals" },
    { href: "/services#deep-cleaning", label: "Deep Cleaning" },
    { href: "/services#regular", label: "Regular Housekeeping" },
    { href: "/services#move", label: "Move In/Out" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/gallery", label: "Gallery" },
    { href: "/faq", label: "FAQ" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="text-2xl font-serif font-semibold">
                Cleaning <span className="text-[var(--gold)]">Right Now</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The Barefoot Standard in vacation rental turnovers. Serving Lake Michigan&apos;s premier properties.
            </p>
            <p className="text-xs text-gray-500">
              Saugatuck • Douglas • Fennville • Holland
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-[var(--gold)]">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-[var(--gold)]">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-[var(--gold)]">
              Contact
            </h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>Western Michigan</p>
              <p>
                <a
                  href="tel:+15551234567"
                  className="hover:text-white transition-colors"
                >
                  (555) 123-4567
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@cleaningrightnow.com"
                  className="hover:text-white transition-colors"
                >
                  info@cleaningrightnow.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Cleaning Right Now. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
