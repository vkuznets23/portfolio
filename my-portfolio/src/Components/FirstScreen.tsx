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
    <section id="FirstScreen" aria-labelledby="experience-title">
      <div
        className="firstScreen-container, slide-up"
        role="banner"
        aria-labelledby="intro-title"
      >
        {options && options.length > 0 && (
          <Typewriter line1={firstLine} options={options} />
        )}
        <div className="description-absolute-container">
          <div className="description-flex-container">
            <h1 id="intro-title" className="sr-only">
              {firstLine}
            </h1>
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
              <img
                src="/photos/img038.jpg"
                alt={language === 'en' ? 'My photo' : 'Моё фото'}
                className="photo"
              />
              <span className="emoji-hand" aria-hidden="true">
                👋
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
