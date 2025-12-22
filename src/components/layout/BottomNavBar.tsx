"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

type NavItem = { href: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { href: "/#top", label: "Start" },
  { href: "/#funktionen", label: "Überblick" },
  { href: "/#faq", label: "FAQ" },
];

// Scroll-Konfiguration
const SCROLL_CONFIG = {
  SHOW_AFTER_PX: 80,
  HIDE_AT_TOP_PX: 20,
  FOOTER_HIDE_OFFSET: 40,
} as const;

export default function BottomNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const navItems = useMemo(() => NAV_ITEMS, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;

      // 1) ganz oben ausblenden (Hero)
      if (y <= SCROLL_CONFIG.HIDE_AT_TOP_PX) {
        setIsVisible(false);
        setIsOpen(false);
        return;
      }

      // 2) wenn Footer in Sicht -> ausblenden
      const footer = document.querySelector("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const footerIsVisible =
          rect.top < window.innerHeight - SCROLL_CONFIG.FOOTER_HIDE_OFFSET;

        if (footerIsVisible) {
          setIsVisible(false);
          setIsOpen(false);
          return;
        }
      }

      // 3) sonst abhängig von Scroll-Position einblenden
      setIsVisible(y >= SCROLL_CONFIG.SHOW_AFTER_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const toggle = () => setIsOpen((v) => !v);
  const close = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="mobile-bottom-bar"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 14 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-x-0 bottom-4 z-50"
        >
          {/* Outer container centered */}
          <div className="mx-auto w-fit px-4">
            {/* Bar */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.9 }}
              className="
                flex items-center gap-2
                rounded-full
                bg-brand-primary/50           // ← Viel transparenter!
                backdrop-blur-md              // ← Stärkerer Blur
                border border-white/30        // ← Subtiler Border für Glass-Look
                shadow-lg
                px-2 py-2
                scale-[0.8]
                origin-center 
                "
              role="navigation"
              aria-label="Mobile Schnellnavigation"
            >
              {/* Download button: Text wenn geschlossen, Icon wenn offen */}
              <motion.a
                href={siteConfig.androidStoreUrl}
                className="
                  inline-flex items-center justify-center
                  rounded-full
                  bg-gradient-to-r from-white to-gray-200     // ← Gradient von weiß nach grau
                  text-gray-900
                  hover:scale-95                               // ← Verkleinert sich beim Hover
                  transition-all duration-200 ease-in-out      // ← Smooth Animation
                  whitespace-nowrap
                  font-bold
                  shadow-sm
                "
                style={{
                  width: isOpen ? "48px" : "auto",
                  height: "48px",
                  padding: isOpen ? "0" : "0 24px",
                }}
                aria-label={isOpen ? "Download App" : "Download (Play Store)"}
              >
                {isOpen ? <DownloadIcon /> : "Download"}
              </motion.a>

              {/* Middle nav (immer gerendert, smooth reveal) */}
<motion.div
  className="overflow-hidden"
  initial={false}
  animate={{
    maxWidth: isOpen ? 260 : 0,
    opacity: isOpen ? 1 : 0,
  }}
  transition={{
    duration: 0.85,
    ease: [0.16, 1, 0.3, 1], // "easeOutCubic"-Feeling
  }}
>
  <motion.div
    initial={false}
    animate={{ x: isOpen ? 0 : -8 }}
    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="flex items-center gap-5 px-3">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={close}
          className="
            text-sm font-bold
            text-white/85
            hover:text-white
            transition-colors
            whitespace-nowrap
          "
        >
          {item.label}
        </Link>
      ))}
    </div>
  </motion.div>
</motion.div>

              {/* Right button: burger or X */}
              <button
                type="button"
                onClick={toggle}
                aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={isOpen}
                className="
                  inline-flex items-center justify-center
                  rounded-full
                  bg-[#2a2a2a]
                  w-12 h-12
                  text-white
                  hover:bg-[#333333]
                  transition-colors
                  flex-shrink-0
                  cursor-pointer
                "
              >
                {!isOpen ? <BurgerIcon /> : <CloseIcon />}
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function BurgerIcon() {
  return (
    <span aria-hidden="true" className="flex flex-col justify-center gap-1.5">
      <span className="block h-[2px] w-5 bg-white/90 rounded" />
      <span className="block h-[2px] w-5 bg-white/90 rounded" />
      <span className="block h-[2px] w-5 bg-white/90 rounded" />
    </span>
  );
}

function CloseIcon() {
  return (
    <span aria-hidden="true" className="text-2xl leading-none text-white/90">
      ×
    </span>
  );
}
