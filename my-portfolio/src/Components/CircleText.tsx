type CircularTextProps = {
  text: string
  radius?: number
  fontSize?: number
}

export default function CircularText({
  text,
  radius = 100,
  fontSize = 20,
}: CircularTextProps) {
  const circleId = `circlePath-${Math.random().toString(36).substr(2, 9)}`
  const size = radius * 2 + fontSize * 2 // добавляем отступ по краям

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="circular-text"
    >
      <defs>
        <path
          id={circleId}
          d={`
            M ${size / 2},${size / 2 - radius}
            a ${radius},${radius} 0 1,1 -0.1,0
          `}
        />
      </defs>

      <text fontSize={fontSize} fill="var(--text-color)" textAnchor="middle">
        <textPath href={`#${circleId}`} startOffset="50%">
          {text}
        </textPath>
      </text>
    </svg>
  )
}
