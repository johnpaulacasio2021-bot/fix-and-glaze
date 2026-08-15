"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { BRAND, NAVIGATION } from "@/lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-max flex items-center justify-between py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Fix and Glaze logo"
            width={80}
            height={80}
            priority
            className="h-16 w-auto"
          />
          <div className="hidden sm:block">
            <h1 className="font-bold text-lg text-gray-900">{BRAND.name}</h1>
            <p className="text-xs text-cyan-600 font-semibold">Repair. Replace. Refresh.</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-cyan-600 font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Phone */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${BRAND.phone}`}
            className="flex items-center gap-2 text-gray-700 hover:text-red-600 font-semibold"
          >
            <Phone size={20} />
            {BRAND.phone}
          </a>
          <Link
            href="/contact"
            className="btn-primary text-sm"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-200">
          <div className="container-max py-4 space-y-3">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-cyan-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <hr />
            <a
              href={`tel:${BRAND.phone}`}
              className="block py-2 text-red-600 font-bold"
            >
              Call: {BRAND.phone}
            </a>
            <Link
              href="/contact"
              className="btn-primary block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
