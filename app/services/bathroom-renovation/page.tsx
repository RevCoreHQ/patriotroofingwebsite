import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Bathroom Renovation in Lexington & Greensboro, NC",
  description: "Professional bathroom renovation in Lexington, Greensboro, Winston-Salem & the NC Triad. Custom showers, vanities, tile work & complete bathroom remodels. Free estimates.",
};

export default function BathroomRenovationPage() {
  return (
    <ServicePageLayout
      title="Bathroom Renovation"
      description="Upgrade your bathroom with modern fixtures, quality tile work, and expert craftsmanship. Whether it's a simple refresh or a complete gut renovation, we create bathrooms that combine style, comfort, and lasting durability."
      benefits={[
        "Custom shower and tub installations — walk-in showers, frameless glass, soaking tubs, and more designed to fit your space perfectly",
        "Expert tile work — floors, walls, and shower surrounds installed with precision for a clean, professional finish that lasts",
        "Vanity and cabinet installation — from single sinks to double vanities, we help you choose and install the perfect storage and style",
        "Complete plumbing upgrades — new fixtures, supply lines, and drain work to support your new bathroom design",
        "Waterproofing and moisture protection built into every project to prevent mold and water damage behind walls and under floors",
      ]}
      process={[
        { title: "Design & Planning", desc: "We discuss your goals, review your space, help select materials and fixtures, and provide a detailed estimate with a clear project timeline." },
        { title: "Professional Renovation", desc: "Our team handles everything — demo, plumbing, electrical, waterproofing, tile, fixtures, and finishes — with care for your home throughout the process." },
        { title: "Quality Inspection", desc: "Every detail is checked, tested, and perfected. We walk through the finished bathroom with you to make sure everything exceeds your expectations." },
      ]}
      features={[
        "Walk-in showers",
        "Tub installation",
        "Custom tile work",
        "Vanity & cabinetry",
        "Toilet replacement",
        "Plumbing & fixtures",
        "Lighting & exhaust fans",
        "Flooring replacement",
        "Accessibility upgrades",
      ]}
    />
  );
}
