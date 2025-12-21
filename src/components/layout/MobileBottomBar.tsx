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

export default function MobileBottomBar() {
  // ✅ Tuning: so erscheint die Bar "früher"
  const SHOW_AFTER_PX = 80; // kleiner = früher sichtbar beim Runterscrollen
  const HIDE_AT_TOP_PX = 20; // ausblenden ganz oben im Hero

  // Footer-Hide: wenn Footer im Viewport auftaucht, Bar ausblenden
  const FOOTER_HIDE_OFFSET = 40;

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const navItems = useMemo(() => NAV_ITEMS, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;

      // 1) ganz oben ausblenden (Hero)
      if (y <= HIDE_AT_TOP_PX) {
        setIsVisible(false);
        setIsOpen(false);
        return;
      }

      // 2) wenn Footer in Sicht -> ausblenden
      const footer = document.querySelector("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const footerIsVisible = rect.top < window.innerHeight - FOOTER_HIDE_OFFSET;

        if (footerIsVisible) {
          setIsVisible(false);
          setIsOpen(false);
          return;
        }
      }

      // 3) sonst abhängig von Scroll-Position einblenden
      setIsVisible(y >= SHOW_AFTER_PX);
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
          className="fixed inset-x-0 bottom-4 z-50 md:hidden"
        >
          {/* Outer container centered */}
          <div className="mx-auto w-fit px-4">
            {/* Bar */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 520, damping: 38 }}
              className="
                flex items-center gap-2
                rounded-full
                bg-[#1f1f1f]/90
                backdrop-blur
                shadow-lg
                px-2 py-2
                scale-[0.8]
                origin-center
              "
              role="navigation"
              aria-label="Mobile Schnellnavigation"
            >
              {/* Download pill */}
              <a
                href={siteConfig.androidStoreUrl}
                className="
                  inline-flex items-center justify-center
                  rounded-full
                  bg-white
                  px-6 py-3
                  text-sm font-semibold text-gray-900
                  hover:opacity-90
                  transition-opacity
                  whitespace-nowrap
                "
                aria-label="Download (Play Store)"
              >
                Download
              </a>

              {/* Middle nav only when open */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="nav"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.18 }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-center gap-5 px-3">
                      {navItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={close}
                          className="
                            text-sm font-semibold
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
                )}
              </AnimatePresence>

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
