import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, CheckCircle2, Shield, Star, Clock, MapPin, ArrowRight } from "lucide-react";
import { COMPANY, SERVICES, SERVICE_AREAS_DATA, getCityBySlug, getServiceBySlug } from "@/lib/constants";
import { getServiceCityContent } from "@/lib/seo-content";

interface Props {
  params: Promise<{ service: string; city: string }>;
}

export async function generateStaticParams() {
  const params: { service: string; city: string }[] = [];
  for (const service of SERVICES) {
    for (const city of SERVICE_AREAS_DATA) {
      params.push({ service: service.slug, city: city.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) return {};

  const content = getServiceCityContent(serviceSlug, city.name, city.county);
  if (!content) return {};

  return {
    title: content.metaTitle,
    description: content.metaDescription,
  };
}

export default async function ServiceCityPage({ params }: Props) {
  const { service: serviceSlug, city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) notFound();

  const content = getServiceCityContent(serviceSlug, city.name, city.county);
  if (!content) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== serviceSlug);
  const otherCities = SERVICE_AREAS_DATA.filter((c) => c.slug !== citySlug).slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-dark py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute inset-0 stripe-pattern opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-6">
              <Link href="/services" className="text-white/50 hover:text-white transition-colors">Services</Link>
              <span className="text-white/30">/</span>
              <Link href={`/services/${serviceSlug}`} className="text-white/50 hover:text-white transition-colors">{service.title}</Link>
              <span className="text-white/30">/</span>
              <span className="text-white/80">{city.name}, NC</span>
            </nav>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              {content.headline}
            </h1>

            <p className="text-lg text-white/55 mb-8 leading-relaxed max-w-2xl">
              {content.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              {[
                { icon: Shield, text: "Licensed & Insured" },
                { icon: Star, text: "5-Star Rated" },
                { icon: Clock, text: "Free Estimates" },
                { icon: MapPin, text: `${city.name}, NC` },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/10 px-3 py-2 rounded-full">
                  <Icon className="w-3.5 h-3.5 text-patriot-red-light" />
                  <span className="text-white/75 text-xs font-medium">{text}</span>
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center bg-patriot-red text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-patriot-red-dark hover:shadow-2xl hover:shadow-patriot-red/25"
              >
                Get Free Estimate
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:border-white/40 hover:bg-white/5"
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
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="section-label">Why Choose Us</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-dark mt-4 mb-8 tracking-tight">
                {service.title} You Can Trust in {city.name}
              </h2>
              <div className="space-y-5">
                {content.benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-patriot-red shrink-0 mt-0.5" />
                    <p className="text-dark text-[15px] leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick info card */}
            <div className="lg:pl-8">
              <div className="bg-warm-gray rounded-2xl p-8 sticky top-28">
                <h3 className="font-display font-bold text-dark text-xl mb-6">Quick Info</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-muted text-sm">Service</span>
                    <span className="font-semibold text-dark text-sm">{service.title}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-muted text-sm">Location</span>
                    <span className="font-semibold text-dark text-sm">{city.name}, NC</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-muted text-sm">County</span>
                    <span className="font-semibold text-dark text-sm">{city.county}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-muted text-sm">Estimates</span>
                    <span className="font-semibold text-patriot-red text-sm">Free</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-muted text-sm">License</span>
                    <span className="font-semibold text-dark text-sm">NC Licensed & Insured</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="block w-full bg-patriot-red text-white font-bold text-center py-4 rounded-xl hover:bg-patriot-red-dark transition-colors"
                >
                  Get Free Estimate
                </Link>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full mt-3 py-3 text-navy font-semibold text-sm hover:text-patriot-red transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Or call {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs — great for SEO */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-label">FAQ</span>
          <h2 className="font-display text-3xl font-extrabold text-dark mt-4 mb-10 tracking-tight">
            Frequently Asked Questions About {service.title} in {city.name}
          </h2>

          <div className="space-y-6">
            {content.faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="font-display font-bold text-dark text-lg mb-3">{faq.q}</h3>
                <p className="text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services in this city */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-2xl font-extrabold text-dark mb-8 tracking-tight">
            Other Services in {city.name}, NC
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/${citySlug}`}
                className="group flex items-center justify-between bg-warm-gray hover:bg-patriot-red/5 border border-transparent hover:border-patriot-red/20 p-5 rounded-xl transition-all"
              >
                <span className="font-medium text-dark text-sm group-hover:text-patriot-red transition-colors">{s.title} in {city.name}</span>
                <ArrowRight className="w-4 h-4 text-muted group-hover:text-patriot-red transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Same service in other cities */}
      <section className="py-16 bg-warm-gray border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-xl font-extrabold text-dark mb-6 tracking-tight">
            {service.title} in Other NC Cities
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/services/${serviceSlug}/${c.slug}`}
                className="inline-flex items-center gap-2 bg-white hover:bg-patriot-red/5 border border-gray-200 hover:border-patriot-red/20 px-4 py-2.5 rounded-lg transition-all text-sm text-dark hover:text-patriot-red"
              >
                <MapPin className="w-3.5 h-3.5" />
                {c.name}
              </Link>
            ))}
            <Link
              href={`/services/${serviceSlug}`}
              className="inline-flex items-center gap-1 px-4 py-2.5 text-sm text-patriot-red font-semibold hover:underline"
            >
              View all areas <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy-dark" />
        <div className="absolute inset-0 hero-pattern" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Need {service.title} in {city.name}?
          </h2>
          <p className="text-white/50 text-lg mb-8">
            Get a free estimate from {city.county}&apos;s most trusted roofing team. No pressure, no gimmicks — just honest service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-patriot-red text-white font-bold px-8 py-4 rounded-xl hover:bg-patriot-red-dark transition-all hover:shadow-2xl hover:shadow-patriot-red/25"
            >
              Get Free Estimate
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
