"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type AnimatedCounterProps = {
  end: number;
  duration?: number;           // in ms
  suffix?: string;             // "+", "%", etc.
  decimals?: number;           // 0 default
  locale?: string;             // "de-DE" default
  once?: boolean;              // true default
  className?: string;
};

export default function AnimatedCounter({
  end,
  duration = 1100,
  suffix = "",
  decimals = 0,
  locale = "de-DE",
  once = true,
  className,
}: AnimatedCounterProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);

  const [value, setValue] = useState(reduced ? end : 0);
  const hasRun = useRef(false);

  const formatter = useMemo(() => {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }, [locale, decimals]);

  useEffect(() => {
    if (reduced) {
      setValue(end);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (once && hasRun.current) return;

        hasRun.current = true;

        const start = performance.now();
        const from = 0;

        let raf = 0;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          // smooth easeOut
          const eased = 1 - Math.pow(1 - t, 3);

          const next = from + (end - from) * eased;
          setValue(next);

          if (t < 1) raf = requestAnimationFrame(tick);
          else setValue(end);
        };

        raf = requestAnimationFrame(tick);

        if (once) observer.disconnect();

        // cleanup for this run
        return () => cancelAnimationFrame(raf);
      },
      { threshold: 0.35 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [end, duration, once, reduced]);

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  // For thousands formatting, format after rounding:
  const displayNumber = formatter.format(
    decimals > 0 ? Number(display) : Number(display)
  );

  return (
    <span ref={ref} className={className}>
      {displayNumber}
      {suffix}
    </span>
  );
}
