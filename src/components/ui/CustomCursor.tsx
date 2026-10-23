"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "text">("default");
  const [cursorLabel, setCursorLabel] = useState<string>("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring for outer ring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Hide if touch device or reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, [data-cursor]");
      const customLabel = target.closest("[data-cursor-label]")?.getAttribute("data-cursor-label");

      if (customLabel) {
        setCursorState("text");
        setCursorLabel(customLabel);
      } else if (interactive) {
        setCursorState("hover");
        setCursorLabel("");
      } else {
        setCursorState("default");
        setCursorLabel("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Champagne Dot */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-champagne mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorState === "hover" ? 10 : cursorState === "text" ? 0 : 6,
          height: cursorState === "hover" ? 10 : cursorState === "text" ? 0 : 6,
          opacity: cursorState === "text" ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Trailing Outer Ring */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center font-sans uppercase font-medium tracking-widest text-[9px] text-[#06241B]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorState === "text" ? 64 : cursorState === "hover" ? 44 : 26,
          height: cursorState === "text" ? 64 : cursorState === "hover" ? 44 : 26,
          borderColor: cursorState === "hover" ? "rgba(232, 213, 168, 0.9)" : "rgba(232, 213, 168, 0.45)",
          borderWidth: cursorState === "text" ? "0px" : "1.5px",
          backgroundColor: cursorState === "text" ? "rgba(232, 213, 168, 0.95)" : "rgba(232, 213, 168, 0.05)",
          backdropFilter: cursorState === "text" ? "blur(4px)" : "blur(0px)",
        }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 300,
          mass: 0.4,
        }}
      >
        {cursorState === "text" && cursorLabel && (
          <span className="select-none font-semibold text-[#06241B]">{cursorLabel}</span>
        )}
      </motion.div>
    </>
  );
}
