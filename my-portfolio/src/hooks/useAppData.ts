import { useState, useEffect } from 'react'
import { getData, type AppData, type Language } from '../data'

export const useAppData = (language: Language) => {
  const [data, setData] = useState<AppData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = () => {
      try {
        setLoading(true)
        setError(null)
        const appData = getData(language)
        setData(appData)
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
