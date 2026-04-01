"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const FORM_URL =
  "https://api.leadconnectorhq.com/widget/form/TvJdiDu0iZuLMKoolhkD";

export default function ContactForm() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const scriptId = "ghl-form-embed";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="contact" className="py-24 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - content */}
          <div>
            <span className="text-patriot-red font-semibold text-sm uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
              Request Your Free Estimate
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Fill out the form and one of our roofing specialists will get back
              to you within 24 hours. Or call us now for immediate assistance.
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
                <span className="text-dark text-sm">
                  Free, no-obligation estimates
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-patriot-red rounded-full" />
                <span className="text-dark text-sm">
                  Response within 24 hours
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-patriot-red rounded-full" />
                <span className="text-dark text-sm">
                  Licensed & insured professionals
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-patriot-red rounded-full" />
                <span className="text-dark text-sm">
                  Serving the entire NC Triad region
                </span>
              </div>
            </div>
          </div>

          {/* Right - GHL form */}
          <div className="bg-white rounded-3xl p-2 shadow-sm border border-gray-100 min-h-[600px] relative">
            {/* Skeleton placeholder shown until iframe loads */}
            {!ready && (
              <div className="absolute inset-2 flex items-center justify-center rounded-xl bg-gray-50">
                <div className="w-full max-w-sm px-6 space-y-5 animate-pulse">
                  <div className="h-5 bg-gray-200 rounded w-2/3" />
                  <div className="space-y-3">
                    <div className="h-10 bg-gray-200 rounded-lg" />
                    <div className="h-10 bg-gray-200 rounded-lg" />
                    <div className="h-10 bg-gray-200 rounded-lg" />
                    <div className="h-24 bg-gray-200 rounded-lg" />
                  </div>
                  <div className="h-11 bg-gray-300 rounded-lg" />
                </div>
              </div>
            )}
            <iframe
              src={FORM_URL}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "12px",
                minHeight: "573px",
                opacity: ready ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
              id="inline-TvJdiDu0iZuLMKoolhkD"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Website Form"
              data-height="573"
              data-layout-iframe-id="inline-TvJdiDu0iZuLMKoolhkD"
              data-form-id="TvJdiDu0iZuLMKoolhkD"
              title="Website Form"
              onLoad={() => setReady(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
