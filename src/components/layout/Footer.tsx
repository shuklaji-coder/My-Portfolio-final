"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Github, Linkedin, Twitter, MessageCircle, Mail } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in IST (UTC+5:30)
      const istTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);
      setTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-champagne/10 bg-[#041B14] text-champagne pt-16 pb-12 overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-emerald-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-champagne/10">
          {/* Column 1: Identity & Tagline */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl border border-champagne/30 bg-[#0C3A2C] flex items-center justify-center">
                  <span className="font-serif text-base text-champagne font-light">
                    RS<span className="text-emerald-accent">.</span>
                  </span>
                </div>
                <h3 className="font-serif text-xl tracking-wider uppercase text-champagne-light">
                  Rohan Shukla
                </h3>
              </div>
              <p className="mt-4 text-sm text-champagne/70 max-w-sm leading-relaxed">
                Java Full Stack Developer skilled in Spring Boot, React & MySQL. Experienced in building secure, scalable web applications with JWT authentication & REST APIs.
              </p>
            </div>

            {/* Time & Availability */}
            <div className="mt-8 flex items-center gap-4 text-xs font-mono text-champagne/60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-accent animate-pulse" />
                <span>Mumbai, India (IST): {time || "09:30 AM"}</span>
              </div>
              <span>•</span>
              <span className="text-champagne-light">Open for Opportunities</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-champagne/40 font-mono mb-2">
              Sitemap
            </span>
            <a href="#about" className="text-sm text-champagne/75 hover:text-champagne transition-colors w-fit">
              About & Philosophy
            </a>
            <a href="#projects" className="text-sm text-champagne/75 hover:text-champagne transition-colors w-fit">
              Featured Case Studies
            </a>
            <a href="#skills" className="text-sm text-champagne/75 hover:text-champagne transition-colors w-fit">
              Tech Stack & Tooling
            </a>
            <a href="#services" className="text-sm text-champagne/75 hover:text-champagne transition-colors w-fit">
              Capabilities & Offerings
            </a>
            <a href="#process" className="text-sm text-champagne/75 hover:text-champagne transition-colors w-fit">
              Development Process
            </a>
          </div>

          {/* Column 3: Socials & Back to Top */}
          <div className="md:col-span-4 flex flex-col justify-between items-start md:items-end">
            <div>
              <span className="text-xs uppercase tracking-widest text-champagne/40 font-mono mb-3 block md:text-right">
                Connect
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={portfolioData.personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-champagne/20 bg-[#0C3A2C]/60 flex items-center justify-center text-champagne hover:border-champagne hover:bg-champagne hover:text-[#06241B] transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-champagne/20 bg-[#0C3A2C]/60 flex items-center justify-center text-champagne hover:border-champagne hover:bg-champagne hover:text-[#06241B] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-champagne/20 bg-[#0C3A2C]/60 flex items-center justify-center text-champagne hover:border-champagne hover:bg-champagne hover:text-[#06241B] transition-all"
                  aria-label="Twitter / X Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-champagne/20 bg-[#0C3A2C]/60 flex items-center justify-center text-champagne hover:border-champagne hover:bg-champagne hover:text-[#06241B] transition-all"
                  aria-label="WhatsApp Chat"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="w-10 h-10 rounded-xl border border-champagne/20 bg-[#0C3A2C]/60 flex items-center justify-center text-champagne hover:border-champagne hover:bg-champagne hover:text-[#06241B] transition-all"
                  aria-label="Send direct email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Back to top magnetic pill */}
            <div className="mt-8">
              <MagneticButton
                onClick={scrollToTop}
                pullStrength={0.3}
                className="group px-4 py-2.5 rounded-full border border-champagne/30 bg-[#0C3A2C] text-xs font-mono uppercase tracking-widest text-champagne hover:border-champagne hover:bg-champagne hover:text-[#06241B] transition-all"
                ariaLabel="Scroll back to top"
              >
                <span className="flex items-center gap-2">
                  <span>Back to top</span>
                  <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
                </span>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-champagne/50">
          <p>
            © {new Date().getFullYear()} Rohan Shukla. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <span className="text-emerald-accent">Next.js 14</span>
            <span>•</span>
            <span className="text-champagne-light">Tailwind CSS</span>
            <span>•</span>
            <span className="text-champagne-light">Lenis</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
