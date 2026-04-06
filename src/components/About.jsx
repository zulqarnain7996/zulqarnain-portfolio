import { services, spotlightCards, stackGroups } from '../data/content'

export function About() {
  return (
    <section className="expertise section" id="expertise">
      <div className="section-intro reveal">
        <span className="eyebrow">Expertise</span>
        <h2>Built with engineering discipline and visual ambition.</h2>
        <p>
          Short, sharp, and premium. The work is focused on durable systems, refined
          interfaces, and product execution that looks expensive because it is deliberate.
        </p>
      </div>

      <div className="spotlight-grid">
        {spotlightCards.map((card, index) => (
          <article
            key={card.title}
            className={`spotlight-card reveal ${index === 1 ? 'reveal-delay' : index === 2 ? 'reveal-delay-2' : ''}`}
          >
            <span>{card.label}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>

      <div className="capability-shell reveal">
        <div className="capability-copy">
          <span className="eyebrow">Capability Map</span>
          <h3>Technical range presented like a product signature.</h3>
        </div>

        <div className="stack-groups">
          {stackGroups.map((group) => (
            <article key={group.title} className="stack-group">
              <h4>{group.title}</h4>
              <div className="stack-chip-row">
                {group.items.map((item) => (
                  <span key={item} className="stack-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="service-marquee" aria-label="Services">
          {services.map((service) => (
            <span key={service} className="service-chip">
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
