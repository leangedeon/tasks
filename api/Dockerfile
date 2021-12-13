FROM node:12

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json /usr/src/app/package.json

RUN npm install --production

# Bundle app source
COPY . /usr/src/app

EXPOSE 5000
CMD cp /usr/src/app/config.json.$APP_ENV /usr/src/app/config.json; npm start;