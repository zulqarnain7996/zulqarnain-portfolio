import { heroMetrics, heroPills, owner, profileImages } from '../data/content'

export function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="hero-copy reveal">
        <div className="hero-copy-frame">
          <div className="eyebrow-row">
            <span className="eyebrow">Elite Software Engineer Brand</span>
            <span className="status-pill">{owner.availability}</span>
          </div>

          <div className="hero-heading-orbit" aria-hidden="true">
            <span />
            <span />
          </div>

          <h1 className="hero-title">
            <span className="hero-title-name">{owner.name}</span>
            <small>{owner.title}</small>
          </h1>

          <p className="hero-statement">{owner.heroStatement}</p>
          <p className="hero-summary">{owner.heroSummary}</p>

          <div className="hero-actions">
            <a className="hero-action hero-action-primary" href="#projects">
              <span className="hero-action-label">Selected Work</span>
              <strong>Explore flagship builds</strong>
            </a>
            <a className="hero-action hero-action-secondary" href={`mailto:${owner.email}`}>
              <span className="hero-action-label">Start a conversation</span>
              <strong>{owner.email}</strong>
            </a>
          </div>

          <div className="hero-pill-row" aria-label="Core stack">
            {heroPills.map((pill) => (
              <span key={pill} className="hero-pill">
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-metrics">
          {heroMetrics.map((metric) => (
            <article key={metric.label} className="hero-metric">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="hero-stage reveal reveal-delay">
        <div className="hero-stage-frame">
          <div className="hero-stage-backlight" aria-hidden="true" />
          <div className="hero-stage-mesh" aria-hidden="true" />
          <div className="hero-stage-sheen" aria-hidden="true" />
          <div className="hero-stage-noise" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-beam hero-beam-a" aria-hidden="true" />
          <div className="hero-beam hero-beam-b" aria-hidden="true" />
          <div className="hero-ribbon hero-ribbon-a" aria-hidden="true" />
          <div className="hero-ribbon hero-ribbon-b" aria-hidden="true" />
          <div className="hero-halo hero-halo-a" aria-hidden="true" />
          <div className="hero-halo hero-halo-b" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-a" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-b" aria-hidden="true" />
          <div className="hero-arc hero-arc-a" aria-hidden="true" />
          <div className="hero-arc hero-arc-b" aria-hidden="true" />

          <div className="hero-card hero-card-top">
            <span className="card-label">Experience</span>
            <strong>{owner.experience}</strong>
            <p>Delivering full stack systems with premium product feel.</p>
          </div>

          <div className="hero-portrait-echo" aria-hidden="true">
            <img
              className="hero-portrait hero-portrait-secondary"
              src={profileImages.secondary}
              alt=""
            />
          </div>

          <div className="hero-portrait-shell">
            <div className="hero-portrait-border" aria-hidden="true" />
            <div className="hero-portrait-glow" aria-hidden="true" />
            <div className="hero-portrait-sheen" aria-hidden="true" />
            <div className="hero-portrait-caption" aria-hidden="true">
              <span>Zulqarnain Haider</span>
              <strong>Full Stack Software Engineer</strong>
            </div>
            <img
              className="hero-portrait"
              src={profileImages.primary}
              alt="Portrait of Zulqarnain Haider"
            />
          </div>

          <div className="hero-card hero-card-side">
            <span className="card-label">Core Focus</span>
            <strong>Web apps, APIs, AI integrations</strong>
          </div>

          <div className="hero-card hero-card-bottom">
            <span className="card-label">Execution</span>
            <strong>Laravel, React, Python</strong>
            <p>From architecture to shipping polish.</p>
          </div>

          <div className="hero-runway" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
