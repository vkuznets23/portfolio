import { useGlobal, useAppData } from './hooks'
import {
  FirstScreen,
  Marquee,
  Projects,
  Experience,
  Footer,
  Navbar,
  AboutMe,
  ErrorComponent,
} from './Components'
import './App.css'
import './CSS/Loader.css'

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
