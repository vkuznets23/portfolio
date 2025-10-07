import { useGlobal, useAppData } from './hooks'
import {
  // Marquee,
  // Projects,
  // Experience,
  // Footer,
  // Navbar,
  // AboutMe,
  FirstScreen,
  ErrorComponent,
} from './Components'
import './App.css'
import React, { Suspense } from 'react'

const AboutMe = React.lazy(() => import('./Components/AboutMe'))
const Navbar = React.lazy(() => import('./Components/Navbar'))
const Footer = React.lazy(() => import('./Components/Footer'))
const Experience = React.lazy(() => import('./Components/Experience'))
const Projects = React.lazy(() => import('./Components/Projects'))
const Marquee = React.lazy(() => import('./Components/Marquee'))

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
      <div className="content-wrapper">
        <Suspense fallback={<span className="loader"></span>}>
          <Marquee
            text={
              language === 'en'
                ? ' && about me >> about me || about me * about me '
                : ' * обо мне >> обо мне || обо мне * обо мне && обо мне >> обо мне '
            }
          />
          <Experience />
        </Suspense>
        <Suspense fallback={<span className="loader"></span>}>
          <Marquee
            text={
              language === 'en'
                ? ' projects && projects * projects >> projects && projects * projects >>'
                : ' проекты && проекты * проекты >> проекты && проекты * проекты >>'
            }
            style="1.95deg"
          />
          <Projects />
        </Suspense>
        <Suspense fallback={<span className="loader"></span>}>
          <AboutMe />
        </Suspense>
        <Footer />
      </div>
    </main>
  )
}
