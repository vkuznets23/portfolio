import Typewriter from './Typewriter'
import '../CSS/FirstScreen-container.css'
import CircularText from './CircleText'
import { useGlobal } from '../context/useGlobal'

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
  const { language } = useGlobal()

  return (
    <div className="firstScreen-container, slide-up">
      <Typewriter line1={firstLine} options={options} />
      <div className="description-absolute-container">
        <div className="description-flex-container">
          <p className="description">{description}</p>
          <div className="circle-photo-wrapper">
            <CircularText
              text={
                language === 'en'
                  ? 'Hi! My name is Viktoriia Hi! My name is Viktoriia '
                  : 'Привет! Меня зовут Вика Привет! Меня зовут Вика '
              }
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
