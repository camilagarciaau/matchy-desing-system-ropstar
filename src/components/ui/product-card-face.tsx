import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

import "./product-card-face.css"

export type ProductCardFaceVariant = "default" | "blur" | "footer"

export type ProductCardFaceProps = {
  /** Full-bleed product photo URL. */
  imageUrl: string
  /** Accessible description of the product photo (required — image alone isn't announced). */
  alt: string
  /**
   * Photo treatment.
   * - `blur` — leather tint + backdrop blur (loading background).
   * - `footer` — wraps children in matchy-card-footer (dark scrim + bottom anchor).
   */
  variant?: ProductCardFaceVariant
  /** Optional overlay content (onboarding chrome, LoadingScreen, empty CTA, or meta footer copy). */
  children?: ReactNode
  className?: string
}

/**
 * Full-bleed product image shell for swipe phases (onboarding, loading, deck, empty).
 * Uses matchy-radius-lg + matchy-elevation-4 (see Foundations → Radii / Elevation).
 */
export function ProductCardFace({
  imageUrl,
  alt,
  variant = "default",
  children,
  className,
}: ProductCardFaceProps) {
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
