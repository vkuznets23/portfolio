import { useState } from 'react'
import type { ExperienceType } from './Experience'

export default function ExperienceObj({
  date,
  name,
  description,
}: ExperienceType) {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="toggle">
      <div className="toggleVisibleRow">
        <div>
          <span className="date">{date}</span>
          <h4 className="h4">{name}</h4>
        </div>
        <button onClick={() => setToggle(!toggle)}> Click</button>
      </div>
      {toggle && <p>{description}</p>}
    </div>
  )
}
