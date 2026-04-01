import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyChooseUs />
      <Process />
      <Gallery />
      <Testimonials />
      <FAQ />
      <ServiceAreas />
      <CTASection />
      <ContactForm />
    </>
  );
}
