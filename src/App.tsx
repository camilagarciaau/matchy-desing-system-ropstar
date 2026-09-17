import { useEffect, useState } from "react"

import { DocsShell, type DocsPageId } from "@/components/docs/docs-shell"
import { AvatarPage } from "@/components/avatar/docs"
import { ButtonsPage } from "@/components/button/docs"
import { FiltersPage } from "@/components/filters/docs"
import { LoadingPage } from "@/components/loading/docs"
import { ProductCardPage } from "@/components/product-card/docs"
import { SaveToastPage } from "@/components/save-toast/docs"
import { StoryCardPage } from "@/components/story-card/docs"
import { ColorPage } from "@/foundations/color/docs"
import { ContentPage } from "@/foundations/content/docs"
import { ElevationPage } from "@/foundations/elevation/docs"
import { IconsPage } from "@/foundations/icons/docs"
import { LogoPage } from "@/foundations/logo/docs"
import { MotionPage } from "@/foundations/motion/docs"
import { RadiiPage } from "@/foundations/radii/docs"
import { SpacingPage } from "@/foundations/spacing/docs"
import { TypographyPage } from "@/foundations/typography/docs"
import { PrinciplesPage } from "@/pages/get-started/principles"
import { WayOfWorkPage } from "@/pages/get-started/way-of-work"
import { PlaygroundPage } from "@/patterns/playground/docs"
import { RepoGovernancePage } from "@/pages/team-support/repo-governance"

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
  "repo-governance": RepoGovernancePage,
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
