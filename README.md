# Tamer Hayek Portfolio

[Portfolio - Production](https://tamerhayek.com)

---

## Description

Tamer Hayek Website

### Web

[https://tamerhayek.com](https://tamerhayek.com)

This route is completely public. Authentication not required.

You can find the following pages:

- Homepage

## Tech stack

The application runs on a [Docker](https://www.docker.com/) container using [Docker Compose](https://www.docker.com/compose).

### Containers:

- [SvelteKit server](https://kit.svelte.dev/)
  SSR framework for Svelte. The application is entirely server-side rendered. It's very fast and efficient. It's also very easy to use and the build size is very small. It uses the Node Adapter.

### Libraries:

So this application is entirely built using [SvelteKit](https://kit.svelte.dev/) in [TypeScript](https://www.typescriptlang.org/).

The design is based on [TailwindCSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/) frameworks.

It is possible to view the website in two different languages thanks to [Inlang ParaglideJS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs).
The available languages are _english_ and _italian_ and the default one is _italian_.

- `/*` -> [Italian](https://tamerhayek.com)
- `/en/*` -> [English](https://tamerhayek.com/en)

#### Others

- [fountsource](https://github.com/fontsource/fontsource)
  Font package. In this project, the font is Open Sans.
- [tabler-icons](https://github.com/tabler/tabler-icons-svelte)
  Icons package.

---

## Git

[Source code](https://github.com/tamerhayek/portfolio)

As a collaboration tool we use [Git](https://git-scm.com) and [GitHub](https://github.com)

### Setup

#### Clone the repository

```bash
git clone https://github.com/tamerhayek/portfolio
```

#### Scripts

Make sure to install every dependency in the `package.json` before running any command.

```bash
pnpm install
```

### Development commands

#### Inlang

```bash
pnpm inlang:compile
```

#### Build

```bash
pnpm build
```

#### Check

```bash
pnpm check
```

With the watch option:

```bash
pnpm check:watch
```

#### Lint

```bash
pnpm lint
```

#### Format

```bash
pnpm format
```

#### Tests

```bash
pnpm test
```

Playwright tests:

```bash
pnpm test:integration
```

To setup playwright:

```bash
pnpm test:setup
```

Vitest tests:

```bash
pnpm test:unit
```

#### Verify

```bash
pnpm verify
```

Verify the code and run the tests.

```bash
pnpm verify:tests
```

### How to run the application

#### Development mode

```bash
pnpm dev
```

With the host option:

```bash
pnpm dev:host
```

#### Production preview mode

```bash
pnpm build
pnpm preview
```

#### Docker

##### Start

This command will start the Docker container building every images concurrently.

```bash
pnpm docker:start
```

##### Build

```bash
pnpm docker:build
```

##### Restart

```bash
pnpm docker:restart
```

##### Stop

```bash
pnpm docker:stop
```

##### Down

```bash
pnpm docker:down
```

##### Logs

```bash
pnpm docker:logs
```

##### Prune

```bash
pnpm docker:prune
```
