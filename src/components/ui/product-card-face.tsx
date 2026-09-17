import { useState, type ReactNode } from "react"

import { Badge } from "@/components/ui/badge"
import { MatchyIcon } from "@/foundations/icons"
import { cn } from "@/lib/utils"

import "./card-footer.css"
import "./product-card-face.css"

export type ProductCardFaceVariant =
  | "default"
  | "blur"
  | "footer"
  | "marketplace"

export type MarketplaceAspect = "portrait" | "tall" | "square"

export type ProductCardFaceProps = {
  /** Full-bleed product photo URL. */
  imageUrl: string
  /** Accessible description of the image (required — image alone isn't announced). */
  alt: string
  /**
   * Photo treatment.
   * - `blur` — leather tint + backdrop blur (loading background).
   * - `footer` — wraps children in matchy-card-footer (dark scrim + bottom anchor).
   * - `marketplace` — Home/Cloth tile: diagonal save blur, name, price pill.
   */
  variant?: ProductCardFaceVariant
  /** Optional overlay content (onboarding chrome, LoadingScreen, empty CTA, or meta footer copy). */
  children?: ReactNode
  className?: string
  /** Marketplace tile aspect ratio variant. */
  aspect?: MarketplaceAspect
  /** Product name under the photo (marketplace). */
  name?: string
  /** Price string for the pill (marketplace). */
  price?: string
  /** Luxury brands demo — leather ring on the media (marketplace). */
  emphasized?: boolean
  /** Called when the user saves via the heart (marketplace). */
  onSaved?: () => void
}

/**
 * Product photo card — swipe face (default/blur/footer) or marketplace tile.
 * Swipe uses matchy-radius-lg + matchy-elevation-4; marketplace keeps Home tile anatomy.
 */
export function ProductCardFace({
  imageUrl,
  alt,
  variant = "default",
  children,
  className,
  aspect = "portrait",
  name,
  price,
  emphasized = false,
  onSaved,
}: ProductCardFaceProps) {
  const [saved, setSaved] = useState(false)

  if (variant === "marketplace") {
    const displayName = name ?? alt

    return (
      <article
        className={cn(
          "matchy-product-card-face--marketplace",
          emphasized && "matchy-product-card-face--marketplace-emphasized",
          className
        )}
        data-variant={variant}
      >
        <div
          className={cn(
            "matchy-product-card-face-media",
            `matchy-product-card-face-media--${aspect}`
          )}
        >
          <img
            src={imageUrl}
            alt={alt}
            className="matchy-product-card-face-image"
            draggable={false}
          />

          <button
            type="button"
            className="matchy-product-card-face-save"
            aria-label={
              saved ? `Unsave ${displayName}` : `Save ${displayName}`
            }
            aria-pressed={saved}
            onClick={() => {
              setSaved((current) => {
                const next = !current
                if (next) onSaved?.()
                return next
              })
            }}
          >
            <MatchyIcon
              token="matchy-icon-heart"
              size="lg"
              color="white"
              fill={saved ? "currentColor" : "none"}
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="matchy-product-card-face-meta">
          <p className="matchy-product-card-face-name matchy-label-2">
            {displayName}
          </p>
          {price ? (
            <Badge
              variant="default"
              className="matchy-product-card-face-price matchy-label-3 border-transparent bg-matchy-primary text-matchy-typography-default"
            >
              {price}
            </Badge>
          ) : null}
        </div>
      </article>
    )
  }

  const overlay =
    variant === "footer" && children != null ? (
      <div className="matchy-card-footer pointer-events-none absolute inset-x-0 bottom-0">
        {children}
      </div>
    ) : (
      children
    )

  return (
    <div
      className={cn(
        "matchy-product-card-face relative h-full w-full overflow-hidden border border-border",
        variant === "blur" && "matchy-product-card-face--blur",
        className
      )}
      data-variant={variant}
    >
      <img
        src={imageUrl}
        alt={alt}
        draggable={false}
        className="pointer-events-none h-full w-full object-cover object-center"
      />
      {overlay}
    </div>
  )
}
