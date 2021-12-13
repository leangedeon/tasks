# Tasks App


React the application with the NodeJs API to list N number of dynamic tasks. Both are docked and you can start the whole project with docker-compose. An API route (GET) has to consume an external service (Names) that may or may not be active (idempotent). Connection with MongoDB to mark the tasks as solved.

## Demo

![image](https://user-images.githubusercontent.com/15823443/145906803-c9f99e33-73dd-4281-8a2d-a2cc50bc5550.png)


## Installation

- Set node 12 before start

- Execute ```npm install``` to install dependencies and then run ```npm start``` to start project.

- Route [http://localhost:3000](http://localhost:3000)

## Using docker

- Execute ```docker-fresh-start``` to run with docker.

## Using docker-compose

*This method doesnt have hot reload*
- Go to root directory and run

```bash
docker-compose build
```

And then...

```bash
docker-compose up
```

- Exposes front and server on the same ports
