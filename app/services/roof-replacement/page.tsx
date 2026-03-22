import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Roof Replacement Services in Lexington & Greensboro, NC",
  description: "Complete roof replacement by licensed NC contractors. Upgrade your aging roof with premium materials and expert installation. Serving Lexington, Greensboro & Winston-Salem. Free estimates.",
};

export default function RoofReplacementPage() {
  return (
    <ServicePageLayout
      title="Roof Replacement"
      description="Is your roof showing its age? Missing shingles, persistent leaks, and rising energy bills are signs it's time for a complete replacement. We make the process seamless, affordable, and stress-free."
      benefits={[
        "Complete tear-off and deck inspection to identify and repair any hidden structural damage before your new roof goes on",
        "Wide selection of premium roofing materials to match your home's style and your budget — from affordable 3-tab to luxury designer shingles",
        "Significant improvement in energy efficiency — modern roofing systems can reduce cooling costs by up to 25%",
        "Insurance claim assistance for storm-damaged roofs — we work directly with your adjuster to maximize your coverage",
        "Increased home value — a new roof delivers one of the highest ROI's of any home improvement project",
      ]}
      process={[
        { title: "Free Roof Assessment", desc: "We perform a comprehensive inspection of your existing roof, document all damage, and provide a detailed written estimate with material options." },
        { title: "Complete Replacement", desc: "Our crew removes your old roof down to the deck, makes any necessary repairs, and installs your new roof system from the ground up." },
        { title: "Quality Guarantee", desc: "Every replacement includes a full manufacturer warranty, our workmanship guarantee, and a detailed final inspection with walkthrough." },
      ]}
      features={[
        "Full old roof tear-off",
        "Deck inspection & repair",
        "New underlayment system",
        "Premium shingle installation",
        "Proper flashing & sealing",
        "Ridge cap installation",
        "Ventilation optimization",
        "Complete debris removal",
        "Insurance documentation",
      ]}
    />
  );
}
