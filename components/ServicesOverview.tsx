import Link from "next/link";
import { Home, RefreshCw, Wrench, AlertTriangle, Droplets, Hammer, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  home: Home,
  "refresh-cw": RefreshCw,
  wrench: Wrench,
  "alert-triangle": AlertTriangle,
  droplets: Droplets,
  hammer: Hammer,
} as const;

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-patriot-red font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
            Comprehensive Roofing & Home Services
          </h2>
          <p className="text-muted text-lg">
            From emergency repairs to complete roof replacements, we deliver expert solutions that protect your biggest investment.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 bg-navy/5 group-hover:bg-patriot-red rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <Icon className="w-7 h-7 text-navy group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{service.shortDesc}</p>
                <span className="inline-flex items-center gap-2 text-patriot-red font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
