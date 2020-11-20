FROM node:14.15.1

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./