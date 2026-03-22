import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Gutter Installation & Repair in Lexington & Greensboro, NC",
  description: "Seamless gutter installation and repair in Lexington, Greensboro, Winston-Salem & the NC Triad. Protect your foundation with quality gutter systems. Free estimates.",
};

export default function GuttersPage() {
  return (
    <ServicePageLayout
      title="Gutters"
      description="Your gutters are your home's first line of defense against water damage. We install and repair seamless gutter systems that channel water away from your foundation, protecting your home's structure and landscaping."
      benefits={[
        "Custom-fabricated seamless gutters — cut on-site to perfectly fit your home, eliminating leak-prone seams and joints",
        "Multiple material and color options — aluminum, copper, and steel gutters in colors that complement your home's exterior",
        "Proper slope and downspout placement engineered to handle North Carolina's heaviest rainfall without overflowing",
        "Gutter guard installation available — reduce maintenance and keep leaves, debris, and pests out of your gutter system",
        "Prevents costly foundation damage, basement flooding, soil erosion, and exterior staining caused by improper drainage",
      ]}
      process={[
        { title: "Drainage Assessment", desc: "We evaluate your home's water flow patterns, measure precisely, and recommend the optimal gutter system for your property." },
        { title: "Custom Fabrication & Install", desc: "Seamless gutters are fabricated on-site from a single piece of material, then installed with proper pitch and secure hidden hangers." },
        { title: "Testing & Warranty", desc: "We test the entire system with water to verify proper flow, check every connection, and walk you through maintenance and warranty details." },
      ]}
      features={[
        "Seamless aluminum gutters",
        "5-inch & 6-inch options",
        "Hidden hanger mounting",
        "Custom color matching",
        "Downspout installation",
        "Gutter guard systems",
        "Splash block placement",
        "Old gutter removal",
        "Gutter repair service",
      ]}
    />
  );
}
