import { useId, useState } from 'react'
// useId helps you generate unique, stable IDs for accessibility attributes and form elements
import type { Experience } from '../../data/experience'

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

  return (
    <div className={!toggle ? 'toggleCard' : ''}>
      <div
        className={toggle ? 'toggle active' : 'toggle'}
      >
        {hasDescription ? (
          <button
            type="button"
            className="toggleVisibleRow toggleVisibleRowButton"
            onClick={handleToggle}
            aria-expanded={toggle}
            aria-controls={contentId}
            aria-labelledby={headingId}
          >
            <div>
              <span className="date">{date}</span>
              <h3 id={headingId} className="work-card-title">
                {name}
              </h3>
            </div>
            <span
              className={`toggleButton ${toggle ? 'active' : ''}`}
              aria-hidden="true"
            />
          </button>
        ) : (
          <div className="toggleVisibleRow">
            <div>
              <span className="date">{date}</span>
              <h3 id={headingId} className="work-card-title">
                {name}
              </h3>
            </div>
          </div>
        )}
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
