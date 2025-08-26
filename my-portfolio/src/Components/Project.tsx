import type { Project as ProjectType } from '../App'

type ProjectProps = {
  project: ProjectType
}

export default function Project({ project }: ProjectProps) {
  return (
    <div>
      <h2>{project.header}</h2>
      <p>{project.description}</p>
      {project.tags.map((tag) => (
        <span>{tag}</span>
      ))}
    </div>
  )
}
