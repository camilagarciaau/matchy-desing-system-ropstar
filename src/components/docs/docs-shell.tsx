import type { ReactNode } from "react"

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

const navSections: {
  title: string
  items: { label: string; href: string; page: DocsPageId }[]
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
    items: [],
  },
  {
    title: "Patterns",
    items: [],
  },
  {
    title: "Team Support",
    items: [],
  },
]

export function DocsShell({
  currentPage,
  children,
}: {
  currentPage: DocsPageId
  children: ReactNode
}) {
  return (
    <div className="min-h-svh max-w-full overflow-x-clip bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="mx-auto grid min-h-svh w-full max-w-7xl grid-cols-1 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)]">
        <aside className="max-w-full border-b border-border bg-background px-4 py-4 sm:px-6 lg:sticky lg:top-0 lg:h-svh lg:border-r lg:border-b-0 lg:px-5 lg:py-8">
          <p className="text-lg font-semibold tracking-tight">Matchy</p>
          <p className="mt-1 text-sm">Design system for Ropstar</p>
          <nav aria-label="Design system" className="mt-4 space-y-4 lg:mt-8 lg:space-y-6">
            {navSections.map((section) => (
              <div
                key={section.title}
                className={section.items.length === 0 ? "hidden lg:block" : undefined}
              >
                <p className="text-xs font-semibold tracking-wide uppercase">
                  {section.title}
                </p>
                {section.items.length > 0 ? (
                  <ul className="mt-2 space-y-1">
                    {section.items.map((item) => {
                      const current = item.page === currentPage
                      return (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            aria-current={current ? "page" : undefined}
                            className={cn(
                              "block rounded-md px-2 py-1.5 text-sm",
                              current
                                ? "bg-accent font-medium text-accent-foreground"
                                : "hover:bg-accent/60"
                            )}
                          >
                            {item.label}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                ) : (
                  <p className="mt-2 px-2 text-sm">Coming soon</p>
                )}
              </div>
            ))}
          </nav>
        </aside>
        <div className="min-w-0 max-w-full">{children}</div>
      </div>
    </div>
  )
}
