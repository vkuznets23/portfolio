import { useGlobal, useAppData } from './hooks'
// import {
//   FirstScreen,
//   Marquee,
//   Projects,
//   Experience,
//   Footer,
//   Navbar,
//   AboutMe,
//   ErrorComponent,
// } from './Components'
import './App.css'
import './CSS/Loader.css'
import React, { Suspense } from 'react'
import ErrorComponent from './Components/Error'

const AboutMe = React.lazy(() => import('./Components/AboutMe'))
const Navbar = React.lazy(() => import('./Components/Navbar'))
const Footer = React.lazy(() => import('./Components/Footer'))
const Experience = React.lazy(() => import('./Components/Experience'))
const Projects = React.lazy(() => import('./Components/Projects'))
const Marquee = React.lazy(() => import('./Components/Marquee'))
const FirstScreen = React.lazy(() => import('./Components/FirstScreen'))

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
      <Suspense fallback={<span className="loader"></span>}>
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
