import { Typewriter as TypewriterDef } from 'react-simple-typewriter'

type TypewriterProps = {
  line1: string
  options: string[]
}

export default function Typewriter({ line1, options }: TypewriterProps) {
  return (
    <div className="hero">
      <div className="line1-container">
        <span className="line1-fixed">{line1}</span>{' '}
        <span
          className="hero-typewriter"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          aria-label={`${line1} — dynamic options`}
        >
          <TypewriterDef
            words={options}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
            cursorColor="var(--bg-switch-color)"
          />
        </span>
      </div>
    </div>
  )
}
