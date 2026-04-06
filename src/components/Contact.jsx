import { owner } from '../data/content'

export function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-panel reveal">
        <span className="eyebrow">Contact</span>
        <h2>Ready to build something sharp, modern, and difficult to ignore.</h2>
        <p>
          For premium web apps, reliable APIs, and AI-powered product work, start here.
        </p>
        <a className="contact-mail" href={`mailto:${owner.email}`}>
          {owner.email}
        </a>
      </div>
    </section>
  )
}
