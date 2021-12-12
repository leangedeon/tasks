const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const logger = require('./utils/logger');
const mongoose = require('mongoose');
const config = require('./config');

const MONGO_USER = process.env.MONGO_USER || config.mongo.user;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || config.mongo.password;
const MONGO_CLUSTER = process.env.MONGO_CLUSTER || config.mongo.cluster;
const MONGO_DB = process.env.MONGO_DB || config.mongo.db;


const mongo_uri_connect = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}/${MONGO_DB}?retryWrites=true&w=majority`;

const handleErrors = (err, req, res, next) => {
    logger.info('Error:', err);
    res.status(500).json({'error': 'An internal server error occurred'});
};

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/', indexRouter);

app.use(handleErrors);

mongoose.connect(mongo_uri_connect,
    { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }
);

mongoose.connection
    .on('connected', () => console.log('mongo connected'))
    .on('error', () => {
        throw new Error("unable to connect to database: ", mongo_uri_connect);
});

app.listen(5000, console.log('Server started http://localhost:5000/api'));