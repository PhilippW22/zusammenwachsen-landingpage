"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

export default function QuestionRedirect() {
  useEffect(() => {
    const ua = navigator.userAgent;
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isAndroid = /Android/i.test(ua);

    if (isIOS) {
      window.location.href = siteConfig.iosStoreUrl;
    } else if (isAndroid) {
      window.location.href = siteConfig.androidStoreUrl;
    } else {
      window.location.href = "/";
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-xl font-semibold mb-2">
          ZusammenWachsen öffnen…
        </h1>
        <p className="text-gray-600">
          Du wirst gleich in den Store weitergeleitet.
        </p>
      </div>
    </main>
  );
}
