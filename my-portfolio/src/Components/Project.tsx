import type { Project as ProjectType } from '../App'
import '../CSS/Projects.css'

type ProjectProps = {
  project: ProjectType
}

export default function Project({ project }: ProjectProps) {
  return (
    <div>
      <img src={project.img} alt={project.header} className="project-img" />
      <h2 className="projectHeader">{project.header}</h2>
      <p className="projectDescription">{project.description}</p>
      <div className="tags">
        {project.tags.map((tag, index) => {
          let categoryClass = ''

          const testingTags = ['Jest', 'Playwright', 'Vite']
          if (testingTags.includes(tag)) {
            categoryClass = 'category1'
          } else if (tag === 'Hive project' || tag === 'Pet project') {
            categoryClass = 'category2'
          } else {
            categoryClass = 'category3'
          }

          return (
            <span key={index} className={`tag ${categoryClass}`}>
              {tag}
            </span>
          )
        })}
      </div>
    </div>
  )
}
