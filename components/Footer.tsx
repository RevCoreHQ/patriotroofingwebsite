import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, SERVICES, SERVICE_AREAS_DATA, NAV_LINKS, IMAGES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <div className="mb-6">
              <Image
                src={IMAGES.logo}
                alt="Patriot Roofing & Home Repair"
                width={180}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
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
              {SERVICE_AREAS_DATA.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {area.name}, NC
                  </Link>
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
