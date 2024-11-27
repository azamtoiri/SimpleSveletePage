# Stage 1: Сборка SvelteKit
FROM node:20-slim AS build

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-slim AS final

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --production

COPY --from=build build .

CMD ["node", "index.js"]

EXPOSE 3000