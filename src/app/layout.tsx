import type { Metadata } from "next";
import { dmSerif, dmMono } from "@/lib/fonts";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { GridBackground } from "@/components/ui/GridBackground";
import { Watermark } from "@/components/ui/Watermark";
import { Preloader } from "@/components/ui/Preloader";

export const metadata: Metadata = {
  title: {
    default: "Eighty-Two — Precious | UX Engineer",
    template: "%s | Eighty-Two",
  },
  description:
    "Former Quantity Surveyor turned UX Engineer. I architect the structure, then design the experience. Full-stack, systems-driven, globally available.",
  keywords: [
    "Precious",
    "UX Engineer",
    "Frontend Developer",
    "Eighty-Two",
    "React",
    "Construction Tech",
    "Nigeria",
  ],
  authors: [{ name: "Precious" }],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://eightytwo.dev",
    title: "Eighty-Two — Precious | UX Engineer",
    description:
      "Former Quantity Surveyor turned UX Engineer. Dense foundations. Precise interfaces.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pb — Precious | UX Engineer",
    description:
      "Former Quantity Surveyor turned UX Engineer. Dense foundations. Precise interfaces.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSerif.variable} ${dmMono.variable} scroll-smooth`}
    >
      <body suppressHydrationWarning className="min-h-screen bg-black text-white font-mono overflow-x-hidden antialiased">
        <Preloader />
        {/* Global ambient elements */}
        <CustomCursor />
        <GridBackground />
        <Watermark />

        {/* Structural layout */}
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
