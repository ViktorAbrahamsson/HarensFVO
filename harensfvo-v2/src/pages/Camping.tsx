import PageHeader from '../components/PageHeader'
import { campingUrl } from '../data/content'
import { useTitle } from '../hooks/useTitle'
import './Camping.scss'

export default function Camping() {
  useTitle('Camping')

  return (
    <main id="main-content">
      <PageHeader
        label="Boende"
        title="Camping"
        subtitle="Nära Hären finns Välornas Camping — ett utmärkt basläger för din fisketur i naturen."
      />

      <section className="section" aria-labelledby="camping-heading">
        <div className="container">
          <div className="camping__layout">
            <div className="camping__photo">
              <img
                src="/images/batramp2.jpg"
                alt="Båtramp vid sjön Hären"
                className="camping__photo-image"
              />
            </div>
            <div className="camping__content">
              <p className="camping__content-label">Välornas Camping</p>
              <h2 className="camping__content-title" id="camping-heading">Sov nära vattnet</h2>
              <hr className="divider" aria-hidden="true" />
              <p className="camping__content-text">
                Välornas Camping erbjuder ett naturskönt läge i Västra Småland, perfekt för
                dig som vill kombinera fiske i Hären med ett bekvämt och naturligt boende.
                Hit är du varmt välkommen — oavsett om du är erfaren sportfiskare eller nybörjare.
              </p>
              <a
                href={campingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline-dark camping__cta"
              >
                Besök Välornas Camping <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
