# FROM node:lts-alpine

# RUN mkdir /app
# WORKDIR /app
# COPY package*.json ./
# RUN npm i
# COPY src src

# # CMD npm start





FROM node:lts-alpine

# RUN mkdir /app
WORKDIR /app

COPY package.json package.json
RUN npm i

COPY config config
COPY good_corner.sqlite good_corner.sqlite
COPY tsconfig.json tsconfig.json
COPY src src

CMD npm start
