FROM node:current as builder

WORKDIR /build

# Add Files
ADD . .

# Build
RUN npm install && npm run build

FROM docker.io/nginxinc/nginx-unprivileged:1-alpine

COPY --from=builder /build/dist /usr/share/nginx/html
