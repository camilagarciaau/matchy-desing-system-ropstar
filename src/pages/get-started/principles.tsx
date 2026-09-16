import { Badge } from "@/components/ui/badge"
import { DocsPage } from "@/components/docs/docs-page"
import affordableLuxury from "@/assets/principles/affordable-luxury.jpg"
import immersiveSocialDiscovery from "@/assets/principles/immersive-social-discovery.jpg"
import intuitiveAccessibility from "@/assets/principles/intuitive-accessibility.jpg"
import socialImpact from "@/assets/principles/social-impact.jpg"
import { cn } from "@/lib/utils"

const principles = [
  {
    id: "immersive-social-discovery",
    number: "01",
    title: "Immersive Social Discovery",
    addon: false,
    image: immersiveSocialDiscovery,
    imageAlt:
      "Three friends sitting together and looking at a phone, with polaroid-style photos of clothes and accessories around them",
    description:
      "Curated exploration with wishlists, seller stories, and playful interactive elements that boost engagement, prioritizing clear, scannable information over visual noise.",
    goal: "Everyone can immerse themselves in the Ropstar world and find what they want, at their own pace.",
  },
  {
    id: "intuitive-accessibility",
    number: "02",
    title: "Intuitive Accessibility",
    addon: false,
    image: intuitiveAccessibility,
    imageAlt:
      "Three people of mixed abilities looking at a phone together, surrounded by search, visible pricing, and accessibility cues",
    description:
      "A frictionless experience for any ability or tech-savviness level — clear visual hierarchy, familiar interaction patterns, compliance with contrast, legibility, and screen reader guidelines.",
    goal: "Make sure everyone can use Ropstar, wherever they are and however they shop — with visible pricing, simple navigation, and no barriers along the way.",
  },
  {
    id: "affordable-luxury",
    number: "03",
    title: "Affordable Luxury",
    addon: false,
    image: affordableLuxury,
    imageAlt:
      "A smiling woman unboxing a red designer bag from a Ropstar box, with tagged luxury items showing sale prices",
    description:
      "Curation of aspirational mid-to-high-end brands at accessible price points — luxury codes with authenticity, prestige with personal vulnerability, trust through transparent pricing.",
    goal: "Everyone feels unique and gets the best experience at the best price.",
  },
  {
    id: "social-impact",
    number: "04",
    title: "Social Impact & Sustainability",
    addon: true,
    image: socialImpact,
    imageAlt:
      "A smiling man unboxing secondhand clothing, with a tote that reads Good Clothes Brighter Future and planting imagery",
    description:
      "Highlighting products with social and environmental causes, enabling positive impact without requiring expertise, partnering with brands known for ethical practices.",
    goal: "People feel they're doing good while using the product.",
  },
] as const

export function PrinciplesPage() {
  return (
    <DocsPage
      section="Get Started"
      title="Principles"
      titleId="principles"
      description={
        <>
          <p className="text-lg leading-relaxed">
            Matchy guides and builds the Ropstar experience — the design system
            includes foundational standards, component documentation, and
            guidelines to enable high-quality experiences, fast.
          </p>
          <p className="text-base leading-relaxed">
            These principles came from our user behaviours and needs: They just
            want the best price-to-quality option — sustainability was a bonus,
            not the reason. These four principles reorient the product around
            that real user.
          </p>
        </>
      }
      toc={principles.map((principle) => ({
        id: principle.id,
        label: `${principle.number} ${principle.title}`,
      }))}
    >
      <div className="mt-10 space-y-12 md:mt-12 md:space-y-16 lg:mt-14 lg:space-y-20">
        {principles.map((principle, index) => {
          const imageFirst = index % 2 === 0

          return (
            <article
              key={principle.id}
              id={principle.id}
              className="min-w-0 max-w-full scroll-mt-48"
            >
              <div
                className={cn(
                  "flex min-w-0 flex-col gap-5 md:gap-6",
                  "lg:grid lg:grid-cols-2 lg:items-center lg:gap-12",
                  !imageFirst && "lg:[&>*:first-child]:order-2"
                )}
              >
                <figure className="m-0 w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-border bg-muted">
                  <img
                    src={principle.image}
                    alt={principle.imageAlt}
                    width={1200}
                    height={1200}
                    className="block h-auto w-full max-w-full"
                  />
                </figure>
                <div className="w-full min-w-0 max-w-xl">
                  <p className="text-sm font-medium tracking-wide">
                    {principle.number}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-3">
                    <h2 className="text-xl font-semibold tracking-tight text-balance sm:text-2xl lg:text-3xl">
                      {principle.title}
                    </h2>
                    {principle.addon ? (
                      <Badge variant="shopping">Addon</Badge>
                    ) : null}
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-pretty">
                    {principle.description}
                  </p>
                  <div className="mt-6 border-l-2 border-matchy-accent-highlight pl-4">
                    <p className="text-xs font-semibold tracking-wide uppercase">
                      Goal
                    </p>
                    <p className="mt-1 text-base leading-relaxed text-pretty">
                      {principle.goal}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </DocsPage>
  )
}
