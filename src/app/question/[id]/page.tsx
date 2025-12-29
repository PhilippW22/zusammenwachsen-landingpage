"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export default function QuestionRedirectPage() {
  const params = useParams();
  const questionId = params.id as string;

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isAndroid = /Android/i.test(ua);

    // Wenn wir HIER sind, ist die App NICHT installiert
    // (bei installierter App fängt iOS/Android den Link ab)

    if (isIOS) {
      window.location.href = siteConfig.iosStoreUrl;
    } else if (isAndroid) {
      window.location.href = siteConfig.androidStoreUrl;
    } else {
      // Desktop → zur /app Route (die dann zur Landing weiterleitet)
      window.location.href = "/app";
    }
  }, [questionId]);

  return (
    <main 
      className="min-h-screen flex items-center justify-center bg-[#fefbe9] text-center px-4"
      aria-label="Weiterleitung zur ZusammenWachsen App"
    >
      <div>
        <div className="mb-4 text-4xl">📱</div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          ZusammenWachsen öffnen...
        </h1>
        <p className="text-gray-700">
          Du wirst gleich in den Store weitergeleitet.
        </p>
      </div>
    </main>
  );
}