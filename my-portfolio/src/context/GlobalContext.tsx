import { createContext, useState, type ReactNode } from 'react'

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

  return (
    <GlobalContext.Provider value={{ language, setLanguage, theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  )
}
