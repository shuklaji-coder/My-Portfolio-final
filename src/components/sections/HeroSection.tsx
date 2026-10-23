"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Code, Cpu, ShieldCheck, Zap } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { HeroCanvas } from "../ui/HeroCanvas";
import { portfolioData } from "@/data/portfolio";

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = portfolioData.personal.rotatingTitles;

  // Rotating roles with smooth interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  const headlineWords = ["Architecting", "Resilient", "Systems", "&", "Aesthetic", "Webs."];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-10 px-6 md:px-10 overflow-hidden bg-[#06241B]"
      aria-label="Introduction & Hero"
    >
      {/* Interactive Canvas Particles (Champagne Stars & Emerald Dust) */}
      <HeroCanvas />

      {/* Cinematic Ambient Background: Glowing Radial Orbs */}
      <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] rounded-full bg-emerald-500/10 blur-[140px] pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-10 -right-24 w-[600px] h-[600px] rounded-full bg-[#E8D5A8]/10 blur-[160px] pointer-events-none animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-[#0C3A2C]/60 blur-[170px] pointer-events-none" />

      {/* Subtle Architectural Corner Grids */}
      <div className="absolute top-24 left-10 text-[10px] uppercase font-mono tracking-widest text-champagne/35 hidden xl:flex items-center gap-2 pointer-events-none z-10">
        <Terminal className="w-3.5 h-3.5 text-emerald-accent" />
        <span>SYS.OK • PORTFOLIO V2.4</span>
      </div>
      <div className="absolute top-24 right-10 text-[10px] uppercase font-mono tracking-widest text-champagne/35 hidden xl:flex items-center gap-2 pointer-events-none z-10">
        <Code className="w-3.5 h-3.5 text-champagne" />
        <span>REACT • NEXT.JS • JAVA • SPRING</span>
      </div>

      {/* Main Content Split Layout: Text on Left, Rohan's Portrait on Right */}
      <div className="max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center z-10 pt-2 sm:pt-4 pb-6">
        
        {/* Left Column: Headline, Bio & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Availability / Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C3A2C]/85 border border-champagne/25 shadow-champagne-sm mb-4 sm:mb-6 backdrop-blur-md hover:border-champagne/50 transition-all cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-accent"></span>
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-champagne-light font-sans font-medium">
              Available For High-Impact Contracts
            </span>
            <span className="text-[10px] font-mono text-champagne/50 hidden sm:inline">
              • 12h Response
            </span>
          </motion.div>

          {/* Huge Serif Headline with Word Reveal Animation */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.08] text-champagne-light max-w-2xl">
            {headlineWords.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.75,
                  delay: 0.2 + idx * 0.08,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className={`inline-block mr-2 sm:mr-3.5 hover:scale-105 transition-transform duration-300 cursor-default ${
                  word === "Resilient" || word === "Aesthetic"
                    ? "italic font-normal text-gradient-champagne"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheading with Rotating Role effect */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-5 flex flex-wrap items-center gap-2 text-base sm:text-lg md:text-xl text-champagne/85 font-light"
          >
            <span>I am Rohan Shukla —</span>
            <div className="h-8 overflow-hidden inline-flex items-center">
              <motion.span
                key={currentRoleIndex}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -25, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="font-medium text-champagne text-gradient-champagne underline decoration-champagne/40 decoration-1 underline-offset-4"
              >
                {roles[currentRoleIndex]}
              </motion.span>
            </div>
          </motion.div>

          {/* Tagline / Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-4 text-sm sm:text-base text-champagne/65 max-w-xl leading-relaxed"
          >
            {portfolioData.personal.tagline}
          </motion.p>

          {/* Action CTAs: Champagne Filled & Outline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <MagneticButton
              href="#projects"
              pullStrength={0.25}
              className="px-8 py-4 rounded-full bg-champagne text-[#06241B] font-medium uppercase tracking-widest text-xs shadow-champagne-md hover:bg-champagne-light transition-all duration-300 group"
            >
              <span className="flex items-center justify-center gap-2">
                <span>Explore Flagships</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1" />
              </span>
            </MagneticButton>

            <MagneticButton
              href="#contact"
              pullStrength={0.25}
              className="px-8 py-4 rounded-full border border-champagne/40 bg-[#0C3A2C]/60 text-champagne-light font-medium uppercase tracking-widest text-xs hover:border-champagne hover:bg-champagne hover:text-[#06241B] transition-all duration-300 group shadow-sm"
            >
              <span className="flex items-center justify-center gap-2">
                <span>Let&apos;s Build Together</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </MagneticButton>
          </motion.div>

          {/* Quick Scope Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {["Java 17/21 & Spring Boot 3", "React & Next.js", "Spring Security & JWT", "MySQL & MongoDB", "Docker & AWS S3"].map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#0C3A2C]/50 border border-champagne/15 text-champagne/70 hover:text-champagne hover:border-champagne/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Rohan Shukla Portrait Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
        >
          {/* Ambient Glow behind portrait */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-champagne/15 blur-[90px] pointer-events-none" />
          <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-emerald-accent/20 blur-[80px] pointer-events-none" />

          {/* Luxury Frame Container */}
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] aspect-[3/4] rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-champagne/30 via-champagne/10 to-[#0C3A2C]/40 border border-champagne/30 shadow-2xl group">
            {/* Image Box */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0C3A2C]">
              <Image
                src="/images/rohan-hero.jpg"
                alt="Rohan Shukla — Full-Stack Developer & Architect"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-top contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />

              {/* Seamless Dark Emerald Gradient Scrim at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06241B] via-transparent to-transparent opacity-80" />

              {/* Floating Top Badge: Title */}
              <div className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-xl bg-[#06241B]/85 backdrop-blur-md border border-champagne/25 text-[10px] uppercase font-mono tracking-wider text-champagne-light flex items-center gap-1.5 shadow-lg">
                <Terminal className="w-3 h-3 text-emerald-accent" />
                <span>Full-Stack Architect</span>
              </div>

              {/* Floating Monogram Pill: Top Right */}
              <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-xl bg-[#06241B]/85 backdrop-blur-md border border-champagne/25 flex items-center justify-center font-serif text-xs text-champagne font-light shadow-md">
                RS<span className="text-emerald-accent font-sans">.</span>
              </div>

              {/* Floating Bottom Card: Live Metrics */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-xl bg-[#06241B]/90 backdrop-blur-md border border-champagne/20 flex items-center justify-between shadow-xl">
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono text-emerald-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent animate-ping" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent -ml-2" />
                    <span>Active Engineer</span>
                  </div>
                  <p className="text-xs font-medium text-champagne-light mt-0.5 font-sans">
                    Rohan Shukla
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-champagne/50 block">Specialty</span>
                  <span className="text-[11px] font-mono text-champagne font-semibold">
                    Java 17/21 • Spring Boot • React
                  </span>
                </div>
              </div>
            </div>

            {/* Architectural Corner Accents */}
            <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-champagne pointer-events-none" />
            <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-champagne pointer-events-none" />
            <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-champagne pointer-events-none" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-champagne pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Row: Animated Scroll Indicator & Live Tech Chips */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="max-w-7xl mx-auto w-full flex items-center justify-between z-10 pt-6 border-t border-champagne/10 text-xs font-mono text-champagne/50"
      >
        <div className="hidden md:flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-accent" />
          <span>JAVA FULL STACK DEVELOPER • SPRING BOOT 3 • REACT • RESTFUL APIS</span>
        </div>

        {/* Scroll Pill Indicator */}
        <a
          href="#about"
          className="mx-auto md:mx-0 flex items-center gap-2 group hover:text-champagne transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="uppercase tracking-[0.25em] text-[10px]">Explore Dossier</span>
          <div className="w-5 h-8 rounded-full border border-champagne/30 flex items-start justify-center p-1 group-hover:border-champagne transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-champagne"
            />
          </div>
        </a>

        <div className="hidden md:block text-right">
          <span>BASED IN MUMBAI, INDIA • OPEN FOR CONTRACTS</span>
        </div>
      </motion.div>
    </section>
  );
}
