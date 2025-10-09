import { useEffect, useRef, useState } from 'react'
import { useGlobal, useAppData, useTypografCombined } from '../hooks'
import { useFactsTypograf } from '../hooks/useTypograph'
import TextCircle from './TextCircle'
import LazyVideo from './LazyVideo'

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
  const [visible, setVisible] = useState(false)

  // visibility animation
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

  // horizontal scroll
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const scrollSection = container?.parentElement

    if (!container || !scrollSection) return

    const isMobile = window.innerWidth <= 1195
    if (isMobile) {
      scrollSection.style.height = 'auto'
      container.style.transform = 'none'
      return
    }

    const speed = 0.2

    const handleScroll = () => {
      const rect = scrollSection.getBoundingClientRect()
      const scrollTop = -rect.top
      const containerWidth = Math.min(1180, window.innerWidth)
      const maxScroll = Math.max(container.scrollWidth - containerWidth, 0)
      const scrollHeight = scrollSection.offsetHeight - window.innerHeight
      const progress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1)
      const translateX = -progress * maxScroll
      // clamp to edges
      const clamped = Math.min(0, Math.max(-maxScroll, translateX))
      container.style.transform = `translateX(${clamped}px)`
    }
    // section height equals horizontal travel distance
    const containerWidth = Math.min(1180, window.innerWidth)
    const maxScroll = Math.max(container.scrollWidth - containerWidth, 0)
    // Increase section height inversely to speed so full track is reachable
    scrollSection.style.height = `${maxScroll / speed + window.innerHeight}px`

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <section id="About">
      <div className="experience-container">
        <div
          ref={ref}
          className={visible ? 'slide-up' : 'hidden'}
          aria-hidden={!visible}
        >
          <h2 className="h2">{header}</h2>
          <div className="description-flex-container">
            <div className="description">{description}</div>
            <TextCircle
              textRu="скрол >> скрол >> скрол >> скрол >>"
              textEn="scroll scroll * scroll scroll * scroll scroll *"
              radius={62}
            />
          </div>
        </div>
        <div className="scroll-section">
          <div className="container" ref={containerRef}>
            <img
              src="/photos/dogphoto.webp"
              srcSet="/photos/dogphoto-200.webp 200w, /photos/dogphoto-300.webp 300w, /photos/dogphoto-400.webp 400w"
              loading="lazy"
              alt="photo"
              className="img1"
              style={{ aspectRatio: '1 / 1' }}
            />
            <img
              src="/photos/fugler.webp"
              loading="lazy"
              alt="fugler"
              className="img2"
              style={{ aspectRatio: '1 / 1' }}
            />
            <LazyVideo
              src="/photos/circle.mp4"
              className="img3"
              style={{ aspectRatio: '1 / 1' }}
              poster="/photos/circle_poster.webp"
            />
            <img
              src="/photos/mug.webp"
              srcSet="/photos/mug-200.webp 200w, /photos/mug-300.webp 300w, /photos/mug-400.webp 400w"
              loading="lazy"
              alt="fugler"
              className="img4"
              style={{ aspectRatio: '1 / 1' }}
            />
            <img
              src="/photos/knitting.webp"
              srcSet="/photos/knitting-200.webp 200w, /photos/knitting-300.webp 300w, /photos/knitting-400.webp 400w"
              loading="lazy"
              alt="fugler"
              className="img5"
              style={{ aspectRatio: '1 / 1' }}
            />
            <LazyVideo
              src="/photos/office.mp4"
              className="img6"
              style={{ aspectRatio: '2 / 1' }}
              poster="/photos/office_poster.webp"
            />
            <img
              src="/photos/cuteme.webp"
              srcSet="/photos/cuteme-200.webp 200w, /photos/cuteme-300.webp 300w, /photos/cuteme-400.webp 400w"
              loading="lazy"
              alt="me"
              className="img7"
              style={{ aspectRatio: '1 / 1' }}
            />

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
    </section>
  )
}
