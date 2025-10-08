import { useEffect, useId, useState } from 'react'
import { useGlobal } from '../hooks'
import { IoSunnyOutline } from 'react-icons/io5'
import { IoMdMoon } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import { VscClose } from 'react-icons/vsc'
import '../CSS/Navbar.css'
import { Logo } from './logo'

export default function Navbar() {
  const { language, setLanguage, theme, setTheme } = useGlobal()
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)
  const menuId = useId()

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      const projectsSection = document.getElementById('Projects')

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
        setVisible(false)
      } else {
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
      <a
        href="#Resume"
        onClick={handleNavClick}
        role="menuitem"
        aria-label={
          language === 'en'
            ? 'Go to Resume section'
            : 'Перейти к разделу Резюме'
        }
      >
        {language === 'en' ? 'Resume' : 'Резюме'}
      </a>
      <a
        href="#Projects"
        onClick={handleNavClick}
        role="menuitem"
        aria-label={
          language === 'en'
            ? 'Go to Projects section'
            : 'Перейти к разделу Проекты'
        }
      >
        {language === 'en' ? 'Projects' : 'Проекты'}
      </a>
      <a
        href="#About"
        onClick={handleNavClick}
        role="menuitem"
        aria-label={
          language === 'en'
            ? 'Go to About me section'
            : 'Перейти к разделу Обо мне'
        }
      >
        {language === 'en' ? 'About me' : 'Обо мне'}
      </a>
      <a
        href="#Contacts"
        onClick={handleNavClick}
        role="menuitem"
        aria-label={
          language === 'en'
            ? 'Go to Contacts section'
            : 'Перейти к разделу Контакты'
        }
      >
        {language === 'en' ? 'Contacts' : 'Контакты'}
      </a>
    </>
  )

  const logo = (
    <a
      href="#FirstScreen"
      role="menuitem"
      aria-label={
        language === 'en' ? 'Go to top of page' : 'Перейти к началу страницы'
      }
    >
      <Logo />
    </a>
  )

  const buttons = (
    <div className="nav-buttons">
      <button
        type="button"
        onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
        aria-label={
          language === 'en' ? 'Switch to Russian' : 'Переключить на английский'
        }
      >
        {language === 'en' ? 'rus' : 'eng'}
      </button>
      <button
        type="button"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label={
          theme === 'dark'
            ? 'Switch to light theme'
            : 'Переключить на тёмную тему'
        }
      >
        {theme === 'dark' ? <IoSunnyOutline /> : <IoMdMoon />}
      </button>
    </div>
  )

  // Toggle CSS scroll lock class when mobile menu is open
  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    if (menuOpen) {
      root.classList.add('no-scroll')
      body.classList.add('no-scroll')
    } else {
      root.classList.remove('no-scroll')
      body.classList.remove('no-scroll')
    }
  }, [menuOpen])

  return (
    <nav
      className={`navbar-container ${visible ? 'visible' : 'hidden'}`}
      role="navigation"
      aria-label={language === 'en' ? 'Main navigation' : 'Основная навигация'}
      aria-hidden={!visible}
    >
      <div className="navbar">
        <div>{logo}</div>
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={
            menuOpen
              ? language === 'en'
                ? 'Close menu'
                : 'Закрыть меню'
              : language === 'en'
              ? 'Open menu'
              : 'Открыть меню'
          }
        >
          {menuOpen ? <VscClose /> : <RxHamburgerMenu />}
        </button>

        <div
          className={`Links ${menuOpen ? 'open' : ''}`}
          id={menuId}
          role="menu"
          aria-label={language === 'en' ? 'Navigation menu' : 'Меню навигации'}
        >
          {links}
          {menuOpen && <div className="nav-buttons">{buttons}</div>}
        </div>

        <div className="nav-buttons desktop-only">{buttons}</div>
      </div>
    </nav>
  )
}
