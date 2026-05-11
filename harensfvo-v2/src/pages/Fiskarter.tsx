import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Lightbox from '../components/Lightbox'
import { fishSpecies, type FishSpecies } from '../data/content'
import { useTitle } from '../hooks/useTitle'
import './Fiskarter.scss'

export default function Fiskarter() {
  useTitle('Fiskarter')
  const [selected, setSelected] = useState<FishSpecies | null>(null)

  return (
    <main id="main-content">
      <PageHeader
        label="Fauna"
        title="Fiskarter i Hären"
        subtitle={`${fishSpecies.length} arter lever i Härens vatten.`}
      />

      <section className="section" aria-label="Fiskarter">
        <div className="container">
          <ul className="fish-species__grid" role="list">
            {fishSpecies.map(s => (
              <li key={s.name}>
                <button
                  type="button"
                  className="fish-species__card"
                  onClick={() => setSelected(s)}
                  aria-label={`Förstora bild på ${s.name}`}
                >
                  <div className="fish-species__image-wrap">
                    <img src={s.img} alt={s.name} className="fish-species__image" loading="lazy" />
                  </div>
                  <p className="fish-species__name" aria-hidden="true">{s.name}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {selected && (
        <Lightbox src={selected.img} alt={selected.name} onClose={() => setSelected(null)} />
      )}
    </main>
  )
}
