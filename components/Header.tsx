"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { COMPANY, NAV_LINKS, IMAGES } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">
        {/* Logo — always show original colors */}
        <Link href="/" className="shrink-0">
          <Image
            src={IMAGES.logo}
            alt="Patriot Roofing & Home Repair"
            width={260}
            height={80}
            className={`h-16 w-auto transition-all duration-300 ${
              scrolled ? "" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            }`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-patriot-red after:transition-all hover:after:w-full ${
                scrolled
                  ? "text-dark hover:text-patriot-red"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Phone */}
        <div className="flex items-center gap-5">
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className={`hidden lg:flex items-center gap-2 text-sm font-semibold transition-colors ${
              scrolled
                ? "text-navy hover:text-patriot-red"
                : "text-white/90 hover:text-white"
            }`}
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
            className={`xl:hidden p-2 transition-colors ${
              scrolled ? "text-navy hover:text-patriot-red" : "text-white hover:text-white/70"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-gray-100 bg-white shadow-lg">
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
  );
}
