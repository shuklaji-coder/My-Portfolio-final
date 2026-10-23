"use client";

import { Sparkles } from "lucide-react";

export function LuxuryBanner() {
  const items = [
    "FULL-STACK WEB ARCHITECTURE",
    "JAVA 21 & SPRING BOOT 3",
    "NEXT.JS 14 APP ROUTER",
    "REACT NATIVE MOBILE CRAFT",
    "DISTRIBUTED MICROSERVICES",
    "SUB-300MS LIGHTNING LATENCY",
    "AWWWARDS-TIER MOTION",
    "ENTERPRISE SECURITY & SOC2",
  ];

  const duplicated = [...items, ...items, ...items];

  return (
    <div className="relative w-full py-4 bg-[#041B14] border-y border-champagne/15 overflow-hidden select-none">
      <div className="flex overflow-hidden group">
        <div className="flex gap-8 shrink-0 animate-marquee-left group-hover:[animation-play-state:paused] items-center">
          {duplicated.map((text, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-champagne/70 font-medium">
                {text}
              </span>
              <Sparkles className="w-3 h-3 text-emerald-accent/80 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
