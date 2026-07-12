const TICKER_ITEMS = [
  "Quantity Surveyor turned UX Engineer",
  "Systems Thinker",
  "Full-Stack Capable",
  "Principal Product Engineer, Eighty-Two Limited",
  "Open to Distributed Product Roles",
  "Construction → Digital",
  "AI-Accelerated Development",
  "Borderless · Scalable · Precise",
];

export function Ticker() {
  // Duplicate items for seamless infinite scroll
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative z-10 overflow-hidden border-t border-dim-1 py-3">
      <div
        className="flex w-max"
        style={{ animation: "scroll 30s linear infinite" }}
      >
        {items.map((text, i) => (
          <div
            key={`${text}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap px-9 text-[9px] font-light tracking-[0.16em] uppercase text-muted"
          >
            <span className="h-[3px] w-[3px] shrink-0 rounded-full bg-copper" />
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
