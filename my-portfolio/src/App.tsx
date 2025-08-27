import { useEffect, useState } from 'react'
import FirstScreen from './Components/FirstScreen'
import './App.css'
import Marquee from './Components/Marquee'
import Projects from './Components/Projects'
import type { ExperienceType } from './Components/Experience'
import Experience from './Components/Experience'

export type Project = {
  img: string
  header: string
  description: string
  tags: string[]
  deployUrl?: string
  githubUrl: string
}

type ProjectsSection = {
  description: string
  projects?: Record<string, Project>
}

type ExperienceSection = {
  header: string
  description: string
  experience: ExperienceType[]
}

type FirstScreenHeaderOptions = {
  option1: string
  option2: string
  option3: string
}

type FirstScreenSection = {
  header: {
    line1: string
    options: FirstScreenHeaderOptions
  }
  description: string
}

type ContentType = [FirstScreenSection, ExperienceSection, ProjectsSection]

function App() {
  const [content, setContent] = useState<ContentType | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/content.json')
        const data = await res.json()
        setContent(data)
      } catch (err) {
        console.error('Error fetching data', err)
      }
    }
    fetchData()
  }, [])

  if (!content) return null
  // first screen content
  const firstLine = content[0].header.line1
  const options = Object.values(content[0].header.options)
  const description = content[0].description

  // projects screen
  const description2 = content[2].description
  const projectsArray = Object.values(content[2].projects || {})

  // experience
  const header = content[1].header
  const description3 = content[1].description
  const experience = content[1].experience

  return (
    <div className="main-container">
      <div className="first-wrapper">
        <FirstScreen
          firstLine={firstLine}
          options={options}
          description={description}
        />
      </div>
      <div className="content-wrapper">
        <Marquee text="career changer >> career changer || career changer * career changer &&" />
        <Experience
          header={header}
          description={description3}
          experience={experience}
        />
        <Marquee
          text=" projects && projects * projects >> projects && projects * projects >>"
          style="1.95deg"
        />
        <Projects description={description2} projects={projectsArray} />
      </div>
    </div>
  )
}

export default App
