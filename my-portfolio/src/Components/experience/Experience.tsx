import { useEffect, useRef, useState } from 'react'
import { useGlobal, useAppData, useTypografCombined } from '../../hooks'
import { useExperienceTypograf } from '../../hooks/useTypograph'
import ExperienceObj from './ExperienceObj'
import ExperienceToggle from './ExperienceToggle'
import HeaderAndDescription from '../uiComponents/HeaderAndDescription'

export default function Experience() {
  const { language } = useGlobal()
  const { data } = useAppData(language)

  const header: string = useTypografCombined(
    data?.experience?.header || '',
    language,
  )
  const description: string = useTypografCombined(
    data?.experience?.description || '',
    language,
  )
  const workHeader: string = useTypografCombined(
    data?.experience?.workHeader || '',
    language,
  )
  const educationHeader: string = useTypografCombined(
    data?.experience?.educationHeader || '',
    language,
  )
  const workExperience = useExperienceTypograf(
    data?.experience?.workExperience || [],
    language,
  )
  const educationAndCourses = useExperienceTypograf(
    data?.experience?.educationAndCourses || [],
    language,
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
      { threshold: 0.5 },
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
        <ExperienceToggle
          header={educationHeader}
          items={educationAndCourses}
          language={language}
        />
        <h2 className="work-section-title">{workHeader}</h2>
        <div
          className="toggleAll work-toggle-list"
          role="list"
          aria-label={
            language === 'en' ? 'Work experience list' : 'Список опыта работы'
          }
        >
          {workExperience.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              role="listitem"
            >
              <ExperienceObj {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
