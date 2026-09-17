import { useState, type ReactNode } from "react"

import {
  DocsCodePreview,
  DocsImportBlock,
  DocsPropsTable,
} from "@/components/docs/docs-code-preview"
import { DocsPage } from "@/components/docs/docs-page"
import { Button } from "@/components/ui/button"
import { MatchyIcon } from "@/foundations/icons"
import { cn } from "@/lib/utils"

import "@/components/patterns/swipe-deck/swipe-deck.css"
import "@/components/ui/product-card-face.css"

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

const matchyBtnPrimary = "matchy-btn matchy-btn--primary"

const deckIconBtn =
  "matchy-btn matchy-btn-icon matchy-btn--leather"

export function ButtonsPage() {
  const [likePressed, setLikePressed] = useState(false)
  const [marketplaceSaved, setMarketplaceSaved] = useState(false)
  const [expandActive, setExpandActive] = useState<"home" | "cloth" | "search">(
    "home"
  )

  const expandItems = [
    { id: "home" as const, label: "Home", icon: "matchy-icon-home" as const },
    {
      id: "cloth" as const,
      label: "Cloth",
      icon: "matchy-icon-hangers" as const,
    },
    {
      id: "search" as const,
      label: "Search",
      icon: "matchy-icon-search" as const,
    },
  ]

  return (
    <DocsPage
      section="Components"
      title="Buttons"
      titleId="buttons"
      description="Buttons and link-like controls used in the Ropstar, documented from the live code."
      toc={[{ id: "button", label: "Button" }]}
    >
      <p className="mt-6 text-base leading-relaxed">
        This page covers buttons and link-styled pieces. Buttons allow users to
        perform actions within a surface. They can be used alone for immediate
        action, or as a trigger for another component.
      </p>

      <ComponentSection id="button" title="Button">
        <Subsection id="button-preview" title="1. Preview">
          <div className="mt-6 space-y-4">
            <DocsCodePreview
              className="overflow-hidden rounded-xl border border-border"
              caption={<code>matchy-btn--primary</code>}
              preview={
                <Button type="button" className={matchyBtnPrimary}>
                  Button
                </Button>
              }
              code={`<Button
  type="button"
  className="matchy-btn matchy-btn--primary"
>
  Button
</Button>`}
            />
            <DocsCodePreview
              className="overflow-hidden rounded-xl border border-border"
              caption={<code>matchy-link--default</code>}
              preview={
                <a
                  href="#buttons"
                  className="matchy-link matchy-link--default matchy-label-2"
                >
                  Link
                </a>
              }
              code={`<a
  href="#buttons"
  className="matchy-link matchy-link--default matchy-label-2"
>
  Link
</a>`}
            />
            <DocsCodePreview
              className="overflow-hidden rounded-xl border border-border"
              previewClassName="flex flex-wrap items-center justify-start gap-4 bg-muted/40 p-6"
              caption={
                <>
                  <code>matchy-btn-icon</code>{" "}
                  <code>matchy-btn--leather</code>
                  <br />
                  Swipe deck like
                </>
              }
              preview={
                <Button
                  type="button"
                  size="icon-lg"
                  label="Save item"
                  stopPropagationOnPointerDown
                  pressed={likePressed}
                  className={deckIconBtn}
                  onClick={() => setLikePressed((value) => !value)}
                >
                  <MatchyIcon
                    token="matchy-icon-heart"
                    size="lg"
                    color="white"
                  />
                </Button>
              }
              code={`<Button
  type="button"
  size="icon-lg"
  label="Save item"
  stopPropagationOnPointerDown
  pressed={lastAction === "like"}
  className="matchy-btn matchy-btn-icon matchy-btn--leather"
>
  <MatchyIcon token="matchy-icon-heart" size="lg" color="white" />
</Button>`}
            />
            <DocsCodePreview
              className="overflow-hidden rounded-xl border border-border"
              previewClassName="flex flex-wrap items-center justify-start gap-4 bg-matchy-leather p-6"
              caption={
                <>
                  <code>matchy-product-card-face-save</code>
                  <br />
                  Marketplace save heart
                </>
              }
              preview={
                <button
                  type="button"
                  className="matchy-product-card-face-save !static top-auto right-auto"
                  aria-label={
                    marketplaceSaved ? "Unsave product" : "Save product"
                  }
                  aria-pressed={marketplaceSaved}
                  onClick={() => setMarketplaceSaved((value) => !value)}
                >
                  <MatchyIcon
                    token="matchy-icon-heart"
                    size="lg"
                    color="white"
                    fill={marketplaceSaved ? "currentColor" : "none"}
                    aria-hidden="true"
                  />
                </button>
              }
              code={`<button
  type="button"
  className="matchy-product-card-face-save"
  aria-label={saved ? \`Unsave \${name}\` : \`Save \${name}\`}
  aria-pressed={saved}
  onClick={toggleSaved}
>
  <MatchyIcon
    token="matchy-icon-heart"
    size="lg"
    color="white"
    fill={saved ? "currentColor" : "none"}
    aria-hidden="true"
  />
</button>`}
            />
            <DocsCodePreview
              className="overflow-hidden rounded-xl border border-border"
              previewClassName="flex flex-wrap items-center justify-start gap-2 bg-muted/40 p-6"
              caption={
                <>
                  <code>matchy-btn-expand</code>{" "}
                  <code>matchy-btn-expand--active</code>{" "}
                  <code>matchy-btn--leather</code>
                </>
              }
              preview={
                <div className="flex items-center gap-2 rounded-full border-[1.5px] border-matchy-leather bg-matchy-background-default p-2 shadow-[var(--matchy-elevation-1)]">
                  {expandItems.map((item) => {
                    const isActive = expandActive === item.id
                    return (
                      <Button
                        key={item.id}
                        type="button"
                        variant="ghost"
                        label={isActive ? undefined : item.label}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setExpandActive(item.id)}
                        className={cn(
                          "matchy-btn matchy-btn-expand matchy-label-3",
                          isActive && "matchy-btn-expand--active",
                          isActive && "matchy-btn--leather"
                        )}
                      >
                        <MatchyIcon
                          token={item.icon}
                          size="md"
                          color={isActive ? "white" : "default"}
                          aria-hidden="true"
                        />
                        {isActive ? <span>{item.label}</span> : null}
                      </Button>
                    )
                  })}
                </div>
              }
              code={`<Button
  type="button"
  variant="ghost"
  label={isActive ? undefined : "Home"}
  aria-current={isActive ? "page" : undefined}
  className={cn(
    "matchy-btn matchy-btn-expand matchy-label-3",
    isActive && "matchy-btn-expand--active matchy-btn--leather"
  )}
>
  <MatchyIcon
    token="matchy-icon-home"
    size="md"
    color={isActive ? "white" : "default"}
  />
  {isActive ? <span>Home</span> : null}
</Button>`}
            />
          </div>
        </Subsection>

        <Subsection id="button-overview" title="2. Overview">
          <p className="mt-3 text-base leading-relaxed">
            A clickable trigger for a single action; use it for text CTAs with a
            verb + object, like &quot;Start swiping&quot; or &quot;See saves.&quot;
            The marketplace save heart (
            <code>matchy-product-card-face-save</code>) is a transparent icon
            button on product media: outline when idle, filled when saved, with{" "}
            <code>aria-pressed</code>; saving can open{" "}
            <code>HomeSaveToast</code>.
          </p>
          <p className="mt-3 text-base leading-relaxed">
            Renders a native <code>&lt;button&gt;</code> by default, or a Radix{" "}
            <code>Slot.Root</code> when <code>asChild</code> is true, so another
            element can inherit the button&apos;s styling without changing its
            tag. The <code>link</code> variant gives button semantics with
            link-like appearance — Matchy&apos;s swipe navigation doesn&apos;t
            use it, relying on a native <code>&lt;a&gt;</code> or{" "}
            <code>&lt;p&gt;</code> instead.
          </p>
          <p className="mt-3 text-base leading-relaxed">
            Matchy buttons use <code>matchy-radius-full</code> (pill shape) with
            a tone chosen by a contrast fallback order, plus purchase (semantic)
            and line (last resort):
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {(
              [
                {
                  token: "primary",
                  className: "matchy-btn matchy-btn--primary",
                  sampleBg: "bg-muted",
                  description:
                    "Default choice for any button.",
                },
                {
                  token: "leather",
                  className: "matchy-btn matchy-btn--leather",
                  sampleBg: "bg-muted",
                  description:
                    "use when primary doesn't have enough contrast against the background.",
                },
                {
                  token: "white",
                  className: "matchy-btn matchy-btn--white",
                  sampleBg: "bg-matchy-leather",
                  description:
                    "use when neither primary nor leather works (e.g. dark backgrounds or photos).",
                },
                {
                  token: "purchase",
                  className: "matchy-btn matchy-btn--purchase",
                  sampleBg: "bg-muted",
                  description:
                    "semantic exception, not part of the contrast order. Reserved for purchase-related actions specifically (e.g. Buy now in the swipe deck).",
                },
                {
                  token: "line",
                  className:
                    "matchy-btn matchy-btn--line matchy-btn--leather",
                  sampleBg: "bg-muted",
                  description:
                    "last resort when no fill tone has contrast. Border and text inherit the paired tone's color.",
                },
                {
                  token: "expand",
                  className: "matchy-btn matchy-btn-expand matchy-label-3",
                  sampleBg: "bg-muted",
                  description:
                    "shape / behavior modifier (not a fill tone). Idle = icon only; active (matchy-btn-expand--active) = icon + label. Pair leather or purchase for the active fill. Used by Ropstar Home nav.",
                },
              ] as const
            ).map((item) => (
              <div
                key={item.token}
                className="overflow-hidden rounded-xl border border-border"
              >
                <div
                  className={`flex items-center justify-center p-6 ${item.sampleBg}`}
                >
                  {item.token === "expand" ? (
                    <Button
                      type="button"
                      className="matchy-btn matchy-btn-expand matchy-btn-expand--active matchy-btn--leather matchy-label-3"
                    >
                      <MatchyIcon
                        token="matchy-icon-home"
                        size="md"
                        color="white"
                        aria-hidden="true"
                      />
                      <span>Home</span>
                    </Button>
                  ) : (
                    <Button type="button" className={item.className}>
                      Button
                    </Button>
                  )}
                </div>
                <div className="border-t border-border bg-background px-4 py-3">
                  <p className="text-sm leading-relaxed">
                    <code>
                      {item.token === "expand"
                        ? "matchy-btn-expand"
                        : `matchy-btn--${item.token}`}
                    </code>{" "}
                    — {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <h4 className="mt-6 text-base font-semibold tracking-tight">States</h4>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-base leading-relaxed">
            <li>
              <strong>Hover:</strong> fill lightens 25% from the base tone.
              Applies to <code>matchy-btn--primary</code>,{" "}
              <code>matchy-btn--leather</code>, <code>matchy-btn--white</code>,{" "}
              <code>matchy-btn--purchase</code>, and{" "}
              <code>matchy-btn--line</code> (line adjusts border/text instead of
              a solid fill).
            </li>
            <li>
              <strong>Pressed:</strong> fill darkens 25% from the base tone,
              via <code>:enabled:active</code> and the{" "}
              <code>pressed</code> prop (<code>data-pressed=&quot;true&quot;</code>
              ). Same tones as Hover. There is no separate{" "}
              <code>pressable</code> class.
            </li>
            <li>
              <strong>Disabled:</strong> transversal state on any tone —{" "}
              <code>opacity: 0.4</code> on the base fill (60% more transparent
              than normal). Not a fifth fill color; use the native{" "}
              <code>disabled</code> attribute.
            </li>
            <li>
              <strong>Links</strong> (<code>matchy-link</code>): underline is
              always visible; hover shifts text toward brick-denim (on default
              surfaces) or panna-yellow (on contrast / scrim text).
            </li>
          </ul>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {(
              [
                {
                  key: "normal",
                  token: "matchy-btn--primary",
                  description: "Normal",
                  sampleBg: "bg-muted",
                  control: (
                    <Button
                      type="button"
                      className="matchy-btn matchy-btn--primary"
                    >
                      Button
                    </Button>
                  ),
                },
                {
                  key: "hover",
                  token: "matchy-btn--primary:hover",
                  description: "Hover — fill lightens 25%",
                  sampleBg: "bg-muted",
                  control: (
                    <Button
                      type="button"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="matchy-btn matchy-btn--primary pointer-events-none"
                      style={{
                        backgroundColor:
                          "color-mix(in oklab, var(--matchy-color-primary) 75%, white)",
                      }}
                    >
                      Button
                    </Button>
                  ),
                },
                {
                  key: "pressed",
                  token: "matchy-btn--primary[data-pressed]",
                  description: "Pressed — fill darkens 25%",
                  sampleBg: "bg-muted",
                  control: (
                    <Button
                      type="button"
                      tabIndex={-1}
                      aria-hidden="true"
                      pressed
                      className="matchy-btn matchy-btn--primary pointer-events-none"
                    >
                      Button
                    </Button>
                  ),
                },
                {
                  key: "line-hover",
                  token: "matchy-btn--line:hover",
                  description: "Line hover — border/text lighten 25%",
                  sampleBg: "bg-muted",
                  control: (
                    <Button
                      type="button"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="matchy-btn matchy-btn--line matchy-btn--leather pointer-events-none"
                      style={{
                        borderColor:
                          "color-mix(in oklab, var(--matchy-color-leather) 75%, white)",
                        color:
                          "color-mix(in oklab, var(--matchy-color-leather) 75%, white)",
                        backgroundColor:
                          "color-mix(in oklab, var(--matchy-color-leather) 10%, transparent)",
                      }}
                    >
                      Button
                    </Button>
                  ),
                },
                {
                  key: "disabled",
                  token: "disabled",
                  description: "Disabled — opacity 0.4",
                  sampleBg: "bg-muted",
                  control: (
                    <Button
                      type="button"
                      disabled
                      className="matchy-btn matchy-btn--primary"
                    >
                      Button
                    </Button>
                  ),
                },
                {
                  key: "link",
                  token: "matchy-link--default",
                  description: "Link — underline always visible",
                  sampleBg: "bg-muted",
                  control: (
                    <a
                      href="#buttons"
                      className="matchy-link matchy-link--default matchy-label-2"
                    >
                      Link
                    </a>
                  ),
                },
                {
                  key: "link-hover",
                  token: "matchy-link--default:hover",
                  description: "Link hover — shifts toward brick-denim",
                  sampleBg: "bg-muted",
                  control: (
                    <a
                      href="#buttons"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="matchy-link matchy-link--default matchy-label-2 pointer-events-none"
                      style={{
                        color:
                          "color-mix(in oklab, var(--matchy-color-typography-and-icon-default) 78%, var(--matchy-color-brick-denim))",
                      }}
                    >
                      Link
                    </a>
                  ),
                },
              ] as const
            ).map((item) => (
              <div
                key={item.key}
                className="overflow-hidden rounded-xl border border-border"
              >
                <div
                  className={`flex items-center justify-center p-6 ${item.sampleBg}`}
                >
                  {item.control}
                </div>
                <div className="border-t border-border bg-background px-4 py-3">
                  <p className="text-sm leading-relaxed">
                    <code>{item.token}</code>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Subsection>

        <Subsection id="button-import" title="3. Import">
          <DocsImportBlock code={`import { Button } from "@/components/ui/button"`} />
          <p className="mt-3 text-base leading-relaxed">
            <code>buttonVariants</code> is also exported from the same module.
            Tone classes live in{" "}
            <code>src/foundations/buttons/matchy-buttons.css</code> (imported
            globally).
          </p>
        </Subsection>

        <Subsection id="button-api" title="4. API / Props">
          <DocsPropsTable
            caption="Button props"
            rows={[
              {
                name: "variant",
                type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
                defaultValue: '"default"',
                description: "Selects the visual variant class set.",
              },
              {
                name: "size",
                type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
                defaultValue: '"default"',
                description:
                  "Selects the size class set. Icon sizes use a circular matchy-radius-full shape.",
              },
              {
                name: "asChild",
                type: "boolean",
                defaultValue: "false",
                description:
                  'If true, renders Slot.Root instead of "button" and merges props onto the child.',
              },
              {
                name: "label",
                type: "string | undefined",
                defaultValue: "undefined",
                description:
                  "Sets aria-label on the root (icon-only controls with no visible text).",
              },
              {
                name: "pressed",
                type: "boolean | undefined",
                defaultValue: "undefined",
                description:
                  'If truthy, sets data-pressed="true" so the tone darkens 25% (same as :enabled:active).',
              },
              {
                name: "className",
                type: "string",
                defaultValue: "—",
                description:
                  "Merged into buttonVariants({ variant, size, className }). Add matchy-btn plus modifiers by category — color (matchy-btn--primary/leather/white/purchase/line), type (matchy-btn-icon, matchy-btn-expand / matchy-btn-expand--active), and state (:hover, [data-pressed], disabled). Independent from the variant prop above.",
              },
              {
                name: "...props",
                type: 'React.ComponentProps<"button">',
                defaultValue: "—",
                description:
                  "Forwarded to the root (type, disabled, onClick, children, ARIA attrs, etc.).",
              },
            ]}
          />
        </Subsection>

        <Subsection id="button-a11y" title="5. Accessibility">
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              <strong>Role:</strong> renders a native <code>&lt;button&gt;</code>{" "}
              when <code>asChild=&#123;false&#125;</code>; with{" "}
              <code>asChild</code>, the role comes from whatever element is
              passed in instead — make sure that element is itself accessible.
            </p>
            <p>
              <strong>Accessible name:</strong> comes from the button&apos;s
              children text (e.g. &quot;Start swiping&quot;, &quot;See
              saves&quot;), so screen readers announce the actual action. When
              used icon-only, <code>label</code> sets <code>aria-label</code>{" "}
              directly (icons alone aren&apos;t announced).
            </p>
            <p>
              <strong>Keyboard interaction:</strong> as a native{" "}
              <code>&lt;button&gt;</code>, <code>Enter</code> and{" "}
              <code>Space</code> activate it automatically once focused — no custom
              key handling was needed or added.
            </p>
            <p>
              <strong>tabIndex:</strong> not set explicitly by Button; it relies
              on the browser&apos;s native default (<code>0</code> when enabled,
              skipped entirely when disabled), keeping focus order predictable
              without extra configuration.
            </p>
            <p>
              <strong>Focus ring:</strong> shown only on keyboard navigation via{" "}
              <code>focus-visible</code> (not on mouse click), so mouse users
              aren&apos;t shown an outline they didn&apos;t ask for, while
              keyboard users still get a clear focus indicator.
            </p>
            <p>
              <strong>Disabled:</strong> uses the native <code>disabled</code>{" "}
              attribute, which removes the button from the tab order and blocks
              pointer interaction — screen readers announce the unavailable state
              automatically, since the native attribute already communicates this
              without needing a separate <code>aria-disabled</code>.
            </p>
          </div>
        </Subsection>
      </ComponentSection>
    </DocsPage>
  )
}
