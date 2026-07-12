export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-body">
        {/* Left */}
        <div className="hero-left">
          <div className="role-tag">Full-Stack Product Engineer &nbsp;·&nbsp; UX Design & Development</div>
          <div className="headline">
            <span className="hl hl-1">I architect</span>
            <span className="hl hl-2">the structure.</span>
            <span className="hl hl-3">Then design</span>
            <span className="hl hl-4">the experience.</span>
          </div>
          <p className="bio">
            Quantity Surveyor turned <strong>Full-Stack Product Engineer</strong>. I spent years dissecting
            complex procurement and cost control systems in the construction sector—now I apply that exact same structural
            precision to <strong>digital product architecture</strong>.
            Every interface I build is engineered, not just designed.
            <br /><br />
            Having architected systems and engineered platforms from the ground up, I focus deeply on business metrics, resource constraints, and product-market fit rather than just closing engineering tickets. I bring an owner’s speed and a structural engineer's precision to every product team I join.
          </p>
          <div className="stack">
            <span className="chip hi">TypeScript</span>
            <span className="chip hi">React</span>
            <span className="chip hi">Tailwind CSS</span>
            <span className="chip hi">Node.js</span>
            <span className="chip hi">PostgreSQL</span>
            <span className="chip">Prisma ORM</span>
            <span className="chip">Express</span>
            <span className="chip">Figma</span>
            <span className="chip">System Architecture</span>
          </div>
          <div className="cta-row">
            <a href="#work" className="btn-main">View my work</a>
            <a href="#contact" className="btn-ghost">Get in touch →</a>
          </div>
        </div>

        {/* Element tile */}
        <div className="element-tile">
          <div className="el-corner tl"></div>
          <div className="el-corner tr"></div>
          <div className="el-corner bl"></div>
          <div className="el-corner br"></div>
          <div className="el-symbol">82</div>
          <div className="el-name">Precious</div>
          <div className="el-divider"></div>
          <div className="el-data">
            <div className="el-row"><span>Role</span><span className="va">Product Engineer</span></div>
            <div className="el-row"><span>Base</span><span>Nigeria</span></div>
            <div className="el-row"><span>Mode</span><span>Global</span></div>
            <div className="el-row"><span>Origin</span><span>QS → Full-Stack</span></div>
            <div className="el-row"><span>Company</span><span className="va">Eighty-Two</span></div>
            <div className="el-row"><span>Status</span><span className="va">Available</span></div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="hero-bottom">
        <span className="bottom-quote">"Dense foundations. Precise interfaces."</span>
        <div className="bottom-meta">
          <div className="meta-item">
            <span className="meta-label">Focus</span>
            <span className="meta-val">Enterprise SaaS</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Discipline</span>
            <span className="meta-val">Data & Engineering</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Background</span>
            <span className="meta-val">QS → Product Architect</span>
          </div>
        </div>
        <div className="scroll-col">
          <span>Scroll</span>
          <div className="scroll-track"></div>
        </div>
      </div>
    </section>
  );
}
