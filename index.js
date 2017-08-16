const Express = require('express');
const config = require('./config');

const app = Express();

const server = config(app);