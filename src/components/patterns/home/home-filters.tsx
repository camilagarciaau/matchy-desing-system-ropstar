import { useState } from "react"

import { Button } from "@/components/ui/button"
import { MatchyIcon, type MatchyIconToken } from "@/foundations/icons"
import { cn } from "@/lib/utils"

import "./home-filters.css"

/**
 * Combinable toggle filter ids. Extend this union (and TOGGLE_FILTERS)
 * when adding chips such as size or category.
 */
type HomeToggleFilterId = "best-prices" | "luxury-brands"

type HomeToggleFilter = {
  id: HomeToggleFilterId
  label: string
  icon: MatchyIconToken
}

/** Toggleable filters only — “All filters” is a non-pressed clear action. */
const TOGGLE_FILTERS: readonly HomeToggleFilter[] = [
  { id: "best-prices", label: "Best prices", icon: "matchy-icon-price-tag" },
  {
    id: "luxury-brands",
    label: "Luxury brands",
    icon: "matchy-icon-award",
  },
]

function activeIdsFromState(
  state: Partial<Record<HomeToggleFilterId, boolean>>
): string[] {
  return TOGGLE_FILTERS.map((filter) => filter.id).filter((id) =>
    Boolean(state[id])
  )
}

export type HomeFiltersProps = {
  /** Fires whenever toggle chips change (including when All filters clears). */
  onFiltersChange?: (activeIds: string[]) => void
  className?: string
}

/**
 * Home filter pills — combinable toggles (aria-pressed). “All filters”
 * clears every active chip and has no pressed state of its own.
 */
export function HomeFilters({ onFiltersChange, className }: HomeFiltersProps) {
  const [activeFilters, setActiveFilters] = useState<
    Partial<Record<HomeToggleFilterId, boolean>>
  >({})

  const commitFilters = (
    next: Partial<Record<HomeToggleFilterId, boolean>>
  ) => {
    setActiveFilters(next)
    onFiltersChange?.(activeIdsFromState(next))
  }

  const clearFilters = () => {
    commitFilters({})
  }

  const toggleFilter = (id: HomeToggleFilterId) => {
    commitFilters({
      ...activeFilters,
      [id]: !activeFilters[id],
    })
  }

  return (
    <div
      className={cn("matchy-home-filters", className)}
      role="toolbar"
      aria-label="Catalog filters"
    >
      <Button
        type="button"
        variant="ghost"
        className="matchy-btn matchy-btn--line matchy-btn--leather matchy-home-filter matchy-label-3"
        onClick={clearFilters}
      >
        <MatchyIcon
          token="matchy-icon-filters"
          size="lg"
          color="default"
          aria-hidden="true"
        />
        <span>All filters</span>
      </Button>

      {TOGGLE_FILTERS.map((filter) => {
        const isActive = Boolean(activeFilters[filter.id])

        return (
          <Button
            key={filter.id}
            type="button"
            variant="ghost"
            pressed={isActive}
            aria-pressed={isActive}
            onClick={() => toggleFilter(filter.id)}
            className={cn(
              "matchy-btn matchy-home-filter matchy-label-3",
              isActive
                ? "matchy-btn--leather matchy-home-filter--active"
                : "matchy-btn--line matchy-btn--leather"
            )}
          >
            <MatchyIcon
              token={filter.icon}
              size="lg"
              color={isActive ? "white" : "default"}
              aria-hidden="true"
            />
            <span>{filter.label}</span>
          </Button>
        )
      })}
    </div>
  )
}
