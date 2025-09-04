import { useEffect, useRef, useState } from 'react'
import '../css/facts.css'

type AboutMeProps = {
  description: string
  header: string
  facts: string[]
}
export default function AboutMe({ description, header, facts }: AboutMeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect() // activates once
        }
      },
      { threshold: 0.5 } // when 20% of the element is visible
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])
  return (
    <div className="experience-container">
      <div ref={ref} className={visible ? 'slide-up' : 'hidden'}>
        <h2 className="h2">{header}</h2>
        <div className="description-flex-container">
          <div className="description">{description}</div>
        </div>
      </div>
      {/* <div className="facts">
        <div className="fact1">
          <p>{facts[0]}</p>
        </div>
        <div className="fact2">
          <p>{facts[1]}</p>
        </div>
      </div> */}
      <div className="container">
        <div className="fact fact1">
          <p>
            <b>Fact #1</b> {facts[0]}
          </p>
        </div>
        <div className="fact fact2">
          <p>
            <b>Fact #2</b> {facts[1]}
          </p>
        </div>
        <div className="fact fact3">
          <p>
            <b>Fact #3</b> {facts[2]}
          </p>
        </div>
      </div>
      {/* {facts.map((fact, i) => (
        <p key={i}>{fact}</p>
      ))} */}
    </div>
  )
}
