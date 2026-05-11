import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Lightbox from '../components/Lightbox'
import { fishSpecies, type FishSpecies } from '../data/content'
import './Fiskarter.scss'

export default function Fiskarter() {
  const [selected, setSelected] = useState<FishSpecies | null>(null)

  return (
    <main>
      <PageHeader
        label="Fauna"
        title="Fiskarter i Hären"
        subtitle={`${fishSpecies.length} arter lever i Härens vatten.`}
      />

      <section className="section">
        <div className="container">
          <div className="fish-species__grid">
            {fishSpecies.map(s => (
              <button
                key={s.name}
                className="fish-species__card"
                onClick={() => setSelected(s)}
                aria-label={`Förstora bild på ${s.name}`}
              >
                <div className="fish-species__image-wrap">
                  <img src={s.img} alt={s.name} className="fish-species__image" loading="lazy" />
                </div>
                <p className="fish-species__name">{s.name}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <Lightbox src={selected.img} alt={selected.name} onClose={() => setSelected(null)} />
      )}
    </main>
  )
}
