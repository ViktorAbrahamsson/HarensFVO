import { Link } from 'react-router-dom'
import { contact, navLinks } from '../data/content'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <Link to="/" className="footer__brand-name">Härens FVO</Link>
          <p className="footer__brand-sub">Härens Fiskevårdsförening</p>
          <p className="footer__copy">© {new Date().getFullYear()} Härens FVO</p>
        </div>

        <nav className="footer__nav" aria-label="Sidlänkar">
          {navLinks.map(l => (
            <Link key={l.route} to={l.route} className="footer__nav-link">
              {l.text}
            </Link>
          ))}
        </nav>

        <address className="footer__contact">
          <p className="footer__contact-label">Kontakt</p>
          <p className="footer__contact-name">{contact.chairman.name}</p>
          <a href={`tel:${contact.chairman.phone.replace(/\s/g, '')}`} className="footer__contact-detail">
            {contact.chairman.phone}
          </a>
          <a href={`mailto:${contact.chairman.email}`} className="footer__contact-detail">
            {contact.chairman.email}
          </a>
        </address>
      </div>

      <div className="footer__bar">
        <div className="footer__bar-inner">
          <span className="footer__bar-text">
            Webb av{' '}
            <a href={`mailto:${contact.developer.email}`} className="footer__bar-link">
              {contact.developer.name}
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
