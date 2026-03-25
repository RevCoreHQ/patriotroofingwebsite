import Link from "next/link";
import { MapPin } from "lucide-react";
import { SERVICE_AREAS_DATA } from "@/lib/constants";

export default function ServiceAreas() {
  return (
    <section className="py-16 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — Map visual */}
          <div className="relative">
            <div className="bg-navy rounded-2xl sm:rounded-3xl p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute inset-0 hero-pattern opacity-50" />
              <div className="absolute inset-0 stripe-pattern opacity-10" />

              <div className="relative text-center py-8 sm:py-12">
                {/* Shield-shaped pin */}
                <div className="w-16 h-20 sm:w-20 sm:h-24 bg-patriot-red shield-shape flex items-center justify-center mx-auto mb-6 sm:mb-8">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <p className="font-display font-extrabold text-white text-2xl sm:text-3xl mb-3 tracking-tight">NC Triad Region</p>
                <p className="text-white/50 text-sm max-w-xs mx-auto">
                  Proudly serving the Piedmont Triad area and surrounding communities
                </p>

                {/* Scattered location dots */}
                <div className="mt-10 flex flex-wrap justify-center gap-2">
                  {SERVICE_AREAS_DATA.slice(0, 6).map((area) => (
                    <Link key={area.slug} href={`/areas/${area.slug}`} className="inline-flex items-center gap-1.5 bg-white/[0.07] border border-white/10 px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/[0.12] transition-colors text-xs font-medium">
                      <span className="w-1.5 h-1.5 bg-patriot-red rounded-full" />
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Offset shadow */}
            <div className="absolute -bottom-3 -right-3 w-full h-full bg-patriot-red/[0.06] rounded-3xl -z-10" />
          </div>

          {/* Right — Content */}
          <div>
            <span className="section-label">Service Areas</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mt-4 mb-4 tracking-tight">
              Proudly Serving<br />North Carolina
            </h2>
            <p className="text-muted text-lg mb-10 leading-relaxed">
              Based in Lexington, NC, we provide roofing and home repair services throughout the Piedmont Triad. Same premium quality everywhere we work.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SERVICE_AREAS_DATA.map((area) => (
                <Link key={area.slug} href={`/areas/${area.slug}`} className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg hover:bg-warm-gray transition-colors group">
                  <div className="w-2 h-2 bg-patriot-red rounded-full shrink-0" />
                  <span className="text-dark text-sm font-medium group-hover:text-patriot-red transition-colors">{area.name}, NC</span>
                </Link>
              ))}
            </div>

            <p className="text-muted text-sm mt-8">
              Don&apos;t see your city? Give us a call — we may still serve your area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
