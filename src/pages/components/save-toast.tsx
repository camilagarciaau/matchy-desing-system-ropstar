import { useState, type ReactNode } from "react"

import {
  DocsCodePreview,
  DocsImportBlock,
  DocsPropsTable,
} from "@/components/docs/docs-code-preview"
import { DocsPage } from "@/components/docs/docs-page"
import { HomeSaveToast } from "@/components/patterns/home/home-save-toast"

import "@/components/patterns/home/home.css"

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

export function SaveToastPage() {
  const [message, setMessage] = useState("Toast stays visible in this preview.")

  return (
    <DocsPage
      section="Components"
      title="Save Toast"
      titleId="save-toast"
      toc={[{ id: "home-save-toast", label: "HomeSaveToast" }]}
    >
      <p className="mt-6 text-base leading-relaxed">
        Confirmation bar after saving a marketplace pick. Anchored to the bottom
        of the Ropstar Home shell with a primary “See profile” CTA.
      </p>

      <ComponentSection id="home-save-toast" title="HomeSaveToast">
        <Subsection id="home-save-toast-preview" title="1. Preview">
          <DocsCodePreview
            className="overflow-hidden rounded-xl border border-border"
            previewClassName="relative min-h-40 bg-muted/40 p-6"
            caption={
              <>
                <code>matchy-home-save-toast</code>
                <br />
                <code>matchy-btn--primary</code> · See profile
              </>
            }
            preview={
              <div className="relative mx-auto min-h-36 w-full max-w-md overflow-hidden rounded-[var(--matchy-radius-md)] bg-matchy-cream-beige">
                <p className="matchy-paragraph px-4 pt-4 text-matchy-typography-default">
                  {message}
                </p>
                <HomeSaveToast
                  onSeeProfile={() =>
                    setMessage("See profile — would open the Profile section.")
                  }
                />
              </div>
            }
            code={`<HomeSaveToast
  onSeeProfile={() => setActiveSection("profile")}
/>`}
          />
        </Subsection>

        <Subsection id="home-save-toast-overview" title="2. Overview">
          <p className="mt-3 text-base leading-relaxed">
            Pinterest-style status toast: leather surface, cream copy, primary
            action. Positioned absolute at the bottom of{" "}
            <code>.matchy-home</code> (outside the scroll pane) so it stays
            visible while browsing the catalog.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {(
              [
                {
                  token: "matchy-color-leather",
                  description: "Toast background field.",
                },
                {
                  token: "matchy-elevation-4",
                  description: "Depth so the bar lifts off the catalog.",
                },
                {
                  token: "matchy-label-3",
                  description: "Status copy and See profile label.",
                },
                {
                  token: "matchy-btn--primary",
                  description: "Primary CTA to open Profile.",
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

        <Subsection id="home-save-toast-import" title="3. Import">
          <DocsImportBlock
            code={`import { HomeSaveToast } from "@/components/patterns/home/home-save-toast"`}
          />
          <p className="mt-3 text-base leading-relaxed">
            Styles live in{" "}
            <code>src/components/patterns/home/home.css</code>. Triggered from{" "}
            <code>ProductCardFace</code>{" "}
            <code>variant=&quot;marketplace&quot;</code> via{" "}
            <code>onSaved</code>.
          </p>
        </Subsection>

        <Subsection id="home-save-toast-api" title="4. API / Props">
          <DocsPropsTable
            caption="HomeSaveToast props"
            rows={[
              {
                name: "onSeeProfile",
                type: "() => void",
                defaultValue: "(required)",
                description:
                  "Primary CTA handler — Home navigates to the Profile section.",
              },
            ]}
          />
        </Subsection>

        <Subsection id="home-save-toast-a11y" title="5. Accessibility">
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              <strong>Live region:</strong>{" "}
              <code>role=&quot;status&quot;</code> with{" "}
              <code>aria-live=&quot;polite&quot;</code> announces the save
              confirmation without interrupting.
            </p>
            <p>
              <strong>Action:</strong> See profile is a real button with visible
              label (primary Matchy tone).
            </p>
          </div>
        </Subsection>
      </ComponentSection>
    </DocsPage>
  )
}
