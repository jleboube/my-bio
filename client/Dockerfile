# Updated client/Dockerfile for React (Vite or CRA) with fallback
FROM node:18-alpine AS builder
WORKDIR /app

# Install deps and build
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

# Use serve to serve static files with SPA fallback
FROM node:18-alpine AS runner
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
CMD ["serve", "-s", "dist", "-l", "3001"]
