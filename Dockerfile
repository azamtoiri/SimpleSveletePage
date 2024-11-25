# Stage 1: Сборка SvelteKit
FROM node:18 AS build

WORKDIR /app

# Устанавливаем зависимости и собираем приложение
COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview", "--host"]
