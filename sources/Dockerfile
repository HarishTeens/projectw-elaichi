FROM node:alpine

WORKDIR /app

ENV NODE_ENV=production

COPY package.json /app

RUN npm install pm2 -g

RUN npm install --production --force

COPY . /app

CMD ["npm","run","start:prod"]
