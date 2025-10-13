import TextCircle from './TextCircle'

type HeaderAndDescriptionProps = {
  ref: React.RefObject<HTMLDivElement | null>
  visible: boolean
  header: string
  description: string
  id: string
  textCircle: 'click' | 'scroll'
}

export default function HeaderAndDescription({
  ref,
  visible,
  header,
  description,
  id,
  textCircle,
}: HeaderAndDescriptionProps) {
  return (
    <header ref={ref} className={visible ? 'slide-up' : 'hidden'}>
      <h2 id={id} className="h2">
        {header}
      </h2>
      <div className="description-flex-container">
        <p className="description">{description}</p>
        {textCircle === 'click' ? (
          <TextCircle
            textRu="клик >> клик >> клик >> клик >>"
            textEn="click click * click click * click click *"
            radius={62}
          />
        ) : (
          <TextCircle
            textRu="скрол >> скрол >> скрол >> скрол >>"
            textEn="scroll scroll * scroll scroll * scroll scroll *"
            radius={62}
          />
        )}
      </div>
    </header>
  )
}
