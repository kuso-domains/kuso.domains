FROM node:14-slim as builder

WORKDIR /tmp/build
COPY package.json yarn.lock ./
RUN yarn
COPY ./ ./
RUN yarn build

FROM nginx:1.19-alpine

COPY --from=builder /tmp/build/out /usr/share/nginx/html/
