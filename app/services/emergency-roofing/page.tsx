import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Emergency Roofing Services in Lexington & Greensboro, NC",
  description: "24/7 emergency roof repair in Lexington, Greensboro, Winston-Salem & the NC Triad. Storm damage, fallen trees, severe leaks. Fast response, licensed & insured.",
};

export default function EmergencyRoofingPage() {
  return (
    <ServicePageLayout
      title="Emergency Roofing"
      description="When a storm, fallen tree, or sudden leak threatens your home, you need a team you can count on — fast. Patriot Roofing provides rapid emergency response to protect your property and your family."
      benefits={[
        "Rapid response times — we prioritize emergencies and work to get a crew to your home as quickly as possible to prevent further damage",
        "24/7 availability for severe weather events — storms don't wait for business hours, and neither do we",
        "Immediate tarping and board-up services to secure your home from the elements while permanent repairs are planned",
        "Full insurance claim support — we document all damage thoroughly and work with your adjuster to streamline the process",
        "Permanent repair solutions, not temporary patches — once the emergency is contained, we deliver a lasting fix you can trust",
      ]}
      process={[
        { title: "Emergency Contact", desc: "Call us anytime. We'll assess the urgency of your situation and dispatch a team as quickly as possible to secure your home." },
        { title: "Damage Containment", desc: "Our crew arrives to tarp, board up, or temporarily seal your roof — stopping water intrusion and preventing further structural damage." },
        { title: "Permanent Restoration", desc: "Once the immediate threat is addressed, we develop a comprehensive repair or replacement plan to fully restore your roof." },
      ]}
      features={[
        "Emergency tarping",
        "Board-up services",
        "Storm damage assessment",
        "Fallen tree removal coordination",
        "Water intrusion mitigation",
        "Insurance documentation",
        "Temporary weatherproofing",
        "Full permanent repair",
        "Follow-up inspection",
      ]}
      ctaText="Call for Emergency Service"
    />
  );
}
