import type { ReactNode } from "react"

export type DocsTocItem = {
  id: string
  label: string
}

export function DocsPage({
  section,
  title,
  description,
  titleId,
  toc,
  children,
}: {
  section: string
  title: string
  description?: string
  titleId?: string
  toc?: DocsTocItem[]
  children: ReactNode
}) {
  return (
    <main
      id="main-content"
      className="w-full max-w-full min-w-0 overflow-x-clip px-4 py-8 sm:px-6 md:px-8 lg:px-14 lg:py-12"
    >
      <nav aria-label="Breadcrumb" className="text-sm text-foreground">
        <ol className="flex flex-wrap items-center gap-2">
          <li>{section}</li>
          <li aria-hidden="true">/</li>
          <li className="font-medium">{title}</li>
        </ol>
      </nav>
      <header id={titleId} className="mt-6 max-w-3xl scroll-mt-8">
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 text-lg leading-relaxed text-pretty">{description}</p>
        ) : null}
      </header>
      {toc && toc.length > 0 ? (
        <nav aria-label="On this page" className="mt-8 max-w-3xl">
          <p className="text-xs font-semibold tracking-wide uppercase">
            On this page
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="inline-flex rounded-md border border-border bg-background px-2.5 py-1 text-sm hover:bg-accent/60"
                  onClick={(event) => {
                    event.preventDefault()
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
      {children}
    </main>
  )
}
