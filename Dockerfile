FROM node

WORKDIR /app

COPY package*.json yarn.lock  ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["npm", "start"]