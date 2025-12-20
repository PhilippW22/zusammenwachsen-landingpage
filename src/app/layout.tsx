import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileNav from "@/components/layout/MobileNav";


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL("https://www.zusammenwachsenapp.de"),
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <MobileNav />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
