import { useEffect, useState } from "react"

import { DocsShell, type DocsPageId } from "@/components/docs/docs-shell"
import { ColorPage } from "@/pages/foundations/color"
import { ContentPage } from "@/pages/foundations/content"
import { ElevationPage } from "@/pages/foundations/elevation"
import { IconsPage } from "@/pages/foundations/icons"
import { LogoPage } from "@/pages/foundations/logo"
import { MotionPage } from "@/pages/foundations/motion"
import { RadiiPage } from "@/pages/foundations/radii"
import { SpacingPage } from "@/pages/foundations/spacing"
import { TypographyPage } from "@/pages/foundations/typography"
import { PrinciplesPage } from "@/pages/get-started/principles"
import { WayOfWorkPage } from "@/pages/get-started/way-of-work"

const pages = {
  principles: PrinciplesPage,
  "way-of-work": WayOfWorkPage,
  color: ColorPage,
  typography: TypographyPage,
  spacing: SpacingPage,
  radii: RadiiPage,
  elevation: ElevationPage,
  motion: MotionPage,
  content: ContentPage,
  logo: LogoPage,
  icons: IconsPage,
} as const

function pageFromHash(): DocsPageId {
  const hash = window.location.hash.replace("#", "")
  if (hash in pages) {
    return hash as DocsPageId
  }
  return "principles"
}

export function App() {
  const [page, setPage] = useState<DocsPageId>(pageFromHash)

  useEffect(() => {
    const onHashChange = () => {
      setPage(pageFromHash())
    }

    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  const Page = pages[page]

  return (
    <DocsShell currentPage={page}>
      <Page />
    </DocsShell>
  )
}

export default App
