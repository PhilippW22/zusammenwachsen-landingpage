"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

export default function AppRedirectPage() {
  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/i.test(ua) && !window.MSStream;
    const isAndroid = /android/i.test(ua);

    if (isIOS) {
      window.location.href = siteConfig.iosStoreUrl;
    } else if (isAndroid) {
      window.location.href = siteConfig.androidStoreUrl;
    } else {
      // Desktop → Landing Page
      window.location.href = "https://www.zusammenwachsenapp.de";
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fefbe9] px-4">
      <div className="text-center">
        <div className="mb-4 text-4xl">📱</div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Zur ZusammenWachsen App...
        </h1>
        <p className="text-gray-700">
          Du wirst gleich weitergeleitet.
        </p>
      </div>
    </main>
  );
}