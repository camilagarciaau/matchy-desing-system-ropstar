import { Button } from "@/components/button/button"

import "./save-toast.css"

export type HomeSaveToastProps = {
  onSeeProfile: () => void
}

/**
 * Bottom save confirmation — Pinterest-style toast inside the Home shell.
 */
export function HomeSaveToast({ onSeeProfile }: HomeSaveToastProps) {
  return (
    <div
      className="matchy-home-save-toast"
      role="status"
      aria-live="polite"
    >
      <p className="matchy-home-save-toast-copy matchy-label-3">
        Got it! Your picks are saved — find them anytime in your profile.
      </p>
      <Button
        type="button"
        variant="ghost"
        onClick={onSeeProfile}
        className="matchy-btn matchy-btn--primary matchy-home-save-toast-action matchy-label-3"
      >
        See profile
      </Button>
    </div>
  )
}
