import { useState } from "react"

import { DocsPage } from "@/components/docs/docs-page"
import { PlaygroundRestart } from "@/components/patterns/playground-restart"
import { SwipeDeck } from "@/components/patterns/swipe-deck/swipe-deck"

export function PlaygroundPage() {
  const [swipeDeckKey, setSwipeDeckKey] = useState(0)

  return (
    <DocsPage
      section="Patterns"
      title="Playground"
      titleId="playground"
      description="Interactive Matchy pattern showcases."
    >
      <div className="mt-10 space-y-10">
        <section aria-labelledby="ropstar-match-heading">
          <h2
            id="ropstar-match-heading"
            className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Ropstar Match
          </h2>
          <p className="mt-3 text-base leading-relaxed text-pretty">
            Start with the swipe deck, Ropstar’s discovery flow.
          </p>

          <div className="mt-6 w-full max-w-md space-y-3">
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
