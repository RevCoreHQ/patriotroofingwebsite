import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kitchen Renovation in Lexington & Greensboro, NC",
  description: "Professional kitchen renovation in Lexington, Greensboro, Winston-Salem & the NC Triad. Custom cabinets, countertops, flooring & complete kitchen remodels. Free estimates.",
};

export default function KitchenRenovationPage() {
  return (
    <ServicePageLayout
      title="Kitchen Renovation"
      image={IMAGES.kitchenRenovation}
      description="Transform the heart of your home with a custom kitchen renovation. From modern updates to complete remodels, our experienced team delivers beautiful, functional kitchens that your family will love for years to come."
      benefits={[
        "Custom cabinet design and installation — we work with you to create the perfect layout for your kitchen space and lifestyle",
        "Premium countertop options including granite, quartz, and butcher block — expertly measured and professionally installed",
        "Complete kitchen remodels from demolition to final walkthrough — one contractor handling every detail so nothing falls through the cracks",
        "Expert flooring installation — tile, hardwood, LVP, and more to match your kitchen's new look",
        "Electrical and plumbing upgrades to support modern appliances, lighting, and fixtures",
      ]}
      process={[
        { title: "Design Consultation", desc: "We visit your home, discuss your vision and budget, take measurements, and develop a detailed renovation plan with material selections and a clear timeline." },
        { title: "Expert Build-Out", desc: "Our skilled crew handles demolition, framing, plumbing, electrical, cabinets, countertops, flooring, and finishes — keeping your home clean and the project on schedule." },
        { title: "Final Walkthrough", desc: "We do a detailed inspection with you, make sure every detail meets your expectations, and hand over your beautiful new kitchen ready to enjoy." },
      ]}
      features={[
        "Custom cabinetry",
        "Countertop installation",
        "Tile & backsplash",
        "Flooring replacement",
        "Lighting upgrades",
        "Plumbing updates",
        "Appliance installation",
        "Island & bar builds",
        "Paint & trim work",
      ]}
    />
  );
}
