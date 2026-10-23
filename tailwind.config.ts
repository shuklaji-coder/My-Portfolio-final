import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#06241B",
        surface: {
          DEFAULT: "#0C3A2C",
          muted: "#082B21",
          hover: "#114736",
          border: "rgba(232, 213, 168, 0.12)",
          "border-bright": "rgba(232, 213, 168, 0.35)",
        },
        champagne: {
          DEFAULT: "#E8D5A8",
          light: "#F7F1E3",
          dark: "#D9BF85",
          muted: "#A89872",
        },
        emerald: {
          accent: "#10B981",
          glow: "#059669",
          deep: "#041C15",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "champagne-sm": "0 0 15px -3px rgba(232, 213, 168, 0.15)",
        "champagne-md": "0 0 30px -5px rgba(232, 213, 168, 0.25)",
        "emerald-glow": "0 0 50px -10px rgba(16, 185, 129, 0.25)",
        "card-luxury": "0 20px 40px -15px rgba(2, 18, 13, 0.7)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "marquee-left": "marqueeLeft 40s linear infinite",
        "marquee-right": "marqueeRight 40s linear infinite",
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(1.5deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
