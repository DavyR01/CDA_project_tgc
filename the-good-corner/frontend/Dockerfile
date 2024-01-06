FROM node:lts-alpine

# RUN mkdir /app
WORKDIR /app

COPY public public
COPY src src
COPY .next .next
# COPY codegen.ts codegen.ts
COPY .eslintrc.json .eslintrc.json
COPY next-env.d.ts next-env.d.ts
COPY next.config.js next.config.js
COPY tsconfig.json tsconfig.json
COPY package.json package.json

RUN mkdir node_modules
RUN npm i

CMD npm run dev
# On peut inscrire cette commande dans le docker-compose qui sera prioritaire. La commande dockerfile sera écrasé par la commande dans docker-compose.

