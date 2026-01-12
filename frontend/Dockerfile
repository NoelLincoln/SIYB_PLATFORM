# Frontend Dockerfile

# Build stage
FROM node:18-alpine AS build
WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm install

COPY . ./
RUN npm run build

# Runtime stage (nginx serving static files)
FROM nginx:1.27-alpine AS runtime

# Copy built assets
COPY --from=build /app/dist /usr/share/nginx/html

# Default nginx config is fine for SPA; override if needed
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
