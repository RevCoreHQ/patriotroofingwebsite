import Link from "next/link";
import { Phone, Shield, Star, Award } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute inset-0 hero-gradient" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-patriot-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-sm text-white/90 font-medium">Trusted by Hundreds of NC Homeowners</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
            Protect Your Home with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-patriot-red-light to-patriot-red">
              North Carolina&apos;s
            </span>{" "}
            Most Trusted Roofers
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-white/70 mb-8 max-w-2xl leading-relaxed">
            From storm damage repairs to complete roof replacements, our licensed team delivers quality craftsmanship and clear communication on every project. Free inspections for all NC Triad homeowners.
          </p>

          {/* Trust indicators */}
          <div className="animate-fade-up-delay-2 flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="w-5 h-5 text-patriot-red-light" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Star className="w-5 h-5 text-gold fill-gold" />
              <span className="text-sm font-medium">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Award className="w-5 h-5 text-patriot-red-light" />
              <span className="text-sm font-medium">Satisfaction Guaranteed</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-patriot-red hover:bg-patriot-red-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-patriot-red/30 hover:-translate-y-0.5"
            >
              Get Your Free Estimate
            </Link>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0 80h1440V30C1200 70 960 0 720 30S240 90 0 30v50z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
