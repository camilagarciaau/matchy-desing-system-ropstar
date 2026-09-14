import { DocsPage } from "@/components/docs/docs-page"
import { FoundationRow } from "@/pages/foundations/foundation-row"

const radii = [
  {
    token: "matchy-radius-none",
    cssVar: "--matchy-radius-none",
    value: "0px",
    use: "Full-bleed images",
  },
  {
    token: "matchy-radius-sm",
    cssVar: "--matchy-radius-sm",
    value: "8px",
    use: "Chips, tags, small badges",
  },
  {
    token: "matchy-radius-md",
    cssVar: "--matchy-radius-md",
    value: "12px",
    use: "Cards, inputs",
  },
  {
    token: "matchy-radius-lg",
    cssVar: "--matchy-radius-lg",
    value: "16px",
    use: "Modals, sheets",
  },
  {
    token: "matchy-radius-full",
    cssVar: "--matchy-radius-full",
    value: "9999px",
    use: "Pills, avatars, primary CTAs",
  },
] as const

export function RadiiPage() {
  return (
    <DocsPage
      section="Foundations"
      title="Radii"
      titleId="radii"
      description="Consistent corner rounding across components."
      toc={[
        { id: "radii-scale-heading", label: "Scale" },
        { id: "radii-a11y-heading", label: "Accessibility" },
      ]}
    >
      <section className="mt-10 max-w-3xl" aria-labelledby="radii-scale-heading">
        <h2
          id="radii-scale-heading"
          className="scroll-mt-8 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Scale
        </h2>
        <div className="mt-4">
          {radii.map((item) => (
            <FoundationRow
              key={item.token}
              token={item.token}
              use={item.use}
              value={item.value}
            >
              <div
                className="size-20 bg-matchy-leather"
                style={{ borderRadius: `var(${item.cssVar})` }}
                aria-hidden="true"
              />
            </FoundationRow>
          ))}
        </div>
      </section>

      <section className="mt-14 max-w-3xl" aria-labelledby="radii-a11y-heading">
        <h2
          id="radii-a11y-heading"
          className="scroll-mt-8 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Accessibility
        </h2>
        <p className="mt-3 text-base leading-relaxed">
          Radius has no direct a11y impact, but if a container uses{" "}
          <code>overflow: hidden</code> with a large radius, make sure the
          focus ring on any element inside it isn&apos;t visually clipped.
        </p>
      </section>
    </DocsPage>
  )
}
