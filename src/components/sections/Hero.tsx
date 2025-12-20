"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";

export default function Hero() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) setShowAnimation(false);
  }, []);

  return (
    <Section id="top" className="pt-20 md:pt-24" tone="soft" containerSize="wide">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-gray-700">
            ZusammenWachsen – dein Familienratgeber
          </p>

          <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Kurze, liebevolle Impulse für den Familienalltag.
          </h1>

          <p className="mt-5 text-base md:text-lg text-gray-700 leading-relaxed max-w-xl">
            {siteConfig.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <ButtonLink href={siteConfig.androidStoreUrl} variant="primary">
              Jetzt im Play Store
            </ButtonLink>
            <ButtonLink href={siteConfig.iosStoreUrl} variant="secondary">
              Jetzt im App Store
            </ButtonLink>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            <span>• 320+ Themen</span>
            <span>• 12 Kategorien</span>
            <span>• Favoriten, Suche, Teilen</span>
          </div>
        </div>

        {showAnimation && (
          <Card className="overflow-hidden p-2 md:p-3">
            <Image
              src="/assets/animation/app-preview.gif"
              alt="ZusammenWachsen App Vorschau"
              width={900}
              height={1800}
              className="w-full h-auto rounded-xl"
              priority
              unoptimized
            />
          </Card>
        )}
      </div>
    </Section>
  );
}
