import type {
  CategorizedExperience,
} from '../../types/experienceToggle'

type EducationStaticCardProps = {
  item: CategorizedExperience
  chipLabel: string
}

export default function EducationStaticCard({
  item,
  chipLabel,
}: EducationStaticCardProps) {
  return (
    <div
      className="education-card"
      role="listitem"
    >
      <div className="education-card-top">
        <h4 className="education-card-title">{item.name}</h4>
        <span className="education-card-date">{item.date}</span>
      </div>
      {item.organization && (
        <p className="education-card-subtitle">{item.organization}</p>
      )}
      <span className="education-card-chip">{chipLabel}</span>
    </div>
  )
}
