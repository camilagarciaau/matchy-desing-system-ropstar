import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
import TinderCard from "react-tinder-card"

import { Button } from "@/components/ui/button"
import { ProductCardFace } from "@/components/ui/product-card-face"
import { MatchyIcon } from "@/foundations/icons"
import { cn } from "@/lib/utils"

import { LoadingScreen, type FashionQuote } from "@/components/ui/loading-spinner"
import {
  fashionLoadingQuotes,
  swipeDeckInventory,
  type SwipeDeckItem,
} from "./mock-data"
import "./swipe-deck.css"

type DeckPhase = "onboarding" | "loading" | "deck" | "empty"
type SwipeAction = "like" | "dislike"
type LastActionFeedback = SwipeAction | null

type HistoryEntry = {
  item: SwipeDeckItem
  action: SwipeAction
  /** True when the like came from Buy now / add to cart. */
  addedToCart?: boolean
}

type TinderCardApi = {
  swipe: (dir?: "left" | "right" | "up" | "down") => Promise<void>
  restoreCard: () => Promise<void>
}

/** Stable identity — a new array each render rebinds react-tinder-card listeners mid-drag. */
const PREVENT_SWIPE = ["up", "down"]

const DEFAULT_LOADING_QUOTE = fashionLoadingQuotes[0]

function itemAltText(item: SwipeDeckItem) {
  return `${item.name}, ${item.size}`
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduced(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  return reduced
}

function PeekStack({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden="true"
    >
      <div className="swipe-deck-peek swipe-deck-peek-back" />
      <div className="swipe-deck-peek swipe-deck-peek-mid" />
    </div>
  )
}

function DeckShell({
  children,
  below,
}: {
  children: ReactNode
  /** Content under the card (e.g. controls), above “Back to Ropstar.co”. */
  below?: ReactNode
}) {
  return (
    <div className="mx-auto flex h-full w-full max-w-sm flex-col">
      <div
        className="relative w-full flex-1"
        style={{
          marginTop: "var(--matchy-space-md)",
          paddingTop: "var(--matchy-space-sm)",
        }}
      >
        <PeekStack />
        <div
          className="relative z-10 aspect-[3/4] w-full overflow-hidden"
          style={{ borderRadius: "var(--matchy-radius-lg)" }}
        >
          {children}
        </div>
      </div>
      {below}
      <a
        href="https://ropstar.co"
        className="swipe-deck-back-link matchy-link matchy-link--default matchy-label-3"
      >
        Back to Ropstar.co
      </a>
    </div>
  )
}

function OnboardingScreen({
  firstItem,
  onStartSwiping,
}: {
  firstItem: SwipeDeckItem
  onStartSwiping: () => void
}) {
  return (
    <DeckShell>
      <ProductCardFace
        imageUrl={firstItem.imageUrl}
        alt={itemAltText(firstItem)}
      >
        <div className="swipe-deck-overlay absolute inset-0 z-10 flex flex-col overflow-hidden">
          <div className="relative grid min-h-0 flex-1 grid-cols-2">
            <div
              className="flex flex-col items-center justify-center text-center"
              style={{
                gap: "var(--matchy-space-sm)",
                paddingInline: "var(--matchy-space-sm)",
                paddingBlock: "var(--matchy-space-lg)",
              }}
            >
              <span
                className="swipe-deck-icon-default inline-flex size-14 items-center justify-center rounded-full bg-matchy-background-default"
                aria-hidden="true"
              >
                <MatchyIcon
                  token="matchy-icon-close"
                  size="lg"
                  color="default"
                />
              </span>
              <p className="matchy-label-2 text-matchy-typography-contrast">
                Dislike
              </p>
              <p className="matchy-label-3 text-matchy-typography-contrast">
                (Discard product)
              </p>
            </div>

            <div
              className="pointer-events-none absolute inset-y-[12%] left-1/2 w-0 border-l border-dashed border-matchy-typography-contrast/70"
              aria-hidden="true"
            />

            <div
              className="flex flex-col items-center justify-center text-center"
              style={{
                gap: "var(--matchy-space-sm)",
                paddingInline: "var(--matchy-space-sm)",
                paddingBlock: "var(--matchy-space-lg)",
              }}
            >
              <span
                className="swipe-deck-icon-default inline-flex size-14 items-center justify-center rounded-full bg-matchy-background-default"
                aria-hidden="true"
              >
                <MatchyIcon
                  token="matchy-icon-heart"
                  size="lg"
                  color="default"
                />
              </span>
              <p className="matchy-label-2 text-matchy-typography-contrast">
                Like
              </p>
              <p className="matchy-label-3 text-matchy-typography-contrast">
                (Save item)
              </p>
            </div>
          </div>

          <div style={{ padding: "var(--matchy-space-md)" }}>
            <Button
              type="button"
              className="matchy-btn matchy-btn--primary w-full"
              onClick={onStartSwiping}
            >
              Start swiping
            </Button>
          </div>
        </div>
      </ProductCardFace>
    </DeckShell>
  )
}

function EmptyScreen({
  lastItem,
  likedCount,
  onSeeSaves,
}: {
  lastItem: SwipeDeckItem
  likedCount: number
  onSeeSaves: () => void
}) {
  return (
    <DeckShell>
      <ProductCardFace
        imageUrl={lastItem.imageUrl}
        alt={itemAltText(lastItem)}>
        <div className="swipe-deck-overlay absolute inset-0 z-10 flex flex-col overflow-hidden">
          <div
            className="flex flex-1 flex-col justify-center"
            style={{
              gap: "var(--matchy-space-lg)",
              paddingInline: "var(--matchy-space-lg)",
            }}
          >
            <p className="matchy-paragraph text-left text-pretty text-matchy-typography-contrast">
              No matches left — open your saves to keep shopping.
            </p>
            <Button
              type="button"
              className="matchy-btn matchy-btn--primary self-start"
              onClick={onSeeSaves}
            >
              See saves
              {likedCount > 0 ? ` (${likedCount})` : ""}
            </Button>
          </div>
        </div>
      </ProductCardFace>
    </DeckShell>
  )
}

export function SwipeDeck() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const inventory = swipeDeckInventory
  const firstItem = inventory[0]

  const [phase, setPhase] = useState<DeckPhase>("onboarding")
  const [remaining, setRemaining] = useState<SwipeDeckItem[]>(() => [
    ...inventory,
  ])
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [lastAction, setLastAction] = useState<LastActionFeedback>(null)
  const [liveMessage, setLiveMessage] = useState("")
  const [loadingQuote, setLoadingQuote] = useState<FashionQuote>(
    () => DEFAULT_LOADING_QUOTE
  )
  /** Cart badge count — bumps immediately on Buy now (same cadence as pressed flash). */
  const [cartCount, setCartCount] = useState(0)

  const cardApiRef = useRef<TinderCardApi | null>(null)
  const setCardApi = useCallback((api: TinderCardApi | null) => {
    cardApiRef.current = api
  }, [])
  const swipeLock = useRef(false)
  const feedbackTimer = useRef<number | null>(null)
  const pendingAction = useRef<SwipeAction | null>(null)
  const pendingCartAdd = useRef(false)
  const remainingRef = useRef(remaining)
  remainingRef.current = remaining

  const current = remaining[0]
  const lastSeenItem = history[history.length - 1]?.item ?? firstItem
  const likedCount = history.filter((entry) => entry.action === "like").length

  useEffect(() => {
    return () => {
      if (feedbackTimer.current !== null) {
        window.clearTimeout(feedbackTimer.current)
      }
    }
  }, [])

  const flashAction = (action: SwipeAction, message: string) => {
    setLastAction(action)
    setLiveMessage(message)
    if (feedbackTimer.current !== null) {
      window.clearTimeout(feedbackTimer.current)
    }
    feedbackTimer.current = window.setTimeout(() => {
      setLastAction(null)
    }, 420)
  }

  const commitSwipe = (action: SwipeAction) => {
    if (swipeLock.current || remainingRef.current.length === 0) {
      return
    }
    swipeLock.current = true

    const [item, ...rest] = remainingRef.current
    remainingRef.current = rest

    const addedToCart = action === "like" && pendingCartAdd.current
    pendingCartAdd.current = false

    setHistory((prev) => [...prev, { item, action, addedToCart }])
    setRemaining(rest)

    if (rest.length === 0) {
      setPhase("empty")
    }

    window.setTimeout(() => {
      swipeLock.current = false
    }, prefersReducedMotion ? 0 : 160)
  }

  const startDeck = () => {
    setLoadingQuote(DEFAULT_LOADING_QUOTE)
    setPhase("loading")
    window.setTimeout(
      () => {
        const next = [...inventory]
        remainingRef.current = next
        setRemaining(next)
        setHistory([])
        setLastAction(null)
        setLiveMessage("")
        setCartCount(0)
        pendingCartAdd.current = false
        setPhase("deck")
      },
      prefersReducedMotion ? 200 : 1600
    )
  }

  const triggerSwipe = async (
    action: SwipeAction,
    options?: { message?: string; addToCart?: boolean }
  ) => {
    if (!current || swipeLock.current || phase !== "deck") {
      return
    }

    pendingCartAdd.current = Boolean(options?.addToCart)
    if (options?.addToCart) {
      // Same moment as heart/X pressed flash — don't wait for swipe commit.
      setCartCount((count) => count + 1)
    }
    const message =
      options?.message ??
      (action === "like" ? "Saved" : "Skipped")
    flashAction(action, message)

    const api = cardApiRef.current
    if (!prefersReducedMotion && api) {
      pendingAction.current = action
      try {
        await api.swipe(action === "like" ? "right" : "left")
      } catch {
        // Fall through to commit below if the library swipe fails.
      }
      if (pendingAction.current === action) {
        pendingAction.current = null
        commitSwipe(action)
      }
      return
    }

    commitSwipe(action)
  }

  const handleSwipe = (direction: string) => {
    if (direction !== "left" && direction !== "right") {
      return
    }
    const action: SwipeAction = direction === "right" ? "like" : "dislike"
    if (action === "dislike") {
      pendingCartAdd.current = false
    }
    pendingAction.current = action
    flashAction(
      action,
      pendingCartAdd.current && action === "like"
        ? "Added to cart"
        : action === "like"
          ? "Saved"
          : "Skipped"
    )
  }

  const handleRequirementFulfilled = (direction: string) => {
    if (direction === "right") {
      setLastAction("like")
      return
    }
    if (direction === "left") {
      setLastAction("dislike")
    }
  }

  const handleRequirementUnfulfilled = () => {
    setLastAction(null)
    if (pendingCartAdd.current) {
      setCartCount((count) => Math.max(0, count - 1))
    }
    pendingCartAdd.current = false
  }

  const handleCardLeftScreen = () => {
    const action = pendingAction.current
    pendingAction.current = null
    if (!action) {
      return
    }
    commitSwipe(action)
  }

  const handleSwipeRef = useRef(handleSwipe)
  const handleCardLeftScreenRef = useRef(handleCardLeftScreen)
  const handleRequirementFulfilledRef = useRef(handleRequirementFulfilled)
  const handleRequirementUnfulfilledRef = useRef(handleRequirementUnfulfilled)
  handleSwipeRef.current = handleSwipe
  handleCardLeftScreenRef.current = handleCardLeftScreen
  handleRequirementFulfilledRef.current = handleRequirementFulfilled
  handleRequirementUnfulfilledRef.current = handleRequirementUnfulfilled

  const onSwipeStable = useCallback((direction: string) => {
    handleSwipeRef.current(direction)
  }, [])

  const onCardLeftScreenStable = useCallback(() => {
    handleCardLeftScreenRef.current()
  }, [])

  const onRequirementFulfilledStable = useCallback((direction: string) => {
    handleRequirementFulfilledRef.current(direction)
  }, [])

  const onRequirementUnfulfilledStable = useCallback(() => {
    handleRequirementUnfulfilledRef.current()
  }, [])

  const handleUndo = () => {
    if (history.length === 0 || swipeLock.current) {
      return
    }

    const previous = history[history.length - 1]
    setHistory((prev) => prev.slice(0, -1))
    setRemaining((prev) => {
      const next = [previous.item, ...prev]
      remainingRef.current = next
      return next
    })
    if (previous.addedToCart) {
      setCartCount((count) => Math.max(0, count - 1))
    }
    setLastAction(null)
    setLiveMessage("Undid last action")
    setPhase("deck")
  }

  return (
    <section
      className="swipe-deck-root flex w-full flex-col overflow-hidden border border-matchy-shopping"
      aria-label="Swipe deck playground"
    >
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {liveMessage}
      </div>

      {phase === "onboarding" && firstItem ? (
        <OnboardingScreen firstItem={firstItem} onStartSwiping={startDeck} />
      ) : null}

      {phase === "loading" && firstItem ? (
        <DeckShell>
          <ProductCardFace
            variant="blur"
            imageUrl={firstItem.imageUrl}
            alt={itemAltText(firstItem)}
          >
            <LoadingScreen quote={loadingQuote} />
          </ProductCardFace>
        </DeckShell>
      ) : null}

      {phase === "empty" && lastSeenItem ? (
        <EmptyScreen
          lastItem={lastSeenItem}
          likedCount={likedCount}
          onSeeSaves={() => {
            setLiveMessage(
              likedCount > 0
                ? `Saves has ${likedCount} items`
                : "Your saves are empty"
            )
          }}
        />
      ) : null}

      {phase === "deck" && current ? (
        <DeckShell
          below={
            <div className="swipe-deck-controls">
              <div className="swipe-deck-controls-row">
                <Button
                  type="button"
                  size="icon-lg"
                  label="Undo last action"
                  stopPropagationOnPointerDown
                  disabled={history.length === 0}
                  className="matchy-btn matchy-btn-icon matchy-btn--leather swipe-deck-control"
                  onClick={handleUndo}
                >
                  <MatchyIcon
                    token="matchy-icon-undo"
                    size="lg"
                    color="white"
                  />
                </Button>
                <Button
                  type="button"
                  size="icon-lg"
                  label="Skip this item"
                  stopPropagationOnPointerDown
                  pressed={lastAction === "dislike"}
                  data-feedback="dislike"
                  className="matchy-btn matchy-btn-icon matchy-btn--leather swipe-deck-control"
                  onClick={() => {
                    void triggerSwipe("dislike")
                  }}
                >
                  <MatchyIcon
                    token="matchy-icon-close"
                    size="lg"
                    color="white"
                  />
                </Button>
                <Button
                  type="button"
                  size="icon-lg"
                  label="Save item"
                  stopPropagationOnPointerDown
                  pressed={lastAction === "like"}
                  data-feedback="like"
                  className="matchy-btn matchy-btn-icon matchy-btn--leather swipe-deck-control"
                  onClick={() => {
                    void triggerSwipe("like")
                  }}
                >
                  <MatchyIcon
                    token="matchy-icon-heart"
                    size="lg"
                    color={lastAction === "like" ? "default" : "white"}
                  />
                </Button>
                <Button
                  type="button"
                  size="icon-lg"
                  label={
                    cartCount > 0
                      ? `Buy now, ${cartCount} in cart`
                      : "Buy now"
                  }
                  stopPropagationOnPointerDown
                  className="matchy-btn matchy-btn-icon matchy-btn--purchase swipe-deck-control"
                  onClick={() => {
                    void triggerSwipe("like", {
                      addToCart: true,
                      message: "Added to cart",
                    })
                  }}
                >
                  <span className="swipe-deck-cart-icon relative inline-flex">
                    <MatchyIcon
                      token="matchy-icon-cart"
                      size="lg"
                      color="default"
                    />
                    {cartCount > 0 ? (
                      <span
                        className="swipe-deck-cart-badge"
                        aria-hidden="true"
                      >
                        {cartCount > 99 ? "99+" : cartCount}
                      </span>
                    ) : null}
                  </span>
                </Button>
              </div>
            </div>
          }
        >
          <div className="swipe-deck-stage relative h-full w-full">
            <TinderCard
              key={current.id}
              ref={setCardApi}
              className="swipe-deck-card absolute inset-0 z-10 h-full w-full"
              onSwipe={onSwipeStable}
              onCardLeftScreen={onCardLeftScreenStable}
              onSwipeRequirementFulfilled={onRequirementFulfilledStable}
              onSwipeRequirementUnfulfilled={onRequirementUnfulfilledStable}
              preventSwipe={PREVENT_SWIPE}
              flickOnSwipe={!prefersReducedMotion}
              swipeRequirementType="position"
              swipeThreshold={60}
            >
              <ProductCardFace
                variant="footer"
                imageUrl={current.imageUrl}
                alt={itemAltText(current)}
                className="cursor-grab active:cursor-grabbing"
              >
                <div className="border-l-2 border-matchy-shopping pl-3 text-left">
                  <p className="matchy-label-2 text-pretty text-matchy-typography-contrast">
                    {current.name}
                  </p>
                  <p className="matchy-label-3 mt-1 text-matchy-typography-contrast">
                    {current.price} · {current.size}
                  </p>
                  <a
                    href="#playground"
                    className="matchy-link matchy-link--contrast matchy-label-2 pointer-events-auto mt-2 inline-block"
                    onPointerDown={(event) => event.stopPropagation()}
                  >
                    View this item
                  </a>
                </div>
              </ProductCardFace>
            </TinderCard>
          </div>
        </DeckShell>
      ) : null}
    </section>
  )
}
