import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/content'
import './Navbar.scss'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--solid' : 'navbar--transparent'}`}>
        <div className="navbar__inner">
          <NavLink to="/" className="navbar__logo" onClick={close}>
            <span className="navbar__logo-short">Härens FVO</span>
            <span className="navbar__logo-full">Härens Fiskevårdsförening</span>
          </NavLink>

          <nav className="navbar__links" aria-label="Huvudnavigation">
            {navLinks.map(l => (
              <NavLink
                key={l.route}
                to={l.route}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
              >
                {l.text}
              </NavLink>
            ))}
          </nav>

          <button
            className="navbar__burger"
            aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className={menuOpen ? 'navbar__burger-line navbar__burger-line--open-top' : 'navbar__burger-line'} />
            <span className={menuOpen ? 'navbar__burger-line navbar__burger-line--open-mid' : 'navbar__burger-line'} />
            <span className={menuOpen ? 'navbar__burger-line navbar__burger-line--open-bot' : 'navbar__burger-line'} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu" aria-modal role="dialog">
          <nav className="mobile-menu__links">
            {navLinks.map(l => (
              <NavLink
                key={l.route}
                to={l.route}
                className={({ isActive }) =>
                  `mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}`
                }
                onClick={close}
              >
                {l.text}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
