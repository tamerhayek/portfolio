# syntax=docker/dockerfile:1.7

FROM node:24.12.0-alpine AS base
WORKDIR /app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
COPY package.json ./
RUN corepack enable && \
    corepack prepare "$(node -p "require('./package.json').packageManager")" --activate

FROM base AS deps
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=myney-pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile --ignore-scripts

FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN --mount=type=cache,id=myney-sveltekit,target=/app/.svelte-kit \
    --mount=type=cache,id=myney-vite-cache,target=/app/node_modules/.cache/vite \
    pnpm build

FROM base AS prod-deps
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=myney-pnpm-store,target=/pnpm/store \
    pnpm install --prod --frozen-lockfile --ignore-scripts

FROM node:24.12.0-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -S app && adduser -S app -G app
COPY --from=prod-deps --chown=app:app /app/node_modules ./node_modules
COPY --from=build --chown=app:app /app/build ./build
COPY --chown=app:app package.json ./
USER app
EXPOSE 3000
CMD ["node", "build"]
