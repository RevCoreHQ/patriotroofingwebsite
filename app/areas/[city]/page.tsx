import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ArrowRight, CheckCircle2, Shield, Star, Clock, MapPin } from "lucide-react";
import { COMPANY, SERVICES, SERVICE_AREAS_DATA, getCityBySlug } from "@/lib/constants";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return SERVICE_AREAS_DATA.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return {
    title: `Roofing Contractor in ${city.name}, NC | Roof Repair & Replacement`,
    description: `Licensed roofing contractor serving ${city.name}, ${city.county}, NC. Roof installation, replacement, repair, emergency roofing, gutters & more. Free estimates. Call ${COMPANY.phone}.`,
  };
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-dark py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute inset-0 stripe-pattern opacity-20" />
        <div className="absolute -right-20 -top-20 text-[300px] leading-none text-white/[0.02] select-none pointer-events-none hidden lg:block">★</div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="section-label !text-white/90 !bg-white/[0.07] !border-white/10">
              {city.county} &bull; {city.name}, NC
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-6 leading-tight tracking-tight">
              Trusted Roofing Contractor in{" "}
              <span className="text-patriot-red-light">{city.name}, NC</span>
            </h1>

            <p className="text-lg text-white/60 mb-8 leading-relaxed max-w-2xl">
              {city.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              {[
                { icon: Shield, text: "Licensed & Insured" },
                { icon: Star, text: "5-Star Rated" },
                { icon: Clock, text: "Free Estimates" },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/10 px-4 py-2.5 rounded-full">
                  <Icon className="w-4 h-4 text-patriot-red-light" />
                  <span className="text-white/75 text-sm font-medium">{text}</span>
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center bg-patriot-red text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:bg-patriot-red-dark hover:shadow-2xl hover:shadow-patriot-red/25"
              >
                Get Free Estimate in {city.name}
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

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 100h1440V55L0 100z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services in this city */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="section-label">Our Services</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-dark mt-4 mb-4 tracking-tight">
              Roofing & Home Services in {city.name}
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              We provide comprehensive roofing and home improvement services to homeowners throughout {city.name} and {city.county}. Every service comes with a free estimate and our satisfaction guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/${city.slug}`}
                className="group relative bg-warm-gray hover:bg-white rounded-2xl p-8 border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-patriot-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-full" />
                <span className="absolute top-4 right-6 font-display text-5xl font-extrabold text-navy/[0.04] select-none">0{i + 1}</span>

                <h3 className="font-display text-xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                <span className="inline-flex items-center gap-2 text-patriot-red font-semibold text-sm group-hover:gap-3 transition-all">
                  {service.title} in {city.name} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us for this area */}
      <section className="py-24 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Local Expertise</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-dark mt-4 mb-6 tracking-tight">
                Why {city.name} Homeowners Choose Patriot Roofing
              </h2>
              <div className="space-y-4">
                {[
                  `We're based in Davidson County — ${city.name} is in our backyard, not across the state`,
                  `Deep knowledge of ${city.county} building codes, HOA requirements, and permit processes`,
                  "Local crew means faster response times for inspections and emergency repairs",
                  "We use materials rated for North Carolina's specific climate and weather patterns",
                  "Your neighbors are our references — ask around and you'll hear our name",
                  "Transparent pricing with no travel surcharges for homes in our service area",
                ].map((benefit) => (
                  <div key={benefit} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-patriot-red shrink-0 mt-0.5" />
                    <p className="text-dark text-sm leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-navy rounded-3xl p-10 relative overflow-hidden">
                <div className="absolute inset-0 hero-pattern opacity-50" />
                <div className="relative text-center py-8">
                  <div className="w-16 h-20 bg-patriot-red shield-shape flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-display font-extrabold text-white text-2xl mb-2">Serving {city.name}</p>
                  <p className="text-white/50 text-sm mb-6">{city.county} &bull; ZIP {city.zip}</p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {city.nearby.map((nearby) => (
                      <span key={nearby} className="inline-flex items-center gap-1.5 bg-white/[0.07] border border-white/10 px-3 py-1.5 rounded-full text-white/70 text-xs">
                        <span className="w-1.5 h-1.5 bg-patriot-red rounded-full" />
                        {nearby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full bg-patriot-red/[0.06] rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-2xl font-extrabold text-dark mb-8 tracking-tight">
            Also Serving Nearby Communities
          </h2>
          <div className="flex flex-wrap gap-3">
            {SERVICE_AREAS_DATA.filter((a) => a.slug !== city.slug).map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="inline-flex items-center gap-2 bg-warm-gray hover:bg-patriot-red/5 border border-transparent hover:border-patriot-red/20 px-5 py-3 rounded-xl transition-all text-sm font-medium text-dark hover:text-patriot-red"
              >
                <MapPin className="w-4 h-4" />
                {area.name}, NC
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-patriot-red" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.1) 30px, rgba(255,255,255,0.1) 31px)" }} />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Need a Roofer in {city.name}?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Get a free inspection and honest estimate from {city.county}&apos;s most trusted roofing team. No pressure, no gimmicks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-white text-patriot-red font-bold text-lg px-8 py-4 rounded-xl hover:bg-gray-50 transition-all hover:shadow-2xl"
            >
              Get Free Estimate
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
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
