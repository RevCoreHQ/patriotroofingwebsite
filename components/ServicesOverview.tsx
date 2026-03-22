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
    <section className="py-28 bg-warm-gray relative overflow-hidden">
      {/* Subtle star watermark */}
      <div className="absolute -left-20 top-20 text-[300px] leading-none text-navy/[0.02] select-none pointer-events-none hidden lg:block">
        ★
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header — left-aligned, not centered */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="section-label">What We Do</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mt-4 mb-4 tracking-tight">
              Comprehensive Roofing<br className="hidden sm:block" /> & Home Services
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              From emergency repairs to complete roof replacements, we deliver expert solutions that protect your biggest investment.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-patriot-red font-bold hover:gap-3 transition-all shrink-0"
          >
            View All Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Service cards — varied layout, not all identical */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            const isHighlighted = i === 0;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group relative overflow-hidden p-8 transition-all duration-300 hover:-translate-y-1 ${
                  isHighlighted
                    ? "bg-navy text-white row-span-1 md:row-span-1 rounded-2xl"
                    : "bg-white border border-gray-100 hover:border-patriot-red/20 hover:shadow-xl rounded-2xl"
                }`}
              >
                {/* Large background number */}
                <span className={`absolute top-4 right-6 font-display text-7xl font-extrabold leading-none select-none ${
                  isHighlighted ? "text-white/[0.06]" : "text-navy/[0.04]"
                }`}>
                  0{i + 1}
                </span>

                {/* Left accent bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-patriot-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-full" />

                <div className="relative">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${
                    isHighlighted
                      ? "bg-patriot-red"
                      : "bg-navy/[0.06] group-hover:bg-patriot-red transition-colors duration-300"
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      isHighlighted ? "text-white" : "text-navy group-hover:text-white transition-colors duration-300"
                    }`} />
                  </div>

                  <h3 className={`font-display text-xl font-bold mb-3 ${
                    isHighlighted ? "text-white" : "text-dark"
                  }`}>
                    {service.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-6 ${
                    isHighlighted ? "text-white/60" : "text-muted"
                  }`}>
                    {service.shortDesc}
                  </p>

                  <span className={`inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all ${
                    isHighlighted ? "text-patriot-red-light" : "text-patriot-red"
                  }`}>
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
