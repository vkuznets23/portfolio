import '../CSS/Marquee.css'

type StripeProps = {
  text: string
}

export default function Marquee({ text }: StripeProps) {
  return (
    <div className="marquee">
      <div className="marquee-content">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  )
}
