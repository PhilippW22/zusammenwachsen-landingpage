"use client";

import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

type Direction = "up" | "down" | "left" | "right";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
} & Omit<MotionProps, "initial" | "animate">;

function getOffset(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
  }
}

export default function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.55,
  distance = 22,
  once = true,
  ...props
}: RevealProps) {
  const reduced = useReducedMotion();
  const offset = getOffset(direction, distance);

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? false : { opacity: 0, ...offset }}
      whileInView={reduced ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={
        reduced
          ? undefined
          : { duration, delay, ease: [0.22, 1, 0.36, 1] } // smooth “easeOut” curve
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
