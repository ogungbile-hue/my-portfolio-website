import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Record",
  description: "Curriculum Vitae — Precious Oluwapelumi Ogungbile.",
};

export default function CVPage() {
  return (
    <section className="min-h-screen pt-[120px] md:pt-[160px] pb-[80px] md:pb-[120px]">
      <div className="max-w-4xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* HEADER BLOCK */}
        <div className="flex flex-col gap-6">
          <div className="sec-label">
            <span>03</span> THE PROFESSIONAL RECORD
          </div>
          <h1 className="font-serif text-[clamp(40px,6vw,88px)] leading-[1.0] tracking-[-0.03em] text-white">
            Curriculum Vitae <br />
            <em className="text-copper font-serif italic text-[clamp(28px,4vw,64px)]">Precious Oluwapelumi Ogungbile</em>
          </h1>
          <div className="pt-8">
            <a
              href="https://drive.google.com/file/d/1A6MPrIB_uBmhKnNiu7IRaWrXYs9gbojd/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-faint bg-white/[0.02] text-copper font-mono text-[11px] font-medium tracking-[0.12em] uppercase px-8 py-4 transition-colors hover:border-copper/40 hover:bg-copper/5"
            >
              [ VIEW / DOWNLOAD PDF VERSION ]
            </a>
          </div>
        </div>

        {/* EXPERIENCE TIMELINE */}
        <div>
          <h2 className="font-serif text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-[-0.01em] text-white mb-12">
            Professional <em className="text-copper italic">Experience</em>
          </h2>

          <div className="flex flex-col gap-16 border-l border-faint pl-8 md:pl-12 ml-2 md:ml-4">
            
            {/* ROLE 1 */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-copper border-4 border-black" />
              <div className="flex flex-col gap-2 mb-6">
                <span className="text-[10px] font-medium tracking-[0.16em] uppercase text-copper">Present</span>
                <h3 className="text-[20px] font-serif text-white tracking-[-0.01em]">Principal Product Engineer</h3>
                <span className="text-[12px] font-light tracking-[0.08em] uppercase text-muted">Eighty-Two Limited</span>
              </div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-copper/50 flex-shrink-0" />
                  <p className="text-[13px] font-light leading-[1.7] text-muted">
                    <strong className="text-white font-normal">System Orchestration:</strong> Orchestrate automated engineering workflows using Google Antigravity to build, test, and deploy enterprise-grade SaaS platforms synchronously.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-copper/50 flex-shrink-0" />
                  <p className="text-[13px] font-light leading-[1.7] text-muted">
                    <strong className="text-white font-normal">Full-Stack Architecture:</strong> Design and engineer robust backend systems using PostgreSQL, Prisma ORM, and Node.js with strict type-safety across the stack via TypeScript.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-copper/50 flex-shrink-0" />
                  <p className="text-[13px] font-light leading-[1.7] text-muted">
                    <strong className="text-white font-normal">Interface Engineering:</strong> Develop highly accessible, scalable client interfaces leveraging React, Tailwind CSS, and semantic HTML5, mapping precise Figma design systems into production code.
                  </p>
                </li>
              </ul>
            </div>

            {/* ROLE 2 */}
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-dim-3 border-4 border-black" />
              <div className="flex flex-col gap-2 mb-6">
                <span className="text-[10px] font-medium tracking-[0.16em] uppercase text-muted">Previous</span>
                <h3 className="text-[20px] font-serif text-white tracking-[-0.01em]">Quantity Surveyor & Data Architect</h3>
                <span className="text-[12px] font-light tracking-[0.08em] uppercase text-muted">Public Infrastructure Sector</span>
              </div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-dim-3 flex-shrink-0" />
                  <p className="text-[13px] font-light leading-[1.7] text-muted">
                    <strong className="text-white font-normal">Structural Discipline:</strong> Managed and delivered complex procurement frameworks for large-scale public infrastructure projects, ensuring absolute accuracy and zero-leak material specifications.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-dim-3 flex-shrink-0" />
                  <p className="text-[13px] font-light leading-[1.7] text-muted">
                    <strong className="text-white font-normal">Data Literacy & Cost Modeling:</strong> Constructed comprehensive cost models and quantified risk pipelines that underpinned multi-million dollar structural decisions.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-dim-3 flex-shrink-0" />
                  <p className="text-[13px] font-light leading-[1.7] text-muted">
                    <strong className="text-white font-normal">Process Automation:</strong> Designed robust data ingestion pipelines and spreadsheet-driven processors to securely validate and pipe B2B financial structures, laying the groundwork for digital transitions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SKILLS & EDUCATION GRIDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t border-faint">
          
          {/* COLUMN 1: EXPERT SKILLS */}
          <div className="flex flex-col gap-8">
            <h3 className="font-serif text-[clamp(20px,2vw,28px)] leading-[1.1] tracking-[-0.01em] text-white">
              Expert Skills <em className="text-copper italic">Inventory</em>
            </h3>
            
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-[10px] font-medium tracking-[0.16em] uppercase text-white mb-2">Engineering Orchestration</h4>
                <p className="text-[13px] font-light text-muted">Google Antigravity, CI/CD Verification, Agentic Workflow Architecture</p>
              </div>
              <div>
                <h4 className="text-[10px] font-medium tracking-[0.16em] uppercase text-white mb-2">Backend Tier</h4>
                <p className="text-[13px] font-light text-muted">Node.js, Express, PostgreSQL, Prisma ORM, REST API Design</p>
              </div>
              <div>
                <h4 className="text-[10px] font-medium tracking-[0.16em] uppercase text-white mb-2">Frontend Tier</h4>
                <p className="text-[13px] font-light text-muted">React, TypeScript (Strict), Tailwind CSS, Semantic HTML5, Framer Motion</p>
              </div>
              <div>
                <h4 className="text-[10px] font-medium tracking-[0.16em] uppercase text-white mb-2">Ingestion & Automation</h4>
                <p className="text-[13px] font-light text-muted">Google Apps Script, JSON Processors, Financial Pipeline Automation</p>
              </div>
              <div>
                <h4 className="text-[10px] font-medium tracking-[0.16em] uppercase text-white mb-2">Design & Strategy</h4>
                <p className="text-[13px] font-light text-muted">Figma Prototyping, Component-Driven Design, ARIA Compliance, Cost Modeling</p>
              </div>
            </div>
          </div>

          {/* COLUMN 2: EDUCATION & VALIDATION */}
          <div className="flex flex-col gap-8">
            <h3 className="font-serif text-[clamp(20px,2vw,28px)] leading-[1.1] tracking-[-0.01em] text-white">
              Education & <em className="text-copper italic">Validation</em>
            </h3>
            
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-medium tracking-[0.16em] uppercase text-copper">Validation</span>
                <h4 className="text-[16px] font-serif text-white tracking-[-0.01em]">Full-Stack Product Engineering</h4>
                <p className="text-[13px] font-light leading-[1.6] text-muted">
                  Strict focus on deterministic system design, asynchronous agentic development, relational database integrity, and high-velocity interface production.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-medium tracking-[0.16em] uppercase text-muted">Degree</span>
                <h4 className="text-[16px] font-serif text-white tracking-[-0.01em]">B.Tech in Quantity Surveying</h4>
                <p className="text-[13px] font-light leading-[1.6] text-muted">
                  Comprehensive training in material cost modeling, risk quantification, and procurement logic applied to massive public infrastructure.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
