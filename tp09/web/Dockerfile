# The web image, in two stages: Node builds the static files, nginx serves them.
# Node and node_modules stay in the first stage and never reach the final image.

# Stage 1: build
FROM node:26-slim AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Vite writes this value into the JavaScript at build time. A relative URL:
# the browser calls the API on the same origin as the page, whatever it is.
ENV VITE_API_URL=/api
RUN npm run build

# Stage 2: serve
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
