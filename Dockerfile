FROM node:lts-slim as build
RUN apt-get update && apt-get install -y git

WORKDIR /app

COPY package*.json ./
RUN rm -rf node_modules
RUN rm -rf build
COPY . .
RUN npm install
RUN npm run build

FROM node:lts-slim as run

WORKDIR /app
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/build ./build
RUN npm install --production

EXPOSE 8080
ENTRYPOINT [ "node", "build" ]

# https://medium.com/@loic.joachim/dockerize-sveltekit-with-node-adapter-62c5dc6fc15a
# https://hamy.xyz/blog/2022-11-dockerize-sveltekit-node