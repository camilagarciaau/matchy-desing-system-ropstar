import { useEffect, useId, useState, type ReactNode } from "react"

import { cn } from "@/lib/utils"

export type DocsPageId =
  | "principles"
  | "way-of-work"
  | "color"
  | "typography"
  | "spacing"
  | "radii"
  | "elevation"
  | "motion"
  | "content"
  | "logo"
  | "icons"
  | "buttons"
  | "filters"
  | "product-card"
  | "loading"
  | "story-card"
  | "avatar"
  | "save-toast"
  | "playground"
  | "repo-governance"

type NavItem = { label: string; href: string; page: DocsPageId }

const navSections: {
  title: string
  items: NavItem[]
}[] = [
  {
    title: "Get Started",
    items: [
      { label: "Principles", href: "#principles", page: "principles" },
      { label: "Way of Work", href: "#way-of-work", page: "way-of-work" },
    ],
  },
  {
    title: "Foundations",
    items: [
      { label: "Color", href: "#color", page: "color" },
      { label: "Typography", href: "#typography", page: "typography" },
      { label: "Spacing", href: "#spacing", page: "spacing" },
      { label: "Radii", href: "#radii", page: "radii" },
      { label: "Elevation", href: "#elevation", page: "elevation" },
      { label: "Motion", href: "#motion", page: "motion" },
      { label: "Content", href: "#content", page: "content" },
      { label: "Logo", href: "#logo", page: "logo" },
      { label: "Icons", href: "#icons", page: "icons" },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Buttons", href: "#buttons", page: "buttons" },
      { label: "Filters", href: "#filters", page: "filters" },
      { label: "Loading", href: "#loading", page: "loading" },
      { label: "Avatar", href: "#avatar", page: "avatar" },
      { label: "Product Card", href: "#product-card", page: "product-card" },
      { label: "Story Card", href: "#story-card", page: "story-card" },
      { label: "Save Toast", href: "#save-toast", page: "save-toast" },
    ],
  },
  {
    title: "Patterns",
    items: [
      { label: "Playground", href: "#playground", page: "playground" },
    ],
  },
  {
    title: "Team Support",
    items: [
      {
        label: "Repo governance",
        href: "#repo-governance",
        page: "repo-governance",
      },
    ],
  },
]

function NavSectionDropdown({
  title,
  items,
  currentPage,
}: {
  title: string
  items: NavItem[]
  currentPage: DocsPageId
}) {
  const containsCurrent = items.some((item) => item.page === currentPage)
  const [open, setOpen] = useState(containsCurrent)
  const reactId = useId()
  const panelId = `${reactId}-panel`
  const buttonId = `${reactId}-button`

  useEffect(() => {
    if (containsCurrent) {
      setOpen(true)
    }
  }, [containsCurrent])

  if (items.length === 0) {
    return (
      <div className="hidden lg:block">
        <p className="px-3 text-sm font-semibold tracking-wide text-foreground">
          {title}
        </p>
        <p className="mt-1 px-3 text-sm text-muted-foreground">Coming soon</p>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-border bg-background">
      <button
        id={buttonId}
        type="button"
        className={cn(
          "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold tracking-wide",
          "min-h-[var(--matchy-touch-target-min)]",
          "hover:bg-accent/60",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          open && "rounded-b-none border-b border-border bg-accent/40"
        )}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" && !open) {
            event.preventDefault()
            setOpen(true)
          }
          if (event.key === "Escape" && open) {
            event.preventDefault()
            setOpen(false)
          }
        }}
      >
        <span>{title}</span>
        <span
          className={cn(
            "inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-background",
            "text-foreground"
          )}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 16 16"
            className={cn(
              "size-4 transition-transform duration-200",
              open && "rotate-180"
            )}
          >
            <path
              fill="currentColor"
              d="M4.47 5.97a.75.75 0 0 1 1.06 0L8 8.44l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06Z"
            />
          </svg>
        </span>
        <span className="sr-only">
          {open ? "Collapse section" : "Expand section"}
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className={open ? "px-1.5 py-1.5" : undefined}
      >
        {open ? (
          <ul className="space-y-0.5">
            {items.map((item) => {
              const current = item.page === currentPage
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "flex min-h-10 items-center rounded-md px-3 py-2 text-sm",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      current
                        ? "bg-accent font-medium text-accent-foreground"
                        : "text-foreground hover:bg-accent/60"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

export function DocsShell({
  currentPage,
  children,
}: {
  currentPage: DocsPageId
  children: ReactNode
}) {
  return (
    <div className="min-h-svh max-w-full bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="mx-auto grid min-h-svh w-full max-w-7xl grid-cols-1 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)]">
        <aside className="max-w-full overflow-y-auto border-b border-border bg-background px-4 py-4 sm:px-6 lg:sticky lg:top-0 lg:h-svh lg:border-r lg:border-b-0 lg:px-5 lg:py-8">
          <p className="text-lg font-semibold tracking-tight">Matchy</p>
          <p className="mt-1 text-sm">Design system for Ropstar</p>
          <nav
            aria-label="Design system"
            className="mt-5 space-y-2 lg:mt-8"
          >
            {navSections.map((section) => (
              <NavSectionDropdown
                key={section.title}
                title={section.title}
                items={section.items}
                currentPage={currentPage}
              />
            ))}
          </nav>
        </aside>
        <div className="min-w-0 max-w-full">{children}</div>
      </div>
    </div>
  )
}
