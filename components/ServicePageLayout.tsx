import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2, Shield, Star, Clock } from "lucide-react";
import { COMPANY, IMAGES } from "@/lib/constants";

interface ServicePageLayoutProps {
  title: string;
  description: string;
  benefits: string[];
  process: { title: string; desc: string }[];
  features?: string[];
  ctaText?: string;
  image?: string;
}

export default function ServicePageLayout({
  title,
  description,
  benefits,
  process,
  features,
  ctaText = "Get Your Free Estimate",
  image,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-patriot-red-light mb-4">
              <Link href="/services" className="text-sm text-white/60 hover:text-white transition-colors">
                Services
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-sm text-white/80">{title}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-2xl">
              {description}
            </p>
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="w-5 h-5 text-patriot-red-light" />
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Star className="w-5 h-5 text-gold fill-gold" />
                <span className="text-sm font-medium">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="w-5 h-5 text-patriot-red-light" />
                <span className="text-sm font-medium">Free Estimates</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-patriot-red hover:bg-patriot-red-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:shadow-xl"
              >
                {ctaText} <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-patriot-red font-semibold text-sm uppercase tracking-wider">Benefits</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-6">
                Why Choose Patriot Roofing for {title}
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-6 h-6 text-patriot-red shrink-0 mt-0.5" />
                    <p className="text-dark leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service photo */}
            <div className="rounded-3xl overflow-hidden relative sticky top-28">
              <Image
                src={image || IMAGES.gallery3}
                alt={`Professional ${title.toLowerCase()} by Patriot Roofing`}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-patriot-red font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, i) => (
              <div key={step.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <span className="text-5xl font-bold text-patriot-red/10">0{i + 1}</span>
                <h3 className="text-xl font-bold text-dark mt-4 mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features list */}
      {features && features.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-dark mb-10 text-center">What&apos;s Included</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 py-3">
                  <CheckCircle2 className="w-5 h-5 text-patriot-red shrink-0" />
                  <span className="text-dark text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Contact us today for a free estimate on your {title.toLowerCase()} project. Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-patriot-red hover:bg-patriot-red-dark text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-xl"
            >
              {ctaText} <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
