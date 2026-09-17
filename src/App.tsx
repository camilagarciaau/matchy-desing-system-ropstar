import { useEffect, useState } from "react"

import { DocsShell, type DocsPageId } from "@/components/docs/docs-shell"
import { AvatarPage } from "@/pages/components/avatar"
import { ButtonsPage } from "@/pages/components/buttons"
import { FiltersPage } from "@/pages/components/filters"
import { LoadingPage } from "@/pages/components/loading"
import { ProductCardPage } from "@/pages/components/product-card"
import { SaveToastPage } from "@/pages/components/save-toast"
import { StoryCardPage } from "@/pages/components/story-card"
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
import { PlaygroundPage } from "@/pages/patterns/playground"

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
  buttons: ButtonsPage,
  filters: FiltersPage,
  "product-card": ProductCardPage,
  loading: LoadingPage,
  "story-card": StoryCardPage,
  avatar: AvatarPage,
  "save-toast": SaveToastPage,
  playground: PlaygroundPage,
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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [page])

  const Page = pages[page]

  return (
    <DocsShell currentPage={page}>
      <Page />
    </DocsShell>
  )
}

export default App
