import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getProjects, Project } from "@/lib/projects";

export function WorkSection() {
  const projects = getProjects();
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const gridProjects = projects.filter((p) => p.slug !== featuredProject?.slug);

  return (
    <section id="work">
      <RevealOnScroll className="sec-label">
        03 &nbsp;<span>/ Work</span>
      </RevealOnScroll>

      <RevealOnScroll className="work-header">
        <h2>
          Selected<br />
          <em>projects.</em>
        </h2>
        <a href="#contact">View all work</a>
      </RevealOnScroll>

      {/* Featured Banner Project (e.g. LEAD) */}
      {featuredProject && (
        <RevealOnScroll className="project-featured mb-1" delay={0.1}>
          <div className="project-featured-visual">
            <div className="eightytwo-grid-bg"></div>
            <div className="eightytwo-visual">
              <div className="eightytwo-tile">
                <div className="eightytwo-tile-corner tl"></div>
                <div className="eightytwo-tile-corner tr"></div>
                <div className="eightytwo-tile-corner bl"></div>
                <div className="eightytwo-tile-corner br"></div>
                <div className="eightytwo-el-num">{featuredProject.number}</div>
                <div className="eightytwo-el-sym">82</div>
                <div className="eightytwo-el-name">LEAD</div>
              </div>
              {featuredProject.tagline && (
                <div className="eightytwo-tagline">{featuredProject.tagline}</div>
              )}
            </div>
          </div>
          <div className="project-featured-info">
            <div>
              <div className="proj-tag">
                Featured Project {featuredProject.role ? `· ${featuredProject.role}` : ""}
              </div>
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

            {featuredProject.link && (
              <a
                href={featuredProject.link}
                target={featuredProject.link.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                className="proj-link"
              >
                Explore Project
              </a>
            )}
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
    </section>
  );
}
