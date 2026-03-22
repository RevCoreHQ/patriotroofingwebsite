import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Home Repairs & Remodeling in Lexington & Greensboro, NC",
  description: "Quality home repairs and remodeling in Lexington, Greensboro, Winston-Salem & the NC Triad. Siding, windows, decks, interior renovations & more. Licensed & insured.",
};

export default function HomeRepairsPage() {
  return (
    <ServicePageLayout
      title="Home Repairs & Remodeling"
      description="Beyond roofing, Patriot Roofing & Home Repair offers comprehensive home improvement services. From siding replacement to interior renovations, we bring the same quality craftsmanship to every project."
      benefits={[
        "One trusted contractor for all your home improvement needs — no more juggling multiple companies and conflicting schedules",
        "Same commitment to quality craftsmanship and clear communication that makes our roofing services the most trusted in the Triad",
        "Licensed and insured for all types of residential construction and renovation work in North Carolina",
        "Transparent pricing and detailed written estimates for every project, so you always know exactly what to expect",
        "Local team that stands behind their work — we're your neighbors, and our reputation depends on your satisfaction",
      ]}
      process={[
        { title: "Home Consultation", desc: "We visit your home, discuss your vision and priorities, assess the scope of work, and provide a detailed plan with transparent pricing." },
        { title: "Expert Execution", desc: "Our skilled crew completes your project with attention to detail, respect for your home, and minimal disruption to your daily life." },
        { title: "Final Walkthrough", desc: "We do a thorough inspection together, address any concerns, and make sure you're completely satisfied before we consider the job done." },
      ]}
      features={[
        "Siding installation & repair",
        "Window replacement",
        "Deck building & repair",
        "Exterior painting",
        "Soffit & fascia work",
        "Interior renovations",
        "Door installation",
        "Trim & molding work",
        "General handyman services",
      ]}
    />
  );
}
