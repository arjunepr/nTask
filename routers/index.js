'use strict';
const Express = require('express');
const BaseRouter = Express.Router();

// Routers
const tasksRoute = require('./tasks');


BaseRouter.get('/', (req, res) => {
  res.json({ status: 'OK' });
  LOG('You have succeeded.');
});

BaseRouter.use('/articles', tasksRoute);

module.exports = BaseRouter;