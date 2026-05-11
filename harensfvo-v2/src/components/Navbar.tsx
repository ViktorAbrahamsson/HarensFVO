import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/content'
import './Navbar.scss'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const burgerRef = useRef<HTMLButtonElement>(null)

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

  // Focus first link when menu opens; restore focus to burger when it closes
  useEffect(() => {
    if (menuOpen) {
      const first = menuRef.current?.querySelector<HTMLElement>('a')
      first?.focus()
    } else {
      burgerRef.current?.focus()
    }
  }, [menuOpen])

  // Escape closes menu; Tab traps focus inside menu
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        return
      }
      if (e.key !== 'Tab') return

      const focusable = Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>('a[href]') ?? []
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last?.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
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
            ref={burgerRef}
            type="button"
            className="navbar__burger"
            aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className={menuOpen ? 'navbar__burger-line navbar__burger-line--open-top' : 'navbar__burger-line'} />
            <span className={menuOpen ? 'navbar__burger-line navbar__burger-line--open-mid' : 'navbar__burger-line'} />
            <span className={menuOpen ? 'navbar__burger-line navbar__burger-line--open-bot' : 'navbar__burger-line'} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div id="mobile-menu" ref={menuRef} className="mobile-menu" role="dialog" aria-modal aria-label="Navigeringsmeny">
          <nav className="mobile-menu__links" aria-label="Mobil navigation">
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
