import type { ReactNode } from "react"

import {
  DocsCodePreview,
  DocsImportBlock,
  DocsPropsTable,
} from "@/components/docs/docs-code-preview"
import { DocsPage } from "@/components/docs/docs-page"
import {
  StoryCard,
  defaultSellerStories,
} from "@/components/ui/seller-stories"

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

const sample = defaultSellerStories[0]

export function StoryCardPage() {
  return (
    <DocsPage
      section="Components"
      title="Story Card"
      titleId="story-card"
      toc={[{ id: "story-card", label: "StoryCard" }]}
    >
      <p className="mt-6 text-base leading-relaxed">
        A single portrait story clip: photo with a top title scrim, plus a{" "}
        <code>SellerAvatar</code> and shop name underneath. Story cards are the
        unit used in the Seller Stories rail on Ropstar Home.
      </p>

      <ComponentSection id="story-card" title="StoryCard">
        <Subsection id="story-card-preview" title="1. Preview">
          <DocsCodePreview
            className="overflow-hidden rounded-xl border border-border"
            previewClassName="bg-muted/40 p-6"
            caption={
              <>
                <code>matchy-story-card</code>
                <br />
                <code>matchy-elevation-4</code> ·{" "}
                <code>matchy-card-footer--top</code> ·{" "}
                <code>SellerAvatar</code>
              </>
            }
            preview={
              <div className="w-[11.5rem]">
                <StoryCard
                  src={sample.src}
                  title={sample.title}
                  shop={sample.shop}
                />
              </div>
            }
            code={`<StoryCard
  src={storyImage}
  title="Street styles"
  shop="Prehistoriafv"
/>`}
          />
        </Subsection>

        <Subsection id="story-card-overview" title="2. Overview">
          <p className="mt-3 text-base leading-relaxed">
            One discovery unit for a seller clip. The media is a 3:4 portrait
            with the same full-bleed depth as swipe photos (
            <code>matchy-elevation-4</code>). Title contrast uses the shared
            card-footer scrim inverted to the top (
            <code>matchy-card-footer--top</code>). Shop identity sits below the
            photo — not on it.
          </p>
          <p className="mt-3 text-base leading-relaxed">
            Anatomy uses Matchy tokens — not local one-offs:
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {(
              [
                {
                  token: "matchy-elevation-4",
                  description:
                    "Full-bleed image depth on the portrait media (same token as swipe ProductCardFace). Top title fade is the shared card-footer scrim inverted (matchy-card-footer--top).",
                },
                {
                  token: "matchy-label-3",
                  description:
                    "Story title on the photo, over the top scrim.",
                },
                {
                  token: "matchy-radius-md",
                  description: "Corner radius on the portrait media.",
                },
                {
                  token: "matchy-space-sm",
                  description: "Gap between the photo and SellerAvatar row.",
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

        <Subsection id="story-card-import" title="3. Import">
          <DocsImportBlock
            code={`import { StoryCard } from "@/components/ui/seller-stories"`}
          />
          <p className="mt-3 text-base leading-relaxed">
            Styles live in{" "}
            <code>src/components/ui/seller-stories.css</code>. Media depth uses{" "}
            <code>matchy-elevation-4</code>; the top title fade reuses shared{" "}
            <code>matchy-card-footer--top</code> from{" "}
            <code>card-footer.css</code>. Shop identity uses{" "}
            <code>SellerAvatar</code>.
          </p>
        </Subsection>

        <Subsection id="story-card-api" title="4. API / Props">
          <DocsPropsTable
            caption="StoryCard props"
            rows={[
              {
                name: "src",
                type: "string",
                defaultValue: "—",
                description: "Portrait image URL for the story clip.",
              },
              {
                name: "title",
                type: "string",
                defaultValue: "—",
                description:
                  "Short label on the photo (≤20 chars recommended).",
              },
              {
                name: "shop",
                type: "string",
                defaultValue: "—",
                description:
                  "Shop name passed to SellerAvatar under the media.",
              },
              {
                name: "className",
                type: "string",
                defaultValue: "—",
                description: "Merged onto the matchy-story-card root.",
              },
            ]}
          />
        </Subsection>

        <Subsection id="story-card-a11y" title="5. Accessibility">
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              <strong>Story image:</strong> the photo uses empty{" "}
              <code>alt</code> because the visible title on the card carries
              the meaning.
            </p>
            <p>
              <strong>Shop identity:</strong> announced via the visible name
              next to <code>SellerAvatar</code> (mark is decorative when a
              name is present).
            </p>
          </div>
        </Subsection>
      </ComponentSection>
    </DocsPage>
  )
}
