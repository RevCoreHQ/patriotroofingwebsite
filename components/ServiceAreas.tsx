import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";

export default function ServiceAreas() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Map placeholder */}
          <div className="bg-warm-gray rounded-3xl p-8 lg:p-12">
            <div className="bg-navy/5 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-patriot-red mx-auto mb-4" />
                <p className="text-navy font-bold text-xl mb-2">NC Triad Region</p>
                <p className="text-muted text-sm">Proudly serving the Piedmont Triad area and surrounding communities</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-patriot-red font-semibold text-sm uppercase tracking-wider">Service Areas</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
              Proudly Serving North Carolina
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Based in Lexington, NC, we provide roofing and home repair services throughout the Piedmont Triad region. No matter where you are in our service area, you&apos;ll get the same premium quality and attention to detail.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SERVICE_AREAS.map((area) => (
                <div key={area} className="flex items-center gap-2 py-2">
                  <MapPin className="w-4 h-4 text-patriot-red shrink-0" />
                  <span className="text-dark text-sm font-medium">{area}, NC</span>
                </div>
              ))}
            </div>

            <p className="text-muted text-sm mt-6">
              Don&apos;t see your city? Give us a call — we may still serve your area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
