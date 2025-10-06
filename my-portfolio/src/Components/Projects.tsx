import { useEffect, useMemo, useRef, useState } from 'react'
import type { Project as ProjectType } from '../data/projects'
import { Project, TextCircle } from '../Components'
import { useGlobal, useAppData, useTypografCombined } from '../hooks'
import '../CSS/Projects.css'

export default function Projects() {
  const { language } = useGlobal()
  const { data } = useAppData(language)

  const description: string = useTypografCombined(
    data?.projects?.description || '',
    language
  )
  const projects: ProjectType[] = useMemo(
    () => data?.projects?.projects || [],
    [data]
  )

  const headerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  const [visible, setVisible] = useState(false) // header visibility
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([])

  // sync visibility array with projects length
  useEffect(() => {
    setVisibleProjects(new Array(projects.length).fill(false))
  }, [projects])

  //animation of header
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => observer.disconnect()
  }, [visible])

  // color of body
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.classList.add('projects-bg')
        } else {
          document.body.classList.remove('projects-bg')
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // projects visibility
  useEffect(() => {
    if (projectRefs.current.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'))
          if (entry.isIntersecting && !visibleProjects[index]) {
            setTimeout(() => {
              setVisibleProjects((prev) => {
                const next = [...prev]
                next[index] = true
                return next
              })
            }, index * 200)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    projectRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [projects])

  return (
    <section id="Projects">
      <div ref={containerRef} className="projectsContainer">
        <div ref={headerRef} className={visible ? 'slide-up' : 'hidden'}>
          <div className="description-flex-container">
            <div className="description">{description}</div>
            <TextCircle
              radius={62}
              textEn="scroll down > scroll down > scroll down >"
              textRu="ещё вниз >> ещё вниз >> ещё вниз >>"
            />
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
                visibleProjects![index] ? 'fade-in' : 'hidden'
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
    </section>
  )
}
