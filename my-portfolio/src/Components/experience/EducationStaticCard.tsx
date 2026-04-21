import type { CategorizedExperience } from '../../types/experienceToggle'

type EducationStaticCardProps = {
  item: CategorizedExperience
  chipLabel: string
}

export default function EducationStaticCard({
  item,
  chipLabel,
}: EducationStaticCardProps) {
  const dateParts = item.date.split(/\s[-—–]\s/)
  const hasRangeDate = dateParts.length === 2
  const firstDatePart = hasRangeDate
    ? dateParts[0].replaceAll(' ', '\u00A0')
    : ''
  const secondDatePart = hasRangeDate
    ? dateParts[1].replaceAll(' ', '\u00A0')
    : ''

  return (
    <div className="education-card" role="listitem">
      <div className="education-card-top">
        <h4 className="education-card-title">{item.name}</h4>
        <span className="education-card-date">
          {hasRangeDate ? (
            <>
              {firstDatePart}
              <br />
              {secondDatePart}
            </>
          ) : (
            item.date
          )}
        </span>
      </div>
      {item.organization && (
        <p className="education-card-subtitle">{item.organization}</p>
      )}
      <span className="education-card-chip">{chipLabel}</span>
    </div>
  )
}
