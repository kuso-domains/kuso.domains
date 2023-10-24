FROM node:17-slim as builder

WORKDIR /tmp/build
COPY package.json yarn.lock ./
RUN yarn
COPY ./ ./
RUN yarn build

FROM nginx:1.25-alpine

COPY --from=builder /tmp/build/out /usr/share/nginx/html/
