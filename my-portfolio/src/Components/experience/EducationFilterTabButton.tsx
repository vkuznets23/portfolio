type EducationFilterTabButtonProps = {
  label: string
  count: number
  isActive: boolean
  onSelect: () => void
}

export default function EducationFilterTabButton({
  label,
  count,
  isActive,
  onSelect,
}: EducationFilterTabButtonProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      className={`education-filter-button ${isActive ? 'active' : ''}`}
      onClick={onSelect}
    >
      {label} ({count})
    </button>
  )
}
