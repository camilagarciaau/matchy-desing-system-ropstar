import { useEffect, useId, useMemo, useRef, useState } from "react"

import { Button } from "@/components/button/button"
import { Input } from "@/components/ui/input"
import { HomeBanners } from "@/patterns/home/home-banners"
import { HomeFilters } from "@/components/filters/home-filters"
import { HomeProductGrid } from "@/patterns/home/home-product-grid"
import { HomeSaveToast } from "@/components/save-toast/home-save-toast"
import { HomeStories } from "@/patterns/home/home-stories"
import {
  applyMarketplaceFilters,
  marketplaceCatalog,
} from "@/patterns/home/marketplace-catalog"
import { MatchyIcon, type MatchyIconToken } from "@/foundations/icons"
import { cn } from "@/lib/utils"

import "./home.css"

export type HomeSection = "home" | "cloth" | "profile" | "cart" | "search"

const NAV_ITEMS: {
  id: HomeSection
  label: string
  icon: MatchyIconToken
}[] = [
  { id: "home", label: "Home", icon: "matchy-icon-home" },
  { id: "cloth", label: "Cloth", icon: "matchy-icon-hangers" },
  { id: "search", label: "Search", icon: "matchy-icon-search" },
  { id: "profile", label: "Profile", icon: "matchy-icon-profile" },
  { id: "cart", label: "Cart", icon: "matchy-icon-cart" },
]

export type RopstarHomeProps = {
  className?: string
}

/**
 * Ropstar Home shell — sticky Notion-style top nav for catalog browsing.
 */
export function RopstarHome({ className }: RopstarHomeProps) {
  const [activeSection, setActiveSection] = useState<HomeSection>("home")
  const [saveToastOpen, setSaveToastOpen] = useState(false)
  const [activeFilterIds, setActiveFilterIds] = useState<string[]>([])
  const searchId = useId()
  const scrollRef = useRef<HTMLDivElement>(null)

  const filteredProducts = useMemo(
    () => applyMarketplaceFilters(marketplaceCatalog, activeFilterIds),
    [activeFilterIds]
  )

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "auto" })
  }, [activeSection])

  useEffect(() => {
    if (!saveToastOpen) return
    const timer = window.setTimeout(() => setSaveToastOpen(false), 6000)
    return () => window.clearTimeout(timer)
  }, [saveToastOpen])

  return (
    <div className={cn("matchy-home", className)}>
      <div ref={scrollRef} className="matchy-home-scroll">
        <nav className="matchy-home-nav" aria-label="Ropstar Home">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id

            return (
              <Button
                key={item.id}
                type="button"
                variant="ghost"
                label={isActive ? undefined : item.label}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActiveSection(item.id)}
                className={cn(
                  "matchy-btn matchy-btn-expand matchy-home-nav-item matchy-label-3",
                  isActive && "matchy-btn-expand--active",
                  isActive &&
                    (item.id === "cart"
                      ? "matchy-btn--purchase"
                      : "matchy-btn--leather")
                )}
              >
                <MatchyIcon
                  token={item.icon}
                  size="md"
                  color={
                    isActive && item.id !== "cart" ? "white" : "default"
                  }
                  aria-hidden="true"
                />
                {isActive ? <span>{item.label}</span> : null}
              </Button>
            )
          })}
        </nav>

        <div className="matchy-home-stack">
          {activeSection === "home" ? (
            <>
              <HomeBanners />
              <HomeStories />
            </>
          ) : null}

          {activeSection === "home" || activeSection === "cloth" ? (
            <div className="matchy-home-catalog">
              <HomeFilters onFiltersChange={setActiveFilterIds} />
              <HomeProductGrid
                products={filteredProducts}
                emphasizeLuxury={activeFilterIds.includes("luxury-brands")}
                onSaved={() => setSaveToastOpen(true)}
              />
            </div>
          ) : null}

          {activeSection === "search" ? (
            <div className="matchy-home-search">
              <label className="sr-only" htmlFor={searchId}>
                Search the catalog
              </label>
              <Input
                id={searchId}
                type="search"
                placeholder="Search Ropstar…"
                autoFocus
                className="matchy-home-search-input matchy-label-3 shadow-none"
              />
            </div>
          ) : null}

          {activeSection === "profile" ? (
            <p className="matchy-paragraph text-matchy-typography-default">
              Your saved picks will show up here.
            </p>
          ) : null}
        </div>
      </div>

      {saveToastOpen ? (
        <HomeSaveToast
          onSeeProfile={() => {
            setSaveToastOpen(false)
            setActiveSection("profile")
          }}
        />
      ) : null}
    </div>
  )
}
