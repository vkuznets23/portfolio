import { useEffect, useRef, useState } from 'react'
import { ExperienceObj, TextCircle } from '../Components'
import { useGlobal, useAppData, useTypografCombined } from '../hooks'
import { useExperienceTypograf } from '../hooks/useTypograph'
import { type ExperienceType } from '../types/experience'

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
    if (window.innerWidth <= 900) return
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
        <header ref={ref} className={visible ? 'slide-up' : 'hidden'}>
          <h2 id="experience-title" className="h2">
            {header}
          </h2>
          <div className="description-flex-container">
            <div className="description">{description}</div>
            <TextCircle
              radius={62}
              textEn="click * click * click ** click * click * click **"
              textRu="клик ** клик ** клик ** клик ** клик ***"
            />
          </div>
        </header>

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
