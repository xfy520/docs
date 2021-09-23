FROM nginx:1.20.1-alpine

LABEL maintainer="longzinziyan@gmail.com"

RUN rm /etc/nginx/conf.d/default.conf /etc/nginx/nginx.conf

COPY /drone/src/docs/.dist/ /usr/share/nginx/html/
COPY /drone/src/docs/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY /drone/src/docs/nginx/nginx.conf /etc/nginx/nginx.conf
