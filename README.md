# tamerhayek.com

Personal portfolio — terminal aesthetic, self-hosted on Hetzner behind Traefik.

**Live:** [tamerhayek.com](https://tamerhayek.com)

---

## Stack

- **Framework:** SvelteKit 2 + Svelte 5 (runes mode)
- **Language:** TypeScript
- **Styling:** Pure CSS with design tokens (`src/lib/styles/`)
- **Fonts:** JetBrains Mono Variable + Inter Variable (self-hosted via `@fontsource-variable`, zero CDN)
- **Adapter:** `@sveltejs/adapter-node` (SSR + prerender)
- **Package manager:** pnpm
- **Infra:** Docker + Traefik on Hetzner

---

## Project structure

```
src/
  app.html                        # shell HTML — favicon, manifest, theme-color
  routes/
    +layout.svelte                # root layout: bg textures, Navbar, Footer, SEO meta
    +layout.ts                    # prerender = true
    layout.css                    # @import '$lib/styles/index.css'
    (index)/
      +page.svelte                # home page — composes all sections
    (links)/
      github / linkedin / instagram
      threads / x / reddit
      discord / telegram          # redirect routes → social profiles
    sitemap.xml/
      +server.ts                  # XML sitemap
  lib/
    actions/
      reveal.ts                   # IntersectionObserver action (use:reveal={delay})
    components/
      Navbar.svelte               # fixed nav with brand + section links + social icons
      Footer.svelte               # minimal footer
      Prompt.svelte               # ANSI shell prompt (instant or typewriter)
      Hero.svelte                 # animated hero: typewriter + role cycler
      Stack.svelte                # tech stack grid
      Projects.svelte             # project cards with real screenshots
      About.svelte                # about.yaml terminal + stat card
      Talks.svelte                # git log–styled talks list
      Contact.svelte              # 8 social contact cards
      index.ts                    # barrel export
    assets/
      images/
        projects/                 # WebP screenshots (portfolio, olymposhub, clarisse…)
        talks/                    # talk images
    styles/
      tokens.css                  # CSS custom properties (design tokens)
      reset.css                   # minimal reset
      layout.css                  # .wrap, section, bg textures, .section-head
      index.css                   # barrel @import (fonts → tokens → reset → components)
      components/
        nav.css / hero.css / terminal.css / stack.css
        projects.css / about.css / talks.css
        contact.css / footer.css / animations.css
static/
  avatar.webp                     # profile photo
  favicon.ico + png variants      # favicons (16, 32, 96, 180, 192px)
  manifest.json                   # PWA manifest
  browserconfig.xml               # Windows tile config
  robots.txt
```

---

## Design system

CSS custom properties defined in `src/lib/styles/tokens.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#0a0a0a` | page background |
| `--surface` | `#0f0f0f` | panels, cards, terminals |
| `--surface-2` | `#141414` | hover states, insets |
| `--border` | `#1e1e1e` | default borders |
| `--border-strong` | `#2a2a2a` | hover borders |
| `--text` | `#e2e8f0` | primary text |
| `--text-muted` | `#6b6b6b` | labels, metadata |
| `--text-dim` | `#8a8a8a` | inactive icons |
| `--primary` | `#ff3e00` | Svelte orange — CTA, accents |
| `--secondary` | `#00d97e` | terminal green — online status |
| `--color-yellow` | `#ffd60a` | warning, git hash |
| `--color-blue` | `#4dabf7` | hostname, keyword |
| `--color-magenta` | `#d886ff` | path, variable |
| `--color-red` | `#ff6b6b` | errors |
| `--font-mono` | JetBrains Mono Variable | all body text |
| `--font-sans` | Inter Variable | project descriptions |

---

## Svelte 5 patterns used

- **`$state`** — mutable reactive values (`showName`, `roleText`, `typed`)
- **`$derived`** — computed values that depend on props (`displayText = $derived(instant ? command : typed)`)
- **`$effect`** — reactive side effects with cleanup (role cycler in Hero)
- **`onMount`** — imperative lifecycle (typewriter animation in Prompt)
- **`use:reveal`** — custom Svelte action for IntersectionObserver scroll-in animations

---

## Commands

```bash
pnpm install      # install dependencies
pnpm dev          # dev server (http://localhost:5173)
pnpm build        # production build
pnpm preview      # preview production build
pnpm check        # TypeScript + Svelte type check
pnpm lint         # ESLint + Prettier check
pnpm format       # Prettier format
```

---

## Social links

Short redirect routes for all contact links:

| Route | Destination |
|-------|-------------|
| `/github` | github.com/tamerhayek |
| `/linkedin` | linkedin.com/in/tamerhayek |
| `/instagram` | instagram.com/tamerhayek |
| `/threads` | threads.com/@tamerhayek |
| `/x` | x.com/tamibyte |
| `/reddit` | reddit.com/user/tamibyte |
| `/discord` | discord.com/users/tamerhayek |
| `/telegram` | t.me/tamibyte |
