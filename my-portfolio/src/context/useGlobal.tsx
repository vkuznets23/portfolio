import { useContext } from 'react'
import { GlobalContext, type GlobalContextType } from './GlobalContext'

export const useGlobal = (): GlobalContextType => {
  const context = useContext(GlobalContext)
  if (!context) throw new Error('useGlobal must be used within GlobalProvider')
  return context
}
