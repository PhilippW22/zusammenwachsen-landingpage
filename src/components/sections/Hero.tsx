"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import Section from "@/components/ui/Section";

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
          <p className="text-base sm:text-lg font-semibold tracking-tight text-gray-900">
            <span className="break-words">ZusammenWachsen</span>
            <span className="text-gray-700"> – dein Familienratgeber</span>
          </p>

          <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Kurze, liebevolle Impulse für den Familienalltag.
          </h1>

          {/* Store Badges */}
          <div className="mt-8 flex items-center gap-3">
            <a
              href={siteConfig.androidStoreUrl}
              aria-label="Download im Google Play Store"
              className="inline-flex transition-opacity hover:opacity-80"
            >
              <Image
                src="/assets/download/googleplay.png"
                alt="Get it on Google Play"
                width={600}
                height={180}
                quality={90}
                sizes="(max-width: 375px) 144px, (max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
                className="h-9 xs:h-10 sm:h-12 md:h-14 w-auto"
                priority
              />
            </a>

            <a
              href={siteConfig.iosStoreUrl}
              aria-label="Download im Apple App Store"
              className="inline-flex transition-opacity hover:opacity-80"
            >
              <Image
                src="/assets/download/appstore.svg"
                alt="Download on the App Store"
                width={600}
                height={180}
                quality={90}
                sizes="(max-width: 375px) 144px, (max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
                className="h-9 xs:h-10 sm:h-12 md:h-14 w-auto"
                priority
              />
            </a>
          </div>
        </div>

        {/* App Mockup - optimiert */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[360px]">
            <Image
              src="/assets/screenshots/app-hero2.webp"
              alt="ZusammenWachsen App – Vorschau"
              width={1200}
              height={1800}
              quality={85}
              sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 360px"
              className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
}