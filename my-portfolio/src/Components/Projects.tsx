import type { Project as ProjectType } from '../App'
import CircularText from './CircleText'
import '../CSS/Projects.css'
import { useEffect, useRef, useState } from 'react'
import Project from './Project'

type ProjectsProps = {
  description: string
  projects: ProjectType[]
}
export default function Projects({ projects, description }: ProjectsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect() // activates once
        }
      },
      { threshold: 0.2 } // when 20% of the element is visible
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="projectsContainer">
      <div ref={ref} className={visible ? 'slide-up' : ''}>
        <div className="description-flex-container">
          <div className="description">{description}</div>
          <div className="scrolldown-wrapper" style={{ fontWeight: 300 }}>
            <CircularText
              text="scroll down > scroll down > scroll down >"
              radius={62}
            />
            <span className="emoji-pointer">👈</span>
          </div>
        </div>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  )
}
