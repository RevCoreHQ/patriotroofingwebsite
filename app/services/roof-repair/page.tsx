import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Roof Repair Services in Lexington & Greensboro, NC",
  description: "Fast, reliable roof repair in Lexington, Greensboro, Winston-Salem & the NC Triad. Fix leaks, storm damage, missing shingles & more. Licensed & insured. Free estimates.",
};

export default function RoofRepairPage() {
  return (
    <ServicePageLayout
      title="Roof Repair"
      description="A small roof problem today can become a major expense tomorrow. Our experienced team delivers fast, effective repairs that stop damage in its tracks and restore your roof's full protection."
      benefits={[
        "Same-week service for most repairs — we understand that a damaged roof can't wait and prioritize getting your home protected quickly",
        "Honest, transparent assessments — we'll tell you exactly what needs fixing and what doesn't, so you never pay for unnecessary work",
        "Repairs that last — we use the same premium materials and techniques as our full installations, not band-aid fixes that fail in a year",
        "Full documentation for insurance claims — we provide detailed photos and reports to help you get the coverage you deserve",
        "Affordable solutions for every budget — from targeted spot repairs to comprehensive restoration, we have options that fit",
      ]}
      process={[
        { title: "Thorough Inspection", desc: "We examine your entire roof — not just the obvious problem area — to identify all issues and prevent future surprises." },
        { title: "Clear Recommendation", desc: "You'll receive an honest assessment of what needs repair, a detailed quote, and our professional recommendation on the best approach." },
        { title: "Quality Repair", desc: "Our crew completes the repair using premium materials, tests the fix, and ensures your roof is fully sealed and protected." },
      ]}
      features={[
        "Leak detection & repair",
        "Missing shingle replacement",
        "Flashing repair & replacement",
        "Vent pipe boot repair",
        "Soffit & fascia repair",
        "Gutter reattachment",
        "Storm damage repair",
        "Skylight leak repair",
        "Insurance claim support",
      ]}
      ctaText="Schedule a Repair"
    />
  );
}
