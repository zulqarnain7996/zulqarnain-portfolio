import { aboutHighlights, owner, profileImages } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-layout">
        <div className="about-copy">
          <SectionHeading
            label="About"
            title="Engineering with clarity, polish, and reliable delivery."
            text={`${owner.experience} building modern products across backend systems and frontend experiences.`}
          />

          <div className="about-highlights">
            {aboutHighlights.map((item, index) => (
              <article
                key={item.title}
                className={`about-feature reveal ${index > 0 ? 'reveal-delay' : ''}`}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about-visual reveal reveal-delay">
          <div className="about-image-wrap">
            <img
              src={profileImages.workspace}
              alt="Zulqarnain Haider featured portrait"
              className="about-image"
            />
          </div>
          <div className="about-note">
            <span>Company Experience</span>
            <strong>{owner.company}</strong>
            <p>Product-focused engineering.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
