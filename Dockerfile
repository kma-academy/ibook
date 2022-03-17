FROM node:16-alpine as base
# In this stage, we will setup nx workspace
# Switch to pnpm to install faster

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY ["package.json", "./"]

RUN pnpm install

COPY . .

# When we run this command, nx will build all project

RUN npx nx run-many --target=build --all

FROM node:16-alpine as build-service

ENV NODE_ENV=production

ARG SERVICE_NAME=gateway

WORKDIR /usr/src/app

# We only need to copy service build folder which we want
# It contain file build and package.json. We will run npm install
# to install only depend of this

COPY --from=base /usr/src/app/dist/apps/feature-genre ./

RUN npm install

CMD [ "node", "main.js" ]
