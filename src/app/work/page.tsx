import { Metadata } from "next";
import { getProjects } from "@/lib/projects";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: "Selected Projects",
  description: "The Engineering Portfolio. Selected Projects and Case Studies.",
};

export default function WorkPage() {
  const projects = getProjects();
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const gridProjects = projects.filter((p) => p.slug !== featuredProject?.slug);

  return (
    <section className="min-h-screen pt-[120px] md:pt-[160px] pb-[80px] md:pb-[120px]">
      <div className="max-w-4xl mx-auto flex flex-col gap-16 md:gap-32">
        {/* HEADER BLOCK */}
        <div className="mb-8 md:mb-16">
          <div className="sec-label">
            <span>03</span> THE ENGINEERING PORTFOLIO
          </div>
          <h1 className="font-serif text-[clamp(40px,6vw,88px)] leading-[1.0] tracking-[-0.03em] text-white mb-8">
            Selected <br />
            <em className="text-copper font-serif italic text-[clamp(28px,4vw,64px)]">Projects.</em>
          </h1>
          <p className="text-[14px] font-light leading-[1.85] text-muted max-w-2xl">
            A curated selection of technical architectures, orchestration workflows, and full-stack solutions engineered for scale and durability.
          </p>
        </div>

        {/* Featured Banner Project */}
        {featuredProject && (
          <RevealOnScroll className="project-featured" delay={0.1}>
            <div className="project-featured-visual relative overflow-hidden">
              {featuredProject.image ? (
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title} 
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition-opacity duration-500" 
                />
              ) : (
                <>
                  <div className="eightytwo-grid-bg"></div>
                  <div className="eightytwo-visual">
                    <div className="eightytwo-tile">
                      <div className="eightytwo-tile-corner tl"></div>
                      <div className="eightytwo-tile-corner tr"></div>
                      <div className="eightytwo-tile-corner bl"></div>
                      <div className="eightytwo-tile-corner br"></div>
                      <div className="eightytwo-el-num">{featuredProject.number}</div>
                      <div className="eightytwo-el-sym">82</div>
                      <div className="eightytwo-el-name">{featuredProject.title}</div>
                    </div>
                    {featuredProject.tagline && (
                      <div className="eightytwo-tagline">{featuredProject.tagline}</div>
                    )}
                  </div>
                </>
              )}
            </div>
            <div className="project-featured-info">
              <div>
                <div className="proj-title">{featuredProject.title}</div>
                <p className="proj-desc">{featuredProject.description}</p>
                
                <div className="proj-meta-grid">
                  {featuredProject.role && (
                    <div className="proj-meta-cell">
                      <div className="pm-label">Role</div>
                      <div className="pm-val accent">{featuredProject.role}</div>
                    </div>
                  )}
                  <div className="proj-meta-cell">
                    <div className="pm-label">Status</div>
                    <div className="pm-val accent">{featuredProject.status}</div>
                  </div>
                </div>

                {featuredProject.stack && featuredProject.stack.length > 0 && (
                  <div className="proj-tags">
                    {featuredProject.stack.map((tech) => (
                      <span key={tech} className="proj-tag-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-4 pt-4">
                {featuredProject.link && (
                  <a
                    href={featuredProject.link}
                    target={featuredProject.link.startsWith("http") ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="proj-link"
                  >
                    Explore Project &rarr;
                  </a>
                )}
                {featuredProject.github && (
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-link"
                  >
                    View Source Code &rarr;
                  </a>
                )}
              </div>
            </div>
          </RevealOnScroll>
        )}

        {/* Grid for standard projects */}
        <RevealOnScroll className="projects-grid" delay={0.2}>
          {gridProjects.map((project) => {
            const isDone = project.status === "Live";
            return (
              <div key={project.slug} className="project-card">
                <div>
                  <div className="pc-num">{project.number}</div>
                  <div className="pc-title">{project.title}</div>
                  <p className="pc-desc">{project.description}</p>
                </div>

                <div className="pc-footer">
                  <div className="pc-stack">
                    {project.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <span className={`pc-status ${isDone ? "done" : "wip"}`}>
                    {project.status}
                  </span>
                </div>
              </div>
            );
          })}
        </RevealOnScroll>
      </div>
    </section>
  );
}
