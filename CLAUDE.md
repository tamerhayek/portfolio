## Project Configuration

- **Language**: TypeScript
- **Package Manager**: pnpm
- **Framework**: SvelteKit 2 + Svelte 5 (runes mode forced globally in `svelte.config.js`)
- **Styling**: Pure CSS — no Tailwind, no DaisyUI
- **Fonts**: `@fontsource-variable/jetbrains-mono` + `@fontsource-variable/inter` (self-hosted, zero CDN)
- **Adapter**: `@sveltejs/adapter-node` with `prerender = true` in `+layout.ts`

---

## Architecture

### CSS design system

All styles live in `src/lib/styles/`. Entry point is `src/routes/layout.css` which contains only `@import '$lib/styles/index.css'`.

```
src/lib/styles/
  tokens.css          ← :root CSS custom properties (design tokens)
  reset.css           ← box-sizing, html/body, a, button
  layout.css          ← .wrap, section, bg textures (.dot-grid, .scanlines, .vignette), .section-head, .section-rule
  index.css           ← barrel: @import fonts, tokens, reset, layout, all component CSS
  components/
    nav.css           ← .nav, .nav-inner, .nav-brand, .nav-links, .nav-icon
    hero.css          ← .prompt, .cursor, .hero, .hero-name, .hero-role, .hero-meta, .hero-scroll
    terminal.css      ← .term, .term-bar, .term-body, .lights
    stack.css         ← .stack-grid, .stack-card, .tool-pill
    projects.css      ← .proj-grid, .proj, .proj-art, .proj-body, glitch/scan animations
    about.css         ← .about-grid, .about-stat, .about-list
    talks.css         ← .git-log, .git-row, .git-hash, .git-msg, .git-actions
    contact.css       ← .contact-term, .contact-grid, .contact-card
    footer.css        ← footer, .foot-inner
    animations.css    ← .reveal/.reveal.in, .kbd, delay classes
```

### Components (`src/lib/components/`)

All exported via `index.ts` barrel.

| Component | Description |
|-----------|-------------|
| `Navbar.svelte` | Fixed nav — brand dot + section anchor links + GitHub/LinkedIn/X icons (SVG inline) |
| `Footer.svelte` | Minimal footer with "built by hand in Rome" text |
| `Prompt.svelte` | ANSI shell prompt — `instant` prop for static display, typewriter animation otherwise. Uses `$derived(instant ? command : typed)` |
| `Hero.svelte` | Animated hero: typewriter prompt → name reveal → role cycler (state machine via `$effect`) |
| `Stack.svelte` | Tech stack grid: frontend / backend / infra categories with colored tool pills |
| `Projects.svelte` | 6 project cards with real WebP screenshots from `$lib/assets/images/projects/` |
| `About.svelte` | `about.yaml` terminal block + stat card + interests list |
| `Talks.svelte` | Git log–styled talks list |
| `Contact.svelte` | 8 social contact cards (GitHub, LinkedIn, Instagram, Threads, X, Reddit, Discord, Telegram) |

### Actions (`src/lib/actions/`)

| Action | Usage |
|--------|-------|
| `reveal` | `use:reveal={delay}` — adds `.reveal` + `.delay-N` classes, fires IntersectionObserver to add `.in` when element enters viewport. Threshold 0.12, rootMargin `0px 0px -40px 0px` |

### Routes

```
(index)/+page.svelte         ← home page — composes Hero, Stack, Projects, About, Talks, Contact
(links)/<platform>/          ← 303 redirects to social profiles
sitemap.xml/+server.ts       ← XML sitemap (all routes, lastmod 2026-05-12)
+error.svelte                ← error page
```

### Social link routes

`/github` `/linkedin` `/instagram` `/threads` `/x` `/reddit` `/discord` `/telegram`

All in `src/routes/(links)/` — each is a `+server.ts` returning `redirect(303, url)`.

---

## Svelte 5 patterns

- **Props**: `let { prop = default }: Props = $props()`
- **State**: `let x = $state(value)` for mutable reactive values
- **Derived**: `let y = $derived(expr)` when a value is computed from props — do NOT reference props directly in `$state()` initializers (Svelte warns)
- **Effects**: `$effect(() => { ...; return () => cleanup(); })` for reactive side effects
- **Lifecycle**: `onMount` for imperative setup (timers, DOM-dependent logic)
- **Actions**: `use:actionName={param}` — action function in `src/lib/actions/`
- **No `createEventDispatcher`**: use callback props (`onDone?: () => void`) instead
- **No `$:` reactive statements**: use `$derived` or `$effect`

---

## Commands

```bash
pnpm dev          # dev server
pnpm build        # production build
pnpm check        # svelte-check + tsc
pnpm lint         # eslint + prettier check
pnpm format       # prettier write
```

---

## Available Svelte MCP Tools

The Svelte MCP server is configured — use it for any Svelte/SvelteKit work.

### 1. list-sections
Use FIRST to discover documentation sections. Always call before writing Svelte code.

### 2. get-documentation
Fetch full docs for relevant sections found via `list-sections`.

### 3. svelte-autofixer
Analyze Svelte components for issues. Call before finalizing any `.svelte` file. Keep calling until no issues are returned.

### 4. playground-link
Generate a Svelte Playground link. Only after user confirmation, never when code was written to project files.
