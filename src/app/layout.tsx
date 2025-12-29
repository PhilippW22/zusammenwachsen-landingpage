import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import Footer from "@/components/layout/Footer";
import BottomNavBar from "@/components/layout/BottomNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Familienratgeber",
    "Eltern App",
    "Erziehung",
    "Bindungsorientiert",
    "Gewaltfreie Kommunikation",
    "Familienalltag",
    "Elternberatung",
  ],
  authors: [{ name: "ZusammenWachsen Team" }],
  creator: "ZusammenWachsen",
  metadataBase: new URL("https://www.zusammenwachsenapp.de"),
  alternates: {
    canonical: "https://www.zusammenwachsenapp.de",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://www.zusammenwachsenapp.de",
    siteName: siteConfig.name,
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/assets/og.jpg",
        width: 1200,
        height: 630,
        alt: "ZusammenWachsen – Familienratgeber App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/assets/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  appleWebApp: {
    title: "ZusammenWachsen",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "ZusammenWachsen",
    description: siteConfig.description,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    downloadUrl: [
      siteConfig.iosStoreUrl,
      siteConfig.androidStoreUrl
    ],
    sameAs: [
      siteConfig.iosStoreUrl,
      siteConfig.androidStoreUrl,
    ],
  };

  return (
    <html lang="de">
      <body>
        {/* Structured Data mit Next.js Script Komponente */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        <BottomNavBar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}