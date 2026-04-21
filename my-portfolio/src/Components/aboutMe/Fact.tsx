export default function Fact({ fact, i }: { fact: string; i: number }) {
  return (
    <article
      key={i}
      className={`fact fact${i + 1}`}
      aria-labelledby={`fact-title-${i}`}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p id={`fact-title-${i}`}>
          <b>Fact #{i + 1}</b>
        </p>
        <p>{fact}</p>
      </div>
    </article>
  )
}
