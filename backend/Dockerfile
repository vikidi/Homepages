FROM node:14

WORKDIR /home/app
COPY ./package*.json ./

RUN npm install --production
RUN npm install pm2 -g

COPY ./ ./