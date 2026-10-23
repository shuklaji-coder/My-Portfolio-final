export interface ProjectCaseStudy {
  overview: string;
  challenge: string;
  solution: string;
  architecture: string[];
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Full-Stack SaaS" | "E-Commerce" | "Fintech & Web3" | "Mobile & AI" | "Android Apps" | "Client Project";
  thumbnail: string;
  videoUrl?: string;
  isClientProject?: boolean;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  playStoreUrl?: string;
  driverAppUrl?: string;
  featured: boolean;
  bentoSpan?: string; // tailwind grid col/row span
  caseStudy: ProjectCaseStudy;
}

export interface SkillItem {
  name: string;
  iconName: string;
  level: "Advanced" | "Expert" | "Production-Ready";
  category: "frontend" | "backend" | "mobile" | "database" | "cloud" | "tools";
  description: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  idealFor: string;
  timeline: string;
}

export interface ProcessPhase {
  number: string;
  title: string;
  duration: string;
  tagline: string;
  description: string;
  tasks: string[];
  outcome: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  metric: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  billingPeriod: string;
  featured: boolean;
  timeline: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  points: string[];
  techUsed: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  achievements: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    title: string;
    rotatingTitles: string[];
    tagline: string;
    bioParagraphs: string[];
    stats: {
      value: number;
      suffix: string;
      label: string;
      subtext: string;
    }[];
    location: string;
    availability: string;
    timezone: string;
    email: string;
    phoneFormatted?: string;
    whatsappUrl: string;
    socialLinks: {
      github: string;
      linkedin: string;
      twitter: string;
      whatsapp: string;
      email: string;
    };
    resumeUrl: string;
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: Project[];
  skills: {
    marqueeRow1: { name: string; category: string }[];
    marqueeRow2: { name: string; category: string }[];
    categories: SkillCategory[];
  };
  services: Service[];
  process: ProcessPhase[];
  testimonials: Testimonial[];
  pricing?: PricingPlan[];
  faq: { question: string; answer: string }[];
}
