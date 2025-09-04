import { useEffect, useRef, useState } from 'react'
import '../css/facts.css'

type AboutMeProps = {
  description: string
  header: string
  facts: string[]
}

export default function AboutMe({ description, header, facts }: AboutMeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
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

  // Горизонтальный скролл
  useEffect(() => {
    const wrapper = containerRef.current
    if (!wrapper) return

    const scrollSection = wrapper.parentElement as HTMLElement
    if (!scrollSection) return

    const maxScroll = wrapper.scrollWidth - window.innerWidth
    const multiplier = 2
    scrollSection.style.height = `${wrapper.scrollWidth * multiplier}px`

    const handleScroll = () => {
      const rect = scrollSection.getBoundingClientRect()
      const scrollTop = -rect.top
      const maxY = scrollSection.offsetHeight - window.innerHeight

      const progress = Math.min(Math.max(scrollTop / maxY, 0), 1)

      wrapper.style.transform = `translateX(${-progress * maxScroll}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="experience-container" style={{ height: '400vh' }}>
      <div ref={ref} className={visible ? 'slide-up' : 'hidden'}>
        <h2 className="h2">{header}</h2>
        <div className="description-flex-container">
          <div className="description">{description}</div>
        </div>
      </div>
      <div className="scroll-section">
        <div className="container" ref={containerRef}>
          {facts.map((fact, i) => (
            <div key={i} className={`fact fact${i + 1}`}>
              <p>
                <b>Fact #{i + 1}</b> {fact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
