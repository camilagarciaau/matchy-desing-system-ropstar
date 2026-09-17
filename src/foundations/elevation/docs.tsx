import { DocsPage } from "@/components/docs/docs-page"
import { FoundationRow } from "@/foundations/foundation-row"

const elevations = [
  {
    token: "matchy-elevation-0",
    cssVar: "--matchy-elevation-0",
    value: "none",
    use: "Default surface",
    boxShadow: "var(--matchy-elevation-0)",
  },
  {
    token: "matchy-elevation-1",
    cssVar: "--matchy-elevation-1",
    value: "0 1px 2px rgba(0,0,0,0.08)",
    use: "Cards at rest",
    boxShadow: "var(--matchy-elevation-1)",
  },
  {
    token: "matchy-elevation-2",
    cssVar: "--matchy-elevation-2",
    value: "0 4px 8px rgba(0,0,0,0.12)",
    use: "Swipe card (active/top of stack)",
    boxShadow: "var(--matchy-elevation-2)",
  },
  {
    token: "matchy-elevation-3",
    cssVar: "--matchy-elevation-3",
    value: "0 8px 24px rgba(0,0,0,0.16)",
    use: "Modals, sheets",
    boxShadow: "var(--matchy-elevation-3)",
  },
  {
    token: "matchy-elevation-4",
    cssVar: "--matchy-elevation-4",
    value: "0 12px 28px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.10)",
    use: "Full-bleed images with no visible background (swipe product photos)",
    boxShadow: "var(--matchy-elevation-4)",
  },
] as const

export function ElevationPage() {
  return (
    <DocsPage
      section="Foundations"
      title="Elevation"
      titleId="elevation"
      description="Pinterest's Gestalt leans flat — depth comes mostly from warm surface color and generous rounding. Matchy uses slightly more elevation on purpose: the swipe deck needs a physical stacked-cards feel, so a light Material-style scale is used for that interaction, while the rest of the UI stays close to flat."
      toc={[
        { id: "elevation-scale-heading", label: "Scale" },
        { id: "elevation-a11y-heading", label: "Accessibility" },
      ]}
    >
      <section className="mt-10" aria-labelledby="elevation-scale-heading">
        <h2
          id="elevation-scale-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Scale
        </h2>
        <div className="mt-4">
          {elevations.map((item) => (
            <FoundationRow
              key={item.token}
              token={item.token}
              use={item.use}
              value={item.value}
            >
              <div
                className="h-20 w-32 bg-background"
                style={{
                  boxShadow: item.boxShadow,
                  borderRadius:
                    item.token === "matchy-elevation-4"
                      ? "var(--matchy-radius-lg)"
                      : "var(--matchy-radius-md)",
                }}
                aria-hidden="true"
              />
            </FoundationRow>
          ))}
        </div>
      </section>

      <section
        className="mt-14"
        aria-labelledby="elevation-a11y-heading"
      >
        <h2
          id="elevation-a11y-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Accessibility
        </h2>
        <ul className="mt-3 list-disc space-y-3 pl-5 text-base leading-relaxed">
          <li>
            Never use elevation alone to communicate state (e.g. an error card)
            — pair it with color and an icon/label, since shadow differences
            aren&apos;t perceivable to low-vision users.
          </li>
          <li>
            Keep enough contrast between an elevated surface and the background
            behind it so the edge is distinguishable without relying on the
            shadow.
          </li>
        </ul>
      </section>
    </DocsPage>
  )
}
