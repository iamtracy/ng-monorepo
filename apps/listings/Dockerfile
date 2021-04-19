FROM node:alpine as apartment-hunter

COPY package.json ./apps

COPY decorate-angular-cli.js ./apps

COPY angular.json ./apps

RUN apk add --update nodejs nodejs-npm \
	&& apk add --no-cache bash git openssh \
	&& apk add yarn \
	&& yarn global add @angular/cli

RUN rm -rf /usr/share/nginx/html/*

RUN yarn

CMD yarn start --project=apartment-hunter --port=4201
