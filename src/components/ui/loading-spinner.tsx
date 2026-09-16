import "./loading-spinner.css"

export type FashionQuote = {
  quote: string
  attribution: string
}

export type LoadingScreenProps = {
  quote: FashionQuote
}

/**
 * Loading chrome only: spinner + fashion quote.
 * No photo, blur, or scrim — compose over ProductCardFace in the swipe flow.
 */
export function LoadingScreen({ quote }: LoadingScreenProps) {
  return (
    <div
      className="matchy-loading absolute inset-0 z-30 flex flex-col items-center justify-center overflow-hidden text-center"
      style={{
        gap: "var(--matchy-space-lg)",
        paddingInline: "var(--matchy-space-lg)",
      }}
      role="status"
      aria-live="polite"
      aria-label="Loading next item"
    >
      <div className="matchy-spinner" aria-hidden="true" />
      <div style={{ display: "grid", gap: "var(--matchy-space-sm)" }}>
        <p className="matchy-quote matchy-paragraph text-pretty text-matchy-typography-contrast">
          &ldquo;{quote.quote}&rdquo;
        </p>
        <p className="matchy-emotional-sm text-matchy-typography-contrast">
          — {quote.attribution}
        </p>
      </div>
    </div>
  )
}
