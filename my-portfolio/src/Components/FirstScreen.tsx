import Typewriter from './Typewriter'
import '../FirstScreen-container.css'
import CircularText from './CircleText'

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
          <div className="circle-photo-wrapper">
            <CircularText
              text="Hi! My name is Viktoriia Hi! My name is Viktoriia "
              radius={71}
            />
            <img src="/img038.jpg" alt="my_photo" className="photo"></img>
            <span className="emoji-hand">👋</span>
          </div>
        </div>
      </div>
    </div>
  )
}
