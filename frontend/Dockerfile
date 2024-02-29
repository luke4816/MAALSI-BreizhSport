# Builder
FROM node:20-alpine as builder

WORKDIR /usr/src/app

COPY package*.json .

RUN npm i --no-cache

COPY . .

RUN npm run build

# Dev Image
FROM node:20-alpine as dev

WORKDIR /usr/src/app
USER node

COPY --chown=node:node package*.json .

RUN npm i -no-cache

COPY --chown=node:node . .

ENV NODE_ENV development

EXPOSE 5173

CMD ["npm", "start"]

# Prod image
FROM nginx:stable-alpine as prod
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf