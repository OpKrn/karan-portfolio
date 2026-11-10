import { useEffect, useRef, useState } from 'react'
import CursorFollower from './components/CursorFollower'
import SiteNav from './components/SiteNav'
import {
  About,
  Contact,
  Expertise,
  Exploring,
  Experience,
  Footer,
  Hero,
  Principles,
  Projects,
} from './sections/PortfolioSections'
import usePortfolioMotion from './hooks/usePortfolioMotion'

function readSavedTheme() {
  const savedTheme = window.localStorage.getItem('karan-theme')
  return savedTheme === 'light' ? 'light' : 'dark'
}

function App() {
  const [theme, setTheme] = useState(readSavedTheme)
  const pageRef = useRef(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('karan-theme', theme)
  }, [theme])

  usePortfolioMotion(pageRef)

  return (
    <div className="site-shell min-h-screen" ref={pageRef}>
      <CursorFollower />
      <SiteNav theme={theme} onThemeChange={setTheme} />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Principles />
        <Exploring />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
