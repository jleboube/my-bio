# Stage 1: Build the React app
FROM node:18-alpine AS builder
WORKDIR /app

# Install deps and build
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

# Stage 2: Serve with serve
FROM node:18-alpine AS runner
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/build ./build
EXPOSE 3001
CMD ["serve", "-s", "build", "-l", "3001"]

