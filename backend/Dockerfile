FROM nginx:alpine
WORKDIR /beckend
COPY package.json .
RUN npm install
COPY . .
CMD [ "npm", "start" ]