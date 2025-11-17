FROM node:22-bullseye AS base
WORKDIR /app
RUN apt-get update && apt-get install -y libvips && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
EXPOSE 3000

FROM base AS builder
ARG IOASYS_NPM_TOKEN
ENV IOASYS_NPM_TOKEN=$IOASYS_NPM_TOKEN
COPY . .
RUN npm ci && npm run build

FROM base AS production
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/next.config.ts ./next.config.ts

VOLUME ["/app/.next/cache"]

CMD ["npm", "start"]

FROM base AS dev
ENV NODE_ENV=development
RUN npm install --legacy-peer-deps
COPY . .
CMD ["npm", "run", "dev"]