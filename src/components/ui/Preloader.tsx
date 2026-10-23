"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Quick progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        // Organic acceleration
        const increment = Math.max(1, Math.floor((100 - prev) * 0.18));
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#06241B] text-champagne select-none"
        >
          {/* Subtle ambient glow in center */}
          <div className="absolute w-96 h-96 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />

          {/* Monogram Box */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-24 h-24 rounded-2xl border border-champagne/30 bg-[#0C3A2C]/60 backdrop-blur-md flex items-center justify-center shadow-champagne-sm mb-6"
            >
              {/* Inner glowing accent */}
              <div className="absolute inset-0 rounded-2xl border border-champagne/20 animate-pulse-subtle" />
              <span className="font-serif text-3xl font-light tracking-widest text-champagne-light">
                RS<span className="text-emerald-accent font-sans text-xl">.</span>
              </span>
            </motion.div>

            {/* Name & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center"
            >
              <h2 className="font-serif text-xl tracking-[0.25em] uppercase text-champagne-light font-light">
                Rohan Shukla
              </h2>
              <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-champagne/60 mt-1">
                Full-Stack Developer
              </p>
            </motion.div>

            {/* Luxury Counter & Progress Line */}
            <div className="w-56 mt-8 flex flex-col items-center">
              <div className="w-full h-[1px] bg-champagne/15 relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-champagne/50 via-champagne to-emerald-accent"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              <div className="w-full flex justify-between items-center mt-2.5 text-[10px] tracking-widest uppercase font-mono text-champagne/60">
                <span>Initializing</span>
                <span className="text-champagne font-medium">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
