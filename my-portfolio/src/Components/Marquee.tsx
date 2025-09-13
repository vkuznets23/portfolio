type StripeProps = {
  style?: string
  text: string
}

export default function Marquee({ text, style = '-1.95deg' }: StripeProps) {
  const items = Array(20).fill(text)

  return (
    <div className="marquee" style={{ rotate: style }}>
      <div className="marquee-track">
        <div className="marquee-content">
          {items.map((t, i) => (
            <span key={`first-${i}`}>{t}</span>
          ))}
        </div>
        <div className="marquee-content">
          {items.map((t, i) => (
            <span key={`second-${i}`}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
