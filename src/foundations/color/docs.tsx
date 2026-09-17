import { Badge } from "@/components/ui/badge"
import { DocsPage } from "@/components/docs/docs-page"
import {
  auditedPairs,
  primitiveColors,
  semanticGroups,
  type ContrastLevel,
} from "@/foundations/color/color-tokens"
import { cn } from "@/lib/utils"

function Swatch({
  name,
  token,
  hex,
}: {
  name: string
  token: string
  hex: string
}) {
  return (
    <figure className="min-w-0 overflow-hidden rounded-lg border border-border bg-card">
      <div
        className="h-24 w-full"
        style={{ backgroundColor: hex }}
        aria-hidden="true"
      />
      <figcaption className="p-2">
        <p className="font-mono text-xs break-all">{token}</p>
        <p className="mt-0.5 text-sm">{name}</p>
        <p className="mt-0.5 font-mono text-xs uppercase">{hex}</p>
      </figcaption>
    </figure>
  )
}

function PairChip({ name, hex }: { name: string; hex: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className="size-4 shrink-0 rounded-sm border border-border"
        style={{ backgroundColor: hex }}
        aria-hidden="true"
      />
      <span>{name}</span>
    </span>
  )
}

function wcagBadgeVariant(level: ContrastLevel) {
  if (level === "fail") {
    return "destructive" as const
  }
  if (level === "large") {
    return "outline" as const
  }
  return "secondary" as const
}

export function ColorPage() {
  return (
    <DocsPage
      section="Foundations"
      title="Color"
      titleId="color"
      description={
        <>
          <p className="text-lg leading-relaxed">
            Our color palette represents Matchy&apos;s full range of options — a
            thoughtful combination of warm, vibrant, and neutral tones. This
            page covers primary/secondary usage, accent and status colors, and
            accessibility guidance for applying color correctly.
          </p>
          <p className="text-base leading-relaxed">
            This palette moves away from the earthy, sustainability-coded greens
            common across secondhand marketplaces — a deliberate choice, since
            our users shop for price-to-quality first, not sustainability.
            Instead, warm neutrals and energetic accents (named after real
            fabrics — wool, denim, leather) draw from fashion itself, giving
            Matchy a boutique feel rather than a thrift-store one.
          </p>
        </>
      }
      toc={[
        { id: "palette-heading", label: "Color palette" },
        { id: "usage-heading", label: "Usage" },
        ...semanticGroups.map((group) => ({
          id: group.id,
          label: group.title,
        })),
        { id: "accessibility-heading", label: "Accessibility" },
      ]}
    >
      <section className="mt-10" aria-labelledby="palette-heading">
        <h2
          id="palette-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Color palette
        </h2>
        <p className="mt-2 text-base leading-relaxed">
          Primitive tokens are the raw values. Semantic tokens alias these for
          specific roles.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {primitiveColors.map((color) => (
            <Swatch
              key={color.token}
              name={color.name}
              token={color.token}
              hex={color.hex}
            />
          ))}
        </div>
      </section>

      <section className="mt-14" aria-labelledby="usage-heading">
        <h2
          id="usage-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Usage
        </h2>
        <div className="mt-8 space-y-12">
          {semanticGroups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-48">
              <h3 className="text-lg font-semibold tracking-tight">
                {group.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed">
                {group.description}
              </p>
              <div
                className={cn(
                  "mt-4 grid grid-cols-2 gap-3",
                  group.tokens.length > 2 && "lg:grid-cols-4"
                )}
              >
                {group.tokens.map((token) => (
                  <Swatch
                    key={token.token}
                    name={token.name}
                    token={token.token}
                    hex={token.hex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14" aria-labelledby="accessibility-heading">
        <h2
          id="accessibility-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Accessibility
        </h2>
        <p className="mt-2 text-base leading-relaxed">
          Aligns with{" "}
          <a
            href="https://www.w3.org/TR/WCAG22/"
            className="font-medium underline underline-offset-4"
          >
            WCAG 2.2
          </a>
          , which establishes the standard for contrast between text and its
          background. Don&apos;t use color exclusively to convey meaning —
          color should only be used as an enhancement.
        </p>
        <h3 className="mt-8 text-lg font-semibold tracking-tight">
          Audited pairs
        </h3>
        <p className="mt-2 text-base leading-relaxed">
          Pairs with no real use in the system were removed. The table keeps
          only combinations with a decision or note behind them. WCAG status is
          also labeled in text, not by color alone.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <caption className="sr-only">
              Audited color contrast pairs with WCAG results and takeaways
            </caption>
            <thead className="bg-muted">
              <tr>
                <th className="px-3 py-3 font-semibold">Color A</th>
                <th className="px-3 py-3 font-semibold">Color B</th>
                <th className="px-3 py-3 font-semibold">Contrast</th>
                <th className="px-3 py-3 font-semibold">WCAG</th>
                <th className="px-3 py-3 font-semibold">Takeaway</th>
              </tr>
            </thead>
            <tbody>
              {auditedPairs.map((pair) => (
                <tr
                  key={`${pair.colorA.name}-${pair.colorB.name}`}
                  className="border-t border-border"
                >
                  <td className="px-3 py-3 align-top">
                    <PairChip name={pair.colorA.name} hex={pair.colorA.hex} />
                  </td>
                  <td className="px-3 py-3 align-top">
                    <PairChip name={pair.colorB.name} hex={pair.colorB.hex} />
                  </td>
                  <td className="px-3 py-3 align-top font-mono text-xs">
                    {pair.contrast}
                  </td>
                  <td className="px-3 py-3 align-top">
                    <Badge variant={wcagBadgeVariant(pair.wcag)}>
                      {pair.wcag === "fail"
                        ? "Fail"
                        : pair.wcag === "large"
                          ? "Large text/UI"
                          : pair.wcagLabel}
                    </Badge>
                  </td>
                  <td className="px-3 py-3 align-top text-pretty">
                    {pair.takeaway || "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DocsPage>
  )
}
