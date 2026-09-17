export const primitiveColors = [
  {
    name: "Cream Beige",
    token: "matchy-color-cream-beige",
    hex: "#FFF5EC",
    cssVar: "--matchy-color-cream-beige",
  },
  {
    name: "Clay",
    token: "matchy-color-clay",
    hex: "#D9CEC4",
    cssVar: "--matchy-color-clay",
  },
  {
    name: "Panna Yellow",
    token: "matchy-color-panna-yellow",
    hex: "#FFE136",
    cssVar: "--matchy-color-panna-yellow",
  },
  {
    name: "Disruptive Lilac",
    token: "matchy-color-disruptive-lilac",
    hex: "#CBB8FF",
    cssVar: "--matchy-color-disruptive-lilac",
  },
  {
    name: "Wool Coral",
    token: "matchy-color-wool-coral",
    hex: "#FF6872",
    cssVar: "--matchy-color-wool-coral",
  },
  {
    name: "Brick Denim",
    token: "matchy-color-brick-denim",
    hex: "#F05A1A",
    cssVar: "--matchy-color-brick-denim",
  },
  {
    name: "Leather",
    token: "matchy-color-leather",
    hex: "#383838",
    cssVar: "--matchy-color-leather",
  },
] as const

export const semanticGroups = [
  {
    id: "primary",
    title: "Primary color",
    description:
      "The primary color is displayed most frequently across screens and components, used to convey high-emphasis actions.",
    tokens: [
      {
        name: "Primary",
        token: "matchy-color-primary",
        hex: "#FFE136",
        cssVar: "--matchy-color-primary",
      },
    ],
  },
  {
    id: "secondary",
    title: "Secondary color",
    description:
      "Used alongside primary for lower-emphasis actions and supporting UI.",
    tokens: [
      {
        name: "Secondary",
        token: "matchy-color-secondary",
        hex: "#383838",
        cssVar: "--matchy-color-secondary",
      },
    ],
  },
  {
    id: "accent",
    title: "Accent color",
    description:
      "Offers ways to accent the UI when primary doesn't fit the layout, or to highlight something important. Split into two roles.",
    tokens: [
      {
        name: "Useful accent",
        token: "matchy-color-accent-useful",
        hex: "#D9CEC4",
        cssVar: "--matchy-color-accent-useful",
      },
      {
        name: "Highlight accent",
        token: "matchy-color-accent-highlight",
        hex: "#F05A1A",
        cssVar: "--matchy-color-accent-highlight",
      },
    ],
  },
  {
    id: "shopping",
    title: "Shopping color",
    description: "Primary color to indicate shopping-related features.",
    tokens: [
      {
        name: "Shopping",
        token: "matchy-color-shopping",
        hex: "#CBB8FF",
        cssVar: "--matchy-color-shopping",
      },
    ],
  },
  {
    id: "background-status",
    title: "Background and status color",
    description:
      "Used behind text or applied to other elements to deliver specific messages: information, success, warning, and error.",
    tokens: [
      {
        name: "Default",
        token: "matchy-color-background-default",
        hex: "#FFF5EC",
        cssVar: "--matchy-color-background-default",
      },
      {
        name: "Info",
        token: "matchy-color-background-info",
        hex: "#CBB8FF",
        cssVar: "--matchy-color-background-info",
      },
      {
        name: "Success",
        token: "matchy-color-background-success",
        hex: "#B8E434",
        cssVar: "--matchy-color-background-success",
      },
      {
        name: "Warning",
        token: "matchy-color-background-warning",
        hex: "#EF8F28",
        cssVar: "--matchy-color-background-warning",
      },
      {
        name: "Error",
        token: "matchy-color-background-error",
        hex: "#D32F2F",
        cssVar: "--matchy-color-background-error",
      },
      {
        name: "Neutral",
        token: "matchy-color-background-neutral",
        hex: "#D9CEC4",
        cssVar: "--matchy-color-background-neutral",
      },
    ],
  },
  {
    id: "typography",
    title: "Typography and icon color",
    description: "Used on text elements such as headings and body copy.",
    tokens: [
      {
        name: "Default",
        token: "matchy-color-typography-and-icon-default",
        hex: "#383838",
        cssVar: "--matchy-color-typography-and-icon-default",
      },
      {
        name: "Subtle",
        token: "matchy-color-typography-and-icon-subtle",
        hex: "#D9CEC4",
        cssVar: "--matchy-color-typography-and-icon-subtle",
      },
      {
        name: "Contrast",
        token: "matchy-color-typography-and-icon-contrast",
        hex: "#FFF5EC",
        cssVar: "--matchy-color-typography-and-icon-contrast",
      },
    ],
  },
] as const

