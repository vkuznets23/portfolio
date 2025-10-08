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

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      const isDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      setTheme(isDarkMode ? 'dark' : 'light')
    }

    // Load language
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

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
