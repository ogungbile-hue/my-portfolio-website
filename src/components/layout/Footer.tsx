"use client";

import Link from "next/link";
import { EightyTwoBadge } from "@/components/ui/EightyTwoBadge";

export function Footer() {
  return (
    <footer className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-dim-1 px-[var(--pad)] py-6 text-center md:text-left">
      <div className="flex items-center gap-3">
        <EightyTwoBadge size={48} isStatic />
      </div>

      {/* Copyright */}
      <span className="text-[9px] tracking-[0.12em] uppercase text-muted">
        © {new Date().getFullYear()} Precious · UX Engineer · All rights reserved
      </span>

      {/* Back to top */}
      <a
        href="#"
        className="text-[9px] tracking-[0.12em] uppercase text-muted no-underline transition-colors duration-200 hover:text-copper"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Back to top ↑
      </a>
    </footer>
  );
}
