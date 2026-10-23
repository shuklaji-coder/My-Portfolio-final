"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Sparkles,
  BookOpen,
  ExternalLink,
  Globe,
  Lock,
  Play,
  Smartphone,
  Car,
  CheckCircle2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Project } from "@/types";
import { ProjectModal } from "./ProjectModal";

const CATEGORIES = [
  "All Works",
  "Client Projects",
  "Android Apps (Play Store)",
  "Full-Stack SaaS",
  "E-Commerce",
];

const DOMAIN_MAP: Record<string, string> = {
  "chaloji-travel": "chalojii.in",
  "cafewala-dining": "cafewala.dining.dev",
  "mits-sadhana-portal": "mitssadhana.in",
  "aatmi-yogshala": "aatmivyogshala.com",
  "sasta-bazaar": "sastabazaar.shop",
  "sdac-infotech-suite": "sdacinfotech.com",
};

// 3D Tilt & Specular Light Card Component
function BentoProjectCard({
  project,
  onOpenModal,
  index,
}: {
  project: Project;
  onOpenModal: (p: Project) => void;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const domain = DOMAIN_MAP[project.id] || "project.internal.dev";

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-3xl overflow-hidden bg-[#0C3A2C] border border-champagne/20 hover:border-champagne/50 transition-all duration-500 flex flex-col justify-between shadow-card-luxury w-full ${
        project.bentoSpan || "col-span-1"
      }`}
      data-cursor-label="VIEW"
    >
      {/* Specular Champagne Spotlight follows mouse */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-100 transition-opacity duration-300 z-10 hidden md:block"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 213, 168, 0.14), transparent 45%)`,
          }}
        />
      )}

      {/* macOS Simulated Browser Window Chrome Header */}
      <div className="px-4 sm:px-5 py-3 bg-[#082B21] border-b border-champagne/15 flex items-center justify-between z-20">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444] opacity-80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] opacity-80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] opacity-80" />
        </div>

        {/* URL Pill */}
        <div className="px-2.5 sm:px-3 py-1 rounded-md bg-[#06241B] border border-champagne/15 flex items-center gap-1.5 text-[10px] font-mono text-champagne/70 max-w-[160px] sm:max-w-[220px] truncate">
          <Lock className="w-2.5 h-2.5 text-emerald-accent shrink-0" />
          <span className="truncate">https://{domain}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent animate-pulse" />
          <span className="text-[9px] uppercase font-mono tracking-widest text-champagne/60">
            {project.playStoreUrl ? "PLAY STORE" : "LIVE PROD"}
          </span>
        </div>
      </div>

      {/* Media Preview Container (Responsive Height) */}
      <div className="relative w-full h-52 sm:h-72 md:h-80 overflow-hidden bg-[#06241B]">
        {project.videoUrl ? (
          <video
            src={project.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        )}

        {/* Ambient Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C3A2C] via-[#0C3A2C]/40 to-transparent pointer-events-none" />

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex flex-wrap items-center justify-between gap-2 z-20">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest shadow-md ${
              project.isClientProject || project.category === "Client Project"
                ? "bg-champagne text-[#06241B] font-bold border border-champagne"
                : "bg-[#06241B]/90 backdrop-blur-md border border-champagne/25 text-champagne-light"
            }`}>
              {project.isClientProject ? "Client Project" : project.category}
            </span>
            {project.playStoreUrl && (
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/90 text-white border border-emerald-400 text-[10px] font-mono uppercase font-semibold shadow-md">
                <Smartphone className="w-2.5 h-2.5" />
                <span>Live on Play Store</span>
              </span>
            )}
            {project.videoUrl && (
              <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#06241B]/90 border border-champagne/20 text-[10px] font-mono uppercase text-champagne shadow-md">
                <Play className="w-2.5 h-2.5 fill-current text-emerald-accent" />
                <span className="hidden sm:inline">Video Demo</span>
              </span>
            )}
          </div>
        </div>

        {/* Quick Read Button */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-5 z-20">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-champagne text-[#06241B] text-xs uppercase font-medium tracking-wider shadow-lg flex items-center gap-1.5 hover:bg-champagne-light transition-colors"
          >
            <span>Case Study</span>
            <BookOpen className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Bottom Content Body */}
      <div className="p-5 sm:p-7 md:p-8 flex flex-col justify-between flex-grow z-20 bg-[#0C3A2C]">
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-champagne-light font-light group-hover:text-champagne transition-colors">
              {project.title}
            </h3>
            <span className="text-[11px] font-mono text-champagne/40 uppercase tracking-widest">
              0{index + 1}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-champagne/75 font-light leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Unmissable, Thumb-Friendly Action Buttons for Apps & Web */}
          {(project.playStoreUrl || project.liveUrl || project.driverAppUrl) && (
            <div className="flex flex-wrap items-center gap-2 mb-5 pt-1">
              {project.playStoreUrl && (
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-xs tracking-wide shadow-md transition-all duration-200"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>
                    {project.title === "ChaloJi" ? "ChaloJi Rides (Play Store)" : "Get on Google Play"}
                  </span>
                </a>
              )}

              {project.driverAppUrl && (
                <a
                  href={project.driverAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#06241B] border border-champagne/30 text-champagne font-semibold text-xs tracking-wide hover:border-champagne hover:bg-champagne/10 transition-all duration-200"
                >
                  <Car className="w-3.5 h-3.5 text-emerald-accent" />
                  <span>ChaloJi Driver App</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-champagne hover:bg-champagne-light text-[#06241B] font-semibold text-xs tracking-wide shadow-sm transition-all duration-200"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>
                    {project.title === "ChaloJi"
                      ? "chalojii.in"
                      : project.title === "MITS Sadhana"
                      ? "mitssadhana.in"
                      : project.title === "Aatmi Yogshala"
                      ? "aatmivyogshala.com"
                      : "Live Website"}
                  </span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Tech Stack Pills & Modal Opener */}
        <div className="pt-4 border-t border-champagne/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#06241B] border border-champagne/10 text-champagne/80"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-[#06241B] border border-champagne/10 text-champagne/50">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-mono text-champagne hover:text-champagne-light transition-colors group/btn"
          >
            <span>Full Dossier</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Works");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const filteredProjects =
    selectedCategory === "All Works"
      ? portfolioData.projects
      : selectedCategory === "Client Projects"
      ? portfolioData.projects.filter(
          (p) => Boolean(p.isClientProject) || p.category === "Client Project"
        )
      : selectedCategory === "Android Apps (Play Store)"
      ? portfolioData.projects.filter(
          (p) => Boolean(p.playStoreUrl) || p.category === "Android Apps"
        )
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-20 md:py-36 px-4 sm:px-6 md:px-10 bg-[#06241B] border-t border-champagne/10 overflow-hidden"
      aria-label="Featured Software Projects and Published Apps"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-emerald-accent/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 border-b border-champagne/10 pb-6 md:pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-champagne font-mono mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent" />
              <span>03 / Selected Works & Published Apps</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-champagne-light font-light leading-tight">
              Featured Flagships. <br />
              <span className="italic text-champagne text-gradient-champagne font-normal">
                Live on Google Play & Web.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-champagne/70">
            <Sparkles className="w-3.5 h-3.5 text-emerald-accent" />
            <span>3+ Apps Published on Play Store</span>
          </div>
        </div>

        {/* Live Published Google Play Store Highlight Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0C3A2C] via-[#0C3A2C]/80 to-[#082B21] border border-emerald-accent/30 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-accent shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-accent font-semibold">
                  Google Play Store Developer
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent animate-ping" />
              </div>
              <p className="text-xs text-champagne-light font-medium mt-0.5">
                Rohan Shukla has active production apps on the Google Play Store with real users.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <a
              href="https://play.google.com/store/apps/details?id=com.rohan3543.chaloji&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-[11px] font-mono font-medium flex items-center gap-1.5 transition-colors"
            >
              <Smartphone className="w-3 h-3" />
              <span>ChaloJi Rides</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.chaloji.driver&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-[#06241B] border border-champagne/30 text-champagne text-[11px] font-mono font-medium flex items-center gap-1.5 hover:border-champagne transition-colors"
            >
              <Car className="w-3 h-3 text-emerald-accent" />
              <span>ChaloJi Driver</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.rohan2342.MitSadhana&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-[11px] font-mono font-medium flex items-center gap-1.5 transition-colors"
            >
              <Smartphone className="w-3 h-3" />
              <span>MITS Sadhana</span>
            </a>
          </div>
        </div>

        {/* Category Filter Tabs (Swipeable on mobile) */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider shrink-0 transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-champagne text-[#06241B] font-bold shadow-champagne-sm"
                  : "bg-[#0C3A2C]/60 text-champagne/75 border border-champagne/15 hover:border-champagne/40 hover:text-champagne-light"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <BentoProjectCard
                key={project.id}
                project={project}
                onOpenModal={(p) => setSelectedProject(p)}
                index={idx}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Fullscreen Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
