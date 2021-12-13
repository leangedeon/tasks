# Installation

- Set node 12 before start

- Execute ```npm install```to install dependencies and then run ```npm start``` to start project.

- Route [http://localhost:5000/api/tasks](http://localhost:5000/api/tasks)

### Available methods

- Get all tasks
```
curl --location --request GET 'http://localhost:5000/api/tasks/5' \
--header 'Content-Type: application/json' \
--data-raw ''
```

- Update the status of an existing task
```
curl --location --request PUT 'http://localhost:5000/api/task/189f3b8b-ff9a-4bf1-8d31-9a3c7df82d8d' \
--header 'Content-Type: application/json' \
--data-raw '{"status": "complete"}'
```


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
