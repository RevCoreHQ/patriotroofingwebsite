"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does a roof replacement cost in North Carolina?",
    a: "The cost of a roof replacement in North Carolina typically ranges from $8,000 to $20,000+ depending on the size of your home, the materials chosen, and the complexity of the job. We provide free, detailed estimates so you know exactly what to expect — no hidden fees or surprises.",
  },
  {
    q: "How do I know if I need a roof repair or a full replacement?",
    a: "If your roof is under 15 years old and the damage is isolated to a small area — like a few missing shingles or a minor leak — a repair is usually the best option. If your roof is older, has widespread damage, or you're seeing issues like sagging, daylight through the attic, or granule loss in gutters, it's likely time for a full replacement. We offer free inspections to help you make the right call.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes! Every project starts with a free, no-obligation estimate. We'll inspect your roof, discuss your options, and provide a detailed written quote — typically within 24 hours of your inquiry.",
  },
  {
    q: "What areas in North Carolina do you serve?",
    a: "We serve the entire NC Triad region including Lexington, Greensboro, Winston-Salem, High Point, Thomasville, Asheboro, Burlington, Kernersville, Clemmons, Salisbury, Mocksville, and Denton. If you're not sure whether we cover your area, just give us a call.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. Patriot Roofing & Home Repair is fully licensed and insured for all residential roofing, renovation, and home repair work in North Carolina. We carry both general liability and workers' compensation insurance for your protection.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most residential roof replacements are completed in 1-3 days, depending on the size of your home and weather conditions. Larger or more complex projects may take slightly longer. We'll give you a clear timeline before we start, and we always clean up thoroughly when the job is done.",
  },
  {
    q: "Do you handle insurance claims for storm damage?",
    a: "Yes, we work with homeowners throughout the insurance claims process. We'll inspect the damage, provide documentation your insurance company needs, and help make sure you receive fair coverage for the repairs. We've helped hundreds of NC homeowners navigate storm damage claims.",
  },
  {
    q: "What roofing materials do you install?",
    a: "We install a full range of roofing materials including architectural asphalt shingles, metal roofing, flat roofing systems, and specialty products. We use top-quality materials from trusted manufacturers like GAF, Owens Corning, and CertainTeed, and all installations include manufacturer warranty coverage.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-28 bg-warm-gray">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">Common Questions</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mt-4 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Get answers to the most common questions homeowners ask about
            roofing, home repairs, and working with our team.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-bold text-dark text-base sm:text-lg leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-patriot-red shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
