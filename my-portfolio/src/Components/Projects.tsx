import type { Project } from '../App'
import CircularText from './CircleText'
import '../CSS/Projects.css'

type ProjectsProps = {
  description: string
  projects: Project[]
}
export default function Projects({ projects, description }: ProjectsProps) {
  return (
    <div>
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
      {projects.map((project) => project.header)}
    </div>
  )
}
