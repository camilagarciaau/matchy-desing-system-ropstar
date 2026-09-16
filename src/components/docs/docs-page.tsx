import { useEffect, useState, type ReactNode } from "react"

export type DocsTocItem = {
  id: string
  label: string
}

function DocsPageToc({ toc }: { toc: DocsTocItem[] }) {
  const [activeId, setActiveId] = useState(toc[0]?.id ?? "")
  const tocKey = toc.map((item) => item.id).join("|")

  useEffect(() => {
    if (toc.length === 0) {
      return
    }

    setActiveId(toc[0].id)

    const updateActiveSection = () => {
      const stickyOffset = 200
      let currentId = toc[0].id

      for (const item of toc) {
        const element = document.getElementById(item.id)
        if (!element) {
          continue
        }
        if (element.getBoundingClientRect().top <= stickyOffset) {
          currentId = item.id
        }
      }

      setActiveId((previousId) =>
        previousId === currentId ? previousId : currentId
      )
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
    // tocKey tracks section identity; toc is read from the latest render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tocKey])

  return (
    <nav aria-label="On this page" className="mt-3 w-full">
      <label
        htmlFor="docs-page-toc"
        className="block text-xs font-semibold tracking-wide uppercase"
      >
        On this page
      </label>
      <select
        id="docs-page-toc"
        value={activeId}
        className="mt-2 w-full appearance-none rounded-md border border-border bg-background bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat px-3 py-2 pr-10 text-sm"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23383838' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
        }}
        onChange={(event) => {
          const id = event.target.value
          setActiveId(id)
          document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth", block: "start" })
        }}
      >
        {toc.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </nav>
  )
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
  description?: ReactNode
  titleId?: string
  toc?: DocsTocItem[]
  children?: ReactNode
}) {
  return (
    <main
      id="main-content"
      className="w-full max-w-full min-w-0 px-4 py-8 sm:px-6 md:px-8 lg:px-14 lg:py-12"
    >
      <div className="sticky top-0 z-20 -mx-4 border-b border-border bg-background px-4 py-3 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:-mx-14 lg:px-14">
        <nav aria-label="Breadcrumb" className="text-sm text-foreground">
          <ol className="flex flex-wrap items-center gap-2">
            <li>{section}</li>
            <li aria-hidden="true">/</li>
            <li className="font-medium">{title}</li>
          </ol>
        </nav>
        <h1
          id={titleId}
          className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        >
          {title}
        </h1>
        {toc && toc.length > 0 ? <DocsPageToc toc={toc} /> : null}
      </div>

      {description ? (
        typeof description === "string" ? (
          <p className="mt-6 text-lg leading-relaxed text-pretty">
            {description}
          </p>
        ) : (
          <div className="mt-6 space-y-4 text-pretty">{description}</div>
        )
      ) : null}
      {children}
    </main>
  )
}
