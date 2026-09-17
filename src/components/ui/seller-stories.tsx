import { useEffect, useId, useState } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { SellerAvatar } from "@/components/ui/seller-avatar"
import { cn } from "@/lib/utils"

import story1 from "@/assets/stories/1.avif"
import story2 from "@/assets/stories/2.avif"
import story3 from "@/assets/stories/3.avif"
import story4 from "@/assets/stories/4.jpg"
import story5 from "@/assets/stories/5.avif"
import story6 from "@/assets/stories/6.avif"
import story7 from "@/assets/stories/7.avif"
import story8 from "@/assets/stories/8.avif"

import "./card-footer.css"
import "./seller-stories.css"

export type SellerStoryItem = {
  src: string
  /** Story title on the card (≤ 20 chars recommended). */
  title: string
  /** Shop name shown with SellerAvatar. */
  shop: string
}

/** Default Home / marketplace seller stories inventory. */
export const defaultSellerStories: SellerStoryItem[] = [
  { src: story1, title: "Street styles", shop: "Prehistoriafv" },
  { src: story2, title: "Under 10K finds", shop: "SomosRopstar" },
  { src: story3, title: "Learn & shop", shop: "Rinovare" },
  { src: story4, title: "New drops", shop: "ClothLab" },
  { src: story5, title: "Vintage picks", shop: "ArchiveCo" },
  { src: story6, title: "Weekend looks", shop: "StudioNine" },
  { src: story7, title: "Editor picks", shop: "FormeMarket" },
  { src: story8, title: "Local makers", shop: "ThreadHouse" },
]

const AUTOPLAY_MS = 60_000

export type StoryCardProps = {
  src: string
  /** Story title on the photo (≤ 20 chars recommended). */
  title: string
  /** Shop name under the photo via SellerAvatar. */
  shop: string
  className?: string
}

/**
 * Story card — portrait clip with top title scrim and shop identity underneath.
 * Building block for Seller Stories rails on Ropstar Home.
 */
export function StoryCard({ src, title, shop, className }: StoryCardProps) {
  return (
    <article className={cn("matchy-story-card", className)}>
      <div className="matchy-story-card-media">
        <img
          src={src}
          alt=""
          draggable={false}
          className="matchy-story-card-image"
        />
        <div className="matchy-card-footer matchy-card-footer--top pointer-events-none absolute inset-x-0 top-0">
          <p className="matchy-story-card-title matchy-label-3 text-matchy-typography-contrast">
            {title}
          </p>
        </div>
      </div>
      <SellerAvatar name={shop} />
    </article>
  )
}

export type SellerStoriesProps = {
  stories?: readonly SellerStoryItem[]
  heading?: string
  autoplayMs?: number
  className?: string
}

/**
 * Seller Stories — peek carousel of StoryCard items.
 * Same interaction as Home banners: left snap, peek, swipe, timed autoplay.
 */
export function SellerStories({
  stories = defaultSellerStories,
  heading = "Seller Stories",
  autoplayMs = AUTOPLAY_MS,
  className,
}: SellerStoriesProps) {
  const [api, setApi] = useState<CarouselApi>()
  const headingId = useId()

  useEffect(() => {
    if (!api) return

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (reduceMotion) return

    const id = window.setInterval(() => {
      api.scrollNext()
    }, autoplayMs)

    return () => window.clearInterval(id)
  }, [api, autoplayMs])

  return (
    <section
      className={cn("matchy-seller-stories", className)}
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="matchy-seller-stories-heading matchy-label-2">
        {heading}
      </h2>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          containScroll: false,
          skipSnaps: false,
          duration: 20,
        }}
      >
        <CarouselContent className="matchy-seller-stories-track">
          {stories.map((story) => (
            <CarouselItem
              key={`${story.shop}-${story.title}`}
              className="matchy-seller-stories-slide !basis-auto !pl-0"
            >
              <StoryCard
                src={story.src}
                title={story.title}
                shop={story.shop}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
