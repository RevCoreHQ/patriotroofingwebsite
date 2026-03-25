import Image from "next/image";
import Link from "next/link";
import { Home, RefreshCw, Wrench, Utensils, Bath, Hammer, ArrowRight } from "lucide-react";
import { SERVICES, IMAGES } from "@/lib/constants";

const iconMap = {
  home: Home,
  "refresh-cw": RefreshCw,
  wrench: Wrench,
  utensils: Utensils,
  bath: Bath,
  hammer: Hammer,
} as const;

const cardImages = [
  IMAGES.gallery1,
  IMAGES.gallery2,
  IMAGES.gallery4,
  IMAGES.gallery6,
  IMAGES.gallery5,
  IMAGES.gallery8,
];

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

        {/* Service cards with background photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-2xl h-72 flex flex-col justify-end transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Background photo */}
                <Image
                  src={cardImages[i]}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Dark overlay — stronger at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/20 group-hover:from-navy-dark group-hover:via-navy-dark/80 group-hover:to-navy-dark/30 transition-all duration-500" />

                {/* Large background number */}
                <span className="absolute top-4 right-6 font-display text-7xl font-extrabold leading-none select-none text-white/[0.08]">
                  0{i + 1}
                </span>

                {/* Left accent bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-patriot-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-full" />

                {/* Content */}
                <div className="relative p-7">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-patriot-red/90 backdrop-blur-sm">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">
                    {service.shortDesc}
                  </p>

                  <span className="inline-flex items-center gap-2 font-semibold text-sm text-patriot-red-light group-hover:gap-3 transition-all">
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
