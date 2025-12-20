"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((p) => !p);

  // Wenn du auf einer Unterseite bist, führen Links sowieso zur Startseite zurück ("/#...")
  const homePrefix = pathname === "/" ? "" : "/";

  return (
    <>
      <div className="fixed top-5 right-5 z-50 md:hidden">
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          className="flex flex-col justify-between w-8 h-6 focus:outline-none z-50"
        >
          <span
            className={`h-[2px] w-full bg-gray-800 transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-[9px]" : ""
            }`}
          />
          <span
            className={`h-[2px] w-full bg-gray-800 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-full bg-gray-800 transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-30"
              onClick={closeMenu}
            />

            <motion.div
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-2xl z-40 flex flex-col items-start px-6 py-12 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                href={`${homePrefix}/#top`}
                onClick={closeMenu}
                className="text-lg text-gray-800 hover:text-[#c0897f]"
              >
                Startseite
              </Link>

              <Link
                href={`${homePrefix}/#funktionen`}
                onClick={closeMenu}
                className="text-lg text-gray-800 hover:text-[#c0897f]"
              >
                Über die App
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
