# Frontend Dockerfile

# Build stage
FROM node:18-alpine AS build
WORKDIR /app

COPY frontend/package.json frontend/package-lock.json* frontend/pnpm-lock.yaml* frontend/yarn.lock* ./
RUN npm install

COPY frontend/ ./
RUN npm run build

# Runtime stage (nginx serving static files)
FROM nginx:1.27-alpine AS runtime

# Copy built assets
COPY --from=build /app/dist /usr/share/nginx/html

# Default nginx config is fine for SPA; override if needed
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
