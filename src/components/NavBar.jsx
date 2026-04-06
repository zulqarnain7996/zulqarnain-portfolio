import { navigationItems, owner } from '../data/content'

export function NavBar() {
  return (
    <header className="nav-wrap">
      <div className="nav-shell">
        <a className="nav-brand" href="#hero" aria-label="Go to top">
          <span className="nav-brand-mark">ZH</span>
          <span className="nav-brand-copy">
            <strong>{owner.name}</strong>
            <span>{owner.title}</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href={`mailto:${owner.email}`}>
          Book a Build
        </a>
      </div>
    </header>
  )
}
