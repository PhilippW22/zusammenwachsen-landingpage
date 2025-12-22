"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

type Testimonial = {
  quote: string;
  name: string;
  source: "App Store" | "Google Play";
  rating: 5 | 4 | 3 | 2 | 1;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "So viele tolle Impulse und Beispielsätze! Die Sätze sind so gut formuliert, dass ich sie direkt anwenden kann. Inzwischen eine richtige Unterstützung im Familienalltag.",
    name: "Familie Ferdi",
    source: "App Store",
    rating: 5,
  },
  {
    quote:
      "Es tut gut, so einen Begleiter zu haben, wenn man als Eltern unsicher ist. Für mich als Mutter ist es eine große Unterstützung und erinnert mich immer wieder daran, gelassener und mit mehr Vertrauen auf mein Kind zu schauen.",
    name: "Nadinejen",
    source: "App Store",
    rating: 5,
  },
  {
    quote:
      "Wow – danke! Super Inhalte und so kompakt, dass wir sie gut im Alltag lesen können!",
    name: "Familie MfB",
    source: "App Store",
    rating: 5,
  },
];

const AUTO_ROTATE_INTERVAL = 5000; // 5 Sekunden

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center justify-center gap-1" aria-label={`${rating} von 5 Sternen`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={i < rating ? "text-[#c0897f]" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function RatingBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-xl border border-[#c0897f]/20 bg-white px-4 py-2 shadow-sm">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-[#c0897f] text-sm" aria-hidden="true">
            ★
          </span>
        ))}
      </div>
      <div className="border-l border-gray-200 pl-2">
        <div className="text-lg font-bold text-gray-900 leading-none">5,0</div>
        <div className="text-[10px] text-gray-500 leading-tight">im App Store</div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <Section id="testimonials" tone="soft" fade="both">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Das sagen Nutzer*innen
        </h2>
        <RatingBadge />
      </div>

      {/* Carousel */}
      <div className="mt-10 md:mt-12 max-w-3xl mx-auto px-4 sm:px-0">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Vorheriges Testimonial"
            className="
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12
              z-10
              w-10 h-10 md:w-12 md:h-12 rounded-full
              bg-white border border-gray-200 shadow-md
              flex items-center justify-center
              hover:bg-gray-50 hover:border-[#c0897f]
              transition-colors
              hidden sm:flex
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
              className="text-gray-600"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Nächstes Testimonial"
            className="
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12
              z-10
              w-10 h-10 md:w-12 md:h-12 rounded-full
              bg-white border border-gray-200 shadow-md
              flex items-center justify-center
              hover:bg-gray-50 hover:border-[#c0897f]
              transition-colors
              hidden sm:flex
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
              className="text-gray-600"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Card variant="gradient" className="p-6 sm:p-8 md:p-10 text-center min-h-[340px] sm:min-h-[360px] md:min-h-[380px] flex flex-col justify-center">
                  <Stars rating={currentTestimonial.rating} />
                  
                  <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed italic">
                    "{currentTestimonial.quote}"
                  </p>
                  
                  <div className="mt-5 sm:mt-6 text-xs sm:text-sm md:text-base text-gray-600">
                    <span className="font-semibold text-gray-900">
                      {currentTestimonial.name}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span>{currentTestimonial.source}</span>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Gehe zu Testimonial ${index + 1}`}
                className={`
                  h-2 rounded-full transition-all
                  ${
                    index === currentIndex
                      ? "bg-[#c0897f] w-8"
                      : "bg-gray-300 w-2 hover:bg-gray-400"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}