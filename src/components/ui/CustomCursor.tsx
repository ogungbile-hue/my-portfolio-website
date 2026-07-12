"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show on devices with a fine pointer (no touch)
    const hasPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasPointer) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button']");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner dot — follows cursor instantly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-copper"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovering ? 5 : 8,
          height: isHovering ? 5 : 8,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ width: { duration: 0.15 }, height: { duration: 0.15 } }}
      />

      {/* Outer ring — follows with spring physics */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          width: isHovering ? 50 : 32,
          height: isHovering ? 50 : 32,
          borderColor: isHovering
            ? "var(--copper)"
            : "rgba(255, 107, 53, 0.35)",
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{
          width: { duration: 0.15 },
          height: { duration: 0.15 },
          borderColor: { duration: 0.15 },
        }}
      />
    </>
  );
}
