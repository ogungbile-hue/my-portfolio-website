import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <RevealOnScroll className="contact-eyebrow">
        05 &nbsp;/&nbsp; Contact
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="contact-headline">
          Let's build<br />something <em>dense.</em>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <p className="contact-sub">
          I'm actively looking for international remote roles as a UX Engineer or Design Engineer.
          If your team needs someone who can architect, design, and ship — let's talk.
        </p>
      </RevealOnScroll>

      <RevealOnScroll className="contact-ctas" delay={0.3}>
        <a href="mailto:ogunpropa@gmail.com" className="btn-main">Send me an email</a>
        <a href="https://drive.google.com/file/d/1A6MPrIB_uBmhKnNiu7IRaWrXYs9gbojd/view?usp=drive_link" target="_blank" rel="noreferrer" className="btn-ghost">View CV →</a>
      </RevealOnScroll>

      <RevealOnScroll className="contact-channels" delay={0.4}>
        <a href="mailto:ogunpropa@gmail.com" className="channel">
          <span className="ch-label">Email</span>
          <span className="ch-val">Send an Inquiry <span style={{ color: "var(--copper)" }}>→</span></span>
        </a>
        <a href="https://www.linkedin.com/in/preciousogungbile/" className="channel" target="_blank" rel="noreferrer">
          <span className="ch-label">Network</span>
          <span className="ch-val">Connect on LinkedIn <span style={{ color: "var(--copper)" }}>↗</span></span>
        </a>
        <a href="https://github.com/ogungbile-hue" className="channel" target="_blank" rel="noreferrer">
          <span className="ch-label">Code</span>
          <span className="ch-val">Explore GitHub Profile <span style={{ color: "var(--copper)" }}>↗</span></span>
        </a>
      </RevealOnScroll>
    </section>
  );
}
