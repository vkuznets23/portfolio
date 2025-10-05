import { useEffect, useRef, useState } from 'react'
import CircularText from './CircleText'
import ExperienceObj from './ExperienceObj'
import { useGlobal } from '../hooks/useGlobal'
import { type ExperienceType } from '../types/experience'

type ExperienceProps = {
  header: string
  description: string
  experience: ExperienceType[]
}
export default function Experience({
  header,
  description,
  experience,
}: ExperienceProps) {
  const { language } = useGlobal()

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
          <div className="scrolldown-wrapper" style={{ fontWeight: 300 }}>
            <CircularText
              text={
                language == 'en'
                  ? 'click * click * click ** click * click * click **'
                  : 'клик ** клик ** клик ** клик ** клик ***'
              }
              radius={62}
            />
            <span className="emoji-pointer">👈</span>
          </div>
        </div>
      </div>

      <div className="toggleAll">
        {experience.map((obj, i) => (
          <ExperienceObj key={i} {...obj} />
        ))}
      </div>
    </div>
  )
}
