FROM node:latest as node
WORKDIR /app
COPY . .
COPY package.json .
COPY package-lock.json .
RUN npm install -f
RUN npm run build --omit=dev

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node  /app/dist/apps/social-network /usr/share/nginx/html

