# Builder
FROM node:20-alpine as installer

WORKDIR /usr/src/app

COPY package*.json .

RUN npm i --no-cache

# App
FROM node:20-alpine as app

WORKDIR /usr/src/app

COPY --chown=node:node --from=installer /usr/src/app .

COPY --chown=node:node . .

# Base
FROM node:20-alpine as base
WORKDIR /usr/src/app

COPY --chown=node:node --from=app /usr/src/app .
USER node

ENV PORT 3004

EXPOSE 3004

# Dev
FROM base as dev
ENV NODE_ENV development
CMD ["npm", "run", "dev"]

# Prod
FROM base as prod
ENV NODE_ENV production
CMD ["npm", "start"]
