import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ServicesSection() {
  return (
    <section id="services">
      <RevealOnScroll className="sec-label">
        04 &nbsp;<span>/ Services</span>
      </RevealOnScroll>

      <div className="services-header">
        <RevealOnScroll>
          <h2>What I<br /><em>bring</em><br />to your team.</h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p>
            I sit at the rare intersection of design precision and engineering capability.
            Whether embedded in your product team or leading a feature end-to-end,
            I close the gap between what UX specifies and what engineering ships.
          </p>
        </RevealOnScroll>
      </div>

      <div className="services-grid">
        <RevealOnScroll className="service-card">
          <div className="svc-num">01</div>
          <div className="svc-title">UX Engineering</div>
          <p className="svc-desc">Translating design specs into production-grade code. No handoff friction — I understand both sides of the table and deliver interfaces that match the intent exactly.</p>
          <ul className="svc-list">
            <li>Component architecture & design systems</li>
            <li>Semantic, accessible HTML/CSS</li>
            <li>Interaction design & micro-animations</li>
            <li>Cross-browser & responsive implementation</li>
          </ul>
        </RevealOnScroll>
        <RevealOnScroll className="service-card" delay={0.1}>
          <div className="svc-num">02</div>
          <div className="svc-title">Product Architecture</div>
          <p className="svc-desc">Thinking in systems before a single line of code is written. Information architecture, data modelling, and UX strategy that holds up under scale.</p>
          <ul className="svc-list">
            <li>Information architecture & user flows</li>
            <li>Database schema design (PostgreSQL)</li>
            <li>API design & data contracts</li>
            <li>SaaS product structure & feature scoping</li>
          </ul>
        </RevealOnScroll>
        <RevealOnScroll className="service-card" delay={0.2}>
          <div className="svc-num">03</div>
          <div className="svc-title">Data-Driven UX</div>
          <p className="svc-desc">My QS background means I read data naturally. I design interfaces that surface complex datasets clearly — dashboards, cost tools, analytics views, procurement systems.</p>
          <ul className="svc-list">
            <li>Data visualisation & dashboard UI</li>
            <li>Relational data modeling (PostgreSQL + Prisma)</li>
            <li>Complex table & form design</li>
            <li>Analytics-first product thinking</li>
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
