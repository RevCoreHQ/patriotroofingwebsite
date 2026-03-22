import Link from "next/link";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Diagonal red background */}
      <div className="absolute inset-0 bg-patriot-red" />
      <div className="absolute inset-0 bg-gradient-to-br from-patriot-red-dark/50 to-transparent" />

      {/* Stripe overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.1) 30px, rgba(255,255,255,0.1) 31px)",
        }} />
      </div>

      {/* Large star watermarks */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 text-[300px] leading-none text-white/[0.04] select-none pointer-events-none hidden lg:block">
        ★
      </div>
      <div className="absolute right-20 top-10 text-[120px] leading-none text-white/[0.04] select-none pointer-events-none hidden lg:block">
        ★
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          Ready to Protect Your Home?
        </h2>
        <p className="text-white/60 text-xl mb-3 font-display font-bold">
          Get Your Free Roof Inspection Today.
        </p>
        <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
          Don&apos;t wait for a small problem to become an expensive one. Our team is ready with an honest assessment and no-obligation estimate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center bg-white text-patriot-red font-bold text-lg px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl"
          >
            Schedule Free Inspection
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
