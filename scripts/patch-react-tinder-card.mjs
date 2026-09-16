import { readFileSync, writeFileSync, existsSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const target = join(root, "node_modules/react-tinder-card/index.js")

if (!existsSync(target)) {
  console.warn("[patch-react-tinder-card] package not installed; skip")
  process.exit(0)
}

const source = readFileSync(target, "utf8")
if (source.includes("Capture node for cleanup")) {
  process.exit(0)
}

const from = `      element.current.addEventListener(('touchend'), onTouchEnd)

      return () => {
        element.current.removeEventListener(('touchstart'), onTouchStart)
        element.current.removeEventListener(('touchmove'), onTouchMove)
        element.current.removeEventListener(('touchend'), onTouchEnd)
        window.removeEventListener(('mousemove'), onMouseMove)
        window.removeEventListener(('mouseup'), onMouseUp)
        element.current.removeEventListener(('mousedown'), onMouseDown)
      }
    }, [handleSwipeReleased, setSpringTarget, onSwipeRequirementFulfilled, onSwipeRequirementUnfulfilled])`

const to = `      element.current.addEventListener(('touchend'), onTouchEnd)

      // Capture node for cleanup — React 19 nulls refs before effect cleanup,
      // which otherwise skips window listener removal and stacks drag handlers.
      const node = element.current
      return () => {
        if (node) {
          node.removeEventListener(('touchstart'), onTouchStart)
          node.removeEventListener(('touchmove'), onTouchMove)
          node.removeEventListener(('touchend'), onTouchEnd)
          node.removeEventListener(('mousedown'), onMouseDown)
        }
        window.removeEventListener(('mousemove'), onMouseMove)
        window.removeEventListener(('mouseup'), onMouseUp)
      }
    }, [handleSwipeReleased, setSpringTarget, onSwipeRequirementFulfilled, onSwipeRequirementUnfulfilled])`

if (!source.includes(from)) {
  console.warn("[patch-react-tinder-card] unexpected package contents; skip")
  process.exit(0)
}

writeFileSync(target, source.replace(from, to))
console.log("[patch-react-tinder-card] applied React 19 listener cleanup fix")
