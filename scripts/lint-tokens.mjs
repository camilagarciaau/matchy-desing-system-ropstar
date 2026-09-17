#!/usr/bin/env node
/**
 * lint:tokens — Matchy class-name conventions (see AGENTS.md).
 *
 * Flags:
 * - Legacy prefixes: swipe-deck-*, matchy-home-product*
 * - Conflicting type-scale names: matchy-button-primary / matchy-button-secondary
 * - Tone/color modifiers with a single hyphen on matchy-* classes
 *   (matchy-btn-primary → matchy-btn--primary)
 * - Hyphenated custom classes missing the matchy- prefix
 *   (Tailwind / shadcn utilities ignored)
 */

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")
const SCAN_ROOT = path.join(ROOT, "src")

const TONE_MODIFIERS = ["primary", "leather", "white", "purchase", "line"]

const VARIANT_PREFIX =
  /^(?:dark|light|sm|md|lg|xl|2xl|max-sm|max-md|max-lg|max-xl|hover|focus|focus-within|focus-visible|active|visited|disabled|checked|required|optional|valid|invalid|enabled|indeterminate|placeholder|default|open|closed|first|last|only|odd|even|first-of-type|last-of-type|motion-safe|motion-reduce|contrast-more|contrast-less|rtl|ltr|print|portrait|landscape|aria-\S+|data-\S+|group-[\w-]+|group(?:\/[\w-]+)?|peer-[\w-]+|peer(?:\/[\w-]+)?|has-\S+|not-\S+|in-\S+|supports-\S+|@[\w-]+):/

/** Exact utilities / structural tokens that are not Matchy BEM. */
const UTILITY_EXACT = new Set([
  "flex",
  "grid",
  "contents",
  "hidden",
  "block",
  "inline",
  "inline-block",
  "inline-flex",
  "inline-grid",
  "table",
  "table-cell",
  "table-row",
  "flow-root",
  "list-item",
  "sr-only",
  "not-sr-only",
  "absolute",
  "relative",
  "fixed",
  "sticky",
  "static",
  "visible",
  "invisible",
  "collapse",
  "isolate",
  "truncate",
  "uppercase",
  "lowercase",
  "capitalize",
  "normal-case",
  "italic",
  "not-italic",
  "underline",
  "overline",
  "line-through",
  "no-underline",
  "antialiased",
  "subpixel-antialiased",
  "group",
  "peer",
  "dark",
  "container",
  "grow",
  "shrink",
  "size",
])

const UTILITY_PREFIX =
  /^(?:flex|grid|inline|contents|hidden|block|table|flow|list|sr|not-sr|absolute|relative|fixed|sticky|static|visible|invisible|collapse|isolate|overflow|overscroll|truncate|text|font|leading|tracking|align|whitespace|break|wrap|hyphens|line-clamp|decoration|underline|bg|from|via|to|fill|stroke|border|divide|outline|ring|rounded|shadow|drop-shadow|opacity|mix-blend|bg-blend|blur|brightness|contrast|grayscale|invert|saturate|sepia|hue-rotate|backdrop|filter|transition|duration|ease|delay|animate|transform|scale|rotate|translate|skew|origin|cursor|select|resize|scroll|snap|touch|pointer-events|appearance|accent|caret|will-change|backface|perspective|columns|box|float|clear|object|aspect|container|prose|size|w|h|min-w|min-h|max-w|max-h|basis|grow|shrink|p|px|py|pt|pb|pl|pr|ps|pe|m|mx|my|mt|mb|ml|mr|ms|me|gap|space|inset|top|right|bottom|left|start|end|z|order|col|row|place|content|items|justify|self|underline-offset|list|caption|border-spacing|indent)-/

function isUtilityClass(token) {
  if (!token) return true
  if (token.startsWith("[") || token.includes("[")) return true
  if (UTILITY_EXACT.has(token)) return true
  if (token.includes("/")) {
    return isUtilityClass(token.split("/")[0])
  }
  if (UTILITY_PREFIX.test(token)) return true
  if (token.startsWith("-") && isUtilityClass(token.slice(1))) return true
  return false
}

function stripVariants(token) {
  let t = token.trim()
  if (!t) return ""
  while (t.startsWith("!")) t = t.slice(1)
  while (VARIANT_PREFIX.test(t)) {
    t = t.replace(VARIANT_PREFIX, "")
  }
  while (t.startsWith("!")) t = t.slice(1)
  return t
}

