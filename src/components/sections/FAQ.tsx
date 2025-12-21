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
    q: "Wie lang sind die Inhalte?",
    a: "Kurz und alltagstauglich – so, dass du sie auch zwischen Tür und Angel nutzen kannst.",
  },
  {
    q: "Für welches Alter ist die App gedacht?",
    a: "Für Familien von Baby bis Teenager – die Themen sind entsprechend vielfältig.",
  },
  {
    q: "Gibt es eine Suchfunktion?",
    a: "Ja. Du kannst gezielt nach Themen oder Situationen suchen, wenn du schnell etwas brauchst.",
  },
  {
    q: "Kann ich Inhalte speichern?",
    a: "Ja. Mit Favoriten/Merkliste findest du deine wichtigsten Impulse jederzeit wieder.",
  },
  {
    q: "Kann ich Impulse teilen?",
    a: "Ja. Inhalte lassen sich direkt mit Freund*innen oder Familie teilen.",
  },
  {
    q: "Kommen neue Inhalte dazu?",
    a: "Ja. Die App wächst regelmäßig mit neuen Themen und Impulsen weiter.",
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
            Antworten auf häufige Fragen – kurz, klar und ohne Umwege.
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