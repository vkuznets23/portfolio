import { useEffect, useRef, useState } from 'react'

interface LazyVideoProps {
  src: string
  className?: string
  style?: React.CSSProperties
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  playsInline?: boolean
  poster?: string
}

export default function LazyVideo({
  src,
  className,
  style,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  poster,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const tryPlay = async () => {
      try {
        await video.play()
      } catch (err) {
        console.warn('Autoplay blocked:', err)
      }
    }

    const observer = new IntersectionObserver(
      async (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!isLoaded) {
              video.src = src
              video.preload = 'auto'
              requestAnimationFrame(() => tryPlay())
              setIsLoaded(true)
            } else {
              tryPlay()
            }
          } else if (isLoaded && entry.intersectionRatio === 0) {
            video.pause()
          }
        }
      },
      {
        rootMargin: '150%',
        threshold: 0.01,
      }
    )

    observer.observe(video)

    const resumePlayback = () => {
      if (video.paused) {
        tryPlay()
      }
    }
    window.addEventListener('touchstart', resumePlayback, { once: true })
    window.addEventListener('scroll', resumePlayback, { once: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('touchstart', resumePlayback)
      window.removeEventListener('scroll', resumePlayback)
    }
  }, [src, isLoaded])

  return (
    <video
      ref={videoRef}
      className={className}
      style={style}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload="metadata"
      poster={poster}
      disablePictureInPicture
      disableRemotePlayback
      role="presentation"
      aria-hidden="true"
      webkit-playsinline="true"
    />
  )
}
