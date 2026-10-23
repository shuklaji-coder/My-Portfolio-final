"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Server,
  Smartphone,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const serviceIcons = [Globe, Server, Smartphone, Sparkles];

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-28 md:py-36 px-6 md:px-10 bg-[#041C15] border-t border-champagne/10 overflow-hidden"
      aria-label="Services & Engineering Capabilities"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-emerald-accent/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6 border-b border-champagne/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-champagne font-mono mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent" />
              <span>04 / Services & Expertise</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-champagne-light font-light leading-tight">
              High-caliber engineering. <br />
              <span className="italic text-champagne text-gradient-champagne font-normal">
                Tailored for discerning teams.
              </span>
            </h2>
          </div>
          <p className="text-xs uppercase tracking-widest font-mono text-champagne/50 max-w-xs">
            FULL LIFECYCLE EXECUTION • ZERO OUTSOURCING • DIRECT COLLABORATION
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.services.map((service, idx) => {
            const IconComponent = serviceIcons[idx % serviceIcons.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * idx }}
                className="group relative p-8 sm:p-10 rounded-3xl bg-[#0C3A2C]/40 border border-champagne/15 hover:border-champagne/40 transition-all duration-500 flex flex-col justify-between shadow-card-luxury"
              >
                <div>
                  {/* Top Row: Service Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-3xl sm:text-4xl font-light text-champagne/40 group-hover:text-champagne transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#06241B] border border-champagne/20 flex items-center justify-center text-champagne group-hover:border-champagne group-hover:bg-champagne group-hover:text-[#06241B] transition-all duration-300 shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-champagne-light font-light mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-champagne/70 mb-4 leading-relaxed">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-champagne/60 leading-relaxed font-light mb-8">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-champagne/40 block mb-2">
                      Key Deliverables
                    </span>
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-champagne/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-accent shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Timeline & Ideal For */}
                <div className="pt-6 border-t border-champagne/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-champagne/60">
                    <Clock className="w-3.5 h-3.5 text-champagne" />
                    <span>Est. Timeline: {service.timeline}</span>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-champagne hover:text-champagne-light transition-colors group/cta"
                  >
                    <span>Inquire Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
