import { useId, useState } from 'react'
// useId helps you generate unique, stable IDs for accessibility attributes and form elements
import type { Experience } from '../data/experience'

export default function ExperienceObj({ date, name, description }: Experience) {
  const [toggle, setToggle] = useState(false)
  const headingId = useId()
  const contentId = useId()
  const hasDescription = Boolean(description?.trim())

  const bulletPoints = (description || '')
    .split('.')
    .map((s: string) => s.trim())
    .filter((s: string) => s.length > 0)

  const handleToggle = () => {
    if (!hasDescription) return
    setToggle(!toggle)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggle()
    }
  }

  return (
    <div className={!toggle ? 'toggleCard' : ''}>
      <div
        className={toggle ? 'toggle active' : 'toggle'}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        tabIndex={hasDescription ? 0 : -1}
        role={hasDescription ? 'button' : undefined}
        aria-expanded={hasDescription ? toggle : undefined}
        aria-controls={hasDescription ? contentId : undefined}
        aria-labelledby={headingId}
      >
        <div className="toggleVisibleRow">
          <div>
            <span className="date">{date}</span>
            <h3 id={headingId} className="h4">
              {name}
            </h3>
          </div>
          {hasDescription && (
            <span
              className={`toggleButton ${toggle ? 'active' : ''}`}
              aria-hidden="true"
            />
          )}
        </div>
        {hasDescription && toggle && (
          <ul
            className="experienceDesc"
            id={contentId}
            aria-labelledby={headingId}
          >
            {bulletPoints.map((point: string, i: number) => (
              <li key={i}>{point}.</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
