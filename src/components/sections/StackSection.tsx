import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function StackSection() {
  return (
    <section id="stack" className="stack-section">
      <RevealOnScroll className="sec-label">
        02 &nbsp;<span>/ Stack</span>
      </RevealOnScroll>

      <div className="stack-intro">
        <RevealOnScroll>
          <h2>T-shaped.<br />By <em>design.</em></h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p>
            Deep UX/design engineering expertise along the horizontal. Full-stack
            capability — Node.js, PostgreSQL, React — along the vertical.
            <strong>I can own the entire product surface</strong>, from database schema
            to the pixel-perfect interface the user sees.
          </p>
        </RevealOnScroll>
      </div>

      {/* T-shape visualizer */}
      <RevealOnScroll className="t-shape-wrap" delay={0.15}>
        <div className="t-label">Breadth — across the stack</div>
        <div className="t-bar-h">
          <div className="t-cell deep">HTML / CSS</div>
          <div className="t-cell deep">JavaScript</div>
          <div className="t-cell deep">UI / UX Design</div>
          <div className="t-cell">Node.js</div>
          <div className="t-cell">PostgreSQL / SQL</div>
        </div>
        <div className="t-bar-v">
          <div className="t-col"><div className="t-cell">Bootstrap</div><div className="t-cell">Responsive</div><div className="t-cell">Accessibility</div></div>
          <div className="t-col"><div className="t-cell">DOM Logic</div><div className="t-cell">APIs</div><div className="t-cell">Interaction</div></div>
          <div className="t-col center"><div className="t-cell deep">Design Sys.</div><div className="t-cell deep">Information Arch.</div><div className="t-cell deep">UX Research</div></div>
          <div className="t-col"><div className="t-cell">REST APIs</div><div className="t-cell">Auth</div><div className="t-cell">Data Models</div></div>
          <div className="t-col"><div className="t-cell">Schema Design</div><div className="t-cell">Queries</div><div className="t-cell">Prisma ORM</div></div>
        </div>
        <div className="t-legend">
          <div className="t-leg-item"><div className="t-leg-swatch primary"></div>Primary depth</div>
          <div className="t-leg-item"><div className="t-leg-swatch secondary"></div>Supporting capability</div>
        </div>
      </RevealOnScroll>

      {/* Skill clusters */}
      <RevealOnScroll className="skill-clusters" delay={0.2}>
        <div className="cluster">
          <div className="cluster-icon">Front-End</div>
          <h3>Interface<br />Engineering</h3>
          <ul>
            <li>Semantic HTML5 & ARIA</li>
            <li>CSS architecture & custom logic</li>
            <li>Bootstrap systems</li>
            <li>JavaScript (ES6+)</li>
            <li>Component-driven UI</li>
            <li>Responsive & mobile-first</li>
          </ul>
        </div>
        <div className="cluster">
          <div className="cluster-icon">UX / Design</div>
          <h3>Experience<br />Architecture</h3>
          <ul>
            <li>Information architecture</li>
            <li>User flow & wireframing</li>
            <li>Design systems & tokens</li>
            <li>Usability analysis</li>
            <li>Interaction design</li>
            <li>Data-driven UX decisions</li>
          </ul>
        </div>
        <div className="cluster">
          <div className="cluster-icon">Back-End & Data</div>
          <h3>System<br />Architecture</h3>
          <ul>
            <li>Node.js & Express</li>
            <ul className="sl-list">
              <li>PostgreSQL</li>
              <li>Prisma ORM</li>
              <li>REST API Architecture</li>
              <li>Database Schema Design</li>
            </ul>
          </ul>
        </div>
      </RevealOnScroll>
    </section>
  );
}
