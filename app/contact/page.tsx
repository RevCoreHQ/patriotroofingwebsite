import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Patriot Roofing & Home Repair for a free estimate. Call us or fill out our form. Serving Lexington, Greensboro, Winston-Salem & the NC Triad region.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Ready to protect your home? Reach out for a free estimate, ask a question, or schedule an inspection. We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact info bar */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-patriot-red/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-7 h-7 text-patriot-red" />
              </div>
              <div>
                <p className="text-sm text-muted mb-1">Call Us</p>
                <a href={`tel:${COMPANY.phoneRaw}`} className="font-bold text-dark hover:text-patriot-red transition-colors">
                  {COMPANY.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-patriot-red/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-7 h-7 text-patriot-red" />
              </div>
              <div>
                <p className="text-sm text-muted mb-1">Email Us</p>
                <a href={`mailto:${COMPANY.email}`} className="font-bold text-dark hover:text-patriot-red transition-colors text-sm">
                  {COMPANY.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-patriot-red/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-patriot-red" />
              </div>
              <div>
                <p className="text-sm text-muted mb-1">Location</p>
                <p className="font-bold text-dark">{COMPANY.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-patriot-red/10 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7 text-patriot-red" />
              </div>
              <div>
                <p className="text-sm text-muted mb-1">Hours</p>
                <p className="font-bold text-dark">Mon–Sat: 7am–6pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <ContactForm />

      {/* Service areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-patriot-red font-semibold text-sm uppercase tracking-wider">Service Areas</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
              Serving the NC Triad Region
            </h2>
            <p className="text-muted text-lg">
              We provide roofing and home repair services throughout the Piedmont Triad area. Contact us to confirm we serve your location.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {SERVICE_AREAS.map((area) => (
              <div key={area} className="flex items-center gap-2 py-3 px-4 bg-warm-gray rounded-xl">
                <MapPin className="w-4 h-4 text-patriot-red shrink-0" />
                <span className="text-dark text-sm font-medium">{area}, NC</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
