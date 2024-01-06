FROM node:lts-alpine

RUN apk --no-cache add curl 
# permet d'installer le package curl sur le container docker du backend avec node alpine. 

# RUN mkdir /app
WORKDIR /app

COPY package.json package.json
RUN npm i

COPY config config
COPY good_corner.sqlite good_corner.sqlite
COPY tsconfig.json tsconfig.json
COPY src src

CMD npm start
