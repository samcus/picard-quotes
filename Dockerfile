FROM node:6.9.5

RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

ADD package.json /app
RUN npm install
ADD . /app
RUN npm install -g