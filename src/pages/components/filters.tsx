import type { ReactNode } from "react"

import {
  DocsCodePreview,
  DocsImportBlock,
  DocsPropsTable,
} from "@/components/docs/docs-code-preview"
import { DocsPage } from "@/components/docs/docs-page"
import { HomeFilters } from "@/components/patterns/home/home-filters"

const sectionHeadingClass =
  "scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
const subHeadingClass =
  "mt-8 scroll-mt-48 text-lg font-semibold tracking-tight"

function ComponentSection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="mt-14" aria-labelledby={id}>
      <h2 id={id} className={sectionHeadingClass}>
        {title}
      </h2>
      {children}
    </section>
  )
}

function Subsection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <div className="mt-8">
      <h3 id={id} className={subHeadingClass}>
        {title}
      </h3>
      {children}
    </div>
  )
}

export function FiltersPage() {
  return (
    <DocsPage
      section="Components"
      title="Filters"
      titleId="filters"
      toc={[{ id: "home-filters", label: "HomeFilters" }]}
    >
      <p className="mt-6 text-base leading-relaxed">
        Catalog filter pills for Ropstar Home and Cloth. “All filters” is an
        entry point with no pressed state; toggle chips (Best prices, Luxury
        brands, and future filters) combine independently and fill leather when
        active.
      </p>

      <ComponentSection id="home-filters" title="HomeFilters">
        <Subsection id="home-filters-preview" title="1. Preview">
          <DocsCodePreview
            className="overflow-hidden rounded-xl border border-border"
            previewClassName="bg-muted/40 p-6"
            caption={
              <>
                <code>matchy-home-filters</code>
                <br />
                <code>matchy-home-filter</code> ·{" "}
                <code>matchy-btn--line</code> /{" "}
                <code>matchy-btn--leather</code>
              </>
            }
            preview={<HomeFilters />}
            code={`<HomeFilters />`}
          />
        </Subsection>

        <Subsection id="home-filters-overview" title="2. Overview">
          <p className="mt-3 text-base leading-relaxed">
            A horizontal toolbar of Matchy line buttons. Selection is
            independent across toggle chips — multiple filters can be active at
            once. Choosing “All filters” clears all active toggles. Icons use
            size <code>lg</code> (24×24). Add more chips to{" "}
            <code>TOGGLE_FILTERS</code> with the same independent behavior.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {(
              [
                {
                  token: "matchy-btn--line",
                  description:
                    "Default chip outline. Paired with matchy-btn--leather for the stroke tone.",
                },
                {
                  token: "matchy-btn--leather",
                  description:
                    "Leather tone for outline chips; solid fill when a toggle is active.",
                },
                {
                  token: "matchy-label-3",
                  description: "Chip label typography on every filter pill.",
                },
                {
                  token: "matchy-space-sm",
                  description: "Gap between pills in the toolbar row.",
                },
              ] as const
            ).map((item) => (
              <div
                key={item.token}
                className="overflow-hidden rounded-xl border border-border"
              >
                <div className="border-b border-border bg-muted/40 px-4 py-6">
                  <p className="text-center text-sm">
                    <code>{item.token}</code>
                  </p>
                </div>
                <div className="bg-background px-4 py-3">
                  <p className="text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Subsection>

        <Subsection id="home-filters-import" title="3. Import">
          <DocsImportBlock
            code={`import { HomeFilters } from "@/components/patterns/home/home-filters"`}
          />
          <p className="mt-3 text-base leading-relaxed">
            Styles live in{" "}
            <code>src/components/patterns/home/home-filters.css</code>. Chips
            reuse Matchy button foundations (
            <code>matchy-buttons.css</code>) and icon tokens from Foundations →
            Icons.
          </p>
        </Subsection>

        <Subsection id="home-filters-api" title="4. API / Props">
          <DocsPropsTable
            caption="HomeFilters props"
            rows={[
              {
                name: "onFiltersChange",
                type: "(activeIds: string[]) => void",
                defaultValue: "—",
                description:
                  "Called whenever a toggle chip changes, including when All filters clears the selection. Receives the list of active filter ids (e.g. [\"best-prices\", \"luxury-brands\"]).",
              },
              {
                name: "className",
                type: "string",
                defaultValue: "—",
                description: "Merged onto the matchy-home-filters root.",
              },
            ]}
          />
          <p className="mt-3 text-base leading-relaxed">
            Toggle state is owned internally as a map of active ids. Each chip
            toggles independently (<code>aria-pressed</code>); “All filters”
            clears every active id and never reports pressed. Parents can react
            via <code>onFiltersChange</code> (Ropstar Home uses it to reorder
            the marketplace grid for demos).
          </p>
        </Subsection>

        <Subsection id="home-filters-a11y" title="5. Accessibility">
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              <strong>Toolbar:</strong> the root uses{" "}
              <code>role=&quot;toolbar&quot;</code> with{" "}
              <code>aria-label=&quot;Catalog filters&quot;</code>.
            </p>
            <p>
              <strong>Pressed state:</strong> toggle chips expose{" "}
              <code>aria-pressed</code> when selected; “All filters” never
              reports pressed.
            </p>
            <p>
              <strong>Icons:</strong> filter icons are{" "}
              <code>aria-hidden</code>; the visible label is the accessible
              name.
            </p>
          </div>
        </Subsection>
      </ComponentSection>
    </DocsPage>
  )
}
