import typefaceReference from "@/assets/docs/matchy-typography-tokens/original-typefaces-reference.png"
import { DocsPage } from "@/components/docs/docs-page"
import { FoundationRow } from "@/pages/foundations/foundation-row"
import {
  degularStyles,
  halaneyStyles,
  typeScale,
  usageGuidelines,
} from "@/foundations/typography/styles"

function TypeRow({
  role,
  token,
  className,
  size,
}: {
  role: string
  token: string
  className: string
  size: string
}) {
  const liveText = role.trim().split(/\s+/).at(-1) ?? role

  return (
    <FoundationRow token={token} use={role} value={size}>
      <p className={className}>{liveText}</p>
    </FoundationRow>
  )
}

export function TypographyPage() {
  return (
    <DocsPage
      section="Foundations"
      title="Typography"
      titleId="typography"
      description="Matchy uses two typeface families with distinct, complementary roles: Degular for the functional interface, and Halaney for specific emotional moments."
      toc={[
        { id: "rationale-heading", label: "Rationale" },
        { id: "free-fonts-heading", label: "Free fonts" },
        { id: "type-styles-heading", label: "Type styles" },
        { id: "usage-heading", label: "Usage guidelines" },
        { id: "accessibility-heading", label: "Accessibility" },
      ]}
    >
      <section className="mt-10" aria-labelledby="rationale-heading">
        <h2
          id="rationale-heading"
          className="scroll-mt-8 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Rationale
        </h2>
        <figure className="mt-6 w-[60%] max-w-full overflow-hidden rounded-lg border border-border bg-card">
          <img
            src={typefaceReference}
            alt="Degular and Halaney typefaces, shown as Aa typeface specimens"
            className="block h-auto w-full bg-white"
          />
        </figure>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed">
          <p>
            <strong>Degular</strong> is the functional voice of the system —
            used across the operational interface: pricing, navigation,
            buttons, labels, and reading text. Its clean geometry and strong
            legibility at small sizes support the{" "}
            <strong>Intuitive Accessibility</strong> principle: clear,
            scannable information with no friction.
          </p>
          <p>
            <strong>Halaney</strong> is the emotional voice of the brand —
            reserved for specific moments of discovery and connection (welcome,
            a match, a featured seller story).
          </p>
        </div>
      </section>

      <section className="mt-14" aria-labelledby="free-fonts-heading">
        <h2
          id="free-fonts-heading"
          className="scroll-mt-8 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Free fonts
        </h2>
        <p className="mt-2 max-w-3xl text-base leading-relaxed">
          Degular and Halaney are paid and not yet available. These fallbacks
          can be used in the meantime (commercial use allowed), installed from
          Google Fonts or <code>@fontsource</code>.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="text-lg font-semibold tracking-tight">
              Degular replacement → Manrope
            </h3>
            <p className="mt-2 text-base leading-relaxed">
              Geometric sans fallback for Degular. Variable font, weights
              200–800 — covers Regular and Bold without installing multiple
              files, and stays legible at small UI sizes.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="text-lg font-semibold tracking-tight">
              Halaney replacement → Grand Hotel
            </h3>
            <p className="mt-2 text-base leading-relaxed">
              Connecting script, elegant and editorial — the closest mood to
              Matchy&apos;s emotional moments.
            </p>
          </div>
        </div>
        <h3 className="mt-8 text-lg font-semibold tracking-tight">Install</h3>
        <pre className="mt-3 overflow-x-auto rounded-lg border border-border bg-muted p-4 text-sm">
          <code>{`npm install @fontsource-variable/manrope
npm install @fontsource/grand-hotel`}</code>
        </pre>
        <pre className="mt-3 overflow-x-auto rounded-lg border border-border bg-muted p-4 text-sm">
          <code>{`// main.tsx or your app's entry point
import "@fontsource-variable/manrope"
import "@fontsource/grand-hotel"`}</code>
        </pre>
      </section>

      <section className="mt-14" aria-labelledby="type-styles-heading">
        <h2
          id="type-styles-heading"
          className="scroll-mt-8 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Type styles
        </h2>
        <p className="mt-2 max-w-3xl text-base leading-relaxed">
          Each style is shown as live text, then its token, purpose, and size.
        </p>
        <h3 className="mt-10 text-lg font-semibold tracking-tight">
          Degular — Manrope fallback
        </h3>
        <p className="mt-2 max-w-3xl text-base leading-relaxed">
          Functional voice: pricing, navigation, buttons, labels, and reading
          text.
        </p>
        <div className="mt-4 max-w-3xl">
          {degularStyles.map((item) => (
            <TypeRow key={item.token} {...item} />
          ))}
        </div>
        <h3 className="mt-10 text-lg font-semibold tracking-tight">
          Halaney — Grand Hotel fallback
        </h3>
        <p className="mt-2 max-w-3xl text-base leading-relaxed">
          Reserved for short emotional phrases (1–5 words).
        </p>
        <div className="mt-4 max-w-3xl">
          {halaneyStyles.map((item) => (
            <TypeRow key={item.token} {...item} />
          ))}
        </div>
      </section>

      <section className="mt-14" aria-labelledby="usage-heading">
        <h2
          id="usage-heading"
          className="scroll-mt-8 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Usage guidelines
        </h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="sr-only">
              Typography do and don&apos;t guidelines
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="bg-matchy-background-success px-3 py-3 font-semibold text-foreground"
                >
                  Do
                </th>
                <th
                  scope="col"
                  className="bg-matchy-background-error px-3 py-3 font-semibold text-matchy-typography-contrast"
                >
                  Don&apos;t
                </th>
              </tr>
            </thead>
            <tbody>
              {usageGuidelines.map((row) => (
                <tr key={row.do} className="border-t border-border">
                  <td className="px-3 py-3 align-top text-pretty">{row.do}</td>
                  <td className="px-3 py-3 align-top text-pretty">{row.dont}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14" aria-labelledby="accessibility-heading">
        <h2
          id="accessibility-heading"
          className="scroll-mt-8 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Accessibility
        </h2>
        <p className="mt-2 max-w-3xl text-base leading-relaxed">
          The accessibility standard (WCAG) recommends a minimum of 16px for
          reading text, only allowing smaller sizes for short labels or
          secondary text — never for paragraphs.
        </p>
        <h3 className="mt-8 text-lg font-semibold tracking-tight">
          Type scale
        </h3>
        <p className="mt-2 max-w-3xl text-base leading-relaxed">
          Headlines use 2 levels per family for clear, simple hierarchy. All
          reading text sits at or above the 16px accessibility minimum —
          smaller sizes are reserved for short, secondary labels.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[52rem] border-collapse text-left text-sm">
            <caption className="sr-only">
              Matchy type scale with font, weight, size, letter spacing, and
              line height
            </caption>
            <thead className="bg-muted">
              <tr>
                <th className="px-3 py-3 font-semibold">Style</th>
                <th className="px-3 py-3 font-semibold">Token</th>
                <th className="px-3 py-3 font-semibold">Font</th>
                <th className="px-3 py-3 font-semibold">Weight</th>
                <th className="px-3 py-3 font-semibold">Size</th>
                <th className="px-3 py-3 font-semibold">Letter spacing</th>
                <th className="px-3 py-3 font-semibold">Line height</th>
              </tr>
            </thead>
            <tbody>
              {typeScale.map((row) => (
                <tr key={row.token} className="border-t border-border">
                  <td className="px-3 py-3 align-top">{row.style}</td>
                  <td className="px-3 py-3 align-top font-mono text-xs">
                    {row.token}
                  </td>
                  <td className="px-3 py-3 align-top">{row.font}</td>
                  <td className="px-3 py-3 align-top">{row.weight}</td>
                  <td className="px-3 py-3 align-top font-mono text-xs">
                    {row.size}
                  </td>
                  <td className="px-3 py-3 align-top font-mono text-xs">
                    {row.letterSpacing}
                  </td>
                  <td className="px-3 py-3 align-top font-mono text-xs">
                    {row.lineHeight}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="mt-8 text-lg font-semibold tracking-tight">
          Exceptions that remain below 16px, and why
        </h3>
        <ul className="mt-3 max-w-3xl list-disc space-y-3 pl-5 text-base leading-relaxed">
          <li>
            <strong>Label 3 (14px)</strong> — used only for very short
            secondary metadata (a tag, a product condition, a date), never for
            a full sentence. At 1–3 words, the legibility risk is low, and it
            lets tertiary information stay visually out of the way of primary
            content.
          </li>
          <li>
            <strong>Button 2 (12px)</strong> — reserved for compact, secondary
            actions (chips, small controls) where space is limited and the
            label is 1–2 words. It&apos;s the floor of the scale — it
            shouldn&apos;t go any smaller.
          </li>
          <li>
            <strong>Halaney (Emotional Large / Small)</strong> — both sizes
            pass the 16px minimum, but a script typeface reduces legibility
            even at large sizes. Regardless of size, it should always be
            limited to very short phrases.
          </li>
        </ul>
      </section>
    </DocsPage>
  )
}
