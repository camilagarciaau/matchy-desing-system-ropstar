import type { LucideIcon, LucideProps } from "lucide-react"
import {
  Archive,
  ArrowUpDown,
  Award,
  BadgeCheck,
  BadgeDollarSign,
  BarChart3,
  Bell,
  Calendar,
  Camera,
  Eye,
  Heart,
  House,
  Lock,
  MapPin,
  Menu,
  Pencil,
  Search,
  Share2,
  Shield,
  Shirt,
  ShoppingCart,
  ShoppingBag,
  SlidersHorizontal,
  Tag,
  Trash2,
  Truck,
  User,
  X,
  RotateCcw,
} from "lucide-react"

import { cn } from "@/lib/utils"

export const matchyIconSizes = {
  sm: "matchy-icon-size-sm",
  md: "matchy-icon-size-md",
  lg: "matchy-icon-size-lg",
} as const

export type MatchyIconSize = keyof typeof matchyIconSizes

export const matchyIconColors = {
  default: "text-matchy-leather",
  white: "text-matchy-typography-contrast",
} as const

export type MatchyIconColor = keyof typeof matchyIconColors

/** Full Matchy icon set — map tokens to lucide-react components. */
export const matchyIcons = {
  "matchy-icon-home": House,
  "matchy-icon-filters": SlidersHorizontal,
  "matchy-icon-sort": ArrowUpDown,
  "matchy-icon-search": Search,
  "matchy-icon-cart": ShoppingCart,
  /** Swipe deck — Buy now. */
  "matchy-icon-bag": ShoppingBag,
  "matchy-icon-menu": Menu,
  "matchy-icon-profile": User,
  "matchy-icon-notifications": Bell,
  "matchy-icon-calendar": Calendar,
  "matchy-icon-charts": BarChart3,
  "matchy-icon-share": Share2,
  "matchy-icon-location": MapPin,
  "matchy-icon-edit": Pencil,
  "matchy-icon-delete": Trash2,
  "matchy-icon-tags": Tag,
  "matchy-icon-visibility": Eye,
  "matchy-icon-camera": Camera,
  "matchy-icon-hangers": Shirt,
  "matchy-icon-archive": Archive,
  "matchy-icon-lock": Lock,
  "matchy-icon-delivery": Truck,
  "matchy-icon-shield": Shield,
  "matchy-icon-verified": BadgeCheck,
  "matchy-icon-award": Award,
  "matchy-icon-price-tag": BadgeDollarSign,
  /** Example-only mark used in docs samples (like/wishlist). */
  "matchy-icon-heart": Heart,
  /** Swipe deck — skip / dislike. */
  "matchy-icon-close": X,
  /** Swipe deck — undo last action. */
  "matchy-icon-undo": RotateCcw,
} as const satisfies Record<string, LucideIcon>

export type MatchyIconToken = keyof typeof matchyIcons

const sizeClassName: Record<MatchyIconSize, string> = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
}

export function MatchyIcon({
  token,
  size = "lg",
  color = "default",
  className,
  strokeWidth = 1.75,
  ...props
}: {
  token: MatchyIconToken
  size?: MatchyIconSize
  color?: MatchyIconColor
} & Omit<LucideProps, "ref">) {
  const Icon = matchyIcons[token]

  return (
    <Icon
      className={cn(sizeClassName[size], matchyIconColors[color], className)}
      strokeWidth={strokeWidth}
      {...props}
    />
  )
}
