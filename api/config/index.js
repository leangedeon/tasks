const path 			= require('path');
const util 			= require('util');
const rootPath      = path.normalize(__dirname + '/..');
const env           = process.env.APP_ENV || 'dev';

if(!env) new Error("NODE_ENV variable should be set");

const timeoutRatio = 1;

let config    = require(__dirname + util.format('/%s.config.js', env) )(rootPath, timeoutRatio);

config.env = env;
module.exports = config;
