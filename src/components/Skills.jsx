import { skillColumns } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <SectionHeading
        label="Tech Stack"
        title="Core technologies for modern product delivery."
        text="Backend depth, frontend polish, and reliable execution."
      />

      <div className="skills-layout">
        {skillColumns.map((column, index) => (
          <article
            key={column.heading}
            className={`skill-column reveal ${index > 0 ? 'reveal-delay' : ''}`}
          >
            <span className="skill-lead">{column.lead}</span>
            <h3>{column.heading}</h3>
            <ul>
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
