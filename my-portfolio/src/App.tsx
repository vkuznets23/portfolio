import { useEffect, useState } from 'react'
// import FirstScreen from './Components/FirstScreen'
import './App.scss'
import Marquee from './Components/Marquee'
import Projects from './Components/Projects'
import type { ExperienceType } from './Components/Experience'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { useGlobal } from './context/useGlobal'
import AboutMe from './Components/AboutMe'
import {
  useExperienceTypograf,
  useFactsTypograf,
  useTypografCombined,
} from './context/useTypograph'

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
  facts: { fact: string }[]
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
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

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

  // useEffect(() => {
  //   document.body.classList.remove('light', 'dark')
  //   document.body.classList.add(theme)
  // }, [theme])

  // const firstLine = useTypografCombined(
  //   content?.[0]?.header?.line1 || '',
  //   language
  // )
  // const options = Object.values(content?.[0]?.header?.options || {})
  // const description = useTypografCombined(
  //   content?.[0]?.description || '',
  //   language
  // )

  const header = useTypografCombined(content?.[1]?.header || '', language)
  const description3 = useTypografCombined(
    content?.[1]?.description || '',
    language
  )

  const experience = useExperienceTypograf(
    content?.[1]?.experience || [],
    language
  )

  const description2 = useTypografCombined(
    content?.[2]?.description || '',
    language
  )
  const projectsArray = Object.values(content?.[2]?.projects || {})

  const headerAbout = useTypografCombined(content?.[3]?.header || '', language)
  const description4 = useTypografCombined(
    content?.[3]?.description || '',
    language
  )

  const facts = useFactsTypograf(
    (content?.[3]?.facts || []).map((f) => f.fact),
    language
  )

  return (
    <div className="main-container">
      <Navbar />
      {/* <div className="first-wrapper">
        <FirstScreen
          firstLine={firstLine}
          options={options}
          description={description}
        />
      </div> */}
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
          <AboutMe
            header={headerAbout}
            description={description4}
            facts={facts}
          />
        </section>
        <section id="Contacts">
          <Footer />
        </section>
      </div>
    </div>
  )
}
