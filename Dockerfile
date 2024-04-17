# Build
FROM node:20-alpine
WORKDIR /app

RUN npm install -g pnpm

COPY . .

RUN pnpm install

ARG NODE_OPTIONS

ENV NODE_OPTIONS=--max-old-space-size=4096

RUN pnpm build

CMD ["pnpm", "start"]