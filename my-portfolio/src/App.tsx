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
import { useAppData } from './hooks/useAppData'

export default function App() {
  const { language, theme } = useGlobal()
  const { data, loading, error } = useAppData(language)

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

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
        <FirstScreen />
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
          <Experience />
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
          <Projects />
        </section>
        <section id="About">
          <AboutMe />
        </section>
        <section id="Contacts">
          <Footer />
        </section>
      </div>
    </main>
  )
}
