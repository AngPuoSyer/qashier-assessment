FROM node:16.13-alpine


WORKDIR /app


COPY package.json ./
RUN yarn install

COPY . .
RUN yarn build

CMD ["yarn", "start"]
EXPOSE 3000