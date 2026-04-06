import { projects } from '../data/content'

export function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section-intro reveal">
        <span className="eyebrow">Selected Work</span>
        <h2>Three flagship builds presented like high-value case studies.</h2>
        <p>
          Strong hierarchy, shorter copy, and visuals that feel more like product artifacts
          than ordinary portfolio thumbnails.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`project-showcase project-variant-${(index % 3) + 1} ${
              index % 2 === 1 ? 'project-showcase-reverse' : ''
            } reveal`}
          >
            <div className="project-visual">
              <span className="project-id">{project.id}</span>
              <div className="project-visual-frame">
                <img src={project.image} alt={`${project.title} preview`} />
              </div>
            </div>

            <div className="project-copy">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>

              <div className="project-detail-grid">
                {project.highlights.map((item) => (
                  <span key={item} className="project-detail">
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
