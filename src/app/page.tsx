"use client";

import { useState } from "react";
import { Preloader } from "@/components/ui/Preloader";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LuxuryBanner } from "@/components/ui/LuxuryBanner";

export default function Home() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <>
      {/* Intro Monogram Preloader */}
      <Preloader onComplete={() => setPreloaderComplete(true)} />

      {/* Main Single-Page Content */}
      <div className={`transition-opacity duration-700 ${preloaderComplete ? "opacity-100" : "opacity-90"}`}>
        <HeroSection />
        <LuxuryBanner />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <LuxuryBanner />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </>
  );
}
