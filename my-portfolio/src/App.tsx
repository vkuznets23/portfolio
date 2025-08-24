import { useEffect, useState } from 'react'
import Typewriter from './Components/Typewriter'
import './App.css'

interface HeaderData {
  line1: string
  options: Record<string, string>
}

interface ScreenData {
  header: HeaderData
  description: string
}

function App() {
  const [firstScreenData, setFirstScreenData] = useState<ScreenData[] | null>(
    null
  )

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/content.json')
        const data = await res.json()
        setFirstScreenData(data)
      } catch (err) {
        console.error('Error fetching data', err)
      }
    }
    fetchData()
  }, [])
  if (!firstScreenData) return null
  const firstLine = firstScreenData[0].header.line1
  const options = Object.values(firstScreenData[0].header.options)

  return (
    <>
      <Typewriter line1={firstLine} options={options} />
    </>
  )
}

export default App
