# Stage 0, based on Node.js, build and compile Angular
FROM node:9.11 as node

WORKDIR /app

COPY package.json /app/

RUN npm install -g @angular/cli
RUN npm install

COPY ./ /app/

ARG configuration=dev

RUN ng build #--configuration=${configuration}

# Stage 1, based on Nginx, to have only compiled app, ready for production
FROM nginx:1.15

LABEL maintainer="nsefanov@koridor.com"

COPY --from=node /app/dist/KoridorAdmin /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

#docker build -t my-room-admin-dev:dev --build-arg configuration=dev .
#docker run -p 8000:80 my-room-admin-dev:dev
