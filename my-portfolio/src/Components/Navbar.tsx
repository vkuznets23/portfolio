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
  const [isMobile, setIsMobile] = useState(false)
  const menuId = useId()

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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

  // Determine if links should be focusable
  const linksTabIndex = isMobile ? (menuOpen ? 0 : -1) : visible ? 0 : -1

  const links = (
    <>
      <a
        href="#Resume"
        onClick={handleNavClick}
        tabIndex={linksTabIndex}
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
        tabIndex={linksTabIndex}
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
        tabIndex={linksTabIndex}
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
        tabIndex={linksTabIndex}
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
      tabIndex={visible ? 0 : -1}
      aria-label={
        language === 'en' ? 'Go to top of page' : 'Перейти к началу страницы'
      }
    >
      <Logo />
    </a>
  )

  const buttons = (isDesktop: boolean) => {
    const buttonsTabIndex = isDesktop ? (visible ? 0 : -1) : menuOpen ? 0 : -1

    return (
      <div className="nav-buttons">
        <button
          type="button"
          tabIndex={buttonsTabIndex}
          onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
          aria-label={
            language === 'en'
              ? 'Switch to Russian'
              : 'Переключить на английский'
          }
        >
          {language === 'en' ? 'rus' : 'eng'}
        </button>
        <button
          type="button"
          tabIndex={buttonsTabIndex}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label={
            language === 'en'
              ? theme === 'dark'
                ? 'Switch to light theme'
                : 'Switch to dark theme'
              : theme === 'dark'
              ? 'Переключить на светлую тему'
              : 'Переключить на тёмную тему'
          }
          style={{
            display: 'flex',
            justifySelf: 'center',
            alignItems: 'center',
          }}
        >
          {theme === 'dark' ? <IoSunnyOutline /> : <IoMdMoon />}
        </button>
      </div>
    )
  }

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
    >
      <div className="navbar">
        <div>{logo}</div>
        <button
          type="button"
          className="menu-toggle"
          tabIndex={visible ? 0 : -1}
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
          aria-label={
            language === 'en' ? 'Navigation links' : 'Навигационные ссылки'
          }
        >
          {links}
          {menuOpen && buttons(false)}
        </div>

        <div className="nav-buttons desktop-only">{buttons(true)}</div>
      </div>
    </nav>
  )
}