export type ContrastLevel = "fail" | "large" | "aa" | "aaa"

export const auditedPairs = [
  {
    colorA: { name: "Cream Beige", hex: "#FFF5EC" },
    colorB: { name: "Panna Yellow", hex: "#FFE136" },
    contrast: "1.22:1",
    wcag: "fail" as ContrastLevel,
    wcagLabel: "Fail",
    takeaway: "Don't use together.",
  },
  {
    colorA: { name: "Cream Beige", hex: "#FFF5EC" },
    colorB: { name: "Success", hex: "#B8E434" },
    contrast: "1.38:1",
    wcag: "fail" as ContrastLevel,
    wcagLabel: "Fail",
    takeaway:
      "Cream Beige is the default page background — Success appears as small accent fills (badges/icons), not as text over full cream areas, so this isn't a practical risk.",
  },
  {
    colorA: { name: "Cream Beige", hex: "#FFF5EC" },
    colorB: { name: "Clay", hex: "#D9CEC4" },
    contrast: "1.44:1",
    wcag: "fail" as ContrastLevel,
    wcagLabel: "Fail",
    takeaway:
      "Cream Beige is the default background — Clay is used as a surface/fill on top of it, not as text.",
  },
  {
    colorA: { name: "Cream Beige", hex: "#FFF5EC" },
    colorB: { name: "Disruptive Lilac", hex: "#CBB8FF" },
    contrast: "1.65:1",
    wcag: "fail" as ContrastLevel,
    wcagLabel: "Fail",
    takeaway:
      "Cream Beige is the default background — Lilac appears as accent fills, not as text over full cream areas.",
  },
  {
    colorA: { name: "Cream Beige", hex: "#FFF5EC" },
    colorB: { name: "Warning", hex: "#EF8F28" },
    contrast: "2.26:1",
    wcag: "fail" as ContrastLevel,
    wcagLabel: "Fail",
    takeaway:
      "Cream Beige is the default background — Warning appears as accent fills, not as text over full cream areas.",
  },
  {
    colorA: { name: "Cream Beige", hex: "#FFF5EC" },
    colorB: { name: "Wool Coral", hex: "#FF6872" },
    contrast: "2.61:1",
    wcag: "fail" as ContrastLevel,
    wcagLabel: "Fail",
    takeaway:
      "Used only within photography/imagery — not a UI text-and-background pairing.",
  },
  {
    colorA: { name: "Cream Beige", hex: "#FFF5EC" },
    colorB: { name: "Brick Denim", hex: "#F05A1A" },
    contrast: "3.16:1",
    wcag: "large" as ContrastLevel,
    wcagLabel: "Large text/UI",
    takeaway: "Appropriate for headline-weight titles, not body copy.",
  },
  {
    colorA: { name: "Cream Beige", hex: "#FFF5EC" },
    colorB: { name: "Error", hex: "#D32F2F" },
    contrast: "4.63:1 (corrected)",
    wcag: "aa" as ContrastLevel,
    wcagLabel: "AA",
    takeaway: "",
  },
  {
    colorA: { name: "Cream Beige", hex: "#FFF5EC" },
    colorB: { name: "Leather", hex: "#383838" },
    contrast: "10.91:1",
    wcag: "aaa" as ContrastLevel,
    wcagLabel: "AAA",
    takeaway: "Default, always-safe text/background pairing.",
  },
  {
    colorA: { name: "Panna Yellow", hex: "#FFE136" },
    colorB: { name: "Leather", hex: "#383838" },
    contrast: "8.98:1",
    wcag: "aaa" as ContrastLevel,
    wcagLabel: "AAA",
    takeaway: "Reliable pairing — dark text on Primary yellow.",
  },
  {
    colorA: { name: "Success", hex: "#B8E434" },
    colorB: { name: "Leather", hex: "#383838" },
    contrast: "7.93:1",
    wcag: "aaa" as ContrastLevel,
    wcagLabel: "AAA",
    takeaway: "Reliable pairing — dark text on Success fills.",
  },
  {
    colorA: { name: "Clay", hex: "#D9CEC4" },
    colorB: { name: "Leather", hex: "#383838" },
    contrast: "7.58:1",
    wcag: "aaa" as ContrastLevel,
    wcagLabel: "AAA",
    takeaway: "Reliable pairing — dark text on Clay fills.",
  },
  {
    colorA: { name: "Disruptive Lilac", hex: "#CBB8FF" },
    colorB: { name: "Leather", hex: "#383838" },
    contrast: "6.62:1",
    wcag: "aa" as ContrastLevel,
    wcagLabel: "AA (not AAA)",
    takeaway: "Strong pairing — dark text on Lilac fills.",
  },
  {
    colorA: { name: "Wool Coral", hex: "#FF6872" },
    colorB: { name: "Leather", hex: "#383838" },
    contrast: "4.18:1",
    wcag: "aa" as ContrastLevel,
    wcagLabel: "AA",
    takeaway: "Passes for normal text on Coral fills.",
  },
  {
    colorA: { name: "Clay", hex: "#D9CEC4" },
    colorB: { name: "Disruptive Lilac", hex: "#CBB8FF" },
    contrast: "1.15:1",
    wcag: "fail" as ContrastLevel,
    wcagLabel: "Fail",
    takeaway:
      "Very low contrast — don't place directly adjacent without a separating border or neutral divider.",
  },
  {
    colorA: { name: "Clay", hex: "#D9CEC4" },
    colorB: { name: "Warning", hex: "#EF8F28" },
    contrast: "1.57:1",
    wcag: "fail" as ContrastLevel,
    wcagLabel: "Fail",
    takeaway:
      "Low contrast — avoid direct adjacency without a separating border.",
  },
  {
    colorA: { name: "Clay", hex: "#D9CEC4" },
    colorB: { name: "Brick Denim", hex: "#F05A1A" },
    contrast: "2.20:1",
    wcag: "fail" as ContrastLevel,
    wcagLabel: "Fail",
    takeaway: "Low contrast — avoid direct adjacency without separation.",
  },
  {
    colorA: { name: "Clay", hex: "#D9CEC4" },
    colorB: { name: "Error", hex: "#D32F2F" },
    contrast: "3.22:1 (recalculated)",
    wcag: "large" as ContrastLevel,
    wcagLabel: "Large text/UI",
    takeaway: "Avoid as a direct text pairing.",
  },
  {
    colorA: { name: "Disruptive Lilac", hex: "#CBB8FF" },
    colorB: { name: "Warning", hex: "#EF8F28" },
    contrast: "1.37:1",
    wcag: "fail" as ContrastLevel,
    wcagLabel: "Fail",
    takeaway:
      "Very low contrast — avoid direct adjacency without separation.",
  },
  {
    colorA: { name: "Brick Denim", hex: "#F05A1A" },
    colorB: { name: "Leather", hex: "#383838" },
    contrast: "3.45:1",
    wcag: "large" as ContrastLevel,
    wcagLabel: "Large text/UI",
    takeaway: "Appropriate for headline-weight titles, not body copy.",
  },
] as const
