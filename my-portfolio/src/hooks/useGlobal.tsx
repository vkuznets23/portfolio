import { useContext } from 'react'
import { GlobalContext, type GlobalContextType } from '../context/GlobalContext'

export default function useGlobal(): GlobalContextType {
  const context = useContext(GlobalContext)
  if (!context) throw new Error('useGlobal must be used within GlobalProvider')
  return context
}
