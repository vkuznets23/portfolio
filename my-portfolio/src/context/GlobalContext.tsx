import { createContext, useEffect, useState, type ReactNode } from 'react'

export type Language = 'en' | 'ru'
export type Theme = 'light' | 'dark'

export type GlobalContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  theme: Theme
  setTheme: (theme: Theme) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
)

type ProviderProps = { children: ReactNode }

export const GlobalProvider = ({ children }: ProviderProps) => {
  const [language, setLanguage] = useState<Language>('en')
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(isDarkMode ? 'dark' : 'light')

    // update theme when system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      setTheme(mediaQuery.matches ? 'dark' : 'light')
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  return (
    <GlobalContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  )
}
