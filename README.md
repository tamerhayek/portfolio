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

### Useful commands

##### Clone the repository

```bash
git clone https://github.com/tamerhayek/portfolio
```

##### Pull the latest changes

```bash
git pull
```

##### Pull the latest changes with rebase

```bash
git pull --rebase
```

##### Add the changes to the staging area

```bash
git add .
```

```bash
git add <file-name>
```

##### Commit the changes

```bash
git commit -m "<commit-message>"
```

##### Push the changes

```bash
git push
```

##### Push the changes with tags

```bash
git push --follow-tags
```

##### Create a new tag

```bash
git tag v1.0.0
```

##### Create and commit a new tag

It will modify the `package.json` file and update the version.

```bash
pnpm version <version>
```

`<version>`:

- `major` -> `x+1.0.0`
- `minor` -> `x.x+1.0`
- `patch` -> `x.x.x+1`

##### Create a new branch

```bash
git switch -C <branch-name>
```

##### Create a new branch and set the upstream

```bash
git switch -C <branch-name> origin/<origin-branch-name>
```

##### Push the branch

```bash
git push --set-upstream origin <branch-name>
```

##### Merge the branch

It will merge the branch with the current branch.

```bash
git merge <branch-name> --no-ff
```

Use the `--no-ff` option to not create a fast-forward merge. It will create a normal merge.
Preferred for a better commits history.

If you want to mantain the merged branch then switch to it and run the following command:

```bash
git merge <current-branch>
```

The two branches will be up to date.

##### Stash the changes

```bash
git stash
```

##### Recover stashed changes

```bash
git stash pop
```

---

## Scripts

Make sure to install every dependency in the `package.json` before running any command.

```bash
pnpm install
```

### Development commands

##### Inlang

```bash
pnpm inlang:compile
```

##### Sveltekit commands

###### Build

```bash
pnpm build
```

###### Check

```bash
pnpm check
```

With the watch option:

```bash
pnpm check:watch
```

###### Lint

```bash
pnpm lint
```

###### Format

```bash
pnpm format
```

###### Tests

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

###### Verify

```bash
pnpm verify
```

Verify the code and run the tests.

```bash
pnpm verify:tests
```

### How to run the application

##### Development mode

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

This command will start the Docker containers building the images sequentially (one after the other).

```bash
pnpm docker:start:apps
```

Start only the `<app>` Docker image:

```bash
pnpm docker:start:<app>
```

##### Build

```bash
pnpm docker:build
```

Build only the `<app>` Docker image:

```bash
pnpm docker:build:<app>
```

##### Build without cache

```bash
pnpm docker:build:no-cache
```

##### Restart

```bash
pnpm docker:restart
```

Restart only the `<app>` Docker image:

```bash
pnpm docker:restart:<app>
```

##### Stop

```bash
pnpm docker:stop
```

Stop only the `<app>` Docker image:

```bash
pnpm docker:stop:<app>
```

##### Down

```bash
pnpm docker:down
```

Stop and remove the `<app>` Docker image:

```bash
pnpm docker:down:<app>
```

##### Logs

```bash
pnpm docker:logs
```

Logs only the `<app>` Docker image:

```bash
pnpm docker:logs:<app>
```

##### Prune

```bash
pnpm docker:prune
```
