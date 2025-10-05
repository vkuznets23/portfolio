import { useState } from 'react'
import type { Experience } from '../data/experience'
import '../CSS/Toggle.css'

export default function ExperienceObj({ date, name, description }: Experience) {
  const [toggle, setToggle] = useState(false)

  const bulletPoints = description
    .split('.')
    .map((s: string) => s.trim())
    .filter((s: string) => s.length > 0)

  return (
    <div className={!toggle ? 'toggleCard' : ''}>
      <div
        className={toggle ? 'toggle active' : 'toggle'}
        onClick={() => setToggle(!toggle)}
      >
        <div className="toggleVisibleRow">
          <div>
            <span className="date">{date}</span>
            <h4 className="h4">{name}</h4>
          </div>
          <button
            onClick={() => setToggle(!toggle)}
            className={`toggleButton ${toggle ? 'active' : ''}`}
          />
        </div>
        {toggle && (
          <ul className="experienceDesc">
            {bulletPoints.map((point: string, i: number) => (
              <li key={i}>{point}.</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
