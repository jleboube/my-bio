# Stage 1: Build the React app
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies
COPY client/package*.json ./
RUN npm install

# Copy the rest of the client code and build
COPY client/ .
RUN npm run build

# Stage 2: Serve the build folder using `serve`
FROM node:18-alpine AS runner
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3001
CMD ["serve", "-s", "dist", "-l", "3001"]
