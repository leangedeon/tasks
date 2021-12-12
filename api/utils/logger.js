"use strict"
var winston = require('winston');

let logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new (winston.transports.Console)({format: winston.format.simple()})
    ],
    exitOnError: false,
});

module.exports = logger;