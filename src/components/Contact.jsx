import { owner, socialLinks } from '../data/content'
import { SocialIcon } from './Icons'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-panel reveal">
        <SectionHeading
          label="Contact"
          title="Let's build something sharp and production-ready."
          text="Web apps, APIs, AI integrations, and full stack delivery."
          align="center"
        />

        <a className="contact-email" href={`mailto:${owner.email}`}>
          {owner.email}
        </a>

        <div className="contact-actions">
          <a className="button button-solid" href={`mailto:${owner.email}`}>
            Discuss a Project
          </a>

          <div className="contact-socials">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="contact-social-link"
                href={link.href}
                aria-label={link.label}
              >
                <SocialIcon name={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
