FROM node:latest as node
WORKDIR /beckend
COPY package*.json ./
COPY . .
RUN npm install
CMD [ "npm", "start" ]