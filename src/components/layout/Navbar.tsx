"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { EightyTwoBadge } from "@/components/ui/EightyTwoBadge";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Stack", href: "/stack" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false; // Anchor links
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav
      aria-label="Main Navigation"
      className="sticky top-0 z-[100] flex items-center justify-between border-b border-dim-2 bg-black/85 px-[var(--pad)] py-6 backdrop-blur-[12px]"
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2.5 no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-copper"
      >
        <EightyTwoBadge size={40} speed={0.6} />
        <span className="font-serif text-[18px] text-white hidden sm:inline-block tracking-wide">
          EIGHTY-TWO
        </span>
      </Link>

      {/* Desktop navigation links */}
      <ul className="hidden md:flex gap-8 list-none items-center m-0 p-0">
        {NAV_LINKS.map(({ label, href }) => {
          const active = isActive(href);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`relative text-[10px] tracking-[0.14em] uppercase no-underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-copper px-1 py-0.5 ${
                  active
                    ? "font-normal text-white"
                    : "font-light text-muted hover:text-white"
                }`}
              >
                {label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-copper rounded-full" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Desktop Status badge */}
      <div className="hidden md:flex items-center gap-2 border border-faint px-4 py-2 text-[10px] tracking-[0.12em] uppercase text-muted">
        <span
          className="h-1.5 w-1.5 rounded-full bg-copper"
          style={{ animation: "pulse 2.2s ease-in-out infinite" }}
        />
        Open to remote
      </div>

      {/* Mobile Hamburger Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer bg-transparent border-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-copper"
      >
        <span
          className={`w-6 h-[1.5px] bg-white transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-[4.5px]" : ""
          }`}
        />
        <span
          className={`w-6 h-[1.5px] bg-white transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`w-6 h-[1.5px] bg-white transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
          }`}
        />
      </button>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden fixed top-[85px] inset-x-0 bottom-0 bg-black/95 backdrop-blur-xl border-b border-dim-2 px-[var(--pad)] py-8 flex flex-col justify-between z-50 overflow-y-auto"
          >
            <ul className="flex flex-col gap-6 list-none m-0 p-0">
              {NAV_LINKS.map(({ label, href }) => {
                const active = isActive(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-3 text-[14px] tracking-[0.16em] uppercase no-underline transition-colors py-2 ${
                        active
                          ? "text-copper font-medium"
                          : "text-white/80 hover:text-white font-light"
                      }`}
                    >
                      {active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                      )}
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="pt-8 border-t border-faint flex flex-col gap-4">
              <div className="flex items-center gap-2 border border-faint px-4 py-3 text-[11px] tracking-[0.12em] uppercase text-muted w-fit">
                <span
                  className="h-2 w-2 rounded-full bg-copper"
                  style={{ animation: "pulse 2.2s ease-in-out infinite" }}
                />
                Open to remote
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

