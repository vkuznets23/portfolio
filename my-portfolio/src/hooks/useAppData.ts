import { useState, useEffect, useRef } from 'react'
import { getData, type AppData, type Language } from '../data'

function preloadImages(urls: string[], cache: Set<string>) {
  urls.forEach((url) => {
    if (!url || cache.has(url)) return
    const img = new Image()
    img.src = url
    cache.add(url)
  })
}

export default function useAppData(language: Language) {
  const [data, setData] = useState<AppData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const preloadedRef = useRef<Set<string>>(new Set())

  useEffect(() => {
    const fetchData = () => {
      try {
        setLoading(true)
        const appData = getData(language)
        setData(appData)

        const projectsImages =
          appData?.projects.projects.map((p) => p.image).filter(Boolean) ?? []

        const factImages = [
          '/photos/dogphoto.png',
          '/photos/fugler.png',
          '/photos/circle.gif',
          '/photos/mug.png',
          '/photos/knitting.png',
          '/photos/office.gif',
          '/photos/cuteme.png',
        ]

        preloadImages([...factImages, ...projectsImages], preloadedRef.current)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [language])

  return { data, loading, error }
}
