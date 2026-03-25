export const IMAGES = {
  hero: "https://assets.cdn.filesafe.space/UrIbmSbNwH6Sfvb4CBZw/media/69c16b76d25fe2a0321b0c9b.webp",
  roofWork: "https://assets.cdn.filesafe.space/UrIbmSbNwH6Sfvb4CBZw/media/69c3d3c505117b612e43b75b.jpg",
  project: "https://assets.cdn.filesafe.space/UrIbmSbNwH6Sfvb4CBZw/media/69c3d3c5bd26d68e6d4399c3.jpg",
};

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

export const SERVICE_AREAS_DATA = [
  {
    name: "Lexington",
    slug: "lexington-nc",
    county: "Davidson County",
    zip: "27292",
    nearby: ["Thomasville", "Denton", "Mocksville"],
    description: "As our home base, Lexington is where Patriot Roofing was built. We know every neighborhood, every HOA requirement, and every weather pattern that affects roofs in Davidson County. From the historic homes downtown to newer developments off Highway 8, we've protected hundreds of Lexington roofs.",
  },
  {
    name: "Greensboro",
    slug: "greensboro-nc",
    county: "Guilford County",
    zip: "27401",
    nearby: ["High Point", "Burlington", "Kernersville"],
    description: "Greensboro homeowners trust Patriot Roofing for everything from hail damage repair in Irving Park to full roof replacements in Starmount. As the largest city in our service area, we maintain dedicated crews ready to serve Guilford County residents quickly and professionally.",
  },
  {
    name: "Winston-Salem",
    slug: "winston-salem-nc",
    county: "Forsyth County",
    zip: "27101",
    nearby: ["Kernersville", "Clemmons", "Mocksville"],
    description: "From the historic neighborhoods of West End to growing communities in Clemmons and Lewisville, we've been the go-to roofer for Forsyth County. Winston-Salem's mix of older homes and new construction means diverse roofing needs — and we handle them all.",
  },
  {
    name: "High Point",
    slug: "high-point-nc",
    county: "Guilford County",
    zip: "27260",
    nearby: ["Greensboro", "Thomasville", "Lexington"],
    description: "High Point's furniture industry heritage means beautiful, well-built homes that deserve quality roofing. Whether you're near the High Point Market or in the residential areas off Eastchester Drive, our team delivers the craftsmanship High Point homeowners expect.",
  },
  {
    name: "Thomasville",
    slug: "thomasville-nc",
    county: "Davidson County",
    zip: "27360",
    nearby: ["Lexington", "High Point", "Denton"],
    description: "Just minutes from our Lexington headquarters, Thomasville is one of our most-served communities. We know the roofing challenges unique to Davidson County — from summer storms to winter ice — and we're always nearby when Thomasville homeowners need us.",
  },
  {
    name: "Asheboro",
    slug: "asheboro-nc",
    county: "Randolph County",
    zip: "27203",
    nearby: ["Lexington", "High Point", "Thomasville"],
    description: "Asheboro and Randolph County homeowners count on Patriot Roofing for reliable, professional service. Whether it's storm damage near the zoo district or a roof replacement in one of Asheboro's established neighborhoods, we bring the same quality to every project.",
  },
  {
    name: "Burlington",
    slug: "burlington-nc",
    county: "Alamance County",
    zip: "27215",
    nearby: ["Greensboro", "Kernersville", "Asheboro"],
    description: "Burlington sits at the eastern edge of our service area, and Alamance County homeowners deserve the same premium roofing service we provide throughout the Triad. From Elon to Mebane, we cover greater Burlington with full roofing and home repair services.",
  },
  {
    name: "Kernersville",
    slug: "kernersville-nc",
    county: "Forsyth County",
    zip: "27284",
    nearby: ["Winston-Salem", "Greensboro", "High Point"],
    description: "Positioned perfectly between Winston-Salem and Greensboro, Kernersville is one of the fastest-growing communities in the Triad. We help new and existing homeowners protect their investment with quality roof installations, repairs, and replacements.",
  },
  {
    name: "Clemmons",
    slug: "clemmons-nc",
    county: "Forsyth County",
    zip: "27012",
    nearby: ["Winston-Salem", "Mocksville", "Lexington"],
    description: "Clemmons' beautiful neighborhoods and family-friendly communities deserve top-tier roofing protection. From Tanglewood-area homes to Village Point developments, we provide Clemmons residents with the same quality craftsmanship that's made us the Triad's trusted roofer.",
  },
  {
    name: "Salisbury",
    slug: "salisbury-nc",
    county: "Rowan County",
    zip: "28144",
    nearby: ["Lexington", "Mocksville", "Denton"],
    description: "Salisbury's rich history includes some of the finest homes in Rowan County — and they need roofing contractors who respect that heritage. We work with historic homes and modern builds alike, providing Salisbury homeowners with roofing solutions built to last.",
  },
  {
    name: "Mocksville",
    slug: "mocksville-nc",
    county: "Davie County",
    zip: "27028",
    nearby: ["Winston-Salem", "Clemmons", "Lexington"],
    description: "Mocksville and Davie County are close to home for our team. The rural and suburban mix means roofing needs range from farmhouse repairs to new subdivision installations. No matter the project size, Mocksville homeowners get our full attention and best work.",
  },
  {
    name: "Denton",
    slug: "denton-nc",
    county: "Davidson County",
    zip: "27239",
    nearby: ["Lexington", "Thomasville", "Asheboro"],
    description: "Denton may be a smaller community, but the homeowners here deserve big-city quality roofing. As a Davidson County-based company, we're practically neighbors — which means fast response times and the personal attention that comes with hiring a truly local contractor.",
  },
];

export function getCityBySlug(slug: string) {
  return SERVICE_AREAS_DATA.find((city) => city.slug === slug);
}

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

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
