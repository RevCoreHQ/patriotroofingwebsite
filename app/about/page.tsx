import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Users, Heart, Phone, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { COMPANY, IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Patriot Roofing & Home Repair — Lexington, NC's trusted roofing contractor. Licensed, insured, and committed to quality craftsmanship and honest service.",
};

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    desc: "We never cut corners. Every nail, every shingle, every detail is done right — because your home deserves nothing less.",
  },
  {
    icon: Users,
    title: "Honest Communication",
    desc: "You'll always know what's happening with your project. We explain everything clearly and keep our promises.",
  },
  {
    icon: Shield,
    title: "Integrity First",
    desc: "We recommend only what your home actually needs. Our reputation is built on trust, not upselling.",
  },
  {
    icon: Heart,
    title: "Community Focused",
    desc: "We live and work in the communities we serve. Your neighbors are our neighbors, and that means everything to us.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Built on Trust.<br />
              <span className="text-patriot-red-light">Driven by Craftsmanship.</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-2xl">
              Patriot Roofing & Home Repair is a locally owned roofing contractor proudly serving the North Carolina Triad region. We combine decades of experience with a genuine commitment to doing right by every homeowner we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-patriot-red font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-6">
                Protecting NC Homes, One Roof at a Time
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Patriot Roofing & Home Repair was founded with a simple belief: homeowners deserve a contractor they can trust completely. Too many families have been burned by fly-by-night roofers who overpromise and underdeliver.
                </p>
                <p>
                  We set out to change that. Based in Lexington, NC, our team brings together experienced craftsmen who take genuine pride in their work. We treat every home as if it were our own — because in this community, it might be our neighbor&apos;s.
                </p>
                <p>
                  From the initial inspection to the final cleanup, we keep you informed every step of the way. No surprises, no hidden costs, no cutting corners. Just honest work by people who care.
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="rounded-3xl overflow-hidden relative">
              <Image
                src={IMAGES.project}
                alt="Completed roofing project by Patriot Roofing & Home Repair"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-patriot-red font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
              What We Stand For
            </h2>
            <p className="text-muted text-lg">
              These aren&apos;t just words on a wall. They guide every decision we make, from hiring our crew to choosing our materials.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
                <div className="w-16 h-16 bg-patriot-red/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-patriot-red" />
                </div>
                <h3 className="font-bold text-dark text-lg mb-3">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-navy rounded-2xl p-8 text-center">
                <p className="text-4xl font-bold text-white mb-2">500+</p>
                <p className="text-white/60 text-sm">Projects Completed</p>
              </div>
              <div className="bg-patriot-red rounded-2xl p-8 text-center">
                <p className="text-4xl font-bold text-white mb-2">5.0</p>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-white/80 text-sm">Average Rating</p>
              </div>
              <div className="bg-patriot-red rounded-2xl p-8 text-center">
                <p className="text-4xl font-bold text-white mb-2">100%</p>
                <p className="text-white/80 text-sm">Satisfaction Rate</p>
              </div>
              <div className="bg-navy rounded-2xl p-8 text-center">
                <p className="text-4xl font-bold text-white mb-2">12+</p>
                <p className="text-white/60 text-sm">Cities Served</p>
              </div>
            </div>

            <div>
              <span className="text-patriot-red font-semibold text-sm uppercase tracking-wider">Why Trust Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-6">
                Your Home Is in Good Hands
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-patriot-red shrink-0 mt-0.5" />
                  <p className="text-dark">Fully licensed and insured in the state of North Carolina</p>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-patriot-red shrink-0 mt-0.5" />
                  <p className="text-dark">Premium materials from trusted manufacturers</p>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-patriot-red shrink-0 mt-0.5" />
                  <p className="text-dark">Workmanship guarantee on every project</p>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-patriot-red shrink-0 mt-0.5" />
                  <p className="text-dark">Background-checked, trained crews</p>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-patriot-red shrink-0 mt-0.5" />
                  <p className="text-dark">Transparent, detailed estimates with no hidden fees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-patriot-red relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Work with a Roofer You Can Trust?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a free inspection and honest assessment from our team. No pressure, no gimmicks — just straightforward advice from local experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-patriot-red font-bold text-lg px-8 py-4 rounded-xl hover:bg-gray-100 transition-all"
            >
              Get Free Estimate <ArrowRight className="w-5 h-5" />
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
    </>
  );
}
