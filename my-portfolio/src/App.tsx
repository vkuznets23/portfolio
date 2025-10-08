import { lazy, Suspense } from 'react'
import { useGlobal, useAppData } from './hooks'
import { Navbar, FirstScreen, ErrorComponent } from './Components'
import './App.css'

const Marquee = lazy(() => import('./Components/Marquee'))
const Experience = lazy(() => import('./Components/Experience'))
const Projects = lazy(() => import('./Components/Projects'))
const AboutMe = lazy(() => import('./Components/AboutMe'))
const Footer = lazy(() => import('./Components/Footer'))

export default function App() {
  const { language } = useGlobal()
  const { data, loading, error } = useAppData(language)

  if (loading) {
    return (
      <main className="main-container">
        <span className="loader"></span>
      </main>
    )
  }

  if (error || !data) {
    return (
      <main className="main-container">
        <ErrorComponent error={error} data={data} />
      </main>
    )
  }

  return (
    <main className="main-container">
      <Navbar />
      <div className="first-wrapper">
        <FirstScreen />
      </div>
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <div className="content-wrapper">
          <Marquee
            text={
              language === 'en'
                ? ' && about me >> about me || about me * about me '
                : ' * обо мне >> обо мне || обо мне * обо мне && обо мне >> обо мне '
            }
          />
          <Experience />
          <Marquee
            text={
              language === 'en'
                ? ' projects && projects * projects >> projects && projects * projects >>'
                : ' проекты && проекты * проекты >> проекты && проекты * проекты >>'
            }
            style="1.95deg"
          />
          <Projects />
          <AboutMe />
          <Footer />
        </div>
      </Suspense>
    </main>
  )
}
