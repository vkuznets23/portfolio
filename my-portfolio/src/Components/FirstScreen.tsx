import Typewriter from './Typewriter'
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
      {options && options.length > 0 && (
        <Typewriter line1={firstLine} options={options} />
      )}
      <div className="description-absolute-container">
        <div className="description-flex-container">
          <p className="description">{description}</p>
          <div className="circle-photo-wrapper">
            <CircularText
              text={
                language === 'en'
                  ? 'Hello! My name is Viktoriia! But call me Vika.'
                  : 'Хэй! Меня зовут Виктория, но лучше Вика.'
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
