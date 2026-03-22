"use client";

import { useState } from "react";
import { Send, Phone } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-warm-gray">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-dark mb-3">Thank You!</h3>
            <p className="text-muted text-lg">We&apos;ve received your request and will be in touch within 24 hours.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - content */}
          <div>
            <span className="text-patriot-red font-semibold text-sm uppercase tracking-wider">Get Started</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
              Request Your Free Estimate
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Fill out the form and one of our roofing specialists will get back to you within 24 hours. Or call us now for immediate assistance.
            </p>

            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center gap-3 bg-navy text-white font-semibold px-8 py-4 rounded-xl hover:bg-navy-light transition-colors mb-8"
            >
              <Phone className="w-5 h-5" />
              Call {COMPANY.phone}
            </a>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-patriot-red rounded-full" />
                <span className="text-dark text-sm">Free, no-obligation estimates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-patriot-red rounded-full" />
                <span className="text-dark text-sm">Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-patriot-red rounded-full" />
                <span className="text-dark text-sm">Licensed & insured professionals</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-patriot-red rounded-full" />
                <span className="text-dark text-sm">Serving the entire NC Triad region</span>
              </div>
            </div>
          </div>

          {/* Right - form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-patriot-red/20 focus:border-patriot-red transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="(336) 555-0100"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-patriot-red/20 focus:border-patriot-red transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-patriot-red/20 focus:border-patriot-red transition-colors"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-dark mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark focus:outline-none focus:ring-2 focus:ring-patriot-red/20 focus:border-patriot-red transition-colors"
                >
                  <option value="">Select a service...</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Describe your roofing needs, concerns, or questions..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-patriot-red/20 focus:border-patriot-red transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-patriot-red hover:bg-patriot-red-dark text-white font-bold text-lg py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-patriot-red/20 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Request Free Estimate
              </button>

              <p className="text-muted text-xs text-center">
                By submitting, you agree to be contacted about your project. We never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
