import type { LucideIcon } from "lucide-react"
import {
  Archive,
  ArrowUpDown,
  BadgeDollarSign,
  Bell,
  Camera,
  Eye,
  Lock,
  MapPin,
  Pencil,
  Search,
  Shield,
  ShoppingCart,
  SlidersHorizontal,
  Tag,
  Trash2,
  Truck,
  User,
} from "lucide-react"

import { DocsPage } from "@/components/docs/docs-page"
import { FoundationRow } from "@/pages/foundations/foundation-row"

const iconStates = [
  {
    name: "Default (dark)",
    use: "Standard, on light backgrounds",
  },
  {
    name: "White",
    use: "On dark or colored backgrounds",
  },
  {
    name: "Accent (yellow)",
    use: "Active or selected state",
  },
] as const

const libraryIcons: {
  token: string
  use: string
  Icon: LucideIcon
}[] = [
  { token: "matchy-icon-filters", use: "Filters", Icon: SlidersHorizontal },
  { token: "matchy-icon-sort", use: "Sort", Icon: ArrowUpDown },
  { token: "matchy-icon-search", use: "Search", Icon: Search },
  { token: "matchy-icon-cart", use: "Cart", Icon: ShoppingCart },
  { token: "matchy-icon-profile", use: "Profile", Icon: User },
  { token: "matchy-icon-notifications", use: "Notifications", Icon: Bell },
  { token: "matchy-icon-location", use: "Location", Icon: MapPin },
  { token: "matchy-icon-edit", use: "Edit", Icon: Pencil },
  { token: "matchy-icon-delete", use: "Delete", Icon: Trash2 },
  { token: "matchy-icon-tags", use: "Tags", Icon: Tag },
  { token: "matchy-icon-visibility", use: "Visibility", Icon: Eye },
  { token: "matchy-icon-camera", use: "Camera", Icon: Camera },
  { token: "matchy-icon-archive", use: "Archive", Icon: Archive },
  { token: "matchy-icon-lock", use: "Lock", Icon: Lock },
  { token: "matchy-icon-delivery", use: "Delivery", Icon: Truck },
  { token: "matchy-icon-shield", use: "Shield", Icon: Shield },
  { token: "matchy-icon-price-tag", use: "Price tag", Icon: BadgeDollarSign },
]

function IconStatesSample({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="flex flex-wrap items-center gap-3" aria-hidden="true">
      <div className="flex flex-col items-center gap-2 rounded-md bg-background px-4 py-3">
        <Icon className="size-6 text-matchy-leather" strokeWidth={1.75} />
        <span className="font-mono text-[10px] leading-none">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2 rounded-md bg-matchy-leather px-4 py-3">
        <Icon
          className="size-6 text-matchy-typography-contrast"
          strokeWidth={1.75}
        />
        <span className="font-mono text-[10px] leading-none text-matchy-typography-contrast">
          White
        </span>
      </div>
      <div className="flex flex-col items-center gap-2 rounded-md bg-matchy-leather px-4 py-3">
        <Icon className="size-6 text-matchy-panna-yellow" strokeWidth={1.75} />
        <span className="font-mono text-[10px] leading-none text-matchy-panna-yellow">
          Accent
        </span>
      </div>
    </div>
  )
}

export function IconsPage() {
  const toc = [
    { id: "icon-library-heading", label: "Icon library" },
    ...libraryIcons.map((item) => ({
      id: item.token,
      label: item.use,
    })),
    { id: "icons-a11y-heading", label: "Accessibility" },
  ]

  return (
    <DocsPage
      section="Foundations"
      title="Icons"
      titleId="icons"
      toc={toc}
    >
      <section
        className="mt-10 max-w-3xl"
        aria-labelledby="icon-library-heading"
      >
        <h2
          id="icon-library-heading"
          className="scroll-mt-8 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Icon library
        </h2>
        <p className="mt-3 text-base leading-relaxed">
          The full set of functional UI icons, each in 3 states:
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="sr-only">Icon color states</caption>
            <thead className="bg-muted">
              <tr>
                <th className="px-3 py-3 font-semibold">State</th>
                <th className="px-3 py-3 font-semibold">Use</th>
              </tr>
            </thead>
            <tbody>
              {iconStates.map((state) => (
                <tr key={state.name} className="border-t border-border">
                  <td className="px-3 py-3 align-top font-medium">
                    {state.name}
                  </td>
                  <td className="px-3 py-3 align-top text-pretty">{state.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          {libraryIcons.map(({ token, use, Icon }) => (
            <FoundationRow key={token} id={token} token={token} use={use}>
              <IconStatesSample Icon={Icon} />
            </FoundationRow>
          ))}
        </div>
      </section>

      <section
        className="mt-14 max-w-3xl"
        aria-labelledby="icons-a11y-heading"
      >
        <h2
          id="icons-a11y-heading"
          className="scroll-mt-8 text-xl font-semibold tracking-tight sm:text-2xl"
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
            Don&apos;t rely on the yellow &quot;active&quot; state color alone
            to show selection — pair it with a shape or fill change too, since
            color-blind users may not perceive the yellow/default distinction.
          </li>
          <li>
            Icons need a minimum 3:1 contrast ratio against their background —
            this is the WCAG standard for non-text elements, separate from the
            4.5:1 minimum used for text.
          </li>
          <li>
            When an icon sits next to a text label, center-align it vertically
            with the text rather than aligning to the text baseline — baseline
            alignment makes icons look like they&apos;re floating or
            misaligned.
          </li>
          <li>
            Before adding a new icon to the set, check that its meaning
            translates across cultures
          </li>
        </ul>
      </section>
    </DocsPage>
  )
}
