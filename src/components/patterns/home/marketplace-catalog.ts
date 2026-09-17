import blazerDark from "@/assets/docs/matchy-swipe/blazer-dark.png"
import blazerWhite from "@/assets/docs/matchy-swipe/blazer-white.png"
import img1 from "@/assets/docs/matchy-swipe/img1.jpg"
import img2 from "@/assets/docs/matchy-swipe/img2.jpg"
import img3 from "@/assets/docs/matchy-swipe/img3.jpg"
import stripedShirt from "@/assets/docs/matchy-swipe/striped-shirt.png"

export type MarketplaceProduct = {
  id: string
  imageUrl: string
  name: string
  price: string
  /** Intrinsic media height variety for Masonry. */
  aspect: "portrait" | "tall" | "square"
  /** Mock flag for the Luxury brands demo filter. */
  luxury?: boolean
}

/**
 * Marketplace-only inventory — one card per garment.
 * Extra photos (img1–3) stay out of the swipe deck.
 */
export const marketplaceCatalog: MarketplaceProduct[] = [
  {
    id: "mp-01",
    imageUrl: blazerWhite,
    name: "Structured white blazer",
    price: "$42.000",
    aspect: "portrait",
  },
  {
    id: "mp-02",
    imageUrl: blazerDark,
    name: "Classic olive blazer",
    price: "$48.000",
    aspect: "tall",
  },
  {
    id: "mp-03",
    imageUrl: stripedShirt,
    name: "Striped button-up shirt",
    price: "$28.000",
    aspect: "square",
  },
  {
    id: "mp-04",
    imageUrl: img1,
    name: "Multicolor plaid trench",
    price: "$95.000",
    aspect: "tall",
    luxury: true,
  },
  {
    id: "mp-05",
    imageUrl: img2,
    name: "Emerald ruffle gown",
    price: "$120.000",
    aspect: "portrait",
    luxury: true,
  },
  {
    id: "mp-06",
    imageUrl: img3,
    name: "Light-wash denim overalls",
    price: "$55.000",
    aspect: "tall",
  },
]

/** Parse mock price strings like "$42.000" → 42000. */
export function parseMarketplacePrice(price: string): number {
  const digits = price.replace(/[^\d]/g, "")
  return digits ? Number(digits) : 0
}

/**
 * Demo-only catalog ordering for HomeFilters.
 * - best-prices → cheapest first
 * - luxury-brands → luxury items first (and emphasized in the grid)
 * Both can combine.
 */
export function applyMarketplaceFilters(
  catalog: readonly MarketplaceProduct[],
  activeIds: readonly string[]
): MarketplaceProduct[] {
  const bestPrices = activeIds.includes("best-prices")
  const luxuryBrands = activeIds.includes("luxury-brands")
  const items = [...catalog]

  items.sort((a, b) => {
    if (luxuryBrands) {
      const luxuryDelta = Number(Boolean(b.luxury)) - Number(Boolean(a.luxury))
      if (luxuryDelta !== 0) return luxuryDelta
    }
    if (bestPrices) {
      return parseMarketplacePrice(a.price) - parseMarketplacePrice(b.price)
    }
    return 0
  })

  return items
}
