"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealOnScrollProps {
  children: React.ReactNode;
  /** Delay before the animation starts (seconds) */
  delay?: number;
  /** Direction the element slides in from */
  direction?: "up" | "down" | "left" | "right";
  /** Distance in pixels for the slide */
  distance?: number;
  /** CSS class to pass through */
  className?: string;
  /** Trigger threshold (0–1) */
  threshold?: number;
  /** Whether to trigger only once */
  once?: boolean;
}

const directionMap = {
  up: { y: 1, x: 0 },
  down: { y: -1, x: 0 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
};

export function RevealOnScroll({
  children,
  delay = 0,
  direction = "up",
  distance = 32,
  className = "",
  threshold = 0.12,
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold,
  });

  const { x: dx, y: dy } = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        x: dx * distance,
        y: dy * distance,
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: dx * distance, y: dy * distance }
      }
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
