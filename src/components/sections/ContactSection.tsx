"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Download,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { MagneticButton } from "../ui/MagneticButton";

const PROJECT_TYPES = [
  "Full-Stack Web App",
  "Backend & Microservices",
  "React Native Mobile App",
  "Design System & Motion",
  "Architecture Audit",
];

const TIMELINE_RANGES = [
  "< 2 Weeks (Sprint)",
  "2 - 4 Weeks (Standard)",
  "1 - 3 Months (Full Build)",
];

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: PROJECT_TYPES[0],
    timeline: TIMELINE_RANGES[1],
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please provide your name";
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errs.message = "Please share a brief message or project details";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to transmit inquiry.");
      }

      setIsSubmitted(true);

      // Trigger celebratory gold & emerald confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#E8D5A8", "#10B981", "#D9BF85", "#F7F1E3"],
        });
      } catch {
        // safe fallback if canvas not available
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to send message. Please reach out directly via WhatsApp or email.";
      setErrors({ form: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-28 md:py-36 px-6 md:px-10 bg-[#06241B] border-t border-champagne/10 overflow-hidden"
      aria-label="Contact and Inquiries"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-emerald-accent/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-champagne/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-champagne font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent" />
            <span>07 / Direct Contact</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-champagne-light font-light leading-tight">
            Let&apos;s build something <br />
            <span className="italic text-champagne text-gradient-champagne font-normal">
              truly extraordinary.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-champagne/60 leading-relaxed font-light max-w-xl">
            Whether you are launching a greenfield venture, scaling an enterprise microservice, or aiming for an Awwwards-caliber digital presence, let&apos;s talk engineering.
          </p>
        </div>

        {/* Split Form & Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Social Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-10"
          >
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-champagne/50 block mb-4">
                Direct Channels
              </span>

              {/* Direct Email Card */}
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="group p-5 rounded-2xl bg-[#0C3A2C]/60 border border-champagne/15 hover:border-champagne/40 transition-all flex items-center justify-between mb-4 block"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#06241B] border border-champagne/20 flex items-center justify-center text-champagne group-hover:text-emerald-accent transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-champagne/50 block">
                      Direct Email
                    </span>
                    <span className="text-sm font-medium text-champagne-light">
                      {portfolioData.personal.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-champagne/40 group-hover:text-champagne transition-colors" />
              </a>

              {/* Direct Phone Card */}
              <a
                href="tel:+919580849709"
                className="group p-5 rounded-2xl bg-[#0C3A2C]/60 border border-champagne/15 hover:border-champagne/40 transition-all flex items-center justify-between mb-4 block"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#06241B] border border-champagne/20 flex items-center justify-center text-champagne group-hover:text-emerald-accent transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-champagne/50 block">
                      Direct Phone
                    </span>
                    <span className="text-sm font-medium text-champagne-light">
                      +91 9580849709
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-champagne/40 group-hover:text-champagne transition-colors" />
              </a>

              {/* WhatsApp Card */}
              <a
                href={portfolioData.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-[#0C3A2C]/60 border border-champagne/15 hover:border-champagne/40 transition-all flex items-center justify-between mb-4 block"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#06241B] border border-champagne/20 flex items-center justify-center text-champagne group-hover:text-emerald-accent transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-champagne/50 block">
                      WhatsApp Messaging
                    </span>
                    <span className="text-sm font-medium text-champagne-light">
                      +91 9580849709 (Instant Chat)
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-champagne/40 group-hover:text-champagne transition-colors" />
              </a>

              {/* Location Tag */}
              <div className="p-3.5 rounded-xl bg-[#06241B]/80 border border-champagne/15 flex items-center justify-between text-xs font-mono text-champagne/70 mb-4">
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-accent" />
                  <span>Base Location</span>
                </span>
                <span className="text-champagne-light font-medium">Mumbai, India</span>
              </div>

              {/* Social Channels Row */}
              <div className="pt-4">
                <span className="text-xs uppercase font-mono tracking-widest text-champagne/50 block mb-3">
                  Developer Ecosystem
                </span>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <a
                    href={portfolioData.personal.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl bg-[#0C3A2C]/50 border border-champagne/15 text-xs text-champagne hover:border-champagne hover:text-champagne-light transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={portfolioData.personal.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl bg-[#0C3A2C]/50 border border-champagne/15 text-xs text-champagne hover:border-champagne hover:text-champagne-light transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={portfolioData.personal.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl bg-[#0C3A2C]/50 border border-champagne/15 text-xs text-champagne hover:border-champagne hover:text-champagne-light transition-all"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>X / Twitter</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Download Action */}
            <div className="p-6 rounded-2xl bg-[#0C3A2C]/40 border border-champagne/15">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-accent mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Experience & Track Record</span>
              </div>
              <h4 className="font-serif text-lg text-champagne-light mb-1">
                Looking for detailed technical credentials?
              </h4>
              <p className="text-xs text-champagne/60 leading-relaxed mb-4">
                Download my comprehensive CV with engineering milestones, architecture case studies, and recommendations.
              </p>
              <MagneticButton
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Rohan_Shukla_Resume.pdf"
                pullStrength={0.2}
                className="w-full py-3 rounded-xl bg-[#06241B] border border-champagne/30 text-champagne text-xs uppercase font-medium tracking-wider hover:border-champagne hover:bg-champagne hover:text-[#06241B] transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="relative p-5 sm:p-8 md:p-10 rounded-3xl bg-[#0C3A2C] border border-champagne/20 shadow-card-luxury">
              {isSubmitted ? (
                /* Success State with Animation */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-accent/20 border border-emerald-accent/40 flex items-center justify-center text-emerald-accent shadow-emerald-glow mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl text-champagne-light">
                    Message Dispatched Successfully.
                  </h3>
                  <p className="text-sm text-champagne/70 max-w-md leading-relaxed">
                    Thank you, <strong className="text-champagne">{formData.name}</strong>. I have received your project details and will review your technical specifications. Expect a response within 12 to 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        projectType: PROJECT_TYPES[0],
                        timeline: TIMELINE_RANGES[1],
                        message: "",
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full border border-champagne/30 text-xs font-mono uppercase tracking-wider text-champagne hover:border-champagne hover:bg-champagne/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs uppercase font-mono tracking-wider text-champagne/70 mb-2"
                      >
                        Your Name <span className="text-emerald-accent">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alexander Wright"
                        className={`w-full px-4 py-3 rounded-xl bg-[#06241B] border text-base sm:text-sm text-champagne-light placeholder:text-champagne/30 focus:outline-none transition-colors ${
                          errors.name ? "border-rose-400" : "border-champagne/20 focus:border-champagne"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase font-mono tracking-wider text-champagne/70 mb-2"
                      >
                        Work Email <span className="text-emerald-accent">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#06241B] border text-base sm:text-sm text-champagne-light placeholder:text-champagne/30 focus:outline-none transition-colors ${
                          errors.email ? "border-rose-400" : "border-champagne/20 focus:border-champagne"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Project Type Chips */}
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-champagne/70 mb-2.5">
                      Scope / Architecture
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PROJECT_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`text-xs font-mono px-3.5 py-2 rounded-lg border transition-all ${
                            formData.projectType === type
                              ? "bg-champagne text-[#06241B] border-champagne font-medium shadow-sm"
                              : "bg-[#06241B] border-champagne/15 text-champagne/70 hover:border-champagne/40"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Target Delivery Timeline (No Dollar Signs) */}
                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-champagne/70 mb-2.5">
                      Target Delivery Timeline
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {TIMELINE_RANGES.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: t })}
                          className={`text-xs font-mono py-2.5 rounded-lg border text-center transition-all ${
                            formData.timeline === t
                              ? "bg-champagne/20 border-champagne text-champagne font-medium"
                              : "bg-[#06241B] border-champagne/15 text-champagne/60 hover:border-champagne/30"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase font-mono tracking-wider text-champagne/70 mb-2"
                    >
                      Project Overview & Target Launch <span className="text-emerald-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your product vision, tech stack requirements, and key deadlines..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#06241B] border text-base sm:text-sm text-champagne-light placeholder:text-champagne/30 focus:outline-none transition-colors resize-none ${
                        errors.message ? "border-rose-400" : "border-champagne/20 focus:border-champagne"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {errors.form && (
                    <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-xs font-mono space-y-2">
                      <p className="text-rose-300 leading-relaxed">{errors.form}</p>
                      <div className="flex flex-wrap gap-2 pt-1 font-sans">
                        <a
                          href={`https://wa.me/919580849709?text=${encodeURIComponent(
                            `Hi Rohan, I have a project inquiry from ${formData.name} (${formData.email}) for ${formData.projectType}: ${formData.message}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                        >
                          <span>Send via WhatsApp</span>
                        </a>
                        <a
                          href={`mailto:shuklarohan388@gmail.com?subject=${encodeURIComponent(
                            `Project Inquiry: ${formData.projectType} from ${formData.name}`
                          )}&body=${encodeURIComponent(
                            `Client Name: ${formData.name}\nEmail: ${formData.email}\nScope: ${formData.projectType}\nTimeline: ${formData.timeline}\n\nMessage:\n${formData.message}`
                          )}`}
                          className="px-3 py-1.5 rounded-lg bg-[#06241B] border border-champagne/30 text-champagne text-xs font-medium hover:border-champagne hover:bg-champagne/10 transition-colors"
                        >
                          <span>Open in Mail App</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    pullStrength={0.2}
                    className="w-full py-4 rounded-xl bg-champagne text-[#06241B] font-medium uppercase tracking-widest text-xs hover:bg-champagne-light transition-all shadow-champagne-md flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2 font-mono">
                        <Sparkles className="w-4 h-4 animate-spin text-emerald-accent" />
                        <span>Transmitting Specification...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Send Project Brief</span>
                        <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </MagneticButton>

                  <p className="text-[10px] text-center font-mono text-champagne/40">
                    Encrypted transmission • Direct receipt by Rohan Shukla • Non-Disclosure guaranteed
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
