import { ArrowIcon, SocialIcon } from './Icons'
import { heroMetrics, owner, profileImages, socialLinks } from '../data/content'

export function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="hero-copy reveal">
        <span className="hero-kicker">Premium Full Stack Engineering</span>
        <div className="hero-intent-line" aria-hidden="true">
          <span />
          <p>Software engineer brand site</p>
        </div>
        <h1>
          {owner.name}
          <span>{owner.title}</span>
        </h1>
        <p className="hero-intro">{owner.intro}</p>

        <div className="hero-actions">
          <a className="button button-solid" href="#projects">
            View Selected Work
          </a>
          <a className="button button-outline" href={`mailto:${owner.email}`}>
            Start a Conversation
          </a>
        </div>

        <div className="hero-socials" aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="social-pill"
              href={link.href}
              aria-label={link.label}
            >
              <SocialIcon name={link.icon} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="hero-stage reveal reveal-delay">
        <div className="hero-stage-backdrop" aria-hidden="true" />
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="hero-orb hero-orb-three" aria-hidden="true" />
        <div className="hero-stage-grid" aria-hidden="true" />

        <div className="hero-portrait-frame">
          <div className="hero-portrait-ring" aria-hidden="true" />
          <div className="hero-portrait-shine" aria-hidden="true" />
          <img
            src={profileImages.hero}
            alt="Portrait of Zulqarnain Haider"
            className="hero-portrait"
          />
        </div>

        <div className="hero-floating-card hero-floating-top">
          <span>{owner.experience}</span>
          <strong>Hands-on product development</strong>
        </div>

        <div className="hero-floating-card hero-floating-side">
          <span>Stack</span>
          <strong>Laravel, React, Python, REST APIs</strong>
        </div>

        <a className="hero-floating-card hero-floating-bottom" href="#services">
          <div>
            <span>Services</span>
            <strong>Web apps, APIs, AI integrations</strong>
          </div>
          <ArrowIcon />
        </a>
      </div>

      <div className="hero-metrics reveal reveal-delay-2">
        {heroMetrics.map((metric) => (
          <article key={metric.label} className="metric-item">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
