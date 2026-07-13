import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description: "Capability & Discipline. Services & Operational Scopes.",
};

export default function ServicesPage() {
  return (
    <section className="min-h-screen pt-[120px] md:pt-[160px] pb-[80px] md:pb-[120px]">
      <div className="max-w-4xl mx-auto flex flex-col gap-16 md:gap-32">
        {/* HEADER BLOCK */}
        <div className="mb-8 md:mb-16">
          <div className="sec-label">
            <span>04</span> CAPABILITY & DISCIPLINE
          </div>
          <h1 className="font-serif text-[clamp(40px,6vw,88px)] leading-[1.0] tracking-[-0.03em] text-white mb-8">
            Services & <br />
            <em className="text-copper font-serif italic text-[clamp(28px,4vw,64px)]">Operational Scopes</em>
          </h1>
          <p className="text-[14px] font-light leading-[1.85] text-muted max-w-2xl">
            I partner with borderless product teams to turn complex technical requirements into scalable, reliable digital infrastructure. I bring a structural engineer’s rigor combined with high execution velocity across the full product lifecycle.
          </p>
        </div>

        {/* SECTION 1: CORE SERVICE PILLARS */}
        <div>
          <h2 className="text-[10px] font-medium tracking-[0.2em] uppercase text-copper mb-12 flex items-center gap-4">
            <span className="w-6 h-px bg-copper" />
            01 / Core Service Pillars
          </h2>

          <div className="flex flex-col gap-16 md:gap-24">
            {/* Pillar 1 */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-serif text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-[-0.01em] text-white mb-2">
                  Product Architecture & <em className="text-copper italic">Full-Stack Engineering</em>
                </h3>
                <span className="text-[12px] font-medium tracking-[0.1em] uppercase text-white/70">
                  System design built for long-term durability.
                </span>
              </div>
              <p className="text-[13px] font-light leading-[1.85] text-muted max-w-3xl">
                I design and build backend systems with strong architectural boundaries from the start. By focusing on clean data models and strict validation early, I reduce technical debt and create foundations that scale predictably.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[10px] font-medium tracking-[0.16em] uppercase text-white mb-4">Capabilities</h4>
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-copper flex-shrink-0" />
                      <p className="text-[12px] font-light leading-[1.6] text-muted">Relational database design & schema normalization (PostgreSQL + Prisma)</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-copper flex-shrink-0" />
                      <p className="text-[12px] font-light leading-[1.6] text-muted">High-throughput REST API development (Node.js + Express)</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-copper flex-shrink-0" />
                      <p className="text-[12px] font-light leading-[1.6] text-muted">Strict-mode TypeScript across the full stack</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-copper flex-shrink-0" />
                      <p className="text-[12px] font-light leading-[1.6] text-muted">Early elimination of architectural risk and bottlenecks</p>
                    </li>
                  </ul>
                </div>
                <div className="p-6 border border-faint bg-white/[0.02]">
                  <h4 className="text-[10px] font-medium tracking-[0.16em] uppercase text-copper mb-2">The Structural Edge</h4>
                  <p className="text-[12px] font-light leading-[1.7] text-muted">
                    I approach backend systems the way infrastructure is built — prioritizing data integrity, performance under load, and long-term maintainability from day one.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-serif text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-[-0.01em] text-white mb-2">
                  Autonomous Workflow & <em className="text-copper italic">Pipeline Orchestration</em>
                </h3>
                <span className="text-[12px] font-medium tracking-[0.1em] uppercase text-white/70">
                  Leveraged development through agentic engineering.
                </span>
              </div>
              <p className="text-[13px] font-light leading-[1.85] text-muted max-w-3xl">
                I use Google Antigravity to orchestrate autonomous agents for implementation, testing, and verification. By defining clear specifications and strong guardrails, I can deliver complex features with the speed and consistency of a small engineering team while maintaining full oversight.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[10px] font-medium tracking-[0.16em] uppercase text-white mb-4">Capabilities</h4>
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-copper flex-shrink-0" />
                      <p className="text-[12px] font-light leading-[1.6] text-muted">Google Antigravity multi-agent orchestration</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-copper flex-shrink-0" />
                      <p className="text-[12px] font-light leading-[1.6] text-muted">Custom engineering skill codification & guardrails (AGENTS.md)</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-copper flex-shrink-0" />
                      <p className="text-[12px] font-light leading-[1.6] text-muted">Asynchronous testing & verification pipelines</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-copper flex-shrink-0" />
                      <p className="text-[12px] font-light leading-[1.6] text-muted">Automated B2B data ingestion systems</p>
                    </li>
                  </ul>
                </div>
                <div className="p-6 border border-faint bg-white/[0.02]">
                  <h4 className="text-[10px] font-medium tracking-[0.16em] uppercase text-copper mb-2">The Structural Edge</h4>
                  <p className="text-[12px] font-light leading-[1.7] text-muted">
                    I act as the system architect directing an autonomous workflow. This allows me to ship sophisticated features faster without compromising quality or control.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-serif text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-[-0.01em] text-white mb-2">
                  Engineering-Driven UX & <em className="text-copper italic">Interface Systems</em>
                </h3>
                <span className="text-[12px] font-medium tracking-[0.1em] uppercase text-white/70">
                  Interfaces governed by technical logic.
                </span>
              </div>
              <p className="text-[13px] font-light leading-[1.85] text-muted max-w-3xl">
                I build frontend systems that are predictable, accessible, and directly aligned with the underlying architecture. Every interface is designed so that what’s specified in the system is exactly what gets shipped.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[10px] font-medium tracking-[0.16em] uppercase text-white mb-4">Capabilities</h4>
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-copper flex-shrink-0" />
                      <p className="text-[12px] font-light leading-[1.6] text-muted">Component-driven React architecture</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-copper flex-shrink-0" />
                      <p className="text-[12px] font-light leading-[1.6] text-muted">Utility-first Tailwind CSS</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-copper flex-shrink-0" />
                      <p className="text-[12px] font-light leading-[1.6] text-muted">Semantic HTML5 + full ARIA accessibility</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-copper flex-shrink-0" />
                      <p className="text-[12px] font-light leading-[1.6] text-muted">Production-ready Figma design systems</p>
                    </li>
                  </ul>
                </div>
                <div className="p-6 border border-faint bg-white/[0.02]">
                  <h4 className="text-[10px] font-medium tracking-[0.16em] uppercase text-copper mb-2">The Structural Edge</h4>
                  <p className="text-[12px] font-light leading-[1.7] text-muted">
                    I remove the gap between product intent and engineering output by ensuring frontend implementation stays faithful to the technical architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: ENGAGEMENT FRAMEWORK */}
        <div className="pt-16 border-t border-faint">
          <h2 className="text-[10px] font-medium tracking-[0.2em] uppercase text-copper mb-8 flex items-center gap-4">
            <span className="w-6 h-px bg-copper" />
            02 / Engagement Framework
          </h2>
          <div>
            <h3 className="font-serif text-[clamp(28px,4vw,48px)] leading-[1.05] tracking-[-0.02em] text-white mb-6">
              Operational <em className="text-copper italic">Approach</em>
            </h3>
            <p className="text-[13px] font-light leading-[1.85] text-muted max-w-2xl">
              I work within a clean, deterministic full-stack environment optimized for stability and speed. My stack is deliberately focused (Node.js, TypeScript, PostgreSQL, React) to minimize complexity and maximize reliability across projects.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
