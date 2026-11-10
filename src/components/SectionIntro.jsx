export default function SectionIntro({ number, eyebrow, title, description, id }) {
  return (
    <header className="section-intro reveal" id={id}>
      <div className="section-intro__label">
        <span className="section-number">{number}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-intro__body">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </header>
  )
}
