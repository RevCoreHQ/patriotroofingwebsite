"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <p>{COMPANY.license} &bull; Serving the NC Triad Region</p>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="flex items-center gap-2 font-semibold hover:text-patriot-red-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            {COMPANY.phone}
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 glass border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center group-hover:bg-patriot-red transition-colors">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-extrabold text-navy text-lg leading-tight block tracking-tight">Patriot Roofing</span>
              <span className="text-xs text-muted leading-tight block tracking-wide uppercase">& Home Repair</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-dark hover:text-patriot-red transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-patriot-red after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-navy hover:text-patriot-red transition-colors"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="hidden sm:inline-flex bg-patriot-red hover:bg-patriot-red-dark text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-patriot-red/20"
            >
              Get Free Estimate
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-navy hover:text-patriot-red transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-dark hover:text-patriot-red py-3 px-4 rounded-lg hover:bg-warm-gray transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-gray-100" />
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center gap-2 text-base font-semibold text-navy py-3 px-4"
              >
                <Phone className="w-5 h-5" />
                {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-patriot-red text-white font-semibold text-center py-3 px-4 rounded-lg mt-2"
              >
                Get Free Estimate
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
