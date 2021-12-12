# Installation

- Set node 12 before start

- Execute ```npm install```to install dependencies and then run ```npm start``` to start proyect.

- Route [http://localhost:3000/api/tasks](http://localhost:3000/api/tasks)

### Available methods

- Get all tasks
```
curl --location --request GET 'http://localhost:3000/api/tasks/5' \
--header 'Content-Type: application/json' \
--data-raw ''
```

- Update the status of an existing task
```
curl --location --request PUT 'http://localhost:5000/api/task/189f3b8b-ff9a-4bf1-8d31-9a3c7df82d8d' \
--header 'Content-Type: application/json' \
--data-raw '{"status": "complete"}'
```