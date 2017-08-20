require('dotenv').config();
const Express = require('express');
const consign = require('consign');

const app = Express();

consign({ cwd: 'api' })
  .then('libs/globals.js')
  .then('libs/db.js')
  .then('libs/middlewares.js')
  .then('routers')
  .then('libs/boot.js')
  .into(app);

module.exports = app.server;
