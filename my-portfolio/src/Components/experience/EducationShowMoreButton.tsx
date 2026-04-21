import type { ToggleLanguage } from '../../types/experienceToggle'

type EducationShowMoreButtonProps = {
  isExpanded: boolean
  language: ToggleLanguage
  onToggle: () => void
}

export default function EducationShowMoreButton({
  isExpanded,
  language,
  onToggle,
}: EducationShowMoreButtonProps) {
  return (
    <div className="education-more-row">
      <button
        type="button"
        className="education-more-button"
        onClick={onToggle}
      >
        {isExpanded
          ? language === 'en'
            ? 'Show less'
            : 'Свернуть'
          : language === 'en'
            ? 'Show more'
            : 'Показать еще'}
      </button>
    </div>
  )
}
