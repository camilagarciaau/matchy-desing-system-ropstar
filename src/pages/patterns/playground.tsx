import { useState } from "react"

import { DocsPage } from "@/components/docs/docs-page"
import { RopstarHome } from "@/components/patterns/home/ropstar-home"
import { PlaygroundRestart } from "@/components/patterns/playground-restart"
import { SwipeDeck } from "@/components/patterns/swipe-deck/swipe-deck"

export function PlaygroundPage() {
  const [homeKey, setHomeKey] = useState(0)
  const [swipeDeckKey, setSwipeDeckKey] = useState(0)

  return (
    <DocsPage
      section="Patterns"
      title="Playground"
      titleId="playground"
      description="Interactive Matchy pattern showcases."
    >
      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
        <section aria-labelledby="ropstar-home-heading" className="min-w-0">
          <h2
            id="ropstar-home-heading"
            className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Ropstar Home
          </h2>
          <p className="mt-3 text-base leading-relaxed text-pretty">
            Home navigation for browsing the catalog.
          </p>

          <div className="mt-6 w-full min-w-0 space-y-3">
            <div className="flex justify-end">
              <PlaygroundRestart
                label="Restart home"
                onRestart={() => setHomeKey((value) => value + 1)}
              />
            </div>
            <RopstarHome key={homeKey} />
          </div>
        </section>

        <section aria-labelledby="ropstar-match-heading" className="min-w-0">
          <h2
            id="ropstar-match-heading"
            className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Ropstar Match
          </h2>
          <p className="mt-3 text-base leading-relaxed text-pretty">
            Start with the swipe deck, Ropstar’s discovery flow.
          </p>

          <div className="mt-6 w-full min-w-0 space-y-3">
            <div className="flex justify-end">
              <PlaygroundRestart
                label="Restart swipe deck"
                onRestart={() => setSwipeDeckKey((value) => value + 1)}
              />
            </div>
            <SwipeDeck key={swipeDeckKey} />
          </div>
        </section>
      </div>
    </DocsPage>
  )
}
