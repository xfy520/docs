FROM nginx:1.20.1-alpine

LABEL maintainer="longzinziyan@gmail.com"

RUN rm /etc/nginx/conf.d/default.conf /etc/nginx/nginx.conf

COPY .dist/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf
