import { DocsPage } from "@/components/docs/docs-page"

const voiceTone = [
  {
    principle: "Immersive Social Discovery",
    tone:
      "Curious and inviting — browsing, stories, and discovery moments can be a little more playful",
  },
  {
    principle: "Intuitive Accessibility",
    tone:
      "Plain and direct — anything functional (navigation, forms, errors) prioritizes clarity over personality",
  },
  {
    principle: "Affordable Luxury",
    tone:
      "Confident and warm — never apologetic about price, never boastful either",
  },
  {
    principle: "Social Impact & Sustainability",
    tone:
      "Matter-of-fact — state the impact info plainly, don't moralize or oversell it",
  },
] as const

const writingRules = [
  {
    do: "Sentence case for labels, buttons, headings",
    dont: "Title Case or ALL CAPS",
  },
  {
    do: 'Direct verb + object ("List an item")',
    dont: 'Vague CTAs ("Get started", "Learn more" for a functional action)',
  },
  {
    do: "Short labels that survive translation (localized text can run 20–30% longer)",
    dont: "Long labels that will wrap or truncate once translated",
  },
  {
    do: "Plain language, written for a first-time user",
    dont: "Jargon or internal terms",
  },
  {
    do: "Bold for emphasis",
    dont: "ALL CAPS for emphasis in body copy",
  },
  {
    do: "Titles and headings with no ending period",
    dont: "A period at the end of a title or heading",
  },
] as const

const terminology = [
  { use: "Match", not: "Connection, pairing" },
  { use: "Listing", not: "Item post, product post" },
  { use: "Seller", not: "Vendor, merchant" },
  { use: "Swipe", not: "Browse mode" },
  {
    use: "Save",
    not: 'Bookmark, favorite (pick one term and keep it — "Save" for Matchy)',
  },
] as const

const commonPatterns = [
  {
    title: "Error message",
    structure: "what happened + what to do next.",
    example:
      '"That photo didn\'t upload. Try again or pick a different one."',
  },
  {
    title: "Empty state",
    structure: "what's missing + an action to fix it, framed positively.",
    example:
      '"No matches yet — swipe through a few more items to get started."',
  },
  {
    title: "Button / CTA",
    structure: "a verb + the object, no punctuation.",
    example: '"List an item" — not "List Your Item!" or "SUBMIT".',
  },
  {
    title: "Permission request",
    note: "(camera, location)",
    structure:
      "why we're asking + what it enables for the user, before the system prompt appears.",
    example:
      '"Matchy uses your camera to help you photograph items for your listing."',
  },
  {
    title: "Confirmation / success",
    structure: "confirm what happened, plainly, without over-celebrating.",
    example: '"Your listing is live." — not "Woohoo! You did it! 🎉"',
  },
] as const

export function ContentPage() {
  return (
    <DocsPage
      section="Foundations"
      title="Content"
      titleId="content"
      toc={[
        { id: "voice-tone-heading", label: "Voice & tone" },
        { id: "writing-rules-heading", label: "Writing rules" },
        { id: "formatting-heading", label: "Formatting" },
        { id: "terminology-heading", label: "Terminology" },
        { id: "common-patterns-heading", label: "Common patterns" },
        { id: "content-a11y-heading", label: "Accessibility" },
      ]}
    >
      <section className="mt-10 max-w-3xl" aria-labelledby="voice-tone-heading">
        <h2
          id="voice-tone-heading"
          className="scroll-mt-8 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Voice & tone
        </h2>
        <p className="mt-3 text-base leading-relaxed">
          Matchy&apos;s tone shifts slightly depending on which brand principle
          a moment serves:
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="sr-only">
              Tone by brand principle
            </caption>
            <thead className="bg-muted">
              <tr>
                <th className="px-3 py-3 font-semibold">Principle</th>
                <th className="px-3 py-3 font-semibold">Tone in that context</th>
              </tr>
            </thead>
            <tbody>
              {voiceTone.map((row) => (
                <tr key={row.principle} className="border-t border-border">
                  <td className="px-3 py-3 align-top font-medium">
                    {row.principle}
                  </td>
                  <td className="px-3 py-3 align-top text-pretty">{row.tone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-base leading-relaxed">
          Across all four: <strong>clear over clever</strong> (say exactly what
          happens, never a pun or a riddle),{" "}
          <strong>warm, not corporate</strong> (contractions are fine —
          &quot;didn&apos;t&quot;, &quot;you&apos;re&quot;), and{" "}
          <strong>calm under pressure</strong> (errors state the problem and
          the fix, no alarming language like &quot;Oops!&quot; or blame on the
          user). Exclamation points are reserved for celebration and discovery
          moments (&quot;Your listing is live!&quot;) — never for errors or
          instructions.
        </p>
      </section>

      <section
        className="mt-14 max-w-3xl"
        aria-labelledby="writing-rules-heading"
      >
        <h2
          id="writing-rules-heading"
          className="scroll-mt-8 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Writing rules
        </h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="sr-only">Writing do and don&apos;t rules</caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="bg-matchy-background-success px-3 py-3 font-semibold text-foreground"
                >
                  Do
                </th>
                <th
                  scope="col"
                  className="bg-matchy-background-error px-3 py-3 font-semibold text-matchy-typography-contrast"
                >
                  Don&apos;t
                </th>
              </tr>
            </thead>
            <tbody>
              {writingRules.map((row) => (
                <tr key={row.do} className="border-t border-border">
                  <td className="px-3 py-3 align-top text-pretty">{row.do}</td>
                  <td className="px-3 py-3 align-top text-pretty">{row.dont}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-base leading-relaxed">
          ALL CAPS is reserved for the Ropstar brand name itself (as it appears
          in the logo) — never for headings, buttons, labels, or any other UI
          text.
        </p>
      </section>

      <section
        className="mt-14 max-w-3xl"
        aria-labelledby="formatting-heading"
      >
        <h2
          id="formatting-heading"
          className="scroll-mt-8 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Formatting
        </h2>
        <ul className="mt-3 list-disc space-y-3 pl-5 text-base leading-relaxed">
          <li>
            <strong>Links</strong> are part of a sentence, not standalone — it
            should be clear where the link goes before the user clicks it. Bold
            the link text, with no period directly after it (e.g. &quot;Read
            the full story <strong>here</strong>&quot; not &quot;Read the full
            story <strong>here</strong>.&quot;).
          </li>
          <li>
            If a sentence ends in a link, punctuate the sentence itself, but
            keep the punctuation outside the linked phrase: &quot;We loved this
            look. <strong>See the full outfit</strong>&quot; — not &quot;
            <strong>See the full outfit</strong>.&quot;
          </li>
          <li>
            Where possible, keep links at the end of a sentence rather than in
            the middle.
          </li>
        </ul>
      </section>

      <section
        className="mt-14 max-w-3xl"
        aria-labelledby="terminology-heading"
      >
        <h2
          id="terminology-heading"
          className="scroll-mt-8 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Terminology
        </h2>
        <p className="mt-3 text-base leading-relaxed">
          Consistent product vocabulary — use the left column everywhere, never
          the right:
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="sr-only">
              Preferred terminology versus terms to avoid
            </caption>
            <thead className="bg-muted">
              <tr>
                <th className="px-3 py-3 font-semibold">Use</th>
                <th className="px-3 py-3 font-semibold">Not</th>
              </tr>
            </thead>
            <tbody>
              {terminology.map((row) => (
                <tr key={row.use} className="border-t border-border">
                  <td className="px-3 py-3 align-top font-medium">{row.use}</td>
                  <td className="px-3 py-3 align-top text-pretty">{row.not}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section
        className="mt-14 max-w-3xl"
        aria-labelledby="common-patterns-heading"
      >
        <h2
          id="common-patterns-heading"
          className="scroll-mt-8 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Common patterns
        </h2>
        <div className="mt-6 space-y-8">
          {commonPatterns.map((pattern) => (
            <div key={pattern.title}>
              <h3 className="text-lg font-semibold tracking-tight">
                {pattern.title}
                {"note" in pattern ? (
                  <span className="font-normal"> {pattern.note}</span>
                ) : null}
              </h3>
              <p className="mt-2 text-base leading-relaxed">
                Structure: {pattern.structure}
              </p>
              <p className="mt-2 text-base leading-relaxed">
                Example: {pattern.example}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="mt-14 max-w-3xl"
        aria-labelledby="content-a11y-heading"
      >
        <h2
          id="content-a11y-heading"
          className="scroll-mt-8 text-xl font-semibold tracking-tight sm:text-2xl"
        >
          Accessibility in content
        </h2>
        <ul className="mt-3 list-disc space-y-3 pl-5 text-base leading-relaxed">
          <li>
            Write real alt text for every product photo — describe the item
            (&quot;Blue denim jacket, size M&quot;), not just &quot;photo&quot;
            or the filename.
          </li>
          <li>
            Avoid directional-only instructions (&quot;tap the button on the
            right&quot;) — screen reader users can&apos;t perceive layout
            position. Refer to the label instead (&quot;tap Save&quot;).
          </li>
          <li>
            Keep sentences short and avoid nested clauses, especially in errors
            and instructions — plain language benefits everyone, not just users
            with cognitive disabilities.
          </li>
        </ul>
      </section>
    </DocsPage>
  )
}
