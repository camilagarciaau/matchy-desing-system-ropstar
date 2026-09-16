import { DocsPage } from "@/components/docs/docs-page"
import {
  MatchyIcon,
  type MatchyIconToken,
} from "@/foundations/icons"

const appearanceSamples: {
  token: MatchyIconToken
  label: string
}[] = [
  { token: "matchy-icon-search", label: "Search" },
  { token: "matchy-icon-cart", label: "Cart" },
  { token: "matchy-icon-heart", label: "Heart" },
  { token: "matchy-icon-lock", label: "Lock" },
  { token: "matchy-icon-calendar", label: "Calendar" },
  { token: "matchy-icon-notifications", label: "Notifications" },
]

const iconSizes = [
  {
    token: "matchy-icon-size-sm",
    size: "sm" as const,
    value: "16px",
    use: "Dense UI, inline with body text",
  },
  {
    token: "matchy-icon-size-md",
    size: "md" as const,
    value: "20px",
    use: "Paired with a 16px label",
  },
  {
    token: "matchy-icon-size-lg",
    size: "lg" as const,
    value: "24px",
    use: "Default size, most UI icons",
  },
]

const iconColors = [
  {
    token: "matchy-color-icon-default",
    name: "Default (dark)",
    color: "default" as const,
    use: "Standard, on light backgrounds",
    sampleClass: "bg-background",
  },
  {
    token: "matchy-color-icon-contrast",
    name: "White",
    color: "white" as const,
    use: "On dark or colored backgrounds",
    sampleClass: "bg-matchy-leather",
  },
]

const bestPractices = [
  {
    do: "Give icon-only buttons an accessible name",
    dont: "Use icons purely for decoration with no functional or labeling purpose",
  },
  {
    do: "Use icon colors with at least 3:1 contrast against their background",
    dont: "Use an icon color that fails the 3:1 minimum",
  },
  {
    do: "Center-align icons next to a text label",
    dont: "Baseline-align icons next to a text label",
  },
  {
    do: "Keep one consistent icon style, sourced from lucide-react",
    dont: "Mix icon styles from different sources or hand-drawn one-offs",
  },
] as const

