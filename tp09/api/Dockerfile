# The API image: NestJS, compiled once, then run with plain node.
# Debian "slim" rather than Alpine: better-sqlite3 ships a prebuilt binary for it.
FROM node:26-slim

# Prisma's migration engine needs OpenSSL.
RUN apt-get update && apt-get install -y --no-install-recommends openssl \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Dependencies first: this layer is rebuilt only when package*.json change.
# `npm ci` runs `prisma generate` (postinstall), which needs the schema.
COPY package.json package-lock.json prisma.config.ts ./
COPY prisma ./prisma
RUN npm ci

# Then the code, and the build: dist/main.js
COPY . .
RUN npm run build

ENV NODE_ENV=production
EXPOSE 3000

# At each start: apply the migrations, seed (idempotent), then serve.
CMD ["sh", "-c", "npx prisma migrate deploy && npm run db:seed && node dist/main.js"]
