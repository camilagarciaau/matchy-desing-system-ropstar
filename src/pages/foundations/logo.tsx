import blackInitial from "@/assets/docs/matchy-logo-tokens/black initial.svg"
import blackLogo from "@/assets/docs/matchy-logo-tokens/black logo.svg"
import creamLogo from "@/assets/docs/matchy-logo-tokens/cream logo.svg"
import initialCream from "@/assets/docs/matchy-logo-tokens/initial cream.svg"
import yellowInitial from "@/assets/docs/matchy-logo-tokens/yellow initial.svg"
import { DocsPage } from "@/components/docs/docs-page"
import { FoundationRow } from "@/pages/foundations/foundation-row"
import { cn } from "@/lib/utils"

const monogramVariants = [
  {
    token: "matchy-logo-monogram-leather",
    src: blackInitial,
    use: "Default, on light backgrounds",
    sampleClass: "bg-background",
  },
  {
    token: "matchy-logo-monogram-cream",
    src: initialCream,
    use: "On dark or colored backgrounds",
    sampleClass: "bg-matchy-leather",
  },
  {
    token: "matchy-logo-monogram-yellow",
    src: yellowInitial,
    use: "Accent / marketing",
    sampleClass: "bg-matchy-leather",
  },
] as const

const wordmarkVariants = [
  {
    token: "matchy-logo-wordmark-leather",
    src: blackLogo,
    use: "Default, on light backgrounds",
    sampleClass: "bg-background",
  },
  {
    token: "matchy-logo-wordmark-cream",
    src: creamLogo,
    use: "On dark or colored backgrounds",
    sampleClass: "bg-matchy-leather",
  },
] as const

const usageGuidelines = [
  {
    do: "Use the monogram alone in tight spaces (nav icon, favicon, loading state)",
    dont: "Stretch or distort the logo",
  },
  {
    do: "Use an approved color variant that has enough contrast against its background",
    dont: "Recolor outside the 5 approved files",
  },
  {
    do: "Keep the clear space intact",
    dont: "Add shadows, gradients, or other effects to the logo",
  },
] as const

function LogoSample({
  src,
  alt,
  className,
  imgClassName,
}: {
  src: string
  alt: string
  className?: string
  imgClassName?: string
}) {
  return (
    <div className={cn("inline-flex rounded-md p-4", className)}>
      <img src={src} alt={alt} className={cn("h-auto w-auto", imgClassName)} />
    </div>
  )
}

