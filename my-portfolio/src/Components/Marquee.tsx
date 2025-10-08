import MarqueeComponent from 'react-fast-marquee'

type StripeProps = {
  style?: string
  text: string
}

export default function Marquee({ text, style = '-1.95deg' }: StripeProps) {
  return (
    <div
      className="marquee marquee-fade-in"
      style={{ rotate: style }}
      role="region"
      aria-roledescription="marquee"
      aria-label={text}
    >
      <MarqueeComponent
        className="overflow-y-hidden"
        speed={50}
        gradient={false}
        pauseOnHover={false}
      >
        <p className="marquee-text">
          {text}&nbsp;{text}&nbsp;{text}&nbsp;{text}&nbsp;{text}&nbsp;
        </p>
      </MarqueeComponent>
    </div>
  )
}
