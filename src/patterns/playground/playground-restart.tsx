import { MatchyIcon } from "@/foundations/icons"

export function PlaygroundRestart({
  label,
  onRestart,
}: {
  label: string
  onRestart: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onRestart}
      className="matchy-link matchy-link--default matchy-label-3 inline-flex items-center gap-[var(--matchy-space-xs)]"
    >
      <MatchyIcon
        token="matchy-icon-undo"
        size="sm"
        color="default"
        aria-hidden="true"
      />
      Restart
    </button>
  )
}
