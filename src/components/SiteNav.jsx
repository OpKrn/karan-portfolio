import { useState } from 'react'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { navigation, profile } from '../data/portfolio'

export default function SiteNav({ theme, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Karan — back to top" onClick={closeMenu}>
        K<span>.</span>
      </a>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav
        className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {navigation.map((item, index) => (
          <a
            href={item.href}
            className="site-nav__link"
            key={item.href}
            onClick={closeMenu}
          >
            <span className="site-nav__index">0{index + 1}</span>
            {item.label}
          </a>
        ))}
        <button
          className="theme-toggle"
          type="button"
          onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
        <a
          className="site-nav__contact"
          href="#contact"
          onClick={closeMenu}
          aria-label={`Contact ${profile.name}`}
        >
          Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </nav>
    </header>
  )
}
