import Typewriter from './Typewriter'
import '../FirstScreen-container.css'

type FirstScreenProps = {
  firstLine: string
  options: string[]
  description: string
}

export default function FirstScreen({
  firstLine,
  options,
  description,
}: FirstScreenProps) {
  return (
    <div className="firstScreen-container">
      <Typewriter line1={firstLine} options={options} />
      <div className="description-absolute-container">
        <div className="description-flex-container">
          <p className="description">{description}</p>
          <img src="/img038.jpg" alt="my_photo" className="photo"></img>
        </div>
      </div>
    </div>
  )
}
