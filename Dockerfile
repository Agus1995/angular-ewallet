###
### build ###
###
FROM node:8 as node

RUN mkdir /apps
WORKDIR /apps

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build -- --prod

###
### deploy to nginx ###
###
FROM nginx:1.16.0-alpine

RUN apk update && apk add bash

RUN mkdir /apps /apps/nginx /apps/nginx/logs /apps/nginx/nginx_root

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY primary-nginx.conf /etc/nginx/nginx.conf

COPY --from=node /apps/dist/FinalProject/* /apps/nginx/nginx_root/
COPY --from=node /apps/dist/FinalProject/assets /apps/nginx/nginx_root/assets

ADD start.sh /root/entrypoint.sh
RUN ["chmod", "+x", "/root/entrypoint.sh"]

EXPOSE 4200
ENTRYPOINT /root/entrypoint.sh
