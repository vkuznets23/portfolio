import { useEffect, useRef, useState } from 'react'
import '../CSS/Facts.css'
import CircularText from './CircleText'
import { useGlobal } from '../hooks/useGlobal'
import { useAppData } from '../hooks/useAppData'
import { useFactsTypograf, useTypografCombined } from '../hooks/useTypograph'

export default function AboutMe() {
  const { language } = useGlobal()
  const { data } = useAppData(language)
  const header: string = useTypografCombined(
    data?.aboutMe?.header || '',
    language
  )
  const description: string = useTypografCombined(
    data?.aboutMe?.description || '',
    language
  )

  const facts: string[] = useFactsTypograf(
    data?.aboutMe?.facts?.map((fact) => fact.fact) || [],
    language
  )

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

    // Отключаем горизонтальный скролл на мобильных и планшетах (до 900px)
    const isMobileOrTablet = window.innerWidth <= 900
    if (isMobileOrTablet) {
      // На мобильных и планшетах просто убираем все стили скролла
      scrollSection.style.height = 'auto'
      if (experienceContainerRef.current) {
        experienceContainerRef.current.style.height = 'auto'
      }
      wrapper.style.transform = 'none'
      return
    }

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

      // Проверяем, нужно ли отключить скролл на мобильных и планшетах (до 900px)
      const newIsMobileOrTablet = window.innerWidth <= 900
      if (newIsMobileOrTablet) {
        scrollSection.style.height = 'auto'
        if (experienceContainerRef.current) {
          experienceContainerRef.current.style.height = 'auto'
        }
        wrapper.style.transform = 'none'
        return
      }

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
          <div className="scrolldown-wrapper" style={{ fontWeight: 300 }}>
            <CircularText
              text={
                language === 'en'
                  ? 'scroll down > scroll down > scroll down >'
                  : 'ещё вниз >> ещё вниз >> ещё вниз >>'
              }
              radius={62}
            />
            <span className="emoji-pointer">👈</span>
          </div>
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
