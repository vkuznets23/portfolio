import type { Project as ProjectType } from '../App'

type ProjectProps = {
  project: ProjectType
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={project.img} alt={project.header} className="project-img" />
        <div className="overlay">
          {project.deployUrl && (
            <button
              type="button"
              className="overlayBtnDeploy"
              onClick={() => window.open(project.deployUrl, '_blank')}
            >
              Deploy
            </button>
          )}
          <button
            type="button"
            className="overlayBtnGit"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            GitHub
          </button>
        </div>
      </div>

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
