import Typewriter from './Typewriter'
import '../FirstScreen-container.css'

type FirstScreenProps = {
  firstLine: string
  options: string[]
}

export default function FirstScreen({ firstLine, options }: FirstScreenProps) {
  return (
    <div className="firstScreen-container">
      <Typewriter line1={firstLine} options={options} />
      <p>text</p>
    </div>
  )
}
