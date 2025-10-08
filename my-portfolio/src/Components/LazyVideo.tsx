import { useEffect, useRef, useState } from 'react'

interface LazyVideoProps {
  src: string
  className?: string
  style?: React.CSSProperties
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  playsInline?: boolean
}

export default function LazyVideo({
  src,
  className,
  style,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true)
            if (video.src !== src) {
              video.src = src
              video.load()
            }
          }
        })
      },
      {
        rootMargin: '60%',
        threshold: 0.1,
      }
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [src, isInView])

  return (
    <video
      ref={videoRef}
      className={className}
      style={style}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload="none"
      role="presentation"
      aria-hidden="true"
    />
  )
}