export function LogoPage() {
  return (
    <DocsPage
      section="Foundations"
      title="Logo"
      titleId="logo"
      description={
        <>
          <p className="text-lg leading-relaxed">
            Distinct from Manrope/Degular typography, which are reserved for UI
            text.
          </p>
          <p className="text-base leading-relaxed">
            The logo moves the same way color and typography do:
            &apos;Ropstar&apos; blends &apos;ropa&apos; (Spanish for clothing)
            with &apos;star&apos;, putting the wearer, not the brand, in the
            spotlight — matching what actually keeps users buying, feeling good
            in their clothes, not a sustainability pitch. The bracketed monogram
            [Я] reads like a garment tag or seal, reinforcing trust in item
            quality, the thing secondhand buyers actually care about.
          </p>
        </>
      }
      toc={[
        { id: "lockup-heading", label: "Lockup" },
        { id: "monogram-heading", label: "Monogram" },
        { id: "color-variants-heading", label: "Color variants" },
        { id: "clear-space-heading", label: "Clear space" },
        { id: "minimum-size-heading", label: "Minimum size" },
        { id: "usage-heading", label: "Usage" },
      ]}
    >
      <section className="mt-10" aria-labelledby="lockup-heading">
        <h2
          id="lockup-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Lockup
        </h2>
        <p className="mt-3 text-base leading-relaxed">
          The primary lockup combines the &quot;ROPSTAR&quot; wordmark with the
          &quot;Я&quot; monogram, set in the brand&apos;s custom logotype.
        </p>
        <FoundationRow
          token="matchy-logo-wordmark"
          use="Primary lockup on light backgrounds"
        >
          <LogoSample
            src={blackLogo}
            alt="ROPSTAR wordmark lockup in black"
            className="bg-background"
            imgClassName="h-8 w-auto sm:h-10"
          />
        </FoundationRow>
      </section>

      <section className="mt-14" aria-labelledby="monogram-heading">
        <h2
          id="monogram-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Monogram
        </h2>
        <p className="mt-3 text-base leading-relaxed">
          Use only where the full wordmark won&apos;t fit or would be illegible
          at that size: favicon, app icon, avatar placeholder, loading state,
          or any UI slot under ~32px wide. If there&apos;s enough room for the
          wordmark to stay legible, use the wordmark instead.
        </p>
        <FoundationRow
          token="matchy-logo-monogram"
          use="Standalone monogram on light backgrounds"
        >
          <LogoSample
            src={blackInitial}
            alt="ROPSTAR Я monogram in black"
            className="bg-background"
            imgClassName="size-12"
          />
        </FoundationRow>
      </section>

      <section
        className="mt-14"
        aria-labelledby="color-variants-heading"
      >
        <h2
          id="color-variants-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Color variants
        </h2>

        <h3 className="mt-8 text-base font-semibold tracking-tight">
          Monogram
        </h3>
        <div className="mt-4">
          {monogramVariants.map((item) => (
            <FoundationRow
              key={item.token}
              token={item.token}
              use={item.use}
            >
              <LogoSample
                src={item.src}
                alt={`${item.token} sample`}
                className={item.sampleClass}
                imgClassName="size-12"
              />
            </FoundationRow>
          ))}
        </div>

        <h3 className="mt-10 text-base font-semibold tracking-tight">
          Wordmark
        </h3>
        <div className="mt-4">
          {wordmarkVariants.map((item) => (
            <FoundationRow
              key={item.token}
              token={item.token}
              use={item.use}
            >
              <LogoSample
                src={item.src}
                alt={`${item.token} sample`}
                className={item.sampleClass}
                imgClassName="h-8 w-auto sm:h-10"
              />
            </FoundationRow>
          ))}
        </div>
        <p className="mt-6 text-base leading-relaxed">
          Only the black and cream variants exist for the full wordmark —
          yellow is a monogram-only accent, not a full lockup color. In core
          product UI (nav bars, headers), stick to black or cream; the yellow
          monogram is for marketing/decorative use only.
        </p>
      </section>

      <section
        className="mt-14"
        aria-labelledby="clear-space-heading"
      >
        <h2
          id="clear-space-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Clear space
        </h2>
        <p className="mt-3 text-base leading-relaxed">
          Keep a minimum clear space around the logo equal to the height of the
          &quot;Я&quot; monogram, on all sides. No other text, icon, or edge
          should sit inside that zone. For example, at the 80px minimum
          wordmark size, that&apos;s roughly 80px of clear space on each side —
          the clear space scales proportionally as the logo scales up or down.
        </p>
        <div className="mt-6 border-b border-border pb-6">
          <div className="rounded-lg bg-muted px-4 py-5">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              Sample
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div
                className="inline-flex border border-dashed border-matchy-leather/40 bg-background"
                style={{ padding: "32px" }}
                aria-hidden="true"
              >
                <img
                  src={blackLogo}
                  alt=""
                  className="h-8 w-auto sm:h-10"
                />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <img
                  src={blackInitial}
                  alt=""
                  className="size-8"
                  aria-hidden="true"
                />
                <span>= clear space on each side</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mt-14"
        aria-labelledby="minimum-size-heading"
      >
        <h2
          id="minimum-size-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Minimum size
        </h2>
        <p className="mt-3 text-base leading-relaxed">
          Don&apos;t scale the full wordmark below the point where
          &quot;ROPSTAR&quot; stays legible (roughly 80px wide in digital
          contexts). Below that, switch to the monogram alone instead of
          shrinking the full lockup further.
        </p>
        <div className="mt-6 border-b border-border pb-6">
          <div className="rounded-lg bg-muted px-4 py-5">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              Sample
            </p>
            <div className="flex flex-wrap items-end gap-8" aria-hidden="true">
              <div className="rounded-md bg-background p-4">
                <img
                  src={blackLogo}
                  alt=""
                  style={{ width: "80px", height: "auto" }}
                />
                <p className="mt-2 font-mono text-[10px] leading-none">
                  80px min wordmark
                </p>
              </div>
              <div className="rounded-md bg-background p-4">
                <img
                  src={blackInitial}
                  alt=""
                  style={{ width: "24px", height: "auto" }}
                />
                <p className="mt-2 font-mono text-[10px] leading-none">
                  below 80px → monogram
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14" aria-labelledby="usage-heading">
        <h2
          id="usage-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Usage
        </h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full table-fixed border-collapse text-left text-sm">
            <caption className="sr-only">Logo do and don&apos;t rules</caption>
            <colgroup>
              <col className="w-1/2" />
              <col className="w-1/2" />
            </colgroup>
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
    </DocsPage>
  )
}
