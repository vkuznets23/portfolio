import { useEffect, useState } from 'react'
import FirstScreen from './Components/FirstScreen'
import './App.css'
import Marquee from './Components/Marquee'

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
  const description = firstScreenData[0].description

  return (
    <div className="main-container">
      <div className="first-wrapper">
        <FirstScreen
          firstLine={firstLine}
          options={options}
          description={description}
        />
      </div>
      <div className="content-wrapper">
        <Marquee text="career changer >> career changer || career changer * career changer &&" />
      </div>
    </div>
  )
}

export default App
