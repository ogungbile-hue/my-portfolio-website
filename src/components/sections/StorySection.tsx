import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function StorySection() {
  return (
    <section id="story">
      <RevealOnScroll className="sec-label">
        01 &nbsp;<span>/ Origin</span>
      </RevealOnScroll>
      <div className="story-grid">
        {/* Left */}
        <RevealOnScroll className="story-left">
          <h2>From blueprints<br />to <em>bytes.</em></h2>
          <p>
            I spent years as a <strong>Quantity Surveyor</strong> delivering complex public infrastructure and large-scale procurement projects — quantifying risk, managing multi-million naira pipelines, and producing cost models that underpinned structural decisions.
          </p>
          <p>
            My foundation is built on structural precision. Working within the construction sector, I managed multi-disciplinary frameworks, ensured strict material specification adherence, and mitigated risk to prevent multi-million dollar downstream cost failures.
          </p>
          <p>
            Moving into tech wasn't a departure—it was a translation. I bring that exact data literacy and rigorous cost-engineering discipline to digital enterprise SaaS, financial compounding architectures, and scalable cloud structures. I architect the logic, then design the experience.
          </p>
          <div className="sig">82<span>.</span></div>
        </RevealOnScroll>

        {/* Timeline */}
        <RevealOnScroll className="timeline" delay={0.15}>
          <div className="tl-item">
            <div className="tl-year">Early</div>
            <div className="tl-line"></div>
            <div className="tl-content">
              <div className="tl-role">Quantity Surveyor</div>
              <div className="tl-org">Public Infrastructure Projects</div>
              <div className="tl-desc">Construction procurement, cost planning, structural analysis, and procurement documentation at scale.</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-year">Pivot</div>
            <div className="tl-line"></div>
            <div className="tl-content">
              <div className="tl-role">Self-Directed Tech Transition</div>
              <div className="tl-org">HTML → CSS → TS → React → Node → SQL</div>
              <div className="tl-desc">Methodical, full-stack self-teaching. Applied QS logic to every layer of the stack — architecture first, aesthetics second.</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-year">Now</div>
            <div className="tl-line"></div>
            <div className="tl-content">
              <div className="tl-role">Principal Product Engineer</div>
              <div className="tl-org">Eighty-Two Limited</div>
              <div className="tl-desc">Full-Stack architecture: PostgreSQL, Prisma, React, and precision interfaces for complex digital platforms.</div>
            </div>
          </div>
          <div className="tl-item active">
            <div className="tl-year">Next</div>
            <div className="tl-line"></div>
            <div className="tl-content">
              <div className="tl-role">Distributed Product Roles</div>
              <div className="tl-org">PRODUCT ENGINEER · FULL-STACK · ENTERPRISE SAAS</div>
              <div className="tl-desc">Targeting high-performing, distributed product teams where system thinking, full-stack ability, and design precision compound into outsized impact.</div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
