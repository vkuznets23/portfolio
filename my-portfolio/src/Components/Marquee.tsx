import '../CSS/Marquee.css'

type StripeProps = {
  style?: string
  text: string
}

export default function Marquee({ text, style = '-1.95deg' }: StripeProps) {
  return (
    <div className="marquee" style={{ rotate: style }}>
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
