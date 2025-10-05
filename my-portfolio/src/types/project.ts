export type Project = {
  img: string
  header: string
  description: string
  tags: string[]
  deployUrl?: string
  githubUrl: string
}

export type ProjectsSection = {
  description: string
  projects?: Record<string, Project>
}
