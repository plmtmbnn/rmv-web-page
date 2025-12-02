# 1. Base image dengan Node 22 (Alpine = ringan)
FROM node:22-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json + pnpm-lock.yaml dulu untuk cache layer
COPY package.json pnpm-lock.yaml ./

# 4. Install pnpm (jika pakai pnpm)
RUN npm install -g pnpm

# 5. Install dependencies
RUN pnpm install --frozen-lockfile

# 6. Copy seluruh source code
COPY . .

# 7. Build Next.js untuk production
RUN pnpm build


########################################
# 2nd Stage → Production image
########################################
FROM node:22-alpine AS runner

WORKDIR /app

# Set NODE_ENV ke production
ENV NODE_ENV=production

# Copy files yang sudah di-build dari builder container
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# EXPOSE default Next.js port
EXPOSE 3000

# Jalankan Next.js
CMD ["pnpm", "start"]
