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
    <div className="scrolldown-wrapper" style={{ fontWeight: 300 }}>
      <CircularText
        text={
          language == 'en' ? textEn : textRu
          // ? 'click * click * click ** click * click * click **'
          // : 'клик ** клик ** клик ** клик ** клик ***'
        }
        // radius={62}
        radius={radius}
      />
      <span className="emoji-pointer">👈</span>
    </div>
  )
}
