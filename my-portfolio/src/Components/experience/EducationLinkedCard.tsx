import type {
  CategorizedExperience,
} from '../../types/experienceToggle'

type EducationLinkedCardProps = {
  item: CategorizedExperience
  chipLabel: string
}

export default function EducationLinkedCard({
  item,
  chipLabel,
}: EducationLinkedCardProps) {
  return (
    <a
      className="education-card education-card-link"
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
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
    </a>
  )
}
