import type { ReactNode } from "react"

import {
  DocsCodePreview,
  DocsImportBlock,
  DocsPropsTable,
} from "@/components/docs/docs-code-preview"
import { DocsPage } from "@/components/docs/docs-page"
import { LoadingScreen } from "@/components/ui/loading-spinner"
import { fashionLoadingQuotes } from "@/components/patterns/swipe-deck/mock-data"

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

const sampleQuote = fashionLoadingQuotes[0]

export function LoadingPage() {
  return (
    <DocsPage
      section="Components"
      title="Loading"
      titleId="loading"
      toc={[{ id: "loading-screen", label: "LoadingScreen" }]}
    >
      <p className="mt-6 text-base leading-relaxed">
        Brief wait after onboarding: spinner and fashion quote only — no photo
        shell, blur, or scrim. In swipe, nest it as children of{" "}
        <code>ProductCardFace</code> with <code>variant=&quot;blur&quot;</code>.
      </p>

      <ComponentSection id="loading-screen" title="LoadingScreen">
        <Subsection id="loading-screen-preview" title="1. Preview">
          <DocsCodePreview
            className="overflow-hidden rounded-xl border border-border"
            previewClassName="relative flex min-h-48 items-center justify-center bg-matchy-leather p-6"
            caption={
              <>
                <code>matchy-loading</code>
                <br />
                <code>matchy-spinner</code> · <code>matchy-quote</code>
              </>
            }
            preview={
              <div className="relative h-48 w-full max-w-xs">
                <LoadingScreen quote={sampleQuote} />
              </div>
            }
            code={`<LoadingScreen
  quote={{
    quote: "Fashion is the armor to survive the reality of everyday life.",
    attribution: "Bill Cunningham",
  }}
/>

{/* In swipe: */}
<ProductCardFace variant="blur" imageUrl={…} alt={…}>
  <LoadingScreen quote={quote} />
</ProductCardFace>`}
          />
        </Subsection>

        <Subsection id="loading-screen-overview" title="2. Overview">
          <p className="mt-3 text-base leading-relaxed">
            Just the spinner and quote. No background, blur, or product image —
            those come from <code>ProductCardFace</code>{" "}
            <code>variant=&quot;blur&quot;</code> when you nest{" "}
            <code>LoadingScreen</code> as children (same pattern as the meta
            footer). Quote italic is the Foundations → Typography exception.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {(
              [
                {
                  token: "matchy-loading",
                  description: "Positioning layer for spinner + quote only.",
                },
                {
                  token: "matchy-spinner",
                  description: "Circular loading indicator (decorative).",
                },
                {
                  token: "matchy-quote",
                  description:
                    "Italic quote body — Foundations → Typography exception.",
                },
                {
                  token: "matchy-emotional-sm",
                  description: "Quote attribution for every author.",
                },
              ] as const
            ).map((item) => (
              <div
                key={item.token}
                className="overflow-hidden rounded-xl border border-border"
              >
                <div className="border-b border-border bg-muted/40 px-4 py-4">
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

        <Subsection id="loading-screen-import" title="3. Import">
          <DocsImportBlock
            code={`import { LoadingScreen } from "@/components/ui/loading-spinner"`}
          />
        </Subsection>

        <Subsection id="loading-screen-api" title="4. API / Props">
          <DocsPropsTable
            caption="LoadingScreen props"
            rows={[
              {
                name: "quote",
                type: "FashionQuote",
                defaultValue: "(required)",
                description:
                  "{ quote: string; attribution: string }. Attribution uses matchy-emotional-sm.",
              },
            ]}
          />
        </Subsection>

        <Subsection id="loading-screen-a11y" title="5. Accessibility">
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              <strong>Status:</strong> <code>role=&quot;status&quot;</code> with{" "}
              <code>aria-live=&quot;polite&quot;</code> and{" "}
              <code>aria-label=&quot;Loading next item&quot;</code>.
            </p>
            <p>
              <strong>Spinner:</strong>{" "}
              <code>aria-hidden=&quot;true&quot;</code> — decorative; the status
              label carries the meaning.
            </p>
          </div>
        </Subsection>
      </ComponentSection>
    </DocsPage>
  )
}
