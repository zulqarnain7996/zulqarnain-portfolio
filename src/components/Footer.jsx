import { owner } from '../data/content'

export function Footer() {
  return (
    <footer className="footer section">
      <div className="footer-inner">
        <p>{owner.name}</p>
        <span>{owner.title}</span>
      </div>
    </footer>
  )
}
