require('dotenv').config();
const Express = require('express');
const config = require('./api/config');

const app = Express();

const server = config(app);

module.exports = server;
