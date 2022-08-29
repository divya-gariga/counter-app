FROM node:16

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 3000

ENTRYPOINT ["npm", "start"]



