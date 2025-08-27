import { useState } from 'react'
import type { ExperienceType } from './Experience'

export default function ExperienceObj({
  date,
  name,
  description,
}: ExperienceType) {
  const [toggle, setToggle] = useState(false)

  const bulletPoints = description
    .split('.')
    .map((s) => s.trim())
    .filter((s) => s.length > 0)

  return (
    <div className={toggle ? 'toggle active' : 'toggle'}>
      <div className="toggleVisibleRow">
        <div>
          <span className="date">{date}</span>
          <h4 className="h4">{name}</h4>
        </div>
        <button
          onClick={() => setToggle(!toggle)}
          className={`toggleButton ${toggle ? 'active' : ''}`}
        ></button>
      </div>
      {toggle && (
        <ul className="experienceDesc">
          {bulletPoints.map((point, i) => (
            <li key={i}>{point}.</li>
          ))}
        </ul>
      )}
    </div>
  )
}
