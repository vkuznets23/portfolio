import { useEffect, useState } from 'react'
import { useGlobal } from '../hooks'
import { IoSunnyOutline } from 'react-icons/io5'
import { IoMdMoon } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import { VscClose } from 'react-icons/vsc'
import '../CSS/Navbar.css'

export default function Navbar() {
  const { language, setLanguage, theme, setTheme } = useGlobal()
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      const projectsSection = document.getElementById('Projects')

      // Проверяем, находимся ли мы в секции проектов
      const isInProjectsSection =
        projectsSection &&
        currentScroll >= projectsSection.offsetTop - 200 &&
        currentScroll <=
          projectsSection.offsetTop + projectsSection.offsetHeight

      if (
        currentScroll > lastScroll &&
        currentScroll > 100 &&
        !isInProjectsSection
      ) {
        // Скролл вниз — прячем (кроме секции проектов)
        setVisible(false)
      } else {
        // Скролл вверх или в секции проектов — показываем
        setVisible(true)
      }
      setLastScroll(currentScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  const handleNavClick = () => setMenuOpen(false)

  const links = (
    <>
      <a href="#Resume" onClick={handleNavClick}>
        {language === 'en' ? 'Resume' : 'Резюме'}
      </a>
      <a href="#Projects" onClick={handleNavClick}>
        {language === 'en' ? 'Projects' : 'Проекты'}
      </a>
      <a href="#About" onClick={handleNavClick}>
        {language === 'en' ? 'About me' : 'Обо мне'}
      </a>
      <a href="#Contacts" onClick={handleNavClick}>
        {language === 'en' ? 'Contacts' : 'Контакты'}
      </a>
    </>
  )

  const buttons = (
    <div className="nav-buttons">
      <button onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}>
        {language === 'en' ? 'rus' : 'eng'}
      </button>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'dark' ? <IoSunnyOutline /> : <IoMdMoon />}
      </button>
    </div>
  )

  return (
    <div className={`navbar-container ${visible ? 'visible' : 'hidden'} `}>
      <div className="navbar">
        <div>LOGO</div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <VscClose /> : <RxHamburgerMenu />}
        </button>

        <div className={`Links ${menuOpen ? 'open' : ''}`}>
          {links}
          {menuOpen && <div className="nav-buttons">{buttons}</div>}
        </div>

        <div className="nav-buttons desktop-only">{buttons}</div>
      </div>
    </div>
  )
}
