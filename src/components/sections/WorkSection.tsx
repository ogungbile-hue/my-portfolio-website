import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function WorkSection() {
  return (
    <section id="work">
      <RevealOnScroll className="sec-label">
        03 &nbsp;<span>/ Work</span>
      </RevealOnScroll>

      <RevealOnScroll className="work-header">
        <h2>Selected<br /><em>projects.</em></h2>
        <a href="#">View all work</a>
      </RevealOnScroll>

      {/* Grid */}
      <RevealOnScroll className="projects-grid" delay={0.2}>
        <div className="project-card">
          <div className="pc-num">001</div>
          <div className="pc-title">Portfolio v1 — EightyTwo.dev</div>
          <p className="pc-desc">This site. Built as a product, not just a page — periodic table identity system, engineered layout, full scroll animation, and responsive at every breakpoint. Zero frameworks.</p>
          <div className="pc-footer">
            <div className="pc-stack"><span>React</span><span>Tailwind CSS</span><span>TypeScript</span></div>
            <span className="pc-status done">Live</span>
          </div>
        </div>
        
        {/* Placeholder for future projects */}
        <div className="project-card" style={{ opacity: 0.5, borderStyle: "dashed" }}>
          <div className="pc-num">002</div>
          <div className="pc-title">Enterprise Platform</div>
          <p className="pc-desc">Confidential enterprise SaaS architecture and precision UI implementation. Details incoming.</p>
          <div className="pc-footer">
            <div className="pc-stack"><span>PostgreSQL</span><span>Prisma</span><span>Node.js</span></div>
            <span className="pc-status wip">In progress</span>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