function checkClass(className) {
  if (!className || className.startsWith("--")) return null

  // Legacy pattern-level prefix (pre-matchy rename)
  if (className.startsWith("swipe-deck-")) {
    return 'legacy prefix "swipe-deck-*" — rename under matchy- (e.g. matchy-swipe-deck-*)'
  }

  if (className.startsWith("matchy-")) {
    if (className.startsWith("matchy-home-product")) {
      return 'leftover "matchy-home-product*" — use matchy-product-card-face* / a domain name'
    }
    if (
      className === "matchy-button-primary" ||
      className === "matchy-button-secondary"
    ) {
      return 'collides with button tone naming — type scale should not use matchy-button-*; button fills use matchy-btn--*'
    }
    for (const tone of TONE_MODIFIERS) {
      if (className.endsWith(`--${tone}`)) continue
      if (className.endsWith(`-${tone}`)) {
        return `tone/color modifier should use double hyphen (…--${tone}), found "${className}"`
      }
    }
    return null
  }

  if (isUtilityClass(className)) return null

  // Only require matchy- on hyphenated custom classes (avoids cn("cart") false positives)
  if (!className.includes("-")) return null

  return `missing matchy- prefix (custom class "${className}")`
}

function shouldSkipFile(filePath) {
  const rel = path.relative(ROOT, filePath)
  if (rel.startsWith(`node_modules${path.sep}`)) return true
  if (rel.startsWith(`docs${path.sep}archive${path.sep}`)) return true
  if (rel.startsWith(`dist${path.sep}`)) return true
  if (rel.startsWith(`src${path.sep}components${path.sep}ui${path.sep}`)) {
    return true
  }
  return false
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === "dist") continue
      walk(full, out)
    } else if (entry.isFile() && /\.(tsx|css)$/.test(entry.name)) {
      if (!shouldSkipFile(full)) out.push(full)
    }
  }
  return out
}

function addHit(hits, file, line, className, message) {
  hits.push({
    file: path.relative(ROOT, file),
    line,
    className,
    message,
  })
}

function lineOfIndex(source, index) {
  return source.slice(0, index).split("\n").length
}

function tokensFromClassString(raw) {
  const tokens = []
  for (const part of raw.split(/\s+/)) {
    const stripped = stripVariants(part)
    if (!stripped) continue
    if (stripped.includes("${") || stripped.includes("{")) continue
    if (!/^[a-zA-Z_!-]/.test(stripped) && !stripped.startsWith("[")) continue
    tokens.push(stripped)
  }
  return tokens
}

function scanTsx(file, source, hits) {
  const attrRe =
    /className\s*=\s*(?:\{\s*)?(?:cn\s*\(\s*)?([`'"])([\s\S]*?)\1/g
  let m
  while ((m = attrRe.exec(source))) {
    for (const segment of m[2].split(/\$\{[^}]*\}/)) {
      for (const tok of tokensFromClassString(segment)) {
        const msg = checkClass(tok)
        if (msg) addHit(hits, file, lineOfIndex(source, m.index), tok, msg)
      }
    }
  }

  const cnRe = /\bcn\s*\(([^)]*)\)/g
  while ((m = cnRe.exec(source))) {
    const strRe = /([`'"])([\s\S]*?)\1/g
    let s
    while ((s = strRe.exec(m[1]))) {
      // Skip single non-hyphenated literals (often enum/section ids in cn())
      const body = s[2].trim()
      if (!body.includes(" ") && !body.includes("-") && !body.startsWith("matchy-")) {
        continue
      }
      for (const segment of body.split(/\$\{[^}]*\}/)) {
        for (const tok of tokensFromClassString(segment)) {
          const msg = checkClass(tok)
          if (msg) addHit(hits, file, lineOfIndex(source, m.index), tok, msg)
        }
      }
    }
  }
}

function scanCss(file, source, hits) {
  const withoutComments = source.replace(/\/\*[\s\S]*?\*\//g, "")
  const lines = withoutComments.split("\n")
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const lineNo = i + 1
    const trimmed = line.trim()
    // Skip imports / urls — dots in paths are not class selectors
    if (trimmed.startsWith("@import") || trimmed.includes("url(")) {
      continue
    }
    const classRe = /\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)/g
    let m
    while ((m = classRe.exec(line))) {
      const name = m[1]
      if (name === "css") continue
      const msg = checkClass(name)
      if (msg) addHit(hits, file, lineNo, name, msg)
    }
  }
}

function main() {
  const files = walk(SCAN_ROOT)
  const hits = []

  for (const file of files) {
    const source = fs.readFileSync(file, "utf8")
    if (file.endsWith(".tsx")) scanTsx(file, source, hits)
    else scanCss(file, source, hits)
  }

  const seen = new Set()
  const unique = []
  for (const h of hits) {
    const key = `${h.file}:${h.line}:${h.className}:${h.message}`
    if (seen.has(key)) continue
    seen.add(key)
    unique.push(h)
  }

  unique.sort((a, b) =>
    a.file === b.file ? a.line - b.line : a.file.localeCompare(b.file)
  )

  if (unique.length === 0) {
    console.log("lint:tokens — OK (no Matchy class-name issues found)")
    process.exit(0)
  }

  console.log(`lint:tokens — ${unique.length} issue(s):\n`)
  for (const h of unique) {
    console.log(`${h.file}:${h.line}`)
    console.log(`  .${h.className}`)
    console.log(`  → ${h.message}\n`)
  }
  process.exit(1)
}

main()
