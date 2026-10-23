"use client";

export function NoiseBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 noise-overlay opacity-60 mix-blend-overlay"
      aria-hidden="true"
    />
  );
}
