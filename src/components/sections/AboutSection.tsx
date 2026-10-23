"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  Terminal,
  Award,
  ShieldCheck,
  Download,
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Trophy,
  Lock,
  Database,
  Smartphone,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { MagneticButton } from "../ui/MagneticButton";
import { InteractiveTerminal } from "../ui/InteractiveTerminal";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif text-4xl sm:text-5xl font-light text-champagne-light">
      {count}
      <span className="text-champagne font-sans font-normal text-3xl sm:text-4xl">{suffix}</span>
    </span>
  );
}

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<"narrative" | "terminal">("narrative");
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-28 md:py-36 px-6 md:px-10 bg-[#06241B] overflow-hidden"
      aria-label="About Rohan Shukla"
    >
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-champagne/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Tagline Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-4 border-b border-champagne/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-champagne font-mono mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent" />
              <span>01 / Profile & Philosophy</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-champagne-light font-light leading-tight">
              Obsessed with architecture. <br />
              <span className="italic text-champagne text-gradient-champagne font-normal">
                Committed to elegance.
              </span>
            </h2>
          </div>

          {/* Mode Switcher Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#0C3A2C] border border-champagne/20">
            <button
              type="button"
              onClick={() => setActiveTab("narrative")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === "narrative"
                  ? "bg-champagne text-[#06241B] font-semibold shadow-sm"
                  : "text-champagne/70 hover:text-champagne"
              }`}
            >
              Story & Credentials
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("terminal")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === "terminal"
                  ? "bg-champagne text-[#06241B] font-semibold shadow-sm"
                  : "text-champagne/70 hover:text-champagne"
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-accent" />
              <span>Interactive CLI</span>
            </button>
          </div>
        </div>

        {/* Content based on Active Tab */}
        {activeTab === "terminal" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="text-center mb-6">
              <span className="text-xs uppercase font-mono tracking-widest text-emerald-accent">
                Command Line Interface • Terminal v2.4
              </span>
              <p className="text-sm text-champagne/60 mt-1 font-light">
                Inspect technical blueprints, Sdac Infotech internship, SIH hackathon wins, and B.Tech credentials.
              </p>
            </div>
            <InteractiveTerminal />
          </motion.div>
        ) : (
          /* Split Grid Layout */
          <div className="space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Tech & Hackathon Architecture Bento Box */}
              <div className="lg:col-span-5 flex justify-center w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-lg space-y-4"
                >
                  {/* Card 1: Smart India Hackathon & Mumbai Hacks Trophy Spotlight */}
                  <div className="relative p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#0C3A2C] via-[#0C3A2C]/90 to-[#06241B] border border-champagne/25 shadow-card-luxury overflow-hidden group">
                    {/* Ambient Gold Glow */}
                    <div className="absolute top-0 right-0 w-44 h-44 bg-champagne/10 rounded-full blur-2xl pointer-events-none" />

                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-champagne/15 border border-champagne/30 flex items-center justify-center text-champagne shadow-champagne-sm">
                          <Trophy className="w-5 h-5 text-champagne" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-mono tracking-widest text-champagne font-bold block">
                            National Innovation Honors
                          </span>
                          <span className="text-xs font-mono text-champagne/60">
                            Verified Hackathon Track Record
                          </span>
                        </div>
                      </div>

                      <span className="text-[9px] uppercase font-mono font-bold tracking-widest px-2.5 py-1 rounded-full bg-emerald-accent/20 border border-emerald-accent/40 text-emerald-accent">
                        1st Prize
                      </span>
                    </div>

                    <div className="space-y-2.5 pt-2 border-t border-champagne/15">
                      <div className="p-3 rounded-xl bg-[#06241B]/80 border border-champagne/15 flex items-start gap-2.5">
                        <Award className="w-4 h-4 text-emerald-accent shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-medium text-champagne-light">
                            Winner – Internal Smart India Hackathon (SIH)
                          </p>
                          <p className="text-[11px] text-champagne/60 leading-relaxed mt-0.5 font-light">
                            Built high-throughput solution under rigid 36-hr hackathon constraints; ranked #1 college innovation.
                          </p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#06241B]/80 border border-champagne/15 flex items-start gap-2.5">
                        <Sparkles className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-medium text-champagne-light">
                            Finalist – Mumbai Hacks 2025
                          </p>
                          <p className="text-[11px] text-champagne/60 leading-relaxed mt-0.5 font-light">
                            Selected among top engineering contenders across Mumbai for real-world enterprise utility.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Sdac Infotech Production API & Microservices Metric */}
                  <div className="relative p-5 rounded-3xl bg-[#0C3A2C]/70 border border-champagne/20 shadow-card-luxury overflow-hidden">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-accent animate-ping" />
                        <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-accent font-semibold">
                          Sdac Infotech Production APIs
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-champagne/50">
                        &lt;85ms P99 Latency
                      </span>
                    </div>

                    {/* Simulated Architecture Terminal Stream */}
                    <div className="p-3.5 rounded-xl bg-[#041C15] border border-champagne/15 font-mono text-[11px] space-y-1.5 text-champagne/80">
                      <div className="flex items-center justify-between text-champagne/40 pb-1 border-b border-champagne/10 text-[9px] uppercase tracking-wider">
                        <span>Cluster: Spring Boot 3 Engine</span>
                        <span className="text-emerald-accent">● Live Sync</span>
                      </div>
                      <div className="flex items-center gap-2 text-champagne-light">
                        <span className="text-emerald-accent font-bold">POST</span>
                        <span className="text-champagne/90">/api/v1/auth/jwt-handshake</span>
                        <span className="ml-auto text-[10px] text-emerald-accent">200 OK</span>
                      </div>
                      <div className="flex items-center gap-2 text-champagne/70 text-[10px]">
                        <Lock className="w-3 h-3 text-champagne" />
                        <span>Security: BCrypt + Stateless JWT Filter</span>
                      </div>
                      <div className="flex items-center gap-2 text-champagne/70 text-[10px]">
                        <Database className="w-3 h-3 text-emerald-accent" />
                        <span>Persistence: HikariCP Connection Mesh + MySQL</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Dual-Core Metrics & Active Standing */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-[#0C3A2C]/60 border border-champagne/15 text-center">
                      <span className="font-serif text-3xl font-light text-champagne-light block">
                        8.48
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-champagne mt-0.5 block font-medium">
                        B.Tech CGPA
                      </span>
                      <span className="text-[10px] text-champagne/50 font-sans mt-0.5 block">
                        Thakur College (Computer Eng)
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#0C3A2C]/60 border border-champagne/15 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Smartphone className="w-4 h-4 text-emerald-accent" />
                        <span className="font-serif text-3xl font-light text-champagne-light">
                          3+
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-accent mt-0.5 block font-medium">
                        Google Play Apps
                      </span>
                      <span className="text-[10px] text-champagne/50 font-sans mt-0.5 block">
                        ChaloJi & MITS Sadhana
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Narrative Bio & Action Buttons */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h3 className="text-xl sm:text-2xl font-serif text-champagne-light font-normal mb-6 flex items-center gap-2">
                    <span>Engineering with discipline, speed, and precision.</span>
                  </h3>

                  <div className="space-y-4 text-sm sm:text-base text-champagne/80 font-light leading-relaxed">
                    {portfolioData.personal.bioParagraphs.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Engineering Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-champagne/10">
                    <div className="p-4 rounded-xl bg-[#0C3A2C]/60 border border-champagne/10">
                      <div className="flex items-center gap-2 text-champagne mb-1.5 font-medium text-xs uppercase tracking-wider">
                        <Award className="w-4 h-4 text-emerald-accent" />
                        <span>Hackathon Winner & Finalist</span>
                      </div>
                      <p className="text-xs text-champagne/60 leading-relaxed">
                        1st prize at Internal Smart India Hackathon (SIH) and Finalist at Mumbai Hacks 2025.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#0C3A2C]/60 border border-champagne/10">
                      <div className="flex items-center gap-2 text-champagne mb-1.5 font-medium text-xs uppercase tracking-wider">
                        <Sparkles className="w-4 h-4 text-emerald-accent" />
                        <span>Production Experience</span>
                      </div>
                      <p className="text-xs text-champagne/60 leading-relaxed">
                        Engineered scalable REST APIs & optimized load times at Sdac Infotech, Mumbai.
                      </p>
                    </div>
                  </div>

                  {/* Action: Resume & Contact */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <MagneticButton
                      href={portfolioData.personal.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download="Rohan_Shukla_Resume.pdf"
                      pullStrength={0.2}
                      className="px-6 py-3.5 rounded-full bg-champagne text-[#06241B] text-xs uppercase tracking-widest font-medium shadow-champagne-sm hover:bg-champagne-light transition-all flex items-center gap-2 group"
                    >
                      <Download className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
                      <span>Download Resume (PDF)</span>
                    </MagneticButton>

                    <MagneticButton
                      href="#contact"
                      pullStrength={0.2}
                      className="px-6 py-3.5 rounded-full border border-champagne/30 text-champagne-light text-xs uppercase tracking-widest font-medium hover:border-champagne hover:bg-champagne/10 transition-all"
                    >
                      <span>Get in Touch Directly</span>
                    </MagneticButton>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Experience & Education Dossier */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
              {/* Work Experience Card */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#0C3A2C]/50 border border-champagne/15 flex flex-col justify-between shadow-card-luxury">
                <div>
                  <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-emerald-accent mb-4">
                    <Briefcase className="w-4 h-4" />
                    <span>Work Experience</span>
                  </div>

                  <div className="flex items-baseline justify-between mb-1">
                    <h4 className="font-serif text-2xl text-champagne-light font-light">
                      Full Stack Developer <span className="text-champagne font-sans text-sm font-normal">(Internship)</span>
                    </h4>
                  </div>
                  <p className="text-xs font-mono text-champagne/70 mb-4 flex items-center gap-3">
                    <span className="font-semibold text-champagne">Sdac Infotech</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-emerald-accent" /> Mumbai, India</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-champagne" /> Jul 2025 – Nov 2025</span>
                  </p>

                  <ul className="space-y-2.5 text-xs text-champagne/75 leading-relaxed mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-accent shrink-0 mt-0.5" />
                      <span>Developed & maintained scalable full-stack web applications using Java, Spring Boot, React, JavaScript, HTML, and CSS.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-accent shrink-0 mt-0.5" />
                      <span>Designed & implemented RESTful APIs enabling efficient communication between frontend and backend systems.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-accent shrink-0 mt-0.5" />
                      <span>Optimized application performance through code refactoring and performance tuning, resulting in noticeable reduction in API response times.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-accent shrink-0 mt-0.5" />
                      <span>Followed clean code principles, MVC architecture, and collaborated actively in an Agile/Scrum environment.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-champagne/10 flex flex-wrap gap-1.5">
                  {["React", "Spring Boot", "MySQL", "MongoDB", "Tailwind CSS", "Agile / Scrum"].map((t) => (
                    <span key={t} className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#06241B] border border-champagne/15 text-champagne/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education & Hackathons Card */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#0C3A2C]/50 border border-champagne/15 flex flex-col justify-between shadow-card-luxury">
                <div>
                  <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-champagne mb-4">
                    <GraduationCap className="w-4 h-4 text-emerald-accent" />
                    <span>Education & Hackathon Honors</span>
                  </div>

                  {/* B.Tech */}
                  <div className="mb-6 pb-6 border-b border-champagne/10">
                    <div className="flex items-baseline justify-between mb-1">
                      <h4 className="font-serif text-xl text-champagne-light">
                        Thakur College of Engineering
                      </h4>
                      <span className="text-xs font-mono font-semibold text-emerald-accent px-2 py-0.5 rounded bg-[#06241B] border border-emerald-accent/30">
                        CGPA: 8.48
                      </span>
                    </div>
                    <p className="text-xs font-mono text-champagne/70 mb-3">
                      B.Tech in Computer Engineering • Mumbai (Jun 2024 – Jun 2027)
                    </p>
                    <div className="space-y-1.5 text-xs text-champagne/80">
                      <p className="flex items-center gap-2 text-champagne font-medium">
                        <Award className="w-3.5 h-3.5 text-emerald-accent" />
                        <span>Winner – Internal Smart India Hackathon (SIH)</span>
                      </p>
                      <p className="flex items-center gap-2 text-champagne font-medium">
                        <Award className="w-3.5 h-3.5 text-emerald-accent" />
                        <span>Finalist – Mumbai Hacks 2025 Hackathon</span>
                      </p>
                    </div>
                  </div>

                  {/* Diploma */}
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <h4 className="font-serif text-xl text-champagne-light">
                        Thakur Polytechnic
                      </h4>
                      <span className="text-xs font-mono font-semibold text-champagne px-2 py-0.5 rounded bg-[#06241B] border border-champagne/20">
                        CGPA: 8.14
                      </span>
                    </div>
                    <p className="text-xs font-mono text-champagne/70 mb-2">
                      Diploma in Computer Engineering • Mumbai (Jun 2021 – May 2024)
                    </p>
                    <p className="text-xs text-champagne/60 leading-relaxed">
                      Organized and managed college technical events, coordinated cross-functional teams, and handled technical logistics.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-champagne/10 text-[11px] font-mono text-champagne/60 flex items-center justify-between">
                  <span>Mumbai University Ecosystem</span>
                  <span className="text-emerald-accent">Active Hackathon Competitor</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Animated Counter Stats Grid */}
        <div className="mt-16 md:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 pt-10 sm:pt-12 border-t border-champagne/15">
          <div className="p-4 sm:p-6 rounded-2xl bg-[#0C3A2C]/40 border border-champagne/10 hover:border-champagne/30 transition-colors">
            <span className="font-serif text-3xl sm:text-5xl font-light text-champagne-light">
              8.48
              <span className="text-champagne font-sans font-normal text-xl sm:text-3xl ml-1">CGPA</span>
            </span>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-champagne mt-2">
              B.Tech Academic Standing
            </h4>
            <p className="text-[11px] text-champagne/50 mt-1 leading-normal font-sans">
              Thakur College of Engineering, Mumbai
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-[#0C3A2C]/40 border border-champagne/10 hover:border-champagne/30 transition-colors">
            <span className="font-serif text-3xl sm:text-5xl font-light text-champagne-light">
              1<span className="text-champagne font-sans font-normal text-xl sm:text-3xl ml-0.5">st Prize</span>
            </span>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-champagne mt-2">
              Smart India Hackathon
            </h4>
            <p className="text-[11px] text-champagne/50 mt-1 leading-normal font-sans">
              Winner – College Level Innovation
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-[#0C3A2C]/40 border border-champagne/10 hover:border-champagne/30 transition-colors">
            <span className="font-serif text-3xl sm:text-5xl font-light text-champagne-light">
              2025
            </span>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-champagne mt-2">
              Mumbai Hacks Finalist
            </h4>
            <p className="text-[11px] text-champagne/50 mt-1 leading-normal font-sans">
              Selected among top hackathon finalists
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-[#0C3A2C]/40 border border-champagne/10 hover:border-champagne/30 transition-colors">
            <span className="font-serif text-3xl sm:text-5xl font-light text-champagne-light">
              100<span className="text-champagne font-sans font-normal text-xl sm:text-3xl ml-0.5">%</span>
            </span>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-champagne mt-2">
              Cryptographic Integrity
            </h4>
            <p className="text-[11px] text-champagne/50 mt-1 leading-normal font-sans">
              RSA-OAEP + AES-256-GCM Mesh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
