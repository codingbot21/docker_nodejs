FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

ENV PORT=3000
ENV MONGO_USER=admin
ENV MONGO_PASS=admin
ENV MONGO_DATABASE=products

EXPOSE 5000

CMD ["npm","start"]




