import { useState } from 'react'
import { Link } from 'react-router-dom'
import { homeCards, lakeFacts, fishingPermitUrl } from '../data/content'
import Lightbox from '../components/Lightbox'
import './Home.scss'

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <main>
      <section className="hero">
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="hero__eyebrow">Gnosjö, Sverige</p>
          <h1 className="hero__title">
            Härens<br />
            Fiskevårds&shy;förening
          </h1>
          <p className="hero__subtitle">
            Naturvatten förvaltade med omsorg sedan 1938.
          </p>
          <div className="hero__actions">
            <a href={fishingPermitUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              Köp fiskekort
            </a>
            <Link to="/information" className="btn btn--outline">
              Om föreningen
            </Link>
          </div>
        </div>
        <div className="hero__scroll" aria-hidden>
          <span />
        </div>
      </section>

      <section className="section highlights">
        <div className="container">
          <div className="highlights__grid">
            {homeCards.map((card, i) => (
              <Link to={card.route} key={card.route} className="highlights__item">
                <span className="highlights__item-number">0{i + 1}</span>
                <hr className="highlights__item-rule" />
                <div
                  className="highlights__item-image"
                  style={{ backgroundImage: `url(${card.img})` }}
                  aria-hidden
                />
                <h2 className="highlights__item-title">{card.title}</h2>
                <p className="highlights__item-description">{card.text}</p>
                <span className="highlights__item-arrow">Läs mer →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section facts">
        <div className="container">
          <div className="facts__grid">
            <div>
              <p className="facts__label">Om sjön</p>
              <h2 className="facts__title">Hären</h2>
              <hr className="divider" />
              <dl className="facts__list">
                {lakeFacts.map(f => (
                  <div key={f.title} className="facts__row">
                    <dt className="facts__term">{f.title}</dt>
                    <dd className="facts__value">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <button
                className="facts__map-button"
                onClick={() => setLightboxOpen(true)}
                aria-label="Förstora djupkartan"
              >
                <img
                  src="/images/djupkarta.png"
                  alt="Djupkarta över sjön Hären"
                  className="facts__map-image"
                />
                <span className="facts__map-hint">Klicka för att förstora</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          src="/images/djupkarta.png"
          alt="Djupkarta över sjön Hären"
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </main>
  )
}
