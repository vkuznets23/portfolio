import { useEffect, useState } from 'react'
import '../CSS/Navbar.css'
import { IoMdMoon } from 'react-icons/io'

export default function Navbar() {
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
            <a href="#Resume">Resume</a>
            <a href="#Projects">Projects</a>
            <a href="#About">About me</a>
            <a href="#Contacts">Contacts</a>
          </div>
          <div className="nav-buttons">
            <button>eng</button>
            <button>
              <IoMdMoon />
            </button>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div>LOGO</div>
        <div className="Links">
          <a href="#Resume">Resume</a>
          <a href="#Projects">Projects</a>
          <a href="#About">About me</a>
          <a href="#Contacts">Contacts</a>
        </div>
        <div className="nav-buttons">
          <button>eng</button>
          <button>
            <IoMdMoon />
          </button>
        </div>
      </div>
    </>
  )
}
