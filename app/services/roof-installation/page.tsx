import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Professional Roof Installation in Lexington & Greensboro, NC",
  description: "Expert new roof installation services in Lexington, Greensboro, Winston-Salem & the NC Triad. Premium materials, skilled crews, satisfaction guaranteed. Free estimates.",
};

export default function RoofInstallationPage() {
  return (
    <ServicePageLayout
      title="Roof Installation"
      description="Building a new home or adding an addition? Trust North Carolina's premier roofing team to install a roof that protects your family and enhances your home's curb appeal for decades to come."
      benefits={[
        "Premium architectural shingles, metal roofing, and specialty materials from top manufacturers like GAF, CertainTeed, and Owens Corning",
        "Expert installation by trained, certified crews with years of hands-on experience in North Carolina's unique climate conditions",
        "Full manufacturer warranty coverage plus our own workmanship guarantee for complete peace of mind",
        "Proper ventilation design and ice/water shield installation to prevent moisture damage and extend roof life",
        "Complete project management from permits to final inspection — we handle every detail so you don't have to",
      ]}
      process={[
        { title: "Design Consultation", desc: "We assess your home's structure, discuss material options, and help you choose the perfect roof for your budget and aesthetic goals." },
        { title: "Professional Installation", desc: "Our certified crew installs your new roof using manufacturer-specified techniques, ensuring every detail meets our exacting standards." },
        { title: "Final Inspection", desc: "We conduct a thorough quality inspection, clean up your property completely, and walk you through your new roof's warranty coverage." },
      ]}
      features={[
        "Architectural shingle systems",
        "Metal roofing options",
        "Synthetic underlayment",
        "Ridge vent installation",
        "Ice & water shield",
        "Drip edge flashing",
        "Proper attic ventilation",
        "Full cleanup & debris removal",
        "Building permit coordination",
      ]}
    />
  );
}
