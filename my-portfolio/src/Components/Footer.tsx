export default function Footer() {
  return (
    <section id="Contacts" aria-labelledby="contacts-title">
      <footer className="footer-container" role="contentinfo">
        <div className="footer">
          <p id="contacts-title" className="getInTouch">
            I’m open to professional challenges.{' '}
            <a href="mailto:youremail@example.com">Get in touch!</a>
          </p>
          <nav className="footer-links" aria-label="Footer links">
            <a href="https://github.com/vkuznets23">GitHub</a>
            <a href="https://www.linkedin.com/in/viktoriia-kuznetsova/">
              Linkedin
            </a>
          </nav>
        </div>
      </footer>
    </section>
  )
}
