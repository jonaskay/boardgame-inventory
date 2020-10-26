FROM node:lts-alpine
WORKDIR /app
COPY ./api/package.json ./
COPY ./api/yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build
CMD ["yarn", "start:prod"]
