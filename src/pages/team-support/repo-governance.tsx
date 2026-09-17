import agentsMd from "../../../AGENTS.md?raw"
import changelogMd from "../../../CHANGELOG.md?raw"
import { DocsPage } from "@/components/docs/docs-page"
import { DocsImportBlock } from "@/components/docs/docs-code-preview"

function RepoFilePanel({
  path,
  content,
}: {
  path: string
  content: string
}) {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-border">
      <div className="border-b border-border bg-muted/40 px-4 py-3">
        <code className="text-sm">{path}</code>
        <p className="mt-1 text-xs text-muted-foreground">
          Live import from the repo file (<code>?raw</code>) — stays in sync when
          the source changes.
        </p>
      </div>
      <pre className="max-h-[32rem] overflow-auto bg-muted p-4 text-left text-xs leading-relaxed whitespace-pre-wrap sm:text-sm">
        <code>{content}</code>
      </pre>
    </div>
  )
}

export function RepoGovernancePage() {
  return (
    <DocsPage
      section="Team Support"
      title="Repo governance"
      titleId="repo-governance"
      description="How this design-system repo stays consistent for humans and coding agents — domain folders, agent rules, class-name lint, and a single dated history. Not a second Foundations page."
      toc={[
        { id: "domain-folders-heading", label: "Domain folders" },
        { id: "agents-md-heading", label: "AGENTS.md" },
        { id: "lint-tokens-heading", label: "lint:tokens" },
        { id: "changelog-heading", label: "CHANGELOG.md" },
      ]}
    >
      <section className="mt-10" aria-labelledby="domain-folders-heading">
        <h2
          id="domain-folders-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Domain folders
        </h2>
        <p className="mt-3 text-base leading-relaxed text-pretty">
          Each piece lives together — implementation, CSS, and docs — under{" "}
          <code>src/foundations/&lt;name&gt;/</code>,{" "}
          <code>src/components/&lt;name&gt;/</code>, or{" "}
          <code>src/patterns/&lt;name&gt;/</code>, instead of splitting by file
          type across the tree. That extends the pattern already used in{" "}
          <code>foundations/buttons/</code> and{" "}
          <code>patterns/swipe-deck/</code>. Stock shadcn primitives stay in{" "}
          <code>src/components/ui/</code> only.
        </p>
      </section>

      <section className="mt-14" aria-labelledby="agents-md-heading">
        <h2
          id="agents-md-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          AGENTS.md
        </h2>
        <p className="mt-3 text-base leading-relaxed text-pretty">
          Root conventions for coding agents (naming, docs template, reuse
          before inventing, honesty in foundations).{" "}
          <code>CLAUDE.md</code> is a one-line bridge (
          <code>@AGENTS.md</code>) so Claude Code reads the same rules.
        </p>
        <RepoFilePanel path="AGENTS.md" content={agentsMd} />
      </section>

      <section className="mt-14" aria-labelledby="lint-tokens-heading">
        <h2
          id="lint-tokens-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          lint:tokens
        </h2>
        <p className="mt-3 text-base leading-relaxed text-pretty">
          <code>npm run lint:tokens</code> scans <code>.tsx</code> /{" "}
          <code>.css</code> (skipping <code>components/ui/</code> and{" "}
          <code>docs/archive/</code>) for Matchy class-name drift: missing{" "}
          <code>matchy-</code> prefix on custom classes, tone modifiers without
          a double hyphen, and known leftovers. It replaces the manual,
          screenshot-by-screenshot naming checks from building the system.
        </p>
        <DocsImportBlock code={`npm run lint:tokens`} />
        <p className="mt-3 text-base leading-relaxed text-pretty">
          Script: <code>scripts/lint-tokens.mjs</code>
        </p>
      </section>

      <section className="mt-14" aria-labelledby="changelog-heading">
        <h2
          id="changelog-heading"
          className="scroll-mt-48 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          CHANGELOG.md
        </h2>
        <p className="mt-3 text-base leading-relaxed text-pretty">
          Dated history of significant decisions — one place, instead of loose
          audit markdown under <code>docs/</code>.
        </p>
        <RepoFilePanel path="CHANGELOG.md" content={changelogMd} />
      </section>
    </DocsPage>
  )
}
