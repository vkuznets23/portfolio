import CircularText from './CircleText'

export type ExperienceType = {
  date: string
  name: string
  description: string
}

type ExperienceProps = {
  header: string
  description: string
  experience: ExperienceType[]
}
export default function Experience({
  header,
  description,
  experience,
}: ExperienceProps) {
  return (
    <div className="experience-container">
      <h2 className="h2">{header}</h2>
      <div className="description-flex-container">
        <div className="description">{description}</div>
        <div className="scrolldown-wrapper" style={{ fontWeight: 300 }}>
          <CircularText
            text="click * click * click * click * click * click *"
            radius={62}
          />
          <span className="emoji-pointer">👈</span>
        </div>
      </div>
      {experience.map((obj) => (
        <div>
          <span> {obj.date}</span>
          <h4>{obj.name}</h4>
          <p>{obj.description}</p>
        </div>
      ))}
    </div>
  )
}
