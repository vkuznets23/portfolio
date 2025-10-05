import type { Project as ProjectType } from '../data/projects'
import CircularText from './CircleText'
import '../CSS/Projects.css'
import { useEffect, useRef, useState } from 'react'
import Project from './Project'
import { useGlobal } from '../hooks/useGlobal'

type ProjectsProps = {
  description: string
  projects: ProjectType[]
}

export default function Projects({ projects, description }: ProjectsProps) {
  const { language } = useGlobal()

  // 🔹 ref на ВЕСЬ блок секции (для смены фона body)
  const containerRef = useRef<HTMLDivElement>(null)

  // 🔹 отдельный ref на шапку (для анимации появления)
  const headerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  const projectRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(
    Array(projects.length).fill(false)
  )

  // === Фон body зелёный, пока ЛЮБАЯ часть секции Projects видна ===
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()

      const offsetTop = 500 // включаем фон чуть раньше верхней границы
      const offsetBottom = 300 // выключаем фон чуть позже нижней границы

      if (rect.top <= offsetTop && rect.bottom >= offsetBottom) {
        document.body.classList.add('projects-bg')
      } else {
        document.body.classList.remove('projects-bg')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // проверка при загрузке

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.classList.remove('projects-bg')
    }
  }, [])

  // === Анимация появления шапки (один раз) ===
  useEffect(() => {
    if (!headerRef.current) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      {
        threshold: 0, // ловим когда 10% блока видно
        rootMargin: '0px 0px -100px 0px', // старт чуть раньше
      }
    )

    io.observe(headerRef.current)

    return () => io.disconnect()
  }, [])

  // === Появление карточек проектов по мере прокрутки ===
  useEffect(() => {
    const handleProjectsVisibility = () => {
      // На мобильных устройствах (≤900px) сразу показываем все проекты
      const isMobile = window.innerWidth <= 900
      if (isMobile) {
        setVisibleProjects(new Array(projects.length).fill(true))
        return null
      }

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = Number(entry.target.getAttribute('data-index'))
            if (entry.isIntersecting) {
              setVisibleProjects((prev) => {
                const next = [...prev]
                next[index] = true
                return next
              })
              io.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.2 }
      )

      projectRefs.current.forEach((el) => el && io.observe(el))
      return io
    }

    const io = handleProjectsVisibility()

    // Обработчик изменения размера окна
    const handleResize = () => {
      if (io) io.disconnect()
      handleProjectsVisibility()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (io) io.disconnect()
      window.removeEventListener('resize', handleResize)
    }
  }, [projects])

  return (
    <div ref={containerRef} className="projectsContainer">
      <div ref={headerRef} className={visible ? 'slide-up' : 'hidden'}>
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

      <div className="projects">
        {projects.map((project, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => {
              projectRefs.current[index] = el
            }}
            className={`project-wrapper ${
              visibleProjects[index] ? 'fade-in' : 'hidden'
            }`}
          >
            <Project project={project} />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="allProjectsButton"
        onClick={() => window.open('https://github.com/vkuznets23', '_blank')}
      >
        {language === 'en'
          ? 'Check out all projects at GitHub'
          : 'Посмотри все проекты на GitHub'}
      </button>
    </div>
  )
}
