import { navigationItems } from '../data/content'

export function NavBar() {
  return (
    <header className="navbar-wrap">
      <div className="navbar">
        <a className="brand" href="#hero">
          <span className="brand-monogram">ZH</span>
          <span className="brand-text">
            <strong>Zulqarnain Haider</strong>
            <span>Engineer Portfolio</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-button" href="#contact">
          Let&apos;s Build
        </a>
      </div>
    </header>
  )
}
