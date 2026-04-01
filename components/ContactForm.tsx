"use client";

import { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const FORM_URL =
  "https://api.leadconnectorhq.com/widget/form/TvJdiDu0iZuLMKoolhkD";

export default function ContactForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!loaded) return;

    // Load the GHL embed script once
    const scriptId = "ghl-form-embed";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [loaded]);

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
          <div
            ref={containerRef}
            className="bg-white rounded-3xl p-2 shadow-sm border border-gray-100 min-h-[600px]"
          >
            {loaded ? (
              <iframe
                src={FORM_URL}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "12px",
                  minHeight: "573px",
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
                loading="lazy"
              />
            ) : (
              <div className="flex items-center justify-center h-full min-h-[573px]">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-patriot-red border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                  <p className="text-muted text-sm">Loading form...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
