import '../CSS/Error.css'
import type { AppData } from '../data'

export default function ErrorComponent({
  error,
  data,
}: {
  error: string | null
  data: AppData | null
}) {
  if (!data) {
    return (
      <div className="error-container">
        <p>No data available</p>
      </div>
    )
  }
  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
      </div>
    )
  }
  return null
}
