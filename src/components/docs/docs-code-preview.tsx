import { useState, type ReactNode } from "react"
import { Copy, Check } from "lucide-react"

function CopyCodeButton({ code, label = "Copy code" }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  return (
    <button
      type="button"
      className="matchy-label-3 inline-flex shrink-0 items-center gap-1.5 text-matchy-typography-default underline-offset-4 hover:underline"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(code)
          setCopied(true)
          window.setTimeout(() => setCopied(false), 2000)
        } catch {
          setCopied(false)
        }
      }}
    >
      {copied ? (
        <Check className="size-4" aria-hidden="true" />
      ) : (
        <Copy className="size-4" aria-hidden="true" />
      )}
      {copied ? "Copied" : label}
    </button>
  )
}

export function DocsCodePreview({
  preview,
  code,
  caption,
  previewClassName,
  className,
}: {
  preview: ReactNode
  code: string
  /** Small token label under the sample (Overview-style). */
  caption?: ReactNode
  previewClassName?: string
  className?: string
}) {
  const [showCode, setShowCode] = useState(false)

  return (
    <div
      className={
        className ?? "mt-6 overflow-hidden rounded-xl border border-border"
      }
    >
      <div
        className={
          previewClassName ??
          "flex flex-wrap items-center gap-4 bg-muted/40 p-6"
        }
      >
        {preview}
      </div>
      {caption ? (
        <div className="border-t border-border bg-background px-4 py-3">
          <p className="text-sm leading-relaxed">{caption}</p>
        </div>
      ) : null}
      <div className="flex items-center justify-end gap-4 border-t border-border bg-background px-3 py-2">
        <button
          type="button"
          className="matchy-label-3 text-matchy-typography-default underline-offset-4 hover:underline"
          aria-expanded={showCode}
          onClick={() => setShowCode((value) => !value)}
        >
          {showCode ? "Hide code" : "Show code"}
        </button>
        <CopyCodeButton code={code} />
      </div>
      {showCode ? (
        <pre className="overflow-x-auto border-t border-border bg-muted p-4 text-left text-xs leading-relaxed whitespace-pre-wrap sm:text-sm">
          <code>{code}</code>
        </pre>
      ) : null}
    </div>
  )
}

export function DocsImportBlock({ code }: { code: string }) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3">
      <code className="text-sm">{code}</code>
      <CopyCodeButton code={code} />
    </div>
  )
}

export function DocsPropsTable({
  rows,
  caption,
}: {
  caption: string
  rows: { name: string; type: string; defaultValue: string; description: string }[]
}) {
  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-muted">
          <tr>
            <th className="px-3 py-3 font-semibold">Name</th>
            <th className="px-3 py-3 font-semibold">Type</th>
            <th className="px-3 py-3 font-semibold">Default</th>
            <th className="px-3 py-3 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-t border-border">
              <td className="px-3 py-3 font-medium whitespace-nowrap">
                <code>{row.name}</code>
              </td>
              <td className="px-3 py-3">
                <code className="text-xs break-all">{row.type}</code>
              </td>
              <td className="px-3 py-3 whitespace-nowrap">
                <code>{row.defaultValue}</code>
              </td>
              <td className="px-3 py-3">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
