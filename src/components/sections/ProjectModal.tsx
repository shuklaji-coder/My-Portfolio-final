"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle,
  ArrowRight,
  Layers,
  Cpu,
  TrendingUp,
  Smartphone,
  Car,
  Globe,
} from "lucide-react";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Handle keyboard Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#06241B]/90 backdrop-blur-xl"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#0C3A2C] border border-champagne/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-champagne z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-champagne/15 bg-[#082B21]/90">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase font-mono tracking-widest text-emerald-accent px-2.5 py-1 rounded-md bg-[#06241B] border border-champagne/15">
                  {project.isClientProject ? "Client Project" : project.category}
                </span>
                <span className="text-xs font-mono text-champagne/50 hidden sm:inline">
                  {project.isClientProject ? "Commercial Client Delivery" : "Case Study Dossier"}
                </span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-xl border border-champagne/20 bg-[#06241B] flex items-center justify-center text-champagne hover:border-champagne hover:text-champagne-light transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-8" data-lenis-prevent>
              {/* Hero Image & Headings */}
              <div>
                {/* Media Container: HD Video Player or Thumbnail */}
                {project.videoUrl ? (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-champagne/30 bg-[#041B14] mb-6 shadow-2xl">
                    <video
                      src={project.videoUrl}
                      controls
                      autoPlay
                      loop
                      playsInline
                      className="w-full h-full object-contain bg-black"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-champagne/15 mb-6">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 900px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C3A2C] via-transparent to-transparent opacity-80" />
                  </div>
                )}

                <h3
                  id="modal-title"
                  className="font-serif text-3xl sm:text-4xl text-champagne-light font-light"
                >
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-champagne/70 mt-1 font-light">
                  {project.subtitle}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-[#06241B] border border-champagne/15 text-champagne-light"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-[#06241B]/70 border border-champagne/15">
                {project.caseStudy.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-serif text-2xl sm:text-3xl font-light text-champagne text-gradient-champagne">
                      {metric.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider font-mono text-champagne/60 mt-0.5">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-[#082B21] border border-champagne/10">
                  <div className="flex items-center gap-2 text-champagne mb-2 font-mono text-xs uppercase tracking-wider">
                    <TrendingUp className="w-3.5 h-3.5 text-rose-400" />
                    <span>The Challenge</span>
                  </div>
                  <p className="text-xs sm:text-sm text-champagne/75 leading-relaxed">
                    {project.caseStudy.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#082B21] border border-champagne/10">
                  <div className="flex items-center gap-2 text-champagne mb-2 font-mono text-xs uppercase tracking-wider">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-accent" />
                    <span>The Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-champagne/75 leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Architecture Blueprint Highlights */}
              <div className="p-6 rounded-xl bg-[#06241B]/80 border border-champagne/15 space-y-3">
                <div className="flex items-center gap-2 text-champagne font-mono text-xs uppercase tracking-wider">
                  <Layers className="w-4 h-4 text-emerald-accent" />
                  <span>Architecture & Concurrency Highlights</span>
                </div>
                <div className="space-y-2.5 pt-1">
                  {project.caseStudy.architecture.map((arch, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-champagne/80">
                      <ArrowRight className="w-3.5 h-3.5 text-champagne shrink-0 mt-0.5" />
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features Delivered */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-champagne/60 mb-3 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-champagne" />
                  <span>Key Modules Delivered</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.caseStudy.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#082B21] border border-champagne/10 text-xs text-champagne/85 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="px-6 sm:px-8 py-5 border-t border-champagne/15 bg-[#082B21] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-champagne text-[#06241B] font-semibold text-xs uppercase tracking-wider hover:bg-champagne-light transition-all shadow-md"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>
                      {project.title === "Aatmi Yogshala"
                        ? "Visit aatmivyogshala.com"
                        : "Launch Live Web"}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-accent/50 bg-[#06241B] text-emerald-accent font-semibold text-xs uppercase tracking-wider hover:border-emerald-accent hover:bg-emerald-accent/15 transition-all shadow-sm"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>{project.title === "ChaloJi" ? "Get Passenger App (Play Store)" : "Get on Google Play"}</span>
                  </a>
                )}
                {project.driverAppUrl && (
                  <a
                    href={project.driverAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-champagne/30 bg-[#06241B] text-champagne font-semibold text-xs uppercase tracking-wider hover:border-champagne hover:bg-champagne/10 transition-all shadow-sm"
                  >
                    <Car className="w-3.5 h-3.5 text-emerald-accent" />
                    <span>Get Driver App (Play Store)</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-champagne/30 text-champagne font-medium text-xs uppercase tracking-wider hover:border-champagne hover:bg-champagne/10 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="text-xs font-mono uppercase tracking-wider text-champagne/60 hover:text-champagne transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
