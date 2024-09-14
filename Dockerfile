ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine as base
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g npm@10.8.3

RUN npm install

RUN npm install -g @angular/cli


CMD ["ng", "serve"]
