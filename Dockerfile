# Build stage
FROM node:20-alpine as build

WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist/sudoku-angular /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

