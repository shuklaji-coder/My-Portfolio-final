"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, TrendingUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const testimonials = portfolioData.testimonials;

  // Auto-slide every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="relative py-28 md:py-36 px-6 md:px-10 bg-[#041C15] border-t border-champagne/10 overflow-hidden"
      aria-label="Client Endorsements and Testimonials"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-emerald-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-champagne font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent" />
            <span>06 / Endorsements</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-champagne-light font-light leading-tight">
            Client Perspectives. <br />
            <span className="italic text-champagne text-gradient-champagne font-normal">
              Trust forged through delivery.
            </span>
          </h2>
        </div>

        {/* Carousel Showcase Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative rounded-3xl p-8 sm:p-14 bg-[#0C3A2C]/60 border border-champagne/20 shadow-card-luxury overflow-hidden"
        >
          {/* Subtle Quote Icon Watermark */}
          <div className="absolute -bottom-6 -right-6 text-champagne/5 pointer-events-none">
            <Quote className="w-48 h-48" />
          </div>

          <div className="relative z-10 min-h-[260px] flex flex-col justify-between">
            {/* Top Metric Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#06241B] border border-champagne/15 text-xs font-mono text-champagne w-fit mb-6">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-accent" />
              <span>{current.metric}</span>
            </div>

            {/* Testimonial Quote with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45 }}
                className="font-serif text-xl sm:text-2xl md:text-3xl text-champagne-light font-light leading-relaxed mb-8 italic"
              >
                &ldquo;{current.quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>

            {/* Author Profile Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-champagne/10">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-champagne/30 bg-[#06241B]">
                  <Image
                    src={current.avatar}
                    alt={current.author}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-champagne font-medium">
                    {current.author}
                  </h4>
                  <p className="text-xs font-mono text-champagne/60">
                    {current.role} • {current.company}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-champagne/25 bg-[#06241B] flex items-center justify-center text-champagne hover:border-champagne hover:bg-champagne hover:text-[#06241B] transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-champagne/25 bg-[#06241B] flex items-center justify-center text-champagne hover:border-champagne hover:bg-champagne hover:text-[#06241B] transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators / Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-champagne" : "w-2 bg-champagne/20"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
