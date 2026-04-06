import { craftPrinciples, owner, profileImages } from '../data/content'

export function Skills() {
  return (
    <section className="craft section" id="craft">
      <div className="craft-visual reveal">
        <div className="craft-image-frame">
          <div className="craft-image-panel">
            <img
              className="craft-image"
              src={profileImages.secondary}
              alt="Zulqarnain Haider profile detail"
            />
          </div>
          <div className="craft-float">
            <span className="card-label">Signature</span>
            <strong>{owner.experience}</strong>
            <p>Full stack software engineer with product-first delivery instincts.</p>
          </div>
        </div>
      </div>

      <div className="craft-copy reveal reveal-delay">
        <span className="eyebrow">Craft</span>
        <h2>A premium digital presence backed by real software delivery.</h2>
        <p>
          The brand is cinematic. The engineering is practical. That contrast is the point.
        </p>

        <div className="principles-list">
          {craftPrinciples.map((principle) => (
            <article key={principle.index} className="principle-card">
              <span>{principle.index}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
