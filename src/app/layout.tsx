import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import BottomNavBar from "@/components/layout/BottomNavBar";


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
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  appleWebApp: {
    title: 'ZusammenWachsen',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <BottomNavBar />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}