import '../CSS/Error.css'
import type { AppData } from '../data'

export default function ErrorComponent({
  error,
  data,
}: {
  error: string | null
  data: AppData | null
}) {
  const errorTitleId = 'app-error-title'
  const errorDescId = 'app-error-desc'

  if (!data) {
    return (
      <div
        className="error-container"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-labelledby={errorTitleId}
        aria-describedby={errorDescId}
      >
        <p id={errorTitleId}>No data available</p>
        <p id={errorDescId}>
          Please try reloading the page or check your connection.
        </p>
      </div>
    )
  }
  if (error) {
    return (
      <div
        className="error-container"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-labelledby={errorTitleId}
        aria-describedby={errorDescId}
      >
        <p id={errorTitleId}>Error</p>
        <p id={errorDescId}>{error}</p>
      </div>
    )
  }
  return null
}
