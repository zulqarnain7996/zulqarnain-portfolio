import { useEffect, useRef, useState } from 'react'
import { navigationItems, owner } from '../data/content'
import { themes } from '../data/themes'

export function NavBar({ theme, setTheme }) {
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const activeTheme = themes.find((item) => item.id === theme) ?? themes[0]

  useEffect(() => {
    function handlePointerDown(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsThemeMenuOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsThemeMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

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

        <div className="nav-actions">
          <div className="theme-dropdown" ref={menuRef}>
            <span className="theme-switcher-label">Themes</span>

            <button
              type="button"
              className={`theme-dropdown-trigger ${isThemeMenuOpen ? 'is-open' : ''}`}
              onClick={() => setIsThemeMenuOpen((value) => !value)}
              aria-haspopup="menu"
              aria-expanded={isThemeMenuOpen}
            >
              <span className={`theme-swatch ${activeTheme.accent}`} aria-hidden="true" />
              <span className="theme-copy">
                <small>{activeTheme.label}</small>
                <strong>{activeTheme.name}</strong>
                <em>{activeTheme.mood}</em>
              </span>
              <span className="theme-dropdown-caret" aria-hidden="true" />
            </button>

            {isThemeMenuOpen ? (
              <div className="theme-dropdown-menu" role="menu" aria-label="Theme menu">
                {themes.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="menuitemradio"
                    aria-checked={theme === item.id}
                    className={`theme-option ${theme === item.id ? 'is-active' : ''}`}
                    onClick={() => {
                      setTheme(item.id)
                      setIsThemeMenuOpen(false)
                    }}
                  >
                    <span className={`theme-swatch ${item.accent}`} aria-hidden="true" />
                    <span className="theme-copy">
                      <small>{item.label}</small>
                      <strong>{item.name}</strong>
                      <em>{item.mood}</em>
                    </span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <a className="nav-cta" href={`mailto:${owner.email}`}>
            Book a Build
          </a>
        </div>
      </div>
    </header>
  )
}
