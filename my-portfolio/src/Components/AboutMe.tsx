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
  const experienceContainerRef = useRef<HTMLDivElement>(null)
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

    const updateScroll = () => {
      // Рассчитываем максимальный скролл на основе реальной ширины контента
      const contentWidth = wrapper.scrollWidth
      const viewportWidth = window.innerWidth

      // Увеличиваем максимальный скролл для больших экранов
      // Это обеспечивает полный проход контента на любом размере экрана
      const baseScroll = Math.max(contentWidth - viewportWidth, 0)
      const maxScroll = Math.max(baseScroll, 1500) // Минимум 1500px скролла

      // Устанавливаем высоту секции для скролла
      const multiplier = 2
      const scrollHeight = contentWidth * multiplier
      scrollSection.style.height = `${scrollHeight}px`

      // Устанавливаем высоту основного контейнера для равномерного расстояния до футера
      if (experienceContainerRef.current) {
        experienceContainerRef.current.style.height = `${scrollHeight + 200}px` // +200px для отступов
      }

      const handleScroll = () => {
        const rect = scrollSection.getBoundingClientRect()
        const scrollTop = -rect.top
        const maxY = scrollSection.offsetHeight - window.innerHeight

        const progress = Math.min(Math.max(scrollTop / maxY, 0), 1)

        wrapper.style.transform = `translateX(${-progress * maxScroll}px)`
      }

      return handleScroll
    }

    const handleScroll = updateScroll()
    window.addEventListener('scroll', handleScroll)

    // Обновляем при изменении размера окна
    const handleResize = () => {
      window.removeEventListener('scroll', handleScroll)
      const newHandleScroll = updateScroll()
      window.addEventListener('scroll', newHandleScroll)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      className="experience-container"
      ref={experienceContainerRef}
      style={{ height: '400vh' }}
    >
      <div ref={ref} className={visible ? 'slide-up' : 'hidden'}>
        <h2 className="h2">{header}</h2>
        <div className="description-flex-container">
          <div className="description">{description}</div>
        </div>
      </div>
      <div className="scroll-section">
        <div className="container" ref={containerRef}>
          <img src="/photos/dogphoto.png" alt="photo" className="img1" />
          <img src="/photos/fugler.png" alt="fugler" className="img2" />
          <img src="/photos/circle.gif" alt="fugler" className="img3" />
          <img src="/photos/mug.png" alt="fugler" className="img4" />
          <img src="/photos/knitting.png" alt="fugler" className="img5" />
          <img src="/photos/office.gif" alt="office" className="img6" />
          <img src="/photos/cuteme.png" alt="me" className="img7" />

          {facts.map((fact, i) => (
            <div key={i} className={`fact fact${i + 1}`}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <p>
                  <b>Fact #{i + 1}</b>
                </p>
                <p>{fact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
