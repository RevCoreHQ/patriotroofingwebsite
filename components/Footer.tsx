import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, SERVICES, SERVICE_AREAS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-patriot-red rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div>
                <span className="font-display font-extrabold text-lg leading-tight block tracking-tight">Patriot Roofing</span>
                <span className="text-sm text-gray-400 leading-tight block">& Home Repair</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              North Carolina&apos;s trusted roofing contractor. Licensed, insured, and committed to protecting your home with quality craftsmanship.
            </p>
            <div className="flex flex-col gap-3">
              <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-patriot-red" />
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-patriot-red" />
                {COMPANY.email}
              </a>
              <span className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-patriot-red" />
                {COMPANY.address}
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-sm text-patriot-red-light hover:text-white transition-colors font-medium">
                  Get Free Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="text-sm text-gray-400">
                  {area}, NC
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            {COMPANY.license}
          </p>
        </div>
      </div>
    </footer>
  );
}
