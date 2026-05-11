import { useEffect } from 'react'
import './Lightbox.scss'

interface Props {
  src: string
  alt: string
  onClose: () => void
}

export default function Lightbox({ src, alt, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal aria-label={alt}>
      <button className="lightbox__close" onClick={onClose} aria-label="Stäng">✕</button>
      <img
        src={src}
        alt={alt}
        className="lightbox__image"
        onClick={e => e.stopPropagation()}
      />
    </div>
  )
}
