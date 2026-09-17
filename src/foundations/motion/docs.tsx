import { DocsPage } from "@/components/docs/docs-page"
import { FoundationRow } from "@/foundations/foundation-row"

const durations = [
  {
    token: "matchy-motion-fast",
    previewClass: "matchy-motion-preview matchy-motion-preview-fast",
    value: "120ms",
    use: "Micro-interactions (button press, toggle)",
  },
  {
    token: "matchy-motion-base",
    previewClass: "matchy-motion-preview matchy-motion-preview-base",
    value: "200ms",
    use: "Standard transitions (hover, tab switch)",
  },
  {
    token: "matchy-motion-slow",
    previewClass: "matchy-motion-preview matchy-motion-preview-slow",
    value: "320ms",
    use: "Modals, sheets, page transitions",
  },
  {
    token: "matchy-motion-instant",
    previewClass: "matchy-motion-preview matchy-motion-preview-instant",
    value: "0ms (transition: none)",
    use: "Real-time gesture feedback (swipe drag, press states mid-gesture)",
  },
] as const

const easings = [
  {
    token: "matchy-easing-standard",
    previewClass: "matchy-motion-preview matchy-motion-preview-base",
    value: "cubic-bezier(0.4, 0, 0.2, 1)",
    use: "Default for most transitions",
  },
  {
    token: "matchy-easing-enter",
    previewClass: "matchy-motion-preview matchy-motion-preview-enter",
    value: "ease-out",
    use: "Elements entering the screen",
  },
  {
    token: "matchy-easing-exit",
    previewClass: "matchy-motion-preview matchy-motion-preview-exit",
    value: "ease-in",
    use: "Elements leaving the screen",
  },
] as const

export function MotionPage() {
  return (
    <DocsPage
      section="Foundations"
      title="Motion"
      titleId="motion"
      description={
        <p className="text-lg leading-relaxed">
          Standard, predictable timing across interactions — see{" "}
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
        { id: "duration-heading", label: "Duration" },
        { id: "easing-heading", label: "Easing" },
        { id: "motion-a11y-heading", label: "Accessibility" },
      ]}
    >
      <section className="mt-10" aria-labelledby="duration-heading">
        <h2
          id="duration-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Duration
        </h2>
        <div className="mt-4">
          {durations.map((item) => (
            <FoundationRow
              key={item.token}
              token={item.token}
              use={item.use}
              value={item.value}
            >
              <div className="h-8">
                <div className={item.previewClass} aria-hidden="true" />
              </div>
            </FoundationRow>
          ))}
        </div>
      </section>

      <section className="mt-14" aria-labelledby="easing-heading">
        <h2
          id="easing-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Easing
        </h2>
        <div className="mt-4">
          {easings.map((item) => (
            <FoundationRow
              key={item.token}
              token={item.token}
              use={item.use}
              value={item.value}
            >
              <div className="h-8">
                <div className={item.previewClass} aria-hidden="true" />
              </div>
            </FoundationRow>
          ))}
        </div>
      </section>

      <section className="mt-14" aria-labelledby="motion-a11y-heading">
        <h2
          id="motion-a11y-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Accessibility
        </h2>
        <p className="mt-3 text-base leading-relaxed">
          Respect <code>prefers-reduced-motion</code> — the system setting
          people with motion sensitivity turn on to reduce or remove animations
          — by disabling or shortening decorative animation (page transitions,
          parallax) for users who have it on, but keep essential functional
          feedback (e.g. the swipe card&apos;s response to a drag) since
          removing it would break the core interaction.
        </p>
        <p className="mt-3 text-base leading-relaxed">
          The samples above stop moving when reduced motion is on. Swipe-deck
          drag feedback should still respond to the gesture.
        </p>
      </section>
    </DocsPage>
  )
}
