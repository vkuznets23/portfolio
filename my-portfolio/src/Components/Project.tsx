import { useGlobal } from '../hooks'
import type { Project as ProjectType } from '../data/projects'
import '../CSS/Projects.css'

type ProjectProps = {
  project: ProjectType
}

const getTagCategory = (tech: string): string => {
  const testingTags = ['Jest', 'Playwright', 'Vite']

  if (testingTags.includes(tech)) {
    return 'category1'
  } else {
    return 'category2'
  }
}

export default function Project({ project }: ProjectProps) {
  const { language } = useGlobal()

  const handleDeployClick = () => {
    if (project.live) {
      window.open(project.live, '_blank', 'noopener,noreferrer')
    }
  }

  const handleGitHubClick = () => {
    window.open(project.github, '_blank', 'noopener,noreferrer')
  }

  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <video
          src={project.image}
          className="project-img"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="overlay" role="group" aria-label="Project actions">
          {project.live && (
            <button
              type="button"
              className="overlayBtnDeploy"
              onClick={handleDeployClick}
              aria-label={`View live demo of ${project.name}`}
            >
              {language === 'en' ? 'Deploy' : 'Сайт'}
            </button>
          )}
          <button
            type="button"
            className="overlayBtnGit"
            onClick={handleGitHubClick}
            aria-label={`View ${project.name} source code on GitHub`}
          >
            GitHub
          </button>
        </div>
      </div>

      <header>
        <h3 className="projectHeader">{project.name}</h3>
        <p className="projectDescription">{project.description}</p>
      </header>

      <div className="tags" role="list" aria-label="Technologies used">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className={`tag ${getTagCategory(tech)}`}
            role="listitem"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}
