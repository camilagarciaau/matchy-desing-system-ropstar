import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react"
import { MasonryV2 as Masonry } from "gestalt"
import "gestalt/dist/gestalt.css"

import {
  marketplaceCatalog,
  type MarketplaceProduct,
} from "@/components/patterns/home/marketplace-catalog"
import { ProductCardFace } from "@/components/ui/product-card-face"

function measureMasonryHeight(root: HTMLElement) {
  const list = root.querySelector<HTMLElement>('[role="list"]')
  if (!list) return 0

  const listTop = list.getBoundingClientRect().top
  let maxBottom = 0
  list.querySelectorAll<HTMLElement>("[data-grid-item='true']").forEach((item) => {
    const top = item.getBoundingClientRect().top - listTop
    maxBottom = Math.max(maxBottom, top + item.offsetHeight)
  })
  return Math.ceil(maxBottom)
}

export type HomeProductGridProps = {
  products?: readonly MarketplaceProduct[]
  /** When true, luxury mock items get a visual emphasis ring. */
  emphasizeLuxury?: boolean
  onSaved?: () => void
}

/**
 * Pinterest-style marketplace grid via Gestalt Masonry (Home + Cloth).
 * MasonryV2 — required for React 19 measure batches.
 * Grid grows with content; `.matchy-home` (42rem) scrolls to reveal all items.
 */
export function HomeProductGrid({
  products = marketplaceCatalog,
  emphasizeLuxury = false,
  onSaved,
}: HomeProductGridProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  const items = useMemo(() => [...products], [products])

  const getScrollContainer = useCallback(() => {
    const home = rootRef.current?.closest(".matchy-home-scroll")
    if (home instanceof HTMLElement) return home
    return typeof window !== "undefined" ? window : document.body
  }, [])

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const run = () => {
      const next = measureMasonryHeight(root)
      if (next > 0) setHeight(next)
    }

    run()
    const resizeObserver = new ResizeObserver(run)
    resizeObserver.observe(root)
    const mutationObserver = new MutationObserver(run)
    mutationObserver.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style"],
    })
    const raf = requestAnimationFrame(run)
    const t = window.setTimeout(run, 150)

    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(t)
      resizeObserver.disconnect()
      mutationObserver.disconnect()
    }
  }, [items])

  return (
    <div
      ref={rootRef}
      className="matchy-home-product-grid"
      aria-label="Marketplace products"
      style={height > 0 ? { height } : undefined}
    >
      <Masonry
        key={items.map((item) => item.id).join("-")}
        items={items}
        minCols={2}
        columnWidth={160}
        gutterWidth={16}
        layout="flexible"
        scrollContainer={getScrollContainer}
        _measureAll
        renderItem={({ data }: { data: MarketplaceProduct }) => (
          <ProductCardFace
            variant="marketplace"
            imageUrl={data.imageUrl}
            alt={data.name}
            name={data.name}
            price={data.price}
            aspect={data.aspect}
            emphasized={emphasizeLuxury && Boolean(data.luxury)}
            onSaved={onSaved}
          />
        )}
      />
    </div>
  )
}
