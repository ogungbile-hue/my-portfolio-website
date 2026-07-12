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
        <a href="mailto:hello@eightytwo.dev" className="btn-main">Send me an email</a>
        <a href="#" className="btn-ghost">View CV →</a>
      </RevealOnScroll>

      <RevealOnScroll className="contact-channels" delay={0.4}>
        <a href="#" className="channel">
          <span className="ch-label">Email</span>
          <span className="ch-val">hello@eightytwo.dev</span>
        </a>
        <a href="#" className="channel">
          <span className="ch-label">LinkedIn</span>
          <span className="ch-val">linkedin.com/in/eightytwo</span>
        </a>
        <a href="#" className="channel">
          <span className="ch-label">GitHub</span>
          <span className="ch-val">github.com/eightytwo</span>
        </a>
        <a href="#" className="channel">
          <span className="ch-label">Twitter / X</span>
          <span className="ch-val">@eightytwo_dev</span>
        </a>
      </RevealOnScroll>
    </section>
  );
}
