import { Typewriter as TypewriterDef } from 'react-simple-typewriter'
import '../Typewriter.css'

type TypewriterProps = {
  line1: string
  options: string[]
}

export default function Typewriter({ line1, options }: TypewriterProps) {
  return (
    <div className="hero">
      <h1 className="hero-title">
        {line1}{' '}
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
      </h1>
    </div>
  )
}
