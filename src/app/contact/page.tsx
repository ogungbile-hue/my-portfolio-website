import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ingestion Pipeline. Establish Connection.",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen pt-[120px] md:pt-[160px] pb-[80px] md:pb-[120px]">
      <div className="max-w-4xl mx-auto flex flex-col gap-16 md:gap-32">
        {/* HEADER BLOCK */}
        <div className="mb-8 md:mb-16">
          <div className="sec-label">
            <span>05</span> INGESTION PIPELINE
          </div>
          <h1 className="font-serif text-[clamp(40px,6vw,88px)] leading-[1.0] tracking-[-0.03em] text-white mb-8">
            Establish <br />
            <em className="text-copper font-serif italic text-[clamp(28px,4vw,64px)]">Connection</em>
          </h1>
          <p className="text-[14px] font-light leading-[1.85] text-muted max-w-2xl">
            I target distributed roles and borderless product teams that require deep systems thinking, technical autonomy, and high-velocity engineering. If your team needs a Full-Stack Product Engineer to architect, design, and ship production-grade systems, initiate the pipeline below.
          </p>
        </div>

        {/* SECTION 1: DIRECT CHANNELS */}
        <div>
          <h2 className="text-[10px] font-medium tracking-[0.2em] uppercase text-copper mb-12 flex items-center gap-4">
            <span className="w-6 h-px bg-copper" />
            01 / Direct Channels
          </h2>
          
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-serif text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-[-0.01em] text-white mb-2">
                Asynchronous <em className="text-copper italic">Communication</em>
              </h3>
              <p className="text-[13px] font-light leading-[1.85] text-muted max-w-2xl">
                For formal inquiries, technical alignment discussions, or contract styling under Eighty-Two Limited, use the primary secure endpoints below.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <a href="mailto:hello@eightytwo.dev" className="flex flex-col gap-1 group no-underline max-w-max border-b border-faint pb-4">
                <span className="text-[9px] tracking-[0.16em] uppercase text-muted">Email</span>
                <span className="text-[14px] font-light tracking-[0.04em] text-white transition-opacity group-hover:opacity-70 flex items-center gap-2">
                  Send an Inquiry <span className="text-copper">→</span>
                </span>
              </a>
              <a href="https://linkedin.com/in/eightytwo" target="_blank" rel="noreferrer" className="flex flex-col gap-1 group no-underline max-w-max border-b border-faint pb-4">
                <span className="text-[9px] tracking-[0.16em] uppercase text-muted">LinkedIn</span>
                <span className="text-[14px] font-light tracking-[0.04em] text-white transition-opacity group-hover:opacity-70 flex items-center gap-2">
                  Connect on LinkedIn <span className="text-copper">↗</span>
                </span>
              </a>
              <a href="https://github.com/eightytwo" target="_blank" rel="noreferrer" className="flex flex-col gap-1 group no-underline max-w-max border-b border-faint pb-4">
                <span className="text-[9px] tracking-[0.16em] uppercase text-muted">GitHub</span>
                <span className="text-[14px] font-light tracking-[0.04em] text-white transition-opacity group-hover:opacity-70 flex items-center gap-2">
                  Explore GitHub Profile <span className="text-copper">↗</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 2: OPERATIONAL STATUS */}
        <div>
          <h2 className="text-[10px] font-medium tracking-[0.2em] uppercase text-copper mb-12 flex items-center gap-4">
            <span className="w-6 h-px bg-copper" />
            02 / Operational Status
          </h2>
          
          <div className="flex flex-col gap-8">
            <h3 className="font-serif text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-[-0.01em] text-white mb-2">
              Availability & <em className="text-copper italic">Logistics</em>
            </h3>
            
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
                <p className="text-[13px] font-light leading-[1.7] text-muted flex gap-2">
                  <strong className="text-white font-normal uppercase tracking-wider text-[10px] w-36 flex-shrink-0 pt-[3px]">Current Status:</strong> 
                  <span>Active & Available for Borderless Product Roles.</span>
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
                <p className="text-[13px] font-light leading-[1.7] text-muted flex gap-2">
                  <strong className="text-white font-normal uppercase tracking-wider text-[10px] w-36 flex-shrink-0 pt-[3px]">Geographic Base:</strong> 
                  <span>Lagos, Nigeria (GMT+1).</span>
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
                <p className="text-[13px] font-light leading-[1.7] text-muted flex gap-2">
                  <strong className="text-white font-normal uppercase tracking-wider text-[10px] w-36 flex-shrink-0 pt-[3px]">Deployment Mode:</strong> 
                  <span>100% Remote / Distributed.</span>
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
                <p className="text-[13px] font-light leading-[1.7] text-muted flex gap-2">
                  <strong className="text-white font-normal uppercase tracking-wider text-[10px] w-36 flex-shrink-0 pt-[3px]">Response Latency:</strong> 
                  <span>Asynchronous verification within 12–24 hours.</span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* FOOTER CALLOUT */}
        <div className="pt-16 border-t border-faint text-center">
          <p className="text-[9px] font-light tracking-[0.12em] leading-[1.8] text-muted uppercase">
            EIGHTY-TWO LIMITED | <span className="text-copper">207.2 u</span> | © 2026 PRECIOUS OLUWAPELUMI · FULL-STACK PRODUCT ENGINEER · ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </section>
  );
}
