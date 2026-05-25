import PageHeader from '../components/PageHeader'
import { permits, rules, fishingPermitUrl } from '../data/content'
import { useTitle } from '../hooks/useTitle'
import './FiskekortRegler.scss'

export default function FiskekortRegler() {
  useTitle('Fiskekort & Regler')

  return (
    <main id="main-content">
      <PageHeader
        label="Fiskekort & Regler"
        title="Fiska i Hären"
        subtitle="Köp ditt fiskekort via ifiske.se. Välj det alternativ som passar din fisketur bäst."
      />

      <section className="section fishing-permit__buy" aria-label="Köp fiskekort">
        <div className="container">
          <a
            href={fishingPermitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            Köp fiskekort på iFISKE.se →
          </a>
        </div>
      </section>

      <section className="section fishing-permit__prices" aria-labelledby="prices-heading">
        <div className="container">
          <div className="fishing-permit__two-col">
            <div>
              <p className="fishing-permit__label">Priser</p>
              <h2 className="fishing-permit__title" id="prices-heading">Fiskekort</h2>
              <hr className="divider" aria-hidden="true" />
              <div className="fishing-permit__table">
                <table>
                  <caption className="visually-hidden">Prislista för fiskekort</caption>
                  <thead>
                    <tr><th scope="col">Kortyp</th><th scope="col">Pris</th></tr>
                  </thead>
                  <tbody>
                    {permits.map(p => (
                      <tr key={p.title}>
                        <td>{p.title}</td>
                        <td>{p.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="fishing-permit__note">
              <p>Fiskekort kan köpas online via fiskekort.se. Kortet ger dig tillgång till Härens vatten under den period du väljer.</p>
              <p>Har du frågor om priser eller speciella tillstånd? Kontakta föreningens ordförande.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section fishing-permit__rules" aria-labelledby="rules-heading">
        <div className="container">
          <p className="fishing-permit__label">Bestämmelser</p>
          <h2 className="fishing-permit__title" id="rules-heading">Regler</h2>
          <hr className="divider" aria-hidden="true" />
          <div className="fishing-permit__rule-grid">
            {rules.map((rule, i) => (
              <article key={rule.title} className="fishing-permit__rule">
                <span className="fishing-permit__rule-number" aria-hidden="true">0{i + 1}</span>
                <h3 className="fishing-permit__rule-title">{rule.title}</h3>
                <p className="fishing-permit__rule-text">{rule.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
