import Image from "next/image";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import Reveal from "../motion/Reveal";

type ShowcaseItem = {
  title: string;
  text: string;
  bullets?: string[];
  image: { src: string; alt: string };
};

const SHOWCASE: ShowcaseItem[] = [
  {
    title: "Mehr als 320 Themen in 12 Kategorien",
    text: "Von Alltag & Routinen bis Sicherheit & Prävention: übersichtlich strukturierte Impulse für den Familienalltag.",
    bullets: [
      "Bindungs- und bedürfnisorientiert",
      "Gewaltfreie Kommunikation",
    ],
    image: {
      src: "/assets/screenshots/shot-1.png",
      alt: "ZusammenWachsen – Überblick über Themen und Kategorien",
    },
  },
  {
    title: "Schnell finden mit der Suche",
    text: "Wenn es im Alltag gerade brennt: Suche gezielt nach Themen oder Situationen und finde in Sekunden passende Impulse.",
    bullets: [
      "Schnelle Orientierung im Alltag",
      "Gezielte Suche nach konkreten Situationen",
    ],
    image: {
      src: "/assets/screenshots/shot-2.png",
      alt: "ZusammenWachsen – Suche und Filter",
    },
  },
  {
    title: "Favoriten speichern & wiederfinden",
    text: "Speichere deine wichtigsten Impulse in der Merkliste und greife jederzeit darauf zurück – ganz ohne langes Suchen.",
    bullets: [
      "Persönliche Merkliste für wichtige Impulse",
      "Schnell wiederfinden, wenn es darauf ankommt",
    ],
    image: {
      src: "/assets/screenshots/shot-3.png",
      alt: "ZusammenWachsen – Impulse und Favoriten",
    },
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-700">
      {items.map((b) => (
        <li key={b} className="flex gap-2">
          <span aria-hidden="true" className="text-[#c0897f] mt-1">
            •
          </span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

export default function FeatureShowcase() {
  return (
    <Section id="showcase">
      <div>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
          Funktionen, die im Alltag helfen
        </h2>
        <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
          Kurze Erklärungen – direkt mit passenden Screens untermauert.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        {SHOWCASE.map((item, idx) => {
          const reverse = idx % 2 === 1;
          const direction = idx % 2 === 0 ? "right" : "left"; // 1 rechts, 2 links, 3 rechts

          return (
            <Reveal key={item.title} direction={direction} delay={idx * 0.06}>
            <Card key={item.title} variant="gradient" className="p-6 md:p-8">
              <div
                className={cn(
                  "grid items-center gap-8 lg:grid-cols-2",
                  reverse && "lg:[&>*:first-child]:order-2"
                )}
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                  {item.bullets?.length ? <BulletList items={item.bullets} /> : null}
                </div>

                <div className="flex justify-center">
                  <div className="w-full max-w-[320px] md:max-w-[360px]">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={900}
                      height={1800}
                      loading="lazy"
                      className="w-full h-auto rounded-2xl border"
                    />
                  </div>
                </div>
              </div>
            </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}