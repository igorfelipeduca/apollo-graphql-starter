FROM node:16-alpine3.16

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

ENTRYPOINT ["sh", "-c", "npm run start:build"]
