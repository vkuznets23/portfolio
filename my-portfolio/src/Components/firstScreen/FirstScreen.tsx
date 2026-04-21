import Typewriter from './Typewriter'
import CircularText from '../uiComponents/CircleText'
import { useGlobal, useAppData, useTypografCombined } from '../../hooks'

export default function FirstScreen() {
  const { language } = useGlobal()
  const { data } = useAppData(language)

  const firstLine: string = useTypografCombined(
    data?.firstScreen?.header?.line1 || '',
    language,
  )
  const options: string[] = data?.firstScreen?.header?.options
    ? Object.values(data.firstScreen.header.options)
    : []
  const description: string = useTypografCombined(
    data?.firstScreen?.description || '',
    language,
  )

  return (
    <section id="FirstScreen">
      <header className="firstScreen-container, slide-up">
        {options && options.length > 0 && (
          <Typewriter line1={firstLine} options={options} />
        )}
        <div className="description-absolute-container">
          <div className="description-flex-container">
            <p className="description">{description}</p>
            <div
              className="circle-photo-wrapper"
              role="img"
              aria-label={
                language === 'en'
                  ? 'Profile photo of Viktoriia'
                  : 'Фото Виктории'
              }
            >
              <CircularText
                text={
                  language === 'en'
                    ? 'Hello! My name is Viktoriia! But call me Vika.'
                    : 'Хэй! Меня зовут Виктория, но лучше Вика.'
                }
                radius={71}
              />
              <img
                src="/photos/img038.webp"
                srcSet="/photos/img038-200.webp 200w, /photos/img038-300.webp 300w"
                loading="eager"
                fetchPriority="high"
                alt=""
                className="photo"
              />
              <span className="emoji-hand" aria-hidden="true">
                👋
              </span>
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}
