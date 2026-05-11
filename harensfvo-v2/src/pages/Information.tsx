import PageHeader from '../components/PageHeader'
import { historia } from '../data/content'
import { useTitle } from '../hooks/useTitle'
import './Information.scss'

export default function Information() {
  useTitle('Information')

  return (
    <main id="main-content">
      <PageHeader
        label="Om föreningen"
        title="Information"
        subtitle="Härens Fiskevårdsförening bildades 1938 och förvaltar sjöarna runt Gnosjö med omsorg."
      />

      <section className="section" aria-labelledby="history-heading">
        <div className="container">
          <div className="information__layout">
            <aside className="information__aside" aria-label="Grundat">
              <p className="information__aside-label">Historia</p>
              <p className="information__aside-year" aria-label="Grundat 1938">1938</p>
              <p className="information__aside-description">Föreningens grundande</p>
            </aside>
            <div className="information__body">
              <h2 className="visually-hidden" id="history-heading">Historia</h2>
              {historia.map((p, i) => (
                <p key={i} className="information__paragraph">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section information__gallery" aria-label="Bilder från Hären">
        <div className="container">
          <div className="information__gallery-grid">
            <img src="/images/brygga.jpg" alt="Brygga vid sjön Hären" className="information__gallery-photo" />
            <img src="/images/neckros.JPG" alt="Näckros i Hären" className="information__gallery-photo" />
          </div>
        </div>
      </section>
    </main>
  )
}
