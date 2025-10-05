import Typewriter from './Typewriter'
import '../CSS/FirstScreen-container.css'
import CircularText from './CircleText'
import { useGlobal, useAppData, useTypografCombined } from '../hooks'

export default function FirstScreen() {
  const { language } = useGlobal()
  const { data } = useAppData(language)

  const firstLine: string = useTypografCombined(
    data?.firstScreen?.header?.line1 || '',
    language
  )
  const options: string[] = data?.firstScreen?.header?.options
    ? Object.values(data.firstScreen.header.options)
    : []
  const description: string = useTypografCombined(
    data?.firstScreen?.description || '',
    language
  )

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
            <img src="/photos/img038.jpg" alt="my_photo" className="photo" />
            <span className="emoji-hand">👋</span>
          </div>
        </div>
      </div>
    </div>
  )
}
