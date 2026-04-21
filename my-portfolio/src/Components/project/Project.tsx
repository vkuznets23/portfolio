import { useGlobal } from '../../hooks'
import type { Project as ProjectType } from '../../data/projects'
import LazyVideo from './LazyVideo'

type ProjectProps = {
  project: ProjectType
  visible: boolean
}

const getTagCategory = (tech: string): string => {
  const testingTags = ['Jest', 'Playwright', 'Vite']

  if (testingTags.includes(tech)) {
    return 'category1'
  } else {
    return 'category2'
  }
}

export default function Project({ project, visible }: ProjectProps) {
  const { language } = useGlobal()

  const handleDeployClick = (e?: React.MouseEvent | React.KeyboardEvent) => {
    e?.stopPropagation()
    if (project.live) {
      window.open(project.live, '_blank', 'noopener,noreferrer')
    }
  }

  const handleGitHubClick = (e?: React.MouseEvent | React.KeyboardEvent) => {
    e?.stopPropagation()
    window.open(project.github, '_blank', 'noopener,noreferrer')
  }

  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        {project.image && (
          <LazyVideo
            src={project.image}
            className="project-img"
            autoPlay
            loop
            muted
            playsInline
            poster={project.poster}
          />
        )}
        <div className="overlay" role="group" aria-label="Project actions">
          {project.live && (
            <button
              type="button"
              className="overlayBtnDeploy"
              onClick={handleDeployClick}
              aria-label={`View live demo of ${project.name}`}
              tabIndex={visible ? 0 : -1}
            >
              {language === 'en' ? 'Deploy' : 'Сайт'}
            </button>
          )}
          <button
            type="button"
            className="overlayBtnGit"
            onClick={handleGitHubClick}
            aria-label={`View ${project.name} source code on GitHub`}
            tabIndex={visible ? 0 : -1}
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
