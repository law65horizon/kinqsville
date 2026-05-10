import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Asaba's Finest Dining`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Nigerian restaurant Asaba",
    "Kinqsville restaurant",
    "Delta State restaurant",
    "Nigerian cuisine",
    "Asaba dining",
    "restaurant lounge Asaba",
    "exotic winery Asaba",
    "Okpanam Road restaurant",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Asaba's Finest Dining`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Asaba's Finest Dining`,
    description: siteConfig.description,
  },
  alternates: { canonical: siteConfig.url },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    addressCountry: "NG",
  },
  telephone: siteConfig.phones.map((p) => p.number),
  servesCuisine: [siteConfig.cuisine, "African"],
  priceRange: siteConfig.priceRange,
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "11:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday","Saturday"], opens: "11:00", closes: "00:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "12:00", closes: "22:00" },
  ],
  sameAs: [siteConfig.instagram],
  geo: { "@type": "GeoCoordinates", latitude: siteConfig.coordinates.lat, longitude: siteConfig.coordinates.lng },
  acceptsReservations: true,
  menu: `${siteConfig.url}/menu`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream font-body text-charcoal antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
