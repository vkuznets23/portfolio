import { useEffect, useState } from 'react'
import FirstScreen from './Components/FirstScreen'
import './App.css'
import Marquee from './Components/Marquee'
import Projects from './Components/Projects'
import type { ExperienceType } from './Components/Experience'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { useGlobal } from './context/useGlobal'
import AboutMe from './Components/AboutMe'
import { typografText, useTypograf } from './context/useTypograph'

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

type AboutMeSection = {
  header: string
  description: string
  facts: string[]
}

type ContentType = [
  FirstScreenSection,
  ExperienceSection,
  ProjectsSection,
  AboutMeSection
]

export default function App() {
  const { language, theme } = useGlobal()
  const [content, setContent] = useState<ContentType | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/content.${language}.json`)
        const data = await res.json()
        setContent(data)
      } catch (err) {
        console.error('Error fetching data', err)
      }
    }
    fetchData()
  }, [language])

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  const firstLine = useTypograf(content?.[0]?.header?.line1 || '', language)
  const options = Object.values(content?.[0]?.header?.options || {})
  const description = useTypograf(content?.[0]?.description || '', language)

  const header = useTypograf(content?.[1]?.header || '', language)
  const description3 = useTypograf(content?.[1]?.description || '', language)
  // const experience = content?.[1]?.experience || []
  const experience = (content?.[1]?.experience || []).map((item) => ({
    ...item,
    name: typografText(item.name, language),
    description: typografText(item.description, language),
  }))

  const description2 = useTypograf(content?.[2]?.description || '', language)
  const projectsArray = Object.values(content?.[2]?.projects || {})

  const headerAbout = useTypograf(content?.[3]?.header || '', language)
  const description4 = useTypograf(content?.[3]?.description || '', language)

  return (
    <div className="main-container">
      <Navbar />
      <div className="first-wrapper">
        <FirstScreen
          firstLine={firstLine}
          options={options}
          description={description}
        />
      </div>
      <div className="content-wrapper">
        <Marquee
          text={
            language === 'en'
              ? ' && about me >> about me || about me * about me '
              : ' * обо мне >> обо мне || обо мне * обо мне && обо мне >> обо мне '
          }
        />
        <section id="Resume">
          <Experience
            header={header}
            description={description3}
            experience={experience}
          />
        </section>
        <Marquee
          text={
            language === 'en'
              ? ' projects && projects * projects >> projects && projects * projects >>'
              : ' проекты && проекты * проекты >> проекты && проекты * проекты >>'
          }
          style="1.95deg"
        />
        <section id="Projects">
          <Projects description={description2} projects={projectsArray} />
        </section>
        <section id="About">
          <AboutMe header={headerAbout} description={description4} />
        </section>
        <section id="Contacts">
          <Footer />
        </section>
      </div>
    </div>
  )
}
