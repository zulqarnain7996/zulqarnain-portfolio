import { services } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Services() {
  return (
    <section className="section services-section" id="services">
      <SectionHeading
        label="Services"
        title="Engineering services built for quality and speed."
        text="Focused on shipping strong products without unnecessary complexity."
      />

      <div className="services-grid">
        {services.map((service, index) => (
          <article
            key={service.title}
            className={`service-card reveal ${index % 2 === 1 ? 'reveal-delay' : ''}`}
          >
            <span className="service-number">{service.index}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
