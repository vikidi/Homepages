FROM node:14

WORKDIR /home/app
COPY ./package*.json ./

RUN npm install --proguction
RUN npm install pm2 -g

COPY ./ ./