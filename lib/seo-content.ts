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
  "emergency-roofing": {
    headline: "Emergency Roofing in {city}, NC",
    description:
      "When storm damage, a fallen tree, or a sudden leak threatens your {city} home, you need a roofing team you can count on — fast. Patriot Roofing provides rapid emergency response across {county} to secure your property and prevent further damage. We're available when it matters most.",
    metaTitle: "Emergency Roof Repair in {city}, NC | 24/7 Storm Damage",
    metaDescription:
      "24/7 emergency roof repair in {city}, {county}, NC. Storm damage, fallen trees, severe leaks. Rapid response, tarping & board-up. Licensed & insured.",
    benefits: [
      "Rapid response to {city} emergencies — we dispatch crews as quickly as possible",
      "Immediate tarping and board-up to protect your {county} home from further damage",
      "Available for severe weather events — storms in {city} don't wait for business hours",
      "Full insurance claim documentation — we photograph and report all damage for your adjuster",
      "Permanent repair solutions after the emergency, not just temporary patches",
      "Coordination with tree removal services when fallen trees damage {city} roofs",
    ],
    faqs: [
      {
        q: "What should I do if a storm damages my roof in {city}?",
        a: "First, ensure everyone is safe. Then call us immediately. Don't go on the roof yourself. We'll dispatch a crew to tarp or secure the damaged area, preventing further water intrusion while we plan a permanent repair.",
      },
      {
        q: "Do you offer 24/7 emergency roofing in {county}?",
        a: "Yes, we provide emergency roofing services to {city} and all of {county}. During major storm events, we prioritize calls based on severity and deploy multiple crews across the area.",
      },
      {
        q: "Will insurance cover emergency roof repair in {city}?",
        a: "In most cases, yes. Homeowner's insurance typically covers storm damage, including the cost of emergency tarping and permanent repairs. We help {city} homeowners document the damage and work directly with insurance adjusters.",
      },
    ],
  },
  gutters: {
    headline: "Gutter Installation & Repair in {city}, NC",
    description:
      "Your {city} home's gutters are its first defense against water damage. We install custom-fabricated seamless gutter systems designed to handle {county}'s heaviest rainfall, channeling water safely away from your foundation, landscaping, and siding. Protect your investment with gutters that actually work.",
    metaTitle: "Gutter Installation in {city}, NC | Seamless Gutters",
    metaDescription:
      "Seamless gutter installation & repair in {city}, {county}, NC. Custom-fabricated on-site, gutter guards available. Protect your foundation. Free estimates.",
    benefits: [
      "Custom seamless gutters fabricated on-site to perfectly fit your {city} home — no leak-prone seams",
      "Engineered slope and downspout placement for {county}'s rainfall patterns",
      "Multiple colors and materials to complement {city} home styles",
      "Gutter guard options to minimize maintenance — especially important with {county}'s tree cover",
      "Prevents costly foundation damage, basement flooding, and exterior staining",
      "Professional removal and disposal of your old gutter system",
    ],
    faqs: [
      {
        q: "How much do new gutters cost in {city}?",
        a: "Seamless aluminum gutter installation in {city} typically runs $6-$12 per linear foot, depending on your home's height, accessibility, and whether you add gutter guards. Most {city} homes fall in the $1,200-$3,000 range. We provide a free exact quote.",
      },
      {
        q: "Do I need gutter guards on my {city} home?",
        a: "If your property has trees nearby — which is common in {county} — gutter guards can save significant time and money on maintenance. They prevent leaves, pine needles, and debris from clogging your system. We'll recommend the best option during your free estimate.",
      },
      {
        q: "How long do seamless gutters last in North Carolina?",
        a: "Properly installed aluminum seamless gutters typically last 20-30 years in {county}'s climate. We install with heavy-duty hidden hangers and ensure proper slope for optimal drainage and longevity.",
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
