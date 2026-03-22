import type { Metadata } from "next";
import Link from "next/link";
import { Home, RefreshCw, Wrench, AlertTriangle, Droplets, Hammer, ArrowRight, Phone } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Roofing & Home Repair Services",
  description:
    "Professional roofing services in Lexington, Greensboro & Winston-Salem, NC. Roof installation, replacement, repair, emergency roofing, gutters & home remodeling. Free estimates.",
};

const iconMap = {
  home: Home,
  "refresh-cw": RefreshCw,
  wrench: Wrench,
  "alert-triangle": AlertTriangle,
  droplets: Droplets,
  hammer: Hammer,
} as const;

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            From new roof installations to emergency repairs, we deliver expert roofing and home improvement solutions across North Carolina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-patriot-red hover:bg-patriot-red-dark text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              Get Free Estimate <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-warm-gray hover:bg-white rounded-2xl p-8 border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-navy/10 group-hover:bg-patriot-red rounded-xl flex items-center justify-center mb-6 transition-colors">
                    <Icon className="w-8 h-8 text-navy group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark mb-3">{service.title}</h2>
                  <p className="text-muted leading-relaxed mb-6">{service.shortDesc}</p>
                  <span className="inline-flex items-center gap-2 text-patriot-red font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