export function IconsPage() {
  return (
    <DocsPage
      section="Foundations"
      title="Icons"
      titleId="icons"
      description="Our icon system provides symbolic representation of key actions and elements within Matchy's interface."
      toc={[
        { id: "characteristics-heading", label: "Characteristics" },
        { id: "appearance-heading", label: "Appearance" },
        { id: "size-heading", label: "Size" },
        { id: "color-heading", label: "Color" },
        { id: "layout-heading", label: "Layout" },
        { id: "best-practices-heading", label: "Best practices" },
        { id: "icons-a11y-heading", label: "Accessibility" },
      ]}
    >
      <p className="mt-6 text-base leading-relaxed">
        Icons should be <strong>obvious</strong> — simple, intuitive, and
        instantly recognizable, even in minimal form;{" "}
        <strong>intentional</strong> — used purposefully to support
        comprehension, since if an icon&apos;s meaning needs explaining, it
        probably shouldn&apos;t be used; and <strong>consistent</strong> — one
        shape language throughout, so icons read as one family rather than
        mixed sources.
      </p>

      <section
        className="mt-14"
        aria-labelledby="characteristics-heading"
      >
        <h2
          id="characteristics-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Characteristics
        </h2>

        <h3
          id="appearance-heading"
          className="mt-8 scroll-mt-48 text-lg font-semibold tracking-tight"
        >
          Appearance
        </h3>
        <p className="mt-3 text-base leading-relaxed">
          All icons are sourced from <code>lucide-react</code> rather than
          custom-drawn — a fast, tested way to get a consistent icon set without
          spending design time redrawing common symbols. A few examples: search,
          cart, heart, lock, calendar, notifications.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {appearanceSamples.map((item) => (
            <div
              key={item.token}
              className="flex flex-col items-center gap-2 rounded-lg border border-border bg-muted px-3 py-4"
            >
              <MatchyIcon token={item.token} size="lg" color="default" />
              <span className="text-xs">{item.label}</span>
            </div>
          ))}
        </div>

        <h3
          id="size-heading"
          className="mt-10 scroll-mt-48 text-lg font-semibold tracking-tight"
        >
          Size
        </h3>
        <p className="mt-3 text-base leading-relaxed">
          Icons follow a fixed scale rather than arbitrary sizing — e.g. the
          swipe deck&apos;s like/dislike icons use <code>lg</code> (24px), while
          a filter chip&apos;s icon uses <code>sm</code> (16px):
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="sr-only">Icon size tokens</caption>
            <thead className="bg-muted">
              <tr>
                <th className="px-3 py-3 font-semibold">Token</th>
                <th className="px-3 py-3 font-semibold">Size</th>
                <th className="px-3 py-3 font-semibold">Example</th>
                <th className="px-3 py-3 font-semibold">Use</th>
              </tr>
            </thead>
            <tbody>
              {iconSizes.map((item) => (
                <tr key={item.token} className="border-t border-border">
                  <td className="px-3 py-3 align-middle font-mono text-xs">
                    {item.token}
                  </td>
                  <td className="px-3 py-3 align-middle font-mono text-xs">
                    {item.value}
                  </td>
                  <td className="px-3 py-3 align-middle">
                    <MatchyIcon
                      token="matchy-icon-search"
                      size={item.size}
                      color="default"
                    />
                  </td>
                  <td className="px-3 py-3 align-middle text-pretty">
                    {item.use}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          id="color-heading"
          className="mt-10 scroll-mt-48 text-lg font-semibold tracking-tight"
        >
          Color
        </h3>
        <p className="mt-3 text-base leading-relaxed">
          Icons appear in 2 states:
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="sr-only">Icon color states</caption>
            <thead className="bg-muted">
              <tr>
                <th className="px-3 py-3 font-semibold">Token</th>
                <th className="px-3 py-3 font-semibold">State</th>
                <th className="px-3 py-3 font-semibold">Example</th>
                <th className="px-3 py-3 font-semibold">Use</th>
              </tr>
            </thead>
            <tbody>
              {iconColors.map((item) => (
                <tr key={item.token} className="border-t border-border">
                  <td className="px-3 py-3 align-middle font-mono text-xs">
                    {item.token}
                  </td>
                  <td className="px-3 py-3 align-middle font-medium">
                    {item.name}
                  </td>
                  <td className="px-3 py-3 align-middle">
                    <div
                      className={`inline-flex rounded-md p-2 ${item.sampleClass}`}
                    >
                      <MatchyIcon
                        token="matchy-icon-search"
                        size="md"
                        color={item.color}
                      />
                    </div>
                  </td>
                  <td className="px-3 py-3 align-middle text-pretty">
                    {item.use}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          id="layout-heading"
          className="mt-10 scroll-mt-48 text-lg font-semibold tracking-tight"
        >
          Layout
        </h3>
        <p className="mt-3 text-base leading-relaxed">
          Since every icon comes from <code>lucide-react</code>, they all sit on
          the same 24×24 grid with a consistent stroke weight — using one source
          instead of mixing icon sets keeps this automatic rather than something
          to manage by hand.
        </p>
        <div
          className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4"
          aria-hidden="true"
        >
          {(
            [
              "matchy-icon-search",
              "matchy-icon-cart",
              "matchy-icon-heart",
              "matchy-icon-lock",
            ] as const
          ).map((token) => (
            <div
              key={token}
              className="flex flex-col items-center gap-2 rounded-lg border border-border bg-muted px-3 py-4"
            >
              <div
                className="relative flex size-12 items-center justify-center rounded-md bg-background"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, color-mix(in oklab, var(--matchy-color-clay) 55%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--matchy-color-clay) 55%, transparent) 1px, transparent 1px)",
                  backgroundSize: "6px 6px",
                }}
              >
                <div className="flex size-6 items-center justify-center outline outline-1 outline-dashed outline-matchy-leather/35">
                  <MatchyIcon token={token} size="lg" color="default" />
                </div>
              </div>
              <span className="font-mono text-[10px] leading-none">24×24</span>
            </div>
          ))}
        </div>
      </section>

      <section
        className="mt-14"
        aria-labelledby="best-practices-heading"
      >
        <h2
          id="best-practices-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Best practices
        </h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full table-fixed border-collapse text-left text-sm">
            <caption className="sr-only">Icon do and don&apos;t rules</caption>
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
              {bestPractices.map((row) => (
                <tr key={row.do} className="border-t border-border">
                  <td className="px-3 py-3 align-top text-pretty">{row.do}</td>
                  <td className="px-3 py-3 align-top text-pretty">{row.dont}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section
        className="mt-14"
        aria-labelledby="icons-a11y-heading"
      >
        <h2
          id="icons-a11y-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Accessibility
        </h2>
        <ul className="mt-3 list-disc space-y-3 pl-5 text-base leading-relaxed">
          <li>
            Icon-only buttons need an accessible name (e.g.{" "}
            <code>aria-label</code>) — an icon alone doesn&apos;t convey meaning
            to screen reader users.
          </li>
          <li>
            Icons need a minimum 3:1 contrast ratio against their background —
            the WCAG standard for non-text elements, separate from the 4.5:1
            minimum used for text.
          </li>
          <li>
            Before adding a new icon to the set, check that its meaning
            translates across cultures — Matchy is built across a Sydney/LATAM
            context, so a symbol that reads clearly in one doesn&apos;t always
            read the same way in the other.
          </li>
        </ul>
      </section>
    </DocsPage>
  )
}
