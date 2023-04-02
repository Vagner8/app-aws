FROM node:alpine
WORKDIR /frontend
COPY package.json .
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /frontend/dist/frontend /usr/share/nginx/html