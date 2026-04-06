export function SectionHeading({ label, title, text, align = 'left' }) {
  return (
    <div className={`section-heading section-heading-${align} reveal`}>
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
