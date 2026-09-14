import affordableLuxury from "@/assets/principles/affordable-luxury.jpg"
import immersiveSocialDiscovery from "@/assets/principles/immersive-social-discovery.jpg"
import intuitiveAccessibility from "@/assets/principles/intuitive-accessibility.jpg"
import socialImpact from "@/assets/principles/social-impact.jpg"

export type Principle = {
  id: string
  number: string
  title: string
  addon?: boolean
  description: string
  goal: string
  image: string
  imageAlt: string
}

export const principlesIntro =
  "Matchy guides and builds the Ropstar experience — the design system includes foundational standards, component documentation, and guidelines to enable high-quality experiences, fast."

export const principles: Principle[] = [
  {
    id: "immersive-social-discovery",
    number: "01",
    title: "Immersive Social Discovery",
    description:
      "Curated exploration with wishlists, seller stories, and playful interactive elements that boost engagement, prioritizing clear, scannable information over visual noise.",
    goal: "Everyone can immerse themselves in the Ropstar world and find what they want, at their own pace.",
    image: immersiveSocialDiscovery,
    imageAlt:
      "Three friends smiling at a phone together, surrounded by product Polaroids of a sweater, a red bag, jeans, and sunglasses.",
  },
  {
    id: "intuitive-accessibility",
    number: "02",
    title: "Intuitive Accessibility",
    description:
      "A frictionless experience for any ability or tech-savviness level — clear visual hierarchy, familiar interaction patterns, compliance with contrast, legibility, and screen reader guidelines.",
    goal: "Make sure everyone can use Ropstar, wherever they are and however they shop — with visible pricing, simple navigation, and no barriers along the way.",
    image: intuitiveAccessibility,
    imageAlt:
      "Three people of different abilities shopping together on a phone, with icons for search, pricing, text size, audio, and accessibility.",
  },
  {
    id: "affordable-luxury",
    number: "03",
    title: "Affordable Luxury",
    description:
      "Curation of aspirational mid-to-high-end brands at accessible price points — luxury codes with authenticity, prestige with personal vulnerability, trust through transparent pricing.",
    goal: "Everyone feels unique and gets the best experience at the best price.",
    image: affordableLuxury,
    imageAlt:
      "A woman unboxing a red Prada bag from a Ropstar box, next to Polaroids showing Ganni, Adidas, and Coach items with original and sale prices.",
  },
  {
    id: "social-impact",
    number: "04",
    title: "Social Impact & Sustainability",
    addon: true,
    description:
      "Highlighting products with social and environmental causes, enabling positive impact without requiring expertise, partnering with brands known for ethical practices.",
    goal: "People feel they're doing good while using the product.",
    image: socialImpact,
    imageAlt:
      "A man smiling at his phone while unboxing a secondhand order, with Polaroids of a fleece, a sustainability tote, and planting a seedling.",
  },
]
