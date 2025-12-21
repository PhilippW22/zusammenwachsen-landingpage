"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const VALUES = [
  "Gewaltfreie Kommunikation",
  "Bindungs- & bedürfnisorientiert",
  "Stärkung statt Bewertung",
  "Einfühlsam & liebevoll",
  "Ohne erhobenen Zeigefinger",
] as const;

const AUTO_SLIDE_INTERVAL = 3000; // 2 Sekunden

export default function ValuesSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % VALUES.length);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + VALUES.length) % VALUES.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % VALUES.length);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="text-center text-lg md:text-xl font-semibold text-gray-900 mb-6">
        Unsere Werte
      </h3>

      {/* Längliche Card als subtiler Akzent */}
      <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-full px-8 py-4 border border-[#c0897f]/20 max-w-2xl mx-auto">
        <div className="relative flex items-center justify-between gap-6">
          {/* Left Arrow - dezent */}
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Vorheriger Wert"
            className="
              flex-shrink-0
              text-[#c0897f]/60 hover:text-[#c0897f]
              transition-colors
              cursor-pointer
            "
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
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Slideshow Content */}
          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-center px-4"
              >
                <span className="text-base md:text-lg font-semibold text-[#c0897f] whitespace-nowrap">
                  {VALUES[currentIndex]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow - dezent */}
          <button
            type="button"
            onClick={goToNext}
            aria-label="Nächster Wert"
            className="
              flex-shrink-0
              text-[#c0897f]/60 hover:text-[#c0897f]
              transition-colors
              cursor-pointer
            "
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
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}