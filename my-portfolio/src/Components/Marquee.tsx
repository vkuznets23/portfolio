import MarqueeComponent from 'react-fast-marquee'
import { motion } from 'framer-motion'

type StripeProps = {
  style?: string
  text: string
}

export default function Marquee({ text, style = '-1.95deg' }: StripeProps) {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="marquee"
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
    </motion.div>
  )
}
