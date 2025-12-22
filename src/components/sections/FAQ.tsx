"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

type FAQItem = {
  q: string;
  a: string;
};

const FAQ: FAQItem[] = [
  {
    q: "Wer steckt hinter ZusammenWachsen?",
    a: "Wir sind Michèle und Philipp – Eltern einer kleinen Tochter. Michèle ist Pädagogin, Philipp App-Entwickler. Aus dem Wunsch heraus, Eltern im Alltag liebevoll, ehrlich und ohne Druck zu stärken, ist ZusammenWachsen entstanden.",
  },
  {
    q: "Warum gibt es diese App?",
    a: "Im Familienalltag bleibt oft wenig Zeit für lange Ratgeber. ZusammenWachsen sammelt verlässliche, kurze Impulse – verständlich, alltagsnah und ohne Bewertung, aber mit klarer Haltung.",
  },
  {
    q: "Was ist euch bei den Inhalten wichtig?",
    a: "Wir möchten Bezugspersonen in ihrer Intuition bestärken. Nicht sagen, was du nicht tun sollst – sondern Anregungen geben, was du in herausfordernden Situationen konkret tun kannst.",
  },
  {
    q: "Was macht ZusammenWachsen besonders?",
    a: "Du findest über 320 Alltagsthemen in 12 Kategorien – mit kurzen Impulsen und Beispielsätzen, die du direkt anwenden kannst. Die Inhalte sind inspiriert von bindungs- und bedürfnisorientierter Begleitung, gewaltfreier Kommunikation und selbstbestimmtem Lernen.",
  },
  {
    q: "Was kostet die App?",
    a: "Nichts. ZusammenWachsen ist kostenlos, werbefrei und ohne Anmeldung nutzbar – damit stärkende Impulse für alle zugänglich sind.",
  },
  {
    q: "Wie kannst du uns unterstützen?",
    a: "Wenn dir die App hilft, freuen wir uns über eine Bewertung im App Store / Play Store, eine Empfehlung an Freund*innen – oder einen freiwilligen finanziellen Beitrag. So wächst ZusammenWachsen mit euch weiter.",
  },
];

function FAQItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card variant="gradient" className="overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full cursor-pointer px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between gap-4">
          <span className="font-semibold text-gray-900">{item.q}</span>
          
          {/* Moderner SVG-Pfeil mit smooth Rotation */}
          <motion.span
            aria-hidden="true"
            className="shrink-0 text-[#c0897f]"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {/* Antwort-Box */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white mx-4 mb-4 px-4 py-4 rounded-xl shadow-sm"
            >
              <p className="text-gray-700 leading-relaxed">{item.a}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

export default function FAQSection() {
  return (
    <Section id="faq" tone="soft" fade="both">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
            FAQ
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
            Kurz erklärt: Haltung, Hintergründe und warum ZusammenWachsen im Alltag unterstützt.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4">
        {FAQ.map((item) => (
          <FAQItem key={item.q} item={item} />
        ))}
      </div>
    </Section>
  );
}