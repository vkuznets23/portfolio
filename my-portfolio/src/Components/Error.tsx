import '../CSS/Error.css'
import type { AppData } from '../data'

export default function ErrorComponent({
  error = `I'm so sorry, there is no such page! Maybe it will appear lately but now you can check out the <a href="/">main page</a>`,
  data,
}: {
  error?: string | null
  data: AppData | null
}) {
  const errorTitleId = 'app-error-title'
  const errorDescId = 'app-error-desc'

  if (!data) {
    return (
      <main className="main-container">
        <div className="error-container">
          <div
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
        </div>
      </main>
    )
  }
  if (error) {
    return (
      <main className="main-container">
        <div className="error-container">
          <div
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            aria-labelledby={errorTitleId}
            aria-describedby={errorDescId}
          >
            <p id={errorTitleId}>Oops! Something went wrong!</p>
            <p id={errorDescId} dangerouslySetInnerHTML={{ __html: error }} />
          </div>
        </div>
      </main>
    )
  }
  return null
}
