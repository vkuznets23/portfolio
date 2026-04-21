import { Typewriter as TypewriterDef } from 'react-simple-typewriter'

type TypewriterProps = {
  line1: string
  options: string[]
}

export default function Typewriter({ line1, options }: TypewriterProps) {
  return (
    <h1 className="hero">
      <span className="line1-container">
        <span className="line1-fixed">{line1}</span>{' '}
        <span className="hero-typewriter">
          <TypewriterDef
            words={options}
            loop
            cursor
            cursorStyle="|"
            cursorBlinking={true}
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={1000}
            cursorColor="var(--cursor-color)"
          />
        </span>
      </span>
    </h1>
  )
}
