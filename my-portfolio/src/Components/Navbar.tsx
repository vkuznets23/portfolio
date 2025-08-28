import { useEffect, useState } from 'react'
import '../CSS/Navbar.css'
import { IoMdMoon } from 'react-icons/io'
import { IoSunnyOutline } from 'react-icons/io5'

import { useGlobal } from '../context/useGlobal'

export default function Navbar() {
  const { language, setLanguage, theme, setTheme } = useGlobal()
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
            <button
              onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
            >
              {language === 'en' ? 'rus' : 'eng'}
            </button>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              {theme === 'dark' ? <IoMdMoon /> : <IoSunnyOutline />}
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
          <button onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}>
            {language === 'en' ? 'rus' : 'eng'}
          </button>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'dark' ? <IoMdMoon /> : <IoSunnyOutline />}
          </button>
        </div>
      </div>
    </>
  )
}
