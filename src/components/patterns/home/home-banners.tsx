import { useEffect, useState } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

import bannerBetty from "@/assets/banners/betty-la-fea.png"
import bannerLuxury from "@/assets/banners/luxury.png"
import bannerMoney from "@/assets/banners/money.png"
import bannerPrices from "@/assets/banners/prices.png"
import bannerSellers from "@/assets/banners/sellers.png"

/** Promotional banners — prices first, then catalog order. */
const HOME_BANNERS = [
  { src: bannerPrices, alt: "Prices promotional banner" },
  { src: bannerMoney, alt: "Money promotional banner" },
  { src: bannerLuxury, alt: "Luxury promotional banner" },
  { src: bannerSellers, alt: "Sellers promotional banner" },
  { src: bannerBetty, alt: "Betty la fea promotional banner" },
] as const

const AUTOPLAY_MS = 60_000

/**
 * Home promo carousel — active slide left-aligned, peek of next on the right.
 * Swipe + 1-minute autoplay; equal gap between every banner.
 */
export function HomeBanners() {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (reduceMotion) return

    const id = window.setInterval(() => {
      api.scrollNext()
    }, AUTOPLAY_MS)

    return () => window.clearInterval(id)
  }, [api])

  return (
    <section
      className="matchy-home-banners"
      aria-label="Promotional banners"
    >
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          containScroll: false,
          skipSnaps: false,
          // Embla duration units ≈ matchy-motion-slow feel with standard easing
          duration: 20,
        }}
      >
        <CarouselContent className="matchy-home-banners-track">
          {HOME_BANNERS.map((banner) => (
            <CarouselItem
              key={banner.alt}
              className="matchy-home-banners-slide !basis-auto !pl-0"
            >
              <img
                src={banner.src}
                alt={banner.alt}
                draggable={false}
                className="matchy-home-banner"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
