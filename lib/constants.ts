export const COMPANY = {
  name: "Patriot Roofing & Home Repair",
  shortName: "Patriot Roofing",
  phone: "(336) 555-0176",
  phoneRaw: "+13365550176",
  email: "info@patriotroofingandhomerepair.com",
  address: "Lexington, NC",
  tagline: "Your Trusted Roofing Partner in North Carolina",
  license: "NC Licensed & Insured",
  url: "https://patriotroofingandhomerepair.com",
};

export const SERVICE_AREAS = [
  "Lexington",
  "Greensboro",
  "Winston-Salem",
  "High Point",
  "Thomasville",
  "Asheboro",
  "Burlington",
  "Kernersville",
  "Clemmons",
  "Salisbury",
  "Mocksville",
  "Denton",
];

export const SERVICES = [
  {
    title: "Roof Installation",
    slug: "roof-installation",
    shortDesc: "Premium new roof installations built to protect your home for decades.",
    icon: "home" as const,
  },
  {
    title: "Roof Replacement",
    slug: "roof-replacement",
    shortDesc: "Complete roof replacement with top-tier materials and expert craftsmanship.",
    icon: "refresh-cw" as const,
  },
  {
    title: "Roof Repair",
    slug: "roof-repair",
    shortDesc: "Fast, reliable repairs that stop leaks and restore your roof's integrity.",
    icon: "wrench" as const,
  },
  {
    title: "Emergency Roofing",
    slug: "emergency-roofing",
    shortDesc: "24/7 emergency response when storm damage can't wait.",
    icon: "alert-triangle" as const,
  },
  {
    title: "Gutters",
    slug: "gutters",
    shortDesc: "Seamless gutter installation and repair to protect your foundation.",
    icon: "droplets" as const,
  },
  {
    title: "Home Repairs & Remodeling",
    slug: "home-repairs",
    shortDesc: "Quality home improvements from trusted local craftsmen.",
    icon: "hammer" as const,
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Lexington, NC",
    rating: 5,
    text: "Patriot Roofing replaced our entire roof in just two days. The crew was professional, cleaned up everything, and the new roof looks incredible. Best experience we've had with any contractor.",
  },
  {
    name: "James T.",
    location: "Greensboro, NC",
    rating: 5,
    text: "After a bad storm damaged our roof, Patriot was there the next morning. They handled the insurance paperwork and made the whole process stress-free. Highly recommend to anyone in the Triad area.",
  },
  {
    name: "Linda & Robert K.",
    location: "Winston-Salem, NC",
    rating: 5,
    text: "We got three quotes for our roof replacement, and Patriot offered the best value by far. The communication was outstanding from start to finish. Our neighbors have already asked for their number.",
  },
];
