import { DocsPage } from "@/components/docs/docs-page"

export function WayOfWorkPage() {
  return (
    <DocsPage
      section="Get Started"
      title="Way of Work"
      titleId="way-of-work"
      description="Ropstar needs to reach Product Market Fit fast, so Matchy can't afford to deliberate over every foundational decision — speed matters more than perfecting each detail from scratch."
      toc={[
        { id: "adopt-heading", label: "Industry standards" },
        { id: "invest-heading", label: "Custom effort" },
        { id: "accessibility-heading", label: "Accessibility" },
      ]}
    >
      <div className="mt-10 max-w-3xl space-y-10">
        <section aria-labelledby="adopt-heading">
          <h2
            id="adopt-heading"
            className="scroll-mt-8 text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Where we adopt industry standards.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-pretty">
            For foundational, non-differentiating decisions — spacing scale,
            corner radii, elevation, motion timing — Matchy follows established
            industry conventions (the same 4px grid, easing curves, and shadow
            logic used across most modern design systems) rather than inventing
            new ones from scratch. This includes borrowing the reasoning from{" "}
            <a
              href="https://gestalt.pinterest.systems/"
              className="font-medium underline underline-offset-4"
            >
              Gestalt
            </a>
            , Pinterest&apos;s own open-source design system, which uses a 4px
            unit it calls a &quot;boint.&quot; These are solved problems —
            there&apos;s no need to reinvent them.
          </p>
        </section>

        <section aria-labelledby="invest-heading">
          <h2
            id="invest-heading"
            className="scroll-mt-8 text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Where we invest custom effort.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-pretty">
            Time and iteration go into what actually differentiates Matchy as a
            product: the color and typography system, the brand principles, and
            the core interactions (swipe deck, marketplace, seller stories).
          </p>
        </section>

        <section aria-labelledby="accessibility-heading">
          <h2
            id="accessibility-heading"
            className="scroll-mt-8 text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Accessibility is a default, not an extra step.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-pretty">
            Every foundation — spacing, typography, color, motion — is built to
            meet WCAG standards from the start (minimum touch targets, minimum
            text sizes, contrast ratios, and support for a system setting people
            with motion sensitivity turn on to reduce or remove animations).
            This isn&apos;t treated as a nice-to-have added later; it&apos;s
            part of how each foundation is defined in the first place.
          </p>
        </section>
      </div>
    </DocsPage>
  )
}
