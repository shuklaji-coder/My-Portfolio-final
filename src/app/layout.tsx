import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NoiseBackground } from "@/components/ui/NoiseBackground";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rohan Shukla | Java Full Stack Developer",
  description:
    "Java Full Stack Developer skilled in Spring Boot, React & MySQL. Experienced in building secure, scalable web applications with JWT authentication & REST APIs. Smart India Hackathon Winner & Mumbai Hacks 2025 Finalist.",
  keywords: [
    "Rohan Shukla",
    "Java Full Stack Developer",
    "Spring Boot Developer",
    "React Developer",
    "MySQL",
    "REST APIs",
    "JWT Authentication",
    "Sdac Infotech",
    "Thakur College of Engineering",
    "Smart India Hackathon Winner",
    "Mumbai Hacks 2025",
    "Mumbai India Developer",
    "Portfolio",
  ],
  authors: [{ name: "Rohan Shukla", url: "mailto:shuklarohan388@gmail.com" }],
  creator: "Rohan Shukla",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rohanshukla.dev",
    title: "Rohan Shukla | Java Full Stack Developer",
    description:
      "Java Full Stack Developer skilled in Spring Boot, React & MySQL. Experienced in building secure, scalable web applications with JWT authentication & REST APIs.",
    siteName: "Rohan Shukla Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Rohan Shukla - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Shukla | Full-Stack Developer & Software Architect",
    description:
      "Engineering resilient web systems, scalable Spring Boot backends, and cinematic digital experiences.",
    creator: "@rohanshukla_dev",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#06241B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#06241B] text-[#F7F1E3] font-sans selection:bg-[#E8D5A8] selection:text-[#06241B] antialiased">
        <SmoothScroll>
          <CustomCursor />
          <NoiseBackground />
          <Navbar />
          <main className="relative z-10 flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
