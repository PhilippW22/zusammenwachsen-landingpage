"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import Section from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export default function Hero() {
  return (
    <Section
      id="top"
      tone="soft"
      containerSize="wide"
      fade="bottom"
      className="
    pt-20 md:pt-24
    bg-[url('/assets/bg/hero-gradient.webp')]
    bg-no-repeat
    bg-cover
    bg-[position:50%_20%]
    md:bg-[position:80%_35%]
  "
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Text */}
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
            <span>• Über 2.500 Impulse</span>
          </div>
        </div>

        {/* App Mockup */}
        <div className="flex justify-center lg:justify-end">
  <div className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[360px]">
    <Image
      src="/assets/screenshots/app-hero2.png"
      alt="ZusammenWachsen App – Vorschau"
      width={1200}
      height={1800}
      className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
      priority
    />
  </div>
</div>
        
      </div>
    </Section>
  );
}
