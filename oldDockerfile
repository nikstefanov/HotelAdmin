# Stage 1, based on Nginx, to have only compiled app, ready for production
FROM nginx:1.15

LABEL maintainer="nsefanov@koridor.com"

#CMD mkdir /usr/share/nginx/html/assets

COPY dist/KoridorAdmin/* /usr/share/nginx/html/

COPY dist/KoridorAdmin/assets/* /usr/share/nginx/html/assets/

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

#docker build -t my-room-ui-dev:dev --build-arg configuration=dev .
#docker run -p 8000:80 my-room-ui-dev:dev
