import { Typewriter as TypewriterDef } from 'react-simple-typewriter'
import '../CSS/Typewriter.css'

type TypewriterProps = {
  line1: string
  options: string[]
}

export default function Typewriter({ line1, options }: TypewriterProps) {
  return (
    <div className="hero">
      <div className="line1-container">
        <span className="line1-fixed">{line1}</span>{' '}
        <span className="hero-typewriter">
          <TypewriterDef
            words={options}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
            cursorColor="#B4FB6D"
          />
        </span>
      </div>
    </div>
  )
}
