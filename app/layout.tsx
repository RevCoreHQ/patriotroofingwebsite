import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: "Patriot Roofing & Home Repair | Lexington, NC",
    template: "%s | Patriot Roofing & Home Repair",
  },
  description:
    "Licensed & insured roofing contractor in Lexington, Greensboro & Winston-Salem, NC. Roof installation, replacement & repair. Free estimates.",
  keywords: [
    "roofing contractor",
    "roof repair",
    "roof replacement",
    "roofing company near me",
    "Lexington NC roofer",
    "Greensboro roofing",
    "Winston-Salem roofing",
    "emergency roofing",
    "gutter installation",
    "home repair NC",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: COMPANY.url,
    siteName: "Patriot Roofing & Home Repair",
    title: "Patriot Roofing & Home Repair | Lexington, NC",
    description:
      "Licensed & insured roofing contractor serving the NC Triad. Free estimates on roof installation, replacement & repair.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RoofingContractor"],
  name: COMPANY.name,
  url: COMPANY.url,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "316 W Davidson Ave",
    addressLocality: "Lexington",
    addressRegion: "NC",
    postalCode: "27295",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.8243,
    longitude: -80.2534,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  image: `${COMPANY.url}/og-image.png`,
  description:
    "Licensed & insured roofing contractor serving Lexington, Greensboro, Winston-Salem & the NC Triad. Roof installation, replacement, repair, kitchen & bathroom renovation, and home repairs.",
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Lexington", containedInPlace: { "@type": "State", name: "North Carolina" } },
    { "@type": "City", name: "Greensboro", containedInPlace: { "@type": "State", name: "North Carolina" } },
    { "@type": "City", name: "Winston-Salem", containedInPlace: { "@type": "State", name: "North Carolina" } },
    { "@type": "City", name: "High Point", containedInPlace: { "@type": "State", name: "North Carolina" } },
    { "@type": "City", name: "Thomasville", containedInPlace: { "@type": "State", name: "North Carolina" } },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "48",
    bestRating: "5",
  },
  sameAs: [COMPANY.instagram],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://api.leadconnectorhq.com" />
        <link rel="preconnect" href="https://api.leadconnectorhq.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://link.msgsndr.com" />
        <link rel="preconnect" href="https://link.msgsndr.com" crossOrigin="anonymous" />
        <link rel="preload" href="/media/hero-poster.webp" as="image" />
        <link
          rel="preload"
          href="https://assets.cdn.filesafe.space/UrIbmSbNwH6Sfvb4CBZw/media/69c3d51ebd26d6d9c343a44a.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href="https://assets.cdn.filesafe.space/UrIbmSbNwH6Sfvb4CBZw/media/69c169286f10170a0c2ebe00.webp"
          as="image"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
