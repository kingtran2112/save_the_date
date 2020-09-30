FROM nginx:stable-alpine
 COPY dist .
 COPY ./nginx/nginx.conf etc/nginx/conf.d/default.conf
 EXPOSE 80
 CMD ["nginx", "-g", "daemon off;"]