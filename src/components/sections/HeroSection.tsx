"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Code, Cpu, ShieldCheck, Zap } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { HeroCanvas } from "../ui/HeroCanvas";
import { portfolioData } from "@/data/portfolio";

// Typewriter Hook with letter-by-letter typing, pause, and backspacing
function useTypewriter(words: string[], typingSpeed = 70, deletingSpeed = 35, pauseDuration = 2000) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIdx % words.length];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIdx((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIdx, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}

export function HeroSection() {
  const roles = [
    "Java Full Stack Developer",
    "Spring Boot 3 & Microservices Architect",
    "React & Next.js Engineer",
    "Android App Developer (Google Play Store)",
    "Smart India Hackathon (SIH) Winner",
    "High-Performance System Engineer",
  ];

  const typewriterText = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 overflow-hidden bg-[#06241B]"
      aria-label="Introduction & Hero"
    >
      {/* Interactive Canvas Particles (Champagne Stars & Emerald Dust) */}
      <HeroCanvas />

      {/* Cinematic Ambient Background: Glowing Radial Orbs */}
      <div className="absolute top-1/4 -left-32 w-[580px] h-[580px] rounded-full bg-emerald-500/15 blur-[150px] pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-10 -right-24 w-[650px] h-[650px] rounded-full bg-[#E8D5A8]/12 blur-[170px] pointer-events-none animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0C3A2C]/60 blur-[180px] pointer-events-none" />

      {/* Architectural Corner Badges */}
      <div className="absolute top-24 left-10 text-[11px] uppercase font-mono tracking-widest text-champagne/40 hidden xl:flex items-center gap-2 pointer-events-none z-10">
        <Terminal className="w-3.5 h-3.5 text-emerald-accent" />
        <span>SYS.ONLINE • FULL-STACK ARCHITECT</span>
      </div>
      <div className="absolute top-24 right-10 text-[11px] uppercase font-mono tracking-widest text-champagne/40 hidden xl:flex items-center gap-2 pointer-events-none z-10">
        <Code className="w-3.5 h-3.5 text-champagne" />
        <span>JAVA • SPRING BOOT • NEXT.JS • REACT</span>
      </div>

      {/* Main Content Split Layout: Big Rohan Shukla Typography on Left, Portrait on Right */}
      <div className="max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10 pt-4 sm:pt-6 pb-6">
        
        {/* Left Column: Huge Name, Typewriter Effect, Tagline & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Availability / Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0C3A2C]/90 border border-champagne/30 shadow-champagne-sm mb-5 sm:mb-7 backdrop-blur-md hover:border-champagne/60 transition-all cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-accent"></span>
            </span>
            <span className="text-xs sm:text-sm uppercase tracking-widest text-champagne-light font-sans font-medium">
              Available For Engineering Roles & Contracts
            </span>
            <span className="text-xs font-mono text-champagne/50 hidden sm:inline">
              • Mumbai, India
            </span>
          </motion.div>

          {/* Huge BOLD Name: ROHAN SHUKLA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs sm:text-sm md:text-base uppercase font-mono tracking-[0.25em] text-champagne/70 block mb-2 font-medium">
              Software Engineer & Full-Stack Architect
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.5rem] tracking-tight leading-[0.96] text-champagne-light">
              Rohan{" "}
              <span className="italic font-normal text-champagne text-gradient-champagne">
                Shukla
              </span>
            </h1>
          </motion.div>

          {/* Dynamic Typewriter Effect in front of Rohan Shukla */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 sm:mt-7 flex flex-wrap items-center gap-2 text-xl sm:text-2xl md:text-3xl lg:text-3xl font-serif text-champagne-light min-h-[44px]"
          >
            <span className="text-champagne/65 font-light font-sans text-lg sm:text-xl md:text-2xl">
              I am a
            </span>
            <span className="font-medium text-champagne text-gradient-champagne border-b-2 border-champagne/35 pb-0.5">
              {typewriterText}
            </span>
            <span className="inline-block w-[3px] h-6 sm:h-7 md:h-8 bg-emerald-accent animate-pulse align-middle ml-0.5 shadow-[0_0_8px_#10B981]" />
          </motion.div>

          {/* Subheading / Value Proposition (Bigger & Richer) */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-champagne/80 font-light max-w-2xl leading-relaxed"
          >
            {portfolioData.personal.tagline ||
              "I engineer secure, scalable full-stack applications with Spring Boot, React, and cryptographic precision."}
          </motion.p>

          {/* Action CTAs: Champagne Filled & Outline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <MagneticButton
              href="#projects"
              pullStrength={0.25}
              className="px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-champagne text-[#06241B] font-semibold uppercase tracking-widest text-xs sm:text-sm shadow-champagne-md hover:bg-champagne-light transition-all duration-300 group"
            >
              <span className="flex items-center justify-center gap-2.5">
                <span>Explore Works & Apps</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              </span>
            </MagneticButton>

            <MagneticButton
              href="#contact"
              pullStrength={0.25}
              className="px-8 sm:px-10 py-4 sm:py-4.5 rounded-full border border-champagne/40 bg-[#0C3A2C]/70 text-champagne-light font-semibold uppercase tracking-widest text-xs sm:text-sm hover:border-champagne hover:bg-champagne hover:text-[#06241B] transition-all duration-300 group shadow-sm"
            >
              <span className="flex items-center justify-center gap-2.5">
                <span>Let&apos;s Talk / Hire Me</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </MagneticButton>
          </motion.div>

          {/* Quick Scope Chips (Enriched & Readable) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-9 flex flex-wrap gap-2.5"
          >
            {[
              "Java 17/21 & Spring Boot 3",
              "React & Next.js 14",
              "Android Apps (Play Store)",
              "Spring Security & JWT",
              "MySQL & PostgreSQL",
              "Docker & AWS S3",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs sm:text-[13px] font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#0C3A2C]/60 border border-champagne/20 text-champagne/80 hover:text-champagne hover:border-champagne/40 transition-colors"
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-champagne/15 blur-[100px] pointer-events-none" />
          <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-emerald-accent/25 blur-[90px] pointer-events-none" />

          {/* Luxury Frame Container */}
          <div className="relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px] aspect-[3/4] rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-champagne/35 via-champagne/10 to-[#0C3A2C]/50 border border-champagne/35 shadow-2xl group">
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
              <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-xl bg-[#06241B]/95 backdrop-blur-md border border-champagne/25 flex items-center justify-between shadow-xl">
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono text-emerald-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent animate-ping" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent -ml-2" />
                    <span>Active Engineer</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-champagne-light mt-0.5 font-sans">
                    Rohan Shukla
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-champagne/50 block">Specialty</span>
                  <span className="text-[11px] font-mono text-champagne font-semibold">
                    Java • Spring Boot • React
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

      {/* Subtle Scroll Indicator at Bottom */}
      <div className="w-full flex justify-center pt-2">
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-champagne/40 hover:text-champagne transition-colors"
        >
          <span>Scroll to Discover</span>
          <div className="w-4 h-7 rounded-full border border-champagne/30 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-emerald-accent"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
