import Link from "next/link";
import { EightyTwoBadge } from "@/components/ui/EightyTwoBadge";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Stack", href: "/stack" },
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between border-b border-dim-2 bg-black/85 px-[var(--pad)] py-6 backdrop-blur-[12px]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <EightyTwoBadge size={40} speed={0.6} />
        <span className="font-serif text-[18px] text-white hidden sm:inline-block tracking-wide">
          EIGHTY-TWO
        </span>
      </Link>

      {/* Navigation links */}
      <ul className="hidden md:flex gap-8 list-none">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-[10px] font-light tracking-[0.14em] uppercase text-muted no-underline transition-colors duration-200 hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Status badge */}
      <div className="flex items-center gap-2 border border-faint px-4 py-2 text-[10px] tracking-[0.12em] uppercase text-muted">
        <span
          className="h-1.5 w-1.5 rounded-full bg-copper"
          style={{ animation: "pulse 2.2s ease-in-out infinite" }}
        />
        Open to remote
      </div>
    </nav>
  );
}
