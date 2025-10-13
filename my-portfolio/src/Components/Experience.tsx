import { useEffect, useRef, useState } from 'react'
import { ExperienceObj } from '../Components'
import { useGlobal, useAppData, useTypografCombined } from '../hooks'
import { useExperienceTypograf } from '../hooks/useTypograph'
import { type ExperienceType } from '../types/experience'
import HeaderAndDescription from './HeaderAndDescription'

export default function Experience() {
  const { language } = useGlobal()
  const { data } = useAppData(language)

  const header: string = useTypografCombined(
    data?.experience?.header || '',
    language
  )
  const description: string = useTypografCombined(
    data?.experience?.description || '',
    language
  )
  const experience: ExperienceType[] = useExperienceTypograf(
    data?.experience?.experience || [],
    language
  )

  // scroll animation
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.innerWidth <= 900) return () => setVisible(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="Resume" aria-labelledby="experience-title">
      <div className="experience-container">
        <HeaderAndDescription
          ref={ref}
          visible={visible}
          header={header}
          description={description}
          id="experience-title"
          textCircle="scroll"
        />
        <div
          className="toggleAll"
          role="list"
          aria-label={
            language === 'en' ? 'Experience timeline' : 'Временная шкала опыта'
          }
        >
          {experience.map((obj, i) => (
            <div
              key={i}
              role="listitem"
              aria-label={`${
                language === 'en' ? 'Experience item' : 'Элемент опыта'
              } ${i + 1}: ${obj.name}`}
            >
              <ExperienceObj {...obj} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
