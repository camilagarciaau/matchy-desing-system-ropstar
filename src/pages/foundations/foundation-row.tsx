import type { ReactNode } from "react"

export function FoundationRow({
  token,
  use,
  value,
  id,
  children,
}: {
  token: string
  use: string
  value?: string
  id?: string
  children: ReactNode
}) {
  return (
    <div
      id={id}
      className="scroll-mt-48 border-b border-border py-6 last:border-b-0"
    >
      <div className="rounded-lg bg-muted px-4 py-5">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          Sample
        </p>
        {children}
      </div>
      <p className="mt-3 font-mono text-xs">{token}</p>
      <p className="mt-0.5 text-sm">{use}</p>
      {value ? (
        <p className="mt-0.5 font-mono text-xs">{value}</p>
      ) : null}
    </div>
  )
}
