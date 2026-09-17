import { DocsPage } from "@/components/docs/docs-page"
import { FoundationRow } from "@/foundations/foundation-row"

const spacingScale = [
  {
    token: "matchy-space-xs",
    cssVar: "--matchy-space-xs",
    value: "4px",
    use: "Tight inset",
  },
  {
    token: "matchy-space-sm",
    cssVar: "--matchy-space-sm",
    value: "8px",
    use: "Gap between tappable elements",
  },
  {
    token: "matchy-space-md",
    cssVar: "--matchy-space-md",
    value: "16px",
    use: "Mobile gutter / default spacing",
  },
  {
    token: "matchy-space-lg",
    cssVar: "--matchy-space-lg",
    value: "24px",
    use: "Desktop gutter",
  },
  {
    token: "matchy-space-xl",
    cssVar: "--matchy-space-xl",
    value: "32px",
    use: "Section gap",
  },
  {
    token: "matchy-space-2xl",
    cssVar: "--matchy-space-2xl",
    value: "48px",
    use: "Large section gap",
  },
  {
    token: "matchy-space-3xl",
    cssVar: "--matchy-space-3xl",
    value: "64px",
    use: "Page-level gap",
  },
] as const

export function SpacingPage() {
  return (
    <DocsPage
      section="Foundations"
      title="Spacing"
      titleId="spacing"
      description={
        <p className="text-lg leading-relaxed">
          Based on a 4px grid, matching the 4px unit (&apos;boint&apos;) used by
          Gestalt, Pinterest&apos;s own open-source design system — see{" "}
          <a
            href="#way-of-work"
            className="font-medium underline underline-offset-4"
          >
            Way of Work
          </a>{" "}
          for why foundational decisions like this borrow industry standards
          instead of reinventing them.
        </p>
      }
      toc={[
        { id: "scale-heading", label: "Scale" },
        { id: "layout-heading", label: "Layout" },
        { id: "gutter-heading", label: "Gutter" },
        { id: "grid-heading", label: "Grid" },
        { id: "spacing-a11y-heading", label: "Accessibility" },
      ]}
    >
      <section className="mt-10" aria-labelledby="scale-heading">
        <h2
          id="scale-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Scale
        </h2>
        <p className="mt-2 text-base leading-relaxed">
          Every spacing value is a multiple of 4.
        </p>
        <div className="mt-4">
          {spacingScale.map((item) => (
            <FoundationRow
              key={item.token}
              token={item.token}
              use={item.use}
              value={item.value}
            >
              <div className="flex items-center pt-4" aria-hidden="true">
                <div className="size-6 shrink-0 rounded-sm bg-matchy-disruptive-lilac" />
                <div
                  className="relative flex h-6 items-center"
                  style={{ width: `var(${item.cssVar})` }}
                >
                  <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-foreground" />
                  <div className="absolute top-1/2 left-0 h-2.5 w-px -translate-y-1/2 bg-foreground" />
                  <div className="absolute top-1/2 right-0 h-2.5 w-px -translate-y-1/2 bg-foreground" />
                  <span className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] leading-none text-foreground">
                    {item.value}
                  </span>
                </div>
                <div className="size-6 shrink-0 rounded-sm bg-matchy-disruptive-lilac" />
              </div>
            </FoundationRow>
          ))}
        </div>
      </section>

      <section className="mt-14" aria-labelledby="layout-heading">
        <h2
          id="layout-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Layout
        </h2>

        <h3
          id="gutter-heading"
          className="scroll-mt-48 text-base font-semibold tracking-tight"
        >
          Gutter
        </h3>
        <FoundationRow
          token="matchy-gutter-mobile"
          use="Mobile page gutter"
          value="(16px)"
        >
          <div
            className="border border-border bg-background"
            style={{ paddingInline: "var(--matchy-gutter-mobile)" }}
          >
            <div className="h-10 bg-matchy-panna-yellow" aria-hidden="true" />
          </div>
        </FoundationRow>
        <FoundationRow
          token="matchy-gutter-desktop"
          use="Desktop page gutter"
          value="(24px)"
        >
          <div
            className="border border-border bg-background"
            style={{ paddingInline: "var(--matchy-gutter-desktop)" }}
          >
            <div className="h-10 bg-matchy-panna-yellow" aria-hidden="true" />
          </div>
        </FoundationRow>
        <FoundationRow
          token="matchy-content-max-width"
          use="Max content width"
          value="1200px"
        >
          <div
            className="border border-border bg-background px-6 py-3"
            aria-hidden="true"
          >
            <div
              className="mx-auto h-10 bg-matchy-panna-yellow"
              style={{ width: "min(100%, calc(var(--matchy-content-max-width) * 0.22))" }}
            />
          </div>
        </FoundationRow>

        <h3
          id="grid-heading"
          className="mt-10 scroll-mt-48 text-base font-semibold tracking-tight"
        >
          Grid
        </h3>
        <FoundationRow
          token="matchy-grid-columns-mobile"
          use="Mobile grid"
          value="4 columns"
        >
          <div className="grid grid-cols-4 gap-1">
            {Array.from({ length: 4 }, (_, index) => (
              <div
                key={index}
                className="h-8 bg-matchy-leather"
                aria-hidden="true"
              />
            ))}
          </div>
        </FoundationRow>
        <FoundationRow
          token="matchy-grid-columns-tablet"
          use="Tablet grid"
          value="8 columns"
        >
          <div className="grid grid-cols-8 gap-1">
            {Array.from({ length: 8 }, (_, index) => (
              <div
                key={index}
                className="h-8 bg-matchy-leather"
                aria-hidden="true"
              />
            ))}
          </div>
        </FoundationRow>
        <FoundationRow
          token="matchy-grid-columns-desktop"
          use="Desktop grid"
          value="12 columns"
        >
          <div className="grid grid-cols-12 gap-1">
            {Array.from({ length: 12 }, (_, index) => (
              <div
                key={index}
                className="h-8 bg-matchy-leather"
                aria-hidden="true"
              />
            ))}
          </div>
        </FoundationRow>
      </section>

      <section className="mt-14" aria-labelledby="spacing-a11y-heading">
        <h2
          id="spacing-a11y-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Accessibility
        </h2>
        <ul className="mt-3 list-disc space-y-3 pl-5 text-base leading-relaxed">
          <li>
            Interactive elements need a minimum touch target of 44×44px (WCAG
            2.5.5/2.5.8), even if the visible icon or label is smaller — pad the
            tap area, don&apos;t shrink it.
          </li>
          <li>
            Keep at least <code>matchy-space-sm</code> (8px) between adjacent
            tappable elements (e.g. like/dislike buttons) to avoid accidental
            taps.
          </li>
        </ul>
        <FoundationRow
          token="matchy-touch-target-min"
          use="Minimum tap area"
          value="44×44px"
        >
          <button
            type="button"
            className="inline-flex items-center justify-center bg-matchy-panna-yellow text-foreground"
            style={{
              minWidth: "var(--matchy-touch-target-min)",
              minHeight: "var(--matchy-touch-target-min)",
            }}
          >
            +
          </button>
        </FoundationRow>
      </section>
    </DocsPage>
  )
}
