import { projects } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <SectionHeading
        label="Featured Projects"
        title="Selected builds across education, operations, and scheduling."
        text="A few projects that reflect structured, product-minded execution."
      />

      <div className="projects-stack">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`project-card reveal ${index > 0 ? 'reveal-delay' : ''}`}
          >
            <div className="project-visual">
              <span className="project-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <img src={project.image} alt={`${project.title} placeholder visual`} />
            </div>

            <div className="project-content">
              <span className="project-tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul>
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <a className="project-linkline" href="#contact">
                Discuss a Similar Build
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
