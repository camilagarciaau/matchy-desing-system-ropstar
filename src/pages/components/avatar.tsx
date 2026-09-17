import type { ReactNode } from "react"

import {
  DocsCodePreview,
  DocsImportBlock,
  DocsPropsTable,
} from "@/components/docs/docs-code-preview"
import { DocsPage } from "@/components/docs/docs-page"
import { SellerAvatar } from "@/components/ui/seller-avatar"

import sampleSellerLogo from "@/assets/stories/1.avif"

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

export function AvatarPage() {
  return (
    <DocsPage
      section="Components"
      title="Avatar"
      titleId="avatar"
      toc={[{ id: "seller-avatar", label: "SellerAvatar" }]}
    >
      <p className="mt-6 text-base leading-relaxed">
        Matchy’s seller avatar is the Ropstar monogram in a leather circle,
        optionally paired with the shop name. Sellers can pass their own logo;
        otherwise the mark falls back to{" "}
        <code>matchy-logo-monogram-yellow</code>. Used under Story cards and
        anywhere a shop chip is needed.
      </p>

      <ComponentSection id="seller-avatar" title="SellerAvatar">
        <Subsection id="seller-avatar-preview" title="1. Preview">
          <div className="mt-6 space-y-4">
            <DocsCodePreview
              className="overflow-hidden rounded-xl border border-border"
              previewClassName="flex flex-wrap items-center gap-6 bg-muted/40 p-6"
              caption={
                <>
                  <code>matchy-seller-avatar</code>
                  <br />
                  Mark only
                </>
              }
              preview={<SellerAvatar />}
              code={`<SellerAvatar />`}
            />
            <DocsCodePreview
              className="overflow-hidden rounded-xl border border-border"
              previewClassName="flex flex-wrap items-center gap-6 bg-muted/40 p-6"
              caption={
                <>
                  <code>matchy-seller-avatar-row</code>
                  <br />
                  With shop name
                </>
              }
              preview={<SellerAvatar name="Prehistoriafv" />}
              code={`<SellerAvatar name="Prehistoriafv" />`}
            />
            <DocsCodePreview
              className="overflow-hidden rounded-xl border border-border"
              previewClassName="flex flex-wrap items-center gap-6 bg-muted/40 p-6"
              caption={
                <>
                  <code>logoUrl</code>
                  <br />
                  Custom seller logo
                </>
              }
              preview={
                <SellerAvatar
                  name="Prehistoriafv"
                  logoUrl={sampleSellerLogo}
                />
              }
              code={`<SellerAvatar
  name="Prehistoriafv"
  logoUrl={sellerLogo}
/>`}
            />
          </div>
        </Subsection>

        <Subsection id="seller-avatar-overview" title="2. Overview">
          <p className="mt-3 text-base leading-relaxed">
            A compact shop identity: yellow monogram on a leather field (
            <code>matchy-radius-full</code>), with optional{" "}
            <code>matchy-paragraph</code> name beside it. Pass{" "}
            <code>logoUrl</code> to swap the default monogram for a seller
            mark.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {(
              [
                {
                  token: "matchy-color-leather",
                  description: "Circular avatar field behind the monogram.",
                },
                {
                  token: "matchy-logo-monogram-yellow",
                  description:
                    "Default Ropstar monogram when logoUrl is omitted (Foundations → Logo).",
                },
                {
                  token: "matchy-radius-full",
                  description: "Perfect circle for the avatar field.",
                },
                {
                  token: "matchy-paragraph",
                  description: "Shop name type beside the mark when provided.",
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

        <Subsection id="seller-avatar-import" title="3. Import">
          <DocsImportBlock
            code={`import { SellerAvatar } from "@/components/ui/seller-avatar"`}
          />
          <p className="mt-3 text-base leading-relaxed">
            Styles live in{" "}
            <code>src/components/ui/seller-avatar.css</code> (imported by the
            component).
          </p>
        </Subsection>

        <Subsection id="seller-avatar-api" title="4. API / Props">
          <DocsPropsTable
            caption="SellerAvatar props"
            rows={[
              {
                name: "name",
                type: "string | undefined",
                defaultValue: "undefined",
                description:
                  "Shop display name beside the mark. Omit for mark-only.",
              },
              {
                name: "logoUrl",
                type: "string | undefined",
                defaultValue: "undefined",
                description:
                  "Seller logo URL. Falls back to matchy-logo-monogram-yellow when omitted.",
              },
              {
                name: "className",
                type: "string",
                defaultValue: "—",
                description: "Merged onto the matchy-seller-avatar-row root.",
              },
            ]}
          />
        </Subsection>

        <Subsection id="seller-avatar-a11y" title="5. Accessibility">
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              <strong>With name:</strong> the circular mark is{" "}
              <code>aria-hidden</code>; the visible shop name is the accessible
              label.
            </p>
            <p>
              <strong>Mark only:</strong> the circle exposes{" "}
              <code>role=&quot;img&quot;</code> with{" "}
              <code>aria-label=&quot;Ropstar&quot;</code> so the monogram is
              announced when no name is present.
            </p>
          </div>
        </Subsection>
      </ComponentSection>
    </DocsPage>
  )
}
