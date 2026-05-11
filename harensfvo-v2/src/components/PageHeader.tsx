import './PageHeader.scss'

interface Props {
  label: string
  title: string
  subtitle?: string
}

export default function PageHeader({ label, title, subtitle }: Props) {
  return (
    <header className="page-header">
      <div className="container">
        <p className="page-header__label">{label}</p>
        <h1 className="page-header__title">{title}</h1>
        {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
      </div>
    </header>
  )
}
