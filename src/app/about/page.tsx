import { Metadata } from "next";
import Link from "next/link";
import { EightyTwoBadge } from "@/components/ui/EightyTwoBadge";

export const metadata: Metadata = {
  title: "About Precious",
  description: "The Architect's Prologue. About Precious Oluwapelumi Ogungbile.",
};

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-[120px] md:pt-[160px] pb-[80px] md:pb-[120px]">
      <div className="max-w-4xl mx-auto flex flex-col gap-16 md:gap-32">
        {/* HEADER MATRIX */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-16">
          <div className="flex-1">
            <div className="sec-label">
              <span>02</span> THE ARCHITECT'S PROLOGUE
            </div>
            <h1 className="font-serif text-[clamp(40px,6vw,88px)] leading-[1.0] tracking-[-0.03em] text-white mb-6">
              About Precious <br />
              <em className="text-copper font-serif italic text-[clamp(28px,4vw,64px)]">Oluwapelumi Ogungbile</em>
            </h1>
          </div>
          <div className="flex-shrink-0 md:pl-16">
            <EightyTwoBadge size={180} speed={1.2} />
          </div>
        </div>

        {/* BIOGRAPHICAL COPY */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-8 flex flex-col gap-16">
            {/* From Blueprints to Bytes */}
            <div>
              <h2 className="font-serif text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-[-0.01em] text-white mb-6">
                From Blueprints <em className="text-copper italic">to Bytes</em>
              </h2>
              <p className="text-[14px] font-light leading-[1.85] text-muted mb-4">
                I spent several years as a Quantity Surveyor delivering complex public infrastructure and large-scale procurement projects. I quantified risk, managed multi-million dollar pipelines, and produced cost models that supported high-stakes structural decisions.
              </p>
              <p className="text-[14px] font-light leading-[1.85] text-muted">
                Moving into technology wasn’t a pivot away from that discipline — it was a direct translation. I bring the same obsession with structural integrity, risk management, and long-term durability into the design and architecture of digital products.
              </p>
            </div>

            {/* Autonomous Leveraged Engineering */}
            <div>
              <h2 className="font-serif text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-[-0.01em] text-white mb-6">
                Autonomous <em className="text-copper italic">Leveraged Engineering</em>
              </h2>
              <p className="text-[14px] font-light leading-[1.85] text-muted">
                I don’t build software the traditional way. I use Google Antigravity as a mission control system to orchestrate autonomous agents across implementation, testing, and verification. By writing clear specifications and strong architectural guardrails, I can direct multiple agents in parallel while maintaining full oversight. This approach gives me the execution capacity of a small engineering team without losing control over quality or direction.
              </p>
            </div>

            {/* Built for Distributed Impact */}
            <div>
              <h2 className="font-serif text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-[-0.01em] text-white mb-6">
                Built for <em className="text-copper italic">Distributed Impact</em>
              </h2>
              <p className="text-[14px] font-light leading-[1.85] text-muted">
                I design systems with global, distributed teams in mind. My focus is on building products that are not only technically sound but also aligned with real business constraints, resource realities, and product-market fit. I bring a structural engineer’s mindset — precision, foresight, and accountability — to fast-moving product environments where speed and reliability must coexist.
              </p>
            </div>

            {/* PRIMARY CALL TO ACTION */}
            <div className="pt-8">
              <a
                href="https://drive.google.com/file/d/1A6MPrIB_uBmhKnNiu7IRaWrXYs9gbojd/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-copper text-black font-mono text-[11px] font-medium tracking-[0.12em] uppercase px-8 py-4 transition-transform hover:-translate-y-0.5"
              >
                [ VIEW PROFESSIONAL RECORD (CV) ]
              </a>
            </div>
          </div>

          {/* CONNECTIONS FOOTER / SIDEBAR */}
          <div className="md:col-span-4 flex flex-col gap-8 md:pt-2">
            <h3 className="text-[10px] font-medium tracking-[0.2em] uppercase text-copper mb-4 flex items-center gap-4">
              <span className="w-6 h-px bg-copper" />
              SYSTEM CHANNELS
            </h3>
            <div className="flex flex-col gap-6">
              <a
                href="mailto:ogunpropa@gmail.com"
                className="flex flex-col gap-1 group no-underline"
              >
                <span className="text-[9px] tracking-[0.16em] uppercase text-muted">Email</span>
                <span className="text-[12px] font-light tracking-[0.04em] text-white transition-opacity group-hover:opacity-70 flex items-center gap-2">
                  Send an Inquiry <span className="text-copper">→</span>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/preciousogungbile/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col gap-1 group no-underline"
              >
                <span className="text-[9px] tracking-[0.16em] uppercase text-muted">LinkedIn</span>
                <span className="text-[12px] font-light tracking-[0.04em] text-white transition-opacity group-hover:opacity-70 flex items-center gap-2">
                  Connect on LinkedIn <span className="text-copper">↗</span>
                </span>
              </a>
              <a
                href="https://github.com/ogungbile-hue"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col gap-1 group no-underline"
              >
                <span className="text-[9px] tracking-[0.16em] uppercase text-muted">GitHub</span>
                <span className="text-[12px] font-light tracking-[0.04em] text-white transition-opacity group-hover:opacity-70 flex items-center gap-2">
                  Explore GitHub Profile <span className="text-copper">↗</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
