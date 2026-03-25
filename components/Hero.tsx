import Image from "next/image";
import Link from "next/link";
import { Phone, Shield, Star, Award } from "lucide-react";
import { COMPANY, IMAGES } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-navy-dark overflow-hidden">
      {/* Background image */}
      <Image
        src={IMAGES.hero}
        alt="Professional roofing work in North Carolina"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Layered overlays */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 stripe-pattern opacity-40" />

      {/* Large decorative star */}
      <div className="absolute -right-20 -top-20 text-[380px] leading-none text-white/[0.02] select-none pointer-events-none hidden lg:block">
        ★
      </div>

      {/* Diagonal red accent shard */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-patriot-red/[0.06] skew-x-[-12deg] translate-x-1/4 hidden lg:block" />

      {/* Floating badge - top */}
      <div className="absolute top-36 right-[14%] bg-white/[0.07] border border-white/10 rounded-2xl p-5 backdrop-blur-sm hidden xl:block animate-float">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-patriot-red rounded-xl flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">Licensed & Insured</p>
            <p className="text-white/50 text-xs">North Carolina</p>
          </div>
        </div>
      </div>

      {/* Floating rating badge - bottom */}
      <div className="absolute bottom-44 right-[10%] bg-white/[0.07] border border-white/10 rounded-2xl p-5 backdrop-blur-sm hidden xl:block animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="flex items-center gap-2 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-gold fill-gold" />
          ))}
        </div>
        <p className="text-white/60 text-xs font-medium">Rated 5.0 by NC Homeowners</p>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 w-full">
        <div className="max-w-3xl">
          {/* Section label */}
          <div className="animate-fade-up">
            <span className="section-label !text-white/90 !bg-white/[0.07] !border-white/10">
              Trusted by Hundreds of NC Homeowners
            </span>
          </div>

          {/* Headline — display font, tighter tracking */}
          <h1 className="animate-fade-up-delay-1 font-display text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-extrabold text-white leading-[1.05] mt-8 mb-6 tracking-tight">
            Protect Your Home
            <br />
            <span className="relative inline-block">
              with NC&apos;s
              {/* Hand-drawn underline accent */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-patriot-red" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0 8 Q50 0 100 7 T200 4" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            <span className="text-patriot-red-light">Most Trusted</span>{" "}
            Roofers
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-white/55 mb-10 max-w-xl leading-relaxed">
            Storm damage repairs to complete roof replacements — our licensed team delivers quality craftsmanship and clear communication on every project.
          </p>

          {/* Trust indicators as pills */}
          <div className="animate-fade-up-delay-2 flex flex-wrap gap-3 mb-10">
            {[
              { icon: Shield, text: "Licensed & Insured" },
              { icon: Star, text: "5-Star Rated" },
              { icon: Award, text: "Satisfaction Guaranteed" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/10 px-4 py-2.5 rounded-full">
                <Icon className="w-4 h-4 text-patriot-red-light" />
                <span className="text-white/75 text-sm font-medium">{text}</span>
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-patriot-red text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:bg-patriot-red-dark hover:shadow-2xl hover:shadow-patriot-red/25 hover:-translate-y-0.5"
            >
              Get Your Free Estimate
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Angled bottom divider (not a boring wave) */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 100h1440V55L0 100z" fill="white" />
          <path d="M0 100h1440V60L0 92z" fill="white" opacity="0.4" />
        </svg>
      </div>
    </section>
  );
}
