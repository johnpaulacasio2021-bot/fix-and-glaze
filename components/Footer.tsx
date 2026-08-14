import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BRAND, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">{BRAND.name}</h3>
            <p className="text-gray-300 text-sm mb-4">{BRAND.description}</p>
            <p className="text-cyan-400 font-semibold italic">"{BRAND.tagline}"</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  Window Installation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  Glass Installation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  Door Installation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  Glass Repair
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  Commercial Glazing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-cyan-400 transition-colors">
                  {BRAND.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-cyan-400 transition-colors break-all">
                  {BRAND.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{BRAND.serviceArea}</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-bold mb-4">Hours</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <Clock size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p>
                    <strong>Mon-Fri:</strong> {BRAND.hours.weekday}
                  </p>
                  <p>
                    <strong>Sat:</strong> {BRAND.hours.saturday}
                  </p>
                  <p>
                    <strong>Sun:</strong> {BRAND.hours.sunday}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
