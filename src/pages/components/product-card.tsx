import type { ReactNode } from "react"

import {
  DocsCodePreview,
  DocsImportBlock,
  DocsPropsTable,
} from "@/components/docs/docs-code-preview"
import { DocsPage } from "@/components/docs/docs-page"
import { marketplaceCatalog } from "@/components/patterns/home/marketplace-catalog"
import { LoadingScreen } from "@/components/ui/loading-spinner"
import { ProductCardFace } from "@/components/ui/product-card-face"
import {
  fashionLoadingQuotes,
  swipeDeckInventory,
} from "@/components/patterns/swipe-deck/mock-data"

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

const sampleItem = swipeDeckInventory[0]
const sampleQuote = fashionLoadingQuotes[0]
const marketplaceSample = marketplaceCatalog[0]

const metaFooter = (
  <div className="border-l-2 border-matchy-shopping pl-3 text-left">
    <p className="matchy-label-2 text-pretty text-matchy-typography-contrast">
      {sampleItem.name}
    </p>
    <p className="matchy-label-3 mt-1 text-matchy-typography-contrast">
      {sampleItem.price} · {sampleItem.size}
    </p>
  </div>
)

export function ProductCardPage() {
  return (
    <DocsPage
      section="Components"
      title="Product Card"
      titleId="product-card"
      toc={[{ id: "product-card-face", label: "ProductCardFace" }]}
    >
      <p className="mt-6 text-base leading-relaxed">
        Product photo cards hold the garment image. Swipe uses a full-bleed face
        with overlays; the marketplace grid uses{" "}
        <code>variant=&quot;marketplace&quot;</code> — name, price pill, and a
        save heart on a soft diagonal blur.
      </p>

      <ComponentSection id="product-card-face" title="ProductCardFace">
        <Subsection id="product-card-face-preview" title="1. Preview">
          <div className="mt-6 space-y-4">
            <DocsCodePreview
              className="overflow-hidden rounded-xl border border-border"
              previewClassName="bg-muted/40 p-6"
              caption={
                <>
                  <code>matchy-product-card-face</code>
                  <br />
                  <code>variant=&quot;default&quot;</code>
                </>
              }
              preview={
                <div className="mx-auto h-80 w-full max-w-xs">
                  <ProductCardFace
                    imageUrl={sampleItem.imageUrl}
                    alt={`${sampleItem.name}, ${sampleItem.size}`}
                  />
                </div>
              }
              code={`<ProductCardFace
  imageUrl={item.imageUrl}
  alt={\`\${item.name}, \${item.size}\`}
/>`}
            />
            <DocsCodePreview
              className="overflow-hidden rounded-xl border border-border"
              previewClassName="bg-muted/40 p-6"
              caption={
                <>
                  <code>matchy-product-card-face--blur</code>
                  <br />
                  <code>variant=&quot;blur&quot;</code>
                  <br />
                  loading background
                </>
              }
              preview={
                <div className="mx-auto h-80 w-full max-w-xs">
                  <ProductCardFace
                    variant="blur"
                    imageUrl={sampleItem.imageUrl}
                    alt={`${sampleItem.name}, ${sampleItem.size}`}
                  >
                    <LoadingScreen quote={sampleQuote} />
                  </ProductCardFace>
                </div>
              }
              code={`<ProductCardFace
  variant="blur"
  imageUrl={item.imageUrl}
  alt={\`\${item.name}, \${item.size}\`}
>
  <LoadingScreen quote={quote} />
</ProductCardFace>`}
            />
            <DocsCodePreview
              className="overflow-hidden rounded-xl border border-border"
              previewClassName="bg-muted/40 p-6"
              caption={
                <>
                  <code>matchy-card-footer</code>
                  <br />
                  <code>variant=&quot;footer&quot;</code>
                </>
              }
              preview={
                <div className="mx-auto h-80 w-full max-w-xs">
                  <ProductCardFace
                    variant="footer"
                    imageUrl={sampleItem.imageUrl}
                    alt={`${sampleItem.name}, ${sampleItem.size}`}
                  >
                    {metaFooter}
                  </ProductCardFace>
                </div>
              }
              code={`<ProductCardFace
  variant="footer"
  imageUrl={item.imageUrl}
  alt={\`\${item.name}, \${item.size}\`}
>
  {/* Name / price / link — scrim comes from the variant */}
  …
</ProductCardFace>`}
            />
            <DocsCodePreview
              className="overflow-hidden rounded-xl border border-border"
              previewClassName="bg-muted/40 p-6"
              caption={
                <>
                  <code>matchy-product-card-face--marketplace</code>
                  <br />
                  <code>variant=&quot;marketplace&quot;</code>
                </>
              }
              preview={
                <div className="mx-auto w-full max-w-[14rem]">
                  <ProductCardFace
                    variant="marketplace"
                    imageUrl={marketplaceSample.imageUrl}
                    alt={marketplaceSample.name}
                    name={marketplaceSample.name}
                    price={marketplaceSample.price}
                    aspect={marketplaceSample.aspect}
                  />
                </div>
              }
              code={`<ProductCardFace
  variant="marketplace"
  imageUrl={item.imageUrl}
  alt={item.name}
  name={item.name}
  price={item.price}
  aspect={item.aspect}
  onSaved={() => showSaveToast()}
/>`}
            />
          </div>
        </Subsection>

        <Subsection id="product-card-face-overview" title="2. Overview">
          <p className="mt-3 text-base leading-relaxed">
            Full-bleed product image shell for swipe (onboarding, loading,
            empty, active deck) plus the marketplace catalog tile. Optional{" "}
            <code>children</code> sit on top for swipe chrome and copy.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed">
            <li>
              <code>default</code> — clear full-bleed photo for onboarding/empty
              shells and plain media.
            </li>
            <li>
              <code>blur</code> — leather tint +{" "}
              <code>backdrop-filter: blur(16px)</code>; loading background under{" "}
              <code>LoadingScreen</code>.
            </li>
            <li>
              <code>footer</code> — applies <code>matchy-card-footer</code>{" "}
              automatically (dark scrim + name/price anchored to the bottom).
            </li>
            <li>
              <code>marketplace</code> — Home / Cloth Masonry tile: diagonal
              save blur, heart control, name, and primary price pill under the
              photo.
            </li>
          </ul>
          <p className="mt-6 text-base leading-relaxed">
            Shape and depth come from foundations — not local one-offs:
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {(
              [
                {
                  token: "matchy-radius-lg",
                  description:
                    "Corner radius for swipe product photo cards (Foundations → Radii).",
                },
                {
                  token: "matchy-elevation-4",
                  description:
                    "Shadow for full-bleed images with no visible background (Foundations → Elevation).",
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

        <Subsection id="product-card-face-import" title="3. Import">
          <DocsImportBlock
            code={`import { ProductCardFace } from "@/components/ui/product-card-face"`}
          />
          <p className="mt-3 text-base leading-relaxed">
            Styles live in{" "}
            <code>src/components/ui/product-card-face.css</code> (imported by
            the component). Radius and elevation tokens come from Foundations.
          </p>
        </Subsection>

        <Subsection id="product-card-face-api" title="4. API / Props">
          <DocsPropsTable
            caption="ProductCardFace props"
            rows={[
              {
                name: "imageUrl",
                type: "string",
                defaultValue: "(required)",
                description: "Source URL for the full-bleed product photo.",
              },
              {
                name: "alt",
                type: "string",
                defaultValue: "(required)",
                description:
                  "Accessible name for the image (e.g. name + size). Required — the photo alone isn't announced.",
              },
              {
                name: "variant",
                type: '"default" | "blur" | "footer" | "marketplace"',
                defaultValue: '"default"',
                description:
                  'Photo treatment. "blur" applies matchy-product-card-face--blur (leather tint + blur(16px)) for loading backgrounds. "footer" wraps children in matchy-card-footer (dark scrim + bottom-anchored meta). "marketplace" renders the Home/Cloth tile (save heart, name, price pill).',
              },
              {
                name: "children",
                type: "ReactNode",
                defaultValue: "undefined",
                description:
                  "Optional overlays: onboarding chrome, LoadingScreen, empty CTA, or meta footer copy (name/price/link when variant is footer). Ignored for marketplace.",
              },
              {
                name: "name",
                type: "string",
                defaultValue: "—",
                description:
                  "Marketplace only — product name under the photo (falls back to alt).",
              },
              {
                name: "price",
                type: "string",
                defaultValue: "—",
                description:
                  "Marketplace only — price string for the primary pill badge.",
              },
              {
                name: "aspect",
                type: '"portrait" | "tall" | "square"',
                defaultValue: '"portrait"',
                description:
                  "Marketplace only — media aspect class for Masonry variety.",
              },
              {
                name: "emphasized",
                type: "boolean",
                defaultValue: "false",
                description:
                  "Marketplace only — luxury demo leather ring on the media.",
              },
              {
                name: "onSaved",
                type: "() => void",
                defaultValue: "—",
                description:
                  "Marketplace only — called when the heart turns on (HomeSaveToast).",
              },
              {
                name: "className",
                type: "string",
                defaultValue: "—",
                description:
                  "Merged onto the root (swipe face or marketplace article).",
              },
            ]}
          />
        </Subsection>

        <Subsection id="product-card-face-a11y" title="5. Accessibility">
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              <strong>Image alt:</strong> <code>alt</code> is required and
              should describe the product (swipe uses{" "}
              <code>{`{name}, {size}`}</code>). Decorative overlays inside{" "}
              <code>children</code> should use <code>aria-hidden</code> when
              they duplicate visible text or are purely visual.
            </p>
            <p>
              <strong>Blur variant:</strong> the scrim is visual only (
              <code>::after</code>); it does not change the image{" "}
              <code>alt</code>. Loading status remains on{" "}
              <code>LoadingScreen</code> (
              <code>role=&quot;status&quot;</code>).
            </p>
            <p>
              <strong>Footer variant:</strong>{" "}
              <code>matchy-card-footer</code> uses{" "}
              <code>pointer-events-none</code>; interactive children (e.g. View
              this item) need <code>pointer-events-auto</code> and{" "}
              <code>stopPropagation</code> on pointer down so they don&apos;t
              start a card drag.
            </p>
            <p>
              <strong>Drag surface:</strong> when used as the swipe card, the
              shell itself is not a button — controls under the deck remain the
              keyboard-accessible way to like/skip.
            </p>
            <p>
              <strong>Motion:</strong> the shell uses{" "}
              <code>matchy-motion-instant</code> for transitions; reduced-motion
              behavior for gestures is owned by the swipe pattern, not this
              component.
            </p>
            <p>
              <strong>Marketplace:</strong> save control uses{" "}
              <code>aria-label</code> (Save / Unsave + name) and{" "}
              <code>aria-pressed</code>; the heart icon is{" "}
              <code>aria-hidden</code>.
            </p>
          </div>
        </Subsection>
      </ComponentSection>
    </DocsPage>
  )
}
