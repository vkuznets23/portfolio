import { useId, useState } from 'react'
// useId helps you generate unique, stable IDs for accessibility attributes and form elements
import type { Experience } from '../data/experience'

export default function ExperienceObj({ date, name, description }: Experience) {
  const [toggle, setToggle] = useState(false)
  const headingId = useId()
  const contentId = useId()

  const bulletPoints = description
    .split('.')
    .map((s: string) => s.trim())
    .filter((s: string) => s.length > 0)

  return (
    <div className={!toggle ? 'toggleCard' : ''}>
      <div
        className={toggle ? 'toggle active' : 'toggle'}
        onClick={() => setToggle(!toggle)}
        aria-labelledby={headingId}
      >
        <div className="toggleVisibleRow">
          <div>
            <span className="date">{date}</span>
            <h4 id={headingId} className="h4">
              {name}
            </h4>
          </div>
          <button
            type="button"
            onClick={() => setToggle(!toggle)}
            className={`toggleButton ${toggle ? 'active' : ''}`}
            aria-expanded={toggle}
            aria-controls={contentId}
            aria-label={`${toggle ? 'Hide' : 'Show'} details for ${name}`}
          />
        </div>
        {toggle && (
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
