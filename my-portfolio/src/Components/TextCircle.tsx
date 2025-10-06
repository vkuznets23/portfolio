import { useGlobal } from '../hooks'
import CircularText from './CircleText'

export default function TextCircle({
  textEn,
  textRu,
  radius,
}: {
  textEn: string
  textRu: string
  radius: number
}) {
  const { language } = useGlobal()

  return (
    <div
      className="scrolldown-wrapper"
      role="img"
      aria-label={language === 'en' ? textEn : textRu}
    >
      <CircularText text={language == 'en' ? textEn : textRu} radius={radius} />
      <span className="emoji-pointer">👈</span>
    </div>
  )
}
