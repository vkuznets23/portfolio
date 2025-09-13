import { useEffect, useState } from 'react'
import { useGlobal } from '../context/useGlobal'
import { IoSunnyOutline } from 'react-icons/io5'
import { IoMdMoon } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import { VscClose } from 'react-icons/vsc'

export default function Navbar() {
  const { language, setLanguage, theme, setTheme } = useGlobal()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = (
    <>
      <a href="#Resume">{language === 'en' ? 'Resume' : 'Резюме'}</a>
      <a href="#Projects">{language === 'en' ? 'Projects' : 'Проекты'}</a>
      <a href="#About">{language === 'en' ? 'About me' : 'Обо мне'}</a>
      <a href="#Contacts">{language === 'en' ? 'Contacts' : 'Контакты'}</a>
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

  // const renderNavbar = (isFixed = false) => (
  //   <div className={`navbar ${isFixed ? 'fixed' : ''}`}>
  //     <div>LOGO</div>
  //     <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
  //       {menuOpen ? '✖' : '☰'}
  //     </button>
  //     <div className={`Links ${menuOpen ? 'open' : ''}`}>{links}</div>
  //     {buttons}
  //   </div>
  // )

  const renderNavbar = (isFixed = false) => (
    <div className={`navbar ${isFixed ? 'fixed' : ''}`}>
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
  )

  return (
    <>
      {/* Фиксированное при скролле */}
      <div className={`navbar-container ${scrolled ? 'scrolled' : 'default'}`}>
        {renderNavbar(true)}
      </div>

      {/* Статичное сверху */}
      {renderNavbar(false)}
    </>
  )
}
