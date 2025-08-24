import { Typewriter } from 'react-simple-typewriter'
import '../Hero.css'

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-title">
        Hi! I'm a{' '}
        <span className="hero-typewriter">
          <Typewriter
            words={[
              'Software\nDeveloper',
              'Career\nChanger',
              'Student\nat Hive',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
            cursorColor="#B4FB6D"
          />
        </span>
      </h1>
    </div>
  )
}
