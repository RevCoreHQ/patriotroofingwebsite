// Service-specific SEO copy templates
// Each function generates unique content for a service+city combination

export function getServiceCityContent(serviceSlug: string, cityName: string, county: string) {
  const content = SERVICE_CITY_CONTENT[serviceSlug];
  if (!content) return null;

  return {
    headline: content.headline.replace(/{city}/g, cityName).replace(/{county}/g, county),
    description: content.description.replace(/{city}/g, cityName).replace(/{county}/g, county),
    metaTitle: content.metaTitle.replace(/{city}/g, cityName).replace(/{county}/g, county),
    metaDescription: content.metaDescription.replace(/{city}/g, cityName).replace(/{county}/g, county),
    benefits: content.benefits.map((b) => b.replace(/{city}/g, cityName).replace(/{county}/g, county)),
    faqs: content.faqs.map((faq) => ({
      q: faq.q.replace(/{city}/g, cityName).replace(/{county}/g, county),
      a: faq.a.replace(/{city}/g, cityName).replace(/{county}/g, county),
    })),
  };
}

const SERVICE_CITY_CONTENT: Record<
  string,
  {
    headline: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    benefits: string[];
    faqs: { q: string; a: string }[];
  }
> = {
  "roof-installation": {
    headline: "Professional Roof Installation in {city}, NC",
    description:
      "Building a new home or adding an addition in {city}? Our licensed roofing team installs premium roof systems built to withstand {county}'s climate. From architectural shingles to metal roofing, we offer a full range of materials backed by manufacturer warranties and our own workmanship guarantee.",
    metaTitle: "Roof Installation in {city}, NC | New Roof Contractor",
    metaDescription:
      "Expert new roof installation in {city}, {county}, NC. Premium shingles, metal roofing & more. Licensed, insured, satisfaction guaranteed. Free estimates — call today.",
    benefits: [
      "Premium materials from GAF, CertainTeed, and Owens Corning — rated for North Carolina's weather conditions",
      "Expert installation by crews with years of experience working on {city} homes",
      "Full manufacturer warranty plus our workmanship guarantee for complete protection",
      "Proper ventilation design to prevent moisture damage in {county}'s humid climate",
      "We handle all {city} building permits and schedule required inspections",
      "Complete project cleanup — your property will look better than when we arrived",
    ],
    faqs: [
      {
        q: "How long does a new roof installation take in {city}?",
        a: "Most residential roof installations in {city} are completed in 1-3 days, depending on the size of your home and the roofing material chosen. We'll give you an exact timeline during your free estimate.",
      },
      {
        q: "What roofing materials work best for homes in {county}?",
        a: "For {county}'s climate, we typically recommend architectural shingles for their balance of durability, aesthetics, and value. Metal roofing is also an excellent option for homeowners looking for 40+ year lifespans and superior storm resistance.",
      },
      {
        q: "Do I need a permit for a new roof in {city}, NC?",
        a: "Yes, {city} requires building permits for new roof installations. We handle the entire permit process for you, including scheduling the required {county} building inspections.",
      },
    ],
  },
  "roof-replacement": {
    headline: "Roof Replacement in {city}, NC",
    description:
      "Is your {city} home showing signs of an aging roof? Missing shingles, persistent leaks, and rising energy bills all signal it's time for a replacement. Our team provides complete tear-off and reinstallation with premium materials, transparent pricing, and insurance claim assistance for {county} homeowners.",
    metaTitle: "Roof Replacement in {city}, NC | Licensed Roofer",
    metaDescription:
      "Complete roof replacement in {city}, {county}, NC. Full tear-off, premium materials, insurance claim help. Licensed & insured contractor. Free estimates.",
    benefits: [
      "Complete tear-off with full deck inspection to catch hidden damage before your new roof goes on",
      "Wide selection of premium materials to match {city} home styles and your budget",
      "Insurance claim assistance — we work with your adjuster to maximize {county} storm damage coverage",
      "Modern roofing systems can cut cooling costs by up to 25% in North Carolina's hot summers",
      "A new roof is one of the highest-ROI improvements for {city} home values",
      "Full cleanup and debris removal — every nail picked up with our magnetic sweep",
    ],
    faqs: [
      {
        q: "How much does a roof replacement cost in {city}?",
        a: "Roof replacement costs in {city} typically range from $8,000 to $25,000+ depending on your home's size, roof complexity, and material choice. We provide free, detailed estimates with no hidden fees.",
      },
      {
        q: "Will my homeowner's insurance cover a roof replacement in {county}?",
        a: "If your roof was damaged by storms, hail, or wind — which is common in {county} — your insurance may cover most or all of the replacement cost. We work directly with insurance adjusters and can help document the damage for your claim.",
      },
      {
        q: "How do I know if my {city} home needs a roof replacement vs. repair?",
        a: "Signs you may need a full replacement include: the roof is 20+ years old, you have widespread shingle damage, there are multiple active leaks, or you can see daylight through the roof boards. Our free inspection will give you an honest assessment.",
      },
    ],
  },
  "roof-repair": {
    headline: "Roof Repair in {city}, NC",
    description:
      "A small roof problem at your {city} home can quickly become a major expense. Whether it's a storm-damaged shingle, a persistent leak, or flashing that's pulled away, our experienced team delivers fast, effective repairs that restore your roof's full protection. We serve all of {county} with same-week service.",
    metaTitle: "Roof Repair in {city}, NC | Fast Leak & Storm Damage Fix",
    metaDescription:
      "Fast, reliable roof repair in {city}, {county}, NC. Leaks, storm damage, missing shingles & more. Same-week service. Licensed & insured. Free estimates.",
    benefits: [
      "Same-week service for most {city} roof repairs — we prioritize getting your home protected quickly",
      "Honest assessments — we'll tell you exactly what needs fixing on your {county} home, nothing more",
      "We use the same premium materials as our full installations, not band-aid fixes",
      "Full documentation for insurance claims — detailed photos and reports for {county} adjusters",
      "Affordable repair options for every budget, from spot fixes to comprehensive restoration",
      "Warranty on all repair work so you can have confidence in the fix",
    ],
    faqs: [
      {
        q: "How quickly can you repair my roof in {city}?",
        a: "For most repairs in {city}, we can have a crew at your home within the same week of your call. Emergency repairs (active leaks, storm damage) get even faster priority — often next-day service.",
      },
      {
        q: "Is it worth repairing an old roof on my {city} home?",
        a: "It depends on the roof's overall condition. If the damage is isolated and the rest of the roof is in good shape, a repair can extend its life by years. If the roof is 20+ years old with widespread issues, replacement may be more cost-effective. Our free inspection will give you an honest recommendation.",
      },
      {
        q: "Do you fix roof leaks in {city}?",
        a: "Absolutely. Leak detection and repair is one of our most common services in {city}. We trace the leak to its source (which isn't always directly above the water stain), fix the underlying issue, and make sure it won't return.",
      },
    ],
  },
  "kitchen-renovation": {
    headline: "Kitchen Renovation in {city}, NC",
    description:
      "Ready to transform your {city} kitchen? Patriot Roofing & Home Repair delivers beautiful, functional kitchen remodels across {county}. From custom cabinets and countertops to complete gut renovations, our experienced team handles every detail so you get the kitchen your family deserves.",
    metaTitle: "Kitchen Renovation in {city}, NC | Kitchen Remodel Contractor",
    metaDescription:
      "Professional kitchen renovation in {city}, {county}, NC. Custom cabinets, countertops, flooring & complete remodels. Licensed & insured. Free estimates.",
    benefits: [
      "Custom cabinet design and installation tailored to your {city} home's layout and your family's needs",
      "Premium countertop options — granite, quartz, butcher block — expertly measured and installed",
      "Complete kitchen remodels from demolition to final walkthrough, managed by one trusted {county} contractor",
      "Expert flooring installation including tile, hardwood, and LVP to match your new kitchen design",
      "Electrical and plumbing upgrades to support modern appliances and fixtures",
      "We handle all {city} building permits and {county} inspections for your renovation",
    ],
    faqs: [
      {
        q: "How much does a kitchen renovation cost in {city}?",
        a: "Kitchen renovation costs in {city} vary widely depending on scope — a cosmetic update may start around $10,000 while a full gut remodel can range from $25,000-$60,000+. We provide free, detailed estimates so you know exactly what to expect.",
      },
      {
        q: "How long does a kitchen remodel take in {county}?",
        a: "Most kitchen renovations in {county} take 4-8 weeks depending on the scope. A simple cabinet and countertop refresh may be faster, while a full gut renovation with layout changes takes longer. We provide a clear timeline upfront.",
      },
      {
        q: "Do I need a permit for a kitchen renovation in {city}?",
        a: "If your kitchen remodel involves plumbing, electrical, or structural changes, yes — {city} requires building permits. We handle the entire permit process for you, including scheduling {county} inspections.",
      },
    ],
  },
  "bathroom-renovation": {
    headline: "Bathroom Renovation in {city}, NC",
    description:
      "Upgrade your {city} bathroom with modern fixtures, expert tile work, and quality craftsmanship. Whether it's a simple refresh or a complete renovation, Patriot Roofing & Home Repair creates bathrooms that combine style, comfort, and lasting durability for {county} homeowners.",
    metaTitle: "Bathroom Renovation in {city}, NC | Bathroom Remodel Contractor",
    metaDescription:
      "Professional bathroom renovation in {city}, {county}, NC. Custom showers, vanities, tile work & complete remodels. Licensed & insured. Free estimates.",
    benefits: [
      "Custom shower and tub installations — walk-in showers, frameless glass, and soaking tubs designed for your {city} home",
      "Expert tile work for floors, walls, and shower surrounds — precision installation that lasts",
      "Vanity and cabinet installation from single sinks to double vanities for {city} homes of all sizes",
      "Complete plumbing upgrades — new fixtures, supply lines, and drain work for your new bathroom",
      "Professional waterproofing to prevent mold and water damage in {county}'s humid climate",
      "Accessibility upgrades including grab bars, walk-in showers, and comfort-height fixtures",
    ],
    faqs: [
      {
        q: "How much does a bathroom renovation cost in {city}?",
        a: "Bathroom renovation costs in {city} typically range from $8,000 for a basic refresh to $30,000+ for a full gut renovation with premium fixtures. We provide free, detailed estimates with no hidden fees.",
      },
      {
        q: "How long does a bathroom remodel take in {county}?",
        a: "Most bathroom renovations in {county} take 2-4 weeks. Simple updates like a vanity swap and new tile can be faster, while a full renovation with layout changes may take longer. We'll give you a clear timeline before work begins.",
      },
      {
        q: "Can you make my bathroom more accessible in {city}?",
        a: "Absolutely. We specialize in accessibility upgrades for {city} homeowners — walk-in showers with bench seating, grab bars, comfort-height toilets, and wider doorways. These improvements add safety and value to your home.",
      },
    ],
  },
  "home-repairs": {
    headline: "Home Repairs & Remodeling in {city}, NC",
    description:
      "Beyond roofing, Patriot Roofing & Home Repair is {city}'s trusted contractor for comprehensive home improvements. From siding and window replacement to deck building and interior renovations, we bring the same quality craftsmanship to every project in {county}.",
    metaTitle: "Home Repairs & Remodeling in {city}, NC | Licensed Contractor",
    metaDescription:
      "Quality home repairs & remodeling in {city}, {county}, NC. Siding, windows, decks, interior renovations & more. Licensed & insured contractor. Free estimates.",
    benefits: [
      "One trusted contractor for all your {city} home improvement needs — no juggling multiple companies",
      "Licensed and insured for residential construction and renovation in {county}",
      "Same commitment to quality craftsmanship that makes our roofing the most trusted in the Triad",
      "Transparent pricing and detailed estimates for every {city} home project",
      "Local team that knows {city} building codes and {county} permit requirements",
      "We stand behind our work — your satisfaction is guaranteed on every project",
    ],
    faqs: [
      {
        q: "What home repair services do you offer in {city}?",
        a: "We provide siding installation and repair, window replacement, deck building and repair, exterior painting, soffit and fascia work, door installation, trim and molding, and general handyman services throughout {city} and {county}.",
      },
      {
        q: "Do I need a permit for home renovations in {city}?",
        a: "Many renovation projects in {city} require building permits from {county}. We handle the entire permit process, ensuring your project meets all local codes and passes inspection.",
      },
      {
        q: "Can you handle both my roof and other home repairs?",
        a: "Absolutely — that's one of our biggest advantages. Many {city} homeowners combine a roof project with siding, gutters, or other repairs. Bundling work with one contractor saves time, money, and the hassle of coordinating multiple crews.",
      },
    ],
  },
};
