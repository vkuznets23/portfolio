import { useEffect } from 'react'
import FirstScreen from './Components/FirstScreen'
import './App.css'
import Marquee from './Components/Marquee'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { useGlobal } from './hooks/useGlobal'
import AboutMe from './Components/AboutMe'
import {
  useExperienceTypograf,
  useFactsTypograf,
  useTypografCombined,
} from './hooks/useTypograph'
import { useAppData } from './hooks/useAppData'

export default function App() {
  const { language, theme } = useGlobal()
  const { data, loading, error } = useAppData(language)

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  const firstLine = useTypografCombined(
    data?.firstScreen?.header?.line1 || '',
    language
  )
  const options = data?.firstScreen?.header?.options
    ? Object.values(data.firstScreen.header.options)
    : []
  const description = useTypografCombined(
    data?.firstScreen?.description || '',
    language
  )

  const header = useTypografCombined(data?.experience?.header || '', language)
  const description3 = useTypografCombined(
    data?.experience?.description || '',
    language
  )
  const experience = useExperienceTypograf(
    data?.experience?.experience || [],
    language
  )

  const description2 = useTypografCombined(
    data?.projects?.description || '',
    language
  )
  const projectsArray = data?.projects?.projects || []

  const headerAbout = useTypografCombined(data?.aboutMe?.header || '', language)
  const description4 = useTypografCombined(
    data?.aboutMe?.description || '',
    language
  )

  const facts = useFactsTypograf(
    data?.aboutMe?.facts?.map((fact) => fact.fact) || [],
    language
  )

  if (loading) {
    return (
      <main className="main-container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <div>Loading...</div>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="main-container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <div>Error: {error}</div>
        </div>
      </main>
    )
  }

  if (!data) {
    return (
      <main className="main-container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <div>No data available</div>
        </div>
      </main>
    )
  }

  return (
    <main className="main-container">
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
    </main>
  )
}
