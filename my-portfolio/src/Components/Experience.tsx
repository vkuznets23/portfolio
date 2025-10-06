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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [visible])

  return (
    <section id="Resume">
      <div className="experience-container">
        <div ref={ref} className={visible ? 'slide-up' : 'hidden'}>
          <h2 className="h2">{header}</h2>
          <div className="description-flex-container">
            <div className="description">{description}</div>
            <TextCircle
              radius={62}
              textEn="click * click * click ** click * click * click **"
              textRu="клик ** клик ** клик ** клик ** клик ***"
            />
          </div>
        </div>

        <div className="toggleAll">
          {experience.map((obj, i) => (
            <ExperienceObj key={i} {...obj} />
          ))}
        </div>
      </div>
    </section>
  )
}
