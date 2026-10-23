"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  FileCode,
  Palette,
  Sparkles,
  Layers,
  Server,
  Database,
  Zap,
  Smartphone,
  Box,
  Cloud,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

// Icon resolver for category skill cards
const iconMap: Record<string, React.ElementType> = {
  Code2,
  FileCode,
  Palette,
  Sparkles,
  Layers,
  Server,
  Database,
  Zap,
  Smartphone,
  Box,
  Cloud,
  CheckCircle2,
  Cpu,
};

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { marqueeRow1, marqueeRow2, categories } = portfolioData.skills;

  // Duplicate items for seamless continuous marquee loop
  const loopRow1 = [...marqueeRow1, ...marqueeRow1, ...marqueeRow1];
  const loopRow2 = [...marqueeRow2, ...marqueeRow2, ...marqueeRow2];

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-28 md:py-36 bg-[#041C15] overflow-hidden border-t border-champagne/10"
      aria-label="Technical Skills and Core Stack"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-emerald-accent/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-champagne font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent" />
            <span>02 / Capabilities & Tooling</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-champagne-light font-light leading-tight">
            The modern stack. <br />
            <span className="italic text-champagne text-gradient-champagne font-normal">
              Engineered for velocity & durability.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-champagne/60 max-w-xl mx-auto leading-relaxed">
            I select battle-tested technologies that balance developer velocity with enterprise-grade stability and zero-lag user interfaces.
          </p>
        </div>
      </div>

      {/* Infinite Dual-Row Marquee */}
      <div className="relative w-full overflow-hidden py-4 space-y-4 mb-24">
        {/* Left & Right gradient edge fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#041C15] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#041C15] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Leftward moving */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-4 shrink-0 animate-marquee-left group-hover:[animation-play-state:paused]">
            {loopRow1.map((item, idx) => (
              <div
                key={`r1-${idx}`}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#0C3A2C]/60 border border-champagne/15 backdrop-blur-sm hover:border-champagne/50 hover:bg-[#0C3A2C] transition-all cursor-default select-none shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent" />
                <span className="text-xs uppercase tracking-wider font-mono text-champagne-light font-medium">
                  {item.name}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-champagne/40 bg-[#06241B] px-2 py-0.5 rounded-md border border-champagne/10">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward moving */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-4 shrink-0 animate-marquee-right group-hover:[animation-play-state:paused]">
            {loopRow2.map((item, idx) => (
              <div
                key={`r2-${idx}`}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#0C3A2C]/60 border border-champagne/15 backdrop-blur-sm hover:border-champagne/50 hover:bg-[#0C3A2C] transition-all cursor-default select-none shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                <span className="text-xs uppercase tracking-wider font-mono text-champagne-light font-medium">
                  {item.name}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-champagne/40 bg-[#06241B] px-2 py-0.5 rounded-md border border-champagne/10">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grouped Categorized Skill Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + catIdx * 0.15 }}
              className="p-8 rounded-2xl bg-[#0C3A2C]/40 border border-champagne/15 hover:border-champagne/35 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-champagne/10">
                  <h3 className="font-serif text-xl sm:text-2xl text-champagne-light font-normal">
                    {cat.title}
                  </h3>
                  <span className="text-[10px] uppercase font-mono text-champagne/50 tracking-widest">
                    0{catIdx + 1}
                  </span>
                </div>
                <p className="text-xs text-champagne/60 mb-6 font-light leading-relaxed">
                  {cat.subtitle}
                </p>

                {/* Skill List */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => {
                    const IconComponent = iconMap[skill.iconName] || Cpu;
                    return (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-xl bg-[#06241B]/70 border border-champagne/10 hover:border-champagne/30 transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-[#0C3A2C] border border-champagne/20 flex items-center justify-center text-champagne group-hover:text-emerald-accent transition-colors">
                              <IconComponent className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-medium text-champagne-light">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full bg-champagne/10 text-champagne border border-champagne/20">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-champagne/55 mt-2 pl-9 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-champagne/10 flex items-center justify-between text-[11px] font-mono text-champagne/50">
                <span>Production Tested</span>
                <span className="text-emerald-accent">100% Type-Safe</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
