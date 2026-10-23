"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, Send, CornerDownLeft, Sparkles, Copy, Check, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "whoami",
      output: (
        <div className="text-champagne/85 space-y-1">
          <p className="text-emerald-accent font-semibold">
            Rohan Shukla — Java Full Stack Developer (Mumbai, India)
          </p>
          <p className="text-xs text-champagne/70">
            Skilled in Spring Boot 3, React, MySQL, JWT Authentication & REST APIs. Full-Stack Developer at Sdac Infotech (Intern). Winner of Internal Smart India Hackathon (SIH) & Finalist at Mumbai Hacks 2025.
          </p>
          <p className="text-[11px] text-champagne/50">
            Type <span className="text-champagne underline font-mono">skills</span>, <span className="text-champagne underline font-mono">projects</span>, or <span className="text-champagne underline font-mono">experience</span> to explore.
          </p>
        </div>
      ),
    },
  ]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    let output: React.ReactNode = null;

    switch (trimmed) {
      case "help":
      case "?":
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-champagne font-medium">Available commands:</p>
            <p><span className="text-emerald-accent font-bold">whoami</span> - Identity, summary & honors</p>
            <p><span className="text-emerald-accent font-bold">skills</span> - Core programming languages, frameworks & databases</p>
            <p><span className="text-emerald-accent font-bold">projects</span> - ChaloJi, Aatmi Yogshala (Client Project), MITS Sadhana & more</p>
            <p><span className="text-emerald-accent font-bold">experience</span> - Full Stack Developer Internship at Sdac Infotech</p>
            <p><span className="text-emerald-accent font-bold">education</span> - B.Tech (CGPA: 8.48) at Thakur College of Engineering</p>
            <p><span className="text-emerald-accent font-bold">stats</span> - Academic standing, hackathon prizes & security metrics</p>
            <p><span className="text-emerald-accent font-bold">hire</span> - Availability & consultation</p>
            <p><span className="text-emerald-accent font-bold">contact</span> - Phone (+91 9580849709) & email</p>
            <p><span className="text-emerald-accent font-bold">clear</span> - Wipe terminal output buffer</p>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-champagne-light font-medium">Rohan Shukla (Java Full Stack Developer)</p>
            <p className="text-champagne/70 leading-relaxed">
              Based in Mumbai, India. Skilled in Spring Boot, React, MySQL, JWT authentication, and REST APIs. Experienced in building secure, scalable web systems and cryptographic offline payment architectures.
            </p>
            <div className="flex items-center gap-2 text-emerald-accent text-[11px] mt-1">
              <Award className="w-3.5 h-3.5" />
              <span>SIH Hackathon Winner • Mumbai Hacks 2025 Finalist • CGPA: 8.48</span>
            </div>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-champagne font-semibold mb-1">Technical Skills from CV:</p>
            <p>Languages   [Java 17/21, Python, C++, TypeScript, JavaScript] <span className="text-emerald-accent">[██████████]</span></p>
            <p>Frameworks  [Spring Boot 3, React, Spring Security, Hibernate]  <span className="text-emerald-accent">[██████████]</span></p>
            <p>Databases   [MySQL, MongoDB, PostgreSQL, H2 Database]          <span className="text-emerald-accent">[█████████░]</span></p>
            <p>DevOps/Cloud[Docker, Kubernetes, AWS S3, Git, Maven, Postman]  <span className="text-emerald-accent">[█████████░]</span></p>
            <p>Core Concepts: RESTful APIs, JWT Auth, MVC Architecture, Cryptography (RSA/AES), Concurrency</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-champagne font-medium">Featured Production Projects & Live Apps:</p>
            <div className="p-2 rounded bg-[#06241B] border border-champagne/15">
              <span className="text-emerald-accent font-bold">1. ChaloJi [Live Web & Google Play Store]</span>: Intercity travel platform.
              <p className="text-champagne/70 text-[11px] mt-0.5">
                • Web: <a href="https://chalojii.in/" target="_blank" rel="noreferrer" className="text-champagne underline">chalojii.in</a> | • Play Store App: <a href="https://play.google.com/store/apps/details?id=com.rohan3543.chaloji" target="_blank" rel="noreferrer" className="text-emerald-accent underline">Rides App</a> | • Driver App: <a href="https://play.google.com/store/apps/details?id=com.chaloji.driver" target="_blank" rel="noreferrer" className="text-emerald-accent underline">Driver App</a>
              </p>
            </div>
            <div className="p-2 rounded bg-[#06241B] border border-champagne/15">
              <span className="text-emerald-accent font-bold">2. MITS Sadhana [Live Web & Google Play Store]</span>: Institutional academic portal.
              <p className="text-champagne/70 text-[11px] mt-0.5">
                • Web: <a href="https://mitssadhana.in/" target="_blank" rel="noreferrer" className="text-champagne underline">mitssadhana.in</a> | • Android App: <a href="https://play.google.com/store/apps/details?id=com.rohan2342.MitSadhana" target="_blank" rel="noreferrer" className="text-emerald-accent underline">Play Store</a>
              </p>
            </div>
            <div className="p-2 rounded bg-[#06241B] border border-champagne/15">
              <span className="text-emerald-accent font-bold">3. CafeWala [HD Video Showcase]</span>: Artisanal dining & ordering app with live menu filtering, custom cart modifiers, and table reservations.
            </div>
            <div className="p-2 rounded bg-[#06241B] border border-champagne/15">
              <span className="text-emerald-accent font-bold">4. Aatmi Yogshala [Client Project]</span>: Live commercial platform (<a href="https://aatmivyogshala.com/" target="_blank" rel="noreferrer" className="text-champagne underline">aatmivyogshala.com</a>) with video showcase, retreat catalog & automated lead inquiry pipeline.
            </div>
            <div className="p-2 rounded bg-[#06241B] border border-champagne/15">
              <span className="text-emerald-accent font-bold">5. AI-Powered Sasta Bazaar (Feb 2025 – Jul 2025)</span>: Multi-vendor marketplace with Spring AI, JWT authentication, and 3-tier RBAC.
            </div>
          </div>
        );
        break;

      case "experience":
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-champagne font-medium">Work Experience:</p>
            <div className="p-2.5 rounded bg-[#06241B] border border-champagne/15">
              <div className="flex justify-between items-center text-emerald-accent font-bold">
                <span>Full Stack Developer (Internship)</span>
                <span className="text-champagne/60 font-mono text-[10px]">Jul 2025 – Nov 2025</span>
              </div>
              <p className="text-champagne-light text-[11px] mb-1">Sdac Infotech • On-site, Mumbai</p>
              <ul className="list-disc list-inside text-champagne/70 text-[11px] space-y-1">
                <li>Developed scalable full-stack web applications using Java, Spring Boot, React, and MySQL.</li>
                <li>Designed and implemented RESTful APIs enabling efficient system communication.</li>
                <li>Built dynamic UIs using React & Tailwind, reducing API response time via code refactoring.</li>
                <li>Followed clean code MVC architecture and collaborated in an Agile/Scrum sprint environment.</li>
              </ul>
            </div>
          </div>
        );
        break;

      case "education":
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-champagne font-medium">Education Background:</p>
            <div className="p-2.5 rounded bg-[#06241B] border border-champagne/15">
              <div className="flex justify-between items-center text-emerald-accent font-bold">
                <span>Thakur College of Engineering, Mumbai</span>
                <span className="text-champagne/60 font-mono text-[10px]">Jun 2024 – Jun 2027</span>
              </div>
              <p className="text-champagne-light text-[11px]">B.Tech in Computer Engineering • <strong className="text-champagne">CGPA: 8.48</strong></p>
              <p className="text-champagne/70 text-[10px] mt-1">🏆 Winner – Internal Smart India Hackathon (SIH) | 🚀 Finalist – Mumbai Hacks 2025</p>
            </div>
            <div className="p-2.5 rounded bg-[#06241B] border border-champagne/15">
              <div className="flex justify-between items-center text-emerald-accent font-bold">
                <span>Thakur Polytechnic, Mumbai</span>
                <span className="text-champagne/60 font-mono text-[10px]">Jun 2021 – May 2024</span>
              </div>
              <p className="text-champagne-light text-[11px]">Diploma in Computer Engineering • <strong className="text-champagne">CGPA: 8.14</strong></p>
              <p className="text-champagne/70 text-[10px] mt-1">Organized and managed technical college events and logistics.</p>
            </div>
          </div>
        );
        break;

      case "stats":
        output = (
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 rounded bg-[#06241B] border border-champagne/10">
              <span className="text-champagne-light text-base font-serif">8.48</span>
              <p className="text-champagne/50 text-[10px]">B.Tech CGPA</p>
            </div>
            <div className="p-2 rounded bg-[#06241B] border border-champagne/10">
              <span className="text-champagne-light text-base font-serif">1st Prize</span>
              <p className="text-champagne/50 text-[10px]">Smart India Hackathon (SIH)</p>
            </div>
            <div className="p-2 rounded bg-[#06241B] border border-champagne/10">
              <span className="text-champagne-light text-base font-serif">Finalist</span>
              <p className="text-champagne/50 text-[10px]">Mumbai Hacks 2025</p>
            </div>
            <div className="p-2 rounded bg-[#06241B] border border-champagne/10">
              <span className="text-champagne-light text-base font-serif">RSA + AES</span>
              <p className="text-champagne/50 text-[10px]">Mesh Encryption</p>
            </div>
          </div>
        );
        break;

      case "hire":
      case "contact":
        output = (
          <div className="space-y-1.5 text-xs">
            <p className="text-emerald-accent font-bold">Direct Channels for Rohan Shukla:</p>
            <p>• Phone: <a href="tel:+919580849709" className="text-champagne underline">+91 9580849709</a></p>
            <p>• Email: <a href="mailto:shuklarohan388@gmail.com" className="text-champagne underline">shuklarohan388@gmail.com</a></p>
            <p>• Location: Mumbai, India</p>
            <p>• WhatsApp: <a href="https://wa.me/919580849709" target="_blank" rel="noreferrer" className="text-champagne underline">+91 9580849709 (Direct Chat)</a></p>
            <p>• Quick Message: Scroll to <a href="#contact" className="text-emerald-accent underline font-semibold">Contact Section</a></p>
          </div>
        );
        break;

      case "clear":
      case "cls":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <p className="text-xs text-rose-400">
            Command not recognized: &quot;{trimmed}&quot;. Type <span className="underline font-bold text-champagne cursor-pointer" onClick={() => handleCommand("help")}>help</span> to see available operations.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setInput("");
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("shuklarohan388@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-[#06241B]/95 border border-champagne/20 shadow-2xl overflow-hidden font-mono text-champagne-light text-xs">
      {/* Terminal Top Window Bar */}
      <div className="px-4 py-3 bg-[#082B21] border-b border-champagne/15 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#EF4444] opacity-80" />
          <div className="w-3 h-3 rounded-full bg-[#F59E0B] opacity-80" />
          <div className="w-3 h-3 rounded-full bg-[#10B981] opacity-80" />
          <span className="text-[11px] text-champagne/60 ml-2 tracking-wide font-sans">
            rohan@shukla-station:~ (zsh)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={copyEmail}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#06241B] border border-champagne/15 text-[10px] text-champagne/70 hover:text-champagne hover:border-champagne transition-colors"
            title="Copy Rohan's Email"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-accent" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? "Copied" : "Copy Email"}</span>
          </button>
        </div>
      </div>

      {/* Quick Action Suggestion Badges */}
      <div className="px-3 sm:px-4 py-2 bg-[#041C15]/70 border-b border-champagne/10 flex flex-wrap items-center gap-1.5 sm:gap-2">
        <span className="text-[9px] sm:text-[10px] text-champagne/40 uppercase tracking-widest mr-1">
          Quick:
        </span>
        {["whoami", "skills", "projects", "experience", "education", "stats", "hire", "clear"].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#0C3A2C]/60 border border-champagne/15 text-[10px] sm:text-[11px] text-champagne/80 hover:text-champagne-light hover:border-champagne/40 transition-colors"
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Terminal Body Screen */}
      <div className="p-3 sm:p-5 max-h-[280px] sm:max-h-[300px] overflow-y-auto space-y-3" data-lenis-prevent>
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-champagne/50">
              <span className="text-emerald-accent">rohan@dev:~$</span>
              <span className="text-champagne-light font-bold">{item.command}</span>
            </div>
            <div className="pl-3 sm:pl-4 border-l border-champagne/15 pt-0.5">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommand(input);
        }}
        className="px-3 sm:px-4 py-2.5 sm:py-3 bg-[#082B21]/90 border-t border-champagne/15 flex items-center gap-2"
      >
        <span className="text-emerald-accent font-bold text-xs">rohan@dev:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type 'skills', 'projects', 'experience'..."
          className="flex-grow bg-transparent text-champagne-light placeholder:text-champagne/30 focus:outline-none text-base sm:text-xs font-mono min-w-0"
        />
        <button
          type="submit"
          className="w-8 h-8 rounded-lg bg-champagne text-[#06241B] flex items-center justify-center hover:bg-champagne-light transition-colors shrink-0"
          aria-label="Execute command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
