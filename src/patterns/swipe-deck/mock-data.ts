import blazerDark from "@/assets/docs/matchy-swipe/blazer-dark.png"
import blazerWhite from "@/assets/docs/matchy-swipe/blazer-white.png"
import stripedShirt from "@/assets/docs/matchy-swipe/striped-shirt.png"

export type SwipeDeckItem = {
  id: string
  imageUrl: string
  name: string
  price: string
  size: string
}

/** Session inventory — product photos from matchy-swipe. */
export const swipeDeckInventory: SwipeDeckItem[] = [
  {
    id: "sd-01",
    imageUrl: blazerWhite,
    name: "Structured white blazer",
    price: "$42.000",
    size: "Size M",
  },
  {
    id: "sd-02",
    imageUrl: blazerDark,
    name: "Classic dark blazer",
    price: "$48.000",
    size: "Size M",
  },
  {
    id: "sd-03",
    imageUrl: stripedShirt,
    name: "Striped button-up shirt",
    price: "$28.000",
    size: "Size S",
  },
]

export const fashionLoadingQuotes = [
  {
    quote: "Fashion is the armor to survive the reality of everyday life.",
    attribution: "Bill Cunningham",
  },
  {
    quote: "Style is a way to say who you are without having to speak.",
    attribution: "Rachel Zoe",
  },
  {
    quote: "Elegance is refusal.",
    attribution: "Coco Chanel",
  },
] as const
