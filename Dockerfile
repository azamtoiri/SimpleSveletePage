# Stage 1: Сборка SvelteKit
FROM node:20-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["node", "server.js"]
