import type { Project as ProjectType } from '../data/projects'
import '../CSS/Projects.css'

type ProjectProps = {
  project: ProjectType
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={project.image} alt={project.name} className="project-img" />
        <div className="overlay">
          {project.live && (
            <button
              type="button"
              className="overlayBtnDeploy"
              onClick={() => window.open(project.live, '_blank')}
            >
              Deploy
            </button>
          )}
          <button
            type="button"
            className="overlayBtnGit"
            onClick={() => window.open(project.github, '_blank')}
          >
            GitHub
          </button>
        </div>
      </div>

      <h2 className="projectHeader">{project.name}</h2>
      <p className="projectDescription">{project.description}</p>
      <div className="tags">
        {project.technologies.map((tech, index) => {
          let categoryClass = ''

          const testingTags = ['Jest', 'Playwright', 'Vite']

          if (testingTags.includes(tech)) {
            categoryClass = 'category1'
          } else if (tech === 'Hive project' || tech === 'Pet project') {
            categoryClass = 'category2'
          } else {
            categoryClass = 'category3'
          }

          return (
            <span key={index} className={`tag ${categoryClass}`}>
              {tech}
            </span>
          )
        })}
      </div>
    </div>
  )
}
