import type { Project as ProjectType } from '../App'
import CircularText from './CircleText'
import '../CSS/Projects.css'
import { useEffect, useRef, useState } from 'react'
import Project from './Project'
import { useGlobal } from '../context/useGlobal'

type ProjectsProps = {
  description: string
  projects: ProjectType[]
}
export default function Projects({ projects, description }: ProjectsProps) {
  const { language } = useGlobal()

  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  const projectRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(
    Array(projects.length).fill(false)
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect() // activates once
        }
      },
      { threshold: 0.5 } // when 20% of the element is visible
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'))
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    projectRefs.current.forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [projects])

  return (
    <div className="projectsContainer">
      <div ref={ref} className={visible ? 'slide-up' : 'hidden'}>
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
