import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Patriot Roofing & Home Repair | Trusted Roofing Contractor in Lexington, NC",
    template: "%s | Patriot Roofing & Home Repair",
  },
  description:
    "Licensed & insured roofing contractor serving Lexington, Greensboro, Winston-Salem & the NC Triad. Roof installation, replacement, repair & emergency services. Free estimates.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Patriot Roofing & Home Repair",
    title: "Patriot Roofing & Home Repair | Trusted Roofing Contractor in NC",
    description:
      "Licensed & insured roofing contractor serving the NC Triad. Free estimates on roof installation, replacement, repair & more.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
