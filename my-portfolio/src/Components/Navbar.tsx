import { useEffect, useState } from 'react'
import '../CSS/Navbar.css'
import { IoMdMoon } from 'react-icons/io'

type NavbarProps = {
  language: 'en' | 'ru'
  setLanguage: React.Dispatch<React.SetStateAction<'en' | 'ru'>>
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className={`navbar-container ${scrolled ? 'scrolled' : 'default'}`}>
        <div className="navbar">
          <div>LOGO</div>
          <div className="Links">
            <a href="#Resume">{language === 'en' ? 'Resume' : 'Резюме'}</a>
            <a href="#Projects">{language === 'en' ? 'Projects' : 'Проекты'}</a>
            <a href="#About">{language === 'en' ? 'About me' : 'Обо мне'}</a>
            <a href="#Contacts">
              {language === 'en' ? 'Contacts' : 'Контакты'}
            </a>
          </div>
          <div className="nav-buttons">
            {language === 'en' ? (
              <button onClick={() => setLanguage('ru')}>rus</button>
            ) : (
              <button onClick={() => setLanguage('en')}>eng</button>
            )}
            <button>
              <IoMdMoon />
            </button>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div>LOGO</div>
        <div className="Links">
          <a href="#Resume">{language === 'en' ? 'Resume' : 'Резюме'}</a>
          <a href="#Projects">{language === 'en' ? 'Projects' : 'Проекты'}</a>
          <a href="#About">{language === 'en' ? 'About me' : 'Обо мне'}</a>
          <a href="#Contacts">{language === 'en' ? 'Contacts' : 'Контакты'}</a>
        </div>
        <div className="nav-buttons">
          {language === 'en' ? (
            <button onClick={() => setLanguage('ru')}>rus</button>
          ) : (
            <button onClick={() => setLanguage('en')}>eng</button>
          )}
          <button>
            <IoMdMoon />
          </button>
        </div>
      </div>
    </>
  )
}
