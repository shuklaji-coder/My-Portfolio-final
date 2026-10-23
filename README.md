# Rohan Shukla — Award-Worthy Portfolio Website

> A bespoke, cinematic personal portfolio engineered for high-impact software developers. Built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lenis** smooth inertial scrolling under the dark luxury **"Emerald & Champagne"** design system.

---

## 💎 Design System: Emerald & Champagne

Adheres strictly to the **60/30/10 Rule**:
- **60% Background**: `#06241B` (Deep Emerald) & `#041C15` (Deep Abyss)
- **30% Surfaces & Typography**: `#0C3A2C` (Surface Emerald) & `#F7F1E3` (Champagne Light)
- **10% Accent & Highlights**: `#E8D5A8` (Champagne Gold), secondary `#D9BF85`, with interactive highlights in `#10B981` (Emerald Accent)
- **Typography**: `Cormorant Garamond` (Large, elegant serif headings) paired with `Inter` (Crisp modern sans body)
- **Atmosphere**: Subtle film-grain noise overlay, soft radial glows, 1px champagne glass borders, magnetic buttons, and 3D card tilts.

---

## ⚡ Tech Stack & Architecture

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & Client Boundaries)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing, no `any`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with customized color tokens and keyframes
- **Animation**: [Framer Motion](https://www.framer.com/motion/) for fluid page choreography, staggered reveals, and modals
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis) for inertial luxury scrolling
- **Icons**: [Lucide React](https://lucide.dev/)
- **Micro-effects**: Interactive canvas confetti, magnetic pull buttons, custom champagne cursor with spring physics

---

## 📂 Project Architecture

```
├── public/
│   └── resume-rohan-shukla.pdf       # Downloadable CV asset
├── src/
│   ├── app/
│   │   ├── globals.css               # Dark luxury base, custom scrollbar, noise overlay
│   │   ├── layout.tsx                # Metadata, Google Fonts, Root Shell
│   │   ├── page.tsx                  # Home page assembling all sections & preloader
│   │   ├── robots.ts                 # SEO search engine rules
│   │   └── sitemap.ts                # Auto-generated XML sitemap
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Glassmorphic header, scroll progress, spy navigation
│   │   │   ├── Footer.tsx            # Luxury footer with live IST time & back-to-top
│   │   │   └── SmoothScroll.tsx      # Lenis smooth inertial scrolling wrapper
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Huge serif headline, word reveal, rotating roles, CTAs
│   │   │   ├── AboutSection.tsx      # Parallax portrait, bio, animated counter stats
│   │   │   ├── SkillsSection.tsx     # Dual infinite marquee + categorized skill cards
│   │   │   ├── ProjectsSection.tsx   # Bento-grid flagships with 3D tilt & spotlight
│   │   │   ├── ProjectModal.tsx      # Comprehensive case-study modal dossier
│   │   │   ├── ServicesSection.tsx   # 4 core engineering capabilities
│   │   │   ├── ProcessSection.tsx    # Scroll-drawn vertical timeline (5 phases)
│   │   │   ├── TestimonialsSection.tsx # Auto-sliding client carousel with metrics
│   │   │   ├── PricingSection.tsx    # 3 investment tiers with featured package
│   │   │   └── ContactSection.tsx    # Interactive form with validation & confetti
│   │   └── ui/
│   │       ├── CustomCursor.tsx      # Champagne trailing ring cursor (hides on touch)
│   │       ├── MagneticButton.tsx    # Cursor-magnetic spring pull button
│   │       ├── Preloader.tsx         # Monogram page-load intro curtain reveal
│   │       └── NoiseBackground.tsx   # Film grain overlay
│   ├── data/
│   │   └── portfolio.ts              # ⭐️ CENTRAL DATA STORE (Edit all content here)
│   ├── lib/
│   │   └── utils.ts                  # Classname merging helper (clsx + twMerge)
│   └── types/
│       └── index.ts                  # TypeScript definitions for all domain models
├── tailwind.config.ts                # Design tokens & color variables
├── tsconfig.json
└── package.json
```

---

## 🛠️ How to Edit Content (Quick Guide)

All personal details, projects, skills, pricing, and testimonials are decoupled into **`src/data/portfolio.ts`**. You do not need to touch component JSX to update your content!

### 1. Update Personal Info & Socials
Open `src/data/portfolio.ts` and modify `personal`:
```ts
personal: {
  name: "Rohan Shukla",
  title: "Full-Stack Developer & Software Architect",
  tagline: "I craft resilient, high-conversion web products...",
  email: "your-email@example.com",
  whatsappUrl: "https://wa.me/your-number",
  socialLinks: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    twitter: "https://twitter.com/your-handle",
  },
  // ...
}
```

### 2. Add or Edit Projects & Case Studies
In `src/data/portfolio.ts`, each project under `projects` includes:
- `title`, `subtitle`, `category`, `thumbnail`, `tech` tags
- `caseStudy`: Overview, Challenge, Solution, Architecture highlights, and quantitative metrics (e.g., P99 latency, Uptime, Conversion).

### 3. Replace Resume PDF
Place your updated resume file in `public/resume-rohan-shukla.pdf`.

---

## 🎨 Changing Colors & Design System

The color palette is configured in `tailwind.config.ts`:
```ts
colors: {
  background: "#06241B", // Deep emerald
  surface: {
    DEFAULT: "#0C3A2C",  // Card surface
    muted: "#082B21",
    border: "rgba(232, 213, 168, 0.12)",
  },
  champagne: {
    DEFAULT: "#E8D5A8",  // Accent gold
    light: "#F7F1E3",    // Primary text
    dark: "#D9BF85",
  },
  emerald: {
    accent: "#10B981",   // Glow & active highlights
  },
}
```

---

## 📬 Connecting the Contact Form

The contact form in `src/components/sections/ContactSection.tsx` is fully functional with live client-side validation, error handling, loading states, and celebratory confetti.

### Option A: Formspree (Zero code, takes 2 minutes)
1. Sign up for free at [formspree.io](https://formspree.io).
2. Create a form and copy your Form ID (e.g., `https://formspree.io/f/xbjnqweo`).
3. In `ContactSection.tsx`, update `handleSubmit`:
```ts
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

### Option B: Resend (Next.js Server Route)
1. Install Resend: `npm install resend`
2. Create `src/app/api/send/route.ts`:
```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, projectType, budget, message } = await req.json();
  const data = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: ["rohanshukla.dev@gmail.com"],
    subject: `New Inquiry from ${name} (${projectType})`,
    text: `Budget: ${budget}\nEmail: ${email}\n\n${message}`,
  });
  return Response.json(data);
}
```

---

## 🚀 Deployment on Vercel

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of award-worthy portfolio"
   git remote add origin https://github.com/rohanshukla/portfolio.git
   git push -u origin main
   ```
2. Navigate to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository.
4. Next.js App Router will be automatically detected.
5. Click **Deploy**. Your site will be live on an edge-cached CDN with HTTPS in seconds!

---

## ♿ Accessibility & Performance

- **WCAG AA Compliance**: High-contrast ratios between `#06241B` and `#F7F1E3`.
- **Keyboard Navigation**: Native tab stops and `:focus-visible` styling on all interactive elements.
- **`prefers-reduced-motion`**: Lenis and cursor lag automatically scale down or disable for sensitive users.
- **Asset Optimization**: `next/image` with AVIF/WebP formats and responsive sizing.
