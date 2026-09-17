import yellowMonogram from "@/assets/docs/matchy-logo-tokens/yellow initial.svg"
import { cn } from "@/lib/utils"

import "./seller-avatar.css"

export type SellerAvatarProps = {
  /** Shop / seller display name. Omit for mark-only. */
  name?: string
  /**
   * Seller logo URL. When omitted, falls back to
   * `matchy-logo-monogram-yellow`.
   */
  logoUrl?: string
  className?: string
}

/**
 * Ropstar seller mark — leather circle with yellow monogram (or seller logo),
 * optional name. Used under Story cards and anywhere a shop identity is needed.
 */
export function SellerAvatar({ name, logoUrl, className }: SellerAvatarProps) {
  const hasCustomLogo = Boolean(logoUrl)

  return (
    <div className={cn("matchy-seller-avatar-row", className)}>
      <span
        className={cn(
          "matchy-seller-avatar",
          hasCustomLogo && "matchy-seller-avatar--custom-logo"
        )}
        aria-hidden={name ? true : undefined}
        role={name ? undefined : "img"}
        aria-label={name ? undefined : "Ropstar"}
      >
        <img
          src={logoUrl ?? yellowMonogram}
          alt=""
          className="matchy-seller-avatar-logo"
        />
      </span>
      {name ? (
        <p className="matchy-seller-avatar-name matchy-paragraph text-matchy-typography-default">
          {name}
        </p>
      ) : null}
    </div>
  )
}
