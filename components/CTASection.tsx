import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-24 bg-patriot-red relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Protect Your Home?<br />
          <span className="text-white/80">Get Your Free Roof Inspection Today.</span>
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
          Don&apos;t wait for a small problem to become an expensive one. Our team is ready to inspect your roof, provide an honest assessment, and give you a no-obligation estimate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-patriot-red font-bold text-lg px-8 py-4 rounded-xl hover:bg-gray-100 transition-all hover:shadow-xl"
          >
            Schedule Free Inspection <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-white/20 transition-all"
          >
            <Phone className="w-5 h-5" />
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
