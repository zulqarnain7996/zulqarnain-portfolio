import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-aurora" aria-hidden="true" />
      <div className="ambient ambient-grid" aria-hidden="true" />
      <div className="ambient ambient-noise" aria-hidden="true" />
      <div className="ambient ambient-vignette" aria-hidden="true" />
      <div className="ambient ambient-spotlight" aria-hidden="true" />
      <div className="ambient ambient-particles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <NavBar />

      <main className="page-main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
