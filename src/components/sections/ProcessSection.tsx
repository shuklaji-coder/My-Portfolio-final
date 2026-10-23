"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Check, Sparkles, Compass } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress for drawing the vertical timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-28 md:py-36 px-6 md:px-10 bg-[#06241B] border-t border-champagne/10 overflow-hidden"
      aria-label="Workflow and Engineering Methodology"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-emerald-accent/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28 gap-6 border-b border-champagne/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-champagne font-mono mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent" />
              <span>05 / Process & Delivery</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-champagne-light font-light leading-tight">
              Surgical precision. <br />
              <span className="italic text-champagne text-gradient-champagne font-normal">
                From initial spark to global launch.
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-champagne/60">
            <Compass className="w-3.5 h-3.5 text-emerald-accent" />
            <span>5-Stage Structured Agile Lifecycle</span>
          </div>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Static Background Vertical Track */}
          <div className="absolute left-5 sm:left-6 md:left-1/2 top-4 bottom-8 w-[1.5px] -translate-x-1/2 bg-champagne/15" />

          {/* Animated Glowing Foreground Line that draws on scroll */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-5 sm:left-6 md:left-1/2 top-4 bottom-8 w-[2px] -translate-x-1/2 bg-gradient-to-b from-champagne via-emerald-accent to-champagne shadow-[0_0_12px_rgba(232,213,168,0.7)]"
          />

          {/* Timeline Nodes */}
          <div className="space-y-12 sm:space-y-16 md:space-y-24">
            {portfolioData.process.map((phase, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Node Badge */}
                  <div className="absolute left-5 sm:left-6 md:left-1/2 -translate-x-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#06241B] border-2 border-champagne flex items-center justify-center z-10 shadow-champagne-sm">
                    <span className="font-mono text-xs font-semibold text-champagne">
                      {phase.number}
                    </span>
                  </div>

                  {/* Content Card (offset on mobile to prevent overflow) */}
                  <div className="ml-11 sm:ml-14 md:ml-0 w-[calc(100%-2.75rem)] sm:w-[calc(100%-3.5rem)] md:w-1/2 md:px-10">
                    <div className="p-5 sm:p-8 rounded-2xl bg-[#0C3A2C]/60 border border-champagne/15 hover:border-champagne/35 transition-all shadow-card-luxury">
                      {/* Top Pill: Duration */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-full bg-[#06241B] border border-champagne/20 text-champagne">
                          {phase.duration}
                        </span>
                        <span className="text-xs font-mono text-champagne/40">
                          PHASE {phase.number}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl text-champagne-light font-light mb-1">
                        {phase.title}
                      </h3>
                      <p className="text-xs font-mono text-champagne/70 mb-3">
                        {phase.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-champagne/60 font-light leading-relaxed mb-5">
                        {phase.description}
                      </p>

                      {/* Tasks Checkmarks */}
                      <div className="space-y-2 pt-3 border-t border-champagne/10 mb-4">
                        {phase.tasks.map((task, tIdx) => (
                          <div key={tIdx} className="flex items-start gap-2 text-xs text-champagne/80">
                            <Check className="w-3.5 h-3.5 text-emerald-accent shrink-0 mt-0.5" />
                            <span>{task}</span>
                          </div>
                        ))}
                      </div>

                      {/* Milestone Outcome */}
                      <div className="p-3 rounded-xl bg-[#06241B] border border-champagne/15 text-[11px] font-mono text-champagne flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-champagne shrink-0" />
                        <span>
                          <strong className="text-champagne-light">Deliverable:</strong>{" "}
                          {phase.outcome}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
