FROM node:lts AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
FROM node:lts AS production

WORKDIR /app
COPY --from=build /app/dist /app
RUN npm install --only=production
EXPOSE 4500

CMD ["npm", "start"]
