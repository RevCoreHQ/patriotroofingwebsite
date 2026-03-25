import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 sm:py-28 bg-cream relative overflow-hidden">
      {/* Decorative star */}
      <div className="absolute right-10 top-10 text-[200px] leading-none text-patriot-red/[0.03] select-none pointer-events-none hidden lg:block">
        ★
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mt-4 mb-4 tracking-tight">
            What NC Homeowners Say
          </h2>
          <p className="text-muted text-lg">
            Don&apos;t just take our word for it — hear from families across the Triad who trusted us with their homes.
          </p>
        </div>

        {/* Testimonial cards — staggered heights */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={`relative bg-white p-5 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                i === 1 ? "md:-translate-y-4 rounded-3xl" : "rounded-2xl"
              }`}
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-8 right-8 h-[3px] rounded-full ${
                i % 2 === 0 ? "bg-patriot-red" : "bg-navy"
              }`} />

              {/* Large quote mark */}
              <div className="font-display text-6xl leading-none text-patriot-red/10 mb-2 select-none">&ldquo;</div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              <p className="text-dark text-[15px] leading-relaxed mb-8">
                {testimonial.text}
              </p>

              {/* Author — with initials avatar */}
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-white text-sm ${
                  i % 2 === 0 ? "bg-patriot-red" : "bg-navy"
                }`}>
                  {testimonial.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-display font-bold text-dark text-sm">{testimonial.name}</p>
                  <p className="text-muted text-xs">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
