import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stack & Orchestration",
  description: "Tech Stack & Orchestration Methodology. Relational Integrity & Robust Backends.",
};

export default function StackPage() {
  return (
    <section className="min-h-screen pt-[120px] md:pt-[160px] pb-[80px] md:pb-[120px]">
      {/* PAGE HEADER */}
      <div className="max-w-4xl mx-auto mb-16 md:mb-32">
        <div className="sec-label">
          <span>01</span> THE ENGINE ROOM
        </div>
        <h1 className="font-serif text-[clamp(40px,6vw,88px)] leading-[1.0] tracking-[-0.03em] text-white mb-8">
          Tech Stack & <br />
          <em className="text-copper font-serif italic">Orchestration Methodology</em>
        </h1>
        <p className="text-[14px] font-light leading-[1.85] text-muted max-w-2xl">
          I don’t optimize for writing more code. I optimize for building systems that scale with minimal ongoing intervention. By combining a deterministic, type-safe full-stack foundation with modern agentic workflows, I deliver production-grade SaaS platforms with high velocity and strong structural integrity.
        </p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-16 md:gap-32">
        {/* SECTION 1: AGENTIC DEVELOPMENT */}
        <div>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] leading-[1.05] tracking-[-0.02em] text-white mb-6">
            System Orchestration via <span className="text-copper">Google Antigravity</span>
          </h2>
          <p className="text-[13px] font-light leading-[1.85] text-muted mb-6 max-w-2xl">
            I treat Google Antigravity as mission control for asynchronous development. Instead of writing every line myself, I define clear specifications, constraints, and success criteria, then orchestrate multiple autonomous agents to handle implementation, testing, and verification across the terminal, database, and browser.
          </p>
          <h3 className="text-[11px] font-medium tracking-[0.1em] uppercase text-white mb-6">
            How it works in practice:
          </h3>
          <ul className="flex flex-col gap-6 mb-8">
            <li className="flex items-start gap-4">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
              <p className="text-[13px] font-light leading-[1.7] text-muted">
                <strong className="text-white font-normal">Architectural Guardrails (AGENTS.md):</strong> Every project includes strict, machine-readable constraints covering runtime behavior, database schema rules, testing requirements, and error boundaries.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
              <p className="text-[13px] font-light leading-[1.7] text-muted">
                <strong className="text-white font-normal">Skill Codification:</strong> I package reusable engineering patterns (complex error handling, schema migrations, data validation logic, etc.) into discrete skills that agents can reliably apply.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
              <p className="text-[13px] font-light leading-[1.7] text-muted">
                <strong className="text-white font-normal">Parallel Verification:</strong> Multiple agents work concurrently on building features, running integration tests, and generating behavioral artifacts. I review the structural changes and approve only when quality thresholds are met.
              </p>
            </li>
          </ul>
          <p className="text-[12px] font-light leading-[1.85] text-copper max-w-2xl italic border-l-2 border-copper/30 pl-4 py-1">
            This approach gives me leverage without sacrificing control or correctness.
          </p>
        </div>

        {/* SECTION 2: THE VERTICAL STACK (DATA & LOGIC) */}
        <div>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] leading-[1.05] tracking-[-0.02em] text-white mb-6">
            Relational Integrity & <span className="text-copper">Robust Backends</span>
          </h2>
          <p className="text-[13px] font-light leading-[1.85] text-muted mb-10 max-w-2xl">
            My backends are built for long-term stability, data integrity, and operational efficiency.
          </p>
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-4">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
              <p className="text-[13px] font-light leading-[1.7] text-muted">
                <strong className="text-white font-normal">PostgreSQL + Prisma ORM:</strong> Schema-first design with strict normalization, thoughtful indexing, connection pooling, and transaction safety. I prioritize data integrity and query performance from day one.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
              <p className="text-[13px] font-light leading-[1.7] text-muted">
                <strong className="text-white font-normal">Node.js + Express:</strong> Clean, modular REST APIs with strong middleware layers, consistent error handling, and secure state management.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
              <p className="text-[13px] font-light leading-[1.7] text-muted">
                <strong className="text-white font-normal">Data Ingestion & Automation:</strong> Custom pipelines (often using Google Apps Script and lightweight JSON/CSV processors) that reliably move structured data from external sources into the database with validation and auditability.
              </p>
            </li>
          </ul>
        </div>

        {/* SECTION 3: THE HORIZONTAL STACK (INTERFACE DESIGN) */}
        <div>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] leading-[1.05] tracking-[-0.02em] text-white mb-6">
            Interface Engineering & <span className="text-copper">System-Driven UI</span>
          </h2>
          <p className="text-[13px] font-light leading-[1.85] text-muted mb-10 max-w-2xl">
            The frontend must reflect the underlying logic. I build interfaces that are predictable, accessible, and maintainable at scale.
          </p>
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-4">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
              <p className="text-[13px] font-light leading-[1.7] text-muted">
                <strong className="text-white font-normal">TypeScript (strict mode):</strong> End-to-end type safety that prevents entire classes of runtime errors and makes refactoring safe.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
              <p className="text-[13px] font-light leading-[1.7] text-muted">
                <strong className="text-white font-normal">React + Tailwind CSS:</strong> Component-driven architecture with custom hooks for state management and utility-first styling for performance and consistency.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
              <p className="text-[13px] font-light leading-[1.7] text-muted">
                <strong className="text-white font-normal">Figma → Production Fidelity:</strong> I design systems in Figma that map directly to the component tree and layout used in code. Every interface uses semantic HTML5 and proper ARIA attributes for accessibility.
              </p>
            </li>
          </ul>
        </div>

        {/* BOTTOM CALLOUT / METHODOLOGY IMPACT */}
        <div className="mt-16 p-8 border border-faint bg-white/[0.02] rounded-sm text-center">
          <p className="text-[13px] font-light tracking-[0.04em] leading-[1.8] text-muted">
            <span className="text-copper text-[16px] mr-2">❝</span>
            This methodology has allowed me to ship complex features significantly faster while maintaining high code quality and reducing technical debt.
            <span className="text-copper text-[16px] ml-2">❞</span>
          </p>
        </div>
      </div>
    </section>
  );
}
