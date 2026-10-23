"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (currentScrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // Glass background after 50px
      setIsScrolled(currentScrollY > 50);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Active section spy
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      let currentActive = "";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentActive = `#${sectionId}`;
            break;
          }
        }
      }
      if (currentActive) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-[90] bg-transparent pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-champagne/40 via-champagne to-emerald-accent transition-all duration-75 ease-out shadow-[0_0_12px_rgba(232,213,168,0.7)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Glassmorphic Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-[#06241B]/85 backdrop-blur-xl border-b border-champagne/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* Brand Monogram */}
          <a
            href="#"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Rohan Shukla - Back to top"
          >
            <div className="w-10 h-10 rounded-xl border border-champagne/30 bg-[#0C3A2C]/80 flex items-center justify-center transition-all duration-300 group-hover:border-champagne group-hover:shadow-[0_0_15px_rgba(232,213,168,0.25)]">
              <span className="font-serif text-lg font-light tracking-wider text-champagne-light">
                RS<span className="text-emerald-accent font-sans">.</span>
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif text-base tracking-wider uppercase text-champagne-light font-medium leading-none">
                Rohan Shukla
              </span>
              <span className="text-[10px] uppercase tracking-widest text-champagne/60 mt-1 leading-none">
                Full-Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-[#0C3A2C]/50 border border-champagne/10 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs uppercase tracking-widest font-sans transition-colors duration-200 ${
                    isActive ? "text-champagne font-semibold" : "text-champagne/70 hover:text-champagne-light"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full bg-champagne/10 border border-champagne/25 -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {/* Subtle underline hover effect */}
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-[1px] bg-champagne scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                </a>
              );
            })}
          </div>

          {/* Right Action: Magnetic CTA */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton
              href="#contact"
              pullStrength={0.25}
              className="px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium bg-[#0C3A2C] border border-champagne/40 text-champagne-light hover:border-champagne hover:bg-champagne hover:text-[#06241B] transition-all duration-300 shadow-champagne-sm group"
            >
              <span className="flex items-center gap-1.5">
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 rounded-xl border border-champagne/20 bg-[#0C3A2C]/70 flex items-center justify-center text-champagne hover:border-champagne transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#06241B]/95 backdrop-blur-2xl md:hidden pt-28 px-8 flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-champagne/50">
                Navigation Menu
              </span>
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    className="font-serif text-3xl font-light text-champagne-light hover:text-champagne transition-colors flex items-center justify-between border-b border-champagne/10 pb-3"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-5 h-5 text-champagne/40" />
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4 pt-6">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-xl bg-champagne text-[#06241B] font-medium uppercase tracking-widest text-xs text-center shadow-champagne-md"
              >
                Let&apos;s Build Something
              </a>
              <div className="flex items-center justify-center gap-2 text-xs text-champagne/60">
                <Sparkles className="w-3.5 h-3.5 text-emerald-accent" />
                <span>Available for new projects Q2/Q3</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
