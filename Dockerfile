FROM node:12

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
ADD package.json /usr/src/app/package.json

# Install app dependencies
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000

CMD npm start