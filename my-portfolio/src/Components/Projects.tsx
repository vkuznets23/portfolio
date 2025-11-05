import { useEffect, useRef, useState } from 'react'
import type { Project as ProjectType } from '../data/projects'
import { Project, TextCircle } from '../Components'
import {
  useGlobal,
  useAppData,
  useTypografCombined,
  useProjectsTypograf,
} from '../hooks'

export default function Projects() {
  const { language } = useGlobal()
  const { data } = useAppData(language)

  const description: string = useTypografCombined(
    data?.projects?.description || '',
    language
  )
  const projects: ProjectType[] = useProjectsTypograf(
    data?.projects?.projects || [],
    language
  )

  const headerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const projectRefs = useRef<(HTMLElement | null)[]>([])

  const [visible, setVisible] = useState(false) // header visibility
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([])

  // sync visibility array with projects length, preserve already visible items
  useEffect(() => {
    if (window.innerWidth <= 900) {
      setVisibleProjects(new Array(projects.length).fill(true))
    } else {
      setVisibleProjects((prev) => {
        const next = new Array(projects.length).fill(false)
        for (let i = 0; i < next.length; i++) {
          next[i] = Boolean(prev[i])
        }
        return next
      })
    }
  }, [projects.length])

  //animation of header
  useEffect(() => {
    if (window.innerWidth <= 900) return () => setVisible(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
    if (window.innerWidth <= 900) return
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
            }, index * 120)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.01, rootMargin: '0px 0px -10% 0px' }
    )

    projectRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [projects, visibleProjects])

  return (
    <section id="Projects" aria-labelledby="projects-title">
      <div ref={containerRef} className="projectsContainer">
        <header ref={headerRef} className={visible ? 'slide-up' : 'hidden'}>
          <h2 id="projects-title" className="sr-only">
            {language === 'en' ? 'Projects' : 'Проекты'}
          </h2>
          <div className="description-flex-container">
            <p className="description">{description}</p>
            <TextCircle
              radius={62}
              textRu="скрол >> скрол >> скрол >> скрол >>"
              textEn="scroll scroll * scroll scroll * scroll scroll *"
            />
          </div>
        </header>

        <div
          className="projects"
          role="list"
          aria-label={language === 'en' ? 'Project list' : 'Список проектов'}
        >
          {projects.map((project, index) => (
            <article
              key={index}
              data-index={index}
              ref={(el) => {
                projectRefs.current[index] = el
              }}
              className={`project-wrapper ${
                visibleProjects![index] ? 'fade-in' : 'hidden'
              }`}
              role="listitem"
              aria-hidden={!visibleProjects![index]}
              aria-label={`${language === 'en' ? 'Project' : 'Проект'} ${
                index + 1
              }: ${project.name}`}
            >
              <Project project={project} visible={visible} />
            </article>
          ))}
        </div>

        <button
          type="button"
          className="allProjectsButton"
          onClick={() => window.open('https://github.com/vkuznets23', '_blank')}
          aria-describedby="projects-title"
        >
          {language === 'en'
            ? 'Check out all projects at GitHub'
            : 'Посмотри все проекты на GitHub'}
        </button>
      </div>
    </section>
  )
}
