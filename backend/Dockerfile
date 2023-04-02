FROM node:alpine
WORKDIR /beckend
COPY package.json .
RUN npm install
COPY . .
CMD [ "npm", "start" ]